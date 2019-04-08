import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    // get token
    let tkn = Cookie.get("lgnTkn");
    if( !tkn || tkn =='' ||  tkn == null){
      alert('user not loged in')
     this._router.navigate(['login']);
    }
  }


  // logout method
  logout(){
    Cookie.delete('lgnTkn');
    this._router.navigate(['login']);
  }

}
