#!/usr/bin/env python
import os
import sys
import django
from datetime import datetime, timedelta
import random

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from onboard.models import UserData
from reviews.models import Review

def create_sample_data():
    print("Creating sample review data...")
    
    # Get the first user data
    try:
        user_data = UserData.objects.first()
        if not user_data:
            print("No user data found. Please complete onboarding first.")
            return
    except Exception as e:
        print(f"Error getting user data: {e}")
        return
    
    # Sample data arrays
    sources = ['appstore', 'googleplay', 'reddit', 'trustpilot', 'twitter']
    sentiments = ['positive', 'negative', 'neutral']
    categories = ['UI/UX', 'Performance', 'Features', 'Customer Service', 'Pricing']
    
    # Sample review texts
    sample_reviews = [
        "Great app! The interface is intuitive and easy to use.",
        "The app crashes frequently. Needs better stability.",
        "Love the new features, especially the dark mode.",
        "Customer service was very helpful when I had an issue.",
        "The pricing is a bit high for what you get.",
        "Excellent performance, loads quickly on my device.",
        "The UI could be more modern and user-friendly.",
        "Works perfectly for my needs. Highly recommend!",
        "Too many ads, ruins the user experience.",
        "The app has improved significantly since the last update.",
        "Good functionality but the design needs work.",
        "Fast and reliable, exactly what I was looking for.",
        "The app is too complicated for beginners.",
        "Outstanding customer support team!",
        "The free version is too limited.",
        "Smooth performance and great features.",
        "The app keeps freezing on my phone.",
        "Perfect for productivity, love the integration.",
        "The interface is outdated and clunky.",
        "Great value for money, highly satisfied.",
        "The app is too slow to load.",
        "Excellent user experience and design.",
        "Needs more customization options.",
        "The app works well but could use more features.",
        "Very responsive and well-designed interface.",
        "The app crashes when I try to save data.",
        "Love the simplicity and ease of use.",
        "The pricing structure is confusing.",
        "Great app overall, minor bugs here and there.",
        "The customer service is excellent.",
        "The app is too expensive for what it offers.",
        "Perfect for my workflow, highly recommend.",
        "The interface is modern and clean.",
        "The app is reliable and fast.",
        "Too many permissions required.",
        "Excellent features and functionality.",
        "The app is buggy and needs fixes.",
        "Great performance and user experience.",
        "The design is beautiful and intuitive.",
        "The app is worth every penny.",
        "Needs better error handling.",
        "The app is essential for my daily tasks.",
        "The interface could be more intuitive.",
        "Great app with room for improvement.",
        "The app is stable and well-built.",
        "The features are exactly what I needed.",
        "The app is too complex for casual users.",
        "Excellent performance and reliability.",
        "The app needs more frequent updates.",
        "Perfect balance of features and simplicity."
    ]
    
    # Create 50 sample reviews
    for i in range(50):
        try:
            review = Review.objects.create(
                user_data=user_data,
                review_id=f'sample_{i}_{random.randint(1000, 9999)}',
                date=datetime.now() - timedelta(days=random.randint(0, 180)),
                rating=random.randint(1, 5),
                source=random.choice(sources),
                review=random.choice(sample_reviews),
                title=f'Sample Review {i+1}',
                username=f'user{random.randint(100, 999)}',
                url=f'https://example.com/review/{i}',
                language='en',
                sentiment=random.choice(sentiments),
                category=random.choice(categories)
            )
            print(f"Created review {i+1}/50: {review.review[:50]}...")
        except Exception as e:
            print(f"Error creating review {i+1}: {e}")
            continue
    
    print(f"\n✅ Successfully created sample data!")
    print(f"📊 Total reviews: {Review.objects.filter(user_data=user_data).count()}")
    print(f"🎯 Sentiment distribution:")
    for sentiment in sentiments:
        count = Review.objects.filter(user_data=user_data, sentiment=sentiment).count()
        print(f"   {sentiment.capitalize()}: {count}")
    print(f"📱 Source distribution:")
    for source in sources:
        count = Review.objects.filter(user_data=user_data, source=source).count()
        print(f"   {source.capitalize()}: {count}")

if __name__ == "__main__":
    create_sample_data()
