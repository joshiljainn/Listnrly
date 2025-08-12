from sentence_transformers import SentenceTransformer
import os
from reviews.models import Review
from django.db import transaction
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

# Load pre-trained model
print("Loading SentenceTransformer model...")
model = SentenceTransformer('all-MiniLM-L6-v2')
print("Model loaded successfully.")

# Function to get embedding for a given review text
def get_embedding(text):
    if not text:
        return None
    # Generate the embedding - return as list for VectorField
    return model.encode(text).tolist()

# Function to process and update embeddings in batches
def generate_and_store_embeddings_batch(batch_size=100):
    try:
        # Check if there are any reviews
        total_reviews = Review.objects.count()
        print(f"Total reviews to process: {total_reviews}")
        
        if total_reviews == 0:
            print("No reviews found in database. Skipping embedding generation.")
            return
            
        # Skip reviews that already have embeddings
        pending_reviews = Review.objects.filter(embedding__isnull=True)
        total_pending = pending_reviews.count()
        print(f"Reviews pending embedding: {total_pending}")
        
        processed = 0
        failed = 0
        
        with transaction.atomic():
            for start in range(0, total_pending, batch_size):
                # Fetch a batch of reviews
                batch_reviews = pending_reviews[start:start + batch_size]
                for review in batch_reviews:
                    try:
                        # Generate embedding for each review
                        embedding = get_embedding(review.review)
                        
                        if embedding:
                            review.embedding = embedding
                            review.save()
                            processed += 1
                        else:
                            failed += 1
                            
                    except Exception as e:
                        print(f"Error processing review {review.review_id}: {e}")
                        failed += 1
                
                # Progress update
                print(f"Processed {min(start + batch_size, total_pending)}/{total_pending}")
        
        print(f"Embedding generation complete. Processed: {processed}, Failed: {failed}")
        
    except Exception as e:
        print(f"Error processing embeddings: {e}")

if __name__ == "__main__":
    print("Starting embedding generation process...")
    generate_and_store_embeddings_batch(batch_size=100)