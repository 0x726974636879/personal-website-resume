resource "aws_cloudfront_distribution" "website_distribution" {
  enabled     = true
  aliases     = [var.buckets.website.name]
  price_class = "PriceClass_100"

  origin {
    connection_attempts = 3
    connection_timeout  = 10
    domain_name         = "${var.buckets.website.name}.s3-website-${data.aws_region.current.name}.amazonaws.com"
    origin_id           = "${var.buckets.website.name}.s3-website-${data.aws_region.current.name}.amazonaws.com"
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/${var.acm_certificate_id}"
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.buckets.website.name}.s3-website-${data.aws_region.current.name}.amazonaws.com"

    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
  }
}