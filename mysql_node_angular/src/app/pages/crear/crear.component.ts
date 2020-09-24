import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: [''],
    role: [''],
    apellidos: [''],
    telefono: [''],
    direccion: [''],
    correo: [''],

  });
  constructor(private authSvc: AuthService, private fb: FormBuilder , private router: Router) { }
  ngOnInit(): void {
  }
  onReg(): void{
    const formValue = this.loginForm.value;
    this.authSvc.regist(formValue).subscribe((res) => {
      if (res) {
        this.router.navigate(['../auth/login']);
      }
    });
  }
}
