import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailApiService } from '../services/mail-api.service';
// import { toLower } from 'ionicons/dist/types/components/icon/utils';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private mailApi = inject(MailApiService);
  private router = inject(Router);

  emailList: any[] = [];
  statusList: any[] = [];
  iconList: any[] = [];

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.statusList = this.mailApi.status;
    this.iconList = this.mailApi.icons;
    this.emailList = this.mailApi.getEmails(this.folder);
  }

  ngDoCheck(){
    this.emailList = this.mailApi.getEmails(this.folder);
  }

  setStatus(email:number, status:number){
    this.mailApi.setStatus(email, status);
    this.emailList = this.mailApi.getEmails(this.folder);
  }

  newMessage(){
    this.router.navigate(['/new-mail']);
  }

}
