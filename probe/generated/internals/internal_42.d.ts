/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ContextUtils$VisualContext {
        constructor(lookingEntity: Internal.Entity_, entity: Internal.LivingEntity_)
        /**
         * The looking entity
        */
        readonly lookingEntity: Internal.Entity;
        /**
         * Our entity which is looked at
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$VisualContext_ = ContextUtils$VisualContext;
    class Slot implements com.lowdragmc.lowdraglib.core.mixins.accessor.SlotAccessor, Internal.SlotAccessor {
        constructor(arg0: Internal.Container_, arg1: number, arg2: number, arg3: number)
        onTake(arg0: Player_, arg1: Internal.ItemStack_): void;
        allowModification(arg0: Player_): boolean;
        set(arg0: Internal.ItemStack_): void;
        getX(): number;
        getY(): number;
        setByPlayer(arg0: Internal.ItemStack_): void;
        tryRemove(arg0: number, arg1: number, arg2: Player_): Internal.Optional<Internal.ItemStack>;
        onQuickCraft(arg0: Internal.ItemStack_, arg1: number): void;
        checkTakeAchievements(arg0: Internal.ItemStack_): void;
        isActive(): boolean;
        setChanged(): void;
        setY(arg0: number): void;
        setX(arg0: number): void;
        hasItem(): boolean;
        safeTake(arg0: number, arg1: number, arg2: Player_): Internal.ItemStack;
        getSlotIndex(): number;
        setBackground(arg0: ResourceLocation_, arg1: ResourceLocation_): this;
        isHighlightable(): boolean;
        safeInsert(arg0: Internal.ItemStack_): Internal.ItemStack;
        getMaxStackSize(): number;
        isSameInventory(arg0: Internal.Slot_): boolean;
        getItem(): Internal.ItemStack;
        mayPickup(arg0: Player_): boolean;
        remove(arg0: number): Internal.ItemStack;
        onSwapCraft(arg0: number): void;
        accessories$setY(arg0: number): void;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        mayPlace(arg0: Internal.ItemStack_): boolean;
        onQuickCraft(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        getNoItemIcon(): com.mojang.datafixers.util.Pair<ResourceLocation, ResourceLocation>;
        safeInsert(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        getContainerSlot(): number;
        get x(): number
        get y(): number
        set byPlayer(arg0: Internal.ItemStack_)
        get active(): boolean
        set y(arg0: number)
        set x(arg0: number)
        get slotIndex(): number
        get highlightable(): boolean
        get maxStackSize(): number
        get item(): Internal.ItemStack
        get noItemIcon(): com.mojang.datafixers.util.Pair<ResourceLocation, ResourceLocation>
        get containerSlot(): number
        index: number;
        x: number;
        y: number;
        readonly container: Internal.Container;
    }
    type Slot_ = Slot;
    class Blender {
        constructor(arg0: any_<Internal.BlendingData>, arg1: any_<Internal.BlendingData>)
        getBiomeResolver(arg0: Internal.BiomeResolver_): Internal.BiomeResolver;
        blendOffsetAndFactor(arg0: number, arg1: number): Internal.Blender$BlendingOutput;
        static generateBorderTicks(arg0: Internal.WorldGenRegion_, arg1: Internal.ChunkAccess_): void;
        blendDensity(arg0: Internal.DensityFunction$FunctionContext_, arg1: number): number;
        static makeOldChunkDistanceGetter(arg0: Internal.BlendingData_, arg1: Internal.Map_<Internal.Direction8, Internal.BlendingData>): Internal.Blender$DistanceGetter;
        static empty(): Internal.Blender;
        static addAroundOldChunksCarvingMaskFilter(arg0: Internal.WorldGenLevel_, arg1: Internal.ProtoChunk_): void;
        static of(arg0: Internal.WorldGenRegion_): Internal.Blender;
    }
    type Blender_ = Blender;
    class BlockCollisionCondition extends Internal.EntityCondition<Internal.BlockCollisionConfiguration> {
        constructor()
        check(arg0: Internal.BlockCollisionConfiguration_, arg1: Internal.Entity_): boolean;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type BlockCollisionCondition_ = BlockCollisionCondition;
    class BlendedNoise implements Internal.DensityFunction$SimpleFunction {
        constructor(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        withNewRandom(arg0: Internal.RandomSource_): this;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        static createUnseeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.BlendedNoise;
        square(): Internal.DensityFunction;
        parityConfigString(arg0: Internal.StringBuilder_): void;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        static readonly CODEC: Internal.KeyDispatchDataCodec<Internal.BlendedNoise>;
    }
    type BlendedNoise_ = BlendedNoise;
    class EquippedItemCondition extends Internal.EntityCondition<Internal.EquippedItemConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.EquippedItemConfiguration_, arg1: Internal.Entity_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type EquippedItemCondition_ = EquippedItemCondition;
    class Cod extends Internal.AbstractSchoolingFish {
        constructor(arg0: Internal.EntityType_<Internal.Cod>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
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
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
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
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        getScriptType(): Internal.ScriptType;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<InteractionResult>;
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
    type Cod_ = Cod;
    class BoundingBox implements Internal.BoundingBoxAccessor {
        constructor(arg0: BlockPos_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        forAllCorners(arg0: Internal.Consumer_<BlockPos>): void;
        static encapsulatingPositions(arg0: Internal.Iterable_<BlockPos>): Internal.Optional<Internal.BoundingBox>;
        getXSpan(): number;
        maxY(): number;
        maxX(): number;
        getCenter(): BlockPos;
        static fromCorners(arg0: Vec3i_, arg1: Vec3i_): Internal.BoundingBox;
        maxZ(): number;
        isInside(arg0: number, arg1: number, arg2: number): boolean;
        isInside(arg0: Vec3i_): boolean;
        setMinZ(arg0: number): void;
        static encapsulatingBoxes(arg0: Internal.Iterable_<Internal.BoundingBox>): Internal.Optional<Internal.BoundingBox>;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getYSpan(): number;
        intersects(arg0: Internal.BoundingBox_): boolean;
        moved(arg0: number, arg1: number, arg2: number): this;
        /**
         * @deprecated
        */
        encapsulate(arg0: BlockPos_): this;
        static orientBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Direction_): Internal.BoundingBox;
        getLength(): Vec3i;
        minZ(): number;
        minY(): number;
        static infinite(): Internal.BoundingBox;
        minX(): number;
        /**
         * @deprecated
        */
        move(arg0: number, arg1: number, arg2: number): this;
        setMaxX(arg0: number): void;
        inflatedBy(arg0: number): this;
        setMaxY(arg0: number): void;
        setMaxZ(arg0: number): void;
        getZSpan(): number;
        /**
         * @deprecated
        */
        move(arg0: Vec3i_): this;
        /**
         * @deprecated
        */
        encapsulate(arg0: Internal.BoundingBox_): this;
        setMinX(arg0: number): void;
        setMinY(arg0: number): void;
        get XSpan(): number
        get center(): BlockPos
        set minZ(arg0: number)
        get YSpan(): number
        get length(): Vec3i
        set maxX(arg0: number)
        set maxY(arg0: number)
        set maxZ(arg0: number)
        get ZSpan(): number
        set minX(arg0: number)
        set minY(arg0: number)
        static readonly CODEC: Internal.Codec<Internal.BoundingBox>;
    }
    type BoundingBox_ = BoundingBox;
    class ServerboundRecipeBookChangeSettingsPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.RecipeBookType_, arg1: boolean, arg2: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getBookType(): Internal.RecipeBookType;
        isOpen(): boolean;
        isFiltering(): boolean;
        isSkippable(): boolean;
        get bookType(): Internal.RecipeBookType
        get open(): boolean
        get filtering(): boolean
        get skippable(): boolean
    }
    type ServerboundRecipeBookChangeSettingsPacket_ = ServerboundRecipeBookChangeSettingsPacket;
    interface ClientAdvancementsAccessor {
        abstract getProgress(): Internal.Map<Internal.Advancement, Internal.AdvancementProgress>;
        get progress(): Internal.Map<Internal.Advancement, Internal.AdvancementProgress>
        (): Internal.Map_<Internal.Advancement, Internal.AdvancementProgress>;
    }
    type ClientAdvancementsAccessor_ = ClientAdvancementsAccessor;
    class WorldCreationUiState$SelectedGameMode extends Internal.Enum<Internal.WorldCreationUiState$SelectedGameMode> {
        static valueOf(arg0: string): Internal.WorldCreationUiState$SelectedGameMode;
        getInfo(): Internal.Component;
        static values(): Internal.WorldCreationUiState$SelectedGameMode[];
        get info(): Internal.Component
        readonly displayName: Internal.Component;
        static readonly SURVIVAL: Internal.WorldCreationUiState$SelectedGameMode;
        static readonly DEBUG: Internal.WorldCreationUiState$SelectedGameMode;
        readonly gameType: Internal.GameType;
        static readonly CREATIVE: Internal.WorldCreationUiState$SelectedGameMode;
        static readonly HARDCORE: Internal.WorldCreationUiState$SelectedGameMode;
    }
    type WorldCreationUiState$SelectedGameMode_ = "hardcore" | "debug" | WorldCreationUiState$SelectedGameMode | "survival" | "creative";
    class GossipType extends Internal.Enum<Internal.GossipType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.GossipType;
        static values(): Internal.GossipType[];
        get serializedName(): string
        readonly decayPerDay: number;
        static readonly MINOR_POSITIVE: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_EVENT: 25;
        readonly weight: number;
        static readonly TRADING: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: 20;
        static readonly MINOR_NEGATIVE: Internal.GossipType;
        static readonly MAJOR_NEGATIVE: Internal.GossipType;
        static readonly REPUTATION_CHANGE_PER_TRADE: 2;
        readonly id: string;
        readonly decayPerTransfer: number;
        static readonly MAJOR_POSITIVE: Internal.GossipType;
        static readonly CODEC: Internal.Codec<Internal.GossipType>;
        readonly max: number;
    }
    type GossipType_ = GossipType | "major_positive" | "minor_negative" | "major_negative" | "trading" | "minor_positive";
    interface DrawCallTrackingRenderBuffers {
        abstract getRenderTypes(): number;
        abstract resetDrawCounts(): void;
        abstract getDrawCalls(): number;
        get renderTypes(): number
        get drawCalls(): number
    }
    type DrawCallTrackingRenderBuffers_ = DrawCallTrackingRenderBuffers;
    class SoundKeyframeEvent <T extends Internal.GeoAnimatable> extends Internal.KeyFrameEvent<T, Internal.SoundKeyframeData> {
        constructor(arg0: T, arg1: number, arg2: Internal.AnimationController_<T>, arg3: Internal.SoundKeyframeData_)
        getKeyframeData(): Internal.SoundKeyframeData;
        get keyframeData(): Internal.SoundKeyframeData
    }
    type SoundKeyframeEvent_<T extends Internal.GeoAnimatable> = SoundKeyframeEvent<T>;
    class ContextUtils$EntitySqrDistanceContext {
        constructor(distanceToPlayer: number, entity: Internal.Entity_)
        /**
         * The entity
        */
        readonly entity: Internal.Entity;
        /**
         * The squared distance to the player
        */
        readonly distanceToPlayer: number;
    }
    type ContextUtils$EntitySqrDistanceContext_ = ContextUtils$EntitySqrDistanceContext;
    interface Int2ObjectMap$Entry <V> extends Internal.Map$Entry<number, V> {
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        abstract getIntKey(): number;
        abstract getValue(): V;
        /**
         * @deprecated
        */
        getKey(): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        get intKey(): number
        get value(): V
        /**
         * @deprecated
        */
        get key(): number
        set value(arg0: V)
    }
    type Int2ObjectMap$Entry_<V> = Int2ObjectMap$Entry<V>;
    class BufferBuilder extends Internal.DefaultedVertexConsumer implements Internal.ExtendedBufferBuilder, Internal.BufferBuilderExt, Internal.VertexBufferWriter, Internal.IrisExtendedBufferBuilder, Internal.BufferVertexConsumer, Internal.MemoryTrackingBuffer, Internal.ExtendingBufferBuilder, Internal.BlockSensitiveBufferBuilder {
        constructor(arg0: number)
        uv2(arg0: number): Internal.VertexConsumer;
        static normalIntValue(arg0: number): number;
        normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        begin(arg0: Internal.VertexFormat$Mode_, arg1: Internal.VertexFormat_): void;
        getSortState(): Internal.BufferBuilder$SortState;
        sodium$getBuffer(): Internal.ByteBuffer;
        iris$currentLocalPosZ(): number;
        getUsedSize(): number;
        iris$format(): Internal.VertexFormat;
        sodium$getFormatDescription(): Internal.VertexFormatDescription;
        sodium$usingFixedColor(): boolean;
        iris$currentLocalPosX(): number;
        /**
         * @deprecated
        */
        isFullWriter(): boolean;
        currentElement(): Internal.VertexFormatElement;
        static tryOf(arg0: Internal.VertexConsumer_): Internal.VertexBufferWriter;
        canUseIntrinsics(): boolean;
        overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        endBlock(): void;
        building(): boolean;
        getAllocatedSize(): number;
        uvShort(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        iris$injectNormalAndUV1(): boolean;
        iris$incrementVertexCount(): void;
        putByte(arg0: number, arg1: number): void;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putFloat(arg0: number, arg1: number): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        iris$currentBlock(): number;
        sodium$getElementOffset(): number;
        color(arg0: number): Internal.VertexConsumer;
        end(): Internal.BufferBuilder$RenderedBuffer;
        isCurrentBatchEmpty(): boolean;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        static of(arg0: Internal.VertexConsumer_): Internal.VertexBufferWriter;
        sodium$getDelegate(): Internal.SodiumBufferBuilder;
        restoreSortState(arg0: Internal.BufferBuilder$SortState_): void;
        iris$vertexCount(): number;
        freeAndDeleteBuffer(): void;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        endOrDiscardIfEmpty(): Internal.BufferBuilder$RenderedBuffer;
        vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        setQuadSorting(arg0: Internal.VertexSorting_): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        iris$beginWithoutExtending(drawMode: Internal.VertexFormat$Mode_, vertexFormat: Internal.VertexFormat_): void;
        iris$currentLocalPosY(): number;
        sodium$moveToNextVertex(): void;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        iris$currentRenderType(): number;
        nextElement(): void;
        putBulkData(arg0: Internal.ByteBuffer_): void;
        static copyInto(arg0: Internal.VertexBufferWriter_, arg1: Internal.MemoryStack_, arg2: number, arg3: number, arg4: Internal.VertexFormatDescription_): void;
        localvar$bnh000$oculus$vertex(alpha: number): number;
        putShort(arg0: number, arg1: number): void;
        iris$resetVertexCount(): void;
        applyBakedNormals(arg0: Vector3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        iris$mode(): Internal.VertexFormat$Mode;
        splitStrip(): void;
        clear(): void;
        discard(): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        push(arg0: Internal.MemoryStack_, arg1: number, arg2: number, arg3: Internal.VertexFormatDescription_): void;
        uv(arg0: number, arg1: number): Internal.VertexConsumer;
        beginBlock(block: number, renderType: number, localPosX: number, localPosY: number, localPosZ: number): void;
        iris$extending(): boolean;
        iris$isTerrain(): boolean;
        get sortState(): Internal.BufferBuilder$SortState
        get usedSize(): number
        /**
         * @deprecated
        */
        get fullWriter(): boolean
        get allocatedSize(): number
        get currentBatchEmpty(): boolean
        set quadSorting(arg0: Internal.VertexSorting_)
        format: Internal.VertexFormat;
        mode: Internal.VertexFormat$Mode;
    }
    type BufferBuilder_ = BufferBuilder;
    class KelpFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type KelpFeature_ = KelpFeature;
    class ContextUtils$PlayerEntityContext {
        constructor(player: Player_, entity: Internal.LivingEntity_)
        /**
         * The player entity
        */
        readonly player: Player;
        /**
         * The living entity associated with the player
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$PlayerEntityContext_ = ContextUtils$PlayerEntityContext;
    interface LocationPredicateAccess {
        abstract getSmokey(): boolean;
        abstract getBiome(): Internal.ResourceKey<Internal.Biome>;
        abstract getDimension(): Internal.ResourceKey<Internal.Level>;
        abstract getZ(): Internal.MinMaxBounds$Doubles;
        abstract getStructure(): Internal.ResourceKey<Internal.Structure>;
        abstract getFluid(): Internal.FluidPredicate;
        abstract getX(): Internal.MinMaxBounds$Doubles;
        abstract getY(): Internal.MinMaxBounds$Doubles;
        abstract getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        abstract getLight(): Internal.LightPredicate;
        get smokey(): boolean
        get biome(): Internal.ResourceKey<Internal.Biome>
        get dimension(): Internal.ResourceKey<Internal.Level>
        get z(): Internal.MinMaxBounds$Doubles
        get structure(): Internal.ResourceKey<Internal.Structure>
        get fluid(): Internal.FluidPredicate
        get x(): Internal.MinMaxBounds$Doubles
        get y(): Internal.MinMaxBounds$Doubles
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get light(): Internal.LightPredicate
    }
    type LocationPredicateAccess_ = LocationPredicateAccess;
    class CompletableFuture <T> implements Internal.Future<T>, Internal.CompletionStage<T> {
        constructor()
        thenAcceptAsync(arg0: Internal.Consumer_<any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        getNow(arg0: T): T;
        static delayedExecutor(arg0: number, arg1: Internal.TimeUnit_): Internal.Executor;
        exceptionallyAsync(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        applyToEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        thenAcceptAsync(arg0: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        thenApplyAsync(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        exceptionallyComposeAsync(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>): this;
        exceptionallyAsync(arg0: Internal.Function_<any, any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        completeAsync(arg0: Internal.Supplier_<T>): this;
        complete(arg0: T): boolean;
        handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletableFuture<U>;
        get(): T;
        runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        isCancelled(): boolean;
        thenRunAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        whenCompleteAsync(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        thenAccept(arg0: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        exceptionally(arg0: Internal.Function_<Internal.Throwable, T>): this;
        thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>): Internal.CompletableFuture<V>;
        static delayedExecutor(arg0: number, arg1: Internal.TimeUnit_, arg2: Internal.Executor_): Internal.Executor;
        static failedFuture<U>(arg0: Internal.Throwable_): Internal.CompletableFuture<U>;
        thenAcceptBoth<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletableFuture<void>;
        static runAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletableFuture<void>;
        thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        cancel(arg0: boolean): boolean;
        static runAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        thenApplyAsync<U>(arg0: Internal.Function_<T, U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        acceptEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Consumer_<any>, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        join(): T;
        orTimeout(arg0: number, arg1: Internal.TimeUnit_): this;
        thenAcceptBothAsync<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>, arg2: Internal.Executor_): Internal.CompletableFuture<void>;
        thenAcceptBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiConsumer_<any, any>): Internal.CompletionStage<any>;
        minimalCompletionStage(): Internal.CompletionStage<T>;
        static supplyAsync<U>(arg0: Internal.Supplier_<U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        get(arg0: number, arg1: Internal.TimeUnit_): T;
        thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>, arg2: Internal.Executor_): Internal.CompletableFuture<V>;
        runAfterEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletableFuture<void>;
        thenCombine(arg0: Internal.CompletionStage_<any>, arg1: Internal.BiFunction_<any, any, any>): Internal.CompletionStage<any>;
        exceptionallyComposeAsync(arg0: Internal.Function_<any, any>, arg1: Internal.Executor_): Internal.CompletionStage<any>;
        acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletableFuture<void>;
        isCompletedExceptionally(): boolean;
        handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>, arg1: Internal.Executor_): Internal.CompletableFuture<U>;
        static supplyAsync<U>(arg0: Internal.Supplier_<U>): Internal.CompletableFuture<U>;
        copy(): this;
        runAfterBoth(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletableFuture<void>;
        thenRunAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static completedFuture<U>(arg0: U): Internal.CompletableFuture<U>;
        handle<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletableFuture<U>;
        completeExceptionally(arg0: Internal.Throwable_): boolean;
        obtrudeException(arg0: Internal.Throwable_): void;
        applyToEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        static completedStage<U>(arg0: U): Internal.CompletionStage<U>;
        runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<any>;
        thenCompose<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletableFuture<U>;
        static anyOf(...arg0: Internal.CompletableFuture_<any>[]): Internal.CompletableFuture<any>;
        completeOnTimeout(arg0: T, arg1: number, arg2: Internal.TimeUnit_): this;
        newIncompleteFuture<U>(): Internal.CompletableFuture<U>;
        runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<any>;
        static failedStage<U>(arg0: Internal.Throwable_): Internal.CompletionStage<U>;
        defaultExecutor(): Internal.Executor;
        whenCompleteAsync(arg0: Internal.BiConsumer_<any, any>): Internal.CompletionStage<any>;
        obtrudeValue(arg0: T): void;
        runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletableFuture<void>;
        thenRun(arg0: Internal.Runnable_): Internal.CompletionStage<any>;
        thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletableFuture<U>;
        getNumberOfDependents(): number;
        isDone(): boolean;
        whenComplete(arg0: Internal.BiConsumer_<any, any>): Internal.CompletionStage<any>;
        thenApply(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        static allOf(...arg0: Internal.CompletableFuture_<any>[]): Internal.CompletableFuture<void>;
        toCompletableFuture(): this;
        acceptEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Consumer_<any>): Internal.CompletionStage<any>;
        applyToEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        completeAsync(arg0: Internal.Supplier_<T>, arg1: Internal.Executor_): this;
        exceptionallyCompose(arg0: Internal.Function_<any, any>): Internal.CompletionStage<any>;
        get cancelled(): boolean
        get completedExceptionally(): boolean
        get numberOfDependents(): number
        get done(): boolean
    }
    type CompletableFuture_<T> = CompletableFuture<T>;
    abstract class AbstractIngredient extends Internal.Ingredient {
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        getDisplayStacks(): Internal.ItemStackSet;
        getCustomIngredient(): Internal.CustomIngredient;
        getItemIds(): Internal.Set<string>;
        asStack(): InputItem;
        withCount(count: number): InputItem;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        toJson(): Internal.JsonElement;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        isWildcard(): boolean;
        getStacks(): Internal.ItemStackSet;
        canBeUsedForMatching(): boolean;
        getItemTypes(): Internal.Set<Internal.Item>;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        getFirst(): Internal.ItemStack;
        negate(): Internal.Predicate<Internal.ItemStack>;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        requiresTesting(): boolean;
        asIngredient(): Internal.Ingredient;
        testItem(item: Internal.Item_): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get customIngredient(): Internal.CustomIngredient
        get itemIds(): Internal.Set<string>
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get itemTypes(): Internal.Set<Internal.Item>
        get first(): Internal.ItemStack
    }
    type AbstractIngredient_ = AbstractIngredient;
    class Cipher {
        wrap(arg0: Internal.Key_): number[];
        update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        doFinal(arg0: number[], arg1: number): number;
        doFinal(): number[];
        doFinal(arg0: number[]): number[];
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        update(arg0: number[]): number[];
        getParameters(): Internal.AlgorithmParameters;
        doFinal(arg0: number[], arg1: number, arg2: number): number[];
        getAlgorithm(): string;
        init(arg0: number, arg1: Internal.Key_): void;
        init(arg0: number, arg1: Internal.Certificate_, arg2: Internal.SecureRandom_): void;
        getExemptionMechanism(): Internal.ExemptionMechanism;
        updateAAD(arg0: Internal.ByteBuffer_): void;
        static getInstance(arg0: string): Internal.Cipher;
        update(arg0: number[], arg1: number, arg2: number): number[];
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.SecureRandom_): void;
        updateAAD(arg0: number[]): void;
        static getInstance(arg0: string, arg1: Internal.Provider_): Internal.Cipher;
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        getIV(): number[];
        doFinal(arg0: Internal.ByteBuffer_, arg1: Internal.ByteBuffer_): number;
        update(arg0: Internal.ByteBuffer_, arg1: Internal.ByteBuffer_): number;
        init(arg0: number, arg1: Internal.Certificate_): void;
        getProvider(): Internal.Provider;
        update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        static getInstance(arg0: string, arg1: string): Internal.Cipher;
        getOutputSize(arg0: number): number;
        static getMaxAllowedParameterSpec(arg0: string): Internal.AlgorithmParameterSpec;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameters_, arg3: Internal.SecureRandom_): void;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameters_): void;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameterSpec_, arg3: Internal.SecureRandom_): void;
        updateAAD(arg0: number[], arg1: number, arg2: number): void;
        static getMaxAllowedKeyLength(arg0: string): number;
        getBlockSize(): number;
        init(arg0: number, arg1: Internal.Key_, arg2: Internal.AlgorithmParameterSpec_): void;
        unwrap(arg0: number[], arg1: string, arg2: number): Internal.Key;
        get parameters(): Internal.AlgorithmParameters
        get algorithm(): string
        get exemptionMechanism(): Internal.ExemptionMechanism
        get IV(): number[]
        get provider(): Internal.Provider
        get blockSize(): number
        static readonly SECRET_KEY: 3;
        static readonly ENCRYPT_MODE: 1;
        static readonly PUBLIC_KEY: 1;
        static readonly PRIVATE_KEY: 2;
        static readonly WRAP_MODE: 3;
        static readonly UNWRAP_MODE: 4;
        static readonly DECRYPT_MODE: 2;
    }
    type Cipher_ = Cipher;
    class PotionItem extends Internal.Item {
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
    type PotionItem_ = PotionItem;
    class FillLayerFeature extends Internal.Feature<Internal.LayerConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.LayerConfiguration>)
    }
    type FillLayerFeature_ = FillLayerFeature;
    class InventoryPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.InventoryConfiguration> implements Internal.IInventoryPower<Internal.InventoryConfiguration>, Internal.IActivePower<Internal.InventoryConfiguration> {
        constructor()
        tryDropItemsOnLost(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, Internal.InventoryPower>, arg1: Internal.Entity_): void;
        getSize(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): number;
        static tryDropItemsOnDeath(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, Internal.InventoryPower>, arg1: Player_): void;
        getInventory(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): Internal.Container;
        activate(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): void;
        shouldDropOnDeath(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.ItemStack_): boolean;
        getMenuCreator(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): Internal.MenuConstructor;
        shouldDropOnDeath(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): boolean;
        getKey(arg0: Internal.ConfiguredPower_<Internal.InventoryConfiguration, any>, arg1: Internal.Entity_): Internal.IActivePower$Key;
    }
    type InventoryPower_ = InventoryPower;
    class ClientboundServerDataPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Component_, arg1: Internal.Optional_<number[]>, arg2: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getIconBytes(): Internal.Optional<number[]>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        enforcesSecureChat(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getMotd(): Internal.Component;
        isSkippable(): boolean;
        get iconBytes(): Internal.Optional<number[]>
        get motd(): Internal.Component
        get skippable(): boolean
    }
    type ClientboundServerDataPacket_ = ClientboundServerDataPacket;
    class ActiveSelfPower extends Internal.ActiveCooldownPowerFactory$Simple<Internal.ActiveSelfConfiguration> {
        constructor()
        increment(arg0: Internal.ConfiguredPower_<Internal.ActiveSelfConfiguration, any>, arg1: Internal.Entity_): number;
        decrement(arg0: Internal.ConfiguredPower_<Internal.ActiveSelfConfiguration, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<Internal.ActiveSelfConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.ActiveSelfConfiguration, any>, arg1: Internal.Entity_): number;
    }
    type ActiveSelfPower_ = ActiveSelfPower;
    class PathNavigationRegion implements Internal.CollisionGetter, Internal.BlockGetter {
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_)
        noCollision(arg0: Internal.Entity_): boolean;
        getMinSection(): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getProfiler(): Internal.ProfilerFiller;
        getSectionYFromSectionIndex(arg0: number): number;
        noCollision(arg0: Internal.AABB_): boolean;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get profiler(): Internal.ProfilerFiller
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
        allEmpty: boolean;
        readonly centerZ: number;
        readonly level: Internal.Level;
        readonly chunks: Internal.ChunkAccess[][];
        readonly centerX: number;
    }
    type PathNavigationRegion_ = PathNavigationRegion;
    class FloatingGummyRingFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type FloatingGummyRingFeature_ = FloatingGummyRingFeature;
    class EyeOfEnder extends Internal.Entity implements Internal.ItemSupplier {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.EyeOfEnder>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
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
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
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
        getMotionY(): number;
        getName(): Internal.Component;
        signalTo(arg0: BlockPos_): void;
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
        runCommand(command: string): number;
        set item(arg0: Internal.ItemStack_)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
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
        tz: number;
        tx: number;
        ty: number;
        surviveAfterDeath: boolean;
        life: number;
    }
    type EyeOfEnder_ = EyeOfEnder;
    class OffsetAction extends Internal.BlockAction<Internal.OffsetConfiguration<Internal.ConfiguredBlockAction<any, any>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.OffsetConfiguration_<Internal.ConfiguredBlockAction<any, any>>, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_): void;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type OffsetAction_ = OffsetAction;
    interface Logger {
        abstract error(arg0: string): void;
        abstract trace(arg0: string, ...arg1: any[]): void;
        abstract warn(arg0: string, arg1: any, arg2: any): void;
        abstract isTraceEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract info(arg0: string, arg1: Internal.Throwable_): void;
        abstract debug(arg0: string): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract error(arg0: string, ...arg1: any[]): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract warn(arg0: string, arg1: any): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract info(arg0: string): void;
        atTrace(): Internal.LoggingEventBuilder;
        isEnabledForLevel(arg0: org.slf4j.event.Level_): boolean;
        abstract debug(arg0: string, ...arg1: any[]): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract warn(arg0: string, arg1: Internal.Throwable_): void;
        atDebug(): Internal.LoggingEventBuilder;
        abstract info(arg0: string, arg1: any): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract isTraceEnabled(): boolean;
        abstract isWarnEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract trace(arg0: string): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract debug(arg0: string, arg1: any, arg2: any): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract trace(arg0: string, arg1: any): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract trace(arg0: string, arg1: any, arg2: any): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract isDebugEnabled(): boolean;
        atWarn(): Internal.LoggingEventBuilder;
        makeLoggingEventBuilder(arg0: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        abstract error(arg0: string, arg1: any): void;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: any, arg3: any): void;
        abstract warn(arg0: string): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract warn(arg0: string, ...arg1: any[]): void;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract isErrorEnabled(): boolean;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string): void;
        abstract warn(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract isWarnEnabled(): boolean;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract error(arg0: string, arg1: any, arg2: any): void;
        abstract getName(): string;
        abstract trace(arg0: org.slf4j.Marker_, arg1: string, arg2: Internal.Throwable_): void;
        abstract isErrorEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract debug(arg0: string, arg1: any): void;
        abstract info(arg0: org.slf4j.Marker_, arg1: string, arg2: any): void;
        abstract info(arg0: string, arg1: any, arg2: any): void;
        abstract isInfoEnabled(): boolean;
        atInfo(): Internal.LoggingEventBuilder;
        atError(): Internal.LoggingEventBuilder;
        abstract debug(arg0: string, arg1: Internal.Throwable_): void;
        abstract info(arg0: string, ...arg1: any[]): void;
        abstract error(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract isDebugEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract isInfoEnabled(arg0: org.slf4j.Marker_): boolean;
        abstract debug(arg0: org.slf4j.Marker_, arg1: string, ...arg2: any[]): void;
        abstract trace(arg0: string, arg1: Internal.Throwable_): void;
        abstract error(arg0: string, arg1: Internal.Throwable_): void;
        atLevel(arg0: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        get traceEnabled(): boolean
        get debugEnabled(): boolean
        get errorEnabled(): boolean
        get warnEnabled(): boolean
        get name(): string
        get infoEnabled(): boolean
        readonly ROOT_LOGGER_NAME: "ROOT";
    }
    type Logger_ = Logger;
    class ClientboundUpdateTagsPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getTags(): Internal.Map<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get tags(): Internal.Map<Internal.ResourceKey<Internal.Registry<any>>, Internal.TagNetworkSerialization$NetworkPayload>
        get skippable(): boolean
    }
    type ClientboundUpdateTagsPacket_ = ClientboundUpdateTagsPacket;
    class AboveRootPlacement extends Internal.Record {
        constructor(arg0: Internal.BlockStateProvider_, arg1: number)
        aboveRootProvider(): Internal.BlockStateProvider;
        aboveRootPlacementChance(): number;
        static readonly CODEC: Internal.Codec<Internal.AboveRootPlacement>;
    }
    type AboveRootPlacement_ = AboveRootPlacement;
    class ContextUtils$RenderContextCustom <T extends Internal.LivingEntity> {
        constructor(entity: T, entityYaw: number, partialTick: number, poseStack: Internal.PoseStack_, bufferSource: Internal.MultiBufferSource_, packedLight: number)
        /**
         * The packed light information
        */
        readonly packedLight: number;
        /**
         * The partial tick
        */
        readonly partialTick: number;
        /**
         * The pose stack for transformations
        */
        readonly poseStack: Internal.PoseStack;
        /**
         * The buffer source for rendering
        */
        readonly bufferSource: Internal.MultiBufferSource;
        /**
         * The yaw of the entity
        */
        readonly entityYaw: number;
        /**
         * The animatable entity being rendered
        */
        readonly entity: T;
    }
    type ContextUtils$RenderContextCustom_<T extends Internal.LivingEntity> = ContextUtils$RenderContextCustom<T>;
    class WorldgenRandom extends Internal.LegacyRandomSource {
        constructor(arg0: Internal.RandomSource_)
        getCount(): number;
        static create(arg0: number): Internal.RandomSource;
        static create(): Internal.RandomSource;
        setLargeFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        nextBoolean(): boolean;
        setLargeFeatureWithSalt(arg0: number, arg1: number, arg2: number, arg3: number): void;
        nextLong(): number;
        nextDouble(): number;
        nextInt(arg0: number, arg1: number): number;
        static createNewThreadLocalInstance(): Internal.RandomSource;
        consumeCount(arg0: number): void;
        setDecorationSeed(arg0: number, arg1: number, arg2: number): number;
        triangle(arg0: number, arg1: number): number;
        setFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        nextInt(arg0: number): number;
        nextFloat(): number;
        static seedSlimeChunk(arg0: number, arg1: number, arg2: number, arg3: number): Internal.RandomSource;
        /**
         * @deprecated
        */
        static createThreadSafe(): Internal.RandomSource;
        nextInt(): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        get count(): number
    }
    type WorldgenRandom_ = WorldgenRandom;
    class Response {
        constructor()
        getError(): string;
        getErrorMessage(): string;
        getCause(): string;
        get error(): string
        get errorMessage(): string
        get cause(): string
    }
    type Response_ = Response;
    abstract class PartEntity <T extends Internal.Entity> extends Internal.Entity {
        constructor(arg0: T)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        self(): Internal.Entity;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getBlock(): Internal.BlockContainerJS;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isLiving(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        getParent(): T;
        getClassification(arg0: boolean): Internal.MobCategory;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
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
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get facing(): Internal.Direction
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
        get parent(): T
    }
    type PartEntity_<T extends Internal.Entity> = PartEntity<T>;
    class AdvancementRewards$Builder {
        constructor()
        static loot(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        addExperience(arg0: number): this;
        static experience(arg0: number): Internal.AdvancementRewards$Builder;
        addLootTable(arg0: ResourceLocation_): this;
        build(): Internal.AdvancementRewards;
        static "function"(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        static recipe(arg0: ResourceLocation_): Internal.AdvancementRewards$Builder;
        addRecipe(arg0: ResourceLocation_): this;
        runs(arg0: ResourceLocation_): this;
    }
    type AdvancementRewards$Builder_ = AdvancementRewards$Builder;
    class RegisterColorHandlersEvent$Item extends Internal.RegisterColorHandlersEvent {
        constructor()
        constructor(arg0: Internal.ItemColors_, arg1: Internal.BlockColors_)
        getItemColors(): Internal.ItemColors;
        register(arg0: Internal.ItemColor_, ...arg1: Internal.ItemLike_[]): void;
        getBlockColors(): Internal.BlockColors;
        get itemColors(): Internal.ItemColors
        get blockColors(): Internal.BlockColors
    }
    type RegisterColorHandlersEvent$Item_ = RegisterColorHandlersEvent$Item;
    class ImmutableMap$Builder <K, V> {
        constructor()
        put(arg0: K, arg1: V): this;
        buildOrThrow(): Internal.ImmutableMap<K, V>;
        putAll(arg0: Internal.Map_<K, V>): this;
        putAll(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): this;
        buildKeepingLast(): Internal.ImmutableMap<K, V>;
        put(arg0: Internal.Map$Entry_<K, V>): this;
        orderEntriesByValue(arg0: Internal.Comparator_<V>): this;
        build(): Internal.ImmutableMap<K, V>;
    }
    type ImmutableMap$Builder_<K, V> = ImmutableMap$Builder<K, V>;
    class AnvilBlock extends Internal.FallingBlock {
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
        handler$zel000$placebo$onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_, arg5: Internal.CallbackInfo_): void;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        static damage(arg0: Internal.BlockState_): Internal.BlockState;
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
    type AnvilBlock_ = AnvilBlock;
    class FairkeeperSpawnerBlock extends Internal.BaseEntityBlock implements Internal.EntityBlock {
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
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static setFairkeeperAlert(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean): void;
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
        static readonly FAIRKEEPER_ALERT: Internal.BooleanProperty;
    }
    type FairkeeperSpawnerBlock_ = FairkeeperSpawnerBlock;
    class CriteriaBuilder {
        /**
         * Add a named trigger for this advancement.
         * @param name The name of this trigger.
         * @param trigger The trigger itself.
        */
        add(arg0: string, arg1: Internal.CriterionTriggerInstance_): void;
        /**
         * Add a nameless trigger for this advancement.
        */
        add(arg0: Internal.CriterionTriggerInstance_): void;
        /**
         * Clear all criterion.
        */
        clear(): void;
        /**
         * Remove a trigger from this advancement by its name.
        */
        remove(arg0: string): void;
        /**
         * Defines how these criteria are completed to grant the advancement.
         * 
         * Directly configure requirements instead of strategy.
        */
        setRequirements(arg0: string[][]): void;
        /**
         * Defines how these criteria are completed to grant the advancement.
         * 
         * If set to 'RequirementsStrategy.OR', the requirements will looks like '[[a, b, c]]'.
         * 
         * If set to 'RequirementsStrategy.AND', the requirements will looks like '[[a], [b], [c]]'.
         * 
         * Defaults to 'RequirementsStrategy.AND'.
        */
        setStrategy(arg0: Internal.RequirementsStrategy_): void;
        /**
         * Defines how these criteria are completed to grant the advancement.
         * 
         * Directly configure requirements instead of strategy.
        */
        set requirements(arg0: string[][])
        /**
         * Defines how these criteria are completed to grant the advancement.
         * 
         * If set to 'RequirementsStrategy.OR', the requirements will looks like '[[a, b, c]]'.
         * 
         * If set to 'RequirementsStrategy.AND', the requirements will looks like '[[a], [b], [c]]'.
         * 
         * Defaults to 'RequirementsStrategy.AND'.
        */
        set strategy(arg0: Internal.RequirementsStrategy_)
    }
    type CriteriaBuilder_ = CriteriaBuilder;
    interface ObjectListIterator <K> extends Internal.ObjectBidirectionalIterator<K>, Internal.ListIterator<K> {
        set(arg0: K): void;
        abstract nextIndex(): number;
        remove(): void;
        abstract hasPrevious(): boolean;
        skip(arg0: number): number;
        add(arg0: K): void;
        abstract next(): K;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
        abstract previous(): K;
        abstract previousIndex(): number;
    }
    type ObjectListIterator_<K> = ObjectListIterator<K>;
    class MinecraftProfileTexture {
        constructor(arg0: string, arg1: Internal.Map_<string, string>)
        getMetadata(arg0: string): string;
        getUrl(): string;
        getHash(): string;
        get url(): string
        get hash(): string
        static readonly PROFILE_TEXTURE_COUNT: 3;
    }
    type MinecraftProfileTexture_ = MinecraftProfileTexture;
    class PlayState extends Internal.Enum<Internal.PlayState> {
        static valueOf(arg0: string): Internal.PlayState;
        static values(): Internal.PlayState[];
        static readonly STOP: Internal.PlayState;
        static readonly CONTINUE: Internal.PlayState;
    }
    type PlayState_ = "stop" | "continue" | PlayState;
    class Services extends Internal.Record {
        constructor(arg0: Internal.MinecraftSessionService_, arg1: Internal.ServicesKeySet_, arg2: Internal.GameProfileRepository_, arg3: Internal.GameProfileCache_)
        static create(arg0: Internal.YggdrasilAuthenticationService_, arg1: Internal.File_): Internal.Services;
        servicesKeySet(): Internal.ServicesKeySet;
        sessionService(): Internal.MinecraftSessionService;
        profileCache(): Internal.GameProfileCache;
        profileRepository(): Internal.GameProfileRepository;
        profileKeySignatureValidator(): Internal.SignatureValidator;
    }
    type Services_ = Services;
    class CaxtonFontOptions$Invert extends Internal.Enum<Internal.CaxtonFontOptions$Invert> {
        static valueOf(name: string): Internal.CaxtonFontOptions$Invert;
        static values(): Internal.CaxtonFontOptions$Invert[];
        static fromJson(json: Internal.JsonElement_): Internal.CaxtonFontOptions$Invert;
        static readonly FALSE: Internal.CaxtonFontOptions$Invert;
        static readonly UNSET: Internal.CaxtonFontOptions$Invert;
        static readonly TRUE: Internal.CaxtonFontOptions$Invert;
    }
    type CaxtonFontOptions$Invert_ = CaxtonFontOptions$Invert | "unset" | "false" | "true";
    class ModParticle$3 extends Internal.ParticleType<Internal.LightTrailParticle$OrbData> {
        codec(): Internal.Codec<Internal.LightTrailParticle$OrbData>;
    }
    type ModParticle$3_ = ModParticle$3;
    class ModParticle$2 extends Internal.ParticleType<Internal.StormParticle$OrbData> {
        codec(): Internal.Codec<Internal.StormParticle$OrbData>;
    }
    type ModParticle$2_ = ModParticle$2;
    class ModParticle$1 extends Internal.ParticleType<Internal.LightningParticle$OrbData> {
        codec(): Internal.Codec<Internal.LightningParticle$OrbData>;
    }
    type ModParticle$1_ = ModParticle$1;
    class MultiBufferSource$BufferSource implements Internal.BufferSourceAccessor, Internal.MemoryTrackingBuffer, Internal.MultiBufferSource {
        constructor(arg0: Internal.BufferBuilder_, arg1: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>)
        endBatch(arg0: Internal.RenderType_): void;
        endLastBatch(): void;
        freeAndDeleteBuffer(): void;
        endBatch(): void;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        getUsedSize(): number;
        getFixedBuffers(): Internal.Map<any, any>;
        getAllocatedSize(): number;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        get usedSize(): number
        get fixedBuffers(): Internal.Map<any, any>
        get allocatedSize(): number
        readonly fixedBuffers: Internal.Map<Internal.RenderType, Internal.BufferBuilder>;
        lastState: Internal.Optional<Internal.RenderType>;
        readonly builder: Internal.BufferBuilder;
        startedBuffers: Internal.Set<Internal.BufferBuilder>;
    }
    type MultiBufferSource$BufferSource_ = MultiBufferSource$BufferSource;
    class PackType extends Internal.Enum<Internal.PackType> {
        static values(): Internal.PackType[];
        static valueOf(arg0: string): Internal.PackType;
        getDirectory(): string;
        get directory(): string
        static readonly CLIENT_RESOURCES: Internal.PackType;
        static readonly SERVER_DATA: Internal.PackType;
    }
    type PackType_ = "client_resources" | PackType | "server_data";
    interface IExtendedItem {
        abstract moonlight$getClientAnimationExtension(): any;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
    }
    type IExtendedItem_ = IExtendedItem;
    class PrepareRamNearestTarget <E extends Internal.PathfinderMob> extends Internal.Behavior<E> {
        constructor(arg0: Internal.ToIntFunction_<E>, arg1: number, arg2: number, arg3: number, arg4: Internal.TargetingConditions_, arg5: number, arg6: Internal.Function_<E, Internal.SoundEvent>)
        canStillUse(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): boolean;
        stop(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        tick(arg0: Internal.ServerLevel_, arg1: E, arg2: number): void;
        start(arg0: Internal.ServerLevel_, arg1: Internal.PathfinderMob_, arg2: number): void;
        static readonly TIME_OUT_DURATION: 160;
    }
    type PrepareRamNearestTarget_<E extends Internal.PathfinderMob> = PrepareRamNearestTarget<E>;
    class Matcher implements Internal.MatchResult {
        start(): number;
        matches(): boolean;
        find(arg0: number): boolean;
        pattern(): Internal.Pattern;
        appendReplacement(arg0: Internal.StringBuffer_, arg1: string): this;
        end(arg0: number): number;
        end(arg0: string): number;
        reset(): this;
        results(): Internal.Stream<Internal.MatchResult>;
        reset(arg0: Internal.CharSequence_): this;
        replaceFirst(arg0: string): string;
        appendTail(arg0: Internal.StringBuilder_): Internal.StringBuilder;
        groupCount(): number;
        find(): boolean;
        lookingAt(): boolean;
        region(arg0: number, arg1: number): this;
        replaceFirst(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        start(arg0: number): number;
        hasTransparentBounds(): boolean;
        appendReplacement(arg0: Internal.StringBuilder_, arg1: string): this;
        end(): number;
        group(arg0: string): string;
        replaceAll(arg0: Internal.Function_<Internal.MatchResult, string>): string;
        requireEnd(): boolean;
        hasAnchoringBounds(): boolean;
        useTransparentBounds(arg0: boolean): this;
        appendTail(arg0: Internal.StringBuffer_): Internal.StringBuffer;
        regionEnd(): number;
        useAnchoringBounds(arg0: boolean): this;
        toMatchResult(): Internal.MatchResult;
        usePattern(arg0: Internal.Pattern_): this;
        replaceAll(arg0: string): string;
        start(arg0: string): number;
        static quoteReplacement(arg0: string): string;
        group(): string;
        hitEnd(): boolean;
        group(arg0: number): string;
        regionStart(): number;
    }
    type Matcher_ = Matcher;
    abstract class ScreenEvent$MouseDragged extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getMouseButton(): number;
        getDragY(): number;
        getDragX(): number;
        get mouseButton(): number
        get dragY(): number
        get dragX(): number
    }
    type ScreenEvent$MouseDragged_ = ScreenEvent$MouseDragged;
    class FieldPosition {
        constructor(arg0: Internal.Format$Field_)
        constructor(arg0: Internal.Format$Field_, arg1: number)
        constructor(arg0: number)
        getFieldAttribute(): Internal.Format$Field;
        getBeginIndex(): number;
        getField(): number;
        setBeginIndex(arg0: number): void;
        setEndIndex(arg0: number): void;
        getEndIndex(): number;
        get fieldAttribute(): Internal.Format$Field
        get beginIndex(): number
        get field(): number
        set beginIndex(arg0: number)
        set endIndex(arg0: number)
        get endIndex(): number
    }
    type FieldPosition_ = FieldPosition;
    interface WithAttachedData <T> extends Internal.MessageSenderKJS {
        getDisplayName(): Internal.Component;
        setStatusMessage(message: Internal.Component_): void;
        getName(): Internal.Component;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<T>;
        runCommand(command: string): number;
        get displayName(): Internal.Component
        set statusMessage(message: Internal.Component_)
        get name(): Internal.Component
        get data(): Internal.AttachedData<T>
        (): Internal.AttachedData_<T>;
    }
    type WithAttachedData_<T> = WithAttachedData<T>;
    class ActionOnBeingUsedPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.BiEntityInteractionConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.BiEntityInteractionConfiguration>)
        static tryInteract(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.InteractionHand_): Internal.Optional<InteractionResult>;
        static tryPrevent(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.InteractionHand_): Internal.Optional<InteractionResult>;
        tryExecute(arg0: Internal.ConfiguredPower_<Internal.BiEntityInteractionConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.Entity_, arg3: Internal.InteractionHand_): Internal.Optional<InteractionResult>;
    }
    type ActionOnBeingUsedPower_ = ActionOnBeingUsedPower;
    interface IMutableModel {
        abstract getEmoteSupplier(): Internal.SetableSupplier<dev.kosmx.playerAnim.core.impl.AnimationProcessor>;
        abstract setEmoteSupplier(arg0: Internal.SetableSupplier_<dev.kosmx.playerAnim.core.impl.AnimationProcessor>): void;
        get emoteSupplier(): Internal.SetableSupplier<dev.kosmx.playerAnim.core.impl.AnimationProcessor>
        set emoteSupplier(arg0: Internal.SetableSupplier_<dev.kosmx.playerAnim.core.impl.AnimationProcessor>)
    }
    type IMutableModel_ = IMutableModel;
    class TallGrassBlock extends Internal.BushBlock implements Internal.IForgeShearable, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 6.0;
    }
    type TallGrassBlock_ = TallGrassBlock;
    interface IFluidStorage extends Internal.IFluidTransfer {
        abstract fill(arg0: number, arg1: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, arg2: boolean, arg3: boolean): number;
        abstract createSnapshot(): any;
        abstract restoreFromSnapshot(arg0: any): void;
        abstract supportsDrain(arg0: number): boolean;
        getTankCapacity(tank: number): number;
        setFluidInTank(tank: number, fluidStack: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): void;
        getFluidInTank(tank: number): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        abstract supportsFill(arg0: number): boolean;
        drain(maxDrain: number, simulate: boolean, notifyChanges: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        fill(resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, simulate: boolean, notifyChanges: boolean): number;
        fill(resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, simulate: boolean): number;
        drain(maxDrain: number, simulate: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        isFluidValid(tank: number, stack: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        getTanks(): number;
        drain(resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, simulate: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        abstract drain(arg0: number, arg1: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, arg2: boolean, arg3: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        onContentsChanged(): void;
        abstract setFluid(arg0: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): void;
        abstract isFluidValid(arg0: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        getFluidAmount(): number;
        drain(resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, simulate: boolean, notifyChanges: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        abstract getCapacity(): number;
        abstract getFluid(): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        get tanks(): number
        set fluid(arg0: com.lowdragmc.lowdraglib.side.fluid.FluidStack_)
        get fluidAmount(): number
        get capacity(): number
        get fluid(): com.lowdragmc.lowdraglib.side.fluid.FluidStack
        readonly EMPTY: Internal.IFluidStorage;
    }
    type IFluidStorage_ = IFluidStorage;
    class BlockColumnConfiguration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.List_<Internal.BlockColumnConfiguration$Layer>, arg1: Internal.Direction_, arg2: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg3: boolean)
        static layer(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration$Layer;
        allowedPlacement(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        layers(): Internal.List<Internal.BlockColumnConfiguration$Layer>;
        static simple(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_): Internal.BlockColumnConfiguration;
        prioritizeTip(): boolean;
        direction(): Internal.Direction;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.BlockColumnConfiguration>;
    }
    type BlockColumnConfiguration_ = BlockColumnConfiguration;
    class LevelRenderer implements net.irisshaders.iris.mixin.LevelRendererAccessor, Internal.ResourceManagerReloadListener, Internal.WorldRendererExtended, Internal.CullingDataCache, Internal.WorldRendererAccessor, Internal.AutoCloseable, Internal.LevelRendererAccessor, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.EntityRenderDispatcher_, arg2: Internal.BlockEntityRenderDispatcher_, arg3: Internal.RenderBuffers_)
        setRenderBuffers(arg0: Internal.RenderBuffers_): void;
        getFrustum(): Internal.Frustum;
        getItemEntityTarget(): Internal.RenderTarget;
        needsUpdate(): void;
        entityTarget(): Internal.RenderTarget;
        updateGlobalBlockEntities(arg0: Internal.Collection_<Internal.BlockEntity>, arg1: Internal.Collection_<Internal.BlockEntity>): void;
        invokeRenderEntity(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.PoseStack_, arg6: Internal.MultiBufferSource_): void;
        saveState(): void;
        getCloudsTarget(): Internal.RenderTarget;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        killFrustum(): void;
        getTranslucentTarget(): Internal.RenderTarget;
        sodium$getWorldRenderer(): Internal.SodiumWorldRenderer;
        prepareCullFrustum(arg0: Internal.PoseStack_, arg1: Vec3d_, arg2: Matrix4f_): void;
        static renderVoxelShape(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.VoxelShape_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
        addRecentlyCompiledChunk(arg0: Internal.ChunkRenderDispatcher$RenderChunk_): void;
        countRenderedChunks(): number;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        tickRain(arg0: Internal.Camera_): void;
        hasRenderedAllChunks(): boolean;
        setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setLevel(arg0: Internal.ClientLevel_): void;
        wrapOperation$cjh000$particlerain$optionsParticlesGet(arg0: Internal.OptionInstance_<any>, arg1: Internal.Operation_<any>): any;
        wrapOperation$cjh000$particlerain$getBiomeValue(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Operation_<any>): Internal.Holder<any>;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: BlockPos_): number;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderClouds(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getFabricDependencies(): Internal.Collection<any>;
        getTotalChunks(): number;
        tick(): void;
        getRenderBuffers(): Internal.RenderBuffers;
        doEntityOutline(): void;
        static renderLineBox(arg0: Internal.VertexConsumer_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        getEntityStatistics(): string;
        sodiumdynamiclights$scheduleChunkRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getTicks(): number;
        resize(arg0: number, arg1: number): void;
        setShouldRegenerateClouds(arg0: boolean): void;
        /**
         * @deprecated
        */
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_): void;
        getChunkStatistics(): string;
        initOutline(): void;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setSectionDirty(arg0: number, arg1: number, arg2: number): void;
        isChunkCompiled(arg0: BlockPos_): boolean;
        static addChainedFilledBoxVertices(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        handler$cjh000$particlerain$render(arg0: Internal.LightTexture_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.CallbackInfo_): void;
        destroyBlockProgress(arg0: number, arg1: BlockPos_, arg2: number): void;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        addParticle(arg0: Internal.ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        invokeRenderChunkLayer(arg0: Internal.RenderType_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number, arg5: Matrix4f_): void;
        captureFrustum(): void;
        invokeSetupRender(arg0: Internal.Camera_, arg1: Internal.Frustum_, arg2: boolean, arg3: boolean): void;
        renderSky(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: Internal.Camera_, arg4: boolean, arg5: Internal.Runnable_): void;
        getName(): string;
        accessories$getEntityEffect(): Internal.PostChain;
        handler$bac000$embeddium$renderCloudsFast(arg0: Internal.PoseStack_, arg1: Matrix4f_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CallbackInfo_): void;
        getFabricId(): ResourceLocation;
        shouldShowEntityOutlines(): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        blockChanged(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: number): void;
        getChunkRenderDispatcher(): Internal.ChunkRenderDispatcher;
        static renderLineBox(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.AABB_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        globalLevelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        wrapOperation$cjh000$particlerain$adjustRainVolume(arg0: Internal.ClientLevel_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Operation_<any>): void;
        playStreamingMusic(arg0: Internal.SoundEvent_, arg1: BlockPos_, arg2: Internal.RecordItem_): void;
        getLevel(): Internal.ClientLevel;
        allChanged(): void;
        getParticlesTarget(): Internal.RenderTarget;
        setBlockDirty(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.BlockState_): void;
        handler$cjh000$particlerain$hookWeatherSounds(arg0: Internal.Camera_, arg1: Internal.CallbackInfo_, arg2: BlockPos_, arg3: BlockPos_): void;
        renderLevel(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.Camera_, arg5: Internal.GameRenderer_, arg6: Internal.LightTexture_, arg7: Matrix4f_): void;
        shouldRegenerateClouds(): boolean;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getLastViewDistance(): number;
        getWeatherTarget(): Internal.RenderTarget;
        clear(): void;
        close(): void;
        static getLightColor(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): number;
        restoreState(): void;
        graphicsChanged(): void;
        set renderBuffers(arg0: Internal.RenderBuffers_)
        get frustum(): Internal.Frustum
        get itemEntityTarget(): Internal.RenderTarget
        get cloudsTarget(): Internal.RenderTarget
        get translucentTarget(): Internal.RenderTarget
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        set level(arg0: Internal.ClientLevel_)
        get fabricDependencies(): Internal.Collection<any>
        get totalChunks(): number
        get renderBuffers(): Internal.RenderBuffers
        get entityStatistics(): string
        get ticks(): number
        set shouldRegenerateClouds(arg0: boolean)
        get chunkStatistics(): string
        get name(): string
        get fabricId(): ResourceLocation
        get chunkRenderDispatcher(): Internal.ChunkRenderDispatcher
        get level(): Internal.ClientLevel
        get particlesTarget(): Internal.RenderTarget
        get lastViewDistance(): number
        get weatherTarget(): Internal.RenderTarget
        static readonly CHUNK_SIZE: 16;
        renderBuffers: Internal.RenderBuffers;
        static readonly DIRECTIONS: Internal.Direction[];
        viewArea: Internal.ViewArea;
    }
    type LevelRenderer_ = LevelRenderer;
    class ShotGumItem extends Internal.Item implements Internal.UpdatesStackTags, Internal.AlwaysCombinableOnAnvil {
        constructor()
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
        updateTagFromServer(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.CompoundTag_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        static setShootTime(arg0: Internal.ItemStack_, arg1: number): void;
        static getLerpedCrankAngle(arg0: Internal.ItemStack_, arg1: number): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        static hasAmmo(arg0: Internal.ItemStack_): boolean;
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
        static shouldBeHeldUpright(arg0: Internal.ItemStack_): boolean;
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
        static setGumballsLeft(arg0: Internal.ItemStack_, arg1: number): void;
        getDamage(arg0: Internal.ItemStack_): number;
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
        static getGumballsLeft(arg0: Internal.ItemStack_): number;
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
        static getLerpedShootTime(arg0: Internal.ItemStack_, arg1: number): number;
        static isShooting(arg0: Internal.ItemStack_): boolean;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static setCrankAngle(arg0: Internal.ItemStack_, arg1: number): void;
        static setShooting(arg0: Internal.ItemStack_, arg1: boolean): void;
        static getCrankAngle(arg0: Internal.ItemStack_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        static getShootTime(arg0: Internal.ItemStack_): number;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
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
        static readonly MAX_AMMO: 4;
        static readonly AMMO: Internal.Predicate<Internal.ItemStack>;
    }
    type ShotGumItem_ = ShotGumItem;
    interface DoubleListIterator extends Internal.DoubleBidirectionalIterator, Internal.ListIterator<number> {
        /**
         * @deprecated
        */
        add(arg0: any): void;
        abstract nextIndex(): number;
        forEachRemaining(arg0: any): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): void;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        set(arg0: any): void;
        skip(arg0: number): number;
        abstract nextDouble(): number;
        abstract previousDouble(): number;
        add(arg0: number): void;
        remove(): void;
        abstract hasPrevious(): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        set(arg0: number): void;
        /**
         * @deprecated
        */
        add(arg0: number): void;
        /**
         * @deprecated
        */
        set(arg0: number): void;
        forEachRemaining(arg0: Internal.DoubleConsumer_): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        previous(): any;
        abstract previousIndex(): number;
    }
    type DoubleListIterator_ = DoubleListIterator;
    interface ICastData {
        abstract reset(): void;
        (): void;
    }
    type ICastData_ = ICastData;
    class FluidActionResult {
        constructor(result: Internal.ItemStack_)
        isSuccess(): boolean;
        getResult(): Internal.ItemStack;
        get success(): boolean
        get result(): Internal.ItemStack
        readonly result: Internal.ItemStack;
        readonly success: boolean;
        static readonly FAILURE: Internal.FluidActionResult;
    }
    type FluidActionResult_ = FluidActionResult;
    class NetworkEvent$Context {
        setPacketHandled(arg0: boolean): void;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        getPacketDispatcher(): Internal.NetworkEvent$PacketDispatcher;
        getPacketHandled(): boolean;
        getDirection(): Internal.NetworkDirection;
        attr<T>(arg0: Internal.AttributeKey_<T>): io.netty.util.Attribute<T>;
        getSender(): Internal.ServerPlayer;
        getNetworkManager(): Internal.Connection;
        set packetHandled(arg0: boolean)
        get packetDispatcher(): Internal.NetworkEvent$PacketDispatcher
        get packetHandled(): boolean
        get direction(): Internal.NetworkDirection
        get sender(): Internal.ServerPlayer
        get networkManager(): Internal.Connection
    }
    type NetworkEvent$Context_ = NetworkEvent$Context;
    class MagneticLevitationRailBlock extends Internal.BaseRailBlock {
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
        onMinecartPass(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): void;
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
        isValidRailShape(arg0: Internal.RailShape_): boolean;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canMakeSlopes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.RailShape>;
    }
    type MagneticLevitationRailBlock_ = MagneticLevitationRailBlock;
    class ServerStatus$Version extends Internal.Record {
        constructor(name: string, protocol: number)
        name(): string;
        protocol(): number;
        static current(): Internal.ServerStatus$Version;
        static readonly CODEC: Internal.Codec<Internal.ServerStatus$Version>;
    }
    type ServerStatus$Version_ = ServerStatus$Version;
    class TimeArgument implements Internal.ArgumentType<number> {
        getExamples(): Internal.Collection<string>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static time(arg0: number): Internal.TimeArgument;
        static time(): Internal.TimeArgument;
        parse(arg0: Internal.StringReader_): any;
        get examples(): Internal.Collection<string>
        readonly minimum: number;
    }
    type TimeArgument_ = TimeArgument;
    class ZombieHorse extends Internal.AbstractHorse {
        constructor(arg0: Internal.EntityType_<Internal.ZombieHorse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
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
        getSaddleSoundEvent(): Internal.SoundEvent;
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
        getJumpCooldown(): number;
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
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get saddleSoundEvent(): Internal.SoundEvent
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
        get jumpCooldown(): number
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
    type ZombieHorse_ = ZombieHorse;
    class EvokerFangs extends Internal.Entity implements Internal.TraceableEntity {
        constructor(arg0: Internal.EntityType_<Internal.EvokerFangs>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.LivingEntity_)
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
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getOwner(): Internal.Entity;
        isInFluid(fluidState: Internal.FluidState_): boolean;
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
        getAnimationProgress(arg0: number): number;
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
        setOwner(arg0: Internal.LivingEntity_): void;
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
        runCommand(command: string): number;
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get owner(): Internal.Entity
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
        set owner(arg0: Internal.LivingEntity_)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        static readonly ATTACK_DURATION: 20;
        static readonly LIFE_OFFSET: 2;
        static readonly ATTACK_TRIGGER_TICKS: 14;
    }
    type EvokerFangs_ = EvokerFangs;
    interface ITogglePower <T extends Internal.IDynamicFeatureConfiguration> extends Internal.IActivePower<T> {
        abstract toggle(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        abstract activate(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        abstract getKey(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): Internal.IActivePower$Key;
    }
    type ITogglePower_<T extends Internal.IDynamicFeatureConfiguration> = ITogglePower<T>;
    class Phantom$AttackPhase extends Internal.Enum<Internal.Phantom$AttackPhase> {
        static valueOf(arg0: string): Internal.Phantom$AttackPhase;
        static values(): Internal.Phantom$AttackPhase[];
        static readonly SWOOP: Internal.Phantom$AttackPhase;
        static readonly CIRCLE: Internal.Phantom$AttackPhase;
    }
    type Phantom$AttackPhase_ = Phantom$AttackPhase | "circle" | "swoop";
    class OrbOfOriginItem extends Internal.Item {
        constructor()
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
    type OrbOfOriginItem_ = OrbOfOriginItem;
    class ModifyPlayerSpawnConfiguration$SpawnStrategy extends Internal.Enum<Internal.ModifyPlayerSpawnConfiguration$SpawnStrategy> {
        apply(arg0: BlockPos_, arg1: number, arg2: number): BlockPos;
        static values(): Internal.ModifyPlayerSpawnConfiguration$SpawnStrategy[];
        static valueOf(arg0: string): Internal.ModifyPlayerSpawnConfiguration$SpawnStrategy;
        static readonly DEFAULT: Internal.ModifyPlayerSpawnConfiguration$SpawnStrategy;
        static readonly CENTER: Internal.ModifyPlayerSpawnConfiguration$SpawnStrategy;
    }
    type ModifyPlayerSpawnConfiguration$SpawnStrategy_ = ModifyPlayerSpawnConfiguration$SpawnStrategy | "center" | "default";
    class DarknessArmorItem extends Internal.ArmorItem implements Internal.CustomArmorPostRender, Internal.UpdatesStackTags, com.github.alexmodguy.alexscaves.server.item.KeybindUsingArmor {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        onKeyPacket(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        updateTagFromServer(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.CompoundTag_): void;
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
        static canChargeUp(arg0: Internal.ItemStack_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        static getMeterProgress(arg0: Internal.ItemStack_): number;
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
        static hasMeter(arg0: Player_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        getDamage(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
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
    type DarknessArmorItem_ = DarknessArmorItem;
    interface Hash$Strategy <K> {
        abstract equals(arg0: K, arg1: K): boolean;
        abstract hashCode(arg0: K): number;
    }
    type Hash$Strategy_<K> = Hash$Strategy<K>;
    class EnumArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EnumArgument<T>> {
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.EnumArgument<T>;
        type(): Internal.ArgumentTypeInfo<Internal.EnumArgument<T>, any>;
    }
    type EnumArgument$Info$Template_ = EnumArgument$Info$Template;
    class CandyCaneHookItem extends Internal.Item {
        constructor()
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        static getLaunchedHookUUID(arg0: Internal.ItemStack_): Internal.UUID;
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
        static isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        static isReelingIn(arg0: Internal.ItemStack_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        static setLastLaunchedHookUUID(arg0: Internal.ItemStack_, arg1: Internal.UUID_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        static canLaunchHook(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: boolean, arg4: Internal.InteractionHand_): boolean;
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
        static setReelingIn(arg0: Internal.ItemStack_, arg1: boolean): void;
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
    type CandyCaneHookItem_ = CandyCaneHookItem;
    abstract class GameRules$Value <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: Internal.GameRules$Type_<T>)
        onChanged(arg0: Internal.MinecraftServer_): void;
        setFromArgument(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): void;
        abstract serialize(): string;
        abstract getCommandResult(): number;
        abstract getSelf(): T;
        abstract deserialize(arg0: string): void;
        abstract copy(): T;
        abstract setFrom(arg0: T, arg1: Internal.MinecraftServer_): void;
        abstract updateFromArgument(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): void;
        get commandResult(): number
        get self(): T
        readonly type: Internal.GameRules$Type<T>;
    }
    type GameRules$Value_<T extends Internal.GameRules$Value<T>> = GameRules$Value<T>;
    class ServerScoreboard extends Internal.Scoreboard {
        constructor(arg0: Internal.MinecraftServer_)
        getObjectiveDisplaySlotCount(arg0: Internal.Objective_): number;
        stopTrackingObjective(arg0: Internal.Objective_): void;
        getStartTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        createData(arg0: Internal.CompoundTag_): Internal.ScoreboardSaveData;
        createData(): Internal.ScoreboardSaveData;
        getStopTrackingPackets(arg0: Internal.Objective_): Internal.List<Internal.Packet<any>>;
        addDirtyListener(arg0: Internal.Runnable_): void;
        setDirty(): void;
        startTrackingObjective(arg0: Internal.Objective_): void;
    }
    type ServerScoreboard_ = ServerScoreboard;
    class LayerConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.BlockState_)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly height: number;
        readonly state: Internal.BlockState;
        static readonly CODEC: Internal.Codec<Internal.LayerConfiguration>;
    }
    type LayerConfiguration_ = LayerConfiguration;
    interface ReputationEventHandler {
        abstract onReputationEventFrom(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_): void;
        (arg0: Internal.ReputationEventType, arg1: Internal.Entity): void;
    }
    type ReputationEventHandler_ = ReputationEventHandler;
    interface Reference2LongFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToLongFunction<K> {
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2LongFunction<T>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2LongFunction;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeLong(arg0: any): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2LongFunction;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Reference2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        abstract getLong(arg0: any): number;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Reference2CharFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Reference2FloatFunction<K>;
        applyAsLong(arg0: K): number;
        defaultReturnValue(): number;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        apply(arg0: K): number;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2LongFunction;
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        clear(): void;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2LongFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        (arg0: any): number;
    }
    type Reference2LongFunction_<K> = Reference2LongFunction<K>;
    abstract class StructurePlacement {
        constructor(arg0: Vec3i_, arg1: Internal.StructurePlacement$FrequencyReductionMethod_, arg2: number, arg3: number, arg4: Internal.Optional_<Internal.StructurePlacement$ExclusionZone>)
        isStructureChunk(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        getLocatePos(arg0: Internal.ChunkPos_): BlockPos;
        locateOffset(): Vec3i;
        abstract isPlacementChunk(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        salt(): number;
        static placementCodec<S extends Internal.StructurePlacement>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.Products$P5<Internal.RecordCodecBuilder$Mu<S>, Vec3i, Internal.StructurePlacement$FrequencyReductionMethod, number, number, Internal.Optional<Internal.StructurePlacement$ExclusionZone>>;
        abstract type(): Internal.StructurePlacementType<any>;
        frequency(): number;
        frequencyReductionMethod(): Internal.StructurePlacement$FrequencyReductionMethod;
        exclusionZone(): Internal.Optional<Internal.StructurePlacement$ExclusionZone>;
        static readonly CODEC: Internal.Codec<Internal.StructurePlacement>;
    }
    type StructurePlacement_ = StructurePlacement;
    class TreeStarBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type TreeStarBlock_ = TreeStarBlock;
    interface IModFileInfo {
        abstract getConfig(): Internal.IConfigurable;
        abstract getMods(): Internal.List<Internal.IModInfo>;
        abstract getLicense(): string;
        abstract showAsResourcePack(): boolean;
        abstract moduleName(): string;
        abstract versionString(): string;
        abstract usesServices(): Internal.List<string>;
        abstract requiredLanguageLoaders(): Internal.List<Internal.IModFileInfo$LanguageSpec>;
        abstract getFile(): Internal.IModFile;
        abstract getFileProperties(): Internal.Map<string, any>;
        get config(): Internal.IConfigurable
        get mods(): Internal.List<Internal.IModInfo>
        get license(): string
        get file(): Internal.IModFile
        get fileProperties(): Internal.Map<string, any>
    }
    type IModFileInfo_ = IModFileInfo;
    interface Component extends com.mojang.brigadier.Message, Internal.FormattedText {
        abstract getVisualOrderText(): Internal.FormattedCharSequence;
        translatable(arg0: string): Internal.MutableComponent;
        toFlatList(): Internal.List<Internal.Component>;
        translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        empty(): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        abstract getStyle(): Internal.Style;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        getString(arg0: number): string;
        abstract getSiblings(): Internal.List<Internal.Component>;
        getString(): string;
        nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<Internal.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        nullToEmpty(arg0: string): this;
        translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        plainCopy(): Internal.MutableComponent;
        keybind(arg0: string): Internal.MutableComponent;
        translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        contains(arg0: Internal.Component_): boolean;
        score(arg0: string, arg1: string): Internal.MutableComponent;
        composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        of(arg0: string): Internal.FormattedText;
        composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        abstract getContents(): Internal.ComponentContents;
        toFlatList(arg0: Internal.Style_): Internal.List<Internal.Component>;
        selector(arg0: string, arg1: Internal.Optional_<Internal.Component>): Internal.MutableComponent;
        copy(): Internal.MutableComponent;
        literal(arg0: string): Internal.MutableComponent;
        get visualOrderText(): Internal.FormattedCharSequence
        get style(): Internal.Style
        get siblings(): Internal.List<Internal.Component>
        get string(): string
        get contents(): Internal.ComponentContents
    }
    type Component_ = Component;
    class VariantBlockStateGenerator$Variant {
        constructor()
        model(s: string): Internal.VariantBlockStateGenerator$Model;
        toJson(): Internal.JsonElement;
    }
    type VariantBlockStateGenerator$Variant_ = VariantBlockStateGenerator$Variant;
    class AssetJsonGenerator extends Internal.ResourceGenerator {
        constructor(m: Internal.Map_<ResourceLocation, any>)
        static asItemModelLocation(id: ResourceLocation_): ResourceLocation;
        itemModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        blockModel(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        blockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator>): void;
        multipartState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator>): void;
        stencil(target: ResourceLocation_, stencil: string, colors: Internal.JsonObject_): void;
    }
    type AssetJsonGenerator_ = AssetJsonGenerator;
    class PlayerInteractEvent$LeftClickEmpty extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Player_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$LeftClickEmpty_ = PlayerInteractEvent$LeftClickEmpty;
    class StormbringerSwordItem extends Internal.UniqueSwordItem {
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
    type StormbringerSwordItem_ = StormbringerSwordItem;
    class TubeWormBlock$TubeShape extends Internal.Enum<Internal.TubeWormBlock$TubeShape> implements Internal.StringRepresentable {
        static values(): Internal.TubeWormBlock$TubeShape[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.TubeWormBlock$TubeShape;
        get serializedName(): string
        static readonly TURN: Internal.TubeWormBlock$TubeShape;
        static readonly ELBOW: Internal.TubeWormBlock$TubeShape;
        static readonly STRAIGHT: Internal.TubeWormBlock$TubeShape;
    }
    type TubeWormBlock$TubeShape_ = "elbow" | "straight" | "turn" | TubeWormBlock$TubeShape;
    class PersistentEntitySectionManager <T extends Internal.EntityAccess> implements Internal.AutoCloseable {
        constructor(arg0: T, arg1: Internal.LevelCallback_<T>, arg2: any_<T>)
        addNewEntityWithoutEvent(arg0: T): boolean;
        canPositionTick(arg0: Internal.ChunkPos_): boolean;
        gatherStats(): string;
        autoSave(): void;
        addLegacyChunkEntities(arg0: Internal.Stream_<T>): void;
        addNewEntity(arg0: T): boolean;
        addWorldGenChunkEntities(arg0: Internal.Stream_<T>): void;
        static getEffectiveStatus<T extends Internal.EntityAccess>(arg0: T, arg1: Internal.Visibility_): Internal.Visibility;
        stopTicking(arg0: T): void;
        isLoaded(arg0: Internal.UUID_): boolean;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.FullChunkStatus_): void;
        tick(): void;
        areEntitiesLoaded(arg0: number): boolean;
        saveAll(): void;
        getEntityGetter(): Internal.LevelEntityGetter<T>;
        startTracking(arg0: T): void;
        startTicking(arg0: T): void;
        stopTracking(arg0: T): void;
        canPositionTick(arg0: BlockPos_): boolean;
        close(): void;
        updateChunkStatus(arg0: Internal.ChunkPos_, arg1: Internal.Visibility_): void;
        removeSectionIfEmpty(arg0: number, arg1: Internal.EntitySection_<T>): void;
        dumpSections(arg0: Internal.Writer_): void;
        get entityGetter(): Internal.LevelEntityGetter<T>
        readonly sectionStorage: Internal.EntitySectionStorage<T>;
        readonly callbacks: Internal.LevelCallback<T>;
        static readonly LOGGER: Internal.Log4jLogger;
        readonly knownUuids: Internal.Set<Internal.UUID>;
    }
    type PersistentEntitySectionManager_<T extends Internal.EntityAccess> = PersistentEntitySectionManager<T>;
    class IrradiatedEffect extends Internal.MobEffect {
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        static readonly BLUE_LEVEL: 4;
    }
    type IrradiatedEffect_ = IrradiatedEffect;
    /**
     * This event is fired during entity creation and is responsible
     * for adding the `MemoryModuleType` and `SensorType`s the used
     * by the entity.
     * 
     * This is only posted for entities made through a builder
    */
    class BuildBrainProviderEventJS <T extends Internal.LivingEntity> extends Internal.EventJS {
        constructor()
        provide(): Internal.Brain$Provider<T>;
        /**
         * Adds the provided `SensorType` to the entity type's sensors
        */
        addSensor(sensor: Internal.SensorType_<Internal.Sensor<Internal.LivingEntity>>): void;
        /**
         * Adds the provided `MemoryModuleType` to the entity type's memories
        */
        addMemory(memory: Internal.MemoryModuleType_<any>): void;
    }
    type BuildBrainProviderEventJS_<T extends Internal.LivingEntity> = BuildBrainProviderEventJS<T>;
    abstract class TameableMobBuilder <T extends Internal.TamableAnimal & Internal.IAnimatableJS> extends Internal.AnimalEntityBuilder<T> {
        constructor(i: ResourceLocation_)
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
        */
        onTamed(onTamed: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): Internal.MobBuilder<T>;
        /**
         * Sets a function to determine if the player's current itemstack will tame the mob.
         * 
         * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tamableFood([
         *     'minecraft:diamond',
         *     'minecraft:wheat'
         * ]);
         * ```
        */
        tamableFood(tamableFood: Internal.Ingredient_): Internal.MobBuilder<T>;
        /**
         * Sets a function to determine if the player's current itemstack will tame the mob.
         * 
         * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tamableFoodPredicate(context => {
         *     const { entity, item } = context
         *     return item.id == 'minecraft:diamond' // Return true if the player's current itemstack will tame the mob.
         * });
         * ```
        */
        tamableFoodPredicate(tamableFoodPredicate: Internal.Function_<Internal.ContextUtils$EntityItemStackContext, any>): Internal.MobBuilder<T>;
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
         * mobBuilder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
        */
        tameOverride(tameOverride: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): Internal.MobBuilder<T>;
    }
    type TameableMobBuilder_<T extends Internal.TamableAnimal & Internal.IAnimatableJS> = TameableMobBuilder<T>;
    class RedstoneLaneBlock extends Internal.DirectionalBlock {
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
        static readonly REDSTONE_LANE_MODE: Internal.EnumProperty<Internal.RedstoneLaneMode>;
        static readonly REDSTONE_LANE_POWER: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type RedstoneLaneBlock_ = RedstoneLaneBlock;
    class CommandSyntaxException extends Internal.Exception {
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_, arg2: string, arg3: number)
        constructor(arg0: Internal.CommandExceptionType_, arg1: com.mojang.brigadier.Message_)
        getRawMessage(): com.mojang.brigadier.Message;
        getCursor(): number;
        getInput(): string;
        getContext(): string;
        getType(): Internal.CommandExceptionType;
        get rawMessage(): com.mojang.brigadier.Message
        get cursor(): number
        get input(): string
        get context(): string
        get type(): Internal.CommandExceptionType
        static ENABLE_COMMAND_STACK_TRACES: false;
        static BUILT_IN_EXCEPTIONS: Internal.BrigadierExceptions;
        static readonly CONTEXT_AMOUNT: 10;
    }
    type CommandSyntaxException_ = CommandSyntaxException;
    class InteractWithDoor {
        constructor()
        static closeDoorsThatIHaveOpenedOrPassedThrough(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_, arg2: Internal.Node_, arg3: Internal.Node_, arg4: Internal.Set_<Internal.GlobalPos>, arg5: Internal.Optional_<Internal.List<Internal.LivingEntity>>): void;
        static create(): Internal.BehaviorControl<Internal.LivingEntity>;
    }
    type InteractWithDoor_ = InteractWithDoor;
    interface SampledFloat {
        abstract sample(arg0: Internal.RandomSource_): number;
        (arg0: Internal.RandomSource): number;
    }
    type SampledFloat_ = SampledFloat;
    class EntitySpellPreCastEventJS extends Internal.EntityEventJS {
        constructor(entity: Internal.LivingEntity_, spell: Internal.AbstractSpell_, spellLevel: number, playerMagicData: Internal.MagicData_)
        getMagicData(): Internal.MagicData;
        getSpell(): Internal.AbstractSpell;
        getSpellLevel(): number;
        get magicData(): Internal.MagicData
        get spell(): Internal.AbstractSpell
        get spellLevel(): number
    }
    type EntitySpellPreCastEventJS_ = EntitySpellPreCastEventJS;
    abstract class CooldownPowerFactory$Simple <T extends Internal.ICooldownPowerConfiguration> extends Internal.CooldownPowerFactory<T> {
        getProgress(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_, arg2: number): number;
        decrement(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
    }
    type CooldownPowerFactory$Simple_<T extends Internal.ICooldownPowerConfiguration> = CooldownPowerFactory$Simple<T>;
    interface OptionInstance$CycleableValueSet$ValueSetter <T> {
        abstract set(arg0: Internal.OptionInstance_<T>, arg1: T): void;
        (arg0: Internal.OptionInstance<T>, arg1: T): void;
    }
    type OptionInstance$CycleableValueSet$ValueSetter_<T> = OptionInstance$CycleableValueSet$ValueSetter<T>;
    class GameRules$IntegerValue extends Internal.GameRules$Value<Internal.GameRules$IntegerValue> implements Internal.GameRulesIntRuleAccessor {
        constructor(arg0: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>, arg1: number)
        set(arg0: number, arg1: Internal.MinecraftServer_): void;
        setValue(arg0: number): void;
        setFrom(arg0: Internal.GameRules$IntegerValue_, arg1: Internal.MinecraftServer_): void;
        tryDeserialize(arg0: string): boolean;
        static create(arg0: number): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        getValue(): number;
        static create(arg0: number, arg1: Internal.BiConsumer_<Internal.MinecraftServer, Internal.GameRules$IntegerValue>): Internal.GameRules$Type<Internal.GameRules$IntegerValue>;
        copy(): this;
        getSelf(): this;
        get(): number;
        set value(arg0: number)
        get value(): number
        get self(): Internal.GameRules$IntegerValue
    }
    type GameRules$IntegerValue_ = GameRules$IntegerValue;
    class AndRecipeComponent <A, B> extends Internal.Record implements Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>> {
        constructor(a: Internal.RecipeComponent_<A>, b: Internal.RecipeComponent_<B>)
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        checkEmpty(key: Internal.RecipeKey_<org.apache.commons.lang3.tuple.Pair<A, B>>, value: org.apache.commons.lang3.tuple.Pair_<A, B>): string;
        b(): Internal.RecipeComponent<B>;
        role(): Internal.ComponentRole;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        componentClass(): typeof any;
        write(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>): Internal.JsonArray;
        key(name: string): Internal.RecipeKey<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        orSelf(): Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, map: Internal.Map_<any, any>): void;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        a(): Internal.RecipeComponent<A>;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asArray(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        isInput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        checkValueHasChanged(oldValue: org.apache.commons.lang3.tuple.Pair_<A, B>, newValue: org.apache.commons.lang3.tuple.Pair_<A, B>): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        isOutput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
    }
    type AndRecipeComponent_<A, B> = AndRecipeComponent<A, B>;
    class MonsterRoomFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type MonsterRoomFeature_ = MonsterRoomFeature;
    interface Deserializer$Struct {
        abstract field<F>(arg0: string, arg1: io.wispforest.endec.SerializationContext_, arg2: Internal.Endec_<F>): F;
        abstract field<F>(arg0: string, arg1: io.wispforest.endec.SerializationContext_, arg2: Internal.Endec_<F>, arg3: F): F;
    }
    type Deserializer$Struct_ = Deserializer$Struct;
    class BiomeSpecialEffects$Builder {
        constructor()
        ambientAdditionsSound(arg0: Internal.AmbientAdditionsSettings_): this;
        grassColorOverride(arg0: number): this;
        fogColor(arg0: number): this;
        ambientLoopSound(arg0: Internal.Holder_<Internal.SoundEvent>): this;
        backgroundMusic(arg0: Internal.Music_): this;
        ambientMoodSound(arg0: Internal.AmbientMoodSettings_): this;
        waterColor(arg0: number): this;
        ambientParticle(arg0: Internal.AmbientParticleSettings_): this;
        build(): Internal.BiomeSpecialEffects;
        waterFogColor(arg0: number): this;
        foliageColorOverride(arg0: number): this;
        skyColor(arg0: number): this;
        grassColorModifier(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): this;
        grassColorOverride: Internal.Optional<number>;
        ambientParticle: Internal.Optional<Internal.AmbientParticleSettings>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        fogColor: Internal.OptionalInt;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        waterColor: Internal.OptionalInt;
        skyColor: Internal.OptionalInt;
        foliageColorOverride: Internal.Optional<number>;
        waterFogColor: Internal.OptionalInt;
        backgroundMusic: Internal.Optional<Internal.Music>;
    }
    type BiomeSpecialEffects$Builder_ = BiomeSpecialEffects$Builder;
    interface Effect extends Internal.Shader {
        abstract getFragmentProgram(): Internal.Program;
        abstract markDirty(): void;
        abstract attachToProgram(): void;
        abstract getVertexProgram(): Internal.Program;
        abstract getId(): number;
        get fragmentProgram(): Internal.Program
        get vertexProgram(): Internal.Program
        get id(): number
    }
    type Effect_ = Effect;
    abstract class CustomBuffer <SELF extends Internal.CustomBuffer<SELF>> extends Internal.Pointer$Default {
        compact(): SELF;
        capacity(): number;
        remaining(): number;
        mark(): SELF;
        free(): void;
        limit(): number;
        position(): number;
        address(arg0: number): number;
        put(arg0: SELF): SELF;
        rewind(): SELF;
        abstract sizeof(): number;
        clear(): SELF;
        position(arg0: number): SELF;
        limit(arg0: number): SELF;
        flip(): SELF;
        slice(): SELF;
        reset(): SELF;
        address0(): number;
        hasRemaining(): boolean;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
    }
    type CustomBuffer_<SELF extends Internal.CustomBuffer<SELF>> = CustomBuffer<SELF>;
    class FieldConfiguration <T> extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(value: T)
        isConfigurationValid(): boolean;
        static codec<T>(arg0: Internal.Codec_<T>, arg1: string, arg2: T): Internal.Codec<Internal.FieldConfiguration<T>>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        static codec<T>(arg0: Internal.Codec_<T>, arg1: string): Internal.Codec<Internal.FieldConfiguration<T>>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        value(): T;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getUnbound(): Internal.List<string>;
        static codec<T>(arg0: Internal.MapCodec_<T>): Internal.Codec<Internal.FieldConfiguration<T>>;
        getMissingBinds(): Internal.List<string>;
        static of<T>(arg0: T): Internal.FieldConfiguration<T>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static optionalCodec<T>(arg0: Internal.Codec_<T>, arg1: string): Internal.Codec<Internal.FieldConfiguration<Internal.Optional<T>>>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
    }
    type FieldConfiguration_<T> = FieldConfiguration<T>;
    class MobEffectsPredicateBuilder {
        constructor()
        /**
         * 
         * @param mobEffect A status effect that must be present.
         * @param consumer Properties of the status
        */
        addEffect(arg0: Internal.MobEffect_, arg1: Internal.Consumer_<Internal.MobEffectInstancePredicateBuilder>): void;
        /**
         * 
         * @param mobEffect A status effect that must be present.
         * @param mobEffectInstancePredicate Properties of the status
        */
        addEffectByPredicate(arg0: Internal.MobEffect_, arg1: Internal.MobEffectsPredicate$MobEffectInstancePredicate_): void;
    }
    type MobEffectsPredicateBuilder_ = MobEffectsPredicateBuilder;
    interface UserAuthentication {
        abstract getSelectedProfile(): Internal.GameProfile;
        abstract loadFromStorage(arg0: Internal.Map_<string, any>): void;
        abstract logOut(): void;
        abstract setPassword(arg0: string): void;
        abstract logIn(): void;
        abstract getAuthenticatedToken(): string;
        abstract getUserProperties(): Internal.PropertyMap;
        abstract getUserID(): string;
        abstract isLoggedIn(): boolean;
        abstract canPlayOnline(): boolean;
        abstract getAvailableProfiles(): Internal.GameProfile[];
        abstract setUsername(arg0: string): void;
        abstract getUserType(): Internal.UserType;
        abstract selectGameProfile(arg0: Internal.GameProfile_): void;
        abstract saveForStorage(): Internal.Map<string, any>;
        abstract canLogIn(): boolean;
        get selectedProfile(): Internal.GameProfile
        set password(arg0: string)
        get authenticatedToken(): string
        get userProperties(): Internal.PropertyMap
        get userID(): string
        get loggedIn(): boolean
        get availableProfiles(): Internal.GameProfile[]
        set username(arg0: string)
        get userType(): Internal.UserType
    }
    type UserAuthentication_ = UserAuthentication;
    class ForgeMod$3 extends Internal.FluidType {
    }
    type ForgeMod$3_ = ForgeMod$3;
    class ForgeMod$4 extends Internal.FluidType {
    }
    type ForgeMod$4_ = ForgeMod$4;
    class ForgeMod$1 extends Internal.FluidType {
    }
    type ForgeMod$1_ = ForgeMod$1;
}
declare namespace toni.immersivelanterns.foundation.mixin {
    interface ModelPartAccessor {
        abstract getCubes(): Internal.List<Internal.ModelPart$Cube>;
        abstract getChildren(): Internal.Map<string, Internal.ModelPart>;
        get cubes(): Internal.List<Internal.ModelPart$Cube>
        get children(): Internal.Map<string, Internal.ModelPart>
    }
    type ModelPartAccessor_ = ModelPartAccessor;
}
declare namespace com.lowdragmc.lowdraglib.core.mixins.accessor {
    interface SlotAccessor {
        abstract getX(): number;
        abstract getY(): number;
        abstract setY(arg0: number): void;
        abstract setX(arg0: number): void;
        get x(): number
        get y(): number
        set y(arg0: number)
        set x(arg0: number)
    }
    type SlotAccessor_ = SlotAccessor;
}
declare namespace net.bettercombat.mixin {
    interface LivingEntityAccessor {
        abstract getLastAttackedTicks(): number;
        abstract setLastAttackedTicks(arg0: number): void;
        abstract invokeTurnHead(arg0: number, arg1: number): number;
        get lastAttackedTicks(): number
        set lastAttackedTicks(arg0: number)
    }
    type LivingEntityAccessor_ = LivingEntityAccessor;
}
declare namespace io.github.edwinmindcraft.apoli.common.condition.item {
    class EnchantmentCondition extends Internal.ItemCondition<Internal.EnchantmentConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Level_, arg2: Internal.ItemStack_): boolean;
        check(arg0: Internal.EnchantmentConfiguration_, arg1: Internal.Level_, arg2: Internal.ItemStack_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type EnchantmentCondition_ = EnchantmentCondition;
}
declare namespace io.github.apace100.origins.mixin {
    interface DrawContextAccessor {
        abstract invokeDrawTooltip(arg0: Internal.Font_, arg1: Internal.List_<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner_): void;
        (arg0: Internal.Font, arg1: Internal.List<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner): void;
    }
    type DrawContextAccessor_ = DrawContextAccessor;
}
