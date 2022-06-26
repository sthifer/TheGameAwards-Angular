import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss']
})
export class GamesManagementComponent implements OnInit {

  public gamesForm!: FormGroup;

  constructor(/*private formBuilder: FormBuilder, private router: Router*/) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    
  }

}
