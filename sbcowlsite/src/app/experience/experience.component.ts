import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  

  talosExperienceIsDisplayed = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayTalosExperience(): void{
    this.talosExperienceIsDisplayed = true;
  }

  hideTalosExperience(): void{
    this.talosExperienceIsDisplayed = false;
  }

  getjaja(){
    return this.talosExperienceIsDisplayed ? "displayContentAnimated" : "hideContentAnimated"
  }

  addItem(event){
    this.talosExperienceIsDisplayed = event;
    console.log(this.talosExperienceIsDisplayed);
  }

}