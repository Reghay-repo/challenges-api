import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class PresignedUrlsService {
  private s3Client: S3Client;

  constructor(private config: ConfigService) {
    this.s3Client = new S3Client({
      region: this.config.get('eu-north-1'),
      credentials: {
        accessKeyId: this.config.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  async generateChallengePresignedUrl(user: User) {
    const key = 'challenges/' + user.username + Date.now() + '.mp4';
    try {
      const params = {
        Bucket: this.config.get('AWS_BUCKET_NAME'),
        Key: key,
      };
      const command = new PutObjectCommand(params);
      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: 3600,
      });
      return {
        presignedUrl: signedUrl,
      };
    } catch (err: any) {
      console.log(err);
    }
  }

  async generatePostPresignedUrl(user: User) {
    const key = 'posts/' + user.username + Date.now() + '.png';
    try {
      const params = {
        Bucket: this.config.get('AWS_BUCKET_NAME'),
        Key: key,
      };
      const command = new PutObjectCommand(params);
      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: 3600,
      });
      return {
        presignedUrl: signedUrl,
      };
    } catch (err: any) {
      console.log(err);
    }
  }
}
