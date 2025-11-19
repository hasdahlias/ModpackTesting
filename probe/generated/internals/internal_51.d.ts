/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ExplosionJS {
        constructor(l: Internal.LevelAccessor_, _x: number, _y: number, _z: number)
        explosionMode(mode: Internal.Level$ExplosionInteraction_): this;
        explode(): void;
        causesFire(b: boolean): this;
        exploder(entity: Internal.Entity_): this;
        strength(f: number): this;
        readonly z: number;
        explosionMode: Internal.Level$ExplosionInteraction;
        causesFire: boolean;
        readonly x: number;
        readonly y: number;
        exploder: Internal.Entity;
        strength: number;
    }
    type ExplosionJS_ = ExplosionJS;
    class ClientboundGameEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ClientboundGameEventPacket$Type_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        getParam(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getEvent(): Internal.ClientboundGameEventPacket$Type;
        get param(): number
        get skippable(): boolean
        get event(): Internal.ClientboundGameEventPacket$Type
        static readonly DEMO_EVENT: Internal.ClientboundGameEventPacket$Type;
        static readonly START_RAINING: Internal.ClientboundGameEventPacket$Type;
        static readonly THUNDER_LEVEL_CHANGE: Internal.ClientboundGameEventPacket$Type;
        static readonly PUFFER_FISH_STING: Internal.ClientboundGameEventPacket$Type;
        static readonly IMMEDIATE_RESPAWN: Internal.ClientboundGameEventPacket$Type;
        static readonly DEMO_PARAM_HINT_1: 101;
        static readonly DEMO_PARAM_HINT_4: 104;
        static readonly DEMO_PARAM_HINT_3: 103;
        static readonly DEMO_PARAM_HINT_2: 102;
        static readonly CHANGE_GAME_MODE: Internal.ClientboundGameEventPacket$Type;
        static readonly RAIN_LEVEL_CHANGE: Internal.ClientboundGameEventPacket$Type;
        static readonly STOP_RAINING: Internal.ClientboundGameEventPacket$Type;
        static readonly WIN_GAME: Internal.ClientboundGameEventPacket$Type;
        static readonly NO_RESPAWN_BLOCK_AVAILABLE: Internal.ClientboundGameEventPacket$Type;
        static readonly ARROW_HIT_PLAYER: Internal.ClientboundGameEventPacket$Type;
        static readonly GUARDIAN_ELDER_EFFECT: Internal.ClientboundGameEventPacket$Type;
        static readonly DEMO_PARAM_INTRO: 0;
    }
    type ClientboundGameEventPacket_ = ClientboundGameEventPacket;
    class ConstructBeaconTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.MinMaxBounds$Ints_)
        matches(arg0: number): boolean;
        static constructedBeacon(arg0: Internal.MinMaxBounds$Ints_): Internal.ConstructBeaconTrigger$TriggerInstance;
        static constructedBeacon(): Internal.ConstructBeaconTrigger$TriggerInstance;
    }
    type ConstructBeaconTrigger$TriggerInstance_ = ConstructBeaconTrigger$TriggerInstance;
    class SlideDownBlockTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.Block_, arg2: Internal.StatePropertiesPredicate_)
        static slidesDownBlock(arg0: Internal.Block_): Internal.SlideDownBlockTrigger$TriggerInstance;
        matches(arg0: Internal.BlockState_): boolean;
    }
    type SlideDownBlockTrigger$TriggerInstance_ = SlideDownBlockTrigger$TriggerInstance;
    class ModifyPlayerSpawnPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ModifyPlayerSpawnConfiguration> implements Internal.IOriginCallbackPower<any> {
        constructor()
        resetSpawn(arg0: Internal.Optional_<Internal.ConfiguredPower<Internal.ModifyPlayerSpawnConfiguration, Internal.ModifyPlayerSpawnPower>>, arg1: Internal.Entity_, arg2: boolean): void;
        prepare(arg0: T, arg1: Internal.Entity_, arg2: boolean): void;
        teleportToModifiedSpawn(arg0: Internal.ConfiguredPower_<any, any>, arg1: Internal.Entity_): void;
        isReady(arg0: T, arg1: Internal.Entity_, arg2: boolean): boolean;
        tick(arg0: Internal.Entity_): void;
        isReady(arg0: Internal.ConfiguredPower_<any, any>, arg1: Internal.Entity_, arg2: boolean): boolean;
        getSpawn(arg0: Internal.ConfiguredPower_<any, any>, arg1: Internal.Entity_, arg2: boolean): Internal.Tuple<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>, Internal.Tuple<Internal.ServerLevel, Vec3d>>;
        onChosen(arg0: Internal.ConfiguredPower_<any, any>, arg1: Internal.Entity_, arg2: boolean): void;
        checkSpawn(arg0: Internal.ServerPlayer_): void;
        abstract onChosen(arg0: T, arg1: Internal.Entity_, arg2: boolean): void;
        schedulePlayerToSpawn(arg0: Internal.ServerPlayer_): void;
        prepare(arg0: Internal.ConfiguredPower_<any, any>, arg1: Internal.Entity_, arg2: boolean): void;
    }
    type ModifyPlayerSpawnPower_ = ModifyPlayerSpawnPower;
    class MetricSampler$SamplerResult {
        constructor(arg0: number, arg1: number, arg2: any_)
        valueAtTick(arg0: number): number;
        getFirstTick(): number;
        getLastTick(): number;
        get firstTick(): number
        get lastTick(): number
    }
    type MetricSampler$SamplerResult_ = MetricSampler$SamplerResult;
    interface CommandExceptionType {
    }
    type CommandExceptionType_ = CommandExceptionType;
    class PowerData$Builder {
        constructor()
        hidden(arg0: boolean): this;
        withForgeCondition(arg0: Internal.ICondition_): this;
        withPriority(arg0: number): this;
        withIdentifier(arg0: ResourceLocation_): this;
        addCondition(arg0: Internal.ConfiguredEntityCondition_<any, any>): this;
        withName(arg0: string): this;
        build(): Internal.PowerData;
        hidden(): this;
        withDescription(arg0: string): this;
        getConditions(): Internal.List<Internal.ConfiguredEntityCondition<any, any>>;
        get conditions(): Internal.List<Internal.ConfiguredEntityCondition<any, any>>
    }
    type PowerData$Builder_ = PowerData$Builder;
    interface PreparableReloadListener$PreparationBarrier {
        abstract wait<T>(arg0: T): Internal.CompletableFuture<T>;
        (arg0: T): Internal.CompletableFuture_<T>;
    }
    type PreparableReloadListener$PreparationBarrier_ = PreparableReloadListener$PreparationBarrier;
    class CallbackInfoReturnable <R> extends Internal.CallbackInfo {
        constructor(arg0: string, arg1: boolean, arg2: string)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: R)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: boolean)
        constructor(arg0: string, arg1: boolean, arg2: number)
        constructor(arg0: string, arg1: boolean, arg2: number)
        getReturnValueS(): number;
        getReturnValueC(): string;
        getReturnValueZ(): boolean;
        setReturnValue(arg0: R): void;
        getReturnValueB(): number;
        getReturnValueD(): number;
        getReturnValueJ(): number;
        getReturnValueI(): number;
        getReturnValue(): R;
        getReturnValueF(): number;
        get returnValueS(): number
        get returnValueC(): string
        get returnValueZ(): boolean
        set returnValue(arg0: R)
        get returnValueB(): number
        get returnValueD(): number
        get returnValueJ(): number
        get returnValueI(): number
        get returnValue(): R
        get returnValueF(): number
    }
    type CallbackInfoReturnable_<R> = CallbackInfoReturnable<R>;
    class WorldCreationUiState {
        constructor(arg0: Internal.Path_, arg1: Internal.WorldCreationContext_, arg2: Internal.Optional_<Internal.ResourceKey<Internal.WorldPreset>>, arg3: Internal.OptionalLong_)
        setWorldType(arg0: Internal.WorldCreationUiState$WorldTypeEntry_): void;
        setAllowCheats(arg0: boolean): void;
        setGameMode(arg0: Internal.WorldCreationUiState$SelectedGameMode_): void;
        getSettings(): Internal.WorldCreationContext;
        setSettings(arg0: Internal.WorldCreationContext_): void;
        addListener(arg0: Internal.Consumer_<Internal.WorldCreationUiState>): void;
        setSeed(arg0: string): void;
        getGameRules(): Internal.GameRules;
        setGenerateStructures(arg0: boolean): void;
        isBonusChest(): boolean;
        setName(arg0: string): void;
        getName(): string;
        isAllowCheats(): boolean;
        isHardcore(): boolean;
        onChanged(): void;
        getGameMode(): Internal.WorldCreationUiState$SelectedGameMode;
        getDifficulty(): Internal.Difficulty;
        getPresetEditor(): Internal.PresetEditor;
        getAltPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>;
        getTargetFolder(): string;
        getWorldType(): Internal.WorldCreationUiState$WorldTypeEntry;
        getNormalPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>;
        setDifficulty(arg0: Internal.Difficulty_): void;
        setGameRules(arg0: Internal.GameRules_): void;
        updateDimensions(arg0: Internal.WorldCreationContext$DimensionsUpdater_): void;
        isGenerateStructures(): boolean;
        getSeed(): string;
        setBonusChest(arg0: boolean): void;
        tryUpdateDataConfiguration(arg0: Internal.WorldDataConfiguration_): boolean;
        isDebug(): boolean;
        set worldType(arg0: Internal.WorldCreationUiState$WorldTypeEntry_)
        set allowCheats(arg0: boolean)
        set gameMode(arg0: Internal.WorldCreationUiState$SelectedGameMode_)
        get settings(): Internal.WorldCreationContext
        set settings(arg0: Internal.WorldCreationContext_)
        set seed(arg0: string)
        get gameRules(): Internal.GameRules
        set generateStructures(arg0: boolean)
        get bonusChest(): boolean
        set name(arg0: string)
        get name(): string
        get allowCheats(): boolean
        get hardcore(): boolean
        get gameMode(): Internal.WorldCreationUiState$SelectedGameMode
        get difficulty(): Internal.Difficulty
        get presetEditor(): Internal.PresetEditor
        get altPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>
        get targetFolder(): string
        get worldType(): Internal.WorldCreationUiState$WorldTypeEntry
        get normalPresetList(): Internal.List<Internal.WorldCreationUiState$WorldTypeEntry>
        set difficulty(arg0: Internal.Difficulty_)
        set gameRules(arg0: Internal.GameRules_)
        get generateStructures(): boolean
        get seed(): string
        set bonusChest(arg0: boolean)
        get debug(): boolean
    }
    type WorldCreationUiState_ = WorldCreationUiState;
    class StrongholdStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.StrongholdStructure>;
    }
    type StrongholdStructure_ = StrongholdStructure;
    class MendstonePickaxeItem extends Internal.PickaxeItem {
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
    }
    type MendstonePickaxeItem_ = MendstonePickaxeItem;
    interface DispenserBlockEntityAccessor {
        abstract getItems(): Internal.NonNullList<Internal.ItemStack>;
        get items(): Internal.NonNullList<Internal.ItemStack>
        (): Internal.NonNullList_<Internal.ItemStack>;
    }
    type DispenserBlockEntityAccessor_ = DispenserBlockEntityAccessor;
    class MinecartSpawner extends Internal.AbstractMinecart {
        constructor(arg0: Internal.EntityType_<Internal.MinecartSpawner>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getSpawner(): Internal.BaseSpawner;
        getSlopeAdjustment(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
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
        getComparatorLevel(): number;
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
        shouldDoRailFunctions(): boolean;
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
        isPoweredCart(): boolean;
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
        getCurrentRailPosition(): BlockPos;
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
        get maxCartSpeedOnRail(): number
        get spawner(): Internal.BaseSpawner
        get slopeAdjustment(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get comparatorLevel(): number
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
        get poweredCart(): boolean
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
        get currentRailPosition(): BlockPos
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
    }
    type MinecartSpawner_ = MinecartSpawner;
    class AxeItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
    }
    type AxeItemBuilder_ = AxeItemBuilder;
    class DuriteClusterBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_)
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
    type DuriteClusterBlock_ = DuriteClusterBlock;
    class ConditionData extends Internal.Record {
        constructor(inverted: boolean)
        inverted(): boolean;
        static readonly CODEC: Internal.MapCodec<Internal.ConditionData>;
        static readonly DEFAULT: Internal.ConditionData;
    }
    type ConditionData_ = ConditionData;
    class FeatureFlag {
        constructor(arg0: Internal.FeatureFlagUniverse_, arg1: number)
        readonly mask: number;
        readonly universe: Internal.FeatureFlagUniverse;
    }
    type FeatureFlag_ = FeatureFlag;
    interface GameRules$GameRuleTypeVisitor {
        visit<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>, arg1: Internal.GameRules$Type_<T>): void;
        visitBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>, arg1: Internal.GameRules$Type_<Internal.GameRules$BooleanValue>): void;
        visitInteger(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>, arg1: Internal.GameRules$Type_<Internal.GameRules$IntegerValue>): void;
    }
    type GameRules$GameRuleTypeVisitor_ = GameRules$GameRuleTypeVisitor;
    class AdvGetter {
        constructor(arg0: ResourceLocation_)
        /**
         * It will check if parent done. Defaults do not check.
        */
        requireParentDone(): this;
        /**
         * Modify the display. Defaults to original display.
        */
        modifyDisplay(arg0: Internal.Consumer_<Internal.DisplayBuilder>): this;
        /**
         * It will check if advancements that you put in had done.
        */
        requireOthersDone(...arg0: ResourceLocation_[]): this;
        /**
         * Configure this advancement's position
         * @param offsetX The offset x of display.
         * @param offsetY The offset y of display.
         * @param modifyChildren Determine should its children apply the same offset.
        */
        displayOffset(arg0: number, arg1: number, arg2: boolean): this;
        /**
         * Add a named child to this advancement. Returns child.
        */
        addChild(arg0: string, arg1: Internal.Consumer_<Internal.AdvBuilder>): Internal.AdvBuilder;
        /**
         * Configure this advancement's position
         * @param offsetX The offset x of display.
         * @param offsetY The offset y of display.
        */
        displayOffset(arg0: number, arg1: number): this;
        /**
         * Modify the rewards. Defaults to original rewards.
        */
        modifyRewards(arg0: Internal.Consumer_<Internal.RewardsBuilder>): this;
        /**
         * If invoked this method, the advancement will revoke after grant automatically.
         * 
         * This is useful when you want to trigger it repeatedly.
        */
        repeatable(): this;
        requireAnyDone(...arg0: ResourceLocation_[]): this;
        /**
         * Add a nameless child to this advancement just for test. Returns child.
        */
        addChild(arg0: Internal.Consumer_<Internal.AdvBuilder>): Internal.AdvBuilder;
        /**
         * Change the parent. Defaults to original parent.
        */
        changeParent(arg0: ResourceLocation_): this;
        /**
         * Modify the criteria. Defaults to original criteria.
        */
        modifyCriteria(arg0: Internal.Consumer_<Internal.CriteriaBuilder>): this;
        parent: ResourceLocation;
    }
    type AdvGetter_ = AdvGetter;
    class CommandEventJS extends Internal.ServerEventJS {
        constructor(e: any_)
        getException(): Internal.Throwable;
        getInput(): string;
        setException(exception: Internal.Throwable_): void;
        setParseResults(parse: Internal.ParseResults_<Internal.CommandSourceStack>): void;
        getCommandName(): string;
        getParseResults(): Internal.ParseResults<Internal.CommandSourceStack>;
        get exception(): Internal.Throwable
        get input(): string
        set exception(exception: Internal.Throwable_)
        set parseResults(parse: Internal.ParseResults_<Internal.CommandSourceStack>)
        get commandName(): string
        get parseResults(): Internal.ParseResults<Internal.CommandSourceStack>
    }
    type CommandEventJS_ = CommandEventJS;
    abstract class Provider extends Internal.Properties {
        getService(arg0: string, arg1: string): Internal.Provider$Service;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        getInfo(): string;
        static of<K, V>(): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        isConfigured(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        getServices(): Internal.Set<Internal.Provider$Service>;
        configure(arg0: string): this;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getVersion(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        getName(): string;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        getVersionStr(): string;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get info(): string
        get configured(): boolean
        get services(): Internal.Set<Internal.Provider$Service>
        /**
         * @deprecated
        */
        get version(): number
        get name(): string
        get versionStr(): string
    }
    type Provider_ = Provider;
    class Hoglin extends Internal.Animal implements Internal.Enemy, Internal.HoglinBase {
        constructor(arg0: Internal.EntityType_<Internal.Hoglin>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        brainProvider(): Internal.Brain$Provider<Internal.Hoglin>;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isConverting(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        handler$bgo000$expanded_ecosphere$modifyHoglin(serverLevelAccessor: Internal.ServerLevelAccessor_, difficultyInstance: Internal.DifficultyInstance_, mobSpawnType: Internal.MobSpawnType_, spawnGroupData: Internal.SpawnGroupData_, compoundTag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        static throwTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): void;
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
        playSoundEvent(arg0: Internal.SoundEvent_): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        static checkHoglinSpawnRules(arg0: Internal.EntityType_<Internal.Hoglin>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        static hurtAndThrowTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
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
        isAdult(): boolean;
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
        getBrain(): Internal.Brain<Internal.Hoglin>;
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
        setImmuneToZombification(arg0: boolean): void;
        canBeHunted(): boolean;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getAttackAnimationRemainingTicks(): number;
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
        get converting(): boolean
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
        get adult(): boolean
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        get brain(): Internal.Brain<Internal.Hoglin>
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set immuneToZombification(arg0: boolean)
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get attackAnimationRemainingTicks(): number
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly MEMORY_TYPES: [Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>];
        static readonly SENSOR_TYPES: [Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>];
    }
    type Hoglin_ = Hoglin;
    class MutableNumberUnit extends Internal.Unit {
        constructor(value: number)
        set(value: number): void;
        value: number;
    }
    type MutableNumberUnit_ = MutableNumberUnit;
    class PartPose {
        static rotation(arg0: number, arg1: number, arg2: number): Internal.PartPose;
        static offsetAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.PartPose;
        static offset(arg0: number, arg1: number, arg2: number): Internal.PartPose;
        readonly zRot: number;
        static readonly ZERO: Internal.PartPose;
        readonly z: number;
        readonly y: number;
        readonly x: number;
        readonly yRot: number;
        readonly xRot: number;
    }
    type PartPose_ = PartPose;
    interface GeoEntity extends Internal.GeoAnimatable {
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        getBoneResetTime(): number;
        triggerAnim(arg0: string, arg1: string): void;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        stopTriggeredAnimation(arg0: string, arg1: string): void;
        getTick(arg0: any): number;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get boneResetTime(): number
    }
    type GeoEntity_ = GeoEntity;
    interface BaseEntityBuilder$ICustomInstructionListenerJS <E extends Internal.Entity & Internal.IAnimatableJSNL> {
        abstract executeInstruction(event: Internal.BaseEntityBuilder$CustomInstructionKeyframeEventJS_<E>): void;
        (event: Internal.BaseEntityBuilder$CustomInstructionKeyframeEventJS<E>): void;
    }
    type BaseEntityBuilder$ICustomInstructionListenerJS_<E extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder$ICustomInstructionListenerJS<E>;
    class BambooSaplingBlock extends Internal.Block implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        growBamboo(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static readonly SAPLING_AABB_OFFSET: 4.0;
        static readonly SAPLING_SHAPE: Internal.CubeVoxelShape;
    }
    type BambooSaplingBlock_ = BambooSaplingBlock;
    class ForgeBiomeModifiers$AddSpawnsBiomeModifier extends Internal.Record implements Internal.BiomeModifier {
        constructor(biomes: Internal.HolderSet_<Internal.Biome>, spawners: Internal.List_<Internal.MobSpawnSettings$SpawnerData>)
        codec(): Internal.Codec<Internal.BiomeModifier>;
        spawners(): Internal.List<Internal.MobSpawnSettings$SpawnerData>;
        biomes(): Internal.HolderSet<Internal.Biome>;
        static singleSpawn(arg0: Internal.HolderSet_<Internal.Biome>, arg1: Internal.MobSpawnSettings$SpawnerData_): Internal.ForgeBiomeModifiers$AddSpawnsBiomeModifier;
        modify(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.BiomeModifier$Phase_, arg2: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type ForgeBiomeModifiers$AddSpawnsBiomeModifier_ = ForgeBiomeModifiers$AddSpawnsBiomeModifier;
    class ParsedArgument <S, T> {
        constructor(arg0: number, arg1: number, arg2: T)
        getResult(): T;
        getRange(): Internal.StringRange;
        get result(): T
        get range(): Internal.StringRange
    }
    type ParsedArgument_<S, T> = ParsedArgument<S, T>;
    class ActionRuntime$State extends Internal.Enum<Internal.ActionRuntime$State> {
        static valueOf(arg0: string): Internal.ActionRuntime$State;
        static values(): Internal.ActionRuntime$State[];
        static readonly STOPPED: Internal.ActionRuntime$State;
        static readonly RUNNING: Internal.ActionRuntime$State;
        static readonly PAUSED: Internal.ActionRuntime$State;
    }
    type ActionRuntime$State_ = ActionRuntime$State | "paused" | "stopped" | "running";
    interface CrashReportDetail <V> extends Internal.Callable<V> {
        abstract call(): V;
        (): V;
    }
    type CrashReportDetail_<V> = CrashReportDetail<V>;
    class NoneFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor()
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.NoneFeatureConfiguration>;
        static readonly INSTANCE: Internal.NoneFeatureConfiguration;
    }
    type NoneFeatureConfiguration_ = NoneFeatureConfiguration;
    class ArcanethystSwordItem extends Internal.UniqueSwordItem {
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
    type ArcanethystSwordItem_ = ArcanethystSwordItem;
    interface WorldlyContainer extends Internal.Container {
        stopOpen(arg0: Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        abstract isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        abstract canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        abstract setChanged(): void;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        abstract getContainerSize(): number;
        abstract getSlotsForFace(arg0: Internal.Direction_): number[];
        getStackInSlot(slot: number): Internal.ItemStack;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): number;
        abstract canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get containerSize(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type WorldlyContainer_ = WorldlyContainer;
    class SpelunkeryTableBlock extends Internal.Block {
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
    type SpelunkeryTableBlock_ = SpelunkeryTableBlock;
    class Timeline {
        constructor()
        getKeyframes(): Internal.ImmutableList<Internal.Keyframe>;
        addKeyframes(arg0: Internal.Collection_<Internal.Keyframe>): this;
        addKeyframe(arg0: number, arg1: number): this;
        getValueAt(arg0: number): number;
        get keyframes(): Internal.ImmutableList<Internal.Keyframe>
    }
    type Timeline_ = Timeline;
    class FoodOnAStickItem <T extends Internal.Entity & Internal.ItemSteerable> extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.EntityType_<T>, arg2: number)
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
    type FoodOnAStickItem_<T extends Internal.Entity & Internal.ItemSteerable> = FoodOnAStickItem<T>;
    abstract class SavedData {
        constructor()
        isDirty(): boolean;
        setDirty(arg0: boolean): void;
        abstract save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        save(arg0: Internal.File_): void;
        setDirty(): void;
        get dirty(): boolean
        set dirty(arg0: boolean)
    }
    type SavedData_ = SavedData;
    class AddPackFindersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.PackType_, arg1: Internal.Consumer_<Internal.RepositorySource>)
        getPackType(): Internal.PackType;
        addRepositorySource(arg0: Internal.RepositorySource_): void;
        get packType(): Internal.PackType
    }
    type AddPackFindersEvent_ = AddPackFindersEvent;
    class RemoteChatSession extends Internal.Record {
        constructor(arg0: Internal.UUID_, arg1: Internal.ProfilePublicKey_)
        asData(): Internal.RemoteChatSession$Data;
        profilePublicKey(): Internal.ProfilePublicKey;
        hasExpired(): boolean;
        createMessageDecoder(arg0: Internal.UUID_): Internal.SignedMessageChain$Decoder;
        createMessageValidator(): Internal.SignedMessageValidator;
        sessionId(): Internal.UUID;
    }
    type RemoteChatSession_ = RemoteChatSession;
    interface NonNullConsumer <T> {
        abstract accept(arg0: T): void;
        (arg0: T): void;
    }
    type NonNullConsumer_<T> = NonNullConsumer<T>;
    interface EnchantmentBuilder$DamageProtectionFunction {
        abstract getDamageProtection(arg0: number, arg1: DamageSource_): number;
        (arg0: number, arg1: DamageSource): number;
    }
    type EnchantmentBuilder$DamageProtectionFunction_ = EnchantmentBuilder$DamageProtectionFunction;
    abstract class LavaFluid extends Internal.FlowingFluid {
        constructor()
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        static readonly MIN_LEVEL_CUTOFF: 0.44444445;
    }
    type LavaFluid_ = LavaFluid;
    class GenerationStep$Decoration extends Internal.Enum<Internal.GenerationStep$Decoration> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.GenerationStep$Decoration;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        getName(): string;
        static values(): Internal.GenerationStep$Decoration[];
        get serializedName(): string
        get name(): string
        static readonly UNDERGROUND_STRUCTURES: Internal.GenerationStep$Decoration;
        static readonly RAW_GENERATION: Internal.GenerationStep$Decoration;
        static readonly UNDERGROUND_ORES: Internal.GenerationStep$Decoration;
        static readonly STRONGHOLDS: Internal.GenerationStep$Decoration;
        static readonly SURFACE_STRUCTURES: Internal.GenerationStep$Decoration;
        static readonly LOCAL_MODIFICATIONS: Internal.GenerationStep$Decoration;
        static readonly CODEC: Internal.Codec<Internal.GenerationStep$Decoration>;
        static readonly VEGETAL_DECORATION: Internal.GenerationStep$Decoration;
        static readonly TOP_LAYER_MODIFICATION: Internal.GenerationStep$Decoration;
        static readonly LAKES: Internal.GenerationStep$Decoration;
        static readonly FLUID_SPRINGS: Internal.GenerationStep$Decoration;
        static readonly UNDERGROUND_DECORATION: Internal.GenerationStep$Decoration;
    }
    type GenerationStep$Decoration_ = "underground_ores" | "top_layer_modification" | "fluid_springs" | GenerationStep$Decoration | "strongholds" | "lakes" | "local_modifications" | "surface_structures" | "underground_structures" | "underground_decoration" | "raw_generation" | "vegetal_decoration";
    interface Applicative <F extends Internal.K1, Mu extends Internal.Applicative$Mu> extends Internal.Functor<F, Mu> {
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>): Internal.App<F, R>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>): Internal.App<F, R>;
        lift2<A, B, R>(arg0: Internal.App_<F, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<F, A>, Internal.App<F, B>, Internal.App<F, R>>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, R>>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>): Internal.App<F, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>): Internal.App<F, R>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<F, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>): Internal.App<F, R>;
        lift3<T1, T2, T3, R>(arg0: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, R>>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<F, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>): Internal.App<F, R>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, R>>;
        unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): this;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, R>>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        abstract lift1<A, R>(arg0: Internal.App_<F, Internal.Function<A, R>>): Internal.Function<Internal.App<F, A>, Internal.App<F, R>>;
        ap<A, R>(arg0: Internal.App_<F, Internal.Function<A, R>>, arg1: Internal.App_<F, A>): Internal.App<F, R>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<F, A>): Internal.App<F, R>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, T8>, Internal.App<F, T9>, Internal.App<F, R>>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>): Internal.App<F, R>;
        ap2<A, B, R>(arg0: Internal.App_<F, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<F, A>, arg2: Internal.App_<F, B>): Internal.App<F, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<F, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, R>>;
        abstract map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<F, T>): Internal.App<F, R>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<F, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>): Internal.App<F, R>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<F, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>, arg15: Internal.App_<F, T15>): Internal.App<F, R>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>): Internal.App<F, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>): Internal.App<F, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>): Internal.App<F, R>;
        abstract point<A>(arg0: A): Internal.App<F, A>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<F, T1>, Internal.App<F, T2>, Internal.App<F, T3>, Internal.App<F, T4>, Internal.App<F, T5>, Internal.App<F, T6>, Internal.App<F, T7>, Internal.App<F, T8>, Internal.App<F, R>>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<F, A>, arg2: Internal.App_<F, B>): Internal.App<F, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>): Internal.App<F, R>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>): Internal.App<F, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<F, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>): Internal.App<F, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<F, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<F, T1>, arg2: Internal.App_<F, T2>, arg3: Internal.App_<F, T3>, arg4: Internal.App_<F, T4>, arg5: Internal.App_<F, T5>, arg6: Internal.App_<F, T6>, arg7: Internal.App_<F, T7>, arg8: Internal.App_<F, T8>, arg9: Internal.App_<F, T9>, arg10: Internal.App_<F, T10>, arg11: Internal.App_<F, T11>, arg12: Internal.App_<F, T12>, arg13: Internal.App_<F, T13>, arg14: Internal.App_<F, T14>, arg15: Internal.App_<F, T15>, arg16: Internal.App_<F, T16>): Internal.App<F, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
    }
    type Applicative_<F extends Internal.K1, Mu extends Internal.Applicative$Mu> = Applicative<F, Mu>;
    class PurpleSodaBlock extends Internal.LiquidBlock {
        constructor(arg0: Internal.RegistryObject_<Internal.FlowingFluid>, arg1: Internal.BlockBehaviour$Properties_)
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
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
        arch$getFluid(): Internal.FlowingFluid;
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
    type PurpleSodaBlock_ = PurpleSodaBlock;
    class ScreenEvent$CharacterTyped$Pre extends Internal.ScreenEvent$CharacterTyped {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
    }
    type ScreenEvent$CharacterTyped$Pre_ = ScreenEvent$CharacterTyped$Pre;
    interface AttachmentType <A> {
        abstract persistenceCodec(): Internal.Codec<A>;
        abstract copyOnDeath(): boolean;
        abstract identifier(): ResourceLocation;
        isPersistent(): boolean;
        abstract initializer(): Internal.Supplier<A>;
        get persistent(): boolean
    }
    type AttachmentType_<A> = AttachmentType<A>;
    class LocalPlayer extends Internal.AbstractClientPlayer implements Internal.WaterMovingEntity {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ClientLevel_, arg2: Internal.ClientPacketListener_, arg3: Internal.StatsCounter_, arg4: Internal.ClientRecipeBook_, arg5: boolean, arg6: boolean)
        resetPos(): void;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        updateAutoJump(arg0: number, arg1: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        sendRidingJump(): void;
        isMovingSlowly(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        setServerBrand(arg0: string): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        removeRecipeHighlight(arg0: Internal.Recipe_<any>): void;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        isInMovementPhase(): boolean;
        setSelectedSlot(index: number): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getStatsCounter(): Internal.StatsCounter;
        getCustomName(): Internal.Component;
        damageHeldItem(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        handler$cej000$fabric_entity_events_v1$injectElytraStart(info: Internal.CallbackInfo_): void;
        getFoodLevel(): number;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        setSaturation(saturation: number): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getXp(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        canReachRaw(arg0: BlockPos_, arg1: number): boolean;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        isMiningBlock(): boolean;
        updateSyncFields(arg0: Internal.LocalPlayer_): void;
        isUndead(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        handler$ckg000$caelus$checkFlight(arg0: Internal.CallbackInfo_): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        clientSideCloseContainer(): void;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
        boostElytraFlight(): void;
        getServerBrand(): string;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getWaterVision(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isAutoJumpEnabled(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        setShowDeathScreen(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        hurtTo(arg0: number): void;
        getScriptType(): Internal.ScriptType;
        setPermissionLevel(arg0: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        isSelf(): boolean;
        getParts(): Internal.PartEntity<any>[];
        hasCustomOutlineRendering(arg0: Player_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        static get(arg0: any): Internal.LivingEntityAccess;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getSaturation(): number;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        redirect$dma000$irons_spellbooks$addSlowdownCondition(arg0: Internal.LocalPlayer_): boolean;
        localvar$ckg000$caelus$affixEmptyStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        isFake(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        addFood(f: number, m: number): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        canStartSwimming(): boolean;
        getXpLevel(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        getCurrentMood(): number;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        paint(tag: Internal.CompoundTag_): void;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getBlockReach(): number;
        getDisplayName(): Internal.Component;
        getRecipeBook(): Internal.ClientRecipeBook;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        jumpableVehicle(): Internal.PlayerRideableJumping;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setXpLevel(l: number): void;
        canRiderInteract(): boolean;
        setFoodLevel(foodLevel: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
        getLegsArmorItem(): Internal.ItemStack;
        sendOpenInventory(): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        isHandsBusy(): boolean;
        sendData(channel: string): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        isFrame(): boolean;
        shouldShowDeathScreen(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        handler$bfh000$do_a_barrel_roll$doABarrelRoll$resetJump(ci: Internal.CallbackInfo_): void;
        foodEaten(is: Internal.ItemStack_): void;
        isControlledCamera(): boolean;
        self(): Internal.LivingEntity;
        setXp(xp: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        drop(arg0: boolean): boolean;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        notify(notification: Notification_): void;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getMotionY(): number;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canReachRaw(arg0: Internal.Entity_, arg1: number): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setExperienceValues(arg0: number, arg1: number, arg2: number): void;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        onGameModeChanged(arg0: Internal.GameType_): void;
        setMovementSpeedAddition(speed: number): void;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        sendInventoryUpdate(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        getJumpRidingScale(): number;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get movingSlowly(): boolean
        get offHandItem(): Internal.ItemStack
        set serverBrand(arg0: string)
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get inMovementPhase(): boolean
        set selectedSlot(index: number)
        get totalMovementSpeed(): number
        get statsCounter(): Internal.StatsCounter
        get customName(): Internal.Component
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set x(x: number)
        get xp(): number
        get miningBlock(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get name(): Internal.Component
        get serverBrand(): string
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get waterVision(): number
        get autoJumpEnabled(): boolean
        set showDeathScreen(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get scriptType(): Internal.ScriptType
        set permissionLevel(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get self(): boolean
        get parts(): Internal.PartEntity<any>[]
        set statusMessage(message: Internal.Component_)
        get saturation(): number
        get fake(): boolean
        get xpLevel(): number
        get living(): boolean
        get currentMood(): number
        get blockReach(): number
        get displayName(): Internal.Component
        get recipeBook(): Internal.ClientRecipeBook
        set position(block: Internal.BlockContainerJS_)
        get teamId(): string
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get handsBusy(): boolean
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get controlledCamera(): boolean
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get motionY(): number
        get passengers(): Internal.EntityArrayList
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set movementSpeedAddition(speed: number)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get jumpRidingScale(): number
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        oSpinningEffectIntensity: number;
        input: Internal.Input;
        xBobO: number;
        readonly connection: Internal.ClientPacketListener;
        readonly minecraft: Internal.Minecraft;
        xBob: number;
        sprintTriggerTime: number;
        yBob: number;
        yBobO: number;
        static readonly LOGGER: Internal.Log4jLogger;
        spinningEffectIntensity: number;
    }
    type LocalPlayer_ = LocalPlayer;
    class ContextUtils$ProjectileEntityHitContext {
        constructor(result: Internal.EntityHitResult_, entity: Internal.Projectile_)
        /**
         * The result of the hit
        */
        readonly result: Internal.EntityHitResult;
        /**
         * The projectile that was thrown
        */
        readonly entity: Internal.Projectile;
    }
    type ContextUtils$ProjectileEntityHitContext_ = ContextUtils$ProjectileEntityHitContext;
    interface AccessoryStack {
        self(): Internal.ItemStack;
        getAttributeModifiers(slot: Internal.AccessorySlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAccessory(): Internal.AccessoryItem;
        addTooltipLines(pPlayer: Player_, list: Internal.List_<Internal.Component>): void;
        getAttributeModifiers(group: Internal.AccessorySlot$Group_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        get accessory(): Internal.AccessoryItem
    }
    type AccessoryStack_ = AccessoryStack;
    class Holder$Reference <T> implements Internal.Holder<T> {
        bindTags(arg0: Internal.Collection_<Internal.TagKey<T>>): void;
        containsTag(arg0: Internal.TagKey_<T>): boolean;
        bindKey(arg0: Internal.ResourceKey_<T>): void;
        isBound(): boolean;
        is(arg0: ResourceLocation_): boolean;
        getType(): Internal.Holder$Reference$Type;
        static direct<T>(arg0: T): Internal.Holder<T>;
        value(): T;
        key(): Internal.ResourceKey<T>;
        unwrapKey(): Internal.Optional<Internal.ResourceKey<T>>;
        is(arg0: Internal.Predicate_<Internal.ResourceKey<T>>): boolean;
        unwrap(): Internal.Either<Internal.ResourceKey<T>, T>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        static createStandAlone<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
        bindValue(arg0: T): void;
        getTagKeys(): Internal.Stream<Internal.TagKey<T>>;
        kind(): Internal.Holder$Kind;
        is(arg0: Internal.ResourceKey_<T>): boolean;
        /**
         * @deprecated
        */
        static createIntrusive<T>(arg0: Internal.HolderOwner_<T>, arg1: T): Internal.Holder$Reference<T>;
        tags(): Internal.Stream<Internal.TagKey<T>>;
        get(): T;
        containsTag(arg0: Internal.ITag_<T>): boolean;
        is(arg0: Internal.TagKey_<T>): boolean;
        get bound(): boolean
        get type(): Internal.Holder$Reference$Type
        get tagKeys(): Internal.Stream<Internal.TagKey<T>>
    }
    type Holder$Reference_<T> = Holder$Reference<T>;
    class GlobalPos {
        dimension(): Internal.ResourceKey<Internal.Level>;
        pos(): BlockPos;
        static of(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_): Internal.GlobalPos;
        static readonly CODEC: Internal.Codec<Internal.GlobalPos>;
    }
    type GlobalPos_ = GlobalPos;
    class TurtleEggBlock extends Internal.Block {
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
        static isSand(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
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
        static onSand(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MAX_HATCH_LEVEL: 2;
        static readonly HATCH: Internal.IntegerProperty;
        static readonly MAX_EGGS: 4;
        static readonly MIN_EGGS: 1;
        static readonly EGGS: Internal.IntegerProperty;
    }
    type TurtleEggBlock_ = TurtleEggBlock;
    class ContextUtils$AutoAttackContext {
        constructor(target: Internal.LivingEntity_, entity: Internal.LivingEntity_)
        /**
         * The target entity that is being attacked
        */
        readonly target: Internal.LivingEntity;
        /**
         * The attacking entity
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$AutoAttackContext_ = ContextUtils$AutoAttackContext;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface RenderContext$BakedModelConsumer extends Internal.Consumer<Internal.BakedModel> {
        andThen(arg0: Internal.Consumer_<Internal.BakedModel>): Internal.Consumer<Internal.BakedModel>;
        abstract accept(arg0: Internal.BakedModel_): void;
        abstract accept(arg0: Internal.BakedModel_, arg1: Internal.BlockState_): void;
        accept(arg0: any): void;
    }
    type RenderContext$BakedModelConsumer_ = RenderContext$BakedModelConsumer;
    class WorldCreationUiState$WorldTypeEntry extends Internal.Record {
        constructor(preset: Internal.Holder_<Internal.WorldPreset>)
        preset(): Internal.Holder<Internal.WorldPreset>;
        describePreset(): Internal.Component;
        isAmplified(): boolean;
        get amplified(): boolean
    }
    type WorldCreationUiState$WorldTypeEntry_ = WorldCreationUiState$WorldTypeEntry;
    class SingleItemBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        setItem(arg0: Internal.ItemPredicate_): void;
        set item(arg0: Internal.Ingredient_)
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        set item(arg0: Internal.ItemPredicate_)
    }
    type SingleItemBuilder_ = SingleItemBuilder;
    class IntSummaryStatistics implements Internal.IntConsumer {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getSum(): number;
        getCount(): number;
        getAverage(): number;
        getMax(): number;
        getMin(): number;
        accept(arg0: number): void;
        combine(arg0: Internal.IntSummaryStatistics_): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        get sum(): number
        get count(): number
        get average(): number
        get max(): number
        get min(): number
    }
    type IntSummaryStatistics_ = IntSummaryStatistics;
    class RegistryObject <T> implements Internal.Supplier<T> {
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.IForgeRegistry_<T>): Internal.RegistryObject<U>;
        static createOptional<T, U extends T>(arg0: ResourceLocation_, arg1: ResourceLocation_, arg2: string): Internal.RegistryObject<U>;
        stream(): Internal.Stream<T>;
        filter(arg0: Internal.Predicate_<T>): this;
        getKey(): Internal.ResourceKey<T>;
        static createOptional<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.ResourceKey_<Internal.Registry<T>>, arg2: string): Internal.RegistryObject<U>;
        ifPresent(arg0: Internal.Consumer_<T>): void;
        orElseGet(arg0: Internal.Supplier_<T>): T;
        flatMap<U>(arg0: Internal.Function_<T, Internal.Optional<U>>): Internal.Optional<U>;
        lazyMap<U>(arg0: Internal.Function_<T, U>): Internal.Supplier<U>;
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: ResourceLocation_, arg2: string): Internal.RegistryObject<U>;
        orElse(arg0: T): T;
        isPresent(): boolean;
        getId(): ResourceLocation;
        map<U>(arg0: Internal.Function_<T, U>): Internal.Optional<U>;
        getHolder(): Internal.Optional<Internal.Holder<T>>;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): T;
        get(): T;
        static create<T, U extends T>(arg0: ResourceLocation_, arg1: Internal.ResourceKey_<Internal.Registry<T>>, arg2: string): Internal.RegistryObject<U>;
        get key(): Internal.ResourceKey<T>
        get present(): boolean
        get id(): ResourceLocation
        get holder(): Internal.Optional<Internal.Holder<T>>
    }
    type RegistryObject_<T> = RegistryObject<T>;
    class ScreenEvent$MouseButtonPressed$Post extends Internal.ScreenEvent$MouseButtonPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        wasHandled(): boolean;
    }
    type ScreenEvent$MouseButtonPressed$Post_ = ScreenEvent$MouseButtonPressed$Post;
    class CommandDispatcher <S> {
        constructor()
        constructor(arg0: Internal.RootCommandNode_<S>)
        execute(arg0: Internal.ParseResults_<S>): number;
        getPath(arg0: Internal.CommandNode_<S>): Internal.Collection<string>;
        register(arg0: Internal.LiteralArgumentBuilder_<S>): Internal.LiteralCommandNode<S>;
        parse(arg0: string, arg1: S): Internal.ParseResults<S>;
        getRoot(): Internal.RootCommandNode<S>;
        getCompletionSuggestions(arg0: Internal.ParseResults_<S>, arg1: number): Internal.CompletableFuture<Internal.Suggestions>;
        getAllUsage(arg0: Internal.CommandNode_<S>, arg1: S, arg2: boolean): string[];
        execute(arg0: Internal.StringReader_, arg1: S): number;
        findNode(arg0: Internal.Collection_<string>): Internal.CommandNode<S>;
        parse(arg0: Internal.StringReader_, arg1: S): Internal.ParseResults<S>;
        getCompletionSuggestions(arg0: Internal.ParseResults_<S>): Internal.CompletableFuture<Internal.Suggestions>;
        getSmartUsage(arg0: Internal.CommandNode_<S>, arg1: S): Internal.Map<Internal.CommandNode<S>, string>;
        execute(arg0: string, arg1: S): number;
        findAmbiguities(arg0: Internal.AmbiguityConsumer_<S>): void;
        setConsumer(arg0: Internal.ResultConsumer_<S>): void;
        get root(): Internal.RootCommandNode<S>
        set consumer(arg0: Internal.ResultConsumer_<S>)
        static readonly ARGUMENT_SEPARATOR_CHAR: " ";
        static readonly ARGUMENT_SEPARATOR: " ";
    }
    type CommandDispatcher_<S> = CommandDispatcher<S>;
    /**
     * Invoked when an item is smelted by a player.
    */
    class ItemSmeltedEventJS extends Internal.PlayerEventJS {
        constructor(player: Player_, smelted: Internal.ItemStack_)
        /**
         * The player that smelted the item.
        */
        getEntity(): Internal.Entity;
        /**
         * The item that was smelted.
        */
        getItem(): Internal.ItemStack;
        /**
         * The player that smelted the item.
        */
        get entity(): Internal.Entity
        /**
         * The item that was smelted.
        */
        get item(): Internal.ItemStack
    }
    type ItemSmeltedEventJS_ = ItemSmeltedEventJS;
    class TraveledThroughNetherBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The distance between the position where the player teleported to the Nether and the player's position when they returned.
        */
        setDistanceByPredicate(arg0: Internal.DistancePredicate_): void;
        /**
         * A location predicate for the last position before the player teleported to the Nether.
        */
        setStartPositionByPredicate(arg0: Internal.LocationPredicate_): void;
        /**
         * A location predicate for the last position before the player teleported to the Nether.
        */
        setStartPosition(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The distance between the position where the player teleported to the Nether and the player's position when they returned.
        */
        setDistance(arg0: Internal.Consumer_<Internal.DistancePredicateBuilder>): void;
        /**
         * The distance between the position where the player teleported to the Nether and the player's position when they returned.
        */
        set distanceByPredicate(arg0: Internal.DistancePredicate_)
        /**
         * A location predicate for the last position before the player teleported to the Nether.
        */
        set startPositionByPredicate(arg0: Internal.LocationPredicate_)
        /**
         * A location predicate for the last position before the player teleported to the Nether.
        */
        set startPosition(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>)
        /**
         * The distance between the position where the player teleported to the Nether and the player's position when they returned.
        */
        set distance(arg0: Internal.Consumer_<Internal.DistancePredicateBuilder>)
    }
    type TraveledThroughNetherBuilder_ = TraveledThroughNetherBuilder;
    interface Entity$MoveFunction {
        abstract accept(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Entity, arg1: number, arg2: number, arg3: number): void;
    }
    type Entity$MoveFunction_ = Entity$MoveFunction;
    class ModRecipeTypes$1 implements Internal.RecipeType<T> {
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
    }
    type ModRecipeTypes$1_ = ModRecipeTypes$1;
    class SprinklesBlock extends Internal.Block {
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
        static readonly AMOUNT: Internal.IntegerProperty;
    }
    type SprinklesBlock_ = SprinklesBlock;
    interface LivingEntityRendererAccessor {
        abstract scaleForHologram(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number): void;
        (arg0: Internal.LivingEntity, arg1: Internal.PoseStack, arg2: number): void;
    }
    type LivingEntityRendererAccessor_ = LivingEntityRendererAccessor;
    abstract class ImmutableCollections$AbstractImmutableSet <E> extends Internal.ImmutableCollections$AbstractImmutableCollection<E> implements Internal.Set<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type ImmutableCollections$AbstractImmutableSet_<E> = ImmutableCollections$AbstractImmutableSet<E>;
    class MultiplePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.MultipleConfiguration<Internal.ConfiguredPower<any, any>>> {
        constructor()
        complete(arg0: ResourceLocation_, arg1: Internal.IDynamicFeatureConfiguration_): Internal.IDynamicFeatureConfiguration;
        complete(arg0: ResourceLocation_, arg1: Internal.MultipleConfiguration_<Internal.ConfiguredPower<any, any>>): Internal.MultipleConfiguration<Internal.ConfiguredPower<any, any>>;
    }
    type MultiplePower_ = MultiplePower;
    interface MetricSampler$ThresholdTest {
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type MetricSampler$ThresholdTest_ = MetricSampler$ThresholdTest;
    class PoweredBlock extends Internal.Block {
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
    type PoweredBlock_ = PoweredBlock;
    class CraftingTableBlock extends Internal.Block {
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
    type CraftingTableBlock_ = CraftingTableBlock;
    class BeetrootBlock extends Internal.CropBlock {
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
    type BeetrootBlock_ = BeetrootBlock;
    class PoseStack$Pose {
        constructor(arg0: Matrix4f_, arg1: Matrix3f_)
        normal(): Matrix3f;
        pose(): Matrix4f;
    }
    type PoseStack$Pose_ = PoseStack$Pose;
    class UsedEnderEyeTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.MinMaxBounds$Doubles_)
        matches(arg0: number): boolean;
    }
    type UsedEnderEyeTrigger$TriggerInstance_ = UsedEnderEyeTrigger$TriggerInstance;
    interface Float2DoubleFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleUnaryOperator {
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Float2FloatFunction;
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2DoubleFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2DoubleFunction;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2DoubleFunction;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Float2ByteFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Float2IntFunction;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2DoubleFunction;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        remove(arg0: number): number;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        defaultReturnValue(): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        size(): number;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2DoubleFunction;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2DoubleFunction;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2DoubleFunction<T>;
        identity(): Internal.DoubleUnaryOperator;
        clear(): void;
        apply(arg0: number): number;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        (arg0: number): number;
    }
    type Float2DoubleFunction_ = Float2DoubleFunction;
    class TooltipConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(itemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, order: number, components: Internal.ListConfiguration_<Internal.Component>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        itemCondition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        order(): number;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        components(): Internal.ListConfiguration<Internal.Component>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.TooltipConfiguration>;
    }
    type TooltipConfiguration_ = TooltipConfiguration;
    interface Byte2ByteFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, number> {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ByteFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ByteFunction<T>;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        identity(): this;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ByteFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        containsKey(arg0: number): boolean;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ShortFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ByteFunction;
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Byte2FloatFunction;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Byte2IntFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Byte2CharFunction;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Byte2LongFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ByteFunction;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ByteFunction;
        clear(): void;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ByteFunction;
        put(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        apply(arg0: number): number;
        (arg0: number): number;
    }
    type Byte2ByteFunction_ = Byte2ByteFunction;
    interface BooleanIterator extends Internal.PrimitiveIterator<boolean, Internal.BooleanConsumer> {
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<boolean>): void;
        forEachRemaining(arg0: any): void;
        remove(): void;
        /**
         * @deprecated
        */
        next(): any;
        skip(arg0: number): number;
        abstract nextBoolean(): boolean;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.BooleanConsumer_): void;
    }
    type BooleanIterator_ = BooleanIterator;
    class CreativeModeTab implements Internal.ICreativeTab, Internal.FabricItemGroup, Internal.CreativeModeTabKJS {
        constructor(arg0: Internal.CreativeModeTab$Builder_)
        constructor(arg0: Internal.CreativeModeTab$Row_, arg1: number, arg2: Internal.CreativeModeTab$Type_, arg3: Internal.Component_, arg4: Internal.Supplier_<any>, arg5: Internal.CreativeModeTab$DisplayItemsGenerator_)
        constructor(arg0: Internal.CreativeModeTab$Row_, arg1: number, arg2: Internal.CreativeModeTab$Type_, arg3: Internal.Component_, arg4: Internal.Supplier_<Internal.ItemStack>, arg5: Internal.CreativeModeTab$DisplayItemsGenerator_, arg6: ResourceLocation_, arg7: boolean, arg8: number, arg9: ResourceLocation_, arg10: number, arg11: number, arg12: Internal.List_<ResourceLocation>, arg13: Internal.List_<ResourceLocation>)
        getDisplayName(): Internal.Component;
        getType(): Internal.CreativeModeTab$Type;
        /**
         * @deprecated
        */
        static builder(arg0: Internal.CreativeModeTab$Row_, arg1: number): Internal.CreativeModeTab$Builder;
        getSearchBarWidth(): number;
        hasAnyItems(): boolean;
        rebuildSearchTree(): void;
        setPage(page: number): void;
        getSlotColor(): number;
        getSearchTabDisplayItems(): Internal.Collection<Internal.ItemStack>;
        row(): Internal.CreativeModeTab$Row;
        setSearchTreeBuilder(arg0: Internal.Consumer_<Internal.List<Internal.ItemStack>>): void;
        getBackgroundLocation(): ResourceLocation;
        hasSearchBar(): boolean;
        isAlignedRight(): boolean;
        kjs$setDisplayName(component: Internal.Component_): void;
        /**
         * @deprecated
        */
        getBackgroundSuffix(): string;
        static builder(): Internal.CreativeModeTab$Builder;
        canScroll(): boolean;
        getLabelColor(): number;
        buildContents(arg0: Internal.CreativeModeTab$ItemDisplayParameters_): void;
        getPage(): number;
        shouldDisplay(): boolean;
        showTitle(): boolean;
        getTabsImage(): ResourceLocation;
        kjs$setIcon(icon: Internal.ItemStack_): void;
        contains(arg0: Internal.ItemStack_): boolean;
        getDisplayItems(): Internal.Collection<Internal.ItemStack>;
        getIconItem(): Internal.ItemStack;
        getGenerator(): Internal.CreativeModeTab$DisplayItemsGenerator;
        column(): number;
        get displayName(): Internal.Component
        get type(): Internal.CreativeModeTab$Type
        get searchBarWidth(): number
        set page(page: number)
        get slotColor(): number
        get searchTabDisplayItems(): Internal.Collection<Internal.ItemStack>
        set searchTreeBuilder(arg0: Internal.Consumer_<Internal.List<Internal.ItemStack>>)
        get backgroundLocation(): ResourceLocation
        get alignedRight(): boolean
        /**
         * @deprecated
        */
        get backgroundSuffix(): string
        get labelColor(): number
        get page(): number
        get tabsImage(): ResourceLocation
        get displayItems(): Internal.Collection<Internal.ItemStack>
        get iconItem(): Internal.ItemStack
        get generator(): Internal.CreativeModeTab$DisplayItemsGenerator
        readonly tabsBefore: Internal.List<ResourceLocation>;
        readonly tabsAfter: Internal.List<ResourceLocation>;
        canScroll: boolean;
        backgroundSuffix: string;
        showTitle: boolean;
        alignedRight: boolean;
    }
    type CreativeModeTab_ = Special.CreativeModeTab | CreativeModeTab;
    class CastResult$Type extends Internal.Enum<Internal.CastResult$Type> {
        static valueOf(arg0: string): Internal.CastResult$Type;
        static values(): Internal.CastResult$Type[];
        static readonly SUCCESS: Internal.CastResult$Type;
        static readonly FAILURE: Internal.CastResult$Type;
    }
    type CastResult$Type_ = "success" | "failure" | CastResult$Type;
    /**
     * @deprecated
    */
    class RegistryEvent <T> extends Internal.GenericEvent<T> implements Internal.IModBusEvent {
        constructor()
    }
    type RegistryEvent_<T> = RegistryEvent<T>;
    abstract class NumberFormat extends Internal.Format {
        abstract parse(arg0: string, arg1: Internal.ParsePosition_): number;
        static getCompactNumberInstance(): Internal.NumberFormat;
        format(arg0: number): string;
        setMaximumIntegerDigits(arg0: number): void;
        parse(arg0: string): number;
        setParseIntegerOnly(arg0: boolean): void;
        static getAvailableLocales(): Internal.Locale[];
        setGroupingUsed(arg0: boolean): void;
        static getPercentInstance(): Internal.NumberFormat;
        format(arg0: number): string;
        getMinimumIntegerDigits(): number;
        setMaximumFractionDigits(arg0: number): void;
        getCurrency(): Internal.Currency;
        getMaximumFractionDigits(): number;
        static getInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        setRoundingMode(arg0: Internal.RoundingMode_): void;
        static getInstance(): Internal.NumberFormat;
        setCurrency(arg0: Internal.Currency_): void;
        getMaximumIntegerDigits(): number;
        isGroupingUsed(): boolean;
        static getPercentInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        static getNumberInstance(): Internal.NumberFormat;
        static getCurrencyInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        isParseIntegerOnly(): boolean;
        setMinimumIntegerDigits(arg0: number): void;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getCompactNumberInstance(arg0: Internal.Locale_, arg1: Internal.NumberFormat$Style_): Internal.NumberFormat;
        static getCurrencyInstance(): Internal.NumberFormat;
        static getNumberInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        getMinimumFractionDigits(): number;
        setMinimumFractionDigits(arg0: number): void;
        static getIntegerInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getIntegerInstance(): Internal.NumberFormat;
        getRoundingMode(): Internal.RoundingMode;
        get compactNumberInstance(): Internal.NumberFormat
        set maximumIntegerDigits(arg0: number)
        set parseIntegerOnly(arg0: boolean)
        get availableLocales(): Internal.Locale[]
        set groupingUsed(arg0: boolean)
        get percentInstance(): Internal.NumberFormat
        get minimumIntegerDigits(): number
        set maximumFractionDigits(arg0: number)
        get currency(): Internal.Currency
        get maximumFractionDigits(): number
        set roundingMode(arg0: Internal.RoundingMode_)
        get instance(): Internal.NumberFormat
        set currency(arg0: Internal.Currency_)
        get maximumIntegerDigits(): number
        get groupingUsed(): boolean
        get numberInstance(): Internal.NumberFormat
        get parseIntegerOnly(): boolean
        set minimumIntegerDigits(arg0: number)
        get currencyInstance(): Internal.NumberFormat
        get minimumFractionDigits(): number
        set minimumFractionDigits(arg0: number)
        get integerInstance(): Internal.NumberFormat
        get roundingMode(): Internal.RoundingMode
        static readonly INTEGER_FIELD: 0;
        static readonly FRACTION_FIELD: 1;
    }
    type NumberFormat_ = NumberFormat;
    class CustomConditionEventJS extends Internal.EventJS {
        constructor(arg0: string, arg1: Internal.CustomCondition_)
        readonly data: Internal.Map<any, any>;
        readonly id: string;
        readonly condition: Internal.CustomCondition;
    }
    type CustomConditionEventJS_ = CustomConditionEventJS;
    class Structure$GenerationContext extends Internal.Record {
        constructor(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: Internal.LevelHeightAccessor_, arg8: Internal.Predicate_<Internal.Holder<Internal.Biome>>)
        constructor(registryAccess: Internal.RegistryAccess_, chunkGenerator: Internal.ChunkGenerator_, biomeSource: Internal.BiomeSource_, randomState: Internal.RandomState_, structureTemplateManager: Internal.StructureTemplateManager_, random: Internal.WorldgenRandom_, seed: number, chunkPos: Internal.ChunkPos_, heightAccessor: Internal.LevelHeightAccessor_, validBiome: Internal.Predicate_<Internal.Holder<Internal.Biome>>)
        biomeSource(): Internal.BiomeSource;
        random(): Internal.WorldgenRandom;
        seed(): number;
        heightAccessor(): Internal.LevelHeightAccessor;
        validBiome(): Internal.Predicate<Internal.Holder<Internal.Biome>>;
        structureTemplateManager(): Internal.StructureTemplateManager;
        registryAccess(): Internal.RegistryAccess;
        chunkGenerator(): Internal.ChunkGenerator;
        randomState(): Internal.RandomState;
        chunkPos(): Internal.ChunkPos;
    }
    type Structure$GenerationContext_ = Structure$GenerationContext;
    class ClientboundAddExperienceOrbPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ExperienceOrb_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getX(): number;
        handle(arg0: Internal.PacketListener_): void;
        getY(): number;
        getZ(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getValue(): number;
        isSkippable(): boolean;
        getId(): number;
        get x(): number
        get y(): number
        get z(): number
        get value(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundAddExperienceOrbPacket_ = ClientboundAddExperienceOrbPacket;
    class Endermite extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.Level_)
        static checkEndermiteSpawnRules(arg0: Internal.EntityType_<Internal.Endermite>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
    type Endermite_ = Endermite;
    interface SpriteContentsAnimatorImplAccessor {
        abstract getAnimationInfo(): Internal.SpriteContents$AnimatedTexture;
        abstract getFrameTicks(): number;
        abstract getFrameIndex(): number;
        get animationInfo(): Internal.SpriteContents$AnimatedTexture
        get frameTicks(): number
        get frameIndex(): number
    }
    type SpriteContentsAnimatorImplAccessor_ = SpriteContentsAnimatorImplAccessor;
    class DripstoneThickness extends Internal.Enum<Internal.DripstoneThickness> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.DripstoneThickness;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.DripstoneThickness[];
        get serializedName(): string
        static readonly BASE: Internal.DripstoneThickness;
        static readonly FRUSTUM: Internal.DripstoneThickness;
        static readonly TIP_MERGE: Internal.DripstoneThickness;
        static readonly MIDDLE: Internal.DripstoneThickness;
        static readonly TIP: Internal.DripstoneThickness;
    }
    type DripstoneThickness_ = "tip_merge" | DripstoneThickness | "frustum" | "middle" | "base" | "tip";
    class SurfaceWaterDepthFilter extends Internal.PlacementFilter {
        static forMaxDepth(arg0: number): Internal.SurfaceWaterDepthFilter;
        static readonly CODEC: Internal.Codec<Internal.SurfaceWaterDepthFilter>;
    }
    type SurfaceWaterDepthFilter_ = SurfaceWaterDepthFilter;
    class ScheduledEvents$ScheduledEvent {
        constructor()
        reschedule(timer: number): this;
        reschedule(): this;
        clear(): void;
        repeating: boolean;
        id: number;
        timer: number;
        endTime: number;
        scheduledEvents: Internal.ScheduledEvents;
        ofTicks: boolean;
    }
    type ScheduledEvents$ScheduledEvent_ = ScheduledEvents$ScheduledEvent;
    class ZombieWithIronAxeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor()
    }
    type ZombieWithIronAxeFeature_ = ZombieWithIronAxeFeature;
    class SpyglassItem extends Internal.Item {
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
        static readonly USE_DURATION: 1200;
        static readonly ZOOM_FOV_MODIFIER: 0.1;
    }
    type SpyglassItem_ = SpyglassItem;
    /**
     * @deprecated
    */
    interface RecvByteBufAllocator$Handle {
        abstract reset(arg0: Internal.ChannelConfig_): void;
        abstract incMessagesRead(arg0: number): void;
        abstract attemptedBytesRead(arg0: number): void;
        abstract attemptedBytesRead(): number;
        abstract readComplete(): void;
        abstract guess(): number;
        abstract allocate(arg0: Internal.ByteBufAllocator_): Internal.ByteBuf;
        abstract lastBytesRead(): number;
        abstract continueReading(): boolean;
        abstract lastBytesRead(arg0: number): void;
    }
    type RecvByteBufAllocator$Handle_ = RecvByteBufAllocator$Handle;
    interface BlendModeAccessor {
        getLastApplied(): Internal.BlendMode;
        setLastApplied(blendMode: Internal.BlendMode_): void;
        get lastApplied(): Internal.BlendMode
        set lastApplied(blendMode: Internal.BlendMode_)
    }
    type BlendModeAccessor_ = BlendModeAccessor;
    class String$CaseInsensitiveComparator implements Internal.Comparator<string>, Internal.Serializable {
        thenComparingLong(arg0: Internal.ToLongFunction_<string>): Internal.Comparator<string>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<string>): Internal.Comparator<string>;
        thenComparing<U>(arg0: Internal.Function_<string, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<string>;
        static comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        static reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        reversed(): Internal.Comparator<string>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<string, U>): Internal.Comparator<string>;
        thenComparing(arg0: Internal.Comparator_<string>): Internal.Comparator<string>;
        thenComparingInt(arg0: Internal.ToIntFunction_<string>): Internal.Comparator<string>;
        static naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        compare(arg0: string, arg1: string): number;
        static comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        static nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        static comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        static comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        static nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        compare(arg0: any, arg1: any): number;
        static comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
    }
    type String$CaseInsensitiveComparator_ = String$CaseInsensitiveComparator;
    class BarrierBlock extends Internal.Block {
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
    type BarrierBlock_ = BarrierBlock;
    class DragonSittingAttackingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingAttackingPhase>
    }
    type DragonSittingAttackingPhase_ = DragonSittingAttackingPhase;
    class LifeStealerItem extends Internal.SwordItem {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
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
        static healthDrain(arg0: Internal.LivingEntity_, arg1: number): void;
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
    type LifeStealerItem_ = LifeStealerItem;
    interface Object2IntMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        /**
         * @deprecated
        */
        getValue(): any;
        abstract setValue(arg0: number): number;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getIntValue(): number;
        abstract equals(arg0: any): boolean;
        get key(): K
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
        set value(arg0: number)
        get intValue(): number
    }
    type Object2IntMap$Entry_<K> = Object2IntMap$Entry<K>;
    /**
     * Invoked when a player drops an item.
    */
    class ItemDroppedEventJS extends Internal.PlayerEventJS {
        constructor(player: Player_, entity: Internal.ItemEntity_)
        /**
         * The item entity that was spawned when dropping.
        */
        getItemEntity(): Internal.ItemEntity;
        /**
         * The player that dropped the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was dropped.
        */
        getItem(): Internal.ItemStack;
        /**
         * The item entity that was spawned when dropping.
        */
        get itemEntity(): Internal.ItemEntity
        /**
         * The player that dropped the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was dropped.
        */
        get item(): Internal.ItemStack
    }
    type ItemDroppedEventJS_ = ItemDroppedEventJS;
    class SkullBlock extends Internal.AbstractSkullBlock {
        constructor(arg0: Internal.SkullBlock$Type_, arg1: Internal.BlockBehaviour$Properties_)
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly ROTATION: Internal.IntegerProperty;
        static readonly SHAPE: Internal.CubeVoxelShape;
        static readonly PIGLIN_SHAPE: Internal.ArrayVoxelShape;
        static readonly MAX: 15;
    }
    type SkullBlock_ = SkullBlock;
    interface IntPredicate {
        and(arg0: Internal.IntPredicate_): this;
        negate(): this;
        or(arg0: Internal.IntPredicate_): this;
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type IntPredicate_ = IntPredicate;
    interface TriPredicate <T, U, V> {
        abstract test(arg0: T, arg1: U, arg2: V): boolean;
        negate(): this;
        or(arg0: Internal.TriPredicate_<T, U, V>): this;
        and(arg0: Internal.TriPredicate_<T, U, V>): this;
        (arg0: T, arg1: U, arg2: V): boolean;
    }
    type TriPredicate_<T, U, V> = TriPredicate<T, U, V>;
    abstract class AttributeModifyingPowerFactory <T> extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> {
        hasAttributeBacking(): boolean;
        abstract getAttribute(): Internal.Attribute;
        get attribute(): Internal.Attribute
    }
    type AttributeModifyingPowerFactory_<T> = AttributeModifyingPowerFactory<T>;
    class AttributeModifyTransferPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.AttributeModifyTransferConfiguration> {
        constructor()
        static apply(arg0: Internal.Entity_, arg1: io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory_<any>): Internal.List<Internal.ConfiguredModifier<any>>;
        apply(arg0: Internal.ConfiguredPower_<Internal.AttributeModifyTransferConfiguration, any>, arg1: Internal.Entity_, arg2: io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory_<any>): Internal.List<Internal.ConfiguredModifier<any>>;
    }
    type AttributeModifyTransferPower_ = AttributeModifyTransferPower;
    interface IShapedRecipe <T extends Internal.Container> extends Internal.Recipe<T> {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        abstract matches(arg0: T, arg1: Internal.Level_): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract getRecipeWidth(): number;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: T): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getRecipeHeight(): number;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        abstract assemble(arg0: T, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get recipeWidth(): number
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get recipeHeight(): number
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type IShapedRecipe_<T extends Internal.Container> = IShapedRecipe<T>;
    class DataResult$Instance extends Internal.Enum<Internal.DataResult$Instance> implements Internal.Applicative<Internal.DataResult$Mu, any> {
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>): Internal.App<Internal.DataResult$Mu, R>;
        map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<Internal.DataResult$Mu, T>): Internal.App<Internal.DataResult$Mu, R>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<Internal.DataResult$Mu, A>, arg2: Internal.App_<Internal.DataResult$Mu, B>): Internal.App<Internal.DataResult$Mu, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>): Internal.App<Internal.DataResult$Mu, R>;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, R>>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>, arg14: Internal.App_<Internal.DataResult$Mu, T15>): Internal.Products$P15<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>): Internal.Products$P9<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>): Internal.Products$P14<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1>(arg0: Internal.App_<Internal.DataResult$Mu, T1>): Internal.Products$P1<Internal.DataResult$Mu, T1>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>, arg15: Internal.App_<Internal.DataResult$Mu, T15>, arg16: Internal.App_<Internal.DataResult$Mu, T16>): Internal.App<Internal.DataResult$Mu, R>;
        lift1<A, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function<A, R>>): Internal.Function<Internal.App<Internal.DataResult$Mu, A>, Internal.App<Internal.DataResult$Mu, R>>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>): Internal.App<Internal.DataResult$Mu, R>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, R>>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>): Internal.Products$P6<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>): Internal.Products$P12<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>): Internal.Products$P3<Internal.DataResult$Mu, T1, T2, T3>;
        static unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): Internal.Applicative<F, Mu>;
        static values(): Internal.DataResult$Instance[];
        lift3<T1, T2, T3, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, R>>;
        ap<A, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function<A, R>>, arg1: Internal.App_<Internal.DataResult$Mu, A>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>): Internal.Products$P10<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>): Internal.Products$P13<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>): Internal.Products$P5<Internal.DataResult$Mu, T1, T2, T3, T4, T5>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, R>>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>): Internal.Products$P7<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>): Internal.Products$P2<Internal.DataResult$Mu, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>): Internal.Products$P8<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>): Internal.App<Internal.DataResult$Mu, R>;
        lift2<A, B, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<Internal.DataResult$Mu, A>, Internal.App<Internal.DataResult$Mu, B>, Internal.App<Internal.DataResult$Mu, R>>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>): Internal.App<Internal.DataResult$Mu, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>): Internal.App<Internal.DataResult$Mu, R>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>): Internal.App<Internal.DataResult$Mu, R>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, R>>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>): Internal.App<Internal.DataResult$Mu, R>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, T8>, Internal.App<Internal.DataResult$Mu, R>>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>): Internal.App<Internal.DataResult$Mu, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>): Internal.App<Internal.DataResult$Mu, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>, arg14: Internal.App_<Internal.DataResult$Mu, T14>, arg15: Internal.App_<Internal.DataResult$Mu, T15>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>): Internal.Products$P4<Internal.DataResult$Mu, T1, T2, T3, T4>;
        static valueOf(arg0: string): Internal.DataResult$Instance;
        ap2<A, B, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<Internal.DataResult$Mu, A>, arg2: Internal.App_<Internal.DataResult$Mu, B>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>, arg11: Internal.App_<Internal.DataResult$Mu, T12>, arg12: Internal.App_<Internal.DataResult$Mu, T13>, arg13: Internal.App_<Internal.DataResult$Mu, T14>, arg14: Internal.App_<Internal.DataResult$Mu, T15>, arg15: Internal.App_<Internal.DataResult$Mu, T16>): Internal.Products$P16<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<Internal.DataResult$Mu, T1>, Internal.App<Internal.DataResult$Mu, T2>, Internal.App<Internal.DataResult$Mu, T3>, Internal.App<Internal.DataResult$Mu, T4>, Internal.App<Internal.DataResult$Mu, T5>, Internal.App<Internal.DataResult$Mu, T6>, Internal.App<Internal.DataResult$Mu, T7>, Internal.App<Internal.DataResult$Mu, T8>, Internal.App<Internal.DataResult$Mu, T9>, Internal.App<Internal.DataResult$Mu, R>>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>): Internal.App<Internal.DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<Internal.DataResult$Mu, T1>, arg1: Internal.App_<Internal.DataResult$Mu, T2>, arg2: Internal.App_<Internal.DataResult$Mu, T3>, arg3: Internal.App_<Internal.DataResult$Mu, T4>, arg4: Internal.App_<Internal.DataResult$Mu, T5>, arg5: Internal.App_<Internal.DataResult$Mu, T6>, arg6: Internal.App_<Internal.DataResult$Mu, T7>, arg7: Internal.App_<Internal.DataResult$Mu, T8>, arg8: Internal.App_<Internal.DataResult$Mu, T9>, arg9: Internal.App_<Internal.DataResult$Mu, T10>, arg10: Internal.App_<Internal.DataResult$Mu, T11>): Internal.Products$P11<Internal.DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>): Internal.App<Internal.DataResult$Mu, R>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<Internal.DataResult$Mu, A>): Internal.App<Internal.DataResult$Mu, R>;
        point<A>(arg0: A): Internal.App<Internal.DataResult$Mu, A>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<Internal.DataResult$Mu, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>, arg5: Internal.App_<Internal.DataResult$Mu, T5>, arg6: Internal.App_<Internal.DataResult$Mu, T6>, arg7: Internal.App_<Internal.DataResult$Mu, T7>, arg8: Internal.App_<Internal.DataResult$Mu, T8>, arg9: Internal.App_<Internal.DataResult$Mu, T9>, arg10: Internal.App_<Internal.DataResult$Mu, T10>, arg11: Internal.App_<Internal.DataResult$Mu, T11>, arg12: Internal.App_<Internal.DataResult$Mu, T12>, arg13: Internal.App_<Internal.DataResult$Mu, T13>): Internal.App<Internal.DataResult$Mu, R>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<Internal.DataResult$Mu, T1>, arg2: Internal.App_<Internal.DataResult$Mu, T2>, arg3: Internal.App_<Internal.DataResult$Mu, T3>, arg4: Internal.App_<Internal.DataResult$Mu, T4>): Internal.App<Internal.DataResult$Mu, R>;
        static readonly INSTANCE: Internal.DataResult$Instance;
    }
    type DataResult$Instance_ = "instance" | DataResult$Instance;
    class DirectoryLock implements Internal.AutoCloseable {
        isValid(): boolean;
        static create(arg0: Internal.Path_): Internal.DirectoryLock;
        close(): void;
        static isLocked(arg0: Internal.Path_): boolean;
        get valid(): boolean
        static readonly LOCK_FILE: "session.lock";
    }
    type DirectoryLock_ = DirectoryLock;
    class Burning_Arena_Structure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static start(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.StructurePieceAccessor_, arg4: Internal.RandomSource_): void;
        static readonly CODEC: Internal.Codec<Internal.Burning_Arena_Structure>;
    }
    type Burning_Arena_Structure_ = Burning_Arena_Structure;
    class ScalableParticleType$ScalableParticleData implements Internal.ParticleOptions {
        constructor(arg0: Internal.ParticleType_<Internal.ScalableParticleType$ScalableParticleData>, arg1: number)
        getType(): Internal.ParticleType<any>;
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getScale(): number;
        get type(): Internal.ParticleType<any>
        get scale(): number
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.ScalableParticleType$ScalableParticleData>;
    }
    type ScalableParticleType$ScalableParticleData_ = ScalableParticleType$ScalableParticleData;
    interface Reference2ReferenceMap$Entry <K, V> extends Internal.Map$Entry<K, V> {
        abstract getKey(): K;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        abstract getValue(): V;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        get key(): K
        get value(): V
        set value(arg0: V)
    }
    type Reference2ReferenceMap$Entry_<K, V> = Reference2ReferenceMap$Entry<K, V>;
    class ProjectileAnimatableJSBuilder extends Internal.BaseEntityBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
        */
        setCanShootFromDispenser(canShootFromDispenser: boolean): this;
        /**
         * Sets a callback function to be executed when the projectile hits a block.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
         * representing the context of the projectile's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitBlock(context -> {
         *     // Custom logic to handle the projectile hitting a block.
         *     // Access information about the block and projectile using the provided context.
         * });
         * ```
        */
        onHitBlock(consumer: Internal.Consumer_<Internal.ContextUtils$ProjectileBlockHitContext>): this;
        /**
         * Creates the arrow item for this entity type
        */
        item(item: Internal.Consumer_<Internal.ProjectileItemBuilder>): this;
        /**
         * Sets a callback function to be executed when the projectile
         * collides with an entity.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
        */
        onEntityCollision(consumer: Internal.Consumer_<Internal.ContextUtils$CollidingProjectileEntityContext>): this;
        createObject(): any;
        /**
         * Sets a callback function to be executed when the projectile hits an entity.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
         * representing the context of the projectile's interaction with a specific entity.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitEntity(context -> {
         *     // Custom logic to handle the projectile hitting an entity.
         *     // Access information about the entity and projectile using the provided context.
         * });
         * ```
        */
        onHitEntity(consumer: Internal.Consumer_<Internal.ContextUtils$ProjectileEntityHitContext>): this;
        /**
         * Sets a function to determine if the projectile entity can hit a specific entity.
         * 
         * @param canHitEntity The predicate to check if the arrow can hit the entity.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.canHitEntity(entity -> {
         *     // Custom logic to determine if the projectile can hit the specified entity
         *     // Return true if the arrow can hit, false otherwise.
         * });
         * ```
        */
        canHitEntity(function_: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Indicates that no projectile item should be created for this entity type
        */
        noItem(): this;
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
        */
        set canShootFromDispenser(canShootFromDispenser: boolean)
        canShootFromDispenser: boolean;
    }
    type ProjectileAnimatableJSBuilder_ = ProjectileAnimatableJSBuilder;
    class KubeJSGUI {
        constructor()
        constructor(buf: Internal.FriendlyByteBuf_)
        write(buf: Internal.FriendlyByteBuf_): void;
        setInventory(inv: Internal.InventoryKJS_): void;
        set inventory(inv: Internal.InventoryKJS_)
        width: number;
        inventoryWidth: number;
        height: number;
        playerSlotsX: number;
        inventory: Internal.InventoryKJS;
        playerSlotsY: number;
        static readonly EMPTY_CONTAINER: Internal.SimpleContainer;
        title: Internal.Component;
        inventoryLabelX: number;
        inventoryLabelY: number;
        inventoryHeight: number;
    }
    type KubeJSGUI_ = KubeJSGUI;
    interface NoiseChunk$NoiseChunkDensityFunction extends Internal.DensityFunction {
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        maxValue(): number;
        abstract codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        abstract compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        abstract mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        abstract wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        abstract fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
    }
    type NoiseChunk$NoiseChunkDensityFunction_ = NoiseChunk$NoiseChunkDensityFunction;
    class ClientboundUpdateAttributesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.Collection_<Internal.AttributeInstance>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getEntityId(): number;
        getValues(): Internal.List<Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        isSkippable(): boolean;
        get entityId(): number
        get values(): Internal.List<Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot>
        get skippable(): boolean
    }
    type ClientboundUpdateAttributesPacket_ = ClientboundUpdateAttributesPacket;
    class Power {
        constructor(arg0: Internal.PowerType_<any>, arg1: Internal.LivingEntity_)
        onRemoved(): void;
        addCondition(arg0: Internal.Predicate_<Internal.Entity>): this;
        shouldTickWhenInactive(): boolean;
        isActive(): boolean;
        tick(): void;
        toTag(): Internal.Tag;
        onRespawn(): void;
        fromTag(arg0: Internal.Tag_): void;
        getType(): Internal.PowerType<any>;
        onAdded(): void;
        shouldTick(): boolean;
        onLost(): void;
        onGained(): void;
        get active(): boolean
        get type(): Internal.PowerType<any>
    }
    type Power_ = Power;
    interface ItemVariant extends Internal.TransferVariant<Internal.Item> {
        of(stack: Internal.ItemStack_): this;
        abstract getNbt(): Internal.CompoundTag;
        fromPacket(buf: Internal.FriendlyByteBuf_): this;
        toStack(count: number): Internal.ItemStack;
        hasNbt(): boolean;
        abstract toPacket(arg0: Internal.FriendlyByteBuf_): void;
        abstract toNbt(): Internal.CompoundTag;
        toStack(): Internal.ItemStack;
        copyOrCreateNbt(): Internal.CompoundTag;
        of(item: Internal.ItemLike_, tag: Internal.CompoundTag_): this;
        abstract isBlank(): boolean;
        nbtMatches(other: Internal.CompoundTag_): boolean;
        copyNbt(): Internal.CompoundTag;
        blank(): this;
        abstract getObject(): Internal.Item;
        getItem(): Internal.Item;
        of(item: Internal.ItemLike_): this;
        isOf(object: Internal.Item_): boolean;
        fromNbt(nbt: Internal.CompoundTag_): this;
        matches(stack: Internal.ItemStack_): boolean;
        get nbt(): Internal.CompoundTag
        get blank(): boolean
        get object(): Internal.Item
        get item(): Internal.Item
    }
    type ItemVariant_ = ItemVariant;
    interface DynamicLightHandlerHolder <T> {
        abstract sodiumdynamiclights$getDynamicLightHandler(): Internal.DynamicLightHandler<T>;
        abstract sodiumdynamiclights$getName(): Internal.Component;
        cast<T extends Internal.Entity>(entityType: Internal.EntityType_<T>): this;
        abstract sodiumdynamiclights$getSetting(): boolean;
        cast<T extends Internal.BlockEntity>(entityType: Internal.BlockEntityType_<T>): this;
        abstract sodiumdynamiclights$setDynamicLightHandler(arg0: Internal.DynamicLightHandler_<T>): void;
    }
    type DynamicLightHandlerHolder_<T> = DynamicLightHandlerHolder<T>;
    interface WeatheringCopper extends Internal.ChangeOverTimeBlock<Internal.WeatheringCopper$WeatherState> {
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        abstract getAge(): Internal.WeatheringCopper$WeatherState;
        getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFirst(arg0: Internal.Block_): Internal.Block;
        getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        getChanceModifier(): number;
        get age(): Internal.WeatheringCopper$WeatherState
        get chanceModifier(): number
        (): Internal.WeatheringCopper$WeatherState_;
        readonly PREVIOUS_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
        readonly NEXT_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
    }
    type WeatheringCopper_ = WeatheringCopper;
    interface ClientInitISSKJS {
        /**
         *     When added, holding the item will show your mana bar.
        */
        addManaBarShowingItem(item: Internal.Item_): void;
    }
    type ClientInitISSKJS_ = ClientInitISSKJS;
    class MendstoneChalkItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Block_)
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
    type MendstoneChalkItem_ = MendstoneChalkItem;
    class DragonHoldingPatternPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonHoldingPatternPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonHoldingPatternPhase>
    }
    type DragonHoldingPatternPhase_ = DragonHoldingPatternPhase;
    class ContextUtils$EPassengerEntityContext {
        constructor(passenger: Internal.Entity_, entity: Internal.Entity_)
        readonly passenger: Internal.Entity;
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EPassengerEntityContext_ = ContextUtils$EPassengerEntityContext;
    class ClientboundSetPlayerTeamPacket$Parameters {
        constructor(arg0: Internal.PlayerTeam_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getDisplayName(): Internal.Component;
        getNametagVisibility(): string;
        getCollisionRule(): string;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getPlayerPrefix(): Internal.Component;
        getColor(): Internal.ChatFormatting;
        getPlayerSuffix(): Internal.Component;
        getOptions(): number;
        get displayName(): Internal.Component
        get nametagVisibility(): string
        get collisionRule(): string
        get playerPrefix(): Internal.Component
        get color(): Internal.ChatFormatting
        get playerSuffix(): Internal.Component
        get options(): number
    }
    type ClientboundSetPlayerTeamPacket$Parameters_ = ClientboundSetPlayerTeamPacket$Parameters;
}
