/// <reference path="./internal_*.d.ts" />
declare namespace com.lowdragmc.lowdraglib.side.fluid {
    class FluidStack {
        static loadFromTag(nbt: Internal.CompoundTag_): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        setFluid(fluid: Internal.Fluid_): void;
        getDisplayName(): Internal.Component;
        setTag(tag: Internal.CompoundTag_): void;
        getRawFluid(): Internal.Fluid;
        isFluidEqual(other: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        static create(stack: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, amount: number): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        copy(): this;
        static create(fluid: Internal.Fluid_, amount: number): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static empty(): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        copy(amount: number): this;
        static readFromBuf(buf: Internal.FriendlyByteBuf_): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        isFluidStackEqual(other: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        writeToBuf(buf: Internal.FriendlyByteBuf_): void;
        setAmount(amount: number): void;
        isEmpty(): boolean;
        getAmount(): number;
        shrink(amount: number): void;
        static create(fluid: Internal.Fluid_, amount: number, nbt: Internal.CompoundTag_): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        grow(amount: number): void;
        hasTag(): boolean;
        getTag(): Internal.CompoundTag;
        getFluid(): Internal.Fluid;
        saveToTag(nbt: Internal.CompoundTag_): Internal.CompoundTag;
        set fluid(fluid: Internal.Fluid_)
        get displayName(): Internal.Component
        set tag(tag: Internal.CompoundTag_)
        get rawFluid(): Internal.Fluid
        set amount(amount: number)
        get empty(): boolean
        get amount(): number
        get tag(): Internal.CompoundTag
        get fluid(): Internal.Fluid
    }
    type FluidStack_ = FluidStack;
}
declare namespace com.google.common.base {
    interface Function <F, T> extends Internal.Function<F, T> {
        abstract apply(arg0: F): T;
        compose<V>(arg0: Internal.Function_<V, F>): Internal.Function<V, T>;
        abstract equals(arg0: any): boolean;
        identity<T>(): Internal.Function<T, T>;
        andThen<V>(arg0: Internal.Function_<T, V>): Internal.Function<F, V>;
    }
    type Function_<F, T> = Function<F, T>;
}
declare namespace Internal {
    class GatherDataEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.DataGenerator_, arg2: any_, arg3: Internal.ExistingFileHelper_)
        getLookupProvider(): Internal.CompletableFuture<Internal.HolderLookup$Provider>;
        includeDev(): boolean;
        getGenerator(): Internal.DataGenerator;
        includeClient(): boolean;
        getModContainer(): Internal.ModContainer;
        getExistingFileHelper(): Internal.ExistingFileHelper;
        getInputs(): Internal.Collection<Internal.Path>;
        includeServer(): boolean;
        validate(): boolean;
        includeReports(): boolean;
        get lookupProvider(): Internal.CompletableFuture<Internal.HolderLookup$Provider>
        get generator(): Internal.DataGenerator
        get modContainer(): Internal.ModContainer
        get existingFileHelper(): Internal.ExistingFileHelper
        get inputs(): Internal.Collection<Internal.Path>
    }
    type GatherDataEvent_ = GatherDataEvent;
    class ResourcePanel extends WidgetGroup {
        constructor(editor: Internal.Editor_)
        getContainerMap(): Internal.Map<com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<any>, Internal.ResourceContainer<any, any>>;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        getEditor(): Internal.Editor;
        show(): void;
        handleDragging(dragging: any): boolean;
        hide(): void;
        getResources(): Internal.Resources;
        getChatComponent(): Internal.Component;
        loadResource(resources: Internal.Resources_, merge: boolean): void;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        canDragIn(dragging: any): boolean;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        widget(): Widget;
        name(): string;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        rebuildResource(resourceName: string): void;
        clear(): void;
        getRegisterUI(): Internal.LDLRegister;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        isShow(): boolean;
        get containerMap(): Internal.Map<com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<any>, Internal.ResourceContainer<any, any>>
        get translateKey(): string
        get editor(): Internal.Editor
        get resources(): Internal.Resources
        get chatComponent(): Internal.Component
        get LDLRegister(): boolean
        get registerUI(): Internal.LDLRegister
        get show(): boolean
        static readonly HEIGHT: 100;
    }
    type ResourcePanel_ = ResourcePanel;
    class RecipeConstructor extends Internal.Record {
        constructor(schema: Internal.RecipeSchema_, keys: Internal.RecipeKey_<any>[], factory: Internal.RecipeConstructor$Factory_)
        schema(): Internal.RecipeSchema;
        factory(): Internal.RecipeConstructor$Factory;
        keys(): Internal.RecipeKey<any>[];
    }
    type RecipeConstructor_ = RecipeConstructor;
    abstract class BaseEntityBuilder <T extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.BuilderBase<Internal.EntityType<T>> {
        constructor(i: ResourceLocation_)
        /**
         * Adds a new AnimationController to the entity, with the ability to add event listeners
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param predicate The predicate for the controller, determines if an animation should continue or not
         * @param soundListener A sound listener, used to execute actions when the json requests a sound to play. May be null
         * @param particleListener A particle listener, used to execute actions when the json requests a particle. May be null
         * @param instructionListener A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
        */
        addKeyAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseEntityBuilder$IAnimationPredicateJS_<T>, soundListener: Internal.BaseEntityBuilder$ISoundListenerJS_<T>, particleListener: Internal.BaseEntityBuilder$IParticleListenerJS_<T>, instructionListener: Internal.BaseEntityBuilder$ICustomInstructionListenerJS_<T>): this;
        /**
         * Adds an extra glowing render layer to the entity.
         * @param newGlowingGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGlowingGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
        */
        newGlowingGeoLayer(builderConsumer: Internal.Consumer_<Internal.NLGeoLayerJSBuilder<T>>): this;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
        */
        canAddPassenger(predicate: Internal.Function_<Internal.ContextUtils$EPassengerEntityContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
        */
        move(consumer: Internal.Consumer_<Internal.ContextUtils$MovementContext>): this;
        createObject(): any;
        /**
         * Sets the client tracking range. Defaults to 5.
         * 
         * @param trackingRange The client tracking range.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(8);
         * ```
        */
        clientTrackingRange(trackingRange: number): this;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onAddedToWorld(onAddedToWorldCallback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets whether the entity is attackable or not.
         * 
         * @param isAttackable Boolean value indicating whether the entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(true);
         * ```
        */
        isAttackable(b: boolean): this;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onSprint(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
        */
        nextStep(nextStep: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a function to determine the animation resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the animations based on information about the entity.
         * The default behavior returns <namespace>:animations/<path>.animation.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.animationResource(entity => {
         *     // Define logic to determine the animation resource for the entity
         *     // Use information about the entity provided by the context.
         *     //return some ResourceLocation representing the animation resource;
         *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
         * });
         * ```
        */
        animationResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
        */
        lerpTo(consumer: Internal.Consumer_<Internal.ContextUtils$LerpToContext>): this;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
        */
        thunderHit(consumer: Internal.Consumer_<Internal.ContextUtils$EThunderHitContext>): this;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
        */
        positionRider(builderConsumer: Internal.Consumer_<Internal.ContextUtils$PositionRiderContext>): this;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
        */
        isFreezing(isFreezing: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        rideTick(callback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        setMaxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
        */
        isCurrentlyGlowing(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
        */
        repositionEntityAfterLoad(customRepositionEntityAfterLoad: boolean): this;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
        */
        canChangeDimensions(supplier: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
        */
        shouldRenderAtSqrDistance(func: Internal.Function_<Internal.ContextUtils$EntitySqrDistanceContext, any>): this;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
        */
        playerTouch(consumer: Internal.Consumer_<Internal.ContextUtils$EntityPlayerContext>): this;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
        */
        canCollideWith(canCollideWith: Internal.Function_<Internal.ContextUtils$ECollidingEntityContext, any>): this;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
        */
        isPushable(b: boolean): this;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity. Defaults to 0.5.
         * @param height The height of the entity. Defaults to 0.5.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(1.0f, 1.5f);
         * ```
        */
        sized(width: number, height: number): this;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
        */
        immuneTo(...blockNames: string[]): this;
        /**
         * Adds an animation controller to the entity with the specified parameters.
         * 
         * @param name The name of the animation controller.
         * @param translationTicksLength The length of translation ticks for the animation.
         * @param predicate The animation predicate defining the conditions for the animation to be played.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.addAnimationController('exampleController', 5, event => {
         *     // Define conditions for the animation to be played based on the entity.
         *     if (event.entity.hurtTime > 0) {
         *         event.thenLoop('spawn');
         *     } else {
         *         event.thenPlayAndHold('idle');
         *     }
         *     return true; // Some boolean condition indicating if the animation should be played;
         * });
         * ```
        */
        addAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseEntityBuilder$IAnimationPredicateJS_<T>): this;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        setSwimSound(sound: any): this;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onRemovedFromWorld(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
        */
        modelSize(scaleHeight: number, scaleWidth: number): this;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
        */
        dampensVibrations(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
        */
        addTriggerableAnimationController(name: string, translationTicksLength: number, triggerableAnimationName: string, triggerableAnimationID: string, loopType: string): this;
        /**
         * Adds an extra render layer to the entity.
         * @param newGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
        */
        newGeoLayer(builderConsumer: Internal.Consumer_<Internal.NLGeoLayerJSBuilder<T>>): this;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
        */
        saves(shouldSave: boolean): this;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
        */
        canTrample(predicate: Internal.Function_<Internal.ContextUtils$ECanTrampleContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        lavaHurt(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
        */
        fireImmune(isFireImmune: boolean): this;
        /**
         * Boolean determining if the entity's model visually faces the direction it's currently headed.
         * Saves manual implementation of this assumed behavior from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setFacesTrajectory(false)
         * ```
        */
        setFacesTrajectory(facesTrajectory: boolean): this;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
        */
        isFlapping(b: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
        */
        canSpawnFarFromPlayer(canSpawnFar: boolean): this;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onStopRiding(callback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
        */
        isInvulnerableTo(predicate: Internal.Function_<Internal.ContextUtils$EDamageContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onFlap(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
        */
        tick(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onClientRemoval(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a function to determine the model resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the model based on information about the entity.
         * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelResource(entity => {
         *     // Define logic to determine the model resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
         * });
         * ```
        */
        modelResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        setSwimSplashSound(sound: any): this;
        /**
         * Determines if the entity's hitbox collides with other entities the same as a solic block.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.canBeCollidedWith(entity => {
         *         return true
         *     });
         *     ```
        */
        canBeCollidedWith(canBeCollidedWith: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the mob category for the entity.
         * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
         * Defaults to 'misc'.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobCategory('monster');
         * ```
        */
        mobCategory(category: string): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        setBlockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     context.poseStack.scale(0.5, 0.5, 0.5);
         * });
         * ```
        */
        render(render: Internal.Consumer_<Internal.ContextUtils$NLRenderContext<T>>): this;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        setSummonable(b: boolean): this;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     poseStack.scale(0.5, 0.5, 0.5)
         * });
         * ```
        */
        scaleModelForRender(scaleModelForRender: Internal.Consumer_<Internal.ContextUtils$ScaleModelRenderContextNL<T>>): this;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
        */
        onFall(c: Internal.Consumer_<Internal.ContextUtils$EEntityFallDamageContext>): this;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
        */
        showVehicleHealth(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the update interval in ticks of the entity.
         * Defaults to 1 tick.
         * 
         * @param updateInterval The update interval in ticks.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(5);
         * ```
        */
        updateInterval(updateInterval: number): this;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
        */
        blockSpeedFactor(callback: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
        */
        isAttackable(predicate: boolean): this;
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        setRenderType(type: any): this;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        canFreeze(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
        */
        renderType(type: Internal.Function_<T, Internal.RenderType>): this;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
        */
        mayInteract(predicate: Internal.Function_<Internal.ContextUtils$EMayInteractContext, any>): this;
        /**
         * Boolean determining if the part entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPickable(true)
         * ```
        */
        isPickable(isPickable: boolean): this;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        set maxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        set swimSound(sound: any)
        /**
         * Boolean determining if the entity's model visually faces the direction it's currently headed.
         * Saves manual implementation of this assumed behavior from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setFacesTrajectory(false)
         * ```
        */
        set facesTrajectory(facesTrajectory: boolean)
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        set swimSplashSound(sound: any)
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        set blockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        set summonable(b: boolean)
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        set renderType(type: any)
        readonly layerList: Internal.List<Internal.NLGeoLayerJSBuilder<T>>;
        static readonly thisList: [];
        readonly glowingLayerList: Internal.List<Internal.NLGeoLayerJSBuilder<T>>;
    }
    type BaseEntityBuilder_<T extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder<T>;
    class LootNbtProviderType extends Internal.SerializerType<any> {
        constructor(arg0: Internal.Serializer_<any>)
    }
    type LootNbtProviderType_ = Special.LootNbtProviderType | LootNbtProviderType;
    class FrostfallSwordItem extends Internal.UniqueSwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, settings: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static scalesWithSpellPower: false;
    }
    type FrostfallSwordItem_ = FrostfallSwordItem;
    interface StringSplitter$LinePosConsumer {
        abstract accept(arg0: Internal.Style_, arg1: number, arg2: number): void;
        (arg0: Internal.Style, arg1: number, arg2: number): void;
    }
    type StringSplitter$LinePosConsumer_ = StringSplitter$LinePosConsumer;
    interface Aquifer {
        create(arg0: Internal.NoiseChunk_, arg1: Internal.ChunkPos_, arg2: Internal.NoiseRouter_, arg3: Internal.PositionalRandomFactory_, arg4: number, arg5: number, arg6: Internal.Aquifer$FluidPicker_): this;
        createDisabled(arg0: Internal.Aquifer$FluidPicker_): this;
        abstract computeSubstance(arg0: Internal.DensityFunction$FunctionContext_, arg1: number): Internal.BlockState;
        abstract shouldScheduleFluidUpdate(): boolean;
    }
    type Aquifer_ = Aquifer;
    class SerializationAttribute$Marker extends Internal.SerializationAttribute implements Internal.SerializationAttribute$Instance {
        attribute(): Internal.SerializationAttribute;
        value(): any;
    }
    type SerializationAttribute$Marker_ = SerializationAttribute$Marker;
    interface SignatureUpdater {
        abstract update(arg0: Internal.SignatureUpdater$Output_): void;
        (arg0: Internal.SignatureUpdater$Output): void;
    }
    type SignatureUpdater_ = SignatureUpdater;
    interface ILifecycleEvent <R extends Internal.ILifecycleEvent<any>> {
        concrete(): R;
    }
    type ILifecycleEvent_<R extends Internal.ILifecycleEvent<any>> = ILifecycleEvent<R>;
    class ChaosSpawnerBarrierVertexBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static placeBarrier(arg0: Internal.Level_, arg1: BlockPos_, arg2: number): void;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly BARRIER_VERTEX: Internal.EnumProperty<Internal.BarrierVertexs>;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type ChaosSpawnerBarrierVertexBlock_ = ChaosSpawnerBarrierVertexBlock;
    class WorldBorder$Settings {
        constructor(arg0: Internal.WorldBorder_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        getDamagePerBlock(): number;
        getWarningBlocks(): number;
        getSizeLerpTarget(): number;
        static read(arg0: Internal.DynamicLike_<any>, arg1: Internal.WorldBorder$Settings_): Internal.WorldBorder$Settings;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getWarningTime(): number;
        getSize(): number;
        write(arg0: Internal.CompoundTag_): void;
        getCenterZ(): number;
        getCenterX(): number;
        get damagePerBlock(): number
        get warningBlocks(): number
        get sizeLerpTarget(): number
        get safeZone(): number
        get sizeLerpTime(): number
        get warningTime(): number
        get size(): number
        get centerZ(): number
        get centerX(): number
    }
    type WorldBorder$Settings_ = WorldBorder$Settings;
    /**
     * @deprecated
    */
    interface RenderAttachedBlockView extends Internal.BlockAndTintGetter {
        abstract getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        abstract getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        canSeeSky(arg0: BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getMinBuildHeight(): number;
        getSectionsCount(): number;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type RenderAttachedBlockView_ = RenderAttachedBlockView;
    class NetheriteMageArmorItem extends Internal.ImbuableChestplateArmorItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getTick(arg0: any): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        isPerspectiveAware(): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getId(arg0: Internal.ItemStack_): number;
        setArmorToughness(armorToughness: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getDamage(arg0: Internal.ItemStack_): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get perspectiveAware(): boolean
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get boneResetTime(): number
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type NetheriteMageArmorItem_ = NetheriteMageArmorItem;
    class ResourceCondition extends Internal.EntityCondition<Internal.ResourceComparisonConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        check(arg0: Internal.ResourceComparisonConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ResourceCondition_ = ResourceCondition;
    class MinBaseModifierOperation extends Internal.ModifierOperation {
        constructor()
    }
    type MinBaseModifierOperation_ = MinBaseModifierOperation;
    class AtlasPBRLoader$PBRTextureAtlasSprite extends Internal.TextureAtlasSprite {
        getBaseSprite(): Internal.TextureAtlasSprite;
        get baseSprite(): Internal.TextureAtlasSprite
    }
    type AtlasPBRLoader$PBRTextureAtlasSprite_ = AtlasPBRLoader$PBRTextureAtlasSprite;
    interface JsonSerializable {
        abstract toJson(): Internal.JsonElement;
        (): Internal.JsonElement_;
    }
    type JsonSerializable_ = JsonSerializable;
    class AxisAlignedLinearPosTest extends Internal.PosRuleTest {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Direction$Axis_)
        static readonly CODEC: Internal.Codec<Internal.AxisAlignedLinearPosTest>;
    }
    type AxisAlignedLinearPosTest_ = AxisAlignedLinearPosTest;
    class ConstantFloat extends Internal.FloatProvider {
        static of(arg0: number): Internal.ConstantFloat;
        getValue(): number;
        get value(): number
        static readonly ZERO: Internal.ConstantFloat;
        static readonly CODEC: Internal.Codec<Internal.ConstantFloat>;
    }
    type ConstantFloat_ = ConstantFloat;
    abstract class CompressorHolder implements Internal.Compressable {
        constructor()
        compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
    }
    type CompressorHolder_ = CompressorHolder;
    interface MetadataSectionSerializer <T> {
        abstract getMetadataSectionName(): string;
        abstract fromJson(arg0: Internal.JsonObject_): T;
        get metadataSectionName(): string
    }
    type MetadataSectionSerializer_<T> = MetadataSectionSerializer<T>;
    class AddReloadListenerEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ReloadableServerResources_, arg1: Internal.RegistryAccess_)
        getRegistryAccess(): Internal.RegistryAccess;
        getListeners(): Internal.List<Internal.PreparableReloadListener>;
        getServerResources(): Internal.ReloadableServerResources;
        getConditionContext(): Internal.ICondition$IContext;
        addListener(arg0: Internal.PreparableReloadListener_): void;
        get registryAccess(): Internal.RegistryAccess
        get listeners(): Internal.List<Internal.PreparableReloadListener>
        get serverResources(): Internal.ReloadableServerResources
        get conditionContext(): Internal.ICondition$IContext
    }
    type AddReloadListenerEvent_ = AddReloadListenerEvent;
    interface OpticFinder <FT> {
        abstract type(): com.mojang.datafixers.types.Type<FT>;
        inField<GT>(arg0: string, arg1: com.mojang.datafixers.types.Type_<GT>): this;
        abstract findType<A, FR>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findType<A>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FT>, Internal.Type$FieldNotFoundException>;
    }
    type OpticFinder_<FT> = OpticFinder<FT>;
    class RangedAttribute extends Internal.Attribute {
        constructor(arg0: string, arg1: number, arg2: number, arg3: number)
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        static toComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        getDebugInfo(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.Component;
        addBonusTooltips(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.Component>, arg2: Internal.TooltipFlag_): void;
        getMaxValue(): number;
        static isNullOrAddition(arg0: Internal.AttributeModifier$Operation_): boolean;
        getBaseUUID(): Internal.UUID;
        toValueComponent(arg0: Internal.AttributeModifier$Operation_, arg1: number, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        static toValueComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier$Operation_, arg2: number, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        static toBaseComponent(arg0: Internal.Attribute_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.TooltipFlag_): Internal.MutableComponent;
        getMinValue(): number;
        toComponent(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.MutableComponent;
        getBonusBaseValue(arg0: Internal.ItemStack_): number;
        ths(): Internal.Attribute;
        get maxValue(): number
        get baseUUID(): Internal.UUID
        get minValue(): number
    }
    type RangedAttribute_ = RangedAttribute;
    class PowerType <T extends Internal.Power> {
        constructor(arg0: ResourceLocation_, arg1: Internal.PowerFactory$Instance_<>)
        constructor(arg0: Internal.ConfiguredPower_<any, any>)
        setTranslationKeys(arg0: string, arg1: string): void;
        getName(): Internal.Component;
        get(arg0: Internal.Entity_): T;
        getFactory(): Internal.PowerFactory$Instance<>;
        isHidden(): boolean;
        isActive(arg0: Internal.Entity_): boolean;
        getConfiguredPower(): Internal.ConfiguredPower<any, any>;
        create(arg0: Internal.LivingEntity_): T;
        getOrCreateDescriptionTranslationKey(): string;
        getIdentifier(): ResourceLocation;
        setHidden(): this;
        getOrCreateNameTranslationKey(): string;
        getDescription(): Internal.Component;
        get name(): Internal.Component
        get factory(): Internal.PowerFactory$Instance<>
        get hidden(): boolean
        get configuredPower(): Internal.ConfiguredPower<any, any>
        get orCreateDescriptionTranslationKey(): string
        get identifier(): ResourceLocation
        get orCreateNameTranslationKey(): string
        get description(): Internal.Component
    }
    type PowerType_<T extends Internal.Power> = PowerType<T>;
    interface VertexBufferWriter {
        tryOf(arg0: Internal.VertexConsumer_): this;
        canUseIntrinsics(): boolean;
        abstract push(arg0: Internal.MemoryStack_, arg1: number, arg2: number, arg3: Internal.VertexFormatDescription_): void;
        copyInto(arg0: Internal.VertexBufferWriter_, arg1: Internal.MemoryStack_, arg2: number, arg3: number, arg4: Internal.VertexFormatDescription_): void;
        of(arg0: Internal.VertexConsumer_): this;
        /**
         * @deprecated
        */
        isFullWriter(): boolean;
        /**
         * @deprecated
        */
        get fullWriter(): boolean
        (arg0: Internal.MemoryStack, arg1: number, arg2: number, arg3: Internal.VertexFormatDescription): void;
    }
    type VertexBufferWriter_ = VertexBufferWriter;
    class FillBucketEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.HitResult_)
        getLevel(): Internal.Level;
        getTarget(): Internal.HitResult;
        setFilledBucket(arg0: Internal.ItemStack_): void;
        getFilledBucket(): Internal.ItemStack;
        getEmptyBucket(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        get level(): Internal.Level
        get target(): Internal.HitResult
        set filledBucket(arg0: Internal.ItemStack_)
        get filledBucket(): Internal.ItemStack
        get emptyBucket(): Internal.ItemStack
        get entity(): Internal.LivingEntity
    }
    type FillBucketEvent_ = FillBucketEvent;
    class PillarCapBlock extends Internal.DirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type PillarCapBlock_ = PillarCapBlock;
    class AbyssmarineStairBlock extends Internal.StairBlock implements Internal.ActivatedByAltar {
        constructor(arg0: Internal.Supplier_<Internal.BlockState>, arg1: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        updateDistanceShape(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        static getDistanceAt(arg0: Internal.BlockState_): number;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        updateDistance(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        activeDistance(arg0: Internal.BlockState_): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        activeDistance(arg0: number): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type AbyssmarineStairBlock_ = AbyssmarineStairBlock;
    interface IStreamConfiguration <T> extends Internal.IDynamicFeatureConfiguration {
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        abstract entries(): Internal.List<T>;
        holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        (): Internal.List_<T>;
    }
    type IStreamConfiguration_<T> = IStreamConfiguration<T>;
    class BlockGeometryBakingContext$VisibilityData {
        constructor()
        hasCustomVisibility(arg0: string): boolean;
        copyFrom(arg0: Internal.BlockGeometryBakingContext$VisibilityData_): void;
        isVisible(arg0: string, arg1: boolean): boolean;
        setVisibilityState(arg0: string, arg1: boolean): void;
    }
    type BlockGeometryBakingContext$VisibilityData_ = BlockGeometryBakingContext$VisibilityData;
    class SeaPickleFeature extends Internal.Feature<Internal.CountConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.CountConfiguration>)
    }
    type SeaPickleFeature_ = SeaPickleFeature;
    class PlatformWrapper$ModInfo {
        constructor(i: string)
        getCustomName(): string;
        setName(n: string): void;
        getName(): string;
        getVersion(): string;
        getId(): string;
        get customName(): string
        set name(n: string)
        get name(): string
        get version(): string
        get id(): string
    }
    type PlatformWrapper$ModInfo_ = PlatformWrapper$ModInfo;
    abstract class EntityAction <T extends Internal.IDynamicFeatureConfiguration> implements Internal.IFactory<T, Internal.ConfiguredEntityAction<T, any>, Internal.EntityAction<T>> {
        configure(arg0: T): Internal.ConfiguredEntityAction<T, any>;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        getCodec(): Internal.Codec<Internal.ConfiguredEntityAction<T, any>>;
        abstract execute(arg0: T, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        get codec(): Internal.Codec<Internal.ConfiguredEntityAction<T, any>>
        static readonly CODEC: Internal.Codec<Internal.EntityAction<any>>;
    }
    type EntityAction_<T extends Internal.IDynamicFeatureConfiguration> = EntityAction<T> | Special.EntityAction;
    class ChestBlock extends Internal.AbstractChestBlock<Internal.ChestBlockEntity> implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.BlockEntityType<Internal.ChestBlockEntity>>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static getBlockType(arg0: Internal.BlockState_): Internal.DoubleBlockCombiner$BlockType;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        static getContainer(arg0: Internal.ChestBlock_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_, arg4: boolean): Internal.Container;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        blockEntityType(): Internal.BlockEntityType<Internal.ChestBlockEntity>;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isChestBlockedAt(arg0: Internal.LevelAccessor_, arg1: BlockPos_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static opennessCombiner(arg0: Internal.LidBlockEntity_): Internal.DoubleBlockCombiner$Combiner<Internal.ChestBlockEntity, Internal.Float2FloatFunction>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getOpenChestStat(): Internal.Stat<ResourceLocation>;
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get openChestStat(): Internal.Stat<ResourceLocation>
        static readonly EVENT_SET_OPEN_COUNT: 1;
        static readonly NORTH_AABB: Internal.ArrayVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly SOUTH_AABB: Internal.ArrayVoxelShape;
        static readonly TYPE: Internal.EnumProperty<Internal.ChestType>;
        static readonly EAST_AABB: Internal.ArrayVoxelShape;
        static readonly FACING: Internal.DirectionProperty;
        static readonly WEST_AABB: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 1;
        static readonly AABB_HEIGHT: 14;
        static readonly AABB: Internal.ArrayVoxelShape;
    }
    type ChestBlock_ = ChestBlock;
    class EntityPredicateBuilder implements Internal.EntitySetter {
        constructor()
        /**
         * Test properties of the block the entity is standing on, using a location predicate.
        */
        setSteppingOn(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>): void;
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        setVehicleByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * To test entity properties that can only be applied to certain entity types.
         * 
         * Supersedes lightning_bolt, player, fishing_hook, cat, etc.
        */
        setTypeSpecific(arg0: Internal.EntityPredicateBuilder$TypeSpecific_): void;
        /**
         * To test flags of the entity.
        */
        setFlagsByPredicate(arg0: Internal.EntityFlagsPredicate_): void;
        /**
         * Test properties of this entity's location.
        */
        setLocationByPredicate(arg0: Internal.LocationPredicate_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * Test NBT data of this entity.
        */
        setNbt(arg0: Internal.CompoundTag_): void;
        /**
         * Test properties of this entity's location.
        */
        setLocation(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>): void;
        /**
         * Passes if the team of this entity matches this string.
        */
        setTeam(arg0: string): void;
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        setVehicle(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * Accept entity's tag.
        */
        setTag(arg0: ResourceLocation_): void;
        /**
         * To test flags of the entity.
        */
        setFlags(arg0: Internal.Consumer_<Internal.EntityFlagsPredicateBuilder>): void;
        /**
         * Test this entity's type.
        */
        setTypeByPredicate(arg0: Internal.EntityTypePredicate_): void;
        /**
         * Accept entity's id.
        */
        of(arg0: Internal.EntityType_<any>): void;
        /**
         * Test this entity's type.
        */
        setType(arg0: Internal.Consumer_<Internal.EntityTypePredicateBuilder>): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        setTargetedEntityByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * Test the entity directly riding this entity.
        */
        setPassengerByType(arg0: Internal.EntityType_<any>): void;
        /**
         * To test the distance to the entity this predicate is invoked upon.
         * 
         * Passes if the calculated distance is between the entered min and max, inclusive.
        */
        setDistance(arg0: Internal.Consumer_<Internal.DistancePredicateBuilder>): void;
        /**
         * To test the distance to the entity this predicate is invoked upon.
         * 
         * Passes if the calculated distance is between the entered min and max, inclusive.
        */
        setDistanceByPredicate(arg0: Internal.DistancePredicate_): void;
        /**
         * For testing the active status effects on the entity.
        */
        setEffects(arg0: Internal.Consumer_<Internal.MobEffectsPredicateBuilder>): void;
        /**
         * For testing the items that this entity holds in its equipment slots.
        */
        setEquipmentByPredicate(arg0: Internal.EntityEquipmentPredicate_): void;
        /**
         * For testing the items that this entity holds in its equipment slots.
        */
        setEquipment(arg0: Internal.Consumer_<Internal.EntityEquipmentPredicateBuilder>): void;
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        setTargetedEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * Test the entity directly riding this entity.
        */
        setPassenger(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * Test the entity directly riding this entity.
        */
        setPassengerByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * For testing the active status effects on the entity.
        */
        setEffectsByPredicate(arg0: Internal.MobEffectsPredicate_): void;
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        setTargetedEntityByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * Test properties of the block the entity is standing on, using a location predicate.
        */
        setSteppingOnByPredicate(arg0: Internal.LocationPredicate_): void;
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        setVehicleByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * Test properties of the block the entity is standing on, using a location predicate.
        */
        set steppingOn(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>)
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        set vehicleByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * To test entity properties that can only be applied to certain entity types.
         * 
         * Supersedes lightning_bolt, player, fishing_hook, cat, etc.
        */
        set typeSpecific(arg0: Internal.EntityPredicateBuilder$TypeSpecific_)
        /**
         * To test flags of the entity.
        */
        set flagsByPredicate(arg0: Internal.EntityFlagsPredicate_)
        /**
         * Test properties of this entity's location.
        */
        set locationByPredicate(arg0: Internal.LocationPredicate_)
        /**
         * Test NBT data of this entity.
        */
        set nbt(arg0: Internal.CompoundTag_)
        /**
         * Test properties of this entity's location.
        */
        set location(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>)
        /**
         * Passes if the team of this entity matches this string.
        */
        set team(arg0: string)
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        set vehicle(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * Accept entity's tag.
        */
        set tag(arg0: ResourceLocation_)
        /**
         * To test flags of the entity.
        */
        set flags(arg0: Internal.Consumer_<Internal.EntityFlagsPredicateBuilder>)
        /**
         * Test this entity's type.
        */
        set typeByPredicate(arg0: Internal.EntityTypePredicate_)
        /**
         * Test this entity's type.
        */
        set type(arg0: Internal.Consumer_<Internal.EntityTypePredicateBuilder>)
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        set targetedEntityByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * Test the entity directly riding this entity.
        */
        set passengerByType(arg0: Internal.EntityType_<any>)
        /**
         * To test the distance to the entity this predicate is invoked upon.
         * 
         * Passes if the calculated distance is between the entered min and max, inclusive.
        */
        set distance(arg0: Internal.Consumer_<Internal.DistancePredicateBuilder>)
        /**
         * To test the distance to the entity this predicate is invoked upon.
         * 
         * Passes if the calculated distance is between the entered min and max, inclusive.
        */
        set distanceByPredicate(arg0: Internal.DistancePredicate_)
        /**
         * For testing the active status effects on the entity.
        */
        set effects(arg0: Internal.Consumer_<Internal.MobEffectsPredicateBuilder>)
        /**
         * For testing the items that this entity holds in its equipment slots.
        */
        set equipmentByPredicate(arg0: Internal.EntityEquipmentPredicate_)
        /**
         * For testing the items that this entity holds in its equipment slots.
        */
        set equipment(arg0: Internal.Consumer_<Internal.EntityEquipmentPredicateBuilder>)
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        set targetedEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * Test the entity directly riding this entity.
        */
        set passenger(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * Test the entity directly riding this entity.
        */
        set passengerByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * For testing the active status effects on the entity.
        */
        set effectsByPredicate(arg0: Internal.MobEffectsPredicate_)
        /**
         * Test properties of the entity which this entity is targeting for attacks.
        */
        set targetedEntityByType(arg0: Internal.EntityType_<any>)
        /**
         * Test properties of the block the entity is standing on, using a location predicate.
        */
        set steppingOnByPredicate(arg0: Internal.LocationPredicate_)
        /**
         * Test properties of the vehicle entity that this entity is riding upon.
        */
        set vehicleByType(arg0: Internal.EntityType_<any>)
        readonly SPECIFIC: Internal.EntityPredicateBuilder$TypeSpecific;
    }
    type EntityPredicateBuilder_ = EntityPredicateBuilder;
    class CamelJSBuilder extends Internal.AnimalEntityBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
        */
        defaultBehaviourGoals(defaultBehaviourGoals: boolean): this;
        createObject(): any;
        /**
         * Sets a Consumer invoked after the entity is tamed
         * and replaces the logic used to set the UUID of the owner
         * with the parameter of ContextUtils.PlayerEntityContext callback
         * 
         * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
        */
        tameOverride(tameOverride: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): this;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
        */
        defaultGoals(defaultGoals: boolean): this;
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
        */
        onTamed(onTamed: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): this;
    }
    type CamelJSBuilder_ = CamelJSBuilder;
    interface BehaviorControl <E extends Internal.LivingEntity> {
        abstract tryStart(arg0: Internal.ServerLevel_, arg1: E, arg2: number): boolean;
        abstract debugString(): string;
        abstract doStop(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        abstract getStatus(): Internal.Behavior$Status;
        abstract tickOrStop(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        get status(): Internal.Behavior$Status
    }
    type BehaviorControl_<E extends Internal.LivingEntity> = BehaviorControl<E>;
    class Schedule {
        constructor()
        getAllTimelinesExceptFor(arg0: Internal.Activity_): Internal.List<Internal.Timeline>;
        ensureTimelineExistsFor(arg0: Internal.Activity_): void;
        getTimelineFor(arg0: Internal.Activity_): Internal.Timeline;
        getActivityAt(arg0: number): Internal.Activity;
        static register(arg0: string): Internal.ScheduleBuilder;
        static readonly VILLAGER_DEFAULT: Internal.Schedule;
        static readonly SIMPLE: Internal.Schedule;
        static readonly EMPTY: Internal.Schedule;
        static readonly WORK_START_TIME: 2000;
        static readonly VILLAGER_BABY: Internal.Schedule;
        static readonly TOTAL_WORK_TIME: 7000;
    }
    type Schedule_ = Schedule | Special.Schedule;
    class MapDecoration$Type extends Internal.Enum<Internal.MapDecoration$Type> {
        isRenderedOnFrame(): boolean;
        getMapColor(): number;
        static ac_invokeInit$alexscaves_$md$2a2e30$0(arg0: string, arg1: number, arg2: boolean, arg3: number, arg4: boolean): Internal.MapDecoration$Type;
        hasMapColor(): boolean;
        static values(): Internal.MapDecoration$Type[];
        shouldTrackCount(): boolean;
        static byIcon(arg0: number): Internal.MapDecoration$Type;
        getIcon(): number;
        static valueOf(arg0: string): Internal.MapDecoration$Type;
        get renderedOnFrame(): boolean
        get mapColor(): number
        get icon(): number
        static readonly BANNER_GREEN: Internal.MapDecoration$Type;
        static readonly BANNER_RED: Internal.MapDecoration$Type;
        static readonly BANNER_GRAY: Internal.MapDecoration$Type;
        static readonly MANSION: Internal.MapDecoration$Type;
        static readonly BANNER_BLUE: Internal.MapDecoration$Type;
        static readonly MONUMENT: Internal.MapDecoration$Type;
        static readonly PLAYER_OFF_LIMITS: Internal.MapDecoration$Type;
        static readonly TARGET_POINT: Internal.MapDecoration$Type;
        static readonly BANNER_LIGHT_BLUE: Internal.MapDecoration$Type;
        static readonly RED_X: Internal.MapDecoration$Type;
        static readonly BANNER_MAGENTA: Internal.MapDecoration$Type;
        static readonly BLUE_MARKER: Internal.MapDecoration$Type;
        static readonly BANNER_WHITE: Internal.MapDecoration$Type;
        static readonly PLAYER_OFF_MAP: Internal.MapDecoration$Type;
        static readonly BANNER_LIGHT_GRAY: Internal.MapDecoration$Type;
        static readonly BANNER_YELLOW: Internal.MapDecoration$Type;
        static readonly TARGET_X: Internal.MapDecoration$Type;
        static readonly RED_MARKER: Internal.MapDecoration$Type;
        static readonly BANNER_ORANGE: Internal.MapDecoration$Type;
        static readonly BANNER_BLACK: Internal.MapDecoration$Type;
        static readonly BANNER_BROWN: Internal.MapDecoration$Type;
        static readonly BANNER_PURPLE: Internal.MapDecoration$Type;
        static readonly PLAYER: Internal.MapDecoration$Type;
        static readonly BANNER_LIME: Internal.MapDecoration$Type;
        static readonly BANNER_PINK: Internal.MapDecoration$Type;
        static readonly FRAME: Internal.MapDecoration$Type;
        static readonly BANNER_CYAN: Internal.MapDecoration$Type;
    }
    type MapDecoration$Type_ = "banner_blue" | "player" | "banner_black" | "ac_underground_cabin" | "banner_cyan" | MapDecoration$Type | "banner_gray" | "target_x" | "monument" | "banner_brown" | "banner_light_blue" | "banner_white" | "banner_purple" | "banner_lime" | "banner_yellow" | "banner_pink" | "red_x" | "frame" | "red_marker" | "player_off_limits" | "banner_magenta" | "player_off_map" | "blue_marker" | "banner_red" | "banner_orange" | "target_point" | "banner_light_gray" | "mansion" | "banner_green";
    class PlayerCooldowns {
        constructor()
        addCooldown(arg0: Internal.AbstractSpell_, arg1: number): void;
        decrementCooldown(arg0: Internal.CooldownInstance_, arg1: number): boolean;
        clearCooldowns(): void;
        addCooldown(arg0: string, arg1: number): void;
        isOnCooldown(arg0: Internal.AbstractSpell_): boolean;
        hasCooldownsActive(): boolean;
        loadNBTData(arg0: Internal.ListTag_): void;
        getSpellCooldowns(): Internal.Map<string, Internal.CooldownInstance>;
        addCooldown(arg0: string, arg1: number, arg2: number): void;
        setTickBuffer(arg0: number): void;
        tick(arg0: number): void;
        removeCooldown(arg0: string): boolean;
        syncToPlayer(arg0: Internal.ServerPlayer_): void;
        addCooldown(arg0: Internal.AbstractSpell_, arg1: number, arg2: number): void;
        getCooldownPercent(arg0: Internal.AbstractSpell_): number;
        saveNBTData(): Internal.ListTag;
        get spellCooldowns(): Internal.Map<string, Internal.CooldownInstance>
        set tickBuffer(arg0: number)
        static readonly SPELL_ID: "id";
        static readonly SPELL_COOLDOWN: "scd";
        static readonly COOLDOWN_REMAINING: "cdr";
    }
    type PlayerCooldowns_ = PlayerCooldowns;
    class WrappedGoal extends Internal.Goal {
        constructor(arg0: number, arg1: Internal.Goal_)
        isRunning(): boolean;
        getGoal(): Internal.Goal;
        canBeReplacedBy(arg0: Internal.WrappedGoal_): boolean;
        getPriority(): number;
        get running(): boolean
        get goal(): Internal.Goal
        get priority(): number
    }
    type WrappedGoal_ = WrappedGoal;
    interface IForgeMenuType <T> {
        abstract create(arg0: number, arg1: Internal.Inventory_, arg2: Internal.FriendlyByteBuf_): T;
        create<T extends Internal.AbstractContainerMenu>(arg0: Internal.IContainerFactory_<T>): Internal.MenuType<T>;
        (arg0: number, arg1: Internal.Inventory, arg2: Internal.FriendlyByteBuf): T;
    }
    type IForgeMenuType_<T> = IForgeMenuType<T>;
    class CustomTrigger extends Internal.SimpleCriterionTrigger<Internal.CustomTriggerInstance> {
        constructor(arg0: ResourceLocation_, arg1: Internal.LinkedList_<Internal.TriggerMatchCallback>)
        trigger(arg0: Internal.ServerPlayer_, ...arg1: any[]): void;
    }
    type CustomTrigger_ = CustomTrigger;
    class ClientboundDamageEventPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Optional_<Vec3d>)
        constructor(arg0: Internal.Entity_, arg1: DamageSource_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        sourcePosition(): Internal.Optional<Vec3d>;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        sourceDirectId(): number;
        sourceTypeId(): number;
        sourceCauseId(): number;
        entityId(): number;
        isSkippable(): boolean;
        getSource(arg0: Internal.Level_): DamageSource;
        get skippable(): boolean
    }
    type ClientboundDamageEventPacket_ = ClientboundDamageEventPacket;
    interface PalettedContainer$CountConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type PalettedContainer$CountConsumer_<T> = PalettedContainer$CountConsumer<T>;
    class Ocelot extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Ocelot>, arg1: Internal.Level_)
        static checkOcelotSpawnRules(arg0: Internal.EntityType_<Internal.Ocelot>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        reassessTrustingGoals(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isTrusting(): boolean;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get trusting(): boolean
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly CROUCH_SPEED_MOD: 0.6;
        static readonly SPRINT_SPEED_MOD: 1.33;
        static readonly WALK_SPEED_MOD: 0.8;
    }
    type Ocelot_ = Ocelot;
    class KubeJSInventoryListener implements Internal.ContainerListener {
        constructor(p: Player_)
        dataChanged(container: Internal.AbstractContainerMenu_, id: number, value: number): void;
        slotChanged(container: Internal.AbstractContainerMenu_, index: number, stack: Internal.ItemStack_): void;
        readonly player: Player;
    }
    type KubeJSInventoryListener_ = KubeJSInventoryListener;
    class ProfileKeyPair extends Internal.Record {
        constructor(arg0: Internal.PrivateKey_, arg1: Internal.ProfilePublicKey_, arg2: Internal.Instant_)
        privateKey(): Internal.PrivateKey;
        dueRefresh(): boolean;
        refreshedAfter(): Internal.Instant;
        publicKey(): Internal.ProfilePublicKey;
        static readonly CODEC: Internal.Codec<Internal.ProfileKeyPair>;
    }
    type ProfileKeyPair_ = ProfileKeyPair;
    class Entity$MovementEmission extends Internal.Enum<Internal.Entity$MovementEmission> {
        static valueOf(arg0: string): Internal.Entity$MovementEmission;
        emitsAnything(): boolean;
        emitsSounds(): boolean;
        static values(): Internal.Entity$MovementEmission[];
        emitsEvents(): boolean;
        readonly events: boolean;
        readonly sounds: boolean;
        static readonly ALL: Internal.Entity$MovementEmission;
        static readonly SOUNDS: Internal.Entity$MovementEmission;
        static readonly NONE: Internal.Entity$MovementEmission;
        static readonly EVENTS: Internal.Entity$MovementEmission;
    }
    type Entity$MovementEmission_ = Entity$MovementEmission | "events" | "sounds" | "none" | "all";
    class BlockInteractingRecipe extends Internal.ItemAndBlockRecipe<Internal.LycheeContext> {
        constructor(arg0: ResourceLocation_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
        getRemainingItems(arg0: Internal.LycheeContext_): Internal.NonNullList<Internal.ItemStack>;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getBlockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get mod(): string
        get special(): boolean
        get allActions(): Internal.Stream<Internal.PostAction>
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get blockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get incomplete(): boolean
    }
    type BlockInteractingRecipe_ = BlockInteractingRecipe;
    class DelegatedBiEntityAction <T extends Internal.IDelegatedActionConfiguration<org.apache.commons.lang3.tuple.Pair<Internal.Entity, Internal.Entity>>> extends Internal.BiEntityAction<T> {
        constructor(arg0: Internal.Codec_<T>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: T, arg1: Internal.Entity_, arg2: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DelegatedBiEntityAction_<T extends Internal.IDelegatedActionConfiguration<org.apache.commons.lang3.tuple.Pair<Internal.Entity, Internal.Entity>>> = DelegatedBiEntityAction<T>;
    abstract class Minecraft$ChatStatus extends Internal.Enum<Internal.Minecraft$ChatStatus> {
        getMessage(): Internal.Component;
        static valueOf(arg0: string): Internal.Minecraft$ChatStatus;
        static values(): Internal.Minecraft$ChatStatus[];
        abstract isChatAllowed(arg0: boolean): boolean;
        get message(): Internal.Component
        static readonly DISABLED_BY_OPTIONS: Internal.Minecraft$ChatStatus;
        static readonly INFO_DISABLED_BY_PROFILE: Internal.MutableComponent;
        static readonly DISABLED_BY_LAUNCHER: Internal.Minecraft$ChatStatus;
        static readonly ENABLED: Internal.Minecraft$ChatStatus;
        static readonly DISABLED_BY_PROFILE: Internal.Minecraft$ChatStatus;
    }
    type Minecraft$ChatStatus_ = Minecraft$ChatStatus | "enabled" | "disabled_by_profile" | "disabled_by_launcher" | "disabled_by_options";
    class MetricCategory extends Internal.Enum<Internal.MetricCategory> {
        static valueOf(arg0: string): Internal.MetricCategory;
        static values(): Internal.MetricCategory[];
        getDescription(): string;
        get description(): string
        static readonly MAIL_BOXES: Internal.MetricCategory;
        static readonly CHUNK_RENDERING_DISPATCHING: Internal.MetricCategory;
        static readonly GPU: Internal.MetricCategory;
        static readonly JVM: Internal.MetricCategory;
        static readonly PATH_FINDING: Internal.MetricCategory;
        static readonly EVENT_LOOPS: Internal.MetricCategory;
        static readonly CHUNK_RENDERING: Internal.MetricCategory;
        static readonly TICK_LOOP: Internal.MetricCategory;
        static readonly CPU: Internal.MetricCategory;
    }
    type MetricCategory_ = "path_finding" | "cpu" | "jvm" | "chunk_rendering" | "mail_boxes" | "tick_loop" | "event_loops" | "gpu" | "chunk_rendering_dispatching" | MetricCategory;
    class ImmutableCollections$MapN <K, V> extends Internal.ImmutableCollections$AbstractImmutableMap<K, V> {
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        static of<K, V>(): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        get(arg0: any): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
    }
    type ImmutableCollections$MapN_<K, V> = ImmutableCollections$MapN<K, V>;
    class FacingBlock extends Internal.HorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type FacingBlock_ = FacingBlock;
    class CubeDeformation {
        constructor(arg0: number)
        constructor(arg0: number, arg1: number, arg2: number)
        extend(arg0: number, arg1: number, arg2: number): this;
        extend(arg0: number): this;
        static readonly NONE: Internal.CubeDeformation;
        readonly growY: number;
        readonly growX: number;
        readonly growZ: number;
    }
    type CubeDeformation_ = CubeDeformation;
    class ForgeTextureMetadata$Serializer implements Internal.MetadataSectionSerializer<Internal.ForgeTextureMetadata> {
        fromJson(arg0: Internal.JsonObject_): Internal.ForgeTextureMetadata;
        getMetadataSectionName(): string;
        fromJson(arg0: Internal.JsonObject_): any;
        get metadataSectionName(): string
    }
    type ForgeTextureMetadata$Serializer_ = ForgeTextureMetadata$Serializer;
    class EntityLootEventJS extends Internal.LootEventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        addEntity(type: Internal.EntityType_<any>, b: Internal.Consumer_<Internal.LootBuilder>): void;
        modifyEntity(type: Internal.EntityType_<any>, b: Internal.Consumer_<Internal.LootBuilder>): void;
    }
    type EntityLootEventJS_ = EntityLootEventJS;
    class BiomeCondition extends Internal.EntityCondition<Internal.BiomeConfiguration> {
        constructor()
        check(arg0: Internal.BiomeConfiguration_, arg1: Internal.Entity_): boolean;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type BiomeCondition_ = BiomeCondition;
    class PreventEntityRenderConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(entityCondition: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>, biEntityCondition: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>)
        biEntityCondition(): Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        entityCondition(): Internal.Holder<Internal.ConfiguredEntityCondition<any, any>>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.PreventEntityRenderConfiguration>;
    }
    type PreventEntityRenderConfiguration_ = PreventEntityRenderConfiguration;
    class SoundEventData extends Internal.Record {
        constructor(event: Internal.SoundEvent_, volume: number, pitch: number)
        event(): Internal.SoundEvent;
        pitch(): number;
        volume(): number;
    }
    type SoundEventData_ = SoundEventData;
    abstract class ParticleType <T extends Internal.ParticleOptions> {
        constructor(arg0: boolean, arg1: Internal.ParticleOptions$Deserializer_<T>)
        getDeserializer(): Internal.ParticleOptions$Deserializer<T>;
        abstract codec(): Internal.Codec<T>;
        getOverrideLimiter(): boolean;
        get deserializer(): Internal.ParticleOptions$Deserializer<T>
        get overrideLimiter(): boolean
    }
    type ParticleType_<T extends Internal.ParticleOptions> = Special.ParticleType | ParticleType<T>;
    class ChunkBufferBuilderPack implements Internal.ChunkBufferBuilderPackAccessor {
        constructor()
        discardAll(): void;
        getBuilders(): Internal.Map<any, any>;
        clearAll(): void;
        builder(arg0: Internal.RenderType_): Internal.BufferBuilder;
        get builders(): Internal.Map<any, any>
    }
    type ChunkBufferBuilderPack_ = ChunkBufferBuilderPack;
    class BlockApiCacheImpl <A, C> implements Internal.BlockApiCache<A, C> {
        constructor(lookup: any_<A, C>, world: Internal.ServerLevel_, pos: BlockPos_)
        getPos(): BlockPos;
        find(context: C): A;
        getBlockEntity(): Internal.BlockEntity;
        find(state: Internal.BlockState_, context: C): A;
        getLookup(): Internal.BlockApiLookup<any, any>;
        invalidate(): void;
        getWorld(): Internal.ServerLevel;
        static create<A, C>(lookup: Internal.BlockApiLookup_<A, C>, world: Internal.ServerLevel_, pos: BlockPos_): Internal.BlockApiCache<A, C>;
        get pos(): BlockPos
        get blockEntity(): Internal.BlockEntity
        get lookup(): Internal.BlockApiLookup<any, any>
        get world(): Internal.ServerLevel
    }
    type BlockApiCacheImpl_<A, C> = BlockApiCacheImpl<A, C>;
    class ModLoadingStage extends Internal.Enum<Internal.ModLoadingStage> {
        static valueOf(arg0: string): Internal.ModLoadingStage;
        getDeferredWorkQueue(): Internal.DeferredWorkQueue;
        currentState(arg0: Internal.Throwable_): this;
        static values(): Internal.ModLoadingStage[];
        get deferredWorkQueue(): Internal.DeferredWorkQueue
        static readonly COMPLETE: Internal.ModLoadingStage;
        static readonly SIDED_SETUP: Internal.ModLoadingStage;
        static readonly VALIDATE: Internal.ModLoadingStage;
        static readonly ENQUEUE_IMC: Internal.ModLoadingStage;
        static readonly PROCESS_IMC: Internal.ModLoadingStage;
        static readonly COMMON_SETUP: Internal.ModLoadingStage;
        static readonly ERROR: Internal.ModLoadingStage;
        static readonly CONSTRUCT: Internal.ModLoadingStage;
        static readonly DONE: Internal.ModLoadingStage;
    }
    type ModLoadingStage_ = "validate" | "construct" | "sided_setup" | "enqueue_imc" | "done" | ModLoadingStage | "error" | "complete" | "process_imc" | "common_setup";
    class VertexFormat$Mode extends Internal.Enum<Internal.VertexFormat$Mode> {
        static valueOf(arg0: string): Internal.VertexFormat$Mode;
        indexCount(arg0: number): number;
        static values(): Internal.VertexFormat$Mode[];
        static readonly DEBUG_LINE_STRIP: Internal.VertexFormat$Mode;
        static readonly TRIANGLE_STRIP: Internal.VertexFormat$Mode;
        static readonly DEBUG_LINES: Internal.VertexFormat$Mode;
        static readonly LINE_STRIP: Internal.VertexFormat$Mode;
        static readonly TRIANGLE_FAN: Internal.VertexFormat$Mode;
        readonly connectedPrimitives: boolean;
        static readonly LINES: Internal.VertexFormat$Mode;
        static readonly TRIANGLES: Internal.VertexFormat$Mode;
        static readonly QUADS: Internal.VertexFormat$Mode;
        readonly asGLMode: number;
        readonly primitiveLength: number;
        readonly primitiveStride: number;
    }
    type VertexFormat$Mode_ = "triangles" | "triangle_fan" | "debug_line_strip" | "line_strip" | "triangle_strip" | "debug_lines" | VertexFormat$Mode | "quads" | "lines";
    class ClientboundOpenScreenPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.MenuType_<any>, arg2: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getType(): Internal.MenuType<any>;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getTitle(): Internal.Component;
        getContainerId(): number;
        isSkippable(): boolean;
        get type(): Internal.MenuType<any>
        get title(): Internal.Component
        get containerId(): number
        get skippable(): boolean
    }
    type ClientboundOpenScreenPacket_ = ClientboundOpenScreenPacket;
    class BaseEntityBuilder$ParticleKeyFrameEventJS <E extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.BaseEntityBuilder$KeyFrameEventJS<E, Internal.ParticleKeyframeData> {
        constructor(parent: Internal.ParticleKeyframeEvent_<E>)
        /**
         * Gets the locator string given by the Keyframe instruction from the animation.json
        */
        readonly locator: string;
        /**
         * Gets the script string given by the Keyframe instruction from the animation.json
        */
        readonly script: string;
        /**
         * Gets the effect id given by the Keyframe instruction from the animation.json
        */
        readonly effect: string;
    }
    type BaseEntityBuilder$ParticleKeyFrameEventJS_<E extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder$ParticleKeyFrameEventJS<E>;
    class NuclearSirenBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type NuclearSirenBlock_ = NuclearSirenBlock;
    class ObjectiveCriteria$RenderType extends Internal.Enum<Internal.ObjectiveCriteria$RenderType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.ObjectiveCriteria$RenderType;
        getSerializedName(): string;
        static byId(arg0: string): Internal.ObjectiveCriteria$RenderType;
        getId(): string;
        static values(): Internal.ObjectiveCriteria$RenderType[];
        get serializedName(): string
        get id(): string
        static readonly HEARTS: Internal.ObjectiveCriteria$RenderType;
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.ObjectiveCriteria$RenderType>;
        static readonly INTEGER: Internal.ObjectiveCriteria$RenderType;
    }
    type ObjectiveCriteria$RenderType_ = ObjectiveCriteria$RenderType | "hearts" | "integer";
    class SpawnerArmorItem extends Internal.ArmorItem {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        getDamage(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type SpawnerArmorItem_ = SpawnerArmorItem;
    interface Optic <Proof extends Internal.K1, S, T, A, B> {
        upCast<Proof2 extends Internal.K1>(arg0: Internal.Set_<Internal.TypeToken<Internal.K1>>, arg1: Internal.TypeToken_<Proof2>): Internal.Optional<Internal.Optic<Proof2, S, T, A, B>>;
        abstract "eval"<P extends Internal.K2>(arg0: Internal.App_<Proof, P>): Internal.Function<Internal.App2<P, A, B>, Internal.App2<P, S, T>>;
        (arg0: Internal.App<Proof, P>): Internal.Function_<Internal.App2<P, A, B>, Internal.App2<P, S, T>>;
    }
    type Optic_<Proof extends Internal.K1, S, T, A, B> = Optic<Proof, S, T, A, B>;
    class PinkPetalsBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MIN_FLOWERS: 1;
        static readonly MAX_FLOWERS: 4;
        static readonly FACING: Internal.DirectionProperty;
        static readonly AMOUNT: Internal.IntegerProperty;
    }
    type PinkPetalsBlock_ = PinkPetalsBlock;
    class AdvancementEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.Advancement_)
        getAdvancement(): Internal.Advancement;
        getEntity(): Internal.LivingEntity;
        get advancement(): Internal.Advancement
        get entity(): Internal.LivingEntity
    }
    type AdvancementEvent_ = AdvancementEvent;
    interface IClickableIngredient <T> {
        abstract getArea(): Internal.Rect2i;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getTypedIngredient(): Internal.ITypedIngredient<T>;
        getIngredient(): T;
        getIngredientType(): Internal.IIngredientType<T>;
        get area(): Internal.Rect2i
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get typedIngredient(): Internal.ITypedIngredient<T>
        get ingredient(): T
        get ingredientType(): Internal.IIngredientType<T>
    }
    type IClickableIngredient_<T> = IClickableIngredient<T>;
    class SweetBerryBushBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly AGE: Internal.IntegerProperty;
        static readonly MAX_AGE: 3;
    }
    type SweetBerryBushBlock_ = SweetBerryBushBlock;
    class RenderStateShard$LineStateShard extends Internal.RenderStateShard {
        constructor(arg0: Internal.OptionalDouble_)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$LineStateShard_ = RenderStateShard$LineStateShard;
    abstract class FloatProvider implements Internal.SampledFloat {
        constructor()
        abstract sample(arg0: Internal.RandomSource_): number;
        abstract getMinValue(): number;
        abstract getMaxValue(): number;
        static codec(arg0: number, arg1: number): Internal.Codec<Internal.FloatProvider>;
        abstract getType(): Internal.FloatProviderType<any>;
        get minValue(): number
        get maxValue(): number
        get type(): Internal.FloatProviderType<any>
        static readonly CODEC: Internal.Codec<Internal.FloatProvider>;
    }
    type FloatProvider_ = FloatProvider;
    class ForgeTextureMetadata {
        constructor(arg0: Internal.ITextureAtlasSpriteLoader_)
        getLoader(): Internal.ITextureAtlasSpriteLoader;
        static forResource(arg0: Internal.Resource_): Internal.ForgeTextureMetadata;
        get loader(): Internal.ITextureAtlasSpriteLoader
        static readonly EMPTY: Internal.ForgeTextureMetadata;
        static readonly SERIALIZER: Internal.ForgeTextureMetadata$Serializer;
    }
    type ForgeTextureMetadata_ = ForgeTextureMetadata;
    class ModifyAttributeEventJS$AttributeModificationHelper extends Internal.Record {
        constructor(type: Internal.EntityType_<Internal.LivingEntity>, event: Internal.EntityAttributeModificationEvent_)
        /**
         * Adds the given attribute to the entity type, using its default value
         * 
         * It is safe to add an attribute that an entity type already has
        */
        add(attribute: Internal.Attribute_): void;
        /**
         * Adds the given attribute to the entity type, using the provided default value
         * 
         * It is safe to add an attribute that an entity type already has
         * @param attribute The attribute to add
         * @param defaultValue The default value of the attribute
        */
        add(attribute: any, defaultValue: number): void;
    }
    type ModifyAttributeEventJS$AttributeModificationHelper_ = ModifyAttributeEventJS$AttributeModificationHelper;
    class ModifyAttributeEventJS extends Internal.EventJS {
        constructor(event: Internal.EntityAttributeModificationEvent_)
        /**
         * Returns a list of all attributes the given entity type has by default
        */
        getAttributes(entityType: Internal.EntityType_<Internal.LivingEntity>): Internal.List<Internal.Attribute>;
        /**
         * Returns a list of all entity types that can have their attributes modified by this event
        */
        getAllTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>;
        /**
         * Modifies the given entity type's attributes
         * @param entityType The entity type whose default attributes are to be modified
         * @param attributes A consumer for setting the default attributes and their values
        */
        modify(entityType: Internal.EntityType_<Internal.LivingEntity>, attributes: Internal.Consumer_<Internal.ModifyAttributeEventJS$AttributeModificationHelper>): void;
        /**
         * Returns a list of all entity types that can have their attributes modified by this event
        */
        get allTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>
    }
    type ModifyAttributeEventJS_ = ModifyAttributeEventJS;
    class Event {
        constructor()
        setResult(arg0: Internal.Event$Result_): void;
        getResult(): Internal.Event$Result;
        hasResult(): boolean;
        setCanceled(arg0: boolean): void;
        isCancelable(): boolean;
        setPhase(arg0: Internal.EventPriority_): void;
        getListenerList(): Internal.ListenerList;
        isCanceled(): boolean;
        getPhase(): Internal.EventPriority;
        set result(arg0: Internal.Event$Result_)
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get cancelable(): boolean
        set phase(arg0: Internal.EventPriority_)
        get listenerList(): Internal.ListenerList
        get canceled(): boolean
        get phase(): Internal.EventPriority
    }
    type Event_ = Event;
    class MerchantMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Merchant_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        getTraderXp(): number;
        setMerchantLevel(arg0: number): void;
        canRestock(): boolean;
        getOffers(): Internal.MerchantOffers;
        tryMoveItems(arg0: number): void;
        setSelectionHint(arg0: number): void;
        getTraderLevel(): number;
        setCanRestock(arg0: boolean): void;
        showProgressBar(): boolean;
        setShowProgressBar(arg0: boolean): void;
        setXp(arg0: number): void;
        setOffers(arg0: Internal.MerchantOffers_): void;
        getFutureTraderXp(): number;
        get traderXp(): number
        set merchantLevel(arg0: number)
        get offers(): Internal.MerchantOffers
        set selectionHint(arg0: number)
        get traderLevel(): number
        set canRestock(arg0: boolean)
        set showProgressBar(arg0: boolean)
        set xp(arg0: number)
        set offers(arg0: Internal.MerchantOffers_)
        get futureTraderXp(): number
        static readonly PAYMENT1_SLOT: 0;
        static readonly RESULT_SLOT: 2;
        static readonly PAYMENT2_SLOT: 1;
    }
    type MerchantMenu_ = MerchantMenu;
    class ServerboundEntityTagQuery implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getEntityId(): number;
        getTransactionId(): number;
        isSkippable(): boolean;
        get entityId(): number
        get transactionId(): number
        get skippable(): boolean
    }
    type ServerboundEntityTagQuery_ = ServerboundEntityTagQuery;
    class MenuPanel extends WidgetGroup {
        constructor(editor: Internal.Editor_)
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        getTabs(): Internal.Map<string, Internal.MenuTab>;
        canDragIn(dragging: any): boolean;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        getEditor(): Internal.Editor;
        widget(): Widget;
        name(): string;
        handleDragging(dragging: any): boolean;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        saveMenuData(): void;
        getRegisterUI(): Internal.LDLRegister;
        getChatComponent(): Internal.Component;
        getTab<T extends Internal.MenuTab>(name: string): T;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        get LDLRegister(): boolean
        get tabs(): Internal.Map<string, Internal.MenuTab>
        get translateKey(): string
        get editor(): Internal.Editor
        get registerUI(): Internal.LDLRegister
        get chatComponent(): Internal.Component
        static readonly HEIGHT: 16;
    }
    type MenuPanel_ = MenuPanel;
    class LookControlJS extends Internal.LookControl {
        constructor(mob: Internal.Mob_, builder: Internal.LookControlJSBuilder_)
        setLookAtCooldown(lookAtCooldown: number): void;
        getxMaxRotAngle(): number;
        getyMaxRotSpeed(): number;
        setyMaxRotSpeed(yMaxRotSpeed: number): void;
        getBuilder(): Internal.LookControlJSBuilder;
        setxMaxRotAngle(xMaxRotAngle: number): void;
        setWantedX(wantedX: number): void;
        getMob(): Internal.Mob;
        setWantedY(wantedY: number): void;
        setWantedZ(wantedZ: number): void;
        getLookAtCooldown(): number;
        set lookAtCooldown(lookAtCooldown: number)
        get xMaxRotAngle(): number
        get yMaxRotSpeed(): number
        set yMaxRotSpeed(yMaxRotSpeed: number)
        get builder(): Internal.LookControlJSBuilder
        set xMaxRotAngle(xMaxRotAngle: number)
        set wantedX(wantedX: number)
        get mob(): Internal.Mob
        set wantedY(wantedY: number)
        set wantedZ(wantedZ: number)
        get lookAtCooldown(): number
    }
    type LookControlJS_ = LookControlJS;
    abstract class ImmutableMap <K, V> implements Internal.Map<K, V>, Internal.Serializable {
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        static toImmutableMap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, V>, arg2: Internal.BinaryOperator_<V>): Internal.Collector<T, any, Internal.ImmutableMap<K, V>>;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.ImmutableMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.ImmutableMap<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.ImmutableMap<K, V>;
        static toImmutableMap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, V>): Internal.Collector<T, any, Internal.ImmutableMap<K, V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.ImmutableMap<K, V>;
        containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.ImmutableMap<K, V>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.ImmutableMap<K, V>;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        values(): Internal.ImmutableCollection<V>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.ImmutableMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.ImmutableMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.ImmutableMap<K, V>;
        abstract get(arg0: any): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.ImmutableMap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.ImmutableMap<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        asMultimap(): Internal.ImmutableSetMultimap<K, V>;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: V): V;
        static builderWithExpectedSize<K, V>(arg0: number): Internal.ImmutableMap$Builder<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.ImmutableMap<K, V>;
        /**
         * @deprecated
        */
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static copyOf<K, V>(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): Internal.ImmutableMap<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(): Internal.ImmutableMap<K, V>;
        abstract size(): number;
        entrySet(): Internal.ImmutableSet<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        clear(): void;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static builder<K, V>(): Internal.ImmutableMap$Builder<K, V>;
        keySet(): Internal.ImmutableSet<K>;
        get empty(): boolean
    }
    type ImmutableMap_<K, V> = ImmutableMap<K, V>;
    class InventoryChangeTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.MinMaxBounds$Ints_, arg2: Internal.MinMaxBounds$Ints_, arg3: Internal.MinMaxBounds$Ints_, arg4: Internal.ItemPredicate_[])
        static hasItems(...arg0: Internal.ItemPredicate_[]): Internal.InventoryChangeTrigger$TriggerInstance;
        matches(arg0: Internal.Inventory_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: number): boolean;
        static hasItems(...arg0: Internal.ItemLike_[]): Internal.InventoryChangeTrigger$TriggerInstance;
    }
    type InventoryChangeTrigger$TriggerInstance_ = InventoryChangeTrigger$TriggerInstance;
    class RenderType$OutlineProperty extends Internal.Enum<Internal.RenderType$OutlineProperty> {
        static values(): Internal.RenderType$OutlineProperty[];
        static valueOf(arg0: string): Internal.RenderType$OutlineProperty;
        static readonly NONE: Internal.RenderType$OutlineProperty;
        static readonly AFFECTS_OUTLINE: Internal.RenderType$OutlineProperty;
        static readonly IS_OUTLINE: Internal.RenderType$OutlineProperty;
    }
    type RenderType$OutlineProperty_ = RenderType$OutlineProperty | "is_outline" | "affects_outline" | "none";
    interface App <F extends Internal.K1, A> {
    }
    type App_<F extends Internal.K1, A> = App<F, A>;
    class Boat$Status extends Internal.Enum<Internal.Boat$Status> {
        static valueOf(arg0: string): Internal.Boat$Status;
        static values(): Internal.Boat$Status[];
        static readonly IN_AIR: Internal.Boat$Status;
        static readonly UNDER_FLOWING_WATER: Internal.Boat$Status;
        static readonly ON_LAND: Internal.Boat$Status;
        static readonly IN_WATER: Internal.Boat$Status;
        static readonly UNDER_WATER: Internal.Boat$Status;
    }
    type Boat$Status_ = Boat$Status | "in_water" | "in_air" | "under_water" | "under_flowing_water" | "on_land";
    interface LoggedChatEvent {
        abstract type(): Internal.LoggedChatEvent$Type;
        (): Internal.LoggedChatEvent$Type_;
        readonly CODEC: Internal.Codec<Internal.LoggedChatEvent>;
    }
    type LoggedChatEvent_ = LoggedChatEvent;
    class Bee extends Internal.Animal implements Internal.FlyingAnimal, Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.Bee>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        static access$1800(arg0: Internal.Bee_): Internal.RandomSource;
        static m_148766_(arg0: Internal.Bee_): Internal.PathNavigation;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        static m_148778_(arg0: Internal.Bee_): Internal.PathNavigation;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        incrementNumCropsGrownSincePollination(): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        static access$2700(arg0: Internal.Bee_): Internal.PathNavigation;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        damageHeldItem(): void;
        static access$100(arg0: Internal.Bee_): Internal.PathNavigation;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        static access$1500(arg0: Internal.Bee_): Internal.RandomSource;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        static access$2300(arg0: Internal.Bee_): Internal.RandomSource;
        setMainHandItem(item: Internal.ItemStack_): void;
        static m_27846_(arg0: Internal.Bee_): Internal.PathNavigation;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getHivePos(): BlockPos;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        static m_218121_(arg0: Internal.Bee_): Internal.RandomSource;
        static access$1900(arg0: Internal.Bee_): Internal.PathNavigation;
        resetTicksWithoutNectarSinceExitingHive(): void;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        static m_218127_(arg0: Internal.Bee_): Internal.RandomSource;
        getTravellingTicks(): number;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
        static m_148756_(arg0: Internal.Bee_): Internal.PathNavigation;
        isUndead(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        static access$2400(arg0: Internal.Bee_): Internal.PathNavigation;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        startPersistentAngerTimer(): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        static m_27835_(arg0: Internal.Bee_): Internal.PathNavigation;
        setRemainingPersistentAngerTime(arg0: number): void;
        setStayOutOfHiveCountdown(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getName(): Internal.Component;
        static m_148780_(arg0: Internal.Bee_): Internal.PathNavigation;
        setTotalMovementSpeedMultiplier(speed: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        static m_27898_(arg0: Internal.Bee_): Internal.PathNavigation;
        static m_148768_(arg0: Internal.Bee_): Internal.PathNavigation;
        getHeadArmorItem(): Internal.ItemStack;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getRollAmount(arg0: number): number;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getBlacklistedHives(): Internal.List<BlockPos>;
        hasSavedFlowerPos(): boolean;
        setHasNectar(arg0: boolean): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        pathfindRandomlyTowards(arg0: BlockPos_): void;
        isFlowerValid(arg0: BlockPos_): boolean;
        canStartSwimming(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasHive(): boolean;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        stopBeingAngry(): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        static access$1300(arg0: Internal.Bee_): Internal.RandomSource;
        getGoalSelector(): Internal.GoalSelector;
        wantsToEnterHive(): boolean;
        static m_148770_(arg0: Internal.Bee_): Internal.PathNavigation;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        static m_218123_(arg0: Internal.Bee_): Internal.RandomSource;
        isFlying(): boolean;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        static access$2800(arg0: Internal.Bee_): Internal.PathNavigation;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        canRiderInteract(): boolean;
        static m_148764_(arg0: Internal.Bee_): Internal.PathNavigation;
        shouldRiderSit(): boolean;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        static access$1700(arg0: Internal.Bee_): Internal.RandomSource;
        getPersistentAngerTarget(): Internal.UUID;
        closerThan(arg0: BlockPos_, arg1: number): boolean;
        isWaterCreature(): boolean;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        hasStung(): boolean;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        playerDied(arg0: Player_): void;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isAngry(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        getSavedFlowerPos(): BlockPos;
        isTooFarAway(arg0: BlockPos_): boolean;
        static m_27806_(arg0: Internal.Bee_): Internal.PathNavigation;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        isHiveValid(): boolean;
        hasNectar(): boolean;
        getMotionY(): number;
        static access$2600(arg0: Internal.Bee_): Internal.PathNavigation;
        getPassengers(): Internal.EntityArrayList;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        static m_148788_(arg0: Internal.Bee_): Internal.PathNavigation;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        getFeetArmorItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        static access$1400(arg0: Internal.Bee_): Internal.RandomSource;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        setMovementSpeedAddition(speed: number): void;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        static m_148776_(arg0: Internal.Bee_): Internal.PathNavigation;
        setSavedFlowerPos(arg0: BlockPos_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        getCropsGrownSincePollination(): number;
        bettermobcombat$isCombatAnimationActive(): boolean;
        dropOffNectar(): void;
        setZ(z: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        static m_148782_(arg0: Internal.Bee_): Internal.PathNavigation;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get totalMovementSpeed(): number
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set x(x: number)
        get hivePos(): BlockPos
        get travellingTicks(): number
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        set remainingPersistentAngerTime(arg0: number)
        set stayOutOfHiveCountdown(arg0: number)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get name(): Internal.Component
        set totalMovementSpeedMultiplier(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        set statusMessage(message: Internal.Component_)
        get blacklistedHives(): Internal.List<BlockPos>
        set hasNectar(arg0: boolean)
        get living(): boolean
        get goalSelector(): Internal.GoalSelector
        get flying(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        get teamId(): string
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get persistentAngerTarget(): Internal.UUID
        get waterCreature(): boolean
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get angry(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get savedFlowerPos(): BlockPos
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get hiveValid(): boolean
        get motionY(): number
        get passengers(): Internal.EntityArrayList
        set persistentAngerTarget(arg0: Internal.UUID_)
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set movementSpeedAddition(speed: number)
        get remainingPersistentAngerTime(): number
        set savedFlowerPos(arg0: BlockPos_)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get cropsGrownSincePollination(): number
        set z(z: number)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly TAG_TICKS_SINCE_POLLINATION: "TicksSincePollination";
        static readonly TAG_HAS_NECTAR: "HasNectar";
        remainingCooldownBeforeLocatingNewFlower: number;
        static readonly TICKS_PER_FLAP: 2;
        static readonly TAG_HIVE_POS: "HivePos";
        hivePos: BlockPos;
        savedFlowerPos: BlockPos;
        static readonly TAG_HAS_STUNG: "HasStung";
        static readonly TAG_CROPS_GROWN_SINCE_POLLINATION: "CropsGrownSincePollination";
        beePollinateGoal: Internal.Bee$BeePollinateGoal;
        goToKnownFlowerGoal: Internal.Bee$BeeGoToKnownFlowerGoal;
        remainingCooldownBeforeLocatingNewHive: number;
        static readonly TAG_CANNOT_ENTER_HIVE_TICKS: "CannotEnterHiveTicks";
        static readonly TAG_FLOWER_POS: "FlowerPos";
        static readonly FLAP_DEGREES_PER_TICK: 120.32113;
        ticksWithoutNectarSinceExitingHive: number;
        goToHiveGoal: Internal.Bee$BeeGoToHiveGoal;
    }
    type Bee_ = Bee;
    class SulfurBlock extends Internal.Block {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type SulfurBlock_ = SulfurBlock;
    class Climate$RTree$Leaf <T> extends Internal.Climate$RTree$Node<T> {
        constructor(arg0: Internal.Climate$ParameterPoint_, arg1: T)
        search(arg0: number[], arg1: Internal.Climate$RTree$Leaf_<T>, arg2: Internal.Climate$DistanceMetric_<T>): this;
        readonly value: T;
    }
    type Climate$RTree$Leaf_<T> = Climate$RTree$Leaf<T>;
    class SimpleBlockCondition extends Internal.BlockCondition<Internal.NoConfiguration> {
        constructor(arg0: Internal.BlockCondition$BlockPredicate_)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        static readonly EXPOSED_TO_SKY: Internal.BlockCondition$BlockPredicate;
        static readonly REPLACEABLE: Internal.BlockCondition$BlockPredicate;
        static readonly BLOCK_ENTITY: Internal.BlockCondition$BlockPredicate;
        static readonly LIGHT_BLOCKING: Internal.BlockCondition$BlockPredicate;
        static readonly WATER_LOGGABLE: Internal.BlockCondition$BlockPredicate;
        static readonly MOVEMENT_BLOCKING: Internal.BlockCondition$BlockPredicate;
    }
    type SimpleBlockCondition_ = SimpleBlockCondition;
    class ParsePosition {
        constructor(arg0: number)
        setErrorIndex(arg0: number): void;
        getErrorIndex(): number;
        getIndex(): number;
        setIndex(arg0: number): void;
        set errorIndex(arg0: number)
        get errorIndex(): number
        get index(): number
        set index(arg0: number)
    }
    type ParsePosition_ = ParsePosition;
    interface Accessory {
        getAttributesTooltip(stack: Internal.ItemStack_, type: Internal.SlotType_, tooltips: Internal.List_<Internal.Component>, tooltipType: Internal.TooltipFlag_): void;
        getStaticModifiers(item: Internal.Item_, builder: Internal.AccessoryItemAttributeModifiers$Builder_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquipFromUse(stack: Internal.ItemStack_, reference: Internal.SlotReference_): boolean;
        onEquip(stack: Internal.ItemStack_, reference: Internal.SlotReference_): void;
        canEquipFromUse(stack: Internal.ItemStack_): boolean;
        getEquipSound(stack: Internal.ItemStack_, reference: Internal.SlotReference_): Internal.SoundEventData;
        getDynamicModifiers(stack: Internal.ItemStack_, reference: Internal.SlotReference_, builder: Internal.AccessoryAttributeBuilder_): void;
        canUnequip(stack: Internal.ItemStack_, reference: Internal.SlotReference_): boolean;
        onBreak(stack: Internal.ItemStack_, reference: Internal.SlotReference_): void;
        tick(stack: Internal.ItemStack_, reference: Internal.SlotReference_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getModifiers(stack: Internal.ItemStack_, reference: Internal.SlotReference_, builder: Internal.AccessoryAttributeBuilder_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getExtraTooltip(stack: Internal.ItemStack_, tooltips: Internal.List_<Internal.Component>): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributesTooltip(stack: Internal.ItemStack_, type: Internal.SlotType_, tooltips: Internal.List_<Internal.Component>): void;
        canEquip(stack: Internal.ItemStack_, reference: Internal.SlotReference_): boolean;
        onEquipFromUse(stack: Internal.ItemStack_, reference: Internal.SlotReference_): void;
        maxStackSize(stack: Internal.ItemStack_): number;
        onUnequip(stack: Internal.ItemStack_, reference: Internal.SlotReference_): void;
        getDropRule(stack: Internal.ItemStack_, reference: Internal.SlotReference_, source: DamageSource_): Internal.DropRule;
        getExtraTooltip(stack: Internal.ItemStack_, tooltips: Internal.List_<Internal.Component>, tooltipType: Internal.TooltipFlag_): void;
    }
    type Accessory_ = Accessory;
    interface Deque <E> extends Internal.Queue<E> {
        abstract addLast(arg0: E): void;
        abstract getLast(): E;
        abstract peekLast(): E;
        abstract add(arg0: E): boolean;
        abstract removeFirst(): E;
        abstract remove(): E;
        abstract element(): E;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        abstract poll(): E;
        abstract offerFirst(arg0: E): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract removeFirstOccurrence(arg0: any): boolean;
        abstract descendingIterator(): Internal.Iterator<E>;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract peek(): E;
        abstract addFirst(arg0: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract offer(arg0: E): boolean;
        abstract remove(arg0: any): boolean;
        abstract pop(): E;
        abstract toArray(): any[];
        abstract getFirst(): E;
        abstract offerLast(arg0: E): boolean;
        abstract iterator(): Internal.Iterator<E>;
        abstract pollFirst(): E;
        abstract size(): number;
        abstract hashCode(): number;
        abstract peekFirst(): E;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract removeLastOccurrence(arg0: any): boolean;
        abstract push(arg0: E): void;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        abstract removeLast(): E;
        spliterator(): Internal.Spliterator<E>;
        abstract pollLast(): E;
        abstract equals(arg0: any): boolean;
        get last(): E
        get empty(): boolean
        get first(): E
    }
    type Deque_<E> = Deque<E>;
    class ServerStartingEvent extends Internal.ServerLifecycleEvent {
        constructor()
        constructor(arg0: Internal.MinecraftServer_)
    }
    type ServerStartingEvent_ = ServerStartingEvent;
    abstract class SoundEvent$SoundSourceEvent extends net.minecraftforge.client.event.sound.SoundEvent {
        constructor()
        getChannel(): com.mojang.blaze3d.audio.Channel;
        getSound(): Internal.SoundInstance;
        getName(): string;
        get channel(): com.mojang.blaze3d.audio.Channel
        get sound(): Internal.SoundInstance
        get name(): string
    }
    type SoundEvent$SoundSourceEvent_ = SoundEvent$SoundSourceEvent;
    class BlackstoneReplaceProcessor extends Internal.StructureProcessor {
        static readonly INSTANCE: Internal.BlackstoneReplaceProcessor;
        static readonly CODEC: Internal.Codec<Internal.BlackstoneReplaceProcessor>;
    }
    type BlackstoneReplaceProcessor_ = BlackstoneReplaceProcessor;
    class PlayerRecasts {
        constructor()
        constructor(arg0: Internal.ServerPlayer_)
        constructor(arg0: Internal.Map_<string, Internal.RecastInstance>)
        decrementRecastCount(arg0: Internal.AbstractSpell_): void;
        forceAddRecast(arg0: Internal.RecastInstance_): void;
        hasRecastForSpell(arg0: Internal.AbstractSpell_): boolean;
        getActiveRecasts(): Internal.List<Internal.RecastInstance>;
        tickRecasts(): void;
        getRecastInstance(arg0: string): Internal.RecastInstance;
        isRecastActive(arg0: Internal.RecastInstance_): boolean;
        getAllRecasts(): Internal.List<Internal.RecastInstance>;
        removeAll(arg0: Internal.RecastResult_): void;
        removeRecast(arg0: string): void;
        syncAllToPlayer(): void;
        hasRecastForSpell(arg0: string): boolean;
        getRemainingRecastsForSpell(arg0: Internal.AbstractSpell_): number;
        loadNBTData(arg0: Internal.ListTag_): void;
        syncRemoveToPlayer(arg0: string): void;
        decrementRecastCount(arg0: string): void;
        syncToPlayer(arg0: Internal.RecastInstance_): void;
        tick(arg0: number): void;
        getRemainingRecastsForSpell(arg0: string): number;
        addRecast(arg0: Internal.RecastInstance_, arg1: Internal.MagicData_): boolean;
        removeRecast(arg0: Internal.RecastInstance_, arg1: Internal.RecastResult_): void;
        hasRecastsActive(): boolean;
        saveNBTData(): Internal.ListTag;
        get activeRecasts(): Internal.List<Internal.RecastInstance>
        get allRecasts(): Internal.List<Internal.RecastInstance>
    }
    type PlayerRecasts_ = PlayerRecasts;
    class PlayerInteractEvent$EntityInteractSpecific extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.InteractionHand_, arg2: Internal.Entity_, arg3: Vec3d_)
        getLocalPos(): Vec3d;
        getTarget(): Internal.Entity;
        getEntity(): Internal.LivingEntity;
        get localPos(): Vec3d
        get target(): Internal.Entity
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$EntityInteractSpecific_ = PlayerInteractEvent$EntityInteractSpecific;
    class LootContextParam <T> {
        constructor(arg0: ResourceLocation_)
        getName(): ResourceLocation;
        get name(): ResourceLocation
    }
    type LootContextParam_<T> = LootContextParam<T>;
    abstract class PalettedContainer$Strategy {
        constructor(arg0: number)
        size(): number;
        abstract getConfiguration<A>(arg0: Internal.IdMap_<A>, arg1: number): Internal.PalettedContainer$Configuration<A>;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        calculateBitsForSerialization<A>(arg0: Internal.IdMap_<A>, arg1: number): number;
        static readonly HASHMAP_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly GLOBAL_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly LINEAR_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly SINGLE_VALUE_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly SECTION_BIOMES: Internal.PalettedContainer$Strategy;
        static readonly SECTION_STATES: Internal.PalettedContainer$Strategy;
    }
    type PalettedContainer$Strategy_ = PalettedContainer$Strategy;
    abstract class StateTestingPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: Vec3i_)
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract test(arg0: Internal.BlockState_): boolean;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static stateTestingCodec<P extends Internal.StateTestingPredicate>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P1<Internal.RecordCodecBuilder$Mu<P>, Vec3i>;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract type(): Internal.BlockPredicateType<any>;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        readonly offset: Vec3i;
    }
    type StateTestingPredicate_ = StateTestingPredicate;
    class BoneRibsBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly UNDER: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        readonly shapeMap: Internal.Map<Internal.BlockState, Internal.VoxelShape>;
    }
    type BoneRibsBlock_ = BoneRibsBlock;
    class UndergroundCabinStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.UndergroundCabinStructure>;
    }
    type UndergroundCabinStructure_ = UndergroundCabinStructure;
    abstract class AbstractInt2ObjectMap <V> extends Internal.AbstractInt2ObjectFunction<V> implements Internal.Int2ObjectMap<V>, Internal.Serializable {
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ObjectFunction<V>;
        put(arg0: number, arg1: V): V;
        containsValue(arg0: any): boolean;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        putIfAbsent(arg0: number, arg1: V): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Int2ByteFunction;
        replace(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        apply(arg0: number): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Int2DoubleFunction;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Int2IntFunction;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        remove(arg0: number): V;
        getOrDefault(arg0: number, arg1: V): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Int2FloatFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Int2ObjectFunction<T>;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ObjectFunction<V>;
        abstract defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Int2CharFunction;
        replace(arg0: number, arg1: V): V;
        static of<K, V>(): Internal.Map<K, V>;
        remove(arg0: number, arg1: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.Int2ObjectFunction_<V>): V;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        abstract int2ObjectEntrySet(): Internal.ObjectSet<Internal.Int2ObjectMap$Entry<V>>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Int2ReferenceFunction<T>;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        computeIfAbsent(arg0: number, arg1: Internal.IntFunction_<V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2IntFunction_): Internal.Int2ObjectFunction<V>;
        putIfAbsent(arg0: number, arg1: V): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        values(): Internal.ObjectCollection<V>;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Int2ObjectFunction_<V>): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Int2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ObjectFunction<V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Int2LongFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        get empty(): boolean
    }
    type AbstractInt2ObjectMap_<V> = AbstractInt2ObjectMap<V>;
    class DeferredRegister <T> {
        addOptionalTagDefaults(arg0: Internal.TagKey_<T>, arg1: Internal.Set_<Internal.Supplier<T>>): void;
        createTagKey(arg0: string): Internal.TagKey<T>;
        static createOptional<B>(arg0: Internal.ResourceKey_<Internal.Registry<B>>, arg1: string): Internal.DeferredRegister<B>;
        createOptionalTagKey(arg0: ResourceLocation_, arg1: Internal.Set_<Internal.Supplier<T>>): Internal.TagKey<T>;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<T>>;
        createTagKey(arg0: ResourceLocation_): Internal.TagKey<T>;
        static createOptional<B>(arg0: ResourceLocation_, arg1: string): Internal.DeferredRegister<B>;
        static create<B>(arg0: ResourceLocation_, arg1: string): Internal.DeferredRegister<B>;
        static create<B>(arg0: Internal.ResourceKey_<Internal.Registry<B>>, arg1: string): Internal.DeferredRegister<B>;
        createOptionalTagKey(arg0: string, arg1: Internal.Set_<Internal.Supplier<T>>): Internal.TagKey<T>;
        static create<B>(arg0: Internal.IForgeRegistry_<B>, arg1: string): Internal.DeferredRegister<B>;
        getRegistryName(): ResourceLocation;
        makeRegistry(arg0: Internal.Supplier_<Internal.RegistryBuilder<T>>): Internal.Supplier<Internal.IForgeRegistry<T>>;
        getEntries(): Internal.Collection<Internal.RegistryObject<T>>;
        register<I extends T>(arg0: string, arg1: Internal.Supplier_<I>): Internal.RegistryObject<I>;
        register(arg0: Internal.IEventBus_): void;
        get registryKey(): Internal.ResourceKey<Internal.Registry<T>>
        get registryName(): ResourceLocation
        get entries(): Internal.Collection<Internal.RegistryObject<T>>
    }
    type DeferredRegister_<T> = DeferredRegister<T>;
    interface ChannelFuture extends io.netty.util.concurrent.Future<void> {
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract isSuccess(): boolean;
        abstract await(): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract getNow(): void;
        abstract channel(): io.netty.channel.Channel;
        abstract cause(): Internal.Throwable;
        abstract isVoid(): boolean;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract isCancellable(): boolean;
        abstract syncUninterruptibly(): this;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract sync(): this;
        abstract awaitUninterruptibly(): this;
        abstract get(): void;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): void;
        get success(): boolean
        get done(): boolean
        get now(): void
        get "void"(): boolean
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type ChannelFuture_ = ChannelFuture;
    class DateFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        getShortWeekdays(): string[];
        clone(): any;
        getLocalPatternChars(): string;
        getShortMonths(): string[];
        static getInstance(arg0: Internal.Locale_): Internal.DateFormatSymbols;
        setEras(arg0: string[]): void;
        setMonths(arg0: string[]): void;
        setShortMonths(arg0: string[]): void;
        setLocalPatternChars(arg0: string): void;
        getWeekdays(): string[];
        getAmPmStrings(): string[];
        static getAvailableLocales(): Internal.Locale[];
        setAmPmStrings(arg0: string[]): void;
        setWeekdays(arg0: string[]): void;
        setZoneStrings(arg0: string[][]): void;
        getEras(): string[];
        setShortWeekdays(arg0: string[]): void;
        getZoneStrings(): string[][];
        static getInstance(): Internal.DateFormatSymbols;
        getMonths(): string[];
        get shortWeekdays(): string[]
        get localPatternChars(): string
        get shortMonths(): string[]
        set eras(arg0: string[])
        set months(arg0: string[])
        set shortMonths(arg0: string[])
        set localPatternChars(arg0: string)
        get weekdays(): string[]
        get amPmStrings(): string[]
        get availableLocales(): Internal.Locale[]
        set amPmStrings(arg0: string[])
        set weekdays(arg0: string[])
        set zoneStrings(arg0: string[][])
        get eras(): string[]
        set shortWeekdays(arg0: string[])
        get zoneStrings(): string[][]
        get instance(): Internal.DateFormatSymbols
        get months(): string[]
    }
    type DateFormatSymbols_ = DateFormatSymbols;
    class CountDownCooldownTicks extends Internal.Behavior<Internal.LivingEntity> {
        constructor(arg0: Internal.MemoryModuleType_<number>)
    }
    type CountDownCooldownTicks_ = CountDownCooldownTicks;
    class StonecutterBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly FACING: Internal.DirectionProperty;
    }
    type StonecutterBlock_ = StonecutterBlock;
    class SundropPatchFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type SundropPatchFeature_ = SundropPatchFeature;
    abstract class Bee$BaseBeeGoal extends Internal.Goal {
        constructor(arg0: Internal.Bee_)
        abstract canBeeUse(): boolean;
        abstract canBeeContinueToUse(): boolean;
        readonly f_27949_: Internal.Bee;
    }
    type Bee$BaseBeeGoal_ = Bee$BaseBeeGoal;
}
declare namespace dev.kosmx.playerAnim.core.impl {
    class AnimationProcessor {
        constructor(animation: Internal.IAnimation_)
        getFirstPersonMode(): Internal.FirstPersonMode;
        setTickDelta(tickDelta: number): void;
        getBend(modelName: string): Internal.Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        isActive(): boolean;
        get3DTransform(modelName: string, type: Internal.TransformType_, value0: Internal.Vec3f_): Internal.Vec3f;
        tick(): void;
        getFirstPersonConfiguration(): Internal.FirstPersonConfiguration;
        get firstPersonMode(): Internal.FirstPersonMode
        set tickDelta(tickDelta: number)
        get firstPersonAnimationDisabled(): boolean
        get active(): boolean
        get firstPersonConfiguration(): Internal.FirstPersonConfiguration
    }
    type AnimationProcessor_ = AnimationProcessor;
}
declare namespace dev.architectury.fluid {
    class FluidStack {
        setTag(tag: Internal.CompoundTag_): void;
        getRawFluid(): Internal.Fluid;
        getOrCreateChildTag(childName: string): Internal.CompoundTag;
        static read(tag: Internal.CompoundTag_): dev.architectury.fluid.FluidStack;
        removeChildTag(childName: string): void;
        isFluidStackEqual(other: dev.architectury.fluid.FluidStack_): boolean;
        isEmpty(): boolean;
        copy(): this;
        static create(fluid: Internal.Supplier_<Internal.Fluid>, amount: number, tag: Internal.CompoundTag_): dev.architectury.fluid.FluidStack;
        getAmount(): number;
        isTagEqual(other: dev.architectury.fluid.FluidStack_): boolean;
        write(tag: Internal.CompoundTag_): Internal.CompoundTag;
        static create(fluid: Internal.Fluid_, amount: number): dev.architectury.fluid.FluidStack;
        static empty(): dev.architectury.fluid.FluidStack;
        static create(fluid: Internal.Supplier_<Internal.Fluid>, amount: number): dev.architectury.fluid.FluidStack;
        isFluidEqual(other: dev.architectury.fluid.FluidStack_): boolean;
        write(buf: Internal.FriendlyByteBuf_): void;
        getName(): Internal.Component;
        static init(): void;
        getRawFluidSupplier(): Internal.Supplier<Internal.Fluid>;
        static create(fluid: Internal.Fluid_, amount: number, tag: Internal.CompoundTag_): dev.architectury.fluid.FluidStack;
        getTranslationKey(): string;
        static read(buf: Internal.FriendlyByteBuf_): dev.architectury.fluid.FluidStack;
        setAmount(amount: number): void;
        shrink(amount: number): void;
        getOrCreateTag(): Internal.CompoundTag;
        getChildTag(childName: string): Internal.CompoundTag;
        grow(amount: number): void;
        hasTag(): boolean;
        static bucketAmount(): number;
        getTag(): Internal.CompoundTag;
        getFluid(): Internal.Fluid;
        copyWithAmount(amount: number): this;
        static create(stack: dev.architectury.fluid.FluidStack_, amount: number): dev.architectury.fluid.FluidStack;
        set tag(tag: Internal.CompoundTag_)
        get rawFluid(): Internal.Fluid
        get empty(): boolean
        get amount(): number
        get name(): Internal.Component
        get rawFluidSupplier(): Internal.Supplier<Internal.Fluid>
        get translationKey(): string
        set amount(amount: number)
        get orCreateTag(): Internal.CompoundTag
        get tag(): Internal.CompoundTag
        get fluid(): Internal.Fluid
    }
    type FluidStack_ = FluidStack;
}
declare namespace net.fabricmc.fabric.api.event {
    abstract class Event <T> {
        constructor()
        invoker(): T;
        abstract register(arg0: T): void;
        register(phase: ResourceLocation_, listener: T): void;
        addPhaseOrdering(firstPhase: ResourceLocation_, secondPhase: ResourceLocation_): void;
        static readonly DEFAULT_PHASE: ResourceLocation;
    }
    type Event_<T> = Event<T>;
}
declare namespace io.github.edwinmindcraft.apoli.common.action.entity {
    class DamageAction extends Internal.EntityAction<Internal.DamageConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.DamageConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DamageAction_ = DamageAction;
}
declare namespace software.bernie.geckolib.core.animation {
    class Animation extends Internal.Record {
        constructor(name: string, length: number, loopType: Internal.Animation$LoopType_, boneAnimations: any_[], keyFrames: Internal.Animation$Keyframes_)
        name(): string;
        boneAnimations(): any[];
        length(): number;
        loopType(): Internal.Animation$LoopType;
        keyFrames(): Internal.Animation$Keyframes;
    }
    type Animation_ = Animation;
}
declare namespace net.fabricmc.fabric.api.renderer.v1.material {
    class BlendMode extends Internal.Enum<net.fabricmc.fabric.api.renderer.v1.material.BlendMode> {
        static valueOf(name: string): net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static fromRenderLayer(renderLayer: Internal.RenderType_): net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static values(): net.fabricmc.fabric.api.renderer.v1.material.BlendMode[];
        static readonly DEFAULT: net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static readonly CUTOUT_MIPPED: net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static readonly TRANSLUCENT: net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static readonly SOLID: net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        static readonly CUTOUT: net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        readonly blockRenderLayer: Internal.RenderType;
    }
    type BlendMode_ = "translucent" | BlendMode | "solid" | "cutout" | "default" | "cutout_mipped";
}
