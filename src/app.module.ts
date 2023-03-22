import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { student } from './student/entities/student.entity';
import { StudentModule } from './student/student.module';
import { TestModule } from './test/test.module';
import { test } from './test/entities/test.entity';
import { DrugModule } from './drug/drug.module';
import { drug } from './drug/entities/drug.entity';
import { HistoryModule } from './history/history.module';
import { history } from './history/entities/history.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'database_loengnoktha_school',
      entities: [student,drug,test,history],
      synchronize: true,
    }),
    StudentModule,
    TestModule,
    DrugModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
