resource "aws_s3_bucket" "website" {
  bucket = var.buckets.website.name

  lifecycle {
    prevent_destroy = true
  }
}


resource "aws_s3_bucket_public_access_block" "website_public_access" {
  bucket                  = aws_s3_bucket.website.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website.id
  policy = jsonencode(
    {
      Statement = [
        {
          Action    = "s3:GetObject"
          Effect    = "Allow"
          Principal = "*"
          Resource  = "${aws_s3_bucket.website.arn}/*"
        },
      ]
      Version = "2012-10-17"
    }
  )
}


resource "aws_s3_bucket_website_configuration" "website_website_configuration" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }
}
