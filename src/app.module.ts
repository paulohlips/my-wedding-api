import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './guest/guest.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [GuestModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
