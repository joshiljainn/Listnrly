from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserData, CustomUser

class CheckProcessingStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            user_data = UserData.objects.get(user=user)
            return Response({
                "overall_status": user_data.overall_status,
                "current_step": user_data.current_step,
                "step_status": user_data.step_status,
                "review_count": user_data.reviews.count()  # Optional: Show progress
            })
        except UserData.DoesNotExist:
            return Response({"overall_status": "not_started"}, status=404)

class CompleteOnboardingView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        try:
            user_data = UserData.objects.get(user=user)
            user_data.overall_status = "completed"
            user_data.current_step = 3
            user_data.step_status = {
                "step1": "completed",
                "step2": "completed",
                "step1_substeps": {
                    "substep1": "completed",
                    "substep2": "completed", 
                    "substep3": "completed",
                    "substep4": "completed",
                    "substep5": "completed",
                }
            }
            user_data.save()
            return Response({"status": "completed"})
        except UserData.DoesNotExist:
            return Response({"error": "User data not found"}, status=404)

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            user_data = UserData.objects.get(user=user)
            return Response({
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "username": user.username,
                    "is_onboarded": user_data.overall_status == "completed",
                    "step_status": user_data.step_status,
                    "current_step": user_data.current_step,
                    "website_url": user.website_url,
                    "company_name": user.company_name,
                    "designation": user.designation,
                    "mobile_number": user.mobile_number,
                },
                "user_data": {
                    "overall_status": user_data.overall_status,
                    "review_count": user_data.reviews.count(),
                }
            })
        except UserData.DoesNotExist:
            return Response({
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "username": user.username,
                    "is_onboarded": False,
                    "step_status": {},
                    "current_step": 1,
                    "website_url": user.website_url,
                    "company_name": user.company_name,
                    "designation": user.designation,
                    "mobile_number": user.mobile_number,
                },
                "user_data": {
                    "overall_status": "not_started",
                    "review_count": 0,
                }
            })