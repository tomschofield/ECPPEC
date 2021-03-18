import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AngularDraggableModule } from 'ngx-draggable-resize';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatTableDataSource} from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

import { MatSidenavModule } from '@angular/material/sidenav';


import { DatePipePipe } from './date-pipe.pipe';

import { MatSelectModule } from "@angular/material/select";
// import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { VizComponent } from './viz/viz.component';
import { TeamComponent } from './team/team.component';
import { OutputsComponent } from './outputs/outputs.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { ApiComponent } from './api/api.component';
import { PollbookDialogueComponent } from './pollbook-dialogue/pollbook-dialogue.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ResizableModule } from 'angular-resizable-element';
import { WalkthroughModule } from 'ngx-walkthrough';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { WarningDialogueComponent } from './warning-dialogue/warning-dialogue.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { NgxEchartsModule } from 'ngx-echarts';
import { SandpitComponent } from './sandpit/sandpit.component';


// import { DialogElementsExampleDialog } from './app.component';

// import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
	imports: [
		// MatSliderModule,
		FormsModule,
	    ReactiveFormsModule,
		BrowserModule,
		HttpClientModule,
		MatRadioModule,
		MatSidenavModule,
		FormsModule,
		MatDialogModule,
		MatTooltipModule,
		Ng5SliderModule,
		MatPaginatorModule,
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatAutocompleteModule,
		MatIconModule,
		MatCardModule,
		MatTableModule,
		MatSelectModule,
		MatInputModule,
		AppRoutingModule,
		AngularDraggableModule,
		ResizableModule,
		WalkthroughModule,
		MatButtonToggleModule,
		GoogleMapsModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgxEchartsModule.forRoot({
			/**
			 * This will import all modules from echarts.
			 * If you only need custom modules,
			 * please refer to [Custom Build] section.
			 */
			echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
		  })
	],
	declarations: [
		AppComponent, 
		HelloComponent, 
		DatePipePipe, 
		AboutComponent, 
		VizComponent, 
		TeamComponent, 
		OutputsComponent, 
		DialogueComponent, 
		ApiComponent, 
		PollbookDialogueComponent, 
		WarningDialogueComponent, SandpitComponent
	],
	providers: [  
         
    ],
	entryComponents: [
		AppComponent, 
		DialogueComponent,
		PollbookDialogueComponent,
		WarningDialogueComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}