import { Body, Controller, Get, Post } from "@nestjs/common";
import { Crud } from '@nestjsx/crud';
import { ReportsEntity } from './entities/reports.entity';
import { ReportsService } from './reports.service';
import { CreateReportDto } from "./dto/create-report.dto";

@Crud({
    model: {
        type: ReportsEntity
    }
})
@Controller('api')
export class ReportsController {

    constructor(private readonly reportsService: ReportsService) {}

    @Post('create/report')
    async createReport(@Body() createReportDto: CreateReportDto): Promise<ReportsEntity> {
        return this.reportsService.createReport(createReportDto);
    }

    @Get('reports')
    async getListOfReports(): Promise<ReportsEntity[]> {
        return this.reportsService.getListOfReports();
    }
}