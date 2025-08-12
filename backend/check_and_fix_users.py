#!/usr/bin/env python
import os
import sys
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from onboard.models import CustomUser, UserData
from reviews.models import Review

def check_and_fix_users():
    print("=== Checking User Data ===")
    
    # Check all users
    users = CustomUser.objects.all()
    print(f"Total users: {users.count()}")
    
    for user in users:
        print(f"\nUser: {user.username} (ID: {user.id})")
        print(f"Email: {user.email}")
        print(f"Is active: {user.is_active}")
        
        try:
            user_data = UserData.objects.get(user=user)
            print(f"UserData exists: Yes")
            print(f"Website URL: {user.website_url}")
            print(f"Overall status: {user_data.overall_status}")
            print(f"Current step: {user_data.current_step}")
            print(f"Step status: {user_data.step_status}")
            print(f"Review count: {user_data.reviews.count()}")
            
            # If user is stuck in processing or pending, complete them
            if user_data.overall_status in ["processing", "pending"]:
                print(f"⚠️  User is stuck in {user_data.overall_status} - fixing...")
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
                print("✅ Fixed user status to completed")
                
                # Create sample reviews if none exist
                if user_data.reviews.count() == 0:
                    print("📝 Creating sample reviews...")
                    from onboard.tasks import create_sample_reviews_for_source
                    create_sample_reviews_for_source(user_data, 'source1', 15)
                    create_sample_reviews_for_source(user_data, 'source2', 10)
                    create_sample_reviews_for_source(user_data, 'source3', 8)
                    print(f"✅ Created {user_data.reviews.count()} sample reviews")
            
        except UserData.DoesNotExist:
            print("❌ No UserData found - creating...")
            user_data = UserData.objects.create(
                user=user,
                overall_status="completed",
                current_step=3,
                step_status={
                    "step1": "completed",
                    "step2": "completed",
                    "step1_substeps": {
                        "substep1": "completed",
                        "substep2": "completed",
                        "substep3": "completed",
                    },
                }
            )
            print("✅ Created UserData")
            
            # Create sample reviews
            print("📝 Creating sample reviews...")
            from onboard.tasks import create_sample_reviews_for_source
            create_sample_reviews_for_source(user_data, 'source1', 15)
            create_sample_reviews_for_source(user_data, 'source2', 10)
            create_sample_reviews_for_source(user_data, 'source3', 8)
            print(f"✅ Created {user_data.reviews.count()} sample reviews")

if __name__ == "__main__":
    check_and_fix_users()
