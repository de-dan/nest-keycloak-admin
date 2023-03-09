import { Injectable } from '@nestjs/common';
import KcAdminClient from '@keycloak/keycloak-admin-client';

@Injectable()
export class AppService {
  getHello(): string {
    new KcAdminClient();
    return 'Hello World!';
  }
}
