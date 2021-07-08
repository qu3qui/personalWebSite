import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sbcowlsite';

  ngOnInit(): void {

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        
        if(entry.isIntersecting){
          entry.target.classList.remove('hidden');
          entry.target.classList.add('fadeInRight');
        }
      });
    };
    
    let observer = new IntersectionObserver(callback, options);

    let target = document.querySelector('#observerTest');
    observer.observe(target);
  } 
}
