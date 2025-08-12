from django.core.management.base import BaseCommand
from onboard.models import UserData
from onboard.tasks import create_sample_reviews_for_source

class Command(BaseCommand):
    help = 'Fix users stuck in processing or pending status'

    def handle(self, *args, **options):
        self.stdout.write("=== Fixing Stuck Users ===")
        
        # Find users stuck in processing or pending
        stuck_users = UserData.objects.filter(
            overall_status__in=['processing', 'pending']
        )
        
        self.stdout.write(f"Found {stuck_users.count()} stuck users")
        
        for user_data in stuck_users:
            self.stdout.write(f"\nFixing user: {user_data.user.username}")
            self.stdout.write(f"Current status: {user_data.overall_status}")
            
            # Complete the user's onboarding
            user_data.overall_status = "completed"
            user_data.current_step = 3
            user_data.step_status = {
                "step1": "completed",
                "step2": "completed",
                "step1_substeps": {
                    "substep1": "completed",
                    "substep2": "completed",
                    "substep3": "completed",
                },
            }
            user_data.save()
            
            # Create sample reviews if none exist
            if user_data.reviews.count() == 0:
                self.stdout.write("Creating sample reviews...")
                create_sample_reviews_for_source(user_data, 'source1', 15)
                create_sample_reviews_for_source(user_data, 'source2', 10)
                create_sample_reviews_for_source(user_data, 'source3', 8)
                self.stdout.write(f"Created {user_data.reviews.count()} sample reviews")
            
            self.stdout.write(self.style.SUCCESS(f"✅ Fixed user {user_data.user.username}"))
        
        self.stdout.write(self.style.SUCCESS("\n=== All stuck users have been fixed ==="))
