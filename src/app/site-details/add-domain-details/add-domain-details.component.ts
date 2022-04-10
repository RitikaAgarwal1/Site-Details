import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { domain } from 'src/app/interfaces/domain';
import { sub } from 'src/app/interfaces/subdomain';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-domain-details',
  templateUrl: './add-domain-details.component.html',
  styleUrls: ['./add-domain-details.component.scss']
})
export class AddDomainDetailsComponent implements OnInit {

  @Output() closeStatus = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();

  domain = new domain();
  subdomainDetails = new sub();
  subdomain: any[] = [];
  showPopup: boolean | undefined;

  constructor(private service: AppService) { }

  ngOnInit(){
    this.subdomain.push(this.subdomainDetails);
  }

  saveData(){
    console.log(this.subdomain);

    const domainDetail = {
      'domain': this.domain.domain,
      'usedStorage': this.domain.usedStorage,
      'monthlyVisitor': this.domain.monthlyVisitor,
      "monthlyVisitorCapacity": 10000,
      "availableDomains": 10,
      "domainTag": this.domain.domainTag,
      "status": this.domain.status,
      "usedDomains": this.domain.usedDomains,
      "planName": this.domain.planName,
      'subdomain': this.subdomain
    }

    this.service.postSiteDetails(domainDetail).subscribe(res => {
      this.refreshData.emit(true);
    });
  }

  removeField(i: any) {
    this.subdomain.splice(i,1);
  }

  addField() {
    this.subdomainDetails = new sub();
    this.subdomain.push(this.subdomainDetails);
  }

}
