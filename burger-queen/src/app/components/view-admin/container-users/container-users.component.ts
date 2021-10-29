import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.css']
})
export class ContainerUsersComponent implements OnInit {
  public dataUsersByPag:any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers(1)
  }

  loadUsers(numPag:number){
    this.apiService.getUsersAdmin(numPag).subscribe(dataUsers => {
      this.dataUsersByPag = dataUsers.sort((a,b) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
    }); 
  }

}
