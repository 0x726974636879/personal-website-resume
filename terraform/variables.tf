variable "aws_region" {
  type    = string
  default = "eu-west-1"
}

variable "buckets" {
  type = map(any)
}

variable "dynamodbs" {
  type = map(any)
}

variable "acm_certificate_id" {
  type = string
}