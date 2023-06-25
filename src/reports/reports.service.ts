import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import * as bcrypt from 'bcrypt';
import {ReportsEntity} from './entities/reports.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateReportDto} from "./dto/create-report.dto";

@Injectable()
export class ReportsService extends TypeOrmCrudService<ReportsEntity> {
    private readonly salt: string;

    constructor(
        @InjectRepository(ReportsEntity)
            reportsRepository: Repository<ReportsEntity>,
    ) {
        super(reportsRepository);
        this.salt = bcrypt.genSaltSync(10);
    }

    async createReport(report: CreateReportDto): Promise<ReportsEntity> {
        const newReport = new ReportsEntity();
        newReport.userAgent = report.userAgent;
        newReport.category = report.category;
        newReport.countryid = report.countryid;
        newReport.creationdate = report.creationdate;
        newReport.clientid = report.clientid;
        newReport.subcategory = report.subcategory;

        return this.repo.save(newReport);
    }

    async getListOfReports(): Promise<ReportsEntity[]> {
        return this.repo.find();
    }
}
