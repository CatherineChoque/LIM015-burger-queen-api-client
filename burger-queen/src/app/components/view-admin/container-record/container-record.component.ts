import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';


@Component({
  selector: 'app-container-record',
  templateUrl: './container-record.component.html',
  styleUrls: ['./container-record.component.css']
})
export class ContainerRecordComponent implements OnInit {
  public dataRecordsByPag:any = [];
  p: number = 1;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.loadRecords()
  }

  loadRecords(){
    this.apiService.getAllOrders().subscribe(dataRecords => {
      this.dataRecordsByPag = dataRecords.sort((a:any,b:any) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
      console.log(this.dataRecordsByPag);
    }); 
  }

}
