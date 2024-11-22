<div class="mermaid">sequenceDiagram
    title ModernFarm
        participant main.js
        participant plan.js
        participant asparagus.js
        participant corn.js
        participant potato.js
        participant soybean.js
        participant sunflower.js
        participant wheat.js
    
        participant catalog.js
        participant field.js
        participant harvester.js
        participant tractor.js
        participant index.html

        note over main.js: storing HTML reference to DOM element
        main.js->plan.js: invokes createPlan
        plan.js-->main.js: returns value an array that is stored in yearlyPlan

        main.js->asparagus.js: invoke createAsparagus
        asparagus.js-->main.js: returns value, an object, that is stored in asparagusSeed

        main.js->potato.js: invoke createPotato
        potato.js-->main.js: returns value, an object, that is stored in potatoSeed

        main.js->soybean.js: invoke createSoybean
        soybean.js-->main.js: returns value, an object, that is stored in soybeanSeed

        sunflower.js--> main.js: invoke createSunflower
        sunflower.js-->main.js: returns value, an object, that is stored in sunflowerSeed

        main.js->wheat.js: invoke createWheat
        wheat.js-->main.js: returns value, an object, that is stored in wheatSeed

        main.js->corn.js: invoke createCorn
        corn.js-->main.js: returns value, an array

        main.js->field.js: invoke addPlants
        field.js-->main.js: returns value, an object 

        main.js->field.js: invoke usePlants
        field.js-->main.js: returns a copy, of the array PlantsInfield, that is stored in variable copyPlantsInField 
        main.js->tractor.js: invoke plantSeeds

        loop 
        note over tractor.js: iterate over yearlyPlan
        tractor.js->tractor.js: 
        loop 
        note over tractor.js: iterates over rows in yearlyPlan
        end
        end
        note over tractor.js: updating plantsInField array 

        main.js->harvester.js: invoke harvestPlants
        loop 
        note over harvester.js: iterates over the array plantsInField
        harvester.js->harvester.js: 
        end 
        harvester.js-->main.js: returns value, an array of the seed obj stored in harvestedPlants


        loop
        note over catalog.js: iterates over harvestedPlants 
        catalog.js->catalog.js: 

        end
        catalog.js-->main.js:  returns a string 
        note over main.js: setting DOM element = innerHTML
</div>