/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadmDeviceComponent } from './roadm/roadm.component';
import { RoadmPortComponent } from './port/port.component';
import { HomeComponent } from './roadm/components/home/home.component';
import { TopologyComponent } from './roadm/components/topology/topology.component';
import { ApplicationComponent } from './roadm/components/application/application.component';
import { ResourceComponent } from './roadm/components/resource/resource.component';
import { AuxiliaryComponent } from './roadm/components/topology/auxiliary/auxiliary.component';
import { VirtualComponent } from './roadm/components/topology/virtual/virtual.component';
import { XinjiangComponent } from './roadm/components/topology/xinjiang/xinjiang.component';

const appRoutes: Routes = [
    {
        path: 'roadm-port-gui',
        component: RoadmPortComponent
    },
    {
        path: '',
        component: RoadmDeviceComponent,
        children:[
                     {
                         path: 'home',
                         component: HomeComponent
                     },
                     {
                         path: 'topology',
                         component: TopologyComponent,
                         children:[
                            {
                                path: 'virtual',
                                component: VirtualComponent
                            },
                            {
                                path: 'auxiliary',
                                component: AuxiliaryComponent
                            },
                            {
                                path: 'xinjiang',
                                component: XinjiangComponent
                            },
                            {
                                path: '',
                                redirectTo: 'virtual'
                            }
                         ]
                     },
                     {
                         path: 'application',
                         component: ApplicationComponent
                     },
                     {
                         path: 'resource',
                         component: ResourceComponent
                     },
                     {
                         path: '',
                         redirectTo: 'home'
                     }
        ]
    },

];

/**
 * ONOS GUI -- Roadm View Feature Routing Module - allows it to be lazy loaded
 *
 * See https://angular.io/guide/lazy-loading-ngmodules
 */
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class RoadmRoutingModule { }
