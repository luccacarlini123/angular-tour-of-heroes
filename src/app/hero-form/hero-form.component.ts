import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private heroService: HeroService, private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() : void{
    this.heroService.saveHero(this.formGroup.value)
      .subscribe(response => {
        window.alert("Hero successfully saved");
      },
      error => {
        window.alert(error);
      });
  }

}
