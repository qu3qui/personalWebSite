import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  @Input() experienceToDisplay;
  @Output() displayTalosExperienceEvent = new EventEmitter<boolean>();
  @Output() displayHeinsohnExperienceEvent = new EventEmitter<boolean>();

  mainDescription: string;
  projectsDescription: string;
  projects: string[];
  timeDescription: string;

  constructor() { }

  ngOnInit(): void {

    if(this.experienceToDisplay == 'TALOS'){
      this.mainDescription = ' He trabajado con SAP Commerce la cual es una plataforma de comercio electronico para grandes empresas, dicha plataforma usa para el backend el lenguaje Java y Spring como framework, por el lado del front hace uso de un framework llamado spartacus que esta soportado sobre Angular Framework.';
      this.projectsDescription = 'Proyectos en los cuales trabaje:';
      this.projects = ['Nikon', 'Hillrom', 'Barnes & Noble'];
      this.timeDescription = 'Tiempo en la empresa : 2 años';
    }else{
      this.mainDescription = 'Trabaje en el área de arquitectura de la compañía, la cual es una sección transversal que se dedica principalmente al asesoramiento y apoyo a proyectos, definición de arquitecturas de referencia e investigación de nuevas tecnologías.'
      this.projectsDescription = 'Durante este periodo apoyo diferentes proyectos como:';
      this.projects = ['Asopagos', 'Cartera', 'SAP Business One', 'Nomina'];
      this.timeDescription = 'Tiempo en la empresa : 2 años';
    }

  }

  close(){
    if(this.experienceToDisplay === 'TALOS'){
      this.displayTalosExperienceEvent.emit(false);
    }else{
      this.displayHeinsohnExperienceEvent.emit(false);
    }
  }

}
