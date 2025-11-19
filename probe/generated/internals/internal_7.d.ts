/// <reference path="./internal_*.d.ts" />
declare namespace net.fabricmc.fabric.mixin.screen {
    interface ScreenAccessor {
        abstract getTextRenderer(): Internal.Font;
        abstract getClient(): Internal.Minecraft;
        get textRenderer(): Internal.Font
        get client(): Internal.Minecraft
    }
    type ScreenAccessor_ = ScreenAccessor;
}
declare namespace Internal {
    class AscensionEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        static ambientParticles(arg0: Internal.ClientLevel_, arg1: Internal.LivingEntity_): void;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type AscensionEffect_ = AscensionEffect;
    abstract class BoatEntityBuilder <T extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.BaseEntityBuilder<T> {
        constructor(i: ResourceLocation_)
        /**
         * Sets a function to determine the speed of the boat when it turns.
         * Example usage:
         * ```javascript
         * builder.turningBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
        */
        turningBoatSpeed(function_: Internal.Function_<Internal.Boat, any>): this;
        /**
         * Sets the shadow radius of the entity.
         * Defaults to 0.3.
         * Example usage:
         * ```javascript
         * builder.setShadowRadius(0.8);
         * ```
        */
        setShadowRadius(f: number): this;
        /**
         * Sets a function to determine the speed of the boat when going forward.
         * Example usage:
         * ```javascript
         * builder.forwardBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
        */
        forwardBoatSpeed(function_: Internal.Function_<Internal.Boat, any>): this;
        /**
         * Sets a function to determine the speed of the boat when in reverse.
         * Example usage:
         * ```javascript
         * builder.backwardsBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
        */
        backwardsBoatSpeed(function_: Internal.Function_<Internal.Boat, any>): this;
        createObject(): any;
        /**
         * Sets a function to determine the Item the entity drops when it
         * turns back into an item.
         * Defaults to Boat super method.
         * Example usage:
         * ```javascript
         * builder.getDropItem(entity => {
         *     // Use information about the entity provided by the context.
         *     return Item.of('amethyst_block').item // Some Item
         * });
         * ```
        */
        getDropItem(function_: Internal.Function_<Internal.Boat, any>): this;
        /**
         * Sets the shadow radius of the entity.
         * Defaults to 0.3.
         * Example usage:
         * ```javascript
         * builder.setShadowRadius(0.8);
         * ```
        */
        set shadowRadius(f: number)
        static readonly thisList: [];
    }
    type BoatEntityBuilder_<T extends Internal.Entity & Internal.IAnimatableJSNL> = BoatEntityBuilder<T>;
    class CloudStatus extends Internal.Enum<Internal.CloudStatus> implements Internal.OptionEnum {
        getKey(): string;
        static valueOf(arg0: string): Internal.CloudStatus;
        static values(): Internal.CloudStatus[];
        getCaption(): Internal.Component;
        getId(): number;
        get key(): string
        get caption(): Internal.Component
        get id(): number
        static readonly OFF: Internal.CloudStatus;
        static readonly FAST: Internal.CloudStatus;
        static readonly FANCY: Internal.CloudStatus;
    }
    type CloudStatus_ = "off" | "fancy" | CloudStatus | "fast";
    class StructureModifier$Phase extends Internal.Enum<Internal.StructureModifier$Phase> {
        static valueOf(arg0: string): Internal.StructureModifier$Phase;
        static values(): Internal.StructureModifier$Phase[];
        static readonly MODIFY: Internal.StructureModifier$Phase;
        static readonly REMOVE: Internal.StructureModifier$Phase;
        static readonly AFTER_EVERYTHING: Internal.StructureModifier$Phase;
        static readonly ADD: Internal.StructureModifier$Phase;
        static readonly BEFORE_EVERYTHING: Internal.StructureModifier$Phase;
    }
    type StructureModifier$Phase_ = "remove" | StructureModifier$Phase | "before_everything" | "modify" | "after_everything" | "add";
    interface Option <T> {
        abstract getTooltip(): Internal.Component;
        abstract getImpact(): Internal.OptionImpact;
        abstract hasChanged(): boolean;
        abstract getName(): Internal.Component;
        abstract applyChanges(): void;
        getId(): Internal.OptionIdentifier<T>;
        abstract setValue(arg0: T): void;
        abstract getControl(): me.jellysquid.mods.sodium.client.gui.options.control.Control<T>;
        abstract getValue(): T;
        abstract getStorage(): Internal.OptionStorage<any>;
        abstract reset(): void;
        abstract getFlags(): Internal.Collection<Internal.OptionFlag>;
        abstract isAvailable(): boolean;
        get tooltip(): Internal.Component
        get impact(): Internal.OptionImpact
        get name(): Internal.Component
        get id(): Internal.OptionIdentifier<T>
        set value(arg0: T)
        get control(): me.jellysquid.mods.sodium.client.gui.options.control.Control<T>
        get value(): T
        get storage(): Internal.OptionStorage<any>
        get flags(): Internal.Collection<Internal.OptionFlag>
        get available(): boolean
    }
    type Option_<T> = Option<T>;
    class AdjacentCondition extends Internal.BlockCondition<any> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type AdjacentCondition_ = AdjacentCondition;
    class FireworkStarRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
        static SHAPE_BY_ITEM: {[key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.PlayerHeadItem]: Internal.FireworkRocketItem$Shape, [key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.Item]: Internal.FireworkRocketItem$Shape, [key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.FireChargeItem]: Internal.FireworkRocketItem$Shape, [key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.StandingAndWallBlockItem]: Internal.FireworkRocketItem$Shape, [key: Internal.Item]: Internal.FireworkRocketItem$Shape};
        static SHAPE_INGREDIENT: Internal.Ingredient;
    }
    type FireworkStarRecipe_ = FireworkStarRecipe;
    class ChestMenuClickHandler extends Internal.Record {
        constructor(type: Internal.ClickType_, button: number, callback: Internal.ChestMenuClickEvent$Callback_, autoHandle: boolean)
        autoHandle(): boolean;
        callback(): Internal.ChestMenuClickEvent$Callback;
        test(event: Internal.ChestMenuClickEvent_): boolean;
        button(): number;
        type(): Internal.ClickType;
    }
    type ChestMenuClickHandler_ = ChestMenuClickHandler;
    interface UnbakedModel {
        abstract bake(arg0: Internal.ModelBaker_, arg1: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>, arg2: Internal.ModelState_, arg3: ResourceLocation_): Internal.BakedModel;
        abstract getDependencies(): Internal.Collection<ResourceLocation>;
        abstract resolveParents(arg0: Internal.Function_<ResourceLocation, Internal.UnbakedModel>): void;
        get dependencies(): Internal.Collection<ResourceLocation>
    }
    type UnbakedModel_ = UnbakedModel;
    class BlockExplodingRecipe$Serializer extends Internal.LycheeRecipe$Serializer<Internal.BlockExplodingRecipe> {
        constructor()
        fromNetwork(arg0: Internal.BlockExplodingRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        fromJson(arg0: Internal.BlockExplodingRecipe_, arg1: Internal.JsonObject_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.BlockExplodingRecipe;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockExplodingRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
    }
    type BlockExplodingRecipe$Serializer_ = BlockExplodingRecipe$Serializer;
    class Silverfish extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Silverfish>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        static checkSilverfishSpawnRules(arg0: Internal.EntityType_<Internal.Silverfish>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
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
    }
    type Silverfish_ = Silverfish;
    class AddWorldgenEventJS extends Internal.StartupEventJS {
        constructor()
        addOre(p: Internal.Consumer_<Internal.AddOreProperties>): void;
        addLake(p: Internal.Consumer_<Internal.AddLakeProperties>): void;
        addSpawn(filter: Internal.BiomeFilter_, category: Internal.MobCategory_, spawn: string): void;
        addSpawn(category: Internal.MobCategory_, spawn: string): void;
        addSpawn(p: Internal.Consumer_<Internal.AddSpawnProperties>): void;
        readonly anchors: typeof Internal.VerticalAnchor;
    }
    type AddWorldgenEventJS_ = AddWorldgenEventJS;
    class SystemReport {
        constructor()
        setDetail(arg0: string, arg1: Internal.Supplier_<string>): void;
        toLineSeparatedString(): string;
        setDetail(arg0: string, arg1: string): void;
        appendToCrashReportString(arg0: Internal.StringBuilder_): void;
        static readonly BYTES_PER_MEBIBYTE: 1048576;
    }
    type SystemReport_ = SystemReport;
    class PoiTypeBuilder extends Internal.BuilderBase<Internal.PoiType> {
        constructor(i: ResourceLocation_)
        blocks(r: Internal.BlockState_[]): this;
        maxTickets(i: number): this;
        createObject(): Internal.PoiType;
        block(r: Internal.Block_): this;
        validRange(i: number): this;
    }
    type PoiTypeBuilder_ = PoiTypeBuilder;
    class SpawnEggItemBuilder extends Internal.ItemBuilder {
        constructor(i: ResourceLocation_, parent: Internal.BuilderBase_<any>)
        /**
         * Sets the highlight color of the egg item
        */
        highlightColor(i: number): this;
        /**
         * Sets the background color of the egg item
        */
        backgroundColor(i: number): this;
        createObject(): any;
    }
    type SpawnEggItemBuilder_ = SpawnEggItemBuilder;
    interface IForgeFriendlyByteBuf {
        writeRegistryIdUnsafe<T>(arg0: Internal.IForgeRegistry_<T>, arg1: T): void;
        readRegistryIdUnsafe<T>(arg0: Internal.IForgeRegistry_<T>): T;
        readRegistryId<T>(): T;
        writeFluidStack(arg0: Internal.FluidStack_): void;
        writeRegistryId<T>(arg0: Internal.IForgeRegistry_<T>, arg1: T): void;
        readFluidStack(): Internal.FluidStack;
        writeRegistryIdUnsafe(arg0: Internal.IForgeRegistry_<any>, arg1: ResourceLocation_): void;
        readRegistryIdSafe<T>(arg0: T): T;
    }
    type IForgeFriendlyByteBuf_ = IForgeFriendlyByteBuf;
    class SpawnEffectCloudAction extends Internal.EntityAction<Internal.SpawnEffectCloudConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.SpawnEffectCloudConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SpawnEffectCloudAction_ = SpawnEffectCloudAction;
    class Dist extends Internal.Enum<Internal.Dist> {
        isClient(): boolean;
        isDedicatedServer(): boolean;
        static valueOf(arg0: string): Internal.Dist;
        static values(): Internal.Dist[];
        get client(): boolean
        get dedicatedServer(): boolean
        static readonly DEDICATED_SERVER: Internal.Dist;
        static readonly CLIENT: Internal.Dist;
    }
    type Dist_ = "dedicated_server" | Dist | "client";
    interface JsonDeserializationContext {
        abstract deserialize<T>(arg0: Internal.JsonElement_, arg1: Internal.Type_): T;
        (arg0: Internal.JsonElement, arg1: Internal.Type): T;
    }
    type JsonDeserializationContext_ = JsonDeserializationContext;
    class AddGoalSelectorsEventJS <T extends Internal.Mob> extends Internal.GoalEventJS<T> {
        constructor(mob: T, selector: Internal.GoalSelector_)
        /**
         * Adds a `RestrictSunGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
        */
        restrictSun(priority: number): void;
        /**
         * Adds a `LeapAtTargetGoal` to the entity
         * @param priority The priority of the goal
         * @param deltaY Sets the delta movement of the animal in the y-axis
        */
        leapAtTarget(priority: number, deltaY: number): void;
        /**
         * Adds a `RandomStrollGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param interval Sets the interval at which the goal will be 'refreshed, any values below 1 will be 1.'
         * @param checkNoActionTime Determines if the mob's noActionTime property should be checked
        */
        randomStroll(priority: number, speedModifier: number, interval: number, checkNoActionTime: boolean): void;
        /**
         * Adds a `TemptGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param temptItems The ingredient that determines what items tempt the mob
         * @param canScare If the mob can be scared by getting to close to the tempter
        */
        tempt(priority: number, speedModifier: number, temptItems: Internal.Ingredient_, canScare: boolean): void;
        /**
         * Enables the addition of arbitrary goals to an entity
         * 
         * It is the responsibility of the user to ensure the goal is
         * compatible with the entity
         * 
         * Example of usage:
         * =====================================
         * builder.arbitraryGoal(3, entity -> new $PathFindToRaidGoal(entity))
         * =====================================
         * 
         * Note in the example the entity must be an instance of Raider
         * @param priority The priority of the goal
         * @param goalSupplier The goal supplier, a function that takes a Mob and returns a Goal
        */
        arbitraryGoal(priority: number, goalSupplier: Internal.Function_<T, Internal.Goal>): void;
        /**
         * Adds a `RandomSwimmingGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param interval Sets the interval at which the goal will be refreshed
        */
        randomSwimming(priority: number, speedModifier: number, interval: number): void;
        /**
         * Adds a `PanicGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        panic(priority: number, speedModifier: number): void;
        /**
         * Adds a `EatBlockGoal` to the entity
         * @param priority The priority of the goal
        */
        eatGrass(priority: number): void;
        /**
         * Adds a `MoveThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param onlyAtNight If this goal should only apply at night
         * @param distanceToPoi The minimum distance to a poi the mob must be to have it be considered 'visited'
         * @param canDealWithDoors If doors can be opened to navigate as part of this goal
        */
        moveThroughVillage(priority: number, speedModifier: number, onlyAtNight: boolean, distanceToPoi: number, canDealWithDoors: Internal.Supplier_<boolean>): void;
        /**
         * Adds a `ClimbOnTopOfPowderSnowGoal` to the entity
         * @param priority The priority of the goal
        */
        climbOnTopOfPowderedSnow(priority: number): void;
        /**
         * Adds a `FollowBoatGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
        */
        followBoat(priority: number): void;
        /**
         * Adds a `FleeSunGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        fleeSun(priority: number, speedModifier: number): void;
        /**
         * Adds a `MoveTowardsRestrictionGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        moveTowardsRestriction(priority: number, speedModifier: number): void;
        /**
         * Remove a goal from the entity via class reference.
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * builder.removeGoal($PanicGoal)
         * =====================================
         * @param goal The goal class to remove
        */
        removeGoal(goal: typeof Internal.Goal): void;
        /**
         * Adds a `SitWhenOrderedToGoal` to the entity, only applicable to **tamable** mobs
         * @param priority The priority of the goal
        */
        sitWhenOrdered(priority: number): void;
        /**
         * Adds a `LookAtPlayerGoal` to the entity
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be looked at
         * @param lookDistance How far away the entity should be looked at
         * @param probability The probability, in the range [0, 1], that the goal may be used
         * @param onlyHorizontal Determines if the eye level must be the same to follow the target entity
        */
        lookAtEntity<E extends Internal.LivingEntity>(priority: number, targetClass: E, lookDistance: number, probability: number, onlyHorizontal: boolean): void;
        /**
         * Adds a `RandomLookAroundGoal` to the entity
         * @param priority The priority of the goal
        */
        randomLookAround(priority: number): void;
        /**
         * Adds a `BreathAirGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
        */
        breathAir(priority: number): void;
        /**
         * Remove all goals.
         * 
         * Example of usage:
         * =====================================
         * builder.removeAllGoals()
         * =====================================
         * @param goal The goal to remove
        */
        removeAllGoals(): void;
        /**
         * Adds a `BreedGoal` to the entity, only applicable to **animal** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param partnerClass The class of animal that this entity breeds with, may be null to specify it be the same class as this entity
        */
        breed(priority: number, speedModifier: number, partnerClass: typeof Internal.Animal): void;
        /**
         * Adds a `FollowMobGoal` to the entity
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param stopDistance The distance away from the target the mob will stop
         * @param areaSize The distance away from the mob, that will be searched for mobs to follow
        */
        followMob(priority: number, speedModifier: number, stopDistance: number, areaSize: number): void;
        /**
         * Adds a `MoveTowardsTargetGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param distanceWithin The distance the target must be within to move towards it
        */
        moveTowardsTarget(priority: number, speedModifier: number, distanceWithin: number): void;
        /**
         * Adds a `OcelotAttackGoal` to the entity
         * @param priority The priority of the goal
        */
        ocelotAttack(priority: number): void;
        /**
         * Adds a `MoveBackToVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param checkNoActionTime Determines if the mob's noActionTime property should be checked
        */
        moveBackToVillage(priority: number, speedModifier: number, checkNoActionTime: boolean): void;
        /**
         * Adds a `StrollThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param interval Sets how often the goal 'refreshes'
        */
        strollThroughVillage(priority: number, interval: number): void;
        /**
         * Adds a `WaterAvoidingRandomFlyingGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        waterAvoidingRandomFlying(priority: number, speedModifier: number): void;
        /**
         * Adds a `WaterAvoidRandomStrollingGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param probability The probability, in the range [0, 1], that the entity picks a new position
        */
        waterAvoidingRandomStroll(priority: number, speedModifier: number, probability: number): void;
        /**
         * Adds a `MeleeAttackGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param followTargetEventIfNotSeen Determines if the entity should follow the target even if it doesn't see it
        */
        meleeAttack(priority: number, speedModifier: number, followTargetEvenIfNotSeen: boolean): void;
        /**
         * Remove all goals fitting the specified predicate. Returns a boolean
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * e.removeGoals(context => {
         *     const { goal, entity } = context
         *     return goal.getClass() == $PanicGoal
         * })
         * =====================================
         * @param goalFunction A function to remove goals with entity & available goals as arguments
        */
        removeGoals(goalFunction: Internal.Function_<Internal.ContextUtils$GoalContext, boolean>): void;
        /**
         * Adds a `RangedAttackGoal` to the entity, only applicable to **ranged attack** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param attackIntervalMin The minimum interval between attacks
         * @param attackIntervalMax The maximum interval between attacks
         * @param attackRadius The maximum distance something can be attacked from
        */
        rangedAttack<E extends Internal.Mob & Internal.RangedAttackMob>(priority: number, speedModifier: number, attackIntervalMin: number, attackIntervalMax: number, attackRadius: number): void;
        /**
         * Adds a `RemoveBlockGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param block The registry name of a block, the block to be removed
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param verticalSearchRange The vertical range the mob will search for the block
        */
        removeBlock(priority: number, block: ResourceLocation_, speedModifier: number, verticalSearchRange: number): void;
        /**
         * Adds a `FollowOwnerGoal` to the entity, only applicable to **tamable** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param startDistance The distance away from the owner the mob will start moving
         * @param stopDistance The distance away from the owner the mob will stop moving
         * @param canFly If the mob can teleport into leaves
        */
        followOwner(priority: number, speedModifier: number, startDistance: number, stopDistance: number, canFly: boolean): void;
        /**
         * Adds a `UseItemGoal` to the entity
         * @param priority The priority of the goal
         * @param itemToUse The item that will be used
         * @param soundEvent The registry name of a sound event that should play when the item is used, may be null to indicate not sound event should play
         * @param canUseSelector Determines when the item may be used
        */
        useItem(priority: number, itemToUse: Internal.ItemStack_, soundEvent: ResourceLocation_, canUseSelector: Internal.Predicate_<T>): void;
        /**
         * Adds a custom goal to the entity
         * @param name The name of the custom goal
         * @param priority The priority of the goal
         * @param canUse Determines if the entity can use the goal
         * @param canContinueToUse Determines if the entity can continue to use the goal, may be null
         * @param isInterruptable If the goal may be interrupted
         * @param start The action to perform when the goal starts
         * @param stop The action to perform when the goal stops
         * @param requiresUpdateEveryTick If the goal needs to be updated every tick
         * @param tick The action to perform when the goal ticks
        */
        customGoal(name: string, priority: number, canUse: Internal.Predicate_<T>, canContinueToUse: Internal.Predicate_<T>, isInterruptable: boolean, start: Internal.Consumer_<T>, stop: Internal.Consumer_<T>, requiresUpdateEveryTick: boolean, tick: Internal.Consumer_<T>): void;
        /**
         * Adds a `RunAroundLikeCrazyGoal` to the entity, only applicable to **horse** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        horseRunAroundLikeCrazy(priority: number, speedModifier: number): void;
        /**
         * Adds a `BreakDoorGoal` to the entity
         * @param priority The priority of the goal
         * @param doorBreakTime The time it takes to break a door, limited to 240 ticks
         * @param validDifficulties Determines what difficulties are valid for the goal
        */
        breakDoor(priority: number, doorBreakTime: number, validDifficulties: Internal.Predicate_<Internal.Difficulty>): void;
        /**
         * Adds a `AvoidEntityGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param entityClassToAvoid The class of entity to avoid
         * @param avoidPredicate The conditions under which an entity will be avoided
         * @param maxDist The maximum distance from a entity the mob will detect and flee from it
         * @param walkSpeedModifier Modifies the mob's speed when avoiding an entity
         * @param sprintSpeedModifier Modifies the mob's speed when avoiding an entity at close range
         * @param onAvoidEntityPredicate An additional predicate for entity avoidance
        */
        avoidEntity<E extends Internal.LivingEntity>(priority: number, entityClassToAvoid: E, avoidPredicate: Internal.Predicate_<Internal.LivingEntity>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number, onAvoidEntityPredicate: Internal.Predicate_<Internal.LivingEntity>): void;
        /**
         * Adds a `OpenDoorGoal` to the entity
         * @param priority The priority of the goal
         * @param closeDoor If the entity should also close doors
        */
        openDoor(priority: number, closeDoor: boolean): void;
        /**
         * Adds a `TryFindWaterGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
        */
        tryFindWater(priority: number): void;
        /**
         * Adds a `FloatGoal` to the entity
         * @param priority The priority of the goal
        */
        floatSwim(priority: number): void;
        /**
         * Adds a `FollowParentGoal` to the entity, only applicable to **animal** mobs
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
        */
        followParent(priority: number, speedModifier: number): void;
    }
    type AddGoalSelectorsEventJS_<T extends Internal.Mob> = AddGoalSelectorsEventJS<T>;
    abstract class AbstractNetworkAddon <H> {
        unregisterChannel(channelName: ResourceLocation_): H;
        handleDisconnect(): void;
        getHandler(channel: ResourceLocation_): H;
        registerChannel(channelName: ResourceLocation_, handler: H): boolean;
        getReceivableChannels(): Internal.Set<ResourceLocation>;
        get receivableChannels(): Internal.Set<ResourceLocation>
    }
    type AbstractNetworkAddon_<H> = AbstractNetworkAddon<H>;
    class FlyingPathNavigation extends Internal.PathNavigation {
        constructor(arg0: Internal.Mob_, arg1: Internal.Level_)
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        setCanPassDoors(arg0: boolean): void;
        setCanOpenDoors(arg0: boolean): void;
        set canPassDoors(arg0: boolean)
        set canOpenDoors(arg0: boolean)
    }
    type FlyingPathNavigation_ = FlyingPathNavigation;
    class IncreasedKillScoreTrigger$Builder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        /**
         * The entity that was killed.
        */
        setKilledByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The entity that was killed.
        */
        setKilledByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * The type of damage that killed an entity.
        */
        setKillingBelow(arg0: Internal.Consumer_<Internal.DamageSourcePredicateBuilder>): void;
        /**
         * The score that player increased.
        */
        setScore(arg0: Bounds_): void;
        /**
         * The type of damage that killed an entity.
        */
        setKillingBelowByPredicate(arg0: Internal.DamageSourcePredicate_): void;
        /**
         * The entity that was killed.
        */
        setKilled(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * The entity that was killed.
        */
        setKilledByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The entity that was killed.
        */
        set killedByType(arg0: Internal.EntityType_<any>)
        /**
         * The entity that was killed.
        */
        set killedByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The type of damage that killed an entity.
        */
        set killingBelow(arg0: Internal.Consumer_<Internal.DamageSourcePredicateBuilder>)
        /**
         * The score that player increased.
        */
        set score(arg0: Bounds_)
        /**
         * The type of damage that killed an entity.
        */
        set killingBelowByPredicate(arg0: Internal.DamageSourcePredicate_)
        /**
         * The entity that was killed.
        */
        set killed(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The entity that was killed.
        */
        set killedByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
    }
    type IncreasedKillScoreTrigger$Builder_ = IncreasedKillScoreTrigger$Builder;
    interface Path extends Internal.Comparable<Internal.Path>, Internal.Iterable<Internal.Path>, Internal.Watchable {
        abstract subpath(arg0: number, arg1: number): this;
        abstract relativize(arg0: Internal.Path_): this;
        toFile(): Internal.File;
        compareTo(arg0: any): number;
        of(arg0: Internal.URI_): this;
        abstract getName(arg0: number): this;
        abstract getFileName(): this;
        resolveSibling(arg0: Internal.Path_): this;
        startsWith(arg0: string): boolean;
        resolveSibling(arg0: string): this;
        iterator(): Internal.Iterator<Internal.Path>;
        forEach(arg0: Internal.Consumer_<Internal.Path>): void;
        abstract getFileSystem(): Internal.FileSystem;
        abstract toRealPath(...arg0: any_[]): this;
        abstract startsWith(arg0: Internal.Path_): boolean;
        endsWith(arg0: string): boolean;
        abstract resolve(arg0: Internal.Path_): this;
        abstract compareTo(arg0: Internal.Path_): number;
        abstract endsWith(arg0: Internal.Path_): boolean;
        resolve(arg0: string): this;
        abstract getNameCount(): number;
        register(arg0: Internal.WatchService_, ...arg1: Internal.WatchEvent$Kind_<any>[]): Internal.WatchKey;
        abstract toString(): string;
        abstract toUri(): Internal.URI;
        abstract toAbsolutePath(): this;
        spliterator(): Internal.Spliterator<Internal.Path>;
        abstract register(arg0: Internal.WatchService_, arg1: Internal.WatchEvent$Kind_<any>[], ...arg2: any_[]): Internal.WatchKey;
        abstract normalize(): this;
        abstract hashCode(): number;
        of(arg0: string, ...arg1: string[]): this;
        abstract getRoot(): this;
        abstract equals(arg0: any): boolean;
        abstract isAbsolute(): boolean;
        abstract getParent(): this;
        get fileName(): Internal.Path
        get fileSystem(): Internal.FileSystem
        get nameCount(): number
        get root(): Internal.Path
        get absolute(): boolean
        get parent(): Internal.Path
    }
    type Path_ = Path;
    interface IArrowEntityJS {
        abstract setPickUpItem(stack: Internal.ItemStack_): void;
        abstract getArrowBuilder(): Internal.BaseNonAnimatableEntityBuilder<any>;
        set pickUpItem(stack: Internal.ItemStack_)
        get arrowBuilder(): Internal.BaseNonAnimatableEntityBuilder<any>
    }
    type IArrowEntityJS_ = IArrowEntityJS;
    interface IRecipeTransferManager {
        abstract getRecipeTransferHandler<C extends Internal.AbstractContainerMenu, R>(arg0: C, arg1: Internal.IRecipeCategory_<R>): Internal.Optional<Internal.IRecipeTransferHandler<C, R>>;
        (arg0: C, arg1: Internal.IRecipeCategory<R>): Internal.Optional_<Internal.IRecipeTransferHandler<C, R>>;
    }
    type IRecipeTransferManager_ = IRecipeTransferManager;
    class ClientboundPlayerCombatKillPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getMessage(): Internal.Component;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getPlayerId(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get message(): Internal.Component
        get playerId(): number
        get skippable(): boolean
    }
    type ClientboundPlayerCombatKillPacket_ = ClientboundPlayerCombatKillPacket;
    class MinecartHopper extends Internal.AbstractMinecartContainer implements Internal.Hopper {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.MinecartHopper>, arg1: Internal.Level_)
        stopOpen(arg0: Player_): void;
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setEnabled(arg0: boolean): void;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        isChestVehicleEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlopeAdjustment(): number;
        setChanged(): void;
        isOnScoreboardTeam(teamId: string): boolean;
        isChestVehicleStillValid(arg0: Player_): boolean;
        canBeRidden(): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getWidth(): number;
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
        getSuckShape(): Internal.VoxelShape;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getComparatorLevel(): number;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getLevelY(): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        chestVehicleDestroyed(arg0: DamageSource_, arg1: Internal.Level_, arg2: Internal.Entity_): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        countItem(arg0: Internal.Item_): number;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        getTeamId(): string;
        removeChestVehicleItem(arg0: number, arg1: number): Internal.ItemStack;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getChestVehicleItem(arg0: number): Internal.ItemStack;
        shouldDoRailFunctions(): boolean;
        canRiderInteract(): boolean;
        shouldCloseCurrentScreen(): boolean;
        shouldRiderSit(): boolean;
        getHeight(): number;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        countNonEmpty(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        clear(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        self(): Internal.Container;
        getLevelZ(): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static tryClear(arg0: any): void;
        isPoweredCart(): boolean;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getSlots(): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        interactWithContainerVehicle(arg0: Player_): InteractionResult;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        clearChestVehicleContent(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        unpackChestVehicleLootTable(arg0: Player_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        count(ingredient: Internal.Ingredient_): number;
        setMotionX(x: number): void;
        count(): number;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        isEnabled(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        suckInItems(): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        tell(message: Internal.Component_): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setZ(z: number): void;
        setChestVehicleItem(arg0: number, arg1: Internal.ItemStack_): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        getLevelX(): number;
        runCommand(command: string): number;
        get maxCartSpeedOnRail(): number
        set enabled(arg0: boolean)
        get chestVehicleEmpty(): boolean
        get slopeAdjustment(): number
        get width(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get suckShape(): Internal.VoxelShape
        get comparatorLevel(): number
        get levelY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get height(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        get levelZ(): number
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get slots(): number
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get maxStackSize(): number
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get currentRailPosition(): BlockPos
        get empty(): boolean
        get enabled(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        get allItems(): Internal.List<Internal.ItemStack>
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get mutable(): boolean
        get levelX(): number
    }
    type MinecartHopper_ = MinecartHopper;
    class RandomSequences extends Internal.SavedData {
        constructor(arg0: number)
        get(arg0: ResourceLocation_): Internal.RandomSource;
        static load(arg0: number, arg1: Internal.CompoundTag_): Internal.RandomSequences;
    }
    type RandomSequences_ = RandomSequences;
    class ContextUtils$PreRenderContext <T> {
        constructor(poseStack: Internal.PoseStack_, entity: T, bakedModel: Internal.BakedGeoModel_, renderType: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTick: number, packedLight: number, packedOverlay: number)
        /**
         * The packed light
        */
        readonly packedLight: number;
        /**
         * The vertex consumer buffer
        */
        readonly buffer: Internal.VertexConsumer;
        /**
         * The PoseStack
        */
        readonly poseStack: Internal.PoseStack;
        /**
         * The buffer source
        */
        readonly bufferSource: Internal.MultiBufferSource;
        /**
         * The partial tick
        */
        readonly partialTick: number;
        /**
         * The baked model
        */
        readonly bakedModel: Internal.BakedGeoModel;
        /**
         * The packed overlay
        */
        readonly packedOverlay: number;
        /**
         * The animatable entity
        */
        readonly entity: T;
        /**
         * The render type
        */
        readonly renderType: Internal.RenderType;
    }
    type ContextUtils$PreRenderContext_<T> = ContextUtils$PreRenderContext<T>;
    interface SoundInstance extends Internal.FabricSoundInstance {
        getAudioStream(loader: Internal.SoundBufferLibrary_, id: ResourceLocation_, repeatInstantly: boolean): Internal.CompletableFuture<Internal.AudioStream>;
        abstract getAttenuation(): Internal.SoundInstance$Attenuation;
        abstract getLocation(): ResourceLocation;
        abstract getSource(): Internal.SoundSource;
        abstract resolve(arg0: Internal.SoundManager_): Internal.WeighedSoundEvents;
        canStartSilent(): boolean;
        getStream(soundBuffers: Internal.SoundBufferLibrary_, sound: Internal.Sound_, looping: boolean): Internal.CompletableFuture<any>;
        abstract getDelay(): number;
        canPlaySound(): boolean;
        abstract getX(): number;
        abstract isLooping(): boolean;
        abstract getVolume(): number;
        abstract getY(): number;
        abstract getZ(): number;
        abstract getPitch(): number;
        abstract getSound(): Internal.Sound;
        abstract isRelative(): boolean;
        createUnseededRandom(): Internal.RandomSource;
        get attenuation(): Internal.SoundInstance$Attenuation
        get location(): ResourceLocation
        get source(): Internal.SoundSource
        get delay(): number
        get x(): number
        get looping(): boolean
        get volume(): number
        get y(): number
        get z(): number
        get pitch(): number
        get sound(): Internal.Sound
        get relative(): boolean
    }
    type SoundInstance_ = SoundInstance;
    class RaycastSettingsConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(distance: number, block: boolean, entity: boolean, shapeType: Internal.ClipContext$Block_, fluidHandling: Internal.ClipContext$Fluid_)
        isConfigurationValid(): boolean;
        perform(arg0: Internal.Entity_, arg1: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>): Internal.HitResult;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        block(): boolean;
        fluidHandling(): Internal.ClipContext$Fluid;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        perform(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Vec3d_, arg3: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>): Internal.HitResult;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        distance(): number;
        getMissingBinds(): Internal.List<string>;
        entity(): boolean;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        shapeType(): Internal.ClipContext$Block;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly MAP_CODEC: Internal.MapCodec<Internal.RaycastSettingsConfiguration>;
    }
    type RaycastSettingsConfiguration_ = RaycastSettingsConfiguration;
    interface TemporalField {
        abstract isTimeBased(): boolean;
        abstract range(): Internal.ValueRange;
        abstract toString(): string;
        abstract rangeRefinedBy(arg0: Internal.TemporalAccessor_): Internal.ValueRange;
        abstract isSupportedBy(arg0: Internal.TemporalAccessor_): boolean;
        abstract isDateBased(): boolean;
        getDisplayName(arg0: Internal.Locale_): string;
        abstract adjustInto<R extends Internal.Temporal>(arg0: R, arg1: number): R;
        abstract getBaseUnit(): Internal.TemporalUnit;
        resolve(arg0: Internal.Map_<Internal.TemporalField, number>, arg1: Internal.TemporalAccessor_, arg2: Internal.ResolverStyle_): Internal.TemporalAccessor;
        abstract getRangeUnit(): Internal.TemporalUnit;
        abstract getFrom(arg0: Internal.TemporalAccessor_): number;
        get timeBased(): boolean
        get dateBased(): boolean
        get baseUnit(): Internal.TemporalUnit
        get rangeUnit(): Internal.TemporalUnit
    }
    type TemporalField_ = TemporalField;
    class EntityArgument$Info implements Internal.ArgumentTypeInfo<Internal.EntityArgument, Internal.EntityArgument$Info$Template> {
        constructor()
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.EntityArgument_): Internal.EntityArgument$Info$Template;
        serializeToJson(arg0: Internal.EntityArgument$Info$Template_, arg1: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.EntityArgument$Info$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type EntityArgument$Info_ = EntityArgument$Info;
    class EnderManJSBuilder extends Internal.PathfinderMobBuilder<any> {
        constructor(i: ResourceLocation_)
        createObject(): any;
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
    }
    type EnderManJSBuilder_ = EnderManJSBuilder;
    interface BaseEntityBuilder$IParticleListenerJS <E extends Internal.Entity & Internal.IAnimatableJSNL> {
        abstract summonParticle(event: Internal.BaseEntityBuilder$ParticleKeyFrameEventJS_<E>): void;
        (event: Internal.BaseEntityBuilder$ParticleKeyFrameEventJS<E>): void;
    }
    type BaseEntityBuilder$IParticleListenerJS_<E extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder$IParticleListenerJS<E>;
    interface ArgumentSignatures$Signer {
        abstract sign(arg0: string): Internal.MessageSignature;
        (arg0: string): Internal.MessageSignature_;
    }
    type ArgumentSignatures$Signer_ = ArgumentSignatures$Signer;
    interface MapDecorationType <D extends Internal.CustomMapDecoration, M extends Internal.MapBlockMarker<D>> {
        abstract loadDecorationFromBuffer(arg0: Internal.FriendlyByteBuf_): D;
        abstract isFromWorld(): boolean;
        abstract createEmptyMarker(): M;
        abstract loadMarkerFromNBT(arg0: Internal.CompoundTag_): M;
        getAssociatedStructure(): Internal.Optional<Internal.HolderSet<Internal.Structure>>;
        abstract getWorldMarkerFromWorld(arg0: Internal.BlockGetter_, arg1: BlockPos_): M;
        getCustomFactoryID(): ResourceLocation;
        getDefaultMapColor(): number;
        get fromWorld(): boolean
        get associatedStructure(): Internal.Optional<Internal.HolderSet<Internal.Structure>>
        get customFactoryID(): ResourceLocation
        get defaultMapColor(): number
    }
    type MapDecorationType_<D extends Internal.CustomMapDecoration, M extends Internal.MapBlockMarker<D>> = MapDecorationType<D, M>;
    interface ToDoubleFunction <T> {
        abstract applyAsDouble(arg0: T): number;
        (arg0: T): number;
    }
    type ToDoubleFunction_<T> = ToDoubleFunction<T>;
    class SpawnProbabilityModifier implements Internal.BiomeModifier {
        constructor()
        codec(): Internal.Codec<Internal.BiomeModifier>;
        static makeCodec(): Internal.Codec<Internal.SpawnProbabilityModifier>;
        modify(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.BiomeModifier$Phase_, arg2: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type SpawnProbabilityModifier_ = SpawnProbabilityModifier;
    class PistonBaseBlock extends Internal.DirectionalBlock {
        constructor(arg0: boolean, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static isPushable(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: boolean, arg5: Internal.Direction_): boolean;
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
        static readonly TRIGGER_DROP: 2;
        static readonly DOWN_AABB: Internal.CubeVoxelShape;
        static readonly NORTH_AABB: Internal.CubeVoxelShape;
        static readonly TRIGGER_EXTEND: 0;
        static readonly EXTENDED: Internal.BooleanProperty;
        static readonly SOUTH_AABB: Internal.CubeVoxelShape;
        static readonly EAST_AABB: Internal.CubeVoxelShape;
        static readonly PLATFORM_THICKNESS: 4.0;
        static readonly UP_AABB: Internal.CubeVoxelShape;
        static readonly TRIGGER_CONTRACT: 1;
        static readonly WEST_AABB: Internal.CubeVoxelShape;
    }
    type PistonBaseBlock_ = PistonBaseBlock;
    interface IRecipeTransferHandler <C extends Internal.AbstractContainerMenu, R> {
        abstract getContainerClass(): C;
        abstract transferRecipe(arg0: C, arg1: R, arg2: Internal.IRecipeSlotsView_, arg3: Player_, arg4: boolean, arg5: boolean): Internal.IRecipeTransferError;
        abstract getMenuType(): Internal.Optional<Internal.MenuType<C>>;
        abstract getRecipeType(): mezz.jei.api.recipe.RecipeType<R>;
        get containerClass(): C
        get menuType(): Internal.Optional<Internal.MenuType<C>>
        get recipeType(): mezz.jei.api.recipe.RecipeType<R>
    }
    type IRecipeTransferHandler_<C extends Internal.AbstractContainerMenu, R> = IRecipeTransferHandler<C, R>;
    class VehicleActionConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(action: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>, biEntityAction: Internal.Holder_<Internal.ConfiguredBiEntityAction<any, any>>, biEntityCondition: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, recursive: boolean)
        biEntityCondition(): Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        recursive(): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        biEntityAction(): Internal.Holder<Internal.ConfiguredBiEntityAction<any, any>>;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        action(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.VehicleActionConfiguration>;
    }
    type VehicleActionConfiguration_ = VehicleActionConfiguration;
    interface ICapabilityProvider {
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        (arg0: Internal.Capability<T>, arg1: Internal.Direction): Internal.LazyOptional_<T>;
    }
    type ICapabilityProvider_ = ICapabilityProvider;
    class DustParticleOptions extends Internal.DustParticleOptionsBase {
        constructor(arg0: Vector3f_, arg1: number)
        getType(): Internal.ParticleType<Internal.DustParticleOptions>;
        get type(): Internal.ParticleType<Internal.DustParticleOptions>
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.DustParticleOptions>;
        static readonly REDSTONE: Internal.DustParticleOptions;
        static readonly REDSTONE_PARTICLE_COLOR: Vector3f;
        static readonly CODEC: Internal.Codec<Internal.DustParticleOptions>;
    }
    type DustParticleOptions_ = DustParticleOptions;
    class ClientboundSetTitleTextPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Component_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getText(): Internal.Component;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get text(): Internal.Component
        get skippable(): boolean
    }
    type ClientboundSetTitleTextPacket_ = ClientboundSetTitleTextPacket;
    interface Script {
        abstract exec(arg0: Internal.Context_, arg1: Internal.Scriptable_): any;
        (arg0: Internal.Context, arg1: Internal.Scriptable): any;
    }
    type Script_ = Script;
    class AttributedCharacterIterator$Attribute implements Internal.Serializable {
        static readonly LANGUAGE: Internal.AttributedCharacterIterator$Attribute;
        static readonly READING: Internal.AttributedCharacterIterator$Attribute;
        static readonly INPUT_METHOD_SEGMENT: Internal.AttributedCharacterIterator$Attribute;
    }
    type AttributedCharacterIterator$Attribute_ = AttributedCharacterIterator$Attribute;
    abstract class Calendar implements Internal.Cloneable, Internal.Comparable<Internal.Calendar>, Internal.Serializable {
        getWeekYear(): number;
        clone(): any;
        getDisplayNames(arg0: number, arg1: number, arg2: Internal.Locale_): Internal.Map<string, number>;
        static getInstance(arg0: Internal.TimeZone_, arg1: Internal.Locale_): Internal.Calendar;
        setWeekDate(arg0: number, arg1: number, arg2: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        toInstant(): Internal.Instant;
        isSet(arg0: number): boolean;
        abstract getMinimum(arg0: number): number;
        compareTo(arg0: Internal.Calendar_): number;
        set(arg0: number, arg1: number, arg2: number): void;
        static getAvailableLocales(): Internal.Locale[];
        setFirstDayOfWeek(arg0: number): void;
        compareTo(arg0: any): number;
        getTimeInMillis(): number;
        getCalendarType(): string;
        static getInstance(): Internal.Calendar;
        abstract getLeastMaximum(arg0: number): number;
        setMinimalDaysInFirstWeek(arg0: number): void;
        isLenient(): boolean;
        abstract add(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number): void;
        isWeekDateSupported(): boolean;
        static getInstance(arg0: Internal.Locale_): Internal.Calendar;
        getWeeksInWeekYear(): number;
        getDisplayName(arg0: number, arg1: number, arg2: Internal.Locale_): string;
        getTime(): Internal.Date;
        setTimeInMillis(arg0: number): void;
        abstract roll(arg0: number, arg1: boolean): void;
        clear(arg0: number): void;
        abstract getGreatestMinimum(arg0: number): number;
        getMinimalDaysInFirstWeek(): number;
        after(arg0: any): boolean;
        setTime(arg0: Internal.Date_): void;
        abstract getMaximum(arg0: number): number;
        static getInstance(arg0: Internal.TimeZone_): Internal.Calendar;
        roll(arg0: number, arg1: number): void;
        getTimeZone(): Internal.TimeZone;
        setTimeZone(arg0: Internal.TimeZone_): void;
        getFirstDayOfWeek(): number;
        clear(): void;
        static getAvailableCalendarTypes(): Internal.Set<string>;
        getActualMinimum(arg0: number): number;
        get(arg0: number): number;
        getActualMaximum(arg0: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        before(arg0: any): boolean;
        setLenient(arg0: boolean): void;
        get weekYear(): number
        get availableLocales(): Internal.Locale[]
        set firstDayOfWeek(arg0: number)
        get timeInMillis(): number
        get calendarType(): string
        get instance(): Internal.Calendar
        set minimalDaysInFirstWeek(arg0: number)
        get lenient(): boolean
        get weekDateSupported(): boolean
        get weeksInWeekYear(): number
        get time(): Internal.Date
        set timeInMillis(arg0: number)
        get minimalDaysInFirstWeek(): number
        set time(arg0: Internal.Date_)
        get timeZone(): Internal.TimeZone
        set timeZone(arg0: Internal.TimeZone_)
        get firstDayOfWeek(): number
        get availableCalendarTypes(): Internal.Set<string>
        set lenient(arg0: boolean)
        static readonly OCTOBER: 9;
        static readonly LONG: 2;
        static readonly TUESDAY: 3;
        static readonly AM_PM: 9;
        static readonly MONTH: 2;
        static readonly JULY: 6;
        static readonly MAY: 4;
        static readonly UNDECIMBER: 12;
        static readonly FEBRUARY: 1;
        static readonly WEEK_OF_MONTH: 4;
        static readonly DST_OFFSET: 16;
        static readonly WEDNESDAY: 4;
        static readonly NOVEMBER: 10;
        static readonly LONG_STANDALONE: 32770;
        static readonly SHORT_STANDALONE: 32769;
        static readonly AM: 0;
        static readonly HOUR_OF_DAY: 11;
        static readonly ALL_STYLES: 0;
        static readonly MARCH: 2;
        static readonly SATURDAY: 7;
        static readonly SHORT_FORMAT: 1;
        static readonly JANUARY: 0;
        static readonly NARROW_FORMAT: 4;
        static readonly FIELD_COUNT: 17;
        static readonly ERA: 0;
        static readonly YEAR: 1;
        static readonly DAY_OF_WEEK_IN_MONTH: 8;
        static readonly MILLISECOND: 14;
        static readonly WEEK_OF_YEAR: 3;
        static readonly AUGUST: 7;
        static readonly DATE: 5;
        static readonly MONDAY: 2;
        static readonly SHORT: 1;
        static readonly LONG_FORMAT: 2;
        static readonly APRIL: 3;
        static readonly FRIDAY: 6;
        static readonly NARROW_STANDALONE: 32772;
        static readonly SECOND: 13;
        static readonly ZONE_OFFSET: 15;
        static readonly SUNDAY: 1;
        static readonly DAY_OF_MONTH: 5;
        static readonly DAY_OF_YEAR: 6;
        static readonly THURSDAY: 5;
        static readonly PM: 1;
        static readonly JUNE: 5;
        static readonly HOUR: 10;
        static readonly DECEMBER: 11;
        static readonly SEPTEMBER: 8;
        static readonly MINUTE: 12;
        static readonly DAY_OF_WEEK: 7;
    }
    type Calendar_ = Calendar;
    abstract class BlockBuilder extends Internal.BuilderBase<Internal.Block> {
        constructor(i: ResourceLocation_)
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
        */
        bounciness(bounciness: number): this;
        /**
         * Note block instrument.
        */
        instrument(i: Internal.NoteBlockInstrument_): this;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
        */
        fallenOn(callbackJS: Internal.Consumer_<Internal.EntityFallenOnBlockCallbackJS>): this;
        /**
         * Tags the item with the given tag.
        */
        tagItem(tag: ResourceLocation_): this;
        /**
         * Set the block's model.
        */
        model(m: string): this;
        sandSoundType(): this;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): this;
        /**
         * Makes the block a redstone conductor.
        */
        redstoneConductor(b: boolean): this;
        noSoundType(): this;
        /**
         * Modifies the block's item representation.
        */
        item(i: Internal.Consumer_<Internal.BlockItemBuilder>): this;
        /**
         * Set the default state of the block.
        */
        defaultState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyCallbackJS>): this;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
        */
        steppedOn(callbackJS: Internal.Consumer_<Internal.EntitySteppedOnBlockCallbackJS>): this;
        /**
         * Texture the block on all sides with the same texture.
        */
        textureAll(tex: string): this;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
        */
        defaultTranslucent(): this;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
        */
        dynamicMapColor(m: Internal.Function_<Internal.BlockState, any>): this;
        /**
         * Tags both the block and the item with the given tag.
        */
        tagBoth(tag: ResourceLocation_): this;
        /**
         * Makes the block view blocking.
        */
        viewBlocking(b: boolean): this;
        /**
         * Makes the block unbreakable.
        */
        unbreakable(): this;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
        */
        property(property: Internal.Property_<any>): this;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
        */
        resistance(r: number): this;
        gravelSoundType(): this;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): this;
        /**
         * Set the callback for determining the blocks state when placed.
        */
        placementState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyPlacementCallbackJS>): this;
        /**
         * Set if the block can be replaced by something else.
        */
        canBeReplaced(callbackJS: Internal.Predicate_<Internal.CanBeReplacedCallbackJS>): this;
        /**
         * Sets random tick callback for this black.
        */
        randomTick(randomTickCallback: Internal.Consumer_<Internal.RandomTickCallbackJS>): this;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
        */
        exploded(callbackJS: Internal.Consumer_<Internal.BlockExplodedCallbackJS>): this;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
        */
        lightLevel(light: number): this;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: Internal.Component_): Internal.BuilderBase<Internal.Block>;
        static createShape(boxes: Internal.List_<Internal.AABB>): Internal.VoxelShape;
        /**
         * Makes the block not be solid.
        */
        notSolid(): this;
        /**
         * Sets the block's map color. Defaults to NONE.
        */
        mapColor(m: Internal.MapColor_): this;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
        */
        renderType(l: string): this;
        /**
         * Clears all drops for the block.
        */
        noDrops(): this;
        stoneSoundType(): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setWaterlogged(waterlogged: boolean): this;
        grassSoundType(): this;
        createProperties(): Internal.BlockBehaviour$Properties;
        /**
         * Sets the block's sound type. Defaults to wood.
        */
        soundType(m: SoundType_): this;
        /**
         * Makes the block can be waterlogged.
        */
        waterlogged(): this;
        /**
         * Set the callback used for determining how the block rotates
        */
        rotateState(callbackJS: Internal.Consumer_<Internal.BlockStateRotateCallbackJS>): this;
        /**
         * Set how high you can jump on the block.
        */
        jumpFactor(f: number): this;
        /**
         * Set the callback used for right-clicking on the block
        */
        rightClick(callbackJS: Internal.Consumer_<Internal.BlockRightClickedEventJS>): this;
        /**
         * Set the color of a specific layer of the block.
        */
        color(color: Internal.BlockTintFunction_): this;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(f: boolean): this;
        /**
         * Texture a specific side of the block.
        */
        textureSide(direction: Internal.Direction_, tex: string): this;
        /**
         * Texture a specific texture key of the block.
        */
        texture(id: string, tex: string): this;
        /**
         * Checks if the block can be waterlogged.
        */
        canBeWaterlogged(): boolean;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
        */
        hardness(h: number): this;
        glassSoundType(): this;
        /**
         * Creates a Block Entity for this block
        */
        blockEntity(callback: Internal.Consumer_<Internal.BlockEntityInfo>): this;
        /**
         * Set the block to have no corresponding item.
        */
        noItem(): this;
        transformObject(arg0: any): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWaterlogged(): boolean;
        /**
         * Set the callback used for determining how the block is mirrored
        */
        mirrorState(callbackJS: Internal.Consumer_<Internal.BlockStateMirrorCallbackJS>): this;
        /**
         * Tags the block with the given tag.
        */
        tagBlock(tag: ResourceLocation_): this;
        /**
         * Set how slippery the block is.
        */
        slipperiness(f: number): this;
        woodSoundType(): this;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
        */
        opaque(o: boolean): this;
        /**
         * Makes mobs not spawn on the block.
        */
        noValidSpawns(b: boolean): this;
        material(material: string): this;
        transformObject(obj: Internal.Block_): Internal.Block;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
        */
        defaultCutout(): this;
        /**
         * Makes the block transparent.
        */
        transparent(b: boolean): this;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
        */
        fullBlock(f: boolean): this;
        /**
         * Makes the block not collide with entities.
        */
        noCollision(): this;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
        */
        afterFallenOn(callbackJS: Internal.Consumer_<Internal.AfterEntityFallenOnBlockCallbackJS>): this;
        /**
         * Makes the block suffocating.
        */
        suffocating(b: boolean): this;
        /**
         * Set the color of a specific layer of the block.
        */
        color(index: number, color: Internal.BlockTintFunction_): this;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
        */
        speedFactor(f: number): this;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(): this;
        cropSoundType(): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set waterlogged(waterlogged: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get waterlogged(): boolean
        lootTable: Internal.Consumer<Internal.LootBuilder>;
        blockstateJson: Internal.JsonObject;
        modelJson: Internal.JsonObject;
        randomTickCallback: Internal.Consumer<Internal.RandomTickCallbackJS>;
    }
    type BlockBuilder_ = BlockBuilder;
    class AttributeInstance implements Internal.EntityAttributeInstanceAccess, Internal.EntityAttributeInstanceAccessor, Internal.AttributeInstanceAccessor {
        constructor(arg0: Internal.Attribute_, arg1: Internal.Consumer_<Internal.AttributeInstance>)
        save(): Internal.CompoundTag;
        getModifiers(): Internal.Set<Internal.AttributeModifier>;
        removeModifier(arg0: Internal.AttributeModifier_): void;
        setBaseValue(arg0: number): void;
        hasModifier(arg0: Internal.AttributeModifier_): boolean;
        callOnUpdate(): void;
        removeModifiers(): void;
        removeModifier(arg0: Internal.UUID_): void;
        getModifiers(arg0: Internal.AttributeModifier$Operation_): Internal.Set<Internal.AttributeModifier>;
        setDirty(): void;
        getAttribute(): Internal.Attribute;
        setUpdateCallback(arg0: Internal.Consumer_<any>): void;
        getUpdateCallback(): Internal.Consumer<any>;
        getBaseValue(): number;
        getCachedValue(): number;
        addTransientModifier(arg0: Internal.AttributeModifier_): void;
        replaceFrom(arg0: Internal.AttributeInstance_): void;
        load(arg0: Internal.CompoundTag_): void;
        getEntity(): Internal.Entity;
        setEntity(arg0: Internal.Entity_): void;
        getModifier(arg0: Internal.UUID_): Internal.AttributeModifier;
        getValue(): number;
        removePermanentModifier(arg0: Internal.UUID_): boolean;
        addPermanentModifier(arg0: Internal.AttributeModifier_): void;
        get modifiers(): Internal.Set<Internal.AttributeModifier>
        set baseValue(arg0: number)
        get attribute(): Internal.Attribute
        set updateCallback(arg0: Internal.Consumer_<any>)
        get updateCallback(): Internal.Consumer<any>
        get baseValue(): number
        get cachedValue(): number
        get entity(): Internal.Entity
        set entity(arg0: Internal.Entity_)
        get value(): number
    }
    type AttributeInstance_ = AttributeInstance;
    class TransactionContext$Result extends Internal.Enum<Internal.TransactionContext$Result> {
        static values(): Internal.TransactionContext$Result[];
        wasCommitted(): boolean;
        static valueOf(name: string): Internal.TransactionContext$Result;
        wasAborted(): boolean;
        static readonly COMMITTED: Internal.TransactionContext$Result;
        static readonly ABORTED: Internal.TransactionContext$Result;
    }
    type TransactionContext$Result_ = TransactionContext$Result | "committed" | "aborted";
    class RedstoneIdolBlock extends Internal.PoweredBlock {
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type RedstoneIdolBlock_ = RedstoneIdolBlock;
    interface ScheduledExecutorService extends Internal.ExecutorService {
        abstract scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract isShutdown(): boolean;
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract submit<T>(arg0: Internal.Callable_<T>): Internal.Future<T>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        abstract scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        abstract shutdown(): void;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<V>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): Internal.Future<T>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract isTerminated(): boolean;
        get shutdown(): boolean
        get terminated(): boolean
    }
    type ScheduledExecutorService_ = ScheduledExecutorService;
    class Display$TextDisplay extends Internal.Display {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
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
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        textRenderState(): Internal.Display$TextDisplay$TextRenderState;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        setText(arg0: Internal.Component_): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        shouldRiderSit(): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        static getAlign(arg0: number): Internal.Display$TextDisplay$Align;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        cacheDisplay(arg0: Internal.Display$TextDisplay$LineSplitter_): Internal.Display$TextDisplay$CachedInfo;
        runCommand(command: string): number;
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        set text(arg0: Internal.Component_)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        static readonly FLAG_SEE_THROUGH: 2;
        static readonly TAG_TEXT: "text";
        static readonly INITIAL_BACKGROUND: 1073741824;
        static readonly FLAG_SHADOW: 1;
        static readonly FLAG_ALIGN_LEFT: 8;
        static readonly FLAG_ALIGN_RIGHT: 16;
        static readonly FLAG_USE_DEFAULT_BACKGROUND: 4;
    }
    type Display$TextDisplay_ = Display$TextDisplay;
    interface BlockAndTintGetter extends Internal.BlockGetter, Internal.IForgeBlockAndTintGetter {
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
    type BlockAndTintGetter_ = BlockAndTintGetter;
    class BlockDestructionProgress implements Internal.Comparable<Internal.BlockDestructionProgress> {
        constructor(arg0: number, arg1: BlockPos_)
        getProgress(): number;
        getUpdatedRenderTick(): number;
        getPos(): BlockPos;
        compareTo(arg0: Internal.BlockDestructionProgress_): number;
        updateTick(arg0: number): void;
        setProgress(arg0: number): void;
        compareTo(arg0: any): number;
        getId(): number;
        get progress(): number
        get updatedRenderTick(): number
        get pos(): BlockPos
        set progress(arg0: number)
        get id(): number
    }
    type BlockDestructionProgress_ = BlockDestructionProgress;
    class AttributeModifier$Operation extends Internal.Enum<Internal.AttributeModifier$Operation> {
        static valueOf(arg0: string): Internal.AttributeModifier$Operation;
        static fromValue(arg0: number): Internal.AttributeModifier$Operation;
        static values(): Internal.AttributeModifier$Operation[];
        toValue(): number;
        static readonly MULTIPLY_BASE: Internal.AttributeModifier$Operation;
        static readonly MULTIPLY_TOTAL: Internal.AttributeModifier$Operation;
        static readonly ADDITION: Internal.AttributeModifier$Operation;
    }
    type AttributeModifier$Operation_ = "addition" | AttributeModifier$Operation | "multiply_total" | "multiply_base";
    class ComplexItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
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
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getUpdatePacket(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): Internal.Packet<any>;
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
    }
    type ComplexItem_ = ComplexItem;
    interface AnimationMetadataSectionAccessor {
        abstract setFrameWidth(arg0: number): void;
        abstract setFrameHeight(arg0: number): void;
        abstract getFrameHeight(): number;
        abstract getFrameWidth(): number;
        set frameWidth(arg0: number)
        set frameHeight(arg0: number)
        get frameHeight(): number
        get frameWidth(): number
    }
    type AnimationMetadataSectionAccessor_ = AnimationMetadataSectionAccessor;
    abstract class AbstractMinecart extends Internal.Entity implements Internal.DynamicLightSource, Internal.MinecartAccessor, Internal.IForgeAbstractMinecart {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: number, arg3: number, arg4: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        handler$dcd000$alexscaves$ac_getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.CallbackInfoReturnable_<any>): void;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        setCustomDisplay(arg0: boolean): void;
        getSlopeAdjustment(): number;
        setHurtTime(arg0: number): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setCanUseRail(arg0: boolean): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        isLiving(): boolean;
        abstract getMinecartType(): Internal.AbstractMinecart$Type;
        moveMinecartOnRail(arg0: BlockPos_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getComparatorLevel(): number;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        abstract getDropItem(): Internal.Item;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldDoRailFunctions(): boolean;
        canRiderInteract(): boolean;
        destroy(arg0: DamageSource_): void;
        hasCustomDisplay(): boolean;
        shouldRiderSit(): boolean;
        moveAlongTrack(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        handler$dcd000$alexscaves$ac_getPos(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setDisplayOffset(arg0: number): void;
        setMaxSpeedAirVertical(arg0: number): void;
        moveMinecartOnMagLev(arg0: BlockPos_): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        getDamage(): number;
        applyNaturalSlowdown(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPoweredCart(): boolean;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getDragAir(): number;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getDisplayBlockState(): Internal.BlockState;
        getDefaultDisplayOffset(): number;
        getMaxSpeedAirVertical(): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        comeOffTrack(): void;
        self(): Internal.Entity;
        getMaxSpeed(): number;
        getBlock(): Internal.BlockContainerJS;
        getDefaultDisplayBlockState(): Internal.BlockState;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        handler$dcd000$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        getHurtTime(): number;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        canUseRail(): boolean;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setHurtDir(arg0: number): void;
        getCurrentCartSpeedCapOnRail(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        isOnMagLevRail(): boolean;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHurtDir(): number;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMaxSpeedAirLateral(): number;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setDragAir(arg0: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        getMaxSpeedWithRail(): number;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        get maxCartSpeedOnRail(): number
        set customDisplay(arg0: boolean)
        get slopeAdjustment(): number
        set hurtTime(arg0: number)
        set damage(arg0: number)
        get displayOffset(): number
        set canUseRail(arg0: boolean)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get minecartType(): Internal.AbstractMinecart$Type
        get comparatorLevel(): number
        get displayName(): Internal.Component
        set maxSpeedAirLateral(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get dropItem(): Internal.Item
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        set displayOffset(arg0: number)
        set maxSpeedAirVertical(arg0: number)
        get frame(): boolean
        get damage(): number
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        get dragAir(): number
        set currentCartSpeedCapOnRail(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get displayBlockState(): Internal.BlockState
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        get type(): string
        get maxSpeed(): number
        get block(): Internal.BlockContainerJS
        get defaultDisplayBlockState(): Internal.BlockState
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get hurtTime(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get currentRailPosition(): BlockPos
        set hurtDir(arg0: number)
        get currentCartSpeedCapOnRail(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get onMagLevRail(): boolean
        get multipartEntity(): boolean
        get hurtDir(): number
        get parts(): Internal.PartEntity<any>[]
        get maxSpeedAirLateral(): number
        get motionZ(): number
        set z(z: number)
        set dragAir(arg0: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get maxSpeedWithRail(): number
        set displayBlockState(arg0: Internal.BlockState_)
        static readonly WATER_SLOWDOWN_FACTOR: 0.95;
    }
    type AbstractMinecart_ = AbstractMinecart;
    interface CreativeModeTabKJS {
        abstract kjs$setIcon(arg0: Internal.ItemStack_): void;
        abstract kjs$setDisplayName(arg0: Internal.Component_): void;
    }
    type CreativeModeTabKJS_ = CreativeModeTabKJS;
    class WaterWorkerEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type WaterWorkerEnchantment_ = WaterWorkerEnchantment;
    class ThornsEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        static shouldHit(arg0: number, arg1: Internal.RandomSource_): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        static getDamage(arg0: number, arg1: Internal.RandomSource_): number;
    }
    type ThornsEnchantment_ = ThornsEnchantment;
    class LocationPredicate$Builder {
        constructor()
        setY(arg0: Internal.MinMaxBounds$Doubles_): this;
        setDimension(arg0: Internal.ResourceKey_<Internal.Level>): this;
        setBlock(arg0: net.minecraft.advancements.critereon.BlockPredicate_): this;
        setFluid(arg0: Internal.FluidPredicate_): this;
        setZ(arg0: Internal.MinMaxBounds$Doubles_): this;
        setSmokey(arg0: boolean): this;
        build(): Internal.LocationPredicate;
        static location(): Internal.LocationPredicate$Builder;
        setStructure(arg0: Internal.ResourceKey_<Internal.Structure>): this;
        setLight(arg0: Internal.LightPredicate_): this;
        setBiome(arg0: Internal.ResourceKey_<Internal.Biome>): this;
        setX(arg0: Internal.MinMaxBounds$Doubles_): this;
        set y(arg0: Internal.MinMaxBounds$Doubles_)
        set dimension(arg0: Internal.ResourceKey_<Internal.Level>)
        set block(arg0: net.minecraft.advancements.critereon.BlockPredicate_)
        set fluid(arg0: Internal.FluidPredicate_)
        set z(arg0: Internal.MinMaxBounds$Doubles_)
        set smokey(arg0: boolean)
        set structure(arg0: Internal.ResourceKey_<Internal.Structure>)
        set light(arg0: Internal.LightPredicate_)
        set biome(arg0: Internal.ResourceKey_<Internal.Biome>)
        set x(arg0: Internal.MinMaxBounds$Doubles_)
    }
    type LocationPredicate$Builder_ = LocationPredicate$Builder;
    class ChatLog {
        constructor(arg0: number)
        lookup(arg0: number): Internal.LoggedChatEvent;
        start(): number;
        end(): number;
        push(arg0: Internal.LoggedChatEvent_): void;
        static codec(arg0: number): Internal.Codec<Internal.ChatLog>;
    }
    type ChatLog_ = ChatLog;
    interface EffectsProperties {
        abstract getAmbientLoopSound(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        abstract getWaterColor(): number;
        abstract getGrassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier;
        abstract getAmbientAdditionsSound(): Internal.Optional<Internal.AmbientAdditionsSettings>;
        abstract getBackgroundMusic(): Internal.Optional<Internal.Music>;
        abstract getFoliageColorOverride(): Internal.OptionalInt;
        abstract getAmbientMoodSound(): Internal.Optional<Internal.AmbientMoodSettings>;
        abstract getWaterFogColor(): number;
        abstract getAmbientParticle(): Internal.Optional<Internal.AmbientParticleSettings>;
        abstract getFogColor(): number;
        abstract getSkyColor(): number;
        abstract getGrassColorOverride(): Internal.OptionalInt;
        get ambientLoopSound(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>
        get waterColor(): number
        get grassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier
        get ambientAdditionsSound(): Internal.Optional<Internal.AmbientAdditionsSettings>
        get backgroundMusic(): Internal.Optional<Internal.Music>
        get foliageColorOverride(): Internal.OptionalInt
        get ambientMoodSound(): Internal.Optional<Internal.AmbientMoodSettings>
        get waterFogColor(): number
        get ambientParticle(): Internal.Optional<Internal.AmbientParticleSettings>
        get fogColor(): number
        get skyColor(): number
        get grassColorOverride(): Internal.OptionalInt
    }
    type EffectsProperties_ = EffectsProperties;
    interface WorldCreationContext$OptionsModifier extends Internal.UnaryOperator<Internal.WorldOptions> {
        identity<T>(): Internal.UnaryOperator<T>;
        abstract apply(arg0: Internal.WorldOptions_): Internal.WorldOptions;
        andThen<V>(arg0: Internal.Function_<Internal.WorldOptions, V>): Internal.Function<Internal.WorldOptions, V>;
        compose<V>(arg0: Internal.Function_<V, Internal.WorldOptions>): Internal.Function<V, Internal.WorldOptions>;
        (arg0: Internal.WorldOptions): Internal.WorldOptions_;
    }
    type WorldCreationContext$OptionsModifier_ = WorldCreationContext$OptionsModifier;
    class Weight {
        static of(arg0: number): Internal.Weight;
        asInt(): number;
        static readonly CODEC: Internal.Codec<Internal.Weight>;
    }
    type Weight_ = Weight;
    class AnimalPanic extends Internal.Behavior<Internal.PathfinderMob> {
        constructor(arg0: number, arg1: Internal.Predicate_<Internal.PathfinderMob>)
        constructor(arg0: number)
        checkExtraStartConditions(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_): boolean;
        canStillUse(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): boolean;
        start(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): void;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): void;
        stop(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): void;
    }
    type AnimalPanic_ = AnimalPanic;
    class EntityPropertyCondition implements org.mesdag.advjs.predicate.condition.ICondition {
        constructor(arg0: Internal.EntityPredicate_)
        /**
         * Invert this condition.
        */
        invert(): this;
    }
    type EntityPropertyCondition_ = EntityPropertyCondition;
    interface WorldlyContainerHolder {
        abstract getContainer(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.WorldlyContainer;
        (arg0: Internal.BlockState, arg1: Internal.LevelAccessor, arg2: BlockPos): Internal.WorldlyContainer_;
    }
    type WorldlyContainerHolder_ = WorldlyContainerHolder;
    class ClientChunkCache$Storage {
        constructor(arg0: Internal.ClientChunkCache_, arg1: number)
        replace(arg0: number, arg1: Internal.LevelChunk_, arg2: Internal.LevelChunk_): Internal.LevelChunk;
        getIndex(arg0: number, arg1: number): number;
        getChunk(arg0: number): Internal.LevelChunk;
        inRange(arg0: number, arg1: number): boolean;
        replace(arg0: number, arg1: Internal.LevelChunk_): void;
        viewCenterX: number;
        readonly f_104465_: Internal.ClientChunkCache;
        viewCenterZ: number;
        readonly chunkRadius: number;
        readonly chunks: Internal.AtomicReferenceArray<Internal.LevelChunk>;
        chunkCount: number;
    }
    type ClientChunkCache$Storage_ = ClientChunkCache$Storage;
    class FatalFlickerEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        static performDash(user: Internal.LivingEntity_, world: Internal.Level_, radius: number): void;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type FatalFlickerEffect_ = FatalFlickerEffect;
    interface InstantSource {
        tick(arg0: Internal.InstantSource_, arg1: Duration_): this;
        offset(arg0: Internal.InstantSource_, arg1: Duration_): this;
        fixed(arg0: Internal.Instant_): this;
        abstract instant(): Internal.Instant;
        system(): this;
        withZone(arg0: Internal.ZoneId_): Internal.Clock;
        millis(): number;
        (): Internal.Instant_;
    }
    type InstantSource_ = InstantSource;
    class ActionOnWakeUpPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ActionOnWakeUpConfiguration> {
        constructor()
        static execute(arg0: Internal.Entity_, arg1: BlockPos_): void;
        executeActions(arg0: Internal.ConfiguredPower_<Internal.ActionOnWakeUpConfiguration, any>, arg1: Internal.Entity_, arg2: BlockPos_, arg3: Internal.Direction_): void;
        doesApply(arg0: Internal.ConfiguredPower_<Internal.ActionOnWakeUpConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.LevelReader_, arg3: BlockPos_): boolean;
    }
    type ActionOnWakeUpPower_ = ActionOnWakeUpPower;
    class GameRules$Category extends Internal.Enum<Internal.GameRules$Category> {
        static valueOf(arg0: string): Internal.GameRules$Category;
        getDescriptionId(): string;
        static values(): Internal.GameRules$Category[];
        get descriptionId(): string
        static readonly CHAT: Internal.GameRules$Category;
        static readonly MISC: Internal.GameRules$Category;
        static readonly DROPS: Internal.GameRules$Category;
        static readonly UPDATES: Internal.GameRules$Category;
        static readonly PLAYER: Internal.GameRules$Category;
        static readonly MOBS: Internal.GameRules$Category;
        static readonly SPAWNING: Internal.GameRules$Category;
    }
    type GameRules$Category_ = "chat" | "updates" | "misc" | "drops" | "player" | "mobs" | "spawning" | GameRules$Category;
    class SundropBlock extends Internal.DirectionalBlock {
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
    type SundropBlock_ = SundropBlock;
    class PlayerSleepInBedEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.Optional_<BlockPos>)
        getPos(): BlockPos;
        setResult(arg0: Internal.Player$BedSleepingProblem_): void;
        getEntity(): Internal.LivingEntity;
        getResultStatus(): Internal.Player$BedSleepingProblem;
        getOptionalPos(): Internal.Optional<BlockPos>;
        get pos(): BlockPos
        set result(arg0: Internal.Player$BedSleepingProblem_)
        get entity(): Internal.LivingEntity
        get resultStatus(): Internal.Player$BedSleepingProblem
        get optionalPos(): Internal.Optional<BlockPos>
    }
    type PlayerSleepInBedEvent_ = PlayerSleepInBedEvent;
    interface NbtPredicateAccess {
        abstract getTag(): Internal.CompoundTag;
        get tag(): Internal.CompoundTag
        (): Internal.CompoundTag_;
    }
    type NbtPredicateAccess_ = NbtPredicateAccess;
    class ContextUtils$RotationTowardsContext {
        constructor(from: number, to: number, maxDelta: number)
        readonly to: number;
        readonly from: number;
        readonly maxDelta: number;
    }
    type ContextUtils$RotationTowardsContext_ = ContextUtils$RotationTowardsContext;
    interface PlacementModifierType <P extends Internal.PlacementModifier> {
        abstract codec(): Internal.Codec<P>;
        (): Internal.Codec_<P>;
        readonly SURFACE_RELATIVE_THRESHOLD_FILTER: Internal.PlacementModifierType<Internal.SurfaceRelativeThresholdFilter>;
        readonly IN_SQUARE: Internal.PlacementModifierType<Internal.InSquarePlacement>;
        readonly HEIGHTMAP: Internal.PlacementModifierType<Internal.HeightmapPlacement>;
        readonly HEIGHT_RANGE: Internal.PlacementModifierType<Internal.HeightRangePlacement>;
        readonly BIOME_FILTER: Internal.PlacementModifierType<net.minecraft.world.level.levelgen.placement.BiomeFilter>;
        readonly RANDOM_OFFSET: Internal.PlacementModifierType<Internal.RandomOffsetPlacement>;
        readonly BLOCK_PREDICATE_FILTER: Internal.PlacementModifierType<Internal.BlockPredicateFilter>;
        readonly CARVING_MASK_PLACEMENT: Internal.PlacementModifierType<Internal.CarvingMaskPlacement>;
        readonly NOISE_BASED_COUNT: Internal.PlacementModifierType<Internal.NoiseBasedCountPlacement>;
        readonly ENVIRONMENT_SCAN: Internal.PlacementModifierType<Internal.EnvironmentScanPlacement>;
        readonly SURFACE_WATER_DEPTH_FILTER: Internal.PlacementModifierType<Internal.SurfaceWaterDepthFilter>;
        readonly COUNT_ON_EVERY_LAYER: Internal.PlacementModifierType<Internal.CountOnEveryLayerPlacement>;
        readonly COUNT: Internal.PlacementModifierType<Internal.CountPlacement>;
        readonly NOISE_THRESHOLD_COUNT: Internal.PlacementModifierType<Internal.NoiseThresholdCountPlacement>;
        readonly RARITY_FILTER: Internal.PlacementModifierType<Internal.RarityFilter>;
    }
    type PlacementModifierType_<P extends Internal.PlacementModifier> = PlacementModifierType<P> | Special.PlacementModifierType;
    class FoodProvider {
        consume(player: Player_, world: Internal.Level_, nbtApplier: Internal.Consumer_<Internal.ItemStack>): boolean;
        static create(item: Internal.Item_, divider: number): Internal.FoodProvider;
        isEmpty(): boolean;
        getFood(): Internal.Item;
        getDivider(): number;
        get empty(): boolean
        get food(): Internal.Item
        get divider(): number
        static readonly CUSTOM_PROVIDERS: {[key: Internal.AirItem]: Internal.FoodProvider, [key: Internal.MilkBucketItem]: any, [key: Internal.ExperienceBottleItem]: any, [key: Internal.SuspiciousStewItem]: any};
        static readonly CODEC: Internal.Codec<Internal.FoodProvider>;
        static readonly EMPTY: Internal.FoodProvider;
    }
    type FoodProvider_ = FoodProvider;
    class ChaosSpawnerBarrierCenterBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static checkBarrierCondition(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction$Axis_): void;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type ChaosSpawnerBarrierCenterBlock_ = ChaosSpawnerBarrierCenterBlock;
    class GiantAncientTreeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type GiantAncientTreeFeature_ = GiantAncientTreeFeature;
    class ConfigFileTypeHandler {
        constructor()
        static backUpConfig(arg0: Internal.CommentedFileConfig_, arg1: number): void;
        unload(arg0: Internal.Path_, arg1: Internal.ModConfig_): void;
        reader(arg0: Internal.Path_): Internal.Function<Internal.ModConfig, Internal.CommentedFileConfig>;
        static backUpConfig(arg0: Internal.CommentedFileConfig_): void;
    }
    type ConfigFileTypeHandler_ = ConfigFileTypeHandler;
    interface LongToDoubleFunction {
        abstract applyAsDouble(arg0: number): number;
        (arg0: number): number;
    }
    type LongToDoubleFunction_ = LongToDoubleFunction;
    interface Object2FloatMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        abstract setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        /**
         * @deprecated
        */
        getValue(): any;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract getFloatValue(): number;
        get key(): K
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: any)
        /**
         * @deprecated
        */
        get value(): any
        get floatValue(): number
    }
    type Object2FloatMap$Entry_<K> = Object2FloatMap$Entry<K>;
    class HolderSet$Direct <T> extends Internal.HolderSet$ListBacked<T> {
        constructor(arg0: Internal.List_<Internal.Holder<T>>)
        contents(): Internal.List<Internal.Holder<T>>;
        unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        static direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        static direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
    }
    type HolderSet$Direct_<T> = HolderSet$Direct<T>;
    interface RecipeHolder {
        setRecipeUsed(arg0: Internal.Level_, arg1: Internal.ServerPlayer_, arg2: Internal.Recipe_<any>): boolean;
        abstract getRecipeUsed(): Internal.Recipe<any>;
        abstract setRecipeUsed(arg0: Internal.Recipe_<any>): void;
        awardUsedRecipes(arg0: Player_, arg1: Internal.List_<Internal.ItemStack>): void;
        get recipeUsed(): Internal.Recipe<any>
        set recipeUsed(arg0: Internal.Recipe_<any>)
    }
    type RecipeHolder_ = RecipeHolder;
    class AdvancementList {
        constructor()
        getAllAdvancements(): Internal.Collection<Internal.Advancement>;
        remove(arg0: Internal.Set_<ResourceLocation>): void;
        setListener(arg0: Internal.AdvancementList$Listener_): void;
        getRoots(): Internal.Iterable<Internal.Advancement>;
        clear(): void;
        add(arg0: Internal.Map_<ResourceLocation, Internal.Advancement$Builder>): void;
        get(arg0: ResourceLocation_): Internal.Advancement;
        get allAdvancements(): Internal.Collection<Internal.Advancement>
        set listener(arg0: Internal.AdvancementList$Listener_)
        get roots(): Internal.Iterable<Internal.Advancement>
    }
    type AdvancementList_ = AdvancementList;
    interface RefreshableSearchTree <T> extends Internal.SearchTree<T> {
        empty<T>(): this;
        abstract search(arg0: string): Internal.List<T>;
        refresh(): void;
        (arg0: string): Internal.List_<T>;
    }
    type RefreshableSearchTree_<T> = RefreshableSearchTree<T>;
    abstract class Invokable <T, R> implements Internal.Member, Internal.AnnotatedElement {
        isFinal(): boolean;
        abstract isVarArgs(): boolean;
        getOwnerType(): Internal.TypeToken<T>;
        getModifiers(): number;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaringClass(): T;
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        abstract getAnnotatedReturnType(): Internal.AnnotatedType;
        abstract isOverridable(): boolean;
        returning<R1 extends R>(arg0: Internal.TypeToken_<R1>): Internal.Invokable<T, R1>;
        isPublic(): boolean;
        getName(): string;
        trySetAccessible(): boolean;
        isPrivate(): boolean;
        getParameters(): Internal.ImmutableList<Internal.Parameter>;
        isStatic(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        static from(arg0: Internal.Method_): Internal.Invokable<any, any>;
        setAccessible(arg0: boolean): void;
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        isPackagePrivate(): boolean;
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        isAbstract(): boolean;
        isNative(): boolean;
        isSynthetic(): boolean;
        static from<T>(arg0: Internal.Constructor_<T>): Internal.Invokable<T, T>;
        isSynchronized(): boolean;
        getExceptionTypes(): Internal.ImmutableList<Internal.TypeToken<Internal.Throwable>>;
        invoke(arg0: T, ...arg1: any[]): R;
        getReturnType(): Internal.TypeToken<R>;
        isProtected(): boolean;
        getAnnotations(): Internal.Annotation[];
        abstract getTypeParameters(): any[];
        returning<R1 extends R>(arg0: R1): Internal.Invokable<T, R1>;
        isAccessible(): boolean;
        get "final"(): boolean
        get varArgs(): boolean
        get ownerType(): Internal.TypeToken<T>
        get modifiers(): number
        get declaringClass(): T
        get annotatedReturnType(): Internal.AnnotatedType
        get overridable(): boolean
        get "public"(): boolean
        get name(): string
        get "private"(): boolean
        get parameters(): Internal.ImmutableList<Internal.Parameter>
        get "static"(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        set accessible(arg0: boolean)
        get packagePrivate(): boolean
        get "abstract"(): boolean
        get "native"(): boolean
        get synthetic(): boolean
        get "synchronized"(): boolean
        get exceptionTypes(): Internal.ImmutableList<Internal.TypeToken<Internal.Throwable>>
        get returnType(): Internal.TypeToken<R>
        get "protected"(): boolean
        get annotations(): Internal.Annotation[]
        get typeParameters(): any[]
        get accessible(): boolean
    }
    type Invokable_<T, R> = Invokable<T, R>;
    class NamedGuiOverlay extends Internal.Record {
        constructor(id: ResourceLocation_, overlay: Internal.IGuiOverlay_)
        overlay(): Internal.IGuiOverlay;
        id(): ResourceLocation;
    }
    type NamedGuiOverlay_ = NamedGuiOverlay;
    class ReplaceSphereConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.IntProvider_)
        radius(): Internal.IntProvider;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.ReplaceSphereConfiguration>;
        readonly targetState: Internal.BlockState;
        readonly replaceState: Internal.BlockState;
    }
    type ReplaceSphereConfiguration_ = ReplaceSphereConfiguration;
    class RenderTooltipExtEvent$Post extends Internal.RenderTooltipEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: Internal.Font_, arg5: number, arg6: number, arg7: Internal.List_<Internal.ClientTooltipComponent>, arg8: boolean)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: Internal.Font_, arg5: number, arg6: number, arg7: Internal.List_<Internal.ClientTooltipComponent>, arg8: boolean, arg9: number)
        isComparison(): boolean;
        getWidth(): number;
        getIndex(): number;
        getHeight(): number;
        get comparison(): boolean
        get width(): number
        get index(): number
        get height(): number
    }
    type RenderTooltipExtEvent$Post_ = RenderTooltipExtEvent$Post;
    class VariantBlockStateGenerator {
        constructor()
        variant(key: string, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator$Variant>): void;
        simpleVariant(key: string, model: string): void;
        toJson(): Internal.JsonObject;
    }
    type VariantBlockStateGenerator_ = VariantBlockStateGenerator;
    class ClientboundBossEventPacket$OperationType extends Internal.Enum<Internal.ClientboundBossEventPacket$OperationType> {
        static values(): Internal.ClientboundBossEventPacket$OperationType[];
        static valueOf(arg0: string): Internal.ClientboundBossEventPacket$OperationType;
        static readonly REMOVE: Internal.ClientboundBossEventPacket$OperationType;
        static readonly UPDATE_STYLE: Internal.ClientboundBossEventPacket$OperationType;
        readonly reader: Internal.Function<Internal.FriendlyByteBuf, Internal.ClientboundBossEventPacket$Operation>;
        static readonly UPDATE_PROPERTIES: Internal.ClientboundBossEventPacket$OperationType;
        static readonly ADD: Internal.ClientboundBossEventPacket$OperationType;
        static readonly UPDATE_NAME: Internal.ClientboundBossEventPacket$OperationType;
        static readonly UPDATE_PROGRESS: Internal.ClientboundBossEventPacket$OperationType;
    }
    type ClientboundBossEventPacket$OperationType_ = "remove" | ClientboundBossEventPacket$OperationType | "update_properties" | "update_name" | "add" | "update_progress" | "update_style";
    class AnvilContext extends Internal.LycheeContext {
        stopOpen(arg0: Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        readonly name: string;
        levelCost: number;
        readonly left: Internal.ItemStack;
        materialCost: number;
        readonly right: Internal.ItemStack;
    }
    type AnvilContext_ = AnvilContext;
    class AbstractSpellWrapper$SpellStatus extends Internal.Enum<Internal.AbstractSpellWrapper$SpellStatus> {
        static valueOf(name: string): Internal.AbstractSpellWrapper$SpellStatus;
        static values(): Internal.AbstractSpellWrapper$SpellStatus[];
        static readonly UNREGISTERED: Internal.AbstractSpellWrapper$SpellStatus;
        static readonly REGISTERED: Internal.AbstractSpellWrapper$SpellStatus;
        static readonly ENABLED: Internal.AbstractSpellWrapper$SpellStatus;
        static readonly DISABLED: Internal.AbstractSpellWrapper$SpellStatus;
    }
    type AbstractSpellWrapper$SpellStatus_ = "unregistered" | "disabled" | AbstractSpellWrapper$SpellStatus | "enabled" | "registered";
    class RenderChunkRegion implements Internal.BlockAndTintGetter, Internal.RenderAttachedBlockView, Internal.RenderDataMapConsumer, Internal.AccessChunkRendererRegion {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: any_[][])
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        fabric_getRenderer(): Internal.TerrainRenderContext;
        getSectionYFromSectionIndex(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        getHeight(): number;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        canSeeSky(arg0: BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        fabric_acceptRenderDataMap(renderDataMap: Internal.Long2ObjectMap_<any>): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        fabric_setRenderer(renderer: Internal.TerrainRenderContext_): void;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
        readonly level: Internal.Level;
        readonly chunks: any[][];
    }
    type RenderChunkRegion_ = RenderChunkRegion;
    interface BloodCauldronBlock$CookExecution {
        abstract execute(): void;
        (): void;
    }
    type BloodCauldronBlock$CookExecution_ = BloodCauldronBlock$CookExecution;
    class BlockElementFace {
        constructor(arg0: Internal.Direction_, arg1: number, arg2: string, arg3: Internal.BlockFaceUV_, arg4: Internal.ForgeFaceData_)
        constructor(arg0: Internal.Direction_, arg1: number, arg2: string, arg3: Internal.BlockFaceUV_)
        getFaceData(): Internal.ForgeFaceData;
        get faceData(): Internal.ForgeFaceData
        readonly texture: string;
        readonly tintIndex: number;
        parent: Internal.BlockElement;
        readonly uv: Internal.BlockFaceUV;
        readonly cullForDirection: Internal.Direction;
        static readonly NO_TINT: -1;
    }
    type BlockElementFace_ = BlockElementFace;
    class SoulSandBlock extends Internal.Block {
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
        static readonly SHAPE: Internal.CubeVoxelShape;
    }
    type SoulSandBlock_ = SoulSandBlock;
    abstract class ContextualConditionType <T extends Internal.ContextualCondition> {
        constructor()
        abstract toNetwork(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        getRegistryName(): ResourceLocation;
        abstract toJson(arg0: T, arg1: Internal.JsonObject_): void;
        abstract fromJson(arg0: Internal.JsonObject_): T;
        abstract fromNetwork(arg0: Internal.FriendlyByteBuf_): T;
        get registryName(): ResourceLocation
    }
    type ContextualConditionType_<T extends Internal.ContextualCondition> = ContextualConditionType<T>;
    class RegisterColorHandlersEvent$Block extends Internal.RegisterColorHandlersEvent {
        constructor()
        constructor(arg0: Internal.BlockColors_)
        register(arg0: Internal.BlockColor_, ...arg1: Internal.Block_[]): void;
        getBlockColors(): Internal.BlockColors;
        get blockColors(): Internal.BlockColors
    }
    type RegisterColorHandlersEvent$Block_ = RegisterColorHandlersEvent$Block;
    class Locale$Category extends Internal.Enum<Internal.Locale$Category> {
        static valueOf(arg0: string): Internal.Locale$Category;
        static values(): Internal.Locale$Category[];
        static readonly FORMAT: Internal.Locale$Category;
        static readonly DISPLAY: Internal.Locale$Category;
    }
    type Locale$Category_ = Locale$Category | "display" | "format";
    class PlayerModelPart extends Internal.Enum<Internal.PlayerModelPart> {
        static valueOf(arg0: string): Internal.PlayerModelPart;
        getName(): Internal.Component;
        getBit(): number;
        static values(): Internal.PlayerModelPart[];
        getMask(): number;
        getId(): string;
        get name(): Internal.Component
        get bit(): number
        get mask(): number
        get id(): string
        static readonly CAPE: Internal.PlayerModelPart;
        static readonly LEFT_SLEEVE: Internal.PlayerModelPart;
        static readonly RIGHT_PANTS_LEG: Internal.PlayerModelPart;
        static readonly LEFT_PANTS_LEG: Internal.PlayerModelPart;
        static readonly RIGHT_SLEEVE: Internal.PlayerModelPart;
        static readonly JACKET: Internal.PlayerModelPart;
        static readonly HAT: Internal.PlayerModelPart;
    }
    type PlayerModelPart_ = "jacket" | "hat" | "right_sleeve" | "cape" | "right_pants_leg" | "left_sleeve" | "left_pants_leg" | PlayerModelPart;
    interface GeoRenderer <T extends Internal.GeoAnimatable> {
        getInstanceId(arg0: T): number;
        abstract getAnimatable(): T;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        abstract getGeoModel(): Internal.GeoModel<T>;
        abstract fireCompileRenderLayersEvent(): void;
        getRenderType(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getRenderLayers(): Internal.List<Internal.GeoRenderLayer<T>>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getPackedOverlay(arg0: T, arg1: number): number;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getPackedOverlay(arg0: T, arg1: number, arg2: number): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        abstract firePreRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): boolean;
        abstract firePostRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        getTextureLocation(arg0: T): ResourceLocation;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        doPostRenderCleanup(): void;
        abstract updateAnimatedTextureFrame(arg0: T): void;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        scaleModelForRender(arg0: number, arg1: number, arg2: Internal.PoseStack_, arg3: T, arg4: Internal.BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderRecursively(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderFinal(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get animatable(): T
        get geoModel(): Internal.GeoModel<T>
        get renderLayers(): Internal.List<Internal.GeoRenderLayer<T>>
    }
    type GeoRenderer_<T extends Internal.GeoAnimatable> = GeoRenderer<T>;
    class WitherSkullBlock extends Internal.SkullBlock {
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
        getEquipSound(): Internal.SoundEvent;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static checkSpawn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.SkullBlockEntity_): void;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        static canSpawnMob(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type WitherSkullBlock_ = WitherSkullBlock;
    class Package extends Internal.NamedPackage implements Internal.AnnotatedElement {
        getSpecificationVendor(): string;
        getSpecificationVersion(): string;
        /**
         * @deprecated
        */
        static getPackage(arg0: string): Internal.Package;
        static getPackages(): Internal.Package[];
        isCompatibleWith(arg0: string): boolean;
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getImplementationVersion(): string;
        getImplementationVendor(): string;
        getName(): string;
        isSealed(arg0: Internal.URL_): boolean;
        getAnnotations(): Internal.Annotation[];
        getDeclaredAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getSpecificationTitle(): string;
        getAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        isSealed(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        getImplementationTitle(): string;
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        getDeclaredAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        get specificationVendor(): string
        get specificationVersion(): string
        get packages(): Internal.Package[]
        get implementationVersion(): string
        get implementationVendor(): string
        get name(): string
        get annotations(): Internal.Annotation[]
        get specificationTitle(): string
        get sealed(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        get implementationTitle(): string
    }
    type Package_ = Package;
    class WorldDimensions$Complete extends Internal.Record {
        constructor(arg0: Internal.Registry_<Internal.LevelStem>, arg1: Internal.PrimaryLevelData$SpecialWorldProperty_)
        lifecycle(): Internal.Lifecycle;
        dimensionsRegistryAccess(): Internal.RegistryAccess$Frozen;
        specialWorldProperty(): Internal.PrimaryLevelData$SpecialWorldProperty;
        dimensions(): Internal.Registry<Internal.LevelStem>;
    }
    type WorldDimensions$Complete_ = WorldDimensions$Complete;
    class EntityHitResult extends Internal.HitResult {
        constructor(arg0: Internal.Entity_, arg1: Vec3d_)
        constructor(arg0: Internal.Entity_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type EntityHitResult_ = EntityHitResult;
    class ClientboundHurtAnimationPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.LivingEntity_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        id(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        yaw(): number;
        get skippable(): boolean
    }
    type ClientboundHurtAnimationPacket_ = ClientboundHurtAnimationPacket;
    abstract class PlayerEventJS extends Internal.LivingEntityEventJS {
        constructor()
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
    }
    type PlayerEventJS_ = PlayerEventJS;
    class ClientboundAnimatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getAction(): number;
        isSkippable(): boolean;
        getId(): number;
        get action(): number
        get skippable(): boolean
        get id(): number
        static readonly WAKE_UP: 2;
        static readonly SWING_OFF_HAND: 3;
        static readonly MAGIC_CRITICAL_HIT: 5;
        static readonly SWING_MAIN_HAND: 0;
        static readonly CRITICAL_HIT: 4;
    }
    type ClientboundAnimatePacket_ = ClientboundAnimatePacket;
    interface Consumer <T> {
        andThen(arg0: Internal.Consumer_<T>): this;
        abstract accept(arg0: T): void;
        (arg0: T): void;
    }
    type Consumer_<T> = Consumer<T>;
    class ModelProperties extends Internal.Record {
        constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: number, textureWidth: number, visibleBoundsHeight: number, visibleBoundsOffset: number[], visibleBoundsWidth: number)
        animationStatueOfLibertyArms(): boolean;
        visibleBoundsOffset(): number[];
        animationNoHeadBob(): boolean;
        visibleBoundsWidth(): number;
        static deserializer(): Internal.JsonDeserializer<Internal.ModelProperties>;
        animationSingleArmAnimation(): boolean;
        animationSingleLegAnimation(): boolean;
        identifier(): string;
        animationArmsDown(): boolean;
        visibleBoundsHeight(): number;
        preserveModelPose(): boolean;
        textureWidth(): number;
        textureHeight(): number;
        animationStationaryLegs(): boolean;
        animationUpsideDown(): boolean;
        animationInvertedCrouch(): boolean;
        animationArmsOutFront(): boolean;
        animationDontShowArmor(): boolean;
    }
    type ModelProperties_ = ModelProperties;
    class BlockStateModifyCallbackJS {
        constructor(state: Internal.BlockState_)
        /**
         * Checks if this block has the specified property
        */
        hasProperty<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): boolean;
        /**
         * Mirror the block using the specified Mirror
        */
        mirror(mirror: Internal.Mirror_): this;
        /**
         * Get a map of this blocks properties to it's value
        */
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        /**
         * Gets the value of the pased in property
        */
        get<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Gets the value of the passed in property
        */
        getValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Sets the value of the specified property
        */
        setValue<T extends Internal.Comparable<T>, V extends T>(property: Internal.Property_<T>, comparable: V): this;
        populateNeighbours(map: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, Internal.BlockState>): this;
        /**
         * Sets the value of the specified boolean property
        */
        set(property: Internal.BooleanProperty_, value: boolean): this;
        /**
         * Cycles the property
        */
        cycle<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): this;
        /**
         * Sets the value of the specified enum property
        */
        set<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): this;
        /**
         * Get the properties this block has that can be changed
        */
        getProperties(): Internal.Collection<Internal.Property<any>>;
        /**
         * Rotate the block using the specified Rotation
        */
        rotate(rotation: Internal.Rotation_): this;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
        */
        updateShape(direction: Internal.Direction_, blockState: Internal.BlockState_, levelAccessor: Internal.LevelAccessor_, blockPos: BlockPos_, blockPos2: BlockPos_): this;
        /**
         * Sets the value of the specified integer property
        */
        set(property: Internal.IntegerProperty_, value: number): this;
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
        */
        getOptionalValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.Optional<T>;
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        getState(): Internal.BlockState;
        /**
         * Get a map of this blocks properties to it's value
        */
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        /**
         * Get the properties this block has that can be changed
        */
        get properties(): Internal.Collection<Internal.Property<any>>
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        get state(): Internal.BlockState
    }
    type BlockStateModifyCallbackJS_ = BlockStateModifyCallbackJS;
    interface IIngredientTypeWithSubtypes <B, I> extends Internal.IIngredientType<I> {
        getUid(): string;
        abstract getIngredientClass(): I;
        getDefaultIngredient(arg0: B): I;
        abstract getIngredientBaseClass(): B;
        castIngredient(arg0: any): Internal.Optional<I>;
        abstract getBase(arg0: I): B;
        get uid(): string
        get ingredientClass(): I
        get ingredientBaseClass(): B
    }
    type IIngredientTypeWithSubtypes_<B, I> = IIngredientTypeWithSubtypes<B, I>;
    abstract class ConcurrentHashMap$CollectionView <K, V, E> implements Internal.Collection<E>, Internal.Serializable {
        abstract add(arg0: E): boolean;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        getMap(): Internal.ConcurrentHashMap<K, V>;
        toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        size(): number;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        get empty(): boolean
        get map(): Internal.ConcurrentHashMap<K, V>
    }
    type ConcurrentHashMap$CollectionView_<K, V, E> = ConcurrentHashMap$CollectionView<K, V, E>;
    class DateTimeFormatter {
        static ofPattern(arg0: string, arg1: Internal.Locale_): Internal.DateTimeFormatter;
        withChronology(arg0: Internal.Chronology_): this;
        static parsedExcessDays(): Internal.TemporalQuery<Internal.Period>;
        parse(arg0: Internal.CharSequence_): Internal.TemporalAccessor;
        parse<T>(arg0: Internal.CharSequence_, arg1: Internal.TemporalQuery_<T>): T;
        parse(arg0: Internal.CharSequence_, arg1: Internal.ParsePosition_): Internal.TemporalAccessor;
        localizedBy(arg0: Internal.Locale_): this;
        getZone(): Internal.ZoneId;
        withResolverStyle(arg0: Internal.ResolverStyle_): this;
        parseBest(arg0: Internal.CharSequence_, ...arg1: Internal.TemporalQuery_<any>[]): Internal.TemporalAccessor;
        toFormat(arg0: Internal.TemporalQuery_<any>): Internal.Format;
        static ofLocalizedDate(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        static parsedLeapSecond(): Internal.TemporalQuery<boolean>;
        formatTo(arg0: Internal.TemporalAccessor_, arg1: Internal.Appendable_): void;
        static ofLocalizedDateTime(arg0: Internal.FormatStyle_, arg1: Internal.FormatStyle_): Internal.DateTimeFormatter;
        withResolverFields(...arg0: Internal.TemporalField_[]): this;
        withDecimalStyle(arg0: Internal.DecimalStyle_): this;
        getChronology(): Internal.Chronology;
        toFormat(): Internal.Format;
        withResolverFields(arg0: Internal.Set_<Internal.TemporalField>): this;
        withLocale(arg0: Internal.Locale_): this;
        getResolverStyle(): Internal.ResolverStyle;
        static ofLocalizedDateTime(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        parseUnresolved(arg0: Internal.CharSequence_, arg1: Internal.ParsePosition_): Internal.TemporalAccessor;
        static ofPattern(arg0: string): Internal.DateTimeFormatter;
        getResolverFields(): Internal.Set<Internal.TemporalField>;
        format(arg0: Internal.TemporalAccessor_): string;
        withZone(arg0: Internal.ZoneId_): this;
        getLocale(): Internal.Locale;
        getDecimalStyle(): Internal.DecimalStyle;
        static ofLocalizedTime(arg0: Internal.FormatStyle_): Internal.DateTimeFormatter;
        get zone(): Internal.ZoneId
        get chronology(): Internal.Chronology
        get resolverStyle(): Internal.ResolverStyle
        get resolverFields(): Internal.Set<Internal.TemporalField>
        get locale(): Internal.Locale
        get decimalStyle(): Internal.DecimalStyle
        static readonly ISO_DATE: Internal.DateTimeFormatter;
        static readonly ISO_WEEK_DATE: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_TIME: Internal.DateTimeFormatter;
        static readonly ISO_ORDINAL_DATE: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_TIME: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_OFFSET_DATE: Internal.DateTimeFormatter;
        static readonly BASIC_ISO_DATE: Internal.DateTimeFormatter;
        static readonly ISO_INSTANT: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_DATE: Internal.DateTimeFormatter;
        static readonly RFC_1123_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_LOCAL_TIME: Internal.DateTimeFormatter;
        static readonly ISO_DATE_TIME: Internal.DateTimeFormatter;
        static readonly ISO_ZONED_DATE_TIME: Internal.DateTimeFormatter;
    }
    type DateTimeFormatter_ = DateTimeFormatter;
    class DirectionProperty extends Internal.EnumProperty<Internal.Direction> {
        constructor(arg0: string, arg1: Internal.Collection_<Internal.Direction>)
        static create(name: string, filter: Internal.Predicate_<any>): Internal.DirectionProperty;
        static create(arg0: string, arg1: Internal.Collection_<Internal.Direction>): Internal.DirectionProperty;
        static create(arg0: string): Internal.DirectionProperty;
        static create(arg0: string, ...arg1: Internal.Direction_[]): Internal.DirectionProperty;
    }
    type DirectionProperty_ = DirectionProperty;
    interface ReplacementMatch {
        of(o: any): this;
        readonly NONE: Internal.ReplacementMatch;
    }
    type ReplacementMatch_ = ReplacementMatch | Internal.Ingredient_;
    interface BonemealableBlock {
        abstract isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        abstract performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        abstract isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
    }
    type BonemealableBlock_ = BonemealableBlock;
    interface ChunkTrackerHolder {
        get(arg0: Internal.ClientLevel_): Internal.ChunkTracker;
        abstract sodium$getTracker(): Internal.ChunkTracker;
        (): Internal.ChunkTracker_;
    }
    type ChunkTrackerHolder_ = ChunkTrackerHolder;
}
declare namespace software.bernie.geckolib.core.keyframe {
    class Keyframe <T extends Internal.IValue> extends Internal.Record {
        constructor(arg0: number, arg1: T, arg2: T)
        constructor(length: number, startValue: T, endValue: T, easingType: Internal.EasingType_, easingArgs: Internal.List_<T>)
        constructor(arg0: number, arg1: T, arg2: T, arg3: Internal.EasingType_)
        length(): number;
        easingType(): Internal.EasingType;
        endValue(): T;
        startValue(): T;
        easingArgs(): Internal.List<T>;
    }
    type Keyframe_<T extends Internal.IValue> = Keyframe<T>;
}
