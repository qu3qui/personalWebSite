import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMeDetailsIsDisplayed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .firstParagraphText', 'fadeInRight', 'hidden');
    this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .nameText', 'fadeInRight', 'hidden');
    this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .secondParagraphText', 'fadeInRight', 'hidden');
  }

  displayAboutMeDetails(display: boolean): void {
    this.aboutMeDetailsIsDisplayed = display;
  }

  options = {
    root: null,
    rootMargin: '0px',
    treshold: 1.0
  }

  changeClassesBasedOnIntersectionObserver(htmlIdentifier: string, classToAdd: string, classToRemove: string) {
    let callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(classToRemove);
          entry.target.classList.add(classToAdd);
        }
      });
    }

    new IntersectionObserver(callback, this.options).observe(document.querySelector(htmlIdentifier));
  }

}
