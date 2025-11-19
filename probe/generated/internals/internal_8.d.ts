/// <reference path="./internal_*.d.ts" />
declare namespace org.slf4j {
    interface Marker extends Internal.Serializable {
        /**
         * @deprecated
        */
        abstract hasChildren(): boolean;
        abstract hashCode(): number;
        abstract remove(arg0: org.slf4j.Marker_): boolean;
        abstract getName(): string;
        abstract add(arg0: org.slf4j.Marker_): void;
        abstract iterator(): Internal.Iterator<org.slf4j.Marker>;
        abstract hasReferences(): boolean;
        abstract equals(arg0: any): boolean;
        abstract contains(arg0: org.slf4j.Marker_): boolean;
        abstract contains(arg0: string): boolean;
        get name(): string
        readonly ANY_NON_NULL_MARKER: "+";
        readonly ANY_MARKER: "*";
    }
    type Marker_ = Marker;
}
declare namespace Internal {
    class KeyPair implements Internal.Serializable {
        constructor(arg0: Internal.PublicKey_, arg1: Internal.PrivateKey_)
        getPublic(): Internal.PublicKey;
        getPrivate(): Internal.PrivateKey;
        get "public"(): Internal.PublicKey
        get "private"(): Internal.PrivateKey
    }
    type KeyPair_ = KeyPair;
    class ClimbingPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ClimbingConfiguration> {
        constructor()
        canHold(arg0: Internal.ConfiguredPower_<Internal.ClimbingConfiguration, any>, arg1: Internal.Entity_): boolean;
        static check(arg0: Internal.LivingEntity_, arg1: Internal.Consumer_<BlockPos>): boolean;
    }
    type ClimbingPower_ = ClimbingPower;
    class RenderGuiEvent$Post extends Internal.RenderGuiEvent {
        constructor()
        constructor(arg0: Internal.Window_, arg1: Internal.GuiGraphics_, arg2: number)
    }
    type RenderGuiEvent$Post_ = RenderGuiEvent$Post;
    class RegisterGuiOverlaysEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<ResourceLocation, Internal.IGuiOverlay>, arg1: Internal.List_<ResourceLocation>)
        registerBelow(arg0: ResourceLocation_, arg1: string, arg2: Internal.IGuiOverlay_): void;
        registerAboveAll(arg0: string, arg1: Internal.IGuiOverlay_): void;
        registerBelowAll(arg0: string, arg1: Internal.IGuiOverlay_): void;
        registerAbove(arg0: ResourceLocation_, arg1: string, arg2: Internal.IGuiOverlay_): void;
        addLayer(name: ResourceLocation_): void;
    }
    type RegisterGuiOverlaysEvent_ = RegisterGuiOverlaysEvent;
    class ResourceOrTagKeyArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.ResourceOrTagKeyArgument<T>> {
        constructor(arg0: Internal.ResourceOrTagKeyArgument$Info_<any>, arg1: Internal.ResourceKey_<any>)
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.ResourceOrTagKeyArgument<T>, any>;
        readonly registryKey: Internal.ResourceKey<Internal.Registry<T>>;
        readonly f_244288_: Internal.ResourceOrTagKeyArgument$Info<any>;
    }
    type ResourceOrTagKeyArgument$Info$Template_ = ResourceOrTagKeyArgument$Info$Template;
    class AtomicReferenceArray <E> implements Internal.Serializable {
        constructor(arg0: E[])
        constructor(arg0: number)
        compareAndExchangeAcquire(arg0: number, arg1: E, arg2: E): E;
        compareAndExchangeRelease(arg0: number, arg1: E, arg2: E): E;
        get(arg0: number): E;
        weakCompareAndSetVolatile(arg0: number, arg1: E, arg2: E): boolean;
        setPlain(arg0: number, arg1: E): void;
        weakCompareAndSetPlain(arg0: number, arg1: E, arg2: E): boolean;
        set(arg0: number, arg1: E): void;
        setOpaque(arg0: number, arg1: E): void;
        getPlain(arg0: number): E;
        compareAndExchange(arg0: number, arg1: E, arg2: E): E;
        weakCompareAndSetAcquire(arg0: number, arg1: E, arg2: E): boolean;
        setRelease(arg0: number, arg1: E): void;
        getAndUpdate(arg0: number, arg1: Internal.UnaryOperator_<E>): E;
        updateAndGet(arg0: number, arg1: Internal.UnaryOperator_<E>): E;
        compareAndSet(arg0: number, arg1: E, arg2: E): boolean;
        lazySet(arg0: number, arg1: E): void;
        /**
         * @deprecated
        */
        weakCompareAndSet(arg0: number, arg1: E, arg2: E): boolean;
        getAndSet(arg0: number, arg1: E): E;
        getAcquire(arg0: number): E;
        accumulateAndGet(arg0: number, arg1: E, arg2: Internal.BinaryOperator_<E>): E;
        getOpaque(arg0: number): E;
        getAndAccumulate(arg0: number, arg1: E, arg2: Internal.BinaryOperator_<E>): E;
        weakCompareAndSetRelease(arg0: number, arg1: E, arg2: E): boolean;
        length(): number;
    }
    type AtomicReferenceArray_<E> = AtomicReferenceArray<E>;
    class FurnaceBlock extends Internal.AbstractFurnaceBlock {
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
    type FurnaceBlock_ = FurnaceBlock;
    interface SpawnPlacements$SpawnPredicate <T extends Internal.Entity> {
        abstract test(arg0: Internal.EntityType_<T>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        (arg0: Internal.EntityType<T>, arg1: Internal.ServerLevelAccessor, arg2: Internal.MobSpawnType, arg3: BlockPos, arg4: Internal.RandomSource): boolean;
    }
    type SpawnPlacements$SpawnPredicate_<T extends Internal.Entity> = SpawnPlacements$SpawnPredicate<T>;
    interface TransactionContext$CloseCallback {
        abstract onClose(arg0: Internal.TransactionContext_, arg1: Internal.TransactionContext$Result_): void;
        (arg0: Internal.TransactionContext, arg1: Internal.TransactionContext$Result): void;
    }
    type TransactionContext$CloseCallback_ = TransactionContext$CloseCallback;
    class BooleanProperty extends Internal.Property<boolean> {
        constructor(arg0: string)
        getName(arg0: boolean): string;
        static create(arg0: string): Internal.BooleanProperty;
        getPossibleValues(): Internal.Collection<boolean>;
        getValue(arg0: string): Internal.Optional<boolean>;
        get possibleValues(): Internal.Collection<boolean>
    }
    type BooleanProperty_ = BooleanProperty;
    class ForkingTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.ForkingTrunkPlacer>;
    }
    type ForkingTrunkPlacer_ = ForkingTrunkPlacer;
    class Keyframe {
        constructor(arg0: number, arg1: number)
        getTimeStamp(): number;
        getValue(): number;
        get timeStamp(): number
        get value(): number
    }
    type Keyframe_ = Keyframe;
    interface CustomPayloadC2SPacketAccessor {
        abstract getData(): Internal.FriendlyByteBuf;
        abstract getChannel(): ResourceLocation;
        get data(): Internal.FriendlyByteBuf
        get channel(): ResourceLocation
    }
    type CustomPayloadC2SPacketAccessor_ = CustomPayloadC2SPacketAccessor;
    interface BiomeWeatherAccess {
        abstract getDownfall(): number;
        abstract setDownfall(arg0: number): void;
        get downfall(): number
        set downfall(arg0: number)
    }
    type BiomeWeatherAccess_ = BiomeWeatherAccess;
    class SimpleBiEntityAction extends Internal.BiEntityAction<Internal.NoConfiguration> {
        constructor(arg0: Internal.BiConsumer_<Internal.Entity, Internal.Entity>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static tame(arg0: Internal.Entity_, arg1: Internal.Entity_): void;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static mount(arg0: Internal.Entity_, arg1: Internal.Entity_): void;
        execute(arg0: Internal.NoConfiguration_, arg1: Internal.Entity_, arg2: Internal.Entity_): void;
        static setInLove(arg0: Internal.Entity_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SimpleBiEntityAction_ = SimpleBiEntityAction;
    class RenderHandEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.InteractionHand_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.ItemStack_)
        getPoseStack(): Internal.PoseStack;
        getPartialTick(): number;
        getEquipProgress(): number;
        getHand(): Internal.InteractionHand;
        getInterpolatedPitch(): number;
        getPackedLight(): number;
        getMultiBufferSource(): Internal.MultiBufferSource;
        getItemStack(): Internal.ItemStack;
        getSwingProgress(): number;
        get poseStack(): Internal.PoseStack
        get partialTick(): number
        get equipProgress(): number
        get hand(): Internal.InteractionHand
        get interpolatedPitch(): number
        get packedLight(): number
        get multiBufferSource(): Internal.MultiBufferSource
        get itemStack(): Internal.ItemStack
        get swingProgress(): number
    }
    type RenderHandEvent_ = RenderHandEvent;
    interface IScrollGridWidget extends Internal.IPlaceable<Internal.IScrollGridWidget>, Internal.ISlottedRecipeWidget {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getSlotUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.RecipeSlotUnderMouse>;
        abstract setPosition(arg0: number, arg1: number): this;
        abstract getWidth(): number;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.HorizontalAlignment_, arg5: Internal.VerticalAlignment_): this;
        drawWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getHeight(): number;
        abstract getScreenRectangle(): Internal.ScreenRectangle;
        tick(): void;
        abstract getPosition(): Internal.ScreenPosition;
        getTooltip(arg0: Internal.ITooltipBuilder_, arg1: number, arg2: number): void;
        get width(): number
        get height(): number
        get screenRectangle(): Internal.ScreenRectangle
        get position(): Internal.ScreenPosition
    }
    type IScrollGridWidget_ = IScrollGridWidget;
    class ItemInsideRecipe extends Internal.ItemShapelessRecipe<Internal.ItemInsideRecipe> implements Internal.BlockKeyRecipe<Internal.ItemInsideRecipe> {
        constructor(arg0: ResourceLocation_)
        tickOrApply(arg0: Internal.ItemShapelessContext_): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        buildCache(arg0: Internal.Object2FloatMap_<Internal.Item>, arg1: Internal.List_<Internal.ItemInsideRecipe>): Internal.ItemInsideRecipeType$Cache;
        getTime(): number;
        getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        getRemainingItems(arg0: Internal.ItemShapelessContext_): Internal.NonNullList<Internal.ItemStack>;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
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
        get time(): number
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get mod(): string
        get allActions(): Internal.Stream<Internal.PostAction>
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get blockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get incomplete(): boolean
    }
    type ItemInsideRecipe_ = ItemInsideRecipe;
    class Biome$Precipitation extends Internal.Enum<Internal.Biome$Precipitation> {
        static valueOf(arg0: string): Internal.Biome$Precipitation;
        static values(): Internal.Biome$Precipitation[];
        static readonly RAIN: Internal.Biome$Precipitation;
        static readonly NONE: Internal.Biome$Precipitation;
        static readonly SNOW: Internal.Biome$Precipitation;
    }
    type Biome$Precipitation_ = "snow" | "rain" | Biome$Precipitation | "none";
    class BiomeTreatItem extends Internal.CaveInfoItem {
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
        static getBiomeTreatColorOf(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
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
    type BiomeTreatItem_ = BiomeTreatItem;
    class MarkerManager$Log4jMarker implements Internal.StringBuilderFormattable, org.apache.logging.log4j.Marker {
        constructor(name: string)
        formatTo(sb: Internal.StringBuilder_): void;
        getParents(): org.apache.logging.log4j.Marker[];
        hasParents(): boolean;
        addParents(...parentMarkers: org.apache.logging.log4j.Marker_[]): org.apache.logging.log4j.Marker;
        isInstanceOf(markerName: string): boolean;
        isInstanceOf(marker: org.apache.logging.log4j.Marker_): boolean;
        getName(): string;
        setParents(...markers: org.apache.logging.log4j.Marker_[]): org.apache.logging.log4j.Marker;
        remove(parent: org.apache.logging.log4j.Marker_): boolean;
        get parents(): org.apache.logging.log4j.Marker[]
        get name(): string
        set parents(...markers: org.apache.logging.log4j.Marker_[])
    }
    type MarkerManager$Log4jMarker_ = MarkerManager$Log4jMarker;
    class CakeCaveStructure extends Internal.AbstractCaveGenerationStructure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.CakeCaveStructure>;
    }
    type CakeCaveStructure_ = CakeCaveStructure;
    interface IAnimationControllerJS {
        abstract getCurrentAnimationTick(): number;
        get currentAnimationTick(): number
        (): number;
    }
    type IAnimationControllerJS_ = IAnimationControllerJS;
    abstract class ValueObject {
        constructor()
    }
    type ValueObject_ = ValueObject;
    class EnumMap <K extends Internal.Enum<K>, V> extends Internal.AbstractMap<K, V> implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: Internal.Map_<K, V>)
        constructor(arg0: K)
        constructor(arg0: Internal.EnumMap_<K, V>)
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        static of<K, V>(): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        put(arg0: any, arg1: any): any;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        keySet(): Internal.Set<K>;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        clone(): this;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
    }
    type EnumMap_<K extends Internal.Enum<K>, V> = EnumMap<K, V>;
    class ContextUtils$CollidingProjectileEntityContext {
        constructor(entity: Internal.Entity_, target: Internal.Entity_)
        /**
         * The colliding entity
        */
        readonly entity: Internal.Entity;
        /**
         * The the target being collided with
        */
        readonly target: Internal.Entity;
    }
    type ContextUtils$CollidingProjectileEntityContext_ = ContextUtils$CollidingProjectileEntityContext;
    class Strange_Key extends Internal.Item {
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
    type Strange_Key_ = Strange_Key;
    class SugarGlassBlock extends Internal.GlassBlock {
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
    type SugarGlassBlock_ = SugarGlassBlock;
    class JsonPointer {
        constructor(arg0: Internal.Collection_<string>)
        constructor(arg0: string)
        isRoot(): boolean;
        size(): number;
        parent(): this;
        find(arg0: Internal.JsonElement_): Internal.JsonElement;
        getInt(arg0: number): number;
        isSelfOrParentOf(arg0: Internal.List_<string>): boolean;
        getString(arg0: number): string;
        append(arg0: string): this;
        get root(): boolean
        readonly tokens: Internal.List<string>;
    }
    type JsonPointer_ = JsonPointer;
    interface Endec <T> {
        dispatched<T, K>(arg0: Internal.Function_<K, Internal.Endec<T>>, arg1: Internal.Function_<T, K>, arg2: Internal.Endec_<K>): this;
        forEnum<E extends Internal.Enum<E>>(arg0: E): Internal.Endec<E>;
        keyed(arg0: string, arg1: Internal.Supplier_<T>): Internal.KeyedEndec<T>;
        ifAttr<T>(arg0: Internal.SerializationAttribute_, arg1: Internal.Endec_<T>): Internal.AttributeEndecBuilder<T>;
        optionalFieldOf<S>(arg0: string, arg1: Internal.Function_<S, T>, arg2: Internal.Supplier_<T>): Internal.StructField<S, T>;
        catchErrors(arg0: Internal.Endec$DecoderWithError_<T>): this;
        dispatchedStruct<T, K>(arg0: Internal.Function_<K, Internal.StructEndec<T>>, arg1: Internal.Function_<T, K>, arg2: Internal.Endec_<K>, arg3: string): this;
        optionalFieldOf<S>(arg0: string, arg1: Internal.Function_<S, T>, arg2: T): Internal.StructField<S, T>;
        optionalOf(): Internal.Endec<Internal.Optional<T>>;
        encodeFully<E>(arg0: Internal.Supplier_<io.wispforest.endec.Serializer<E>>, arg1: T): E;
        fieldOf<S>(arg0: string, arg1: Internal.Function_<S, T>): Internal.StructField<S, T>;
        xmap<R>(arg0: Internal.Function_<T, R>, arg1: Internal.Function_<R, T>): Internal.Endec<R>;
        encodeFully<E>(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Supplier_<io.wispforest.endec.Serializer<E>>, arg2: T): E;
        decodeFully<E>(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Function_<E, Internal.Deserializer<E>>, arg2: E): T;
        listOf(): Internal.Endec<Internal.List<T>>;
        abstract encode(arg0: io.wispforest.endec.SerializationContext_, arg1: io.wispforest.endec.Serializer_<any>, arg2: T): void;
        map<K, V>(arg0: Internal.Function_<K, string>, arg1: Internal.Function_<string, K>, arg2: Internal.Endec_<V>): Internal.Endec<Internal.Map<K, V>>;
        validate(arg0: Internal.Consumer_<T>): this;
        decodeFully<E>(arg0: Internal.Function_<E, Internal.Deserializer<E>>, arg1: E): T;
        dispatchedStruct<T, K>(arg0: Internal.Function_<K, Internal.StructEndec<T>>, arg1: Internal.Function_<T, K>, arg2: Internal.Endec_<K>): this;
        abstract decode(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Deserializer_<any>): T;
        setOf(): Internal.Endec<Internal.Set<T>>;
        map<K, V>(arg0: Internal.Endec_<K>, arg1: Internal.Endec_<V>): Internal.Endec<Internal.Map<K, V>>;
        of<T>(arg0: Internal.Endec$Encoder_<T>, arg1: Internal.Endec$Decoder_<T>): this;
        mapOf(): Internal.Endec<Internal.Map<string, T>>;
        xmapWithContext<R>(arg0: Internal.BiFunction_<io.wispforest.endec.SerializationContext, T, R>, arg1: Internal.BiFunction_<io.wispforest.endec.SerializationContext, R, T>): Internal.Endec<R>;
        keyed(arg0: string, arg1: T): Internal.KeyedEndec<T>;
        nullableOf(): this;
        readonly BYTE: Internal.Endec<number>;
        readonly SHORT: Internal.Endec<number>;
        readonly VOID: Internal.Endec<void>;
        readonly FLOAT: Internal.Endec<number>;
        readonly DOUBLE: Internal.Endec<number>;
        readonly INT: Internal.Endec<number>;
        readonly VAR_LONG: Internal.Endec<number>;
        readonly STRING: Internal.Endec<string>;
        readonly LONG: Internal.Endec<number>;
        readonly BYTES: Internal.Endec<number[]>;
        readonly BOOLEAN: Internal.Endec<boolean>;
        readonly VAR_INT: Internal.Endec<number>;
    }
    type Endec_<T> = Endec<T>;
    interface FocusNavigationEvent {
        abstract getVerticalDirectionForInitialFocus(): Internal.ScreenDirection;
        get verticalDirectionForInitialFocus(): Internal.ScreenDirection
        (): Internal.ScreenDirection_;
    }
    type FocusNavigationEvent_ = FocusNavigationEvent;
    interface Chronology extends Internal.Comparable<Internal.Chronology> {
        dateNow(arg0: Internal.ZoneId_): Internal.ChronoLocalDate;
        abstract eras(): Internal.List<Internal.Era>;
        from(arg0: Internal.TemporalAccessor_): this;
        localDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoLocalDateTime<Internal.ChronoLocalDate>;
        zonedDateTime(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ChronoZonedDateTime<Internal.ChronoLocalDate>;
        compareTo(arg0: any): number;
        abstract resolveDate(arg0: Internal.Map_<Internal.TemporalField, number>, arg1: Internal.ResolverStyle_): Internal.ChronoLocalDate;
        dateNow(arg0: Internal.Clock_): Internal.ChronoLocalDate;
        abstract getCalendarType(): string;
        abstract compareTo(arg0: Internal.Chronology_): number;
        of(arg0: string): this;
        abstract date(arg0: number, arg1: number, arg2: number): Internal.ChronoLocalDate;
        abstract range(arg0: Internal.ChronoField_): Internal.ValueRange;
        abstract prolepticYear(arg0: Internal.Era_, arg1: number): number;
        abstract eraOf(arg0: number): Internal.Era;
        period(arg0: number, arg1: number, arg2: number): Internal.ChronoPeriod;
        abstract toString(): string;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.ZoneOffset_): number;
        getAvailableChronologies(): Internal.Set<Internal.Chronology>;
        dateYearDay(arg0: Internal.Era_, arg1: number, arg2: number): Internal.ChronoLocalDate;
        abstract isLeapYear(arg0: number): boolean;
        abstract getId(): string;
        zonedDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<Internal.ChronoLocalDate>;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        abstract date(arg0: Internal.TemporalAccessor_): Internal.ChronoLocalDate;
        abstract hashCode(): number;
        abstract dateEpochDay(arg0: number): Internal.ChronoLocalDate;
        abstract dateYearDay(arg0: number, arg1: number): Internal.ChronoLocalDate;
        date(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number): Internal.ChronoLocalDate;
        epochSecond(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneOffset_): number;
        abstract equals(arg0: any): boolean;
        ofLocale(arg0: Internal.Locale_): this;
        dateNow(): Internal.ChronoLocalDate;
        get calendarType(): string
        get availableChronologies(): Internal.Set<Internal.Chronology>
        get id(): string
    }
    type Chronology_ = Chronology;
    class ClientboundPlayerInfoUpdatePacket$Action extends Internal.Enum<Internal.ClientboundPlayerInfoUpdatePacket$Action> {
        static values(): Internal.ClientboundPlayerInfoUpdatePacket$Action[];
        static valueOf(arg0: string): Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_DISPLAY_NAME: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly INITIALIZE_CHAT: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_LISTED: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_GAME_MODE: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        readonly reader: Internal.ClientboundPlayerInfoUpdatePacket$Action$Reader;
        static readonly ADD_PLAYER: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        static readonly UPDATE_LATENCY: Internal.ClientboundPlayerInfoUpdatePacket$Action;
        readonly writer: Internal.ClientboundPlayerInfoUpdatePacket$Action$Writer;
    }
    type ClientboundPlayerInfoUpdatePacket$Action_ = "update_game_mode" | "update_display_name" | ClientboundPlayerInfoUpdatePacket$Action | "update_latency" | "initialize_chat" | "update_listed" | "add_player";
    abstract class BlockCondition <T extends Internal.IDynamicFeatureConfiguration> implements Internal.IConditionFactory<T, Internal.ConfiguredBlockCondition<T, any>, Internal.BlockCondition<T>> {
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.ConfiguredBlockCondition_<T, any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>): boolean;
        getConditionCodec(): Internal.Codec<Internal.ConfiguredBlockCondition<T, any>>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        get conditionCodec(): Internal.Codec<Internal.ConfiguredBlockCondition<T, any>>
        static readonly CODEC: Internal.Codec<Internal.BlockCondition<any>>;
    }
    type BlockCondition_<T extends Internal.IDynamicFeatureConfiguration> = BlockCondition<T> | Special.BlockCondition;
    interface Mutable <T> {
        abstract setValue(arg0: T): void;
        abstract getValue(): T;
        set value(arg0: T)
        get value(): T
    }
    type Mutable_<T> = Mutable<T>;
    class ViewportEvent$ComputeFogColor extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.Camera_, arg1: number, arg2: number, arg3: number, arg4: number)
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        get red(): number
        get green(): number
        get blue(): number
        set red(arg0: number)
        set green(arg0: number)
        set blue(arg0: number)
    }
    type ViewportEvent$ComputeFogColor_ = ViewportEvent$ComputeFogColor;
    class InputConstants$Type extends Internal.Enum<Internal.InputConstants$Type> {
        static addKey(arg0: Internal.InputConstants$Type_, arg1: string, arg2: number): void;
        getOrCreate(arg0: number): Internal.InputConstants$Key;
        static valueOf(arg0: string): Internal.InputConstants$Type;
        static values(): Internal.InputConstants$Type[];
        static readonly KEYSYM: Internal.InputConstants$Type;
        static readonly MOUSE: Internal.InputConstants$Type;
        static readonly SCANCODE: Internal.InputConstants$Type;
    }
    type InputConstants$Type_ = "keysym" | "mouse" | InputConstants$Type | "scancode";
    class ThornwoodTreeWithBranchesFeature extends Internal.ThornwoodTreeFeature {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type ThornwoodTreeWithBranchesFeature_ = ThornwoodTreeWithBranchesFeature;
    class GroundPathNavigation extends Internal.PathNavigation {
        constructor(arg0: Internal.Mob_, arg1: Internal.Level_)
        hasValidPathType(arg0: Internal.BlockPathTypes_): boolean;
        canOpenDoors(): boolean;
        setCanWalkOverFences(arg0: boolean): void;
        canPassDoors(): boolean;
        setCanPassDoors(arg0: boolean): void;
        setCanOpenDoors(arg0: boolean): void;
        setAvoidSun(arg0: boolean): void;
        set canWalkOverFences(arg0: boolean)
        set canPassDoors(arg0: boolean)
        set canOpenDoors(arg0: boolean)
        set avoidSun(arg0: boolean)
    }
    type GroundPathNavigation_ = GroundPathNavigation;
    interface MinecartAccessor {
        abstract isOnMagLevRail(): boolean;
        get onMagLevRail(): boolean
        (): boolean;
    }
    type MinecartAccessor_ = MinecartAccessor;
    class BigDripleafBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        static canPlaceAt(arg0: Internal.LevelHeightAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        static place(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.Direction_): boolean;
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
        static placeWithRandomHeight(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.Direction_): void;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type BigDripleafBlock_ = BigDripleafBlock;
    interface IntCollection extends Internal.IntIterable, Internal.Collection<number> {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        abstract contains(arg0: number): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(arg0: number[]): number[];
        intParallelStream(): Internal.IntStream;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        spliterator(): Internal.IntSpliterator;
        intIterator(): Internal.IntIterator;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract rem(arg0: number): boolean;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
    }
    type IntCollection_ = IntCollection;
    class AddLakeProperties {
        constructor()
        setInner(p: BlockStatePredicate_): void;
        setOuter(p: BlockStatePredicate_): void;
        set inner(p: BlockStatePredicate_)
        set outer(p: BlockStatePredicate_)
        retrogen: number;
        barrier: BlockStatePredicate;
        worldgenLayer: Internal.GenerationStep$Decoration;
        chance: number;
        biomes: Internal.BiomeFilter;
        id: ResourceLocation;
        fluid: BlockStatePredicate;
    }
    type AddLakeProperties_ = AddLakeProperties;
    class BlastFurnaceBlockEntity extends Internal.AbstractFurnaceBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Player_): void;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        hasCustomName(): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        startOpen(arg0: Player_): void;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        shouldCloseCurrentScreen(): boolean;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        setRecipeUsed(arg0: Internal.Level_, arg1: Internal.ServerPlayer_, arg2: Internal.Recipe_<any>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type BlastFurnaceBlockEntity_ = BlastFurnaceBlockEntity;
    class InputEvent$Key extends Internal.InputEvent {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getModifiers(): number;
        getKey(): number;
        getScanCode(): number;
        getAction(): number;
        get modifiers(): number
        get key(): number
        get scanCode(): number
        get action(): number
    }
    type InputEvent$Key_ = InputEvent$Key;
    class TypeWrappers {
        constructor()
        registerSimple<T>(target: T, factory: Internal.TypeWrapperFactory$Simple_<T>): void;
        register<T>(target: T, validator: Internal.Predicate_<any>, factory: Internal.TypeWrapperFactory_<T>): void;
        register<T>(target: T, factory: Internal.TypeWrapperFactory_<T>): void;
        getWrapperFactory(target: typeof any, from: any): Internal.TypeWrapperFactory<any>;
        registerSimple<T>(target: T, validator: Internal.Predicate_<any>, factory: Internal.TypeWrapperFactory$Simple_<T>): void;
    }
    type TypeWrappers_ = TypeWrappers;
    class DataResult <R> implements Internal.App<Internal.DataResult$Mu, R> {
        get(): Internal.Either<R, Internal.DataResult$PartialResult<R>>;
        static success<R>(arg0: R): Internal.DataResult<R>;
        addLifecycle(arg0: Internal.Lifecycle_): this;
        error(): Internal.Optional<Internal.DataResult$PartialResult<R>>;
        static instance(): Internal.DataResult$Instance;
        static error<R>(arg0: Internal.Supplier_<string>): Internal.DataResult<R>;
        setPartial(arg0: Internal.Supplier_<R>): this;
        result(): Internal.Optional<R>;
        static partialGet<K, V>(arg0: Internal.Function_<K, V>, arg1: Internal.Supplier_<string>): Internal.Function<K, Internal.DataResult<V>>;
        static unbox<R>(arg0: Internal.App_<Internal.DataResult$Mu, R>): Internal.DataResult<R>;
        apply2stable<R2, S>(arg0: Internal.BiFunction_<R, R2, S>, arg1: Internal.DataResult_<R2>): Internal.DataResult<S>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: Internal.Lifecycle_): Internal.DataResult<R>;
        ap<R2>(arg0: Internal.DataResult_<Internal.Function<R, R2>>): Internal.DataResult<R2>;
        static success<R>(arg0: R, arg1: Internal.Lifecycle_): Internal.DataResult<R>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: R, arg2: Internal.Lifecycle_): Internal.DataResult<R>;
        mapError(arg0: Internal.UnaryOperator_<string>): this;
        lifecycle(): Internal.Lifecycle;
        setPartial(arg0: R): this;
        apply3<R2, R3, S>(arg0: Internal.Function3_<R, R2, R3, S>, arg1: Internal.DataResult_<R2>, arg2: Internal.DataResult_<R3>): Internal.DataResult<S>;
        setLifecycle(arg0: Internal.Lifecycle_): this;
        resultOrPartial(arg0: Internal.Consumer_<string>): Internal.Optional<R>;
        map<T>(arg0: Internal.Function_<R, T>): Internal.DataResult<T>;
        static error<R>(arg0: Internal.Supplier_<string>, arg1: R): Internal.DataResult<R>;
        flatMap<R2>(arg0: Internal.Function_<R, Internal.DataResult<R2>>): Internal.DataResult<R2>;
        apply2<R2, S>(arg0: Internal.BiFunction_<R, R2, S>, arg1: Internal.DataResult_<R2>): Internal.DataResult<S>;
        getOrThrow(arg0: boolean, arg1: Internal.Consumer_<string>): R;
        promotePartial(arg0: Internal.Consumer_<string>): this;
        set partial(arg0: Internal.Supplier_<R>)
        set partial(arg0: R)
        set lifecycle(arg0: Internal.Lifecycle_)
    }
    type DataResult_<R> = DataResult<R>;
    interface FileConfig extends Internal.AutoCloseable, Internal.Config {
        abstract add(arg0: Internal.List_<string>, arg1: any): boolean;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getInt(arg0: Internal.List_<string>): number;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        ofConcurrent(arg0: string, arg1: Internal.ConfigFormat_<any>): this;
        update(arg0: Internal.List_<string>, arg1: any): void;
        builder(arg0: Internal.File_, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        wrap(arg0: Internal.Map_<string, any>, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        remove<T>(arg0: string): T;
        of(arg0: Internal.ConfigFormat_<Internal.Config>): Internal.Config;
        abstract createSubConfig(): Internal.Config;
        putAll(arg0: Internal.UnmodifiableConfig_): void;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        inMemory(): Internal.Config;
        add(arg0: string, arg1: any): boolean;
        checked(): this;
        abstract getNioPath(): Internal.Path;
        ofConcurrent(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): this;
        builder(arg0: string): Internal.FileConfigBuilder;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getLong(arg0: Internal.List_<string>): number;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        inMemoryConcurrent(): Internal.Config;
        inMemoryUniversal(): Internal.Config;
        ofConcurrent(arg0: Internal.ConfigFormat_<Internal.Config>): Internal.Config;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        abstract load(): void;
        isNull(arg0: string): boolean;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): Internal.Config;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        ofConcurrent(arg0: Internal.Path_): this;
        ofConcurrent(arg0: Internal.File_): this;
        of(arg0: Internal.Path_): this;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        of(arg0: Internal.File_, arg1: Internal.ConfigFormat_<Internal.Config>): this;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        unmodifiable(): Internal.UnmodifiableConfig;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_): Internal.Config;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract save(): void;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        update(arg0: string, arg1: any): void;
        abstract size(): number;
        abstract entrySet(): Internal.Set<Internal.Config$Entry>;
        abstract valueMap(): Internal.Map<string, any>;
        abstract clear(): void;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        of(arg0: Internal.Supplier_<Internal.Map<string, any>>, arg1: Internal.ConfigFormat_<any>): Internal.Config;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        of(arg0: string): this;
        getCharOrElse(arg0: string, arg1: string): string;
        get<T>(arg0: Internal.List_<string>): T;
        abstract set<T>(arg0: Internal.List_<string>, arg1: any): T;
        inMemoryUniversalConcurrent(): Internal.Config;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<any>): Internal.Config;
        contains(arg0: string): boolean;
        set<T>(arg0: string, arg1: any): T;
        builder(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        setInsertionOrderPreserved(arg0: boolean): void;
        removeAll(arg0: Internal.UnmodifiableConfig_): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): Internal.Supplier<Internal.Map<string, T>>;
        ofConcurrent(arg0: Internal.File_, arg1: Internal.ConfigFormat_<any>): this;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        abstract remove<T>(arg0: Internal.List_<string>): T;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        isInsertionOrderPreserved(): boolean;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        of(arg0: Internal.File_): this;
        of(arg0: string, arg1: Internal.ConfigFormat_<any>): this;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        getShort(arg0: string): number;
        abstract getFile(): Internal.File;
        copy(arg0: Internal.UnmodifiableConfig_): Internal.Config;
        addAll(arg0: Internal.UnmodifiableConfig_): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getChar(arg0: string): string;
        builder(arg0: string, arg1: Internal.ConfigFormat_<any>): Internal.FileConfigBuilder;
        getChar(arg0: Internal.List_<string>): string;
        ofConcurrent(arg0: string): this;
        builder(arg0: Internal.File_): Internal.FileConfigBuilder;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isEmpty(): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        getDefaultMapCreator<T>(arg0: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getByte(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        of(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<Internal.Config>): this;
        abstract close(): void;
        builder(arg0: Internal.Path_): Internal.FileConfigBuilder;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get nioPath(): Internal.Path
        set insertionOrderPreserved(arg0: boolean)
        get insertionOrderPreserved(): boolean
        get file(): Internal.File
        get empty(): boolean
    }
    type FileConfig_ = FileConfig;
    interface ScreenEvents$BeforeTick {
        abstract beforeTick(arg0: Internal.Screen_): void;
        (arg0: Internal.Screen): void;
    }
    type ScreenEvents$BeforeTick_ = ScreenEvents$BeforeTick;
    class CultistArmorItem extends Internal.ImbuableChestplateArmorItem {
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
    type CultistArmorItem_ = CultistArmorItem;
    class EntityRenderersEvent$RegisterLayerDefinitions extends Internal.EntityRenderersEvent {
        constructor()
        registerLayerDefinition(arg0: Internal.ModelLayerLocation_, arg1: Internal.Supplier_<Internal.LayerDefinition>): void;
    }
    type EntityRenderersEvent$RegisterLayerDefinitions_ = EntityRenderersEvent$RegisterLayerDefinitions;
    class DripstoneContext extends Internal.LycheeContext {
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
        readonly source: Internal.BlockState;
    }
    type DripstoneContext_ = DripstoneContext;
    interface HeightProviderType <P extends Internal.HeightProvider> {
        abstract codec(): Internal.Codec<P>;
        (): Internal.Codec_<P>;
        readonly UNIFORM: Internal.HeightProviderType<Internal.UniformHeight>;
        readonly CONSTANT: Internal.HeightProviderType<Internal.ConstantHeight>;
        readonly WEIGHTED_LIST: Internal.HeightProviderType<Internal.WeightedListHeight>;
        readonly VERY_BIASED_TO_BOTTOM: Internal.HeightProviderType<Internal.VeryBiasedToBottomHeight>;
        readonly TRAPEZOID: Internal.HeightProviderType<Internal.TrapezoidHeight>;
        readonly BIASED_TO_BOTTOM: Internal.HeightProviderType<Internal.BiasedToBottomHeight>;
    }
    type HeightProviderType_<P extends Internal.HeightProvider> = Special.HeightProviderType | HeightProviderType<P>;
    abstract class FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_)
        placeLeavesRow(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: BlockPos_, arg5: number, arg6: number, arg7: boolean): void;
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        abstract shouldSkipLocation(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        static tryPlaceLeaf(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: BlockPos_): boolean;
        placeLeavesRowWithHangingLeavesBelow(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: BlockPos_, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number): void;
        abstract createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number, arg8: number): void;
        static foliagePlacerParts<P extends Internal.FoliagePlacer>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P2<Internal.RecordCodecBuilder$Mu<P>, Internal.IntProvider, Internal.IntProvider>;
        shouldSkipLocationSigned(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        abstract foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        abstract type(): Internal.FoliagePlacerType<any>;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        readonly offset: Internal.IntProvider;
        static readonly CODEC: Internal.Codec<Internal.FoliagePlacer>;
        readonly radius: Internal.IntProvider;
    }
    type FoliagePlacer_ = FoliagePlacer;
    interface TimerCallback <T> {
        abstract handle(arg0: T, arg1: Internal.TimerQueue_<T>, arg2: number): void;
        (arg0: T, arg1: Internal.TimerQueue<T>, arg2: number): void;
    }
    type TimerCallback_<T> = TimerCallback<T>;
    interface ItemColor {
        abstract getColor(arg0: Internal.ItemStack_, arg1: number): number;
        (arg0: Internal.ItemStack, arg1: number): number;
    }
    type ItemColor_ = ItemColor;
    interface IExtendedPistonTile {
        abstract tickMovedBlock(arg0: Internal.Level_, arg1: BlockPos_): void;
        (arg0: Internal.Level, arg1: BlockPos): void;
    }
    type IExtendedPistonTile_ = IExtendedPistonTile;
    abstract class AbstractRenderContext implements Internal.RenderContext {
        pushTransform(transform: Internal.RenderContext$QuadTransform_): void;
        itemTransformationMode(): Internal.ItemDisplayContext;
        hasTransform(): boolean;
        abstract getEmitter(): Internal.QuadEmitter;
        getModelData(): Internal.ModelData;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract bakedModelConsumer(): Internal.RenderContext$BakedModelConsumer;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        fallbackConsumer(): Internal.Consumer<Internal.BakedModel>;
        isFaceCulled(face: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        meshConsumer(): Internal.Consumer<Internal.Mesh>;
        getRenderLayer(): Internal.RenderType;
        popTransform(): void;
        get emitter(): Internal.QuadEmitter
        get modelData(): Internal.ModelData
        get renderLayer(): Internal.RenderType
    }
    type AbstractRenderContext_ = AbstractRenderContext;
    interface ScheduledFuture <V> extends Internal.Delayed, Internal.Future<V> {
        abstract get(): V;
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract isCancelled(): boolean;
        get done(): boolean
        get cancelled(): boolean
    }
    type ScheduledFuture_<V> = ScheduledFuture<V>;
    class Matrix4x3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4x3dc {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number)
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4x3fc_)
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_): this;
        mapnYXnZ(arg0: Internal.Matrix4x3d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapXZnY(arg0: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapnYnZnX(): this;
        mapYZnX(): this;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnZXY(arg0: Internal.Matrix4x3d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotationX(arg0: number): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        normal(arg0: Internal.Matrix4x3d_): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapYnZnX(): this;
        normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mapYXnZ(arg0: Internal.Matrix4x3d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        mapYnXnZ(arg0: Internal.Matrix4x3d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        mapZnYX(): this;
        set3x3(arg0: Internal.Matrix4x3dc_): this;
        normalize3x3(arg0: Internal.Matrix4x3d_): this;
        fma(arg0: Internal.Matrix4x3dc_, arg1: number): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotationY(arg0: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix3fc_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4x3d_): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        set(arg0: number[], arg1: number): this;
        mapZXY(arg0: Internal.Matrix4x3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        set3x3(arg0: Internal.Matrix3fc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: Internal.Matrix4x3d_): this;
        get4x4(arg0: number[]): number[];
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapYnXZ(arg0: Internal.Matrix4x3d_): this;
        cofactor3x3(arg0: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3fc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        m30(arg0: number): this;
        mapXnZnY(arg0: Internal.Matrix4x3d_): this;
        isFinite(): boolean;
        mapnYnXnZ(): this;
        transpose3x3(): this;
        getToAddress(arg0: number): Internal.Matrix4x3dc;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapZYnX(): this;
        cofactor3x3(): this;
        obliqueZ(arg0: number, arg1: number): this;
        lerp(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        mapnYZnX(arg0: Internal.Matrix4x3d_): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): this;
        mapnXnZnY(arg0: Internal.Matrix4x3d_): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        mapnZYX(arg0: Internal.Matrix4x3d_): this;
        mapnZnYX(): this;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnXZnY(arg0: Internal.Matrix4x3d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapnYXZ(arg0: Internal.Matrix4x3d_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Vector3dc_): this;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        mapYnXnZ(): this;
        m31(arg0: number): this;
        m02(): number;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapZXnY(): this;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        zero(): this;
        mapZnXY(): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        invertOrtho(arg0: Internal.Matrix4x3d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        mapnYZnX(): this;
        sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_, arg2: Internal.Matrix4x3d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): this;
        mapnXYnZ(arg0: Internal.Matrix4x3d_): this;
        scaleXY(arg0: number, arg1: number): this;
        mapYnZnX(arg0: Internal.Matrix4x3d_): this;
        mapnZnYX(arg0: Internal.Matrix4x3d_): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnXnYnZ(arg0: Internal.Matrix4x3d_): this;
        translation(arg0: Internal.Vector3fc_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        mapnYnZnX(arg0: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        assume(arg0: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapZXnY(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_, arg5: Internal.Matrix4x3d_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapXZnY(): this;
        mapYZnX(arg0: Internal.Matrix4x3d_): this;
        mapnZXnY(arg0: Internal.Matrix4x3d_): this;
        get(arg0: number[], arg1: number): number[];
        translationRotateInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        setFromAddress(arg0: number): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        scaling(arg0: Internal.Vector3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Matrix4x3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnZnY(): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mulComponentWise(arg0: Internal.Matrix4x3dc_): this;
        translateLocal(arg0: Internal.Vector3dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYXnZ(): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXZnY(): this;
        translation(arg0: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        mapXnZnY(): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        mapYXZ(arg0: Internal.Matrix4x3d_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        rotationZ(arg0: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        mapYnXZ(): this;
        mapZnXnY(arg0: Internal.Matrix4x3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        sub(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): this;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYZX(): this;
        mapnXZY(): this;
        mapnXnZY(): this;
        mapnYnXZ(arg0: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapYnZX(arg0: Internal.Matrix4x3d_): this;
        mulOrtho(arg0: Internal.Matrix4x3dc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        mapnZnXY(): this;
        mapnZYnX(arg0: Internal.Matrix4x3d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3d_): this;
        set(arg0: Internal.FloatBuffer_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        mapZYX(arg0: Internal.Matrix4x3d_): this;
        mapnZnXnY(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get4x4(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): this;
        scaling(arg0: number): this;
        determineProperties(): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        mapZnYnX(arg0: Internal.Matrix4x3d_): this;
        swap(arg0: Internal.Matrix4x3d_): this;
        rotateY(arg0: number): this;
        m20(): number;
        rotateLocalX(arg0: number): this;
        negateY(arg0: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        fma(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapnZnYnX(arg0: Internal.Matrix4x3d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnXZY(arg0: Internal.Matrix4x3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        invert(): this;
        m01(arg0: number): this;
        m31(): number;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapnYnZX(): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        translationRotateScaleMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4x3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        rotateX(arg0: number): this;
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateX(arg0: number, arg1: Internal.Matrix4x3d_): this;
        get4x4(arg0: number[], arg1: number): number[];
        set(arg0: Internal.Quaterniondc_): this;
        set(arg0: number[], arg1: number): this;
        mapYnZX(): this;
        rotateLocalY(arg0: number): this;
        lerp(arg0: Internal.Matrix4x3dc_, arg1: number): this;
        negateZ(arg0: Internal.Matrix4x3d_): this;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnXnYZ(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.AxisAngle4d_): this;
        m02(arg0: number): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapXnYnZ(): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mapnXnZY(arg0: Internal.Matrix4x3d_): this;
        mapXnZY(): this;
        scale(arg0: number): this;
        rotateLocalZ(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        scaling(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): this;
        mapnZYX(): this;
        rotateY(arg0: number, arg1: Internal.Matrix4x3d_): this;
        mapXnZY(arg0: Internal.Matrix4x3d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        add(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapYZX(arg0: Internal.Matrix4x3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        mapYXZ(): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapZnXY(arg0: Internal.Matrix4x3d_): this;
        mapnXnYnZ(): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_, arg4: Internal.Matrix4x3dc_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        negateX(arg0: Internal.Matrix4x3d_): this;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4x3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: number[]): this;
        set(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        translateLocal(arg0: Internal.Vector3fc_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZYnX(arg0: Internal.Matrix4x3d_): this;
        get4x4(arg0: number[], arg1: number): number[];
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        mapXZY(arg0: Internal.Matrix4x3d_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        negateY(): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): this;
        normal(): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        scale(arg0: number, arg1: Internal.Matrix4x3d_): this;
        get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4x3d_): this;
        invertOrtho(): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYnZX(arg0: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapZnYnX(): this;
        m32(arg0: number): this;
        m01(): number;
        mapnZnXY(arg0: Internal.Matrix4x3d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapZXY(): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        mapnZXY(): this;
        get(arg0: number[]): number[];
        rotation(arg0: Internal.Quaterniondc_): this;
        mapXnYnZ(arg0: Internal.Matrix4x3d_): this;
        toString(arg0: Internal.NumberFormat_): string;
        m12(): number;
        m20(arg0: number): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnZnXnY(): this;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapXZY(): this;
        clone(): any;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3d_): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateX(): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m10(arg0: number): this;
        identity(): this;
        m00(): number;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        equals(arg0: Internal.Matrix4x3dc_, arg1: number): boolean;
        get(arg0: number[]): number[];
        determinant(): number;
        properties(): number;
        invert(arg0: Internal.Matrix4x3d_): this;
        translate(arg0: Internal.Vector3dc_): this;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): this;
        mapnZnYnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        getTransposed(arg0: number[], arg1: number): number[];
        m21(arg0: number): this;
        mapYZX(): this;
        mapnYnXZ(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        translationRotateScaleMul(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3dc_): this;
        m11(): number;
        get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        sub(arg0: Internal.Matrix4x3fc_): this;
        mapZnXnY(): this;
        mulOrtho(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        getTransposed(arg0: number[]): number[];
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_): this;
        mapnYZX(arg0: Internal.Matrix4x3d_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4x3d_): this;
        transpose3x3(arg0: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix4dc_): this;
        mulTranslation(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        m11(arg0: number): this;
        m22(): number;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3d_): this;
        m22(arg0: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3d_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapYXnZ(): this;
        mapZYX(): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        negateZ(): this;
        scale(arg0: Internal.Vector3dc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        set(arg0: number[]): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4x3d_): this;
        mapnZYnX(): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): this;
        m12(arg0: number): this;
        m21(): number;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): this;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapZnYX(arg0: Internal.Matrix4x3d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): this;
        add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): this;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnXnYZ(arg0: Internal.Matrix4x3d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        setFloats(arg0: Internal.ByteBuffer_): this;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        m00(arg0: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m32(): number;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZXnY(): this;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub(arg0: Internal.Matrix4x3dc_): this;
        get finite(): boolean
        set fromAddress(arg0: number)
        set translation(arg0: Internal.Vector3dc_)
        set floats(arg0: Internal.ByteBuffer_)
    }
    type Matrix4x3d_ = Matrix4x3d;
    class BeaconBlock extends Internal.BaseEntityBlock implements Internal.BeaconBeamBlock {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type BeaconBlock_ = BeaconBlock;
    class Matrix4x3f implements Internal.Matrix4x3fc, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Vector3fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        mapYXnZ(arg0: Internal.Matrix4x3f_): this;
        set(arg0: Internal.Matrix4fc_): this;
        rotationZ(arg0: number): this;
        billboardSpherical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapnYnXZ(arg0: Internal.Matrix4x3f_): this;
        mapYnXnZ(arg0: Internal.Matrix4x3f_): this;
        reflection(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnYnZnX(): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3f_): this;
        lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapYZnX(): this;
        m31(arg0: number): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        mapnYnXnZ(arg0: Internal.Matrix4x3f_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        m31(): number;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        m20(arg0: number): this;
        mapYnZnX(): this;
        mapnZnYX(arg0: Internal.Matrix4x3f_): this;
        setColumn(arg0: number, arg1: Internal.Vector3fc_): this;
        setLookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4x3f_): this;
        cofactor3x3(arg0: Internal.Matrix4x3f_): this;
        rotationY(arg0: number): this;
        cofactor3x3(arg0: Matrix3f_): Matrix3f;
        arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapZnYX(): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4x3f_): this;
        m20(): number;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3fc_, arg5: Internal.Matrix4x3f_): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        get(arg0: Matrix4f_): Matrix4f;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        transform(arg0: Vec4f_): Vec4f;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m32(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3f_): this;
        mapnYZnX(arg0: Internal.Matrix4x3f_): this;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        m32(): number;
        getScale(arg0: Vector3f_): Vector3f;
        rotateYXZ(arg0: Vector3f_): this;
        set3x3(arg0: Internal.Matrix3fc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix4x3f_): this;
        normal(arg0: Internal.Matrix4x3f_): this;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        m21(arg0: number): this;
        mulOrtho(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        normal(arg0: Matrix3f_): Matrix3f;
        get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        add(arg0: Internal.Matrix4x3fc_): this;
        mapnXZnY(arg0: Internal.Matrix4x3f_): this;
        getRotation(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        mapnYXZ(arg0: Internal.Matrix4x3f_): this;
        mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        m21(): number;
        normalize3x3(arg0: Internal.Matrix4x3f_): this;
        cofactor3x3(): this;
        mapnYnXnZ(): this;
        isFinite(): boolean;
        reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapZYnX(): this;
        shadow(arg0: Internal.Vector4fc_, arg1: Internal.Matrix4x3fc_, arg2: Internal.Matrix4x3f_): this;
        transpose3x3(): this;
        m10(arg0: number): this;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_, arg4: Internal.Matrix4x3fc_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        m10(): number;
        mulComponentWise(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        invertOrtho(arg0: Internal.Matrix4x3f_): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        rotateX(arg0: number, arg1: Internal.Matrix4x3f_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        withLookAtUp(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        m22(arg0: number): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        mapYnZnX(arg0: Internal.Matrix4x3f_): this;
        mapnZnYX(): this;
        get(arg0: Internal.Matrix4x3f_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        mapYnXZ(arg0: Internal.Matrix4x3f_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number): this;
        transpose3x3(arg0: Matrix3f_): Matrix3f;
        scale(arg0: number, arg1: Internal.Matrix4x3f_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m22(): number;
        getToAddress(arg0: number): Internal.Matrix4x3fc;
        mapXnZnY(arg0: Internal.Matrix4x3f_): this;
        m11(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4x3f_): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapZXnY(): this;
        zero(): this;
        mapYnXnZ(): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m11(): number;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mulComponentWise(arg0: Internal.Matrix4x3fc_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        mapZnXY(): this;
        mapnXnZnY(arg0: Internal.Matrix4x3f_): this;
        translate(arg0: Internal.Vector3fc_): this;
        mapnYZnX(): this;
        setLookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        m00(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translation(arg0: Internal.Vector3fc_): this;
        translationRotateScaleMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4x3f_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3f_): this;
        m00(): number;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapYnZX(arg0: Internal.Matrix4x3f_): this;
        lerp(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        assume(arg0: number): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Vector3f_, arg7: Vector3f_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnZYnX(arg0: Internal.Matrix4x3f_): this;
        m12(): number;
        get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        translationRotate(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        normalizedPositiveX(arg0: Vector3f_): Vector3f;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        mapXZnY(): this;
        mapZYnX(arg0: Internal.Matrix4x3f_): this;
        getColumn(arg0: number, arg1: Vector3f_): Vector3f;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        get(arg0: number[], arg1: number): number[];
        mapnXYnZ(arg0: Internal.Matrix4x3f_): this;
        mapZYX(arg0: Internal.Matrix4x3f_): this;
        mapnXnYnZ(arg0: Internal.Matrix4x3f_): this;
        m01(): number;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        setFromAddress(arg0: number): this;
        mapnYnZnX(arg0: Internal.Matrix4x3f_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Vec4f_): Vec4f;
        mapZXnY(arg0: Internal.Matrix4x3f_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        scaling(arg0: number, arg1: number, arg2: number): this;
        normalizedPositiveY(arg0: Vector3f_): Vector3f;
        billboardCylindrical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        mapnXnZnY(): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        mapYZnX(arg0: Internal.Matrix4x3f_): this;
        mapnZXnY(arg0: Internal.Matrix4x3f_): this;
        mapnYXnZ(): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        mapnXZnY(): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        mapXnZnY(): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3f_): this;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        m02(): number;
        mapYnXZ(): this;
        normalizedPositiveZ(arg0: Vector3f_): Vector3f;
        mapZXY(arg0: Internal.Matrix4x3f_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getEulerAnglesZYX(arg0: Vector3f_): Vector3f;
        positiveX(arg0: Vector3f_): Vector3f;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mulOrtho(arg0: Internal.Matrix4x3fc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZnXnY(arg0: Internal.Matrix4x3f_): this;
        mapnYZX(): this;
        rotateXYZ(arg0: Vector3f_): this;
        mapnXZY(): this;
        mapnXnZY(): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        mapZnYnX(arg0: Internal.Matrix4x3f_): this;
        m30(arg0: number): this;
        mapYXZ(arg0: Internal.Matrix4x3f_): this;
        rotateZYX(arg0: Vector3f_): this;
        mapnZnXY(): this;
        rotationAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number): this;
        mapZnXnY(arg0: Internal.Matrix4x3f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        normalize3x3(): this;
        set(arg0: Internal.FloatBuffer_): this;
        mapnZnYnX(arg0: Internal.Matrix4x3f_): this;
        positiveY(arg0: Vector3f_): Vector3f;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get4x4(arg0: number[]): number[];
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getEulerAnglesXYZ(arg0: Vector3f_): Vector3f;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        determineProperties(): this;
        transformPosition(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        negateZ(arg0: Internal.Matrix4x3f_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        rotateLocalZ(arg0: number): this;
        scale(arg0: number): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapXZY(arg0: Internal.Matrix4x3f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapnYnZX(): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaternionfc_): this;
        invert(): this;
        positiveZ(arg0: Vector3f_): Vector3f;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnXnZY(arg0: Internal.Matrix4x3f_): this;
        setRow(arg0: number, arg1: Internal.Vector4fc_): this;
        scale(arg0: Internal.Vector3fc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3f_): this;
        mapnYZX(arg0: Internal.Matrix4x3f_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        mapXnZY(arg0: Internal.Matrix4x3f_): this;
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        get4x4(arg0: number[], arg1: number): number[];
        set(arg0: number[], arg1: number): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        set(arg0: Internal.Quaterniondc_): this;
        mapYnZX(): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnYZ(): this;
        rotateLocalY(arg0: number): this;
        withLookAtUp(arg0: Internal.Vector3fc_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        mapnXZY(arg0: Internal.Matrix4x3f_): this;
        mapXnYnZ(): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3f_): this;
        getTransposed(arg0: number[]): number[];
        set(arg0: Internal.AxisAngle4d_): this;
        mapXnZY(): this;
        equals(arg0: Internal.Matrix4x3fc_, arg1: number): boolean;
        rotation(arg0: Internal.AxisAngle4f_): this;
        mapnZYX(): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        negateX(arg0: Internal.Matrix4x3f_): this;
        get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateY(arg0: number): this;
        invert(arg0: Internal.Matrix4x3f_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3f_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Quaternionfc_): this;
        mapYXZ(): this;
        rotateLocalX(arg0: number): this;
        set(arg0: number[]): this;
        scaleXY(arg0: number, arg1: number): this;
        transformPosition(arg0: Vector3f_): Vector3f;
        reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_): this;
        transformDirection(arg0: Vector3f_): Vector3f;
        lerp(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3f_): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnXnYnZ(): this;
        get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Internal.Vector3fc_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        rotateZ(arg0: number): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        swap(arg0: Internal.Matrix4x3f_): this;
        scaling(arg0: Internal.Vector3fc_): this;
        scaling(arg0: number): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        negateY(arg0: Internal.Matrix4x3f_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        translateLocal(arg0: Internal.Vector3fc_): this;
        translationRotateScaleMul(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4x3f_): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapYZX(arg0: Internal.Matrix4x3f_): this;
        mapXnYnZ(arg0: Internal.Matrix4x3f_): this;
        getTransposed(arg0: number[], arg1: number): number[];
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        scale(arg0: number, arg1: number, arg2: number): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        obliqueZ(arg0: number, arg1: number): this;
        billboardSpherical(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        mapZnYnX(): this;
        normal(): this;
        invertOrtho(): this;
        get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        negateY(): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        reflection(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m12(arg0: number): this;
        frustumPlane(arg0: number, arg1: Vec4f_): Vec4f;
        translationRotateMul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.Matrix4x3fc_): this;
        mapZXY(): this;
        mapXZY(): this;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        get(arg0: number[]): number[];
        mapnZXY(): this;
        get4x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        m01(arg0: number): this;
        mapnZnXnY(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        negateX(): this;
        clone(): any;
        invert(arg0: Matrix4f_): Matrix4f;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnYnZX(arg0: Internal.Matrix4x3f_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        identity(): this;
        rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        mapnZnXY(arg0: Internal.Matrix4x3f_): this;
        rotateX(arg0: number): this;
        scale(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3f_): this;
        properties(): number;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        mapYZX(): this;
        m02(arg0: number): this;
        mapZnXnY(): this;
        mapnYnXZ(): this;
        mapnYXZ(): this;
        mapnZYX(arg0: Internal.Matrix4x3f_): this;
        mapZnXY(arg0: Internal.Matrix4x3f_): this;
        sub(arg0: Internal.Matrix4x3fc_): this;
        translationRotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_): this;
        fma(arg0: Internal.Matrix4x3fc_, arg1: number): this;
        normalize3x3(arg0: Matrix3f_): Matrix3f;
        rotationX(arg0: number): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        get4x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZnYX(arg0: Internal.Matrix4x3f_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3f_): this;
        mapnXnYZ(arg0: Internal.Matrix4x3f_): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3f_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        mapYXnZ(): this;
        set(arg0: Internal.AxisAngle4f_): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3f_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        determinant(): number;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3f_): this;
        mapZYX(): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        setTranslation(arg0: Internal.Vector3fc_): this;
        set3x3(arg0: Internal.Matrix4x3fc_): this;
        rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3f_): this;
        mapnYXnZ(arg0: Internal.Matrix4x3f_): this;
        mapXZnY(arg0: Internal.Matrix4x3f_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        negateZ(): this;
        reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        shadow(arg0: Internal.Vector4fc_, arg1: Internal.Matrix4x3fc_): this;
        transpose3x3(arg0: Internal.Matrix4x3f_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3f_): this;
        mapnZYnX(): this;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        origin(arg0: Vector3f_): Vector3f;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXnY(): this;
        m30(): number;
        transformAab(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vector3f_, arg3: Vector3f_): this;
        rotationTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        getTranslation(arg0: Vector3f_): Vector3f;
        get finite(): boolean
        set fromAddress(arg0: number)
        set translation(arg0: Internal.Vector3fc_)
    }
    type Matrix4x3f_ = Matrix4x3f;
    class GenerateClientAssetsEventJS extends Internal.EventJS {
        constructor(gen: Internal.AssetJsonGenerator_)
        addMultipartBlockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.MultipartBlockStateGenerator>): void;
        add(location: ResourceLocation_, json: Internal.JsonElement_): void;
        defaultItemModel(id: ResourceLocation_): void;
        addLang(key: string, value: string): void;
        addBlockState(id: ResourceLocation_, consumer: Internal.Consumer_<Internal.VariantBlockStateGenerator>): void;
        stencil(target: ResourceLocation_, stencil: string, colors: Internal.JsonObject_): void;
        addModel(type: string, id: ResourceLocation_, consumer: Internal.Consumer_<Internal.ModelGenerator>): void;
        defaultHandheldItemModel(id: ResourceLocation_): void;
        readonly generator: Internal.AssetJsonGenerator;
    }
    type GenerateClientAssetsEventJS_ = GenerateClientAssetsEventJS;
    class Inventory implements Internal.Container, Internal.Nameable {
        constructor(arg0: Player_)
        stopOpen(arg0: Player_): void;
        removeFromSelected(arg0: boolean): Internal.ItemStack;
        getSlotWithRemainingSpace(arg0: Internal.ItemStack_): number;
        add(arg0: number, arg1: Internal.ItemStack_): boolean;
        static tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        static getSelectionSize(): number;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        dropAll(): void;
        add(arg0: Internal.ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        placeItemBackInInventory(arg0: Internal.ItemStack_): void;
        setChanged(): void;
        handler$dfo000$moonlight$fireDropEvent(ci: Internal.CallbackInfo_, var1: Internal.Iterator_<any>, list: Internal.List_<any>, i: number): void;
        contains(arg0: Internal.TagKey_<Internal.Item>): boolean;
        setPickedItem(arg0: Internal.ItemStack_): void;
        getContainerSize(): number;
        swapPaint(arg0: number): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        replaceWith(arg0: Internal.Inventory_): void;
        getName(): Internal.Component;
        getSuitableHotbarSlot(): number;
        kjs$self(): Internal.Container;
        findSlotMatchingItem(arg0: Internal.ItemStack_): number;
        load(arg0: Internal.ListTag_): void;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getArmor(arg0: number): Internal.ItemStack;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        getDestroySpeed(arg0: Internal.BlockState_): number;
        hasCustomName(): boolean;
        tick(): void;
        removeItem(arg0: Internal.ItemStack_): void;
        handler$dfo000$moonlight$restoreNotDropped(ci: Internal.CallbackInfo_, var1: Internal.Iterator_<any>, list: Internal.List_<any>, i: number): void;
        getItem(arg0: number): Internal.ItemStack;
        getSelected(): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getCustomName(): Internal.Component;
        getDisplayName(): Internal.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        clearOrCountMatchingItems(arg0: Internal.Predicate_<Internal.ItemStack>, arg1: number, arg2: Internal.Container_): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number, arg2: number[]): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<any>): boolean;
        countNonEmpty(): number;
        hasRemainingSpaceForItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asContainer(): Internal.Container;
        save(arg0: Internal.ListTag_): Internal.ListTag;
        getAllItems(): Internal.List<Internal.ItemStack>;
        fillStackedContents(arg0: Internal.StackedContents_): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        addResource(arg0: number, arg1: Internal.ItemStack_): number;
        stillValid(arg0: Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getTimesChanged(): number;
        static isHotbarSlot(arg0: number): boolean;
        placeItemBackInInventory(arg0: Internal.ItemStack_, arg1: boolean): void;
        contains(arg0: Internal.ItemStack_): boolean;
        pickSlot(arg0: number): void;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        clearContent(): void;
        findSlotMatchingUnusedItem(arg0: Internal.ItemStack_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getFreeSlot(): number;
        get selectionSize(): number
        get slots(): number
        set pickedItem(arg0: Internal.ItemStack_)
        get containerSize(): number
        get name(): Internal.Component
        get suitableHotbarSlot(): number
        get width(): number
        get maxStackSize(): number
        get selected(): Internal.ItemStack
        get customName(): Internal.Component
        get displayName(): Internal.Component
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get timesChanged(): number
        get mutable(): boolean
        get freeSlot(): number
        readonly armor: Internal.NonNullList<Internal.ItemStack>;
        readonly player: Player;
        static readonly INVENTORY_SIZE: 36;
        static readonly SLOT_OFFHAND: 40;
        readonly offhand: Internal.NonNullList<Internal.ItemStack>;
        static readonly NOT_FOUND_INDEX: -1;
        static readonly ALL_ARMOR_SLOTS: number[];
        static readonly HELMET_SLOT_ONLY: number[];
        selected: number;
        static readonly POP_TIME_DURATION: 5;
        readonly items: Internal.NonNullList<Internal.ItemStack>;
    }
    type Inventory_ = Inventory;
    class EffectGhost_Sickness extends Internal.MobEffect {
        constructor()
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
    }
    type EffectGhost_Sickness_ = EffectGhost_Sickness;
    class ChorusFruitItem extends Internal.Item {
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
    type ChorusFruitItem_ = ChorusFruitItem;
    class Player$BedSleepingProblem extends Internal.Enum<Internal.Player$BedSleepingProblem> {
        static values(): Internal.Player$BedSleepingProblem[];
        getMessage(): Internal.Component;
        static valueOf(arg0: string): Internal.Player$BedSleepingProblem;
        get message(): Internal.Component
        static readonly NOT_POSSIBLE_HERE: Internal.Player$BedSleepingProblem;
        static readonly OTHER_PROBLEM: Internal.Player$BedSleepingProblem;
        static readonly NOT_SAFE: Internal.Player$BedSleepingProblem;
        static readonly NOT_POSSIBLE_NOW: Internal.Player$BedSleepingProblem;
        static readonly OBSTRUCTED: Internal.Player$BedSleepingProblem;
        static readonly TOO_FAR_AWAY: Internal.Player$BedSleepingProblem;
    }
    type Player$BedSleepingProblem_ = "obstructed" | "too_far_away" | Player$BedSleepingProblem | "not_possible_here" | "not_possible_now" | "not_safe" | "other_problem";
    class ISSKJSUtils$DamageTypeHolder extends Internal.Record implements Internal.ISSKJSUtils$ResourceHolder<Internal.ISSKJSUtils$DamageTypeHolder> {
        constructor(getLocation: ResourceLocation_)
        static of<T extends Internal.ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: Internal.Function_<ResourceLocation, T>): T;
        getLocation(): ResourceLocation;
        static of(o: any): Internal.ISSKJSUtils$DamageTypeHolder;
        get location(): ResourceLocation
    }
    type ISSKJSUtils$DamageTypeHolder_ = Special.DamageType | ISSKJSUtils$DamageTypeHolder;
    interface DoubleBidirectionalIterator extends Internal.DoubleIterator, Internal.ObjectBidirectionalIterator<number> {
        forEachRemaining(arg0: any): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): void;
        skip(arg0: number): number;
        /**
         * @deprecated
        */
        previous(): number;
        /**
         * @deprecated
        */
        next(): number;
        abstract nextDouble(): number;
        abstract previousDouble(): number;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract hasPrevious(): boolean;
        remove(): void;
        forEachRemaining(arg0: Internal.DoubleConsumer_): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
    }
    type DoubleBidirectionalIterator_ = DoubleBidirectionalIterator;
    class RegisterClientReloadListenersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ReloadableResourceManager_)
        registerReloadListener(arg0: Internal.PreparableReloadListener_): void;
    }
    type RegisterClientReloadListenersEvent_ = RegisterClientReloadListenersEvent;
    class DifficultyInstance {
        constructor(arg0: Internal.Difficulty_, arg1: number, arg2: number, arg3: number)
        getDifficulty(): Internal.Difficulty;
        isHard(): boolean;
        getEffectiveDifficulty(): number;
        isHarderThan(arg0: number): boolean;
        getSpecialMultiplier(): number;
        get difficulty(): Internal.Difficulty
        get hard(): boolean
        get effectiveDifficulty(): number
        get specialMultiplier(): number
    }
    type DifficultyInstance_ = DifficultyInstance;
    interface UnitVariables {
        abstract getVariables(): Internal.VariableSet;
        get variables(): Internal.VariableSet
        (): Internal.VariableSet_;
    }
    type UnitVariables_ = UnitVariables;
    class BlockKeyRecipeType <C extends Internal.LycheeContext, T extends Internal.LycheeRecipe<C> & Internal.BlockKeyRecipe<any>> extends Internal.LycheeRecipeType<C, T> {
        constructor(arg0: string, arg1: T, arg2: Internal.LootContextParamSet_)
        process(arg0: Player_, arg1: Internal.InteractionHand_, arg2: BlockPos_, arg3: Vec3d_, arg4: Internal.LycheeContext$Builder_<C>): Internal.Optional<T>;
        blockKeysToItems(): Internal.List<Internal.ItemStack>;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        mergeAnyBlockRecipes(arg0: Internal.Collection_<T>): Internal.Iterable<T>;
        has(arg0: Internal.BlockState_): boolean;
        has(arg0: Internal.Block_): boolean;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        process(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.Supplier_<C>): snownee.lychee.util.Pair<C, T>;
        extractChance: boolean;
    }
    type BlockKeyRecipeType_<C extends Internal.LycheeContext, T extends Internal.LycheeRecipe<C> & Internal.BlockKeyRecipe<any>> = BlockKeyRecipeType<C, T>;
    class OffsetTime implements Internal.Comparable<Internal.OffsetTime>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getHour(): number;
        minusHours(arg0: number): this;
        toLocalTime(): Internal.LocalTime;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        isBefore(arg0: Internal.OffsetTime_): boolean;
        plusHours(arg0: number): this;
        compareTo(arg0: any): number;
        getMinute(): number;
        minusMinutes(arg0: number): this;
        isEqual(arg0: Internal.OffsetTime_): boolean;
        static now(arg0: Internal.Clock_): Internal.OffsetTime;
        compareTo(arg0: Internal.OffsetTime_): number;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.OffsetTime;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        toEpochSecond(arg0: Internal.LocalDate_): number;
        plusNanos(arg0: number): this;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        minusSeconds(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        withMinute(arg0: number): this;
        format(arg0: Internal.DateTimeFormatter_): string;
        static of(arg0: Internal.LocalTime_, arg1: Internal.ZoneOffset_): Internal.OffsetTime;
        static from(arg0: Internal.TemporalAccessor_): Internal.OffsetTime;
        atDate(arg0: Internal.LocalDate_): Internal.OffsetDateTime;
        static parse(arg0: Internal.CharSequence_): Internal.OffsetTime;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        withNano(arg0: number): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.OffsetTime;
        withOffsetSameInstant(arg0: Internal.ZoneOffset_): this;
        plusMinutes(arg0: number): this;
        plusSeconds(arg0: number): this;
        withHour(arg0: number): this;
        withSecond(arg0: number): this;
        getLong(arg0: Internal.TemporalField_): number;
        static now(arg0: Internal.ZoneId_): Internal.OffsetTime;
        withOffsetSameLocal(arg0: Internal.ZoneOffset_): this;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        minus(arg0: Internal.TemporalAmount_): this;
        getOffset(): Internal.ZoneOffset;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.ZoneOffset_): Internal.OffsetTime;
        isAfter(arg0: Internal.OffsetTime_): boolean;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getSecond(): number;
        getNano(): number;
        plus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        static now(): Internal.OffsetTime;
        minusNanos(arg0: number): this;
        get hour(): number
        get minute(): number
        get offset(): Internal.ZoneOffset
        get second(): number
        get nano(): number
        static readonly MAX: Internal.OffsetTime;
        static readonly MIN: Internal.OffsetTime;
    }
    type OffsetTime_ = OffsetTime;
    class Suggestions {
        constructor(arg0: Internal.StringRange_, arg1: Internal.List_<Internal.Suggestion>)
        static create(arg0: string, arg1: Internal.Collection_<Internal.Suggestion>): Internal.Suggestions;
        static merge(arg0: string, arg1: Internal.Collection_<Internal.Suggestions>): Internal.Suggestions;
        getList(): Internal.List<Internal.Suggestion>;
        static empty(): Internal.CompletableFuture<Internal.Suggestions>;
        isEmpty(): boolean;
        getRange(): Internal.StringRange;
        get list(): Internal.List<Internal.Suggestion>
        get empty(): boolean
        get range(): Internal.StringRange
    }
    type Suggestions_ = Suggestions;
    class ICurio$SoundInfo extends Internal.Record {
        constructor(soundEvent: Internal.SoundEvent_, volume: number, pitch: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getVolume(): number;
        pitch(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getPitch(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getSoundEvent(): Internal.SoundEvent;
        soundEvent(): Internal.SoundEvent;
        volume(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get volume(): number
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get pitch(): number
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get soundEvent(): Internal.SoundEvent
    }
    type ICurio$SoundInfo_ = ICurio$SoundInfo;
    class TelemetryProperty <T> extends Internal.Record {
        constructor(arg0: string, arg1: string, arg2: Internal.Codec_<T>, arg3: Internal.TelemetryProperty$Exporter_<T>)
        static gameLoadMeasurement(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static longSamples(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.LongList>;
        static uuid(arg0: string, arg1: string): Internal.TelemetryProperty<Internal.UUID>;
        static makeLong(arg0: string, arg1: string): Internal.TelemetryProperty<number>;
        export(arg0: Internal.TelemetryPropertyMap_, arg1: Internal.TelemetryPropertyContainer_): void;
        exportKey(): string;
        id(): string;
        static bool(arg0: string, arg1: string): Internal.TelemetryProperty<boolean>;
        exporter(): Internal.TelemetryProperty$Exporter<T>;
        codec(): Internal.Codec<T>;
        static integer(arg0: string, arg1: string): Internal.TelemetryProperty<number>;
        title(): Internal.MutableComponent;
        static string(arg0: string, arg1: string): Internal.TelemetryProperty<string>;
        static create<T>(arg0: string, arg1: string, arg2: Internal.Codec_<T>, arg3: Internal.TelemetryProperty$Exporter_<T>): Internal.TelemetryProperty<T>;
        static readonly GAME_MODE: Internal.TelemetryProperty<Internal.TelemetryProperty$GameMode>;
        static readonly NUMBER_OF_SAMPLES: Internal.TelemetryProperty<number>;
        static readonly EVENT_TIMESTAMP_UTC: Internal.TelemetryProperty<Internal.Instant>;
        static readonly SERVER_MODDED: Internal.TelemetryProperty<boolean>;
        static readonly OPT_IN: Internal.TelemetryProperty<boolean>;
        static readonly NEW_WORLD: Internal.TelemetryProperty<boolean>;
        static readonly MINECRAFT_SESSION_ID: Internal.TelemetryProperty<Internal.UUID>;
        static readonly WORLD_LOAD_TIME_MS: Internal.TelemetryProperty<number>;
        static readonly ADVANCEMENT_ID: Internal.TelemetryProperty<string>;
        static readonly LOAD_TIME_BOOTSTRAP_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly DEDICATED_MEMORY_KB: Internal.TelemetryProperty<number>;
        static readonly CLIENT_ID: Internal.TelemetryProperty<string>;
        static readonly SECONDS_SINCE_LOAD: Internal.TelemetryProperty<number>;
        static readonly CLIENT_MODDED: Internal.TelemetryProperty<boolean>;
        static readonly FRAME_RATE_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly GAME_VERSION: Internal.TelemetryProperty<string>;
        static readonly REALMS_MAP_CONTENT: Internal.TelemetryProperty<string>;
        static readonly OPERATING_SYSTEM: Internal.TelemetryProperty<string>;
        static readonly PLATFORM: Internal.TelemetryProperty<string>;
        static readonly RENDER_TIME_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly LOAD_TIME_TOTAL_TIME_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly LOAD_TIME_PRE_WINDOW_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
        static readonly LAUNCHER_NAME: Internal.TelemetryProperty<string>;
        static readonly RENDER_DISTANCE: Internal.TelemetryProperty<number>;
        static readonly WORLD_SESSION_ID: Internal.TelemetryProperty<Internal.UUID>;
        static readonly USER_ID: Internal.TelemetryProperty<string>;
        static readonly SERVER_TYPE: Internal.TelemetryProperty<Internal.TelemetryProperty$ServerType>;
        static readonly USED_MEMORY_SAMPLES: Internal.TelemetryProperty<Internal.LongList>;
        static readonly TICKS_SINCE_LOAD: Internal.TelemetryProperty<number>;
        static readonly ADVANCEMENT_GAME_TIME: Internal.TelemetryProperty<number>;
        static readonly LOAD_TIME_LOADING_OVERLAY_MS: Internal.TelemetryProperty<Internal.GameLoadTimesEvent$Measurement>;
    }
    type TelemetryProperty_<T> = TelemetryProperty<T>;
    class PlayTagWithOtherKids {
        constructor()
        static create(): Internal.BehaviorControl<Internal.PathfinderMob>;
    }
    type PlayTagWithOtherKids_ = PlayTagWithOtherKids;
    interface Codec$ResultFunction <A> {
        abstract apply<T>(arg0: Internal.DynamicOps_<T>, arg1: T, arg2: Internal.DataResult_<com.mojang.datafixers.util.Pair<A, T>>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        abstract coApply<T>(arg0: Internal.DynamicOps_<T>, arg1: A, arg2: Internal.DataResult_<T>): Internal.DataResult<T>;
    }
    type Codec$ResultFunction_<A> = Codec$ResultFunction<A>;
    class LootPoolEntryType extends Internal.SerializerType<Internal.LootPoolEntryContainer> {
        constructor(arg0: Internal.Serializer_<Internal.LootPoolEntryContainer>)
    }
    type LootPoolEntryType_ = LootPoolEntryType | Special.LootPoolEntryType;
    class LivingEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_)
    }
    type LivingEvent_ = LivingEvent;
    class RandomState {
        router(): Internal.NoiseRouter;
        aquiferRandom(): Internal.PositionalRandomFactory;
        static create(arg0: Internal.HolderGetter$Provider_, arg1: Internal.ResourceKey_<Internal.NoiseGeneratorSettings>, arg2: number): Internal.RandomState;
        oreRandom(): Internal.PositionalRandomFactory;
        static create(arg0: Internal.NoiseGeneratorSettings_, arg1: Internal.HolderGetter_<Internal.NormalNoise$NoiseParameters>, arg2: number): Internal.RandomState;
        sampler(): Internal.Climate$Sampler;
        surfaceSystem(): Internal.SurfaceSystem;
        getOrCreateRandomFactory(arg0: ResourceLocation_): Internal.PositionalRandomFactory;
        getOrCreateNoise(arg0: Internal.ResourceKey_<Internal.NormalNoise$NoiseParameters>): Internal.NormalNoise;
        readonly random: Internal.PositionalRandomFactory;
    }
    type RandomState_ = RandomState;
    class InTagCondition extends io.github.edwinmindcraft.apoli.api.power.factory.BiomeCondition<Internal.FieldConfiguration<Internal.TagKey<Internal.Biome>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Holder_<any>): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.FieldConfiguration_<Internal.TagKey<Internal.Biome>>, arg1: Internal.Holder_<Internal.Biome>): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type InTagCondition_ = InTagCondition;
    interface Point2i {
        abstract y(): number;
        abstract x(): number;
        readonly ZERO: Internal.Point2i;
    }
    type Point2i_ = Point2i;
    class ISSKJSUtils$SpellHolder extends Internal.Record implements Internal.ISSKJSUtils$ResourceHolder<Internal.ISSKJSUtils$SpellHolder> {
        constructor(getLocation: ResourceLocation_)
        static of<T extends Internal.ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: Internal.Function_<ResourceLocation, T>): T;
        getLocation(): ResourceLocation;
        static of(o: any): Internal.ISSKJSUtils$SpellHolder;
        get location(): ResourceLocation
    }
    type ISSKJSUtils$SpellHolder_ = ISSKJSUtils$SpellHolder | Special.Spells;
    class HugeRedMushroomFeature extends Internal.AbstractHugeMushroomFeature {
        constructor(arg0: Internal.Codec_<Internal.HugeMushroomFeatureConfiguration>)
    }
    type HugeRedMushroomFeature_ = HugeRedMushroomFeature;
    class LootBonusEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: Internal.EnchantmentCategory_, ...arg2: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type LootBonusEnchantment_ = LootBonusEnchantment;
    class ArmorItemBuilder$Helmet extends Internal.ArmorItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type ArmorItemBuilder$Helmet_ = ArmorItemBuilder$Helmet;
    class DamageSourcePredicate {
        constructor(arg0: Internal.List_<Internal.TagPredicate<Internal.DamageType>>, arg1: Internal.EntityPredicate_, arg2: Internal.EntityPredicate_)
        serializeToJson(): Internal.JsonElement;
        static fromJson(arg0: Internal.JsonElement_): Internal.DamageSourcePredicate;
        matches(arg0: Internal.ServerPlayer_, arg1: DamageSource_): boolean;
        matches(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: DamageSource_): boolean;
        static readonly ANY: Internal.DamageSourcePredicate;
    }
    type DamageSourcePredicate_ = DamageSourcePredicate;
    class RenderStateShard$WriteMaskStateShard extends Internal.RenderStateShard {
        constructor(arg0: boolean, arg1: boolean)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$WriteMaskStateShard_ = RenderStateShard$WriteMaskStateShard;
    class CherryTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.IntProvider_, arg4: Internal.IntProvider_, arg5: Internal.UniformInt_, arg6: Internal.IntProvider_)
        static readonly CODEC: Internal.Codec<Internal.CherryTrunkPlacer>;
    }
    type CherryTrunkPlacer_ = CherryTrunkPlacer;
    class DamageItemAction extends Internal.ItemAction<Internal.DamageItemConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.DamageItemConfiguration_, arg1: Internal.Level_, arg2: Internal.Mutable_<Internal.ItemStack>): void;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DamageItemAction_ = DamageItemAction;
    abstract class AbstractSet <E> extends Internal.AbstractCollection<E> implements Internal.Set<E> {
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
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type AbstractSet_<E> = AbstractSet<E>;
    class ClampedInt extends Internal.IntProvider {
        constructor(arg0: Internal.IntProvider_, arg1: number, arg2: number)
        static of(arg0: Internal.IntProvider_, arg1: number, arg2: number): Internal.ClampedInt;
        static readonly CODEC: Internal.Codec<Internal.ClampedInt>;
    }
    type ClampedInt_ = ClampedInt;
    interface NameMutableDamageSource {
        abstract setName(arg0: string): void;
        set name(arg0: string)
        (arg0: string): void;
    }
    type NameMutableDamageSource_ = NameMutableDamageSource;
    class SculkBlock extends Internal.DropExperienceBlock implements Internal.SculkBehaviour {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onDischarged(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
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
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canChangeBlockStateOnSpread(): boolean;
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
        depositCharge(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getSculkSpreadDelay(): number;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        attemptSpreadVein(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>, arg4: boolean): boolean;
        attemptUseCharge(arg0: Internal.SculkSpreader$ChargeCursor_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.SculkSpreader_, arg5: boolean): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateDecayDelay(arg0: number): number;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get sculkSpreadDelay(): number
        get mod(): string
    }
    type SculkBlock_ = SculkBlock;
    class CalibratedSculkSensorBlock extends Internal.SculkSensorBlock {
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type CalibratedSculkSensorBlock_ = CalibratedSculkSensorBlock;
    class Dynamic2CommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: any_)
        createWithContext(arg0: Internal.ImmutableStringReader_, arg1: any, arg2: any): Internal.CommandSyntaxException;
        create(arg0: any, arg1: any): Internal.CommandSyntaxException;
    }
    type Dynamic2CommandExceptionType_ = Dynamic2CommandExceptionType;
    class SimpleBiEntityCondition extends Internal.BiEntityCondition<Internal.NoConfiguration> {
        constructor(arg0: Internal.BiPredicate_<Internal.Entity, Internal.Entity>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static ridingRecursive(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SimpleBiEntityCondition_ = SimpleBiEntityCondition;
    class HumanoidModel$ArmPose extends Internal.Enum<Internal.HumanoidModel$ArmPose> implements Internal.IExtensibleEnum {
        isTwoHanded(): boolean;
        static valueOf(arg0: string): Internal.HumanoidModel$ArmPose;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        applyTransform<T extends Internal.LivingEntity>(arg0: Internal.HumanoidModel_<T>, arg1: T, arg2: Internal.HumanoidArm_): void;
        static values(): Internal.HumanoidModel$ArmPose[];
        static create(arg0: string, arg1: boolean, arg2: Internal.IArmPoseTransformer_): Internal.HumanoidModel$ArmPose;
        get twoHanded(): boolean
        static readonly THROW_SPEAR: Internal.HumanoidModel$ArmPose;
        static readonly BLOCK: Internal.HumanoidModel$ArmPose;
        static readonly SPYGLASS: Internal.HumanoidModel$ArmPose;
        static readonly ITEM: Internal.HumanoidModel$ArmPose;
        static readonly CROSSBOW_CHARGE: Internal.HumanoidModel$ArmPose;
        static readonly TOOT_HORN: Internal.HumanoidModel$ArmPose;
        static readonly CROSSBOW_HOLD: Internal.HumanoidModel$ArmPose;
        static readonly EMPTY: Internal.HumanoidModel$ArmPose;
        static readonly BRUSH: Internal.HumanoidModel$ArmPose;
        static readonly BOW_AND_ARROW: Internal.HumanoidModel$ArmPose;
    }
    type HumanoidModel$ArmPose_ = "toot_horn" | "block" | "irons_spellbooks_staff" | "throw_spear" | "empty" | "brush" | "spyglass" | "crossbow_hold" | "bow_and_arrow" | "crossbow_charge" | HumanoidModel$ArmPose | "item";
    class ModifyRecipeCraftingGrid {
        constructor(c: Internal.CraftingContainer_)
        get(index: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_, skip: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): Internal.ItemStack;
        getMenu(): Internal.AbstractContainerMenu;
        getWidth(): number;
        findAll(): Internal.List<Internal.ItemStack>;
        getPlayer(): Player;
        getHeight(): number;
        findAll(ingredient: Internal.Ingredient_): Internal.List<Internal.ItemStack>;
        get menu(): Internal.AbstractContainerMenu
        get width(): number
        get player(): Player
        get height(): number
    }
    type ModifyRecipeCraftingGrid_ = ModifyRecipeCraftingGrid;
    class FerrocaveStructure extends Internal.AbstractCaveGenerationStructure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.FerrocaveStructure>;
    }
    type FerrocaveStructure_ = FerrocaveStructure;
    abstract class AbstractMinecartContainer extends Internal.AbstractMinecart implements Internal.ContainerEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: number, arg2: number, arg3: number, arg4: Internal.Level_)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        stopOpen(arg0: Player_): void;
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        isChestVehicleEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlopeAdjustment(): number;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
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
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        clearItemStacks(): void;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getItem(arg0: number): Internal.ItemStack;
        getComparatorLevel(): number;
        isInFluid(fluidState: Internal.FluidState_): boolean;
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
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Player_): Internal.AbstractContainerMenu;
        getItemStacks(): Internal.NonNullList<Internal.ItemStack>;
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
        getLootTableSeed(): number;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        countNonEmpty(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        getLootTable(): ResourceLocation;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        clear(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        self(): Internal.Container;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPoweredCart(): boolean;
        static tryClear(arg0: any): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        setLootTableSeed(arg0: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getSlots(): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        abstract getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        interactWithContainerVehicle(arg0: Player_): InteractionResult;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        clearChestVehicleContent(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setLootTable(arg0: ResourceLocation_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        unpackChestVehicleLootTable(arg0: Player_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        setLootTable(arg0: ResourceLocation_, arg1: number): void;
        count(ingredient: Internal.Ingredient_): number;
        setMotionX(x: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_): Internal.AbstractContainerMenu;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getStackInSlot(slot: number): Internal.ItemStack;
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
        stillValid(arg0: Player_): boolean;
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
        runCommand(command: string): number;
        get maxCartSpeedOnRail(): number
        get chestVehicleEmpty(): boolean
        get slopeAdjustment(): number
        get width(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get comparatorLevel(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get itemStacks(): Internal.NonNullList<Internal.ItemStack>
        get teamId(): string
        get facing(): Internal.Direction
        get height(): number
        get lootTableSeed(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get lootTable(): ResourceLocation
        get frame(): boolean
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        set lootTableSeed(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get slots(): number
        get type(): string
        get containerSize(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get maxStackSize(): number
        set lootTable(arg0: ResourceLocation_)
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get currentRailPosition(): BlockPos
        get empty(): boolean
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
    }
    type AbstractMinecartContainer_ = AbstractMinecartContainer;
    class DocumentMethod extends Internal.AbstractDocument<Internal.DocumentMethod> {
        constructor()
        merge(arg0: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        getParams(): Internal.List<Internal.PropertyParam>;
        isAbstract(): boolean;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        copy(): this;
        getReturns(): Internal.PropertyType<any>;
        static fromJava(info: Internal.MethodInfo_): Internal.DocumentMethod;
        merge(other: Internal.DocumentMethod_): this;
        setAbstract(anAbstract: boolean): void;
        getVariables(): Internal.List<Internal.PropertyType<any>>;
        setStatic(aStatic: boolean): void;
        setName(name: string): void;
        getName(): string;
        isStatic(): boolean;
        get params(): Internal.List<Internal.PropertyParam>
        get "abstract"(): boolean
        get returns(): Internal.PropertyType<any>
        set "abstract"(anAbstract: boolean)
        get variables(): Internal.List<Internal.PropertyType<any>>
        set "static"(aStatic: boolean)
        set name(name: string)
        get name(): string
        get "static"(): boolean
        name: string;
        isAbstract: boolean;
        readonly variables: Internal.List<Internal.PropertyType<any>>;
        returns: Internal.PropertyType<any>;
        isStatic: boolean;
        readonly params: Internal.List<Internal.PropertyParam>;
    }
    type DocumentMethod_ = DocumentMethod;
    interface TelemetryPropertyContainer {
        abstract addProperty(arg0: string, arg1: boolean): void;
        abstract addNullProperty(arg0: string): void;
        forJsonObject(arg0: Internal.JsonObject_): this;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: string): void;
    }
    type TelemetryPropertyContainer_ = TelemetryPropertyContainer;
    class AnimationStack implements Internal.IAnimation, Internal.AnimationStackAccessor {
        constructor()
        mobplayeranimator$getLayers(): Internal.ArrayList<any>;
        setupAnim(tickDelta: number): void;
        get3DTransform(modelName: string, type: Internal.TransformType_, tickDelta: number, value0: Internal.Vec3f_): Internal.Vec3f;
        addAnimLayer(priority: number, layer: Internal.IAnimation_): void;
        removeLayer(layerLevel: number): boolean;
        isActive(): boolean;
        getFirstPersonConfiguration(tickDelta: number): Internal.FirstPersonConfiguration;
        removeLayer(layer: Internal.IAnimation_): boolean;
        tick(): void;
        getFirstPersonMode(tickDelta: number): Internal.FirstPersonMode;
        set upAnim(tickDelta: number)
        get active(): boolean
    }
    type AnimationStack_ = AnimationStack;
    interface Fallable {
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
    }
    type Fallable_ = Fallable;
    interface StatePropertiesPredicateAccess {
        abstract getProperties(): Internal.List<Internal.StatePropertiesPredicate$PropertyMatcher>;
        get properties(): Internal.List<Internal.StatePropertiesPredicate$PropertyMatcher>
        (): Internal.List_<Internal.StatePropertiesPredicate$PropertyMatcher>;
    }
    type StatePropertiesPredicateAccess_ = StatePropertiesPredicateAccess;
    class PhasingPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
        static getRenderMethod(arg0: Internal.Entity_, arg1: Internal.PhasingConfiguration$RenderType_): Internal.Optional<number>;
        static shouldPhaseThrough(arg0: Internal.Entity_, arg1: BlockPos_): boolean;
        static shouldPhaseThrough(arg0: Internal.Entity_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>): boolean;
        static hasRenderMethod(arg0: Internal.Entity_, arg1: Internal.PhasingConfiguration$RenderType_): boolean;
        static shouldPhaseThrough(arg0: Internal.Entity_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>, arg4: boolean): boolean;
    }
    type PhasingPower_ = PhasingPower;
    class PotionBuilder extends Internal.BuilderBase<Internal.Potion> {
        constructor(i: ResourceLocation_)
        effect(effect: Internal.MobEffect_, duration: number, amplifier: number): this;
        effect(effect: Internal.MobEffect_): this;
        effect(effect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: Internal.MobEffectInstance_): this;
        createObject(): any;
        effect(effect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, visible: boolean): this;
        effect(effect: Internal.MobEffect_, duration: number): this;
        addEffect(effect: Internal.MobEffectInstance_): this;
        effect(effect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean): this;
    }
    type PotionBuilder_ = PotionBuilder;
    class ArmorItemBuilder$Chestplate extends Internal.ArmorItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type ArmorItemBuilder$Chestplate_ = ArmorItemBuilder$Chestplate;
    interface IUpperPartHelper {
        abstract isUpperPart(): boolean;
        abstract setUpperPart(arg0: boolean): void;
        get upperPart(): boolean
        set upperPart(arg0: boolean)
    }
    type IUpperPartHelper_ = IUpperPartHelper;
    interface IBlockRendererProvider {
        abstract getRenderer(arg0: Internal.BlockState_): Internal.IRenderer;
        getLightMap(world: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_): number;
        getModelState(world: Internal.BlockAndTintGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ModelState;
        (arg0: Internal.BlockState): Internal.IRenderer_;
    }
    type IBlockRendererProvider_ = IBlockRendererProvider;
    class Attribute implements Internal.IFormattableAttribute {
        constructor(arg0: string, arg1: number)
        isClientSyncable(): boolean;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        getDefaultValue(): number;
        sanitizeValue(arg0: number): number;
        setSyncable(arg0: boolean): this;
        static toComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        getDebugInfo(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.Component;
        addBonusTooltips(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.Component>, arg2: Internal.TooltipFlag_): void;
        static isNullOrAddition(arg0: Internal.AttributeModifier$Operation_): boolean;
        getBaseUUID(): Internal.UUID;
        toValueComponent(arg0: Internal.AttributeModifier$Operation_, arg1: number, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        static toValueComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier$Operation_, arg2: number, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        static toBaseComponent(arg0: Internal.Attribute_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.TooltipFlag_): Internal.MutableComponent;
        getDescriptionId(): string;
        toComponent(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.MutableComponent;
        getBonusBaseValue(arg0: Internal.ItemStack_): number;
        ths(): this;
        get clientSyncable(): boolean
        get defaultValue(): number
        set syncable(arg0: boolean)
        get baseUUID(): Internal.UUID
        get descriptionId(): string
        static readonly MAX_NAME_LENGTH: 64;
    }
    type Attribute_ = Attribute | Special.Attribute;
    class LightTrailParticle$OrbData implements Internal.ParticleOptions {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getG(): number;
        getType(): Internal.ParticleType<Internal.LightTrailParticle$OrbData>;
        getentityid(): number;
        getHeight(): number;
        writeToString(): string;
        static CODEC(arg0: Internal.ParticleType_<Internal.LightTrailParticle$OrbData>): Internal.Codec<Internal.LightTrailParticle$OrbData>;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getR(): number;
        getB(): number;
        getWidth(): number;
        get g(): number
        get type(): Internal.ParticleType<Internal.LightTrailParticle$OrbData>
        get entityid(): number
        get height(): number
        get r(): number
        get b(): number
        get width(): number
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.LightTrailParticle$OrbData>;
    }
    type LightTrailParticle$OrbData_ = LightTrailParticle$OrbData;
    class ArrowInfiniteEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type ArrowInfiniteEnchantment_ = ArrowInfiniteEnchantment;
    class Vec3d extends Internal.Vector3<number> {
        constructor(x: number, y: number, z: number)
        distanceTo(vec3d: Internal.Vec3d_): number;
        crossProduct(other: Internal.Vec3d_): this;
        scale(scalar: number): this;
        dotProduct(other: Internal.Vec3d_): number;
        add(other: Internal.Vec3d_): this;
        subtract(rhs: Internal.Vec3d_): this;
        squaredDistanceTo(vec3d: Internal.Vec3d_): number;
    }
    type Vec3d_ = Vec3d;
    class Vec3f extends Internal.Vector3<number> {
        constructor(x: number, y: number, z: number)
        distanceTo(vec3d: Internal.Vec3d_): number;
        crossProduct(other: Internal.Vec3f_): this;
        dotProduct(other: Internal.Vec3f_): number;
        scale(scalar: number): this;
        add(other: Internal.Vec3f_): this;
        subtract(rhs: Internal.Vec3f_): this;
        squaredDistanceTo(vec3d: Internal.Vec3d_): number;
        static readonly ZERO: Internal.Vec3f;
    }
    type Vec3f_ = Vec3f;
    class MudBlock extends Internal.Block {
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
    type MudBlock_ = MudBlock;
    class AnimationPointQueue extends Internal.LinkedList<Internal.AnimationPoint> {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.AnimationPoint>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.AnimationPoint>): void;
        abstract subList(arg0: number, arg1: number): Internal.List<Internal.AnimationPoint>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        abstract listIterator(): Internal.ListIterator<Internal.AnimationPoint>;
        abstract iterator(): Internal.Iterator<Internal.AnimationPoint>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<Internal.AnimationPoint>): void;
        stream(): Internal.Stream<Internal.AnimationPoint>;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<Internal.AnimationPoint>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        parallelStream(): Internal.Stream<Internal.AnimationPoint>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
    }
    type AnimationPointQueue_ = AnimationPointQueue;
    class RenderStateShard$OverlayStateShard extends Internal.RenderStateShard$BooleanStateShard {
        constructor(arg0: boolean)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$OverlayStateShard_ = RenderStateShard$OverlayStateShard;
    class HangingRootsBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly SHAPE: Internal.CubeVoxelShape;
    }
    type HangingRootsBlock_ = HangingRootsBlock;
    interface BaseLivingEntityBuilder$ICustomInstructionListenerJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> {
        abstract executeInstruction(event: Internal.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS_<E>): void;
        (event: Internal.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>): void;
    }
    type BaseLivingEntityBuilder$ICustomInstructionListenerJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$ICustomInstructionListenerJS<E>;
    class EquipableCarvedPumpkinBlock extends Internal.CarvedPumpkinBlock implements Internal.Equipable {
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
        getEquipmentSlot(): Internal.EquipmentSlot;
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
        get equipmentSlot(): Internal.EquipmentSlot
    }
    type EquipableCarvedPumpkinBlock_ = EquipableCarvedPumpkinBlock;
    class ILycheeRecipe$NBTPatchContext extends Internal.Record {
        constructor(template: Internal.JsonObject_, usedIndexes: Internal.IntCollection_, splits: Internal.Object2IntMap_<Internal.JsonPointer>)
        usedIndexes(): Internal.IntCollection;
        countTargets(arg0: Internal.ILycheeRecipe_<any>, arg1: LycheeReference_): number;
        template(): Internal.JsonObject;
        convertPath(arg0: Internal.JsonPointer_, arg1: Internal.BiFunction_<string, string, string>): Internal.JsonPointer;
        countTargets(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_): number;
        splits(): Internal.Object2IntMap<Internal.JsonPointer>;
    }
    type ILycheeRecipe$NBTPatchContext_ = ILycheeRecipe$NBTPatchContext;
    class Manifest implements Internal.Cloneable {
        constructor()
        constructor(arg0: Internal.InputStream_)
        constructor(arg0: Internal.Manifest_)
        clone(): any;
        read(arg0: Internal.InputStream_): void;
        getEntries(): Internal.Map<string, Internal.Attributes>;
        getMainAttributes(): Internal.Attributes;
        clear(): void;
        write(arg0: Internal.OutputStream_): void;
        getAttributes(arg0: string): Internal.Attributes;
        get entries(): Internal.Map<string, Internal.Attributes>
        get mainAttributes(): Internal.Attributes
    }
    type Manifest_ = Manifest;
}
declare namespace com.mojang.datafixers.util {
    class Unit extends Internal.Enum<com.mojang.datafixers.util.Unit> {
        static valueOf(arg0: string): com.mojang.datafixers.util.Unit;
        static values(): com.mojang.datafixers.util.Unit[];
        static readonly INSTANCE: com.mojang.datafixers.util.Unit;
    }
    type Unit_ = "instance" | Unit;
}
