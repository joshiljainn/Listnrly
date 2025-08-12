from django.urls import path
from .views import CheckProcessingStatusView, CompleteOnboardingView, ProfileView

urlpatterns = [
    path('check-status/', CheckProcessingStatusView.as_view(), name='check-status'),
    path('complete/', CompleteOnboardingView.as_view(), name='complete'),
    path('profile/', ProfileView.as_view(), name='profile'),
]