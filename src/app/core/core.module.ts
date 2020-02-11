import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        NavComponent
    ],
    providers: [
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
