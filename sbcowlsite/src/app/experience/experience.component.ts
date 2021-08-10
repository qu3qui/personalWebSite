import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  talosConstant = GlobalConstants.talosCompany;
  heinsohnConstant = GlobalConstants.heinsohnCompany;

  talosExperienceIsDisplayed = false;
  heinsohnExperienceIsDisplayed = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayTalosExperience(display:boolean): void{
    this.talosExperienceIsDisplayed = display;
  }

  displayHeinsohnExperience(display:boolean): void{
    this.heinsohnExperienceIsDisplayed = display;
  }

}