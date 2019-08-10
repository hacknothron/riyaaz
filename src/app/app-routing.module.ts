import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LandingComponent
  },
  {
    path: "/aboutus",
    component: AboutComponent
  },
  {
    path: "/contactus",
    component: ContactComponent
  },
  {
    path: "/event",
    component: EventsComponent
  },
  {
    path: "/faculty",
    component: FacultyComponent
  },
  
  {
    path: "/team",
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
