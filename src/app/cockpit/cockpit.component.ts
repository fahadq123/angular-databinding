import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // static true, is only needed if the serverContent value needs to be accessed in the ngOnInit otherwise not needed.
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.serverContent.nativeElement.value);
  }

  onAddServer(name: string) {
    this.serverCreated.emit({serverName: name, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(name: string) {
    this.blueprintCreated.emit({serverName: name, serverContent: this.serverContent.nativeElement.value});
  }


}
