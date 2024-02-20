# S3
resource "aws_s3_bucket" "backend_state" {
  bucket = var.buckets.locks.name

  lifecycle {
    prevent_destroy = true
  }
}


resource "aws_s3_bucket_versioning" "backend_state_versioning" {
  bucket = aws_s3_bucket.backend_state.id
  versioning_configuration {
    status = "Enabled"
  }
}


resource "aws_s3_bucket_server_side_encryption_configuration" "backend_state_serverside_encryption" {
  bucket = aws_s3_bucket.backend_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}


resource "aws_s3_bucket_public_access_block" "backend_state_public_access" {
  bucket                  = aws_s3_bucket.backend_state.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# DYNAMODB
resource "aws_dynamodb_table" "backend_state_locks" {
  name         = var.dynamodbs.locks.name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}