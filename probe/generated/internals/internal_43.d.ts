/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ForgeMod$2 extends Internal.FluidType {
    }
    type ForgeMod$2_ = ForgeMod$2;
    class GrindstoneMenu extends Internal.AbstractContainerMenu implements Internal.PowerModifiedGrindstone {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        getPos(): Internal.Optional<any>;
        getPlayer(): Player;
        getAppliedPowers(): Internal.List<any>;
        get pos(): Internal.Optional<any>
        get player(): Player
        get appliedPowers(): Internal.List<any>
        static readonly INPUT_SLOT: 0;
        static readonly MAX_NAME_LENGTH: 35;
        static readonly RESULT_SLOT: 2;
        apoli$cachedPIndex: number;
        readonly repairSlots: Internal.Container;
        static readonly ADDITIONAL_SLOT: 1;
    }
    type GrindstoneMenu_ = GrindstoneMenu;
    interface IClientFluidTypeExtensions {
        getFlowingTexture(arg0: Internal.FluidStack_): ResourceLocation;
        getFlowingTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        getTintColor(arg0: Internal.FluidStack_): number;
        modifyFogColor(arg0: Internal.Camera_, arg1: number, arg2: Internal.ClientLevel_, arg3: number, arg4: number, arg5: Vector3f_): Vector3f;
        modifyFogRender(arg0: Internal.Camera_, arg1: Internal.FogRenderer$FogMode_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.FogShape_): void;
        getTintColor(): number;
        of(arg0: Internal.FluidState_): this;
        getStillTexture(arg0: Internal.FluidStack_): ResourceLocation;
        getOverlayTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        of(arg0: Internal.Fluid_): this;
        getOverlayTexture(): ResourceLocation;
        getFlowingTexture(): ResourceLocation;
        of(arg0: Internal.FluidType_): this;
        renderOverlay(arg0: Internal.Minecraft_, arg1: Internal.PoseStack_): void;
        getOverlayTexture(arg0: Internal.FluidStack_): ResourceLocation;
        getRenderOverlayTexture(arg0: Internal.Minecraft_): ResourceLocation;
        getStillTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        getTintColor(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getStillTexture(): ResourceLocation;
        get tintColor(): number
        get overlayTexture(): ResourceLocation
        get flowingTexture(): ResourceLocation
        get stillTexture(): ResourceLocation
        readonly DEFAULT: Internal.IClientFluidTypeExtensions;
    }
    type IClientFluidTypeExtensions_ = IClientFluidTypeExtensions;
    class EntityGlowConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(arg0: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>)
        constructor(entityCondition: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>, biEntityCondition: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, useTeams: boolean, color: Internal.ColorConfiguration_)
        biEntityCondition(): Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>;
        isConfigurationValid(): boolean;
        useTeams(): boolean;
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
        applyChecks(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: boolean): boolean;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        color(): Internal.ColorConfiguration;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.EntityGlowConfiguration>;
    }
    type EntityGlowConfiguration_ = EntityGlowConfiguration;
    abstract class ForwardingObject {
    }
    type ForwardingObject_ = ForwardingObject;
    class GluttonyEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        static ratioForAmplifier(arg0: number): number;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        static finishEating(arg0: Internal.LivingEntityUseItemEvent$Finish_): void;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type GluttonyEffect_ = GluttonyEffect;
    class ModifyResourceAction extends Internal.EntityAction<Internal.ModifyResourceConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.ModifyResourceConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ModifyResourceAction_ = ModifyResourceAction;
    interface RenderBuffersExt {
        abstract endLevelRendering(): void;
        abstract beginLevelRendering(): void;
    }
    type RenderBuffersExt_ = RenderBuffersExt;
    class ClickEvent$Action extends Internal.Enum<Internal.ClickEvent$Action> {
        static values(): Internal.ClickEvent$Action[];
        static getByName(arg0: string): Internal.ClickEvent$Action;
        isAllowedFromServer(): boolean;
        getName(): string;
        static valueOf(arg0: string): Internal.ClickEvent$Action;
        get allowedFromServer(): boolean
        get name(): string
        static readonly COPY_TO_CLIPBOARD: Internal.ClickEvent$Action;
        static readonly CHANGE_PAGE: Internal.ClickEvent$Action;
        static readonly OPEN_FILE: Internal.ClickEvent$Action;
        static readonly RUN_COMMAND: Internal.ClickEvent$Action;
        static readonly SUGGEST_COMMAND: Internal.ClickEvent$Action;
        static readonly OPEN_URL: Internal.ClickEvent$Action;
    }
    type ClickEvent$Action_ = "copy_to_clipboard" | "suggest_command" | "open_file" | "change_page" | ClickEvent$Action | "open_url" | "run_command";
    interface LycheeCounter {
        abstract lychee$getCount(): number;
        abstract lychee$setRecipeId(arg0: ResourceLocation_): void;
        lychee$update(arg0: ResourceLocation_, arg1: Internal.Recipe_<any>): void;
        abstract lychee$getRecipeId(): ResourceLocation;
        abstract lychee$setCount(arg0: number): void;
    }
    type LycheeCounter_ = LycheeCounter;
    class Parameter implements Internal.AnnotatedElement {
        getDeclaringInvokable(): Internal.Invokable<any, any>;
        getType(): Internal.TypeToken<any>;
        getAnnotations(): Internal.Annotation[];
        getDeclaredAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getAnnotatedType(): Internal.AnnotatedType;
        getAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        getDeclaredAnnotations(): Internal.Annotation[];
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        getDeclaredAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        get declaringInvokable(): Internal.Invokable<any, any>
        get type(): Internal.TypeToken<any>
        get annotations(): Internal.Annotation[]
        get annotatedType(): Internal.AnnotatedType
        get declaredAnnotations(): Internal.Annotation[]
    }
    type Parameter_ = Parameter;
    class LevelSummary implements Internal.IForgeLevelSummary, Internal.Comparable<Internal.LevelSummary> {
        constructor(arg0: Internal.LevelSettings_, arg1: Internal.LevelVersion_, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Internal.Path_)
        isDisabled(): boolean;
        getLevelId(): string;
        getLastPlayed(): number;
        getSettings(): Internal.LevelSettings;
        compareTo(arg0: Internal.LevelSummary_): number;
        getIcon(): Internal.Path;
        backupStatus(): Internal.LevelSummary$BackupStatus;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isLifecycleExperimental(): boolean;
        getLevelName(): string;
        hasCheats(): boolean;
        requiresManualConversion(): boolean;
        compareTo(arg0: any): number;
        isLocked(): boolean;
        isExperimental(): boolean;
        isCompatible(): boolean;
        getGameMode(): Internal.GameType;
        markVersionInList(): boolean;
        getWorldVersionName(): Internal.MutableComponent;
        isHardcore(): boolean;
        askToOpenWorld(): boolean;
        getInfo(): Internal.Component;
        levelVersion(): Internal.LevelVersion;
        get disabled(): boolean
        get levelId(): string
        get lastPlayed(): number
        get settings(): Internal.LevelSettings
        get icon(): Internal.Path
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get lifecycleExperimental(): boolean
        get levelName(): string
        get locked(): boolean
        get experimental(): boolean
        get compatible(): boolean
        get gameMode(): Internal.GameType
        get worldVersionName(): Internal.MutableComponent
        get hardcore(): boolean
        get info(): Internal.Component
    }
    type LevelSummary_ = LevelSummary;
    class CopyNameFunction$NameSource extends Internal.Enum<Internal.CopyNameFunction$NameSource> {
        static valueOf(arg0: string): Internal.CopyNameFunction$NameSource;
        static values(): Internal.CopyNameFunction$NameSource[];
        static getByName(name: string): Internal.CopyNameFunction$NameSource;
        readonly name: string;
        static readonly BLOCK_ENTITY: Internal.CopyNameFunction$NameSource;
        readonly param: Internal.LootContextParam<any>;
        static readonly KILLER: Internal.CopyNameFunction$NameSource;
        static readonly KILLER_PLAYER: Internal.CopyNameFunction$NameSource;
        static readonly THIS: Internal.CopyNameFunction$NameSource;
    }
    type CopyNameFunction$NameSource_ = "killer" | CopyNameFunction$NameSource | "killer_player" | "this" | "block_entity";
    interface ContainerSynchronizer {
        abstract sendDataChange(arg0: Internal.AbstractContainerMenu_, arg1: number, arg2: number): void;
        abstract sendSlotChange(arg0: Internal.AbstractContainerMenu_, arg1: number, arg2: Internal.ItemStack_): void;
        abstract sendInitialData(arg0: Internal.AbstractContainerMenu_, arg1: Internal.NonNullList_<Internal.ItemStack>, arg2: Internal.ItemStack_, arg3: number[]): void;
        abstract sendCarriedChange(arg0: Internal.AbstractContainerMenu_, arg1: Internal.ItemStack_): void;
    }
    type ContainerSynchronizer_ = ContainerSynchronizer;
    interface IPlaceable <THIS extends Internal.IPlaceable<THIS>> {
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.HorizontalAlignment_, arg5: Internal.VerticalAlignment_): THIS;
        abstract getWidth(): number;
        abstract getHeight(): number;
        abstract setPosition(arg0: number, arg1: number): THIS;
        get width(): number
        get height(): number
    }
    type IPlaceable_<THIS extends Internal.IPlaceable<THIS>> = IPlaceable<THIS>;
    class MobEffectCategory extends Internal.Enum<Internal.MobEffectCategory> {
        static values(): Internal.MobEffectCategory[];
        getTooltipFormatting(): Internal.ChatFormatting;
        static valueOf(arg0: string): Internal.MobEffectCategory;
        get tooltipFormatting(): Internal.ChatFormatting
        static readonly HARMFUL: Internal.MobEffectCategory;
        static readonly BENEFICIAL: Internal.MobEffectCategory;
        static readonly NEUTRAL: Internal.MobEffectCategory;
    }
    type MobEffectCategory_ = "neutral" | MobEffectCategory | "beneficial" | "harmful";
    interface DataObjectFactory <T> {
        abstract fromData(arg0: Internal.SerializableData$Instance_): T;
        abstract getData(): Internal.SerializableData;
        abstract toData(arg0: T): Internal.SerializableData$Instance;
        get data(): Internal.SerializableData
    }
    type DataObjectFactory_<T> = DataObjectFactory<T>;
    class ClampedNormalFloat extends Internal.FloatProvider {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ClampedNormalFloat;
        static sample(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static readonly CODEC: Internal.Codec<Internal.ClampedNormalFloat>;
    }
    type ClampedNormalFloat_ = ClampedNormalFloat;
    interface Char2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<string, V> {
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Char2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2ObjectFunction<V>;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<string, V>;
        remove(arg0: string): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Char2LongFunction;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2ObjectFunction<V>;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: V): V;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, V>;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2ObjectFunction<V>;
        abstract get(arg0: string): V;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Char2ObjectFunction<T>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Char2FloatFunction;
        getOrDefault(arg0: string, arg1: V): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Char2ByteFunction;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2ObjectFunction<V>;
        size(): number;
        apply(arg0: string): V;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Char2DoubleFunction;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Char2IntFunction;
        clear(): void;
        put(arg0: string, arg1: V): V;
        defaultReturnValue(): V;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2ObjectFunction<V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Char2CharFunction;
        (arg0: string): V;
    }
    type Char2ObjectFunction_<V> = Char2ObjectFunction<V>;
    class ModParticle$9 extends Internal.ParticleType<Internal.Rain_Fog_Particle$FogData> {
        codec(): Internal.Codec<Internal.Rain_Fog_Particle$FogData>;
    }
    type ModParticle$9_ = ModParticle$9;
    class ModParticle$8 extends Internal.ParticleType<Internal.Custom_Poof_Particle$PoofData> {
        codec(): Internal.Codec<Internal.Custom_Poof_Particle$PoofData>;
    }
    type ModParticle$8_ = ModParticle$8;
    class ModParticle$7 extends Internal.ParticleType<Internal.CircleLightningParticle$CircleData> {
        codec(): Internal.Codec<Internal.CircleLightningParticle$CircleData>;
    }
    type ModParticle$7_ = ModParticle$7;
    class ModParticle$6 extends Internal.ParticleType<Internal.RoarParticle$RoarData> {
        codec(): Internal.Codec<Internal.RoarParticle$RoarData>;
    }
    type ModParticle$6_ = ModParticle$6;
    class PaintScreenEventJS extends Internal.PaintEventJS implements Internal.UnitVariables {
        constructor(m: Internal.Minecraft_, s: Internal.Screen_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, mx: number, my: number, d: number)
        constructor(m: Internal.Minecraft_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, d: number)
        alignY(y: number, h: number, alignY: Internal.AlignMode_): number;
        getEntity(): Internal.LivingEntity;
        getVariables(): Internal.VariableSet;
        rotateDeg(angle: number): void;
        alignX(x: number, w: number, alignX: Internal.AlignMode_): number;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number): void;
        text(text: Internal.Component_, x: number, y: number, color: number, shadow: boolean): void;
        scale(scale: number): void;
        rawText(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): void;
        translate(x: number, y: number): void;
        rotateRad(angle: number): void;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number, u0: number, v0: number, u1: number, v1: number): void;
        scale(x: number, y: number): void;
        get entity(): Internal.LivingEntity
        get variables(): Internal.VariableSet
        readonly width: number;
        readonly mouseY: number;
        readonly inventory: boolean;
        readonly height: number;
        readonly painter: Internal.Painter;
        readonly mouseX: number;
    }
    type PaintScreenEventJS_ = PaintScreenEventJS;
    class ModParticle$5 extends Internal.ParticleType<Internal.RingParticle$RingData> {
        codec(): Internal.Codec<Internal.RingParticle$RingData>;
    }
    type ModParticle$5_ = ModParticle$5;
    class ModParticle$4 extends Internal.ParticleType<Internal.TrackLightningParticle$OrbData> {
        codec(): Internal.Codec<Internal.TrackLightningParticle$OrbData>;
    }
    type ModParticle$4_ = ModParticle$4;
    class DelegatedEntityCondition <T extends Internal.IDelegatedConditionConfiguration<Internal.Entity>> extends Internal.EntityCondition<T> {
        constructor(arg0: Internal.Codec_<T>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: T, arg1: Internal.Entity_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DelegatedEntityCondition_<T extends Internal.IDelegatedConditionConfiguration<Internal.Entity>> = DelegatedEntityCondition<T>;
    interface IPlatformFluidHelper <T> {
        abstract bucketVolume(): number;
        abstract getFluidIngredientType(): Internal.IIngredientTypeWithSubtypes<Internal.Fluid, T>;
        abstract create(arg0: Internal.Fluid_, arg1: number): T;
        abstract create(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): T;
        get fluidIngredientType(): Internal.IIngredientTypeWithSubtypes<Internal.Fluid, T>
    }
    type IPlatformFluidHelper_<T> = IPlatformFluidHelper<T>;
    class BlockPosFace {
        constructor(pos: BlockPos_, facing: Internal.Direction_)
        readonly facing: Internal.Direction;
        readonly pos: BlockPos;
    }
    type BlockPosFace_ = BlockPosFace;
    interface ReputationEventType {
        register(arg0: string): this;
        readonly VILLAGER_KILLED: Internal.ReputationEventType;
        readonly VILLAGER_HURT: Internal.ReputationEventType;
        readonly TRADE: Internal.ReputationEventType;
        readonly GOLEM_KILLED: Internal.ReputationEventType;
        readonly ZOMBIE_VILLAGER_CURED: Internal.ReputationEventType;
    }
    type ReputationEventType_ = ReputationEventType;
    interface IntUnaryOperator {
        compose(arg0: Internal.IntUnaryOperator_): this;
        identity(): this;
        abstract applyAsInt(arg0: number): number;
        andThen(arg0: Internal.IntUnaryOperator_): this;
        (arg0: number): number;
    }
    type IntUnaryOperator_ = IntUnaryOperator;
    class LightningRodBlock extends Internal.RodBlock implements Internal.SimpleWaterloggedBlock {
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
        onLightningStrike(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly RANGE: 128;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type LightningRodBlock_ = LightningRodBlock;
    class FireworkRocketItem extends Internal.Item {
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
        static setDuration(arg0: Internal.ItemStack_, arg1: number): void;
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
        static readonly TAG_EXPLOSION_COLORS: "Colors";
        static readonly TAG_EXPLOSION_TYPE: "Type";
        static readonly TAG_EXPLOSION_FADECOLORS: "FadeColors";
        static readonly TAG_FLIGHT: "Flight";
        static readonly TAG_EXPLOSION_FLICKER: "Flicker";
        static readonly ROCKET_PLACEMENT_OFFSET: 0.15;
        static readonly TAG_EXPLOSIONS: "Explosions";
        static readonly TAG_FIREWORKS: "Fireworks";
        static readonly TAG_EXPLOSION_TRAIL: "Trail";
        static readonly CRAFTABLE_DURATIONS: number[];
        static readonly TAG_EXPLOSION: "Explosion";
    }
    type FireworkRocketItem_ = FireworkRocketItem;
    interface ClientboundPlayerInfoUpdatePacket$Action$Writer {
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry_): void;
        (arg0: Internal.FriendlyByteBuf, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry): void;
    }
    type ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ClientboundPlayerInfoUpdatePacket$Action$Writer;
    interface ItemColorsExtended {
        abstract sodium$getColorProvider(arg0: Internal.ItemStack_): Internal.ItemColor;
        (arg0: Internal.ItemStack): Internal.ItemColor_;
    }
    type ItemColorsExtended_ = ItemColorsExtended;
    class RecipeSchemaType {
        constructor(namespace: Internal.RecipeNamespace_, id: ResourceLocation_, schema: Internal.RecipeSchema_)
        getSerializer(): Internal.RecipeSerializer<any>;
        get serializer(): Internal.RecipeSerializer<any>
        readonly schema: Internal.RecipeSchema;
        parent: Internal.RecipeSchemaType;
        readonly namespace: Internal.RecipeNamespace;
        readonly id: ResourceLocation;
    }
    type RecipeSchemaType_ = RecipeSchemaType;
    interface NonNullSupplier <T> {
        abstract get(): T;
        (): T;
    }
    type NonNullSupplier_<T> = NonNullSupplier<T>;
    class GlowingGeoLayerJS <T extends Internal.LivingEntity & Internal.IAnimatableJS> extends Internal.AutoGlowingGeoLayer<T> {
        constructor(entityRendererIn: Internal.KubeJSEntityRenderer_<T>, geoBuilder: Internal.GeoLayerJSBuilder_<T>, builder: Internal.BaseLivingEntityBuilder_<T>)
        entityName(): string;
        preRender(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderType: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTick: number, packedLight: number, packedOverlay: number): void;
        render(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderType: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTicks: number, packedLightIn: number, packedOverlay: number): void;
        readonly renderer: Internal.KubeJSEntityRenderer<T>;
        readonly geoBuilder: Internal.GeoLayerJSBuilder<T>;
        readonly builder: Internal.BaseLivingEntityBuilder<T>;
        entity: T;
    }
    type GlowingGeoLayerJS_<T extends Internal.LivingEntity & Internal.IAnimatableJS> = GlowingGeoLayerJS<T>;
    class ChocolateBlock extends Internal.RotatedPillarBlock {
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
    type ChocolateBlock_ = ChocolateBlock;
    interface Config$Entry extends Internal.UnmodifiableConfig$Entry {
        getShortOrElse(arg0: number): number;
        getChar(): string;
        abstract setValue<T>(arg0: any): T;
        getByte(): number;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getCharOrElse(arg0: string): string;
        getInt(): number;
        get "char"(): string
        set value(arg0: any)
        get "byte"(): number
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type Config$Entry_ = Config$Entry;
    interface SearchRegistry$TreeBuilderSupplier <T> extends Internal.Function<Internal.List<T>, Internal.RefreshableSearchTree<T>> {
        compose<V>(arg0: Internal.Function_<V, Internal.List<T>>): Internal.Function<V, Internal.RefreshableSearchTree<T>>;
        andThen<V>(arg0: Internal.Function_<Internal.RefreshableSearchTree<T>, V>): Internal.Function<Internal.List<T>, V>;
        identity<T>(): Internal.Function<T, T>;
        abstract apply(arg0: Internal.List_<T>): Internal.RefreshableSearchTree<T>;
        (arg0: Internal.List<T>): Internal.RefreshableSearchTree_<T>;
    }
    type SearchRegistry$TreeBuilderSupplier_<T> = SearchRegistry$TreeBuilderSupplier<T>;
    interface LDLRegister extends Internal.Annotation {
        abstract name(): string;
        abstract priority(): number;
        abstract hashCode(): number;
        abstract toString(): string;
        abstract annotationType(): typeof Internal.Annotation;
        abstract group(): string;
        abstract modID(): string;
        abstract equals(arg0: any): boolean;
    }
    type LDLRegister_ = LDLRegister;
    interface Reference2ByteFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Reference2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Reference2IntFunction<K>;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ByteFunction;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ByteFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Reference2CharFunction<K>;
        removeByte(arg0: any): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ByteFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Reference2LongFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ByteFunction;
        applyAsInt(arg0: K): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ByteFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract getByte(arg0: any): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ByteFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2ByteFunction_<K> = Reference2ByteFunction<K>;
    class Target extends Internal.Node {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Node_)
        updateBest(arg0: number, arg1: Internal.Node_): void;
        isReached(): boolean;
        getBestNode(): Internal.Node;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.Target;
        setReached(): void;
        get reached(): boolean
        get bestNode(): Internal.Node
    }
    type Target_ = Target;
    class Vector3i implements Internal.Vector3ic, Internal.Cloneable, Internal.Externalizable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor()
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: Internal.Vector3ic_)
        z(): number;
        x(): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: number, arg1: number, arg2: number): this;
        add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        set(arg0: Internal.Vector3ic_): this;
        add(arg0: Internal.Vector3ic_): this;
        mul(arg0: number, arg1: number, arg2: number): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector3ic_): this;
        absolute(arg0: Internal.Vector3i_): this;
        setComponent(arg0: number, arg1: number): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: number): this;
        gridDistance(arg0: Internal.Vector3ic_): number;
        sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        div(arg0: number): this;
        absolute(): this;
        getToAddress(arg0: number): Internal.Vector3ic;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        toString(arg0: Internal.NumberFormat_): string;
        lengthSquared(): number;
        distance(arg0: Internal.Vector3ic_): number;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mul(arg0: number): this;
        gridDistance(arg0: number, arg1: number, arg2: number): number;
        min(arg0: Internal.Vector3ic_): this;
        minComponent(): number;
        clone(): any;
        set(arg0: Internal.Vector3dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        y(): number;
        min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        mul(arg0: Internal.Vector3ic_): this;
        mul(arg0: number, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        negate(arg0: Internal.Vector3i_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        negate(): this;
        add(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        set(arg0: number, arg1: number, arg2: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        zero(): this;
        distanceSquared(arg0: Internal.Vector3ic_): number;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        sub(arg0: Internal.Vector3ic_): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        set(arg0: number[]): this;
        set(arg0: Internal.IntBuffer_): this;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        get(arg0: number): number;
        div(arg0: number): this;
        setFromAddress(arg0: number): this;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        set fromAddress(arg0: number)
        z: number;
        x: number;
        y: number;
    }
    type Vector3i_ = Vector3i;
    class NetherForestVegetationFeature extends Internal.Feature<Internal.NetherForestVegetationConfig> {
        constructor(arg0: Internal.Codec_<Internal.NetherForestVegetationConfig>)
    }
    type NetherForestVegetationFeature_ = NetherForestVegetationFeature;
    interface Short2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        abstract get(arg0: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Short2CharFunction;
        put(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2IntFunction;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Short2FloatFunction;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2IntFunction<T>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2IntFunction;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Short2ShortFunction;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2IntFunction;
        clear(): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Short2LongFunction;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2IntFunction;
        (arg0: number): number;
    }
    type Short2IntFunction_ = Short2IntFunction;
    class Vector3d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector3dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_)
        constructor(arg0: Internal.Vector3dc_)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector3ic_)
        reflect(arg0: number, arg1: number, arg2: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        add(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        round(arg0: Internal.Vector3d_): this;
        rotateX(arg0: number, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        round(): this;
        x(): number;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4fc_): number;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        div(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        smoothStep(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        half(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        orthogonalize(arg0: Internal.Vector3dc_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        negate(): this;
        add(arg0: Internal.Vector3fc_): this;
        angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        ceil(): this;
        half(arg0: Internal.Vector3dc_): this;
        setComponent(arg0: number, arg1: number): this;
        rotateY(arg0: number, arg1: Internal.Vector3d_): this;
        getToAddress(arg0: number): Internal.Vector3dc;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        get(arg0: number): number;
        y(): number;
        sub(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        hermite(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: number, arg4: Internal.Vector3d_): this;
        negate(arg0: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        mulPositionW(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        max(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        orthogonalize(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        ceil(arg0: Internal.Vector3d_): this;
        distanceSquared(arg0: Internal.Vector3dc_): number;
        dot(arg0: Internal.Vector3dc_): number;
        cross(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        z(): number;
        mul(arg0: Internal.Vector3fc_): this;
        isFinite(): boolean;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4dc_): this;
        mul(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        half(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): this;
        absolute(): this;
        mulPosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_): this;
        mulPositionW(arg0: Internal.Matrix4dc_): number;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        angleCos(arg0: Internal.Vector3dc_): number;
        normalize(): this;
        angle(arg0: Internal.Vector3dc_): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector3fc_): this;
        minComponent(): number;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        set(arg0: Internal.Vector3fc_): this;
        add(arg0: Internal.Vector3dc_): this;
        normalize(arg0: Internal.Vector3d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        div(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        cross(arg0: Internal.Vector3dc_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        min(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Vector3f_): Vector3f;
        mulTranspose(arg0: Internal.Matrix3dc_): this;
        mulProject(arg0: Internal.Matrix4dc_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Vector3d_): this;
        rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        mulDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        sub(arg0: number, arg1: number, arg2: number): this;
        mul(arg0: number, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        setFromAddress(arg0: number): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        min(arg0: Internal.Vector3dc_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        cross(arg0: number, arg1: number, arg2: number): this;
        half(arg0: number, arg1: number, arg2: number): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        sub(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4dc_): this;
        mulDirection(arg0: Internal.Matrix4fc_): this;
        mul(arg0: number, arg1: number, arg2: number): this;
        normalize(arg0: number, arg1: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3fc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        orthogonalizeUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        normalize(arg0: number): this;
        sub(arg0: Internal.Vector3dc_): this;
        mulPositionW(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        clone(): any;
        absolute(arg0: Internal.Vector3d_): this;
        dot(arg0: number, arg1: number, arg2: number): number;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector3dc_): this;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        orthogonalizeUnit(arg0: Internal.Vector3dc_): this;
        div(arg0: number): this;
        set(arg0: number[]): this;
        rotateZ(arg0: number): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        add(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        floor(arg0: Internal.Vector3d_): this;
        mul(arg0: number): this;
        mulTranspose(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mulProject(arg0: Internal.Matrix4fc_): this;
        floor(): this;
        zero(): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        lengthSquared(): number;
        mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4x3dc_): this;
        mulDirection(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        max(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        reflect(arg0: Internal.Vector3dc_): this;
        set(arg0: Internal.Vector3ic_): this;
        div(arg0: Internal.Vector3fc_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        mulTransposeDirection(arg0: Internal.Matrix4dc_): this;
        div(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number): this;
        angleSigned(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): number;
        set(arg0: number): this;
        rotateY(arg0: number): this;
        equals(arg0: Internal.Vector3dc_, arg1: number): boolean;
        add(arg0: number, arg1: number, arg2: number): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        rotateZ(arg0: number, arg1: Internal.Vector3d_): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        mulProject(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        mulPosition(arg0: Internal.Matrix4fc_): this;
        get(arg0: Internal.Vector3d_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        length(): number;
        fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3d_): this;
        div(arg0: number, arg1: number, arg2: number): this;
        rotateX(arg0: number): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_): this;
        get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_): this;
        div(arg0: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        cross(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_): this;
        mulDirection(arg0: Internal.Matrix4x3fc_): this;
        get(arg0: Vector3f_): Vector3f;
        distance(arg0: Internal.Vector3dc_): number;
        div(arg0: number, arg1: Internal.Vector3d_): this;
        rotationTo(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        mul(arg0: Internal.Matrix3dc_): this;
        get finite(): boolean
        set fromAddress(arg0: number)
        z: number;
        x: number;
        y: number;
    }
    type Vector3d_ = Vector3d;
    class SpellSelectionEventJS extends Internal.PlayerEventJS {
        constructor(event: Internal.SpellSelectionManager$SpellSelectionEvent_)
        /**
         *     Returns if the event is cancelable.
        */
        isCancelable(): boolean;
        /**
         *     Returns the player that cast the spell.
        */
        getEntity(): Internal.LivingEntity;
        /**
         *     Adds spell option to the end of a player's spell bar.
        */
        addSelectionOption(spellData: SpellData_, slotId: string, localSlotIndex: number): void;
        getManager(): Internal.SpellSelectionManager;
        /**
         *     Adds spell option to the end of a player's spell bar.
        */
        addSelectionOption(spellData: SpellData_, slotId: string, localSlotIndex: number, globalIndex: number): void;
        /**
         *     Returns if the event is cancelable.
        */
        get cancelable(): boolean
        /**
         *     Returns the player that cast the spell.
        */
        get entity(): Internal.LivingEntity
        get manager(): Internal.SpellSelectionManager
    }
    type SpellSelectionEventJS_ = SpellSelectionEventJS;
    class ThinBoneBlock extends Internal.RotatedPillarBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly SHAPE_Z: Internal.CubeVoxelShape;
        static readonly SHAPE_X: Internal.CubeVoxelShape;
        static readonly SHAPE_Y: Internal.CubeVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        readonly shapeMap: Internal.Map<Internal.BlockState, Internal.VoxelShape>;
        static readonly OFFSET: Internal.IntegerProperty;
    }
    type ThinBoneBlock_ = ThinBoneBlock;
    class BaseLivingEntityBuilder$KeyFrameEventJS <E extends Internal.LivingEntity & Internal.IAnimatableJS, B extends Internal.KeyFrameData> {
        /**
         * The current tick of the animation.
        */
        readonly animationTick: number;
        /**
         * The keyframe data containing extra information about the instruction.
        */
        readonly keyframeData: B;
        /**
         * The controller handling this animation.
        */
        readonly controller: Internal.AnimationController<E>;
        /**
         * The entity this animation is being applied to.
        */
        readonly entity: E;
    }
    type BaseLivingEntityBuilder$KeyFrameEventJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS, B extends Internal.KeyFrameData> = BaseLivingEntityBuilder$KeyFrameEventJS<E, B>;
    class ClientboundSetEntityMotionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Vec3d_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getXa(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getYa(): number;
        getZa(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get xa(): number
        get ya(): number
        get za(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundSetEntityMotionPacket_ = ClientboundSetEntityMotionPacket;
    interface Short2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Short2ShortFunction;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Short2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2FloatFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Short2ByteFunction;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2FloatFunction<T>;
        apply(arg0: number): number;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2FloatFunction;
        getOrDefault(arg0: number, arg1: number): number;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract get(arg0: number): number;
        defaultReturnValue(): number;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2FloatFunction<T>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Short2CharFunction;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        put(arg0: number, arg1: number): number;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2FloatFunction;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): number;
    }
    type Short2FloatFunction_ = Short2FloatFunction;
    interface Serializable {
    }
    type Serializable_ = Serializable;
    class Vector2i implements Internal.Vector2ic, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_)
        absolute(arg0: Internal.Vector2i_): this;
        mul(arg0: number): this;
        setComponent(arg0: number, arg1: number): this;
        x(): number;
        mul(arg0: number, arg1: number): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        gridDistance(arg0: Internal.Vector2ic_): number;
        set(arg0: number[]): this;
        div(arg0: number): this;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        add(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.Vector2ic_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector2ic_): this;
        distanceSquared(arg0: number, arg1: number): number;
        add(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: number, arg1: Internal.Vector2i_): this;
        negate(arg0: Internal.Vector2i_): this;
        negate(): this;
        gridDistance(arg0: number, arg1: number): number;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        toString(arg0: Internal.NumberFormat_): string;
        lengthSquared(): number;
        length(): number;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        distanceSquared(arg0: Internal.Vector2ic_): number;
        min(arg0: Internal.Vector2ic_): this;
        minComponent(): number;
        clone(): any;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector2dc_): this;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        div(arg0: number): this;
        y(): number;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: Internal.Vector2ic_): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        set(arg0: number): this;
        set(arg0: Internal.IntBuffer_): this;
        absolute(): this;
        add(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        distance(arg0: Internal.Vector2ic_): number;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        equals(arg0: number, arg1: number): boolean;
        set(arg0: number, arg1: number): this;
        add(arg0: number, arg1: number): this;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        setFromAddress(arg0: number): this;
        sub(arg0: Internal.Vector2ic_): this;
        mul(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        static length(arg0: number, arg1: number): number;
        distance(arg0: number, arg1: number): number;
        set(arg0: Internal.ByteBuffer_): this;
        getToAddress(arg0: number): Internal.Vector2ic;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        max(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        get(arg0: number): number;
        min(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        zero(): this;
        sub(arg0: number, arg1: number): this;
        set fromAddress(arg0: number)
        x: number;
        y: number;
    }
    type Vector2i_ = Vector2i;
    interface ShortIterator extends Internal.PrimitiveIterator<number, Internal.ShortConsumer> {
        forEachRemaining(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        forEachRemaining(arg0: any): void;
        remove(): void;
        /**
         * @deprecated
        */
        next(): any;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
        abstract nextShort(): number;
    }
    type ShortIterator_ = ShortIterator;
    interface ITextureAtlasSpriteLoader {
        abstract loadContents(arg0: ResourceLocation_, arg1: Internal.Resource_, arg2: Internal.FrameSize_, arg3: Internal.NativeImage_, arg4: Internal.AnimationMetadataSection_, arg5: Internal.ForgeTextureMetadata_): Internal.SpriteContents;
        abstract makeSprite(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.TextureAtlasSprite;
    }
    type ITextureAtlasSpriteLoader_ = ITextureAtlasSpriteLoader;
    class Vector2f implements Internal.Vector2fc, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: number, arg1: Internal.FloatBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[])
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        round(): this;
        div(arg0: Internal.Vector2fc_): this;
        min(arg0: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mul(arg0: Internal.Vector2fc_): this;
        set(arg0: Internal.Vector2ic_): this;
        ceil(arg0: Internal.Vector2f_): this;
        negate(): this;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        add(arg0: number, arg1: number): this;
        perpendicular(): this;
        toString(arg0: Internal.NumberFormat_): string;
        lengthSquared(): number;
        fma(arg0: number, arg1: Internal.Vector2fc_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        lerp(arg0: Internal.Vector2fc_, arg1: number, arg2: Internal.Vector2f_): this;
        mulPosition(arg0: Internal.Matrix3x2fc_): this;
        get(arg0: number): number;
        set(arg0: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        sub(arg0: Internal.Vector2fc_): this;
        normalize(arg0: number, arg1: Internal.Vector2f_): this;
        clone(): any;
        set(arg0: number, arg1: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector2fc_): this;
        floor(): this;
        absolute(): this;
        mul(arg0: number, arg1: Internal.Vector2f_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setComponent(arg0: number, arg1: number): this;
        div(arg0: number): this;
        mul(arg0: number): this;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        div(arg0: number, arg1: number): this;
        length(): number;
        dot(arg0: Internal.Vector2fc_): number;
        max(arg0: Internal.Vector2fc_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: number, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        distanceSquared(arg0: number, arg1: number): number;
        fma(arg0: number, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        set(arg0: number[]): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        min(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        zero(): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        mulPosition(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2f_): this;
        negate(arg0: Internal.Vector2f_): this;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        isFinite(): boolean;
        mul(arg0: number, arg1: number): this;
        get(arg0: Internal.Vector2d_): Internal.Vector2d;
        add(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        static length(arg0: number, arg1: number): number;
        x(): number;
        set(arg0: number): this;
        ceil(): this;
        normalize(arg0: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        normalize(arg0: Internal.Vector2f_): this;
        normalize(): this;
        set(arg0: number, arg1: number): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        floor(arg0: Internal.Vector2f_): this;
        sub(arg0: number, arg1: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        angle(arg0: Internal.Vector2fc_): number;
        minComponent(): number;
        lerp(arg0: Internal.Vector2fc_, arg1: number): this;
        add(arg0: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: Internal.Vector2dc_): this;
        equals(arg0: number, arg1: number): boolean;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.Vector2f_): this;
        equals(arg0: Internal.Vector2fc_, arg1: number): boolean;
        getToAddress(arg0: number): Internal.Vector2fc;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setFromAddress(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        mulDirection(arg0: Internal.Matrix3x2fc_): this;
        y(): number;
        absolute(arg0: Internal.Vector2f_): this;
        set(arg0: Internal.ByteBuffer_): this;
        round(arg0: Internal.Vector2f_): this;
        max(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        mul(arg0: Internal.Matrix2fc_): this;
        distance(arg0: number, arg1: number): number;
        get finite(): boolean
        set fromAddress(arg0: number)
        y: number;
        x: number;
    }
    type Vector2f_ = Vector2f;
    class MagicSwordItem extends Internal.ExtendedSwordItem implements Internal.IPresetSpellContainer {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: any_[], arg4: Internal.Map_<Internal.Attribute, Internal.AttributeModifier>, arg5: Internal.Item$Properties_)
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
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
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
        getSpells(): Internal.List<SpellData>;
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
        get spells(): Internal.List<SpellData>
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type MagicSwordItem_ = MagicSwordItem;
    class Vector2d implements Internal.Cloneable, Internal.Vector2dc, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector2dc_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        div(arg0: Internal.Vector2fc_): this;
        equals(arg0: Internal.Vector2dc_, arg1: number): boolean;
        round(): this;
        set(arg0: Internal.Vector2ic_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        angle(arg0: Internal.Vector2dc_): number;
        lerp(arg0: Internal.Vector2dc_, arg1: number): this;
        mul(arg0: number, arg1: Internal.Vector2d_): this;
        div(arg0: number, arg1: Internal.Vector2d_): this;
        x(): number;
        negate(): this;
        dot(arg0: Internal.Vector2dc_): number;
        fma(arg0: number, arg1: Internal.Vector2dc_): this;
        lerp(arg0: Internal.Vector2dc_, arg1: number, arg2: Internal.Vector2d_): this;
        toString(arg0: Internal.NumberFormat_): string;
        setComponent(arg0: number, arg1: number): this;
        perpendicular(): this;
        round(arg0: Internal.Vector2d_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        sub(arg0: Internal.Vector2fc_): this;
        floor(): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        clone(): any;
        set(arg0: number, arg1: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        add(arg0: Internal.Vector2dc_): this;
        set(arg0: Internal.Vector2fc_): this;
        absolute(): this;
        negate(arg0: Internal.Vector2d_): this;
        mulTranspose(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        static length(arg0: number, arg1: number): number;
        normalize(): this;
        mulDirection(arg0: Internal.Matrix3x2dc_): this;
        mulTranspose(arg0: Internal.Matrix2dc_): this;
        add(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        get(arg0: number): number;
        ceil(arg0: Internal.Vector2d_): this;
        y(): number;
        lengthSquared(): number;
        set(arg0: number[]): this;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        mul(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        floor(arg0: Internal.Vector2d_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        distance(arg0: number, arg1: number): number;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        set(arg0: number[]): this;
        mul(arg0: Internal.Matrix2dc_): this;
        min(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        div(arg0: number, arg1: number): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        min(arg0: Internal.Vector2dc_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        mul(arg0: Internal.Vector2dc_): this;
        isFinite(): boolean;
        get(arg0: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2dc_): number;
        getToAddress(arg0: number): Internal.Vector2dc;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        equals(arg0: number, arg1: number): boolean;
        absolute(arg0: Internal.Vector2d_): this;
        ceil(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: number): this;
        div(arg0: number): this;
        mul(arg0: number, arg1: number): this;
        sub(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mul(arg0: number): this;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector2dc_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        minComponent(): number;
        set(arg0: Internal.Vector2dc_): this;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        add(arg0: Internal.Vector2fc_): this;
        add(arg0: number, arg1: number): this;
        div(arg0: Internal.Vector2d_): this;
        normalize(arg0: number, arg1: Internal.Vector2d_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.Vector2f_): Internal.Vector2f;
        normalize(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        setFromAddress(arg0: number): this;
        fma(arg0: number, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        distanceSquared(arg0: number, arg1: number): number;
        distanceSquared(arg0: Internal.Vector2dc_): number;
        sub(arg0: number, arg1: number): this;
        normalize(arg0: Internal.Vector2d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        max(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        max(arg0: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2fc_): this;
        get finite(): boolean
        set fromAddress(arg0: number)
        x: number;
        y: number;
    }
    type Vector2d_ = Vector2d;
    class LootParams$Builder implements Internal.LootParamsBuilderAccess {
        constructor(arg0: Internal.ServerLevel_)
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getParams(): Internal.Map<any, any>;
        withParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        withDynamicDrop(arg0: ResourceLocation_, arg1: Internal.LootParams$DynamicDrop_): this;
        withOptionalParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        create(arg0: Internal.LootContextParamSet_): Internal.LootParams;
        withLuck(arg0: number): this;
        get level(): Internal.ServerLevel
        get params(): Internal.Map<any, any>
    }
    type LootParams$Builder_ = LootParams$Builder;
    class ScepterOfSealedChaosItem extends Internal.Item {
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
    type ScepterOfSealedChaosItem_ = ScepterOfSealedChaosItem;
    class ConfigPanel extends WidgetGroup {
        constructor(editor: Internal.Editor_)
        constructor(editor: Internal.Editor_, tabs: Internal.List_<Internal.ConfigPanel$Tab>)
        computeLayout(tab: Internal.ConfigPanel$Tab_): void;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        getEditor(): Internal.Editor;
        getPalette(): Internal.HsbColorWidget;
        handleDragging(dragging: any): boolean;
        clearAllConfigurators(tab: Internal.ConfigPanel$Tab_): void;
        getChatComponent(): Internal.Component;
        switchTag(tab: Internal.ConfigPanel$Tab_): void;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        canDragIn(dragging: any): boolean;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        widget(): Widget;
        clearAllConfigurators(): void;
        onConfiguratorChangeUpdate(tab: Internal.ConfigPanel$Tab_, configurator: Internal.Configurator_): void;
        getFocus(): Internal.Map<Internal.ConfigPanel$Tab, com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable>;
        name(): string;
        reloadTabs(tabs: Internal.List_<Internal.ConfigPanel$Tab>): void;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        openConfigurator(tab: Internal.ConfigPanel$Tab_, configurable: com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable_): void;
        getRegisterUI(): Internal.LDLRegister;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        get translateKey(): string
        get editor(): Internal.Editor
        get palette(): Internal.HsbColorWidget
        get chatComponent(): Internal.Component
        get LDLRegister(): boolean
        get focus(): Internal.Map<Internal.ConfigPanel$Tab, com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable>
        get registerUI(): Internal.LDLRegister
        static readonly WIDTH: 252;
    }
    type ConfigPanel_ = ConfigPanel;
    class ConditionCollect implements org.mesdag.advjs.predicate.condition.ICondition {
    }
    type ConditionCollect_ = ConditionCollect;
    abstract class AbstractContainerMenu implements Internal.AbstractContainerMenuInvoker, Internal.AbstractContainerMenuAccessor {
        constructor(arg0: Internal.MenuType_<any>, arg1: number)
        findSlot(arg0: Internal.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        abstract quickMoveStack(arg0: Player_, arg1: number): Internal.ItemStack;
        resetQuickCraft(): void;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        static checkContainerDataCount(arg0: Internal.ContainerData_, arg1: number): void;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: Internal.Container_): void;
        removeSlotListener(arg0: Internal.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        clearContainer(arg0: Player_, arg1: Internal.Container_): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Player_): boolean;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: Internal.Container_): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        resumeRemoteUpdates(): void;
        addDataSlots(arg0: Internal.ContainerData_): void;
        static getQuickcraftHeader(arg0: number): number;
        static stillValid(arg0: Internal.ContainerLevelAccess_, arg1: Player_, arg2: Internal.Block_): boolean;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: Internal.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        clickMenuButton(arg0: Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        static getQuickcraftType(arg0: number): number;
        static checkContainerSize(arg0: Internal.Container_, arg1: number): void;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Player_): void;
        abstract stillValid(arg0: Player_): boolean;
        suppressRemoteUpdates(): void;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        static readonly QUICKCRAFT_TYPE_CLONE: 2;
        static readonly SLOT_CLICKED_OUTSIDE: -999;
        readonly slots: Internal.NonNullList<Internal.Slot>;
        static readonly CARRIED_SLOT_SIZE: 2147483647;
        static readonly QUICKCRAFT_TYPE_GREEDY: 1;
        remoteSlots: Internal.NonNullList<Internal.ItemStack>;
        menuType: Internal.MenuType<any>;
        static readonly QUICKCRAFT_HEADER_CONTINUE: 1;
        static readonly QUICKCRAFT_HEADER_START: 0;
        static readonly QUICKCRAFT_HEADER_END: 2;
        static readonly QUICKCRAFT_TYPE_CHARITABLE: 0;
        containerId: number;
        readonly lastSlots: Internal.NonNullList<Internal.ItemStack>;
    }
    type AbstractContainerMenu_ = AbstractContainerMenu;
    class LocalDateTime implements Internal.ChronoLocalDateTime<Internal.LocalDate>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getHour(): number;
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        atZone(arg0: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        minusMonths(arg0: number): this;
        withSecond(arg0: number): this;
        getDayOfWeek(): Internal.DayOfWeek;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        withHour(arg0: number): this;
        compareTo(arg0: any): number;
        getMinute(): number;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        getDayOfMonth(): number;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_): Internal.LocalDateTime;
        static now(): Internal.LocalDateTime;
        plusMonths(arg0: number): this;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.LocalDateTime;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        minusNanos(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        plusHours(arg0: number): this;
        plusSeconds(arg0: number): this;
        isBefore(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        static now(arg0: Internal.Clock_): Internal.LocalDateTime;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        getYear(): number;
        minus(arg0: Internal.TemporalAmount_): Internal.ChronoLocalDateTime<any>;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        withDayOfMonth(arg0: number): this;
        isAfter(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        get(arg0: Internal.TemporalField_): number;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        withMonth(arg0: number): this;
        minusMinutes(arg0: number): this;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        plus(arg0: Internal.TemporalAmount_): Internal.ChronoLocalDateTime<any>;
        compareTo(arg0: Internal.ChronoLocalDateTime_<any>): number;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoLocalDateTime<any>>;
        getMonthValue(): number;
        withDayOfYear(arg0: number): this;
        minusYears(arg0: number): this;
        minusWeeks(arg0: number): this;
        static ofEpochSecond(arg0: number, arg1: number, arg2: Internal.ZoneOffset_): Internal.LocalDateTime;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.LocalDateTime;
        toLocalDate(): Internal.LocalDate;
        plusDays(arg0: number): this;
        withYear(arg0: number): this;
        plusWeeks(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.LocalDateTime;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        getLong(arg0: Internal.TemporalField_): number;
        plusYears(arg0: number): this;
        static now(arg0: Internal.ZoneId_): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        isEqual(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        plusMinutes(arg0: number): this;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        withNano(arg0: number): this;
        minusHours(arg0: number): this;
        getDayOfYear(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        minusDays(arg0: number): this;
        toInstant(arg0: Internal.ZoneOffset_): Internal.Instant;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getSecond(): number;
        getNano(): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.LocalDateTime;
        withMinute(arg0: number): this;
        toEpochSecond(arg0: Internal.ZoneOffset_): number;
        plusNanos(arg0: number): this;
        minusSeconds(arg0: number): this;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        get hour(): number
        get month(): Internal.Month
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get dayOfMonth(): number
        get chronology(): Internal.Chronology
        get year(): number
        get monthValue(): number
        get dayOfYear(): number
        get second(): number
        get nano(): number
        static readonly MAX: Internal.LocalDateTime;
        static readonly MIN: Internal.LocalDateTime;
    }
    type LocalDateTime_ = LocalDateTime;
    class Behavior$Status extends Internal.Enum<Internal.Behavior$Status> {
        static values(): Internal.Behavior$Status[];
        static valueOf(arg0: string): Internal.Behavior$Status;
        static readonly RUNNING: Internal.Behavior$Status;
        static readonly STOPPED: Internal.Behavior$Status;
    }
    type Behavior$Status_ = "stopped" | Behavior$Status | "running";
    class CalioDynamicRegistryEvent$Initialize extends Internal.CalioDynamicRegistryEvent implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ICalioDynamicRegistryManager_)
    }
    type CalioDynamicRegistryEvent$Initialize_ = CalioDynamicRegistryEvent$Initialize;
    class ClientboundSetSubtitleTextPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
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
    type ClientboundSetSubtitleTextPacket_ = ClientboundSetSubtitleTextPacket;
    class PlayerInteractEvent$LeftClickBlock extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.PlayerInteractEvent$LeftClickBlock$Action_)
        constructor(arg0: Player_, arg1: BlockPos_, arg2: Internal.Direction_)
        setUseItem(arg0: Internal.Event$Result_): void;
        getEntity(): Internal.LivingEntity;
        getUseBlock(): Internal.Event$Result;
        getAction(): Internal.PlayerInteractEvent$LeftClickBlock$Action;
        setUseBlock(arg0: Internal.Event$Result_): void;
        getUseItem(): Internal.Event$Result;
        set useItem(arg0: Internal.Event$Result_)
        get entity(): Internal.LivingEntity
        get useBlock(): Internal.Event$Result
        get action(): Internal.PlayerInteractEvent$LeftClickBlock$Action
        set useBlock(arg0: Internal.Event$Result_)
        get useItem(): Internal.Event$Result
    }
    type PlayerInteractEvent$LeftClickBlock_ = PlayerInteractEvent$LeftClickBlock;
    interface Supplier <T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T>;
    class RegistryAccess$1FrozenAccess extends Internal.RegistryAccess$ImmutableRegistryAccess implements Internal.RegistryAccess$Frozen {
        constructor(arg0: Internal.RegistryAccess_, arg1: Internal.Stream_<any>)
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        allRegistriesLifecycle(): Internal.Lifecycle;
        static create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        freeze(): Internal.RegistryAccess$Frozen;
        asGetterLookup(): Internal.HolderGetter$Provider;
        static fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): Internal.RegistryAccess$Frozen;
        readonly f_244254_: Internal.RegistryAccess;
    }
    type RegistryAccess$1FrozenAccess_ = RegistryAccess$1FrozenAccess;
    class GeoArmorRenderer <T extends Internal.Item & Internal.GeoItem> extends Internal.HumanoidModel<any> implements Internal.GeoRenderer<T> {
        constructor(arg0: I)
        constructor(arg0: Internal.GeoModel_<T>)
        getBodyBone(): Internal.GeoBone;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        withScale(arg0: number): this;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        getGeoModel(): Internal.GeoModel<T>;
        fireCompileRenderLayersEvent(): void;
        getRenderType(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        getCurrentSlot(): Internal.EquipmentSlot;
        withScale(arg0: number, arg1: number): this;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        scaleModelForBaby(arg0: Internal.PoseStack_, arg1: T, arg2: number, arg3: boolean): void;
        getRenderLayers(): Internal.List<Internal.GeoRenderLayer<T>>;
        getRightLegBone(): Internal.GeoBone;
        getRightBootBone(): Internal.GeoBone;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getPackedOverlay(arg0: T, arg1: number, arg2: number): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        addRenderLayer(arg0: Internal.GeoRenderLayer_<T>): this;
        getTextureLocation(arg0: T): ResourceLocation;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getHeadBone(): Internal.GeoBone;
        updateAnimatedTextureFrame(arg0: T): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderFinal(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        prepForRender(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: Internal.HumanoidModel_<any>): void;
        getLeftArmBone(): Internal.GeoBone;
        updateAnimatedTextureFrame(arg0: Internal.GeoAnimatable_): void;
        applyBoneVisibilityByPart(arg0: Internal.EquipmentSlot_, arg1: Internal.ModelPart_, arg2: Internal.HumanoidModel_<any>): void;
        preRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getAnimatable(): Internal.GeoAnimatable;
        getCurrentStack(): Internal.ItemStack;
        getInstanceId(arg0: T): number;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getLeftBootBone(): Internal.GeoBone;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getPackedOverlay(arg0: T, arg1: number): number;
        actuallyRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getRenderType(arg0: Internal.GeoAnimatable_, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        getInstanceId(arg0: Internal.GeoAnimatable_): number;
        firePreRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): boolean;
        firePostRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        doPostRenderCleanup(): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getRightArmBone(): Internal.GeoBone;
        scaleModelForRender(arg0: number, arg1: number, arg2: Internal.PoseStack_, arg3: T, arg4: Internal.BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        getCurrentEntity(): Internal.Entity;
        getLeftLegBone(): Internal.GeoBone;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get bodyBone(): Internal.GeoBone
        get geoModel(): Internal.GeoModel<T>
        get currentSlot(): Internal.EquipmentSlot
        get renderLayers(): Internal.List<Internal.GeoRenderLayer<T>>
        get rightLegBone(): Internal.GeoBone
        get rightBootBone(): Internal.GeoBone
        get headBone(): Internal.GeoBone
        get leftArmBone(): Internal.GeoBone
        get animatable(): Internal.GeoAnimatable
        get currentStack(): Internal.ItemStack
        get leftBootBone(): Internal.GeoBone
        get rightArmBone(): Internal.GeoBone
        get currentEntity(): Internal.Entity
        get leftLegBone(): Internal.GeoBone
    }
    type GeoArmorRenderer_<T extends Internal.Item & Internal.GeoItem> = GeoArmorRenderer<T>;
    class ServerPlayer extends Player implements Internal.ServerPlayerAccessor, Internal.ServerPlayerKJS, Internal.ServerPlayerISSKJS, Internal.TierAffixer {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.ServerLevel_, arg2: Internal.GameProfile_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getSpawnLocation(): Internal.BlockContainerJS;
        getOffHandItem(): Internal.ItemStack;
        setServerLevel(arg0: Internal.ServerLevel_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        setSpawnLocation(c: Internal.BlockContainerJS_): void;
        captureInventory(autoRestore: boolean): Internal.Container;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getTabListFooter(): Internal.Component;
        loadGameTypes(arg0: Internal.CompoundTag_): void;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        disconnect(): void;
        allowsListing(): boolean;
        setSelectedSlot(index: number): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        kick(): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        handler$dnn000$unionlib$restoreFrom_inject(pThat: Internal.ServerPlayer_, pKeepEverything: boolean, ci: Internal.CallbackInfo_): void;
        getCustomName(): Internal.Component;
        damageHeldItem(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        initInventoryMenu(): void;
        setMotionZ(z: number): void;
        /**
         *     Returns the player's magic data. Useful for changing the player's mana, or checking if the player is casting a spell.
         *     Changing the player's mana directly will not sync with the client. Use `syncMana()` on the player to sync the mana with the client.
        */
        getMagicData(): Internal.MagicData;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFoodLevel(): number;
        openChestGUI(title: Internal.Component_, rows: number, gui: Internal.Consumer_<Internal.ChestMenuData>): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        setSaturation(saturation: number): void;
        getContainerCounter(): number;
        setMainHandItem(item: Internal.ItemStack_): void;
        serverLevel(): Internal.ServerLevel;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getXp(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        canReachRaw(arg0: BlockPos_, arg1: number): boolean;
        setCreativeMode(mode: boolean): void;
        sendServerStatus(arg0: Internal.ServerStatus_): void;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        isMiningBlock(): boolean;
        isUndead(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        setExperiencePoints(arg0: number): void;
        restoreFrom(arg0: Internal.ServerPlayer_, arg1: boolean): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
        boostElytraFlight(): void;
        self(): this;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getTabListHeader(): Internal.Component;
        getLanguage(): string;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        copyDefaultedList(arg0: Internal.NonNullList_<Internal.ItemStack>): Internal.NonNullList<Internal.ItemStack>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        callNextContainerCounter(): void;
        initMenu(arg0: Internal.AbstractContainerMenu_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        setRespawnPosition(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        give(item: Internal.ItemStack_): void;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        revokeAdvancement(id: ResourceLocation_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasChangedDimension(): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        shouldFilterMessageTo(arg0: Internal.ServerPlayer_): boolean;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getRespawnDimension(): Internal.ResourceKey<Internal.Level>;
        getTabListDisplayName(): Internal.Component;
        refreshTabListName(): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getRecipeBook(): Internal.ServerRecipeBook;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getRespawnPosition(): BlockPos;
        getScriptType(): Internal.ScriptType;
        callInitMenu(arg0: Internal.AbstractContainerMenu_): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        handler$dop000$unionlib$startSleepInBed_i1(bedPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        setGameMode(arg0: Internal.GameType_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        setTabListHeaderFooter(arg0: Internal.Component_, arg1: Internal.Component_): void;
        nextContainerCounter(): void;
        isAdvancementDone(id: ResourceLocation_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setCamera(arg0: Internal.Entity_): void;
        static get(arg0: any): Internal.LivingEntityAccess;
        unlockAdvancement(id: ResourceLocation_): void;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        openInventoryGUI(inventory: Internal.InventoryKJS_, title: Internal.Component_): void;
        getSaturation(): number;
        setPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        isFake(): boolean;
        getChatSession(): Internal.RemoteChatSession;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setExperienceLevels(arg0: number): void;
        getAdvancements(): Internal.PlayerAdvancements;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        addFood(f: number, m: number): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        player(): this;
        swing(): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        canStartSwimming(): boolean;
        doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getXpLevel(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        openGUI(gui: Internal.Consumer_<Internal.KubeJSGUI>): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isOp(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        isRespawnForced(): boolean;
        canChatInColor(): boolean;
        paint(renderer: Internal.CompoundTag_): void;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        setChatSession(arg0: Internal.RemoteChatSession_): void;
        getBlockReach(): number;
        getDisplayName(): Internal.Component;
        isChangingDimension(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        handler$dfc004$simplyswords$tick(ci: Internal.CallbackInfo_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setXpLevel(l: number): void;
        canRiderInteract(): boolean;
        setFoodLevel(foodLevel: number): void;
        addXPLevels(l: number): void;
        setTabListFooter(arg0: Internal.Component_): void;
        shouldRiderSit(): boolean;
        getLegsArmorItem(): Internal.ItemStack;
        getChatVisibility(): Internal.ChatVisiblity;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        handler$dfc000$simplyswords$damage(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        sendData(channel: string): void;
        getStatsCounter(): Internal.ServerStatsCounter;
        updateOptions(arg0: Internal.ServerboundClientInformationPacket_): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        sendTexturePack(arg0: string, arg1: string, arg2: boolean, arg3: Internal.Component_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        resetSentInfo(): void;
        isFrame(): boolean;
        /**
         *     Synchronizes the player's mana with the client. Call this whenever you change a player's mana in a non-traditional way.
        */
        syncMana(): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setXp(xp: number): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        drop(arg0: boolean): boolean;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        hasDisconnected(): boolean;
        trackStartFallingPosition(): void;
        notify(builder: Notification_): void;
        isMonster(): boolean;
        getLastSectionPos(): Internal.SectionPos;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        SetInvCopy(arg0: Internal.NonNullList_<any>): void;
        sendChatMessage(arg0: Internal.OutgoingChatMessage_, arg1: boolean, arg2: Internal.ChatType$Bound_): void;
        getCamera(): Internal.Entity;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getRespawnAngle(): number;
        setLastSectionPos(arg0: Internal.SectionPos_): void;
        getMotionY(): number;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        getTextFilter(): Internal.TextFilter;
        giveInHand(item: Internal.ItemStack_): void;
        ban(banner: string, reason: string, expiresInMillis: number): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        trackChunk(arg0: Internal.ChunkPos_, arg1: Internal.Packet_<any>): void;
        canReachRaw(arg0: Internal.Entity_, arg1: number): boolean;
        doTick(): void;
        trackEnteredOrExitedLavaOnVehicle(): void;
        getFeetArmorItem(): Internal.ItemStack;
        sendSystemMessage(arg0: Internal.Component_, arg1: boolean): void;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Internal.Entity_, arg2: Internal.EntityAnchorArgument$Anchor_): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        handler$dfc000$simplyswords$attack(target: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        resetLastActionTime(): void;
        getIpAddress(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        setMovementSpeedAddition(speed: number): void;
        getLastActionTime(): number;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        kick(reason: Internal.Component_): void;
        sendInventoryUpdate(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        untrackChunk(arg0: Internal.ChunkPos_): void;
        setTabListHeader(arg0: Internal.Component_): void;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        InvCopy(): Internal.NonNullList<any>;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get spawnLocation(): Internal.BlockContainerJS
        get offHandItem(): Internal.ItemStack
        set serverLevel(arg0: Internal.ServerLevel_)
        set spawnLocation(c: Internal.BlockContainerJS_)
        get tabListFooter(): Internal.Component
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set selectedSlot(index: number)
        get totalMovementSpeed(): number
        get customName(): Internal.Component
        set motionZ(z: number)
        /**
         *     Returns the player's magic data. Useful for changing the player's mana, or checking if the player is casting a spell.
         *     Changing the player's mana directly will not sync with the client. Use `syncMana()` on the player to sync the mana with the client.
        */
        get magicData(): Internal.MagicData
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        get containerCounter(): number
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set x(x: number)
        get xp(): number
        set creativeMode(mode: boolean)
        get miningBlock(): boolean
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        set experiencePoints(arg0: number)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get name(): Internal.Component
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        get tabListHeader(): Internal.Component
        get language(): string
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get respawnDimension(): Internal.ResourceKey<Internal.Level>
        get tabListDisplayName(): Internal.Component
        get recipeBook(): Internal.ServerRecipeBook
        get respawnPosition(): BlockPos
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        set gameMode(arg0: Internal.GameType_)
        set camera(arg0: Internal.Entity_)
        set statusMessage(message: Internal.Component_)
        get saturation(): number
        get fake(): boolean
        get chatSession(): Internal.RemoteChatSession
        set experienceLevels(arg0: number)
        get advancements(): Internal.PlayerAdvancements
        get xpLevel(): number
        get living(): boolean
        get op(): boolean
        get respawnForced(): boolean
        set chatSession(arg0: Internal.RemoteChatSession_)
        get blockReach(): number
        get displayName(): Internal.Component
        get changingDimension(): boolean
        set position(block: Internal.BlockContainerJS_)
        get teamId(): string
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        set tabListFooter(arg0: Internal.Component_)
        get legsArmorItem(): Internal.ItemStack
        get chatVisibility(): Internal.ChatVisiblity
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get statsCounter(): Internal.ServerStatsCounter
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get monster(): boolean
        get lastSectionPos(): Internal.SectionPos
        get type(): string
        get camera(): Internal.Entity
        set chestArmorItem(item: Internal.ItemStack_)
        get respawnAngle(): number
        set lastSectionPos(arg0: Internal.SectionPos_)
        get motionY(): number
        get passengers(): Internal.EntityArrayList
        get textFilter(): Internal.TextFilter
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get ipAddress(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set movementSpeedAddition(speed: number)
        get lastActionTime(): number
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set tabListHeader(arg0: Internal.Component_)
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        latency: number;
        containerCounter: number;
        wonGame: boolean;
        readonly gameMode: Internal.ServerPlayerGameMode;
        readonly server: Internal.MinecraftServer;
        connection: Internal.ServerGamePacketListenerImpl;
    }
    type ServerPlayer_ = ServerPlayer;
    class SpawnParticlesConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(particle: Internal.ParticleOptions_, count: number, speed: number, force: boolean, spread: Vec3d_, offsetY: number)
        isConfigurationValid(): boolean;
        count(): number;
        spread(): Vec3d;
        particle(): Internal.ParticleOptions;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        force(): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        offsetY(): number;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        speed(): number;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.SpawnParticlesConfiguration>;
    }
    type SpawnParticlesConfiguration_ = SpawnParticlesConfiguration;
    interface IForgeFluidState {
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        getFluidType(): Internal.FluidType;
        get fluidType(): Internal.FluidType
    }
    type IForgeFluidState_ = IForgeFluidState;
    class Structure$StructureSettings extends Internal.Record {
        constructor(biomes: Internal.HolderSet_<Internal.Biome>, spawnOverrides: Internal.Map_<Internal.MobCategory, Internal.StructureSpawnOverride>, step: Internal.GenerationStep$Decoration_, terrainAdaptation: Internal.TerrainAdjustment_)
        biomes(): Internal.HolderSet<Internal.Biome>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        terrainAdaptation(): Internal.TerrainAdjustment;
        static readonly CODEC: Internal.MapCodec<Internal.Structure$StructureSettings>;
    }
    type Structure$StructureSettings_ = Structure$StructureSettings;
    class BookCloningRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<any>;
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
    }
    type BookCloningRecipe_ = BookCloningRecipe;
    class InterModEnqueueEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type InterModEnqueueEvent_ = InterModEnqueueEvent;
    class StateDefinition$Builder <O, S extends Internal.StateHolder<O, S>> {
        constructor(arg0: O)
        create(arg0: Internal.Function_<O, S>, arg1: Internal.StateDefinition$Factory_<O, S>): Internal.StateDefinition<O, S>;
        add(...arg0: Internal.Property_<any>[]): this;
    }
    type StateDefinition$Builder_<O, S extends Internal.StateHolder<O, S>> = StateDefinition$Builder<O, S>;
    class SpellbreakerItem extends Internal.MagicSwordItem {
        constructor(arg0: any_[])
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
    }
    type SpellbreakerItem_ = SpellbreakerItem;
    class AbuseReport {
        constructor(arg0: string, arg1: string, arg2: Internal.ReportEvidence_, arg3: Internal.ReportedEntity_, arg4: Internal.Instant_)
        createdTime: Internal.Instant;
        reportedEntity: Internal.ReportedEntity;
        opinionComments: string;
        evidence: Internal.ReportEvidence;
        reason: string;
    }
    type AbuseReport_ = AbuseReport;
    class EntityPotionEffectsJS {
        constructor(e: Internal.LivingEntity_)
        getActive(mobEffect: Internal.MobEffect_): Internal.MobEffectInstance;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        add(mobEffect: Internal.MobEffect_, duration: number): void;
        clear(): void;
        getActive(): Internal.Collection<Internal.MobEffectInstance>;
        isActive(mobEffect: Internal.MobEffect_): boolean;
        getMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number): void;
        isApplicable(effect: Internal.MobEffectInstance_): boolean;
        getDuration(mobEffect: Internal.MobEffect_): number;
        add(mobEffect: Internal.MobEffect_): void;
        get active(): Internal.Collection<Internal.MobEffectInstance>
        get map(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
    }
    type EntityPotionEffectsJS_ = EntityPotionEffectsJS;
    class FillInBubblesWithWaterFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type FillInBubblesWithWaterFeature_ = FillInBubblesWithWaterFeature;
    class MappingRecipeComponent <T> implements Internal.RecipeComponentWithParent<T> {
        constructor(parent: Internal.RecipeComponent_<T>, mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>)
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): this;
        parentComponent(): Internal.RecipeComponent<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<T>;
        read(recipe: Internal.RecipeJS_, from: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        write(recipe: Internal.RecipeJS_, value: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
    }
    type MappingRecipeComponent_<T> = MappingRecipeComponent<T>;
    class ScreenEvent$Init$Post extends Internal.ScreenEvent$Init {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.List_<Internal.GuiEventListener>, arg2: Internal.Consumer_<Internal.GuiEventListener>, arg3: Internal.Consumer_<Internal.GuiEventListener>)
    }
    type ScreenEvent$Init$Post_ = ScreenEvent$Init$Post;
    class SimplySwordsSwordItem extends Internal.SwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, ...repairIngredient: string[])
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
    }
    type SimplySwordsSwordItem_ = SimplySwordsSwordItem;
    class CaxtonTextRenderer {
        constructor(vanillaTextRenderer: Internal.Font_, vanillaTextHandler: Internal.StringSplitter_, cacheSupplier: Internal.Supplier_<Internal.CaxtonGlyphCache>)
        static getAdvanceValidatingInstance(): Internal.CaxtonTextRenderer;
        static getInstance(): Internal.CaxtonTextRenderer;
        getCache(): Internal.CaxtonGlyphCache;
        drawWithOutline(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, outlineColor: number, matrix: Matrix4f_, vertexConsumers: Internal.MultiBufferSource_, light: number, addCorners: boolean): void;
        getHandler(): Internal.CaxtonTextHandler;
        draw(text: Internal.CaxtonText_, x: number, y: number, color: number, shadow: boolean, matrix: Matrix4f_, vertexConsumerProvider: Internal.MultiBufferSource_, seeThrough: boolean, backgroundColor: number, light: number, leftmostCodePoint: number, maxWidth: number): number;
        getFontStorage(id: ResourceLocation_): Internal.FontSet;
        drawLayer(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean, matrix: Matrix4f_, vertexConsumerProvider: Internal.MultiBufferSource_, layerType: Internal.Font$DisplayMode_, backgroundColor: number, light: number, leftmostCodePoint: number, maxWidth: number): number;
        drawLayer(text: string, x: number, y: number, color: number, shadow: boolean, matrix: Matrix4f_, vertexConsumerProvider: Internal.MultiBufferSource_, layerType: Internal.Font$DisplayMode_, backgroundColor: number, light: number, leftmostCodePoint: number, maxWidth: number): number;
        clearCaches(): void;
        get advanceValidatingInstance(): Internal.CaxtonTextRenderer
        get instance(): Internal.CaxtonTextRenderer
        get cache(): Internal.CaxtonGlyphCache
        get handler(): Internal.CaxtonTextHandler
        rtl: boolean;
    }
    type CaxtonTextRenderer_ = CaxtonTextRenderer;
    class ScriptType extends Internal.Enum<Internal.ScriptType> implements Internal.ScriptTypePredicate, Internal.ScriptTypeHolder {
        getValidTypes(): Internal.List<Internal.ScriptType>;
        and(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        isClient(): boolean;
        test(type: Internal.ScriptType_): boolean;
        negate(): Internal.Predicate<any>;
        static valueOf(name: string): Internal.ScriptType;
        isStartup(): boolean;
        or(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        kjs$getScriptType(): this;
        test(arg0: any): boolean;
        getLogFile(): Internal.Path;
        isServer(): boolean;
        static getCurrent(cx: Internal.Context_): Internal.ScriptType;
        static values(): Internal.ScriptType[];
        get validTypes(): Internal.List<Internal.ScriptType>
        get client(): boolean
        get startup(): boolean
        get logFile(): Internal.Path
        get server(): boolean
        readonly name: string;
        static readonly VALUES: Internal.ScriptType[];
        readonly nameStrip: string;
        static readonly STARTUP: Internal.ScriptType;
        readonly console: Internal.ConsoleJS;
        readonly path: Internal.Path;
        static readonly SERVER: Internal.ScriptType;
        static readonly CLIENT: Internal.ScriptType;
    }
    type ScriptType_ = ScriptType | "startup" | "server" | "client";
    class PermissionType <T> {
        typeToken(): T;
        typeName(): string;
    }
    type PermissionType_<T> = PermissionType<T>;
    class Vector4i implements Internal.Cloneable, Internal.Vector4ic, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector4dc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number, arg2: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector4fc_, arg1: number)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        constructor(arg0: Internal.Vector4ic_)
        add(arg0: Internal.Vector4ic_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        z(): number;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        x(): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: number): this;
        mul(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.IntBuffer_): this;
        distance(arg0: Internal.Vector4ic_): number;
        absolute(): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        setFromAddress(arg0: number): this;
        div(arg0: number): this;
        set(arg0: Internal.Vector4ic_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector4ic_): this;
        min(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        toString(arg0: Internal.NumberFormat_): string;
        set(arg0: Internal.Vector4dc_, arg1: number): this;
        lengthSquared(): number;
        length(): number;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        min(arg0: Internal.Vector4ic_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        add(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        distanceSquared(arg0: Internal.Vector4ic_): number;
        minComponent(): number;
        zero(): this;
        clone(): any;
        w(): number;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        absolute(arg0: Internal.Vector4i_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        div(arg0: Internal.Vector4ic_): this;
        setComponent(arg0: number, arg1: number): this;
        maxComponent(): number;
        y(): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        set(arg0: Internal.Vector4dc_): this;
        gridDistance(arg0: Internal.Vector4ic_): number;
        div(arg0: number): this;
        set(arg0: number[]): this;
        mul(arg0: Internal.Vector4ic_): this;
        max(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        sub(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        mul(arg0: number): this;
        gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        dot(arg0: Internal.Vector4ic_): number;
        negate(): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        mul(arg0: number, arg1: Internal.Vector4i_): this;
        negate(arg0: Internal.Vector4i_): this;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        getToAddress(arg0: number): Internal.Vector4ic;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        get(arg0: number): number;
        sub(arg0: Internal.Vector4ic_): this;
        set(arg0: Internal.Vector4fc_, arg1: number): this;
        set fromAddress(arg0: number)
        z: number;
        x: number;
        y: number;
        w: number;
    }
    type Vector4i_ = Vector4i;
    class ServerFunctionLibrary implements Internal.PreparableReloadListener, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: number, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>)
        getTag(arg0: ResourceLocation_): Internal.Collection<Internal.CommandFunction>;
        getAvailableTags(): Internal.Iterable<ResourceLocation>;
        getName(): string;
        getFunction(arg0: ResourceLocation_): Internal.Optional<Internal.CommandFunction>;
        getFunctions(): Internal.Map<ResourceLocation, Internal.CommandFunction>;
        getFabricDependencies(): Internal.Collection<any>;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get availableTags(): Internal.Iterable<ResourceLocation>
        get name(): string
        get functions(): Internal.Map<ResourceLocation, Internal.CommandFunction>
        get fabricDependencies(): Internal.Collection<any>
        get fabricId(): ResourceLocation
    }
    type ServerFunctionLibrary_ = ServerFunctionLibrary;
    class BlockComponent extends Internal.Record implements Internal.RecipeComponent<Internal.Block> {
        constructor(crole: Internal.ComponentRole_)
        asArray(): Internal.ArrayRecipeComponent<Internal.Block>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Block>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Block, O>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Block;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Block>;
        key(name: string): Internal.RecipeKey<Internal.Block>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<Internal.Block>;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        static builder(): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, map: Internal.Map_<any, any>): void;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        crole(): Internal.ComponentRole;
        checkValueHasChanged(oldValue: Internal.Block_, newValue: Internal.Block_): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Block>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Block>>;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        write(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Block, O>;
        read(recipe: Internal.RecipeJS_, from: any): Internal.Block;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Block;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        static readonly OUTPUT: Internal.BlockComponent;
        static readonly INPUT: Internal.BlockComponent;
        static readonly BLOCK: Internal.BlockComponent;
    }
    type BlockComponent_ = BlockComponent;
    abstract class DragonRespawnAnimation extends Internal.Enum<Internal.DragonRespawnAnimation> {
        constructor(arg0: string, arg1: number)
        static valueOf(arg0: string): Internal.DragonRespawnAnimation;
        abstract tick(arg0: Internal.ServerLevel_, arg1: Internal.EndDragonFight_, arg2: Internal.List_<Internal.EndCrystal>, arg3: number, arg4: BlockPos_): void;
        static values(): Internal.DragonRespawnAnimation[];
        static readonly SUMMONING_PILLARS: Internal.DragonRespawnAnimation;
        static readonly PREPARING_TO_SUMMON_PILLARS: Internal.DragonRespawnAnimation;
        static readonly END: Internal.DragonRespawnAnimation;
        static readonly START: Internal.DragonRespawnAnimation;
        static readonly SUMMONING_DRAGON: Internal.DragonRespawnAnimation;
    }
    type DragonRespawnAnimation_ = "summoning_pillars" | "start" | "summoning_dragon" | DragonRespawnAnimation | "end" | "preparing_to_summon_pillars";
    interface IntSet extends Internal.Set<number>, Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of(arg0: number, arg1: number): this;
        of(): this;
        abstract contains(arg0: number): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        intParallelStream(): Internal.IntStream;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        spliterator(): Internal.IntSpliterator;
        intIterator(): Internal.IntIterator;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        abstract remove(arg0: number): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract toArray(arg0: number[]): number[];
        of(arg0: number, arg1: number, arg2: number): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        of(...arg0: number[]): this;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        get empty(): boolean
    }
    type IntSet_ = IntSet;
    class Vector4d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector4dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: Internal.Vector4dc_)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector4ic_)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        set(arg0: Internal.Vector4ic_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalize(arg0: number, arg1: Internal.Vector4d_): this;
        negate(arg0: Internal.Vector4d_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        mul(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        sub(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        angleCos(arg0: Internal.Vector4dc_): number;
        mul(arg0: Internal.Vector4fc_): this;
        normalize(arg0: number): this;
        getToAddress(arg0: number): Internal.Vector4dc;
        equals(arg0: Internal.Vector4dc_, arg1: number): boolean;
        x(): number;
        div(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        min(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        fma(arg0: number, arg1: Internal.Vector4dc_): this;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        normalize(arg0: Internal.Vector4d_): this;
        dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
        set(arg0: number, arg1: number, arg2: number): this;
        distanceSquared(arg0: Internal.Vector4dc_): number;
        rotateX(arg0: number): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        toString(arg0: Internal.NumberFormat_): string;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): this;
        floor(arg0: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        sub(arg0: Internal.Vector4fc_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mulProject(arg0: Internal.Matrix4dc_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        lerp(arg0: Internal.Vector4dc_, arg1: number): this;
        normalize3(): this;
        set(arg0: number[]): this;
        round(): this;
        clone(): any;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector4fc_): this;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distance(arg0: Internal.Vector4dc_): number;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        add(arg0: Internal.Vector4dc_): this;
        angle(arg0: Internal.Vector4dc_): number;
        get(arg0: Internal.Vector4d_): this;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        mulTranspose(arg0: Internal.Matrix4dc_): this;
        get(arg0: number): number;
        y(): number;
        lengthSquared(): number;
        absolute(arg0: Internal.Vector4d_): this;
        mulAffineTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        negate(): this;
        ceil(): this;
        dot(arg0: Internal.Vector4dc_): number;
        div(arg0: number): this;
        set(arg0: Internal.DoubleBuffer_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): this;
        round(arg0: Internal.Vector4d_): this;
        setComponent(arg0: number, arg1: number): this;
        rotateX(arg0: number, arg1: Internal.Vector4d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mul(arg0: number): this;
        floor(): this;
        hermite(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4dc_, arg3: number, arg4: Internal.Vector4d_): this;
        get(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        absolute(): this;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        div(arg0: Internal.Vector4dc_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        min(arg0: Internal.Vector4dc_): this;
        normalize(): this;
        z(): number;
        isFinite(): boolean;
        set(arg0: Internal.Vector2fc_, arg1: number, arg2: number): this;
        get(arg0: Vec4f_): Vec4f;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Vector4dc_): this;
        setFromAddress(arg0: number): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        ceil(arg0: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: number[]): this;
        set(arg0: Internal.ByteBuffer_): this;
        mulTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        rotateZ(arg0: number): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        rotateY(arg0: number, arg1: Internal.Vector4d_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        set(arg0: Internal.Vector2dc_, arg1: number, arg2: number): this;
        sub(arg0: Internal.Vector4dc_): this;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        zero(): this;
        minComponent(): number;
        add(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        normalize3(arg0: Internal.Vector4d_): this;
        smoothStep(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        max(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: Internal.Vector4fc_): this;
        set(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        lerp(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        fma(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: Internal.Vector4d_): this;
        sub(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        div(arg0: number, arg1: Internal.Vector4d_): this;
        w(): number;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector4d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotate(arg0: Internal.Quaterniondc_): this;
        rotateY(arg0: number): this;
        set(arg0: number): this;
        rotateZ(arg0: number, arg1: Internal.Vector4d_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        add(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        max(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Matrix4fc_): this;
        get finite(): boolean
        set fromAddress(arg0: number)
        z: number;
        w: number;
        x: number;
        y: number;
    }
    type Vector4d_ = Vector4d;
    class BakedGlyph {
        constructor(arg0: any_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        handler$boo000$oculus$render(italic: boolean, x: number, y: number, matrix: Matrix4f_, vertexConsumer: Internal.VertexConsumer_, red: number, green: number, blue: number, alpha: number, light: number, ci: Internal.CallbackInfo_): void;
        renderType(arg0: Internal.Font$DisplayMode_): Internal.RenderType;
        renderEffect(arg0: Internal.BakedGlyph$Effect_, arg1: Matrix4f_, arg2: Internal.VertexConsumer_, arg3: number): void;
        render(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    type BakedGlyph_ = BakedGlyph;
    interface VertexBufferHelper {
        abstract restoreBinding(): void;
        abstract saveBinding(): void;
    }
    type VertexBufferHelper_ = VertexBufferHelper;
    class IntTag extends Internal.NumericTag {
        constructor(arg0: number)
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.IntTag;
        copy(): this;
        getType(): Internal.TagType<Internal.IntTag>;
        get asString(): string
        get type(): Internal.TagType<Internal.IntTag>
        static readonly TYPE: Internal.TagType<Internal.IntTag>;
    }
    type IntTag_ = IntTag;
    class ExplodeConfiguration implements Internal.IDynamicFeatureConfiguration {
        constructor(arg0: number, arg1: Internal.Explosion$BlockInteraction_, arg2: boolean, arg3: Internal.Holder_<Internal.ConfiguredBlockCondition<any, any>>, arg4: Internal.Holder_<Internal.ConfiguredBlockCondition<any, any>>, arg5: boolean)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        indestructible(): Internal.Holder<Internal.ConfiguredBlockCondition<any, any>>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        calculator(): Internal.ExplosionDamageCalculator;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        createFire(): boolean;
        damageSelf(): boolean;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        power(): number;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        destructible(): Internal.Holder<Internal.ConfiguredBlockCondition<any, any>>;
        getMissingBinds(): Internal.List<string>;
        destructionType(): Internal.Explosion$BlockInteraction;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ExplodeConfiguration>;
    }
    type ExplodeConfiguration_ = ExplodeConfiguration;
    interface GenerationProperties {
        abstract getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>;
        abstract getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        abstract getFeatures(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>;
        get features(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>
    }
    type GenerationProperties_ = GenerationProperties;
    class ContextUtils$EntityInteractContext {
        constructor(entity: Internal.Entity_, player: Player_, hand: Internal.InteractionHand_)
        /**
         * The player interacting with the entity
        */
        readonly player: Player;
        /**
         * The hand used for interaction
        */
        readonly hand: Internal.InteractionHand;
        /**
         * The entity being interacted with
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EntityInteractContext_ = ContextUtils$EntityInteractContext;
    class SinglePoolElement extends Internal.StructurePoolElement implements Internal.SinglePoolElementAccessor {
        constructor(arg0: Internal.Either_<ResourceLocation, Internal.StructureTemplate>, arg1: Internal.Holder_<Internal.StructureProcessorList>, arg2: Internal.StructureTemplatePool$Projection_)
        callGetTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        getTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        static templateCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Either<ResourceLocation, Internal.StructureTemplate>>;
        getDataMarkers(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: boolean): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        getSettings(arg0: Internal.Rotation_, arg1: Internal.BoundingBox_, arg2: boolean): Internal.StructurePlaceSettings;
        static processorsCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Holder<Internal.StructureProcessorList>>;
        readonly template: Internal.Either<ResourceLocation, Internal.StructureTemplate>;
        readonly processors: Internal.Holder<Internal.StructureProcessorList>;
        static readonly CODEC: Internal.Codec<Internal.SinglePoolElement>;
    }
    type SinglePoolElement_ = SinglePoolElement;
    class AnimationApplier extends dev.kosmx.playerAnim.core.impl.AnimationProcessor {
        constructor(animation: Internal.IAnimation_)
        updatePart(partName: string, part: Internal.ModelPart_): void;
    }
    type AnimationApplier_ = AnimationApplier;
    class TaggedChoice$TaggedChoiceType <K> extends com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<K, any>> {
        constructor(arg0: string, arg1: com.mojang.datafixers.types.Type_<K>, arg2: Internal.Object2ObjectMap_<K, com.mojang.datafixers.types.Type<any>>)
        findTypeInChildren<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        getName(): string;
        getKeyType(): com.mojang.datafixers.types.Type<K>;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>;
        point(arg0: Internal.DynamicOps_<any>, arg1: K, arg2: any): Internal.Optional<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>>;
        point(arg0: Internal.DynamicOps_<any>): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        static elementResult<K, FT, FR>(arg0: K, arg1: Internal.TaggedChoice$TaggedChoiceType_<K>, arg2: Internal.RewriteResult_<FT, FR>): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, com.mojang.datafixers.util.Pair<K, any>>;
        one(arg0: Internal.TypeRewriteRule_): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        types(): Internal.Map<K, com.mojang.datafixers.types.Type<any>>;
        hasType(arg0: K): boolean;
        get name(): string
        get keyType(): com.mojang.datafixers.types.Type<K>
    }
    type TaggedChoice$TaggedChoiceType_<K> = TaggedChoice$TaggedChoiceType<K>;
    class WanderingMagicianArmorItem extends Internal.ExtendedArmorItem {
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
    type WanderingMagicianArmorItem_ = WanderingMagicianArmorItem;
    class CarvingMaskPlacement extends Internal.PlacementModifier {
        static forStep(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMaskPlacement;
        static readonly CODEC: Internal.Codec<Internal.CarvingMaskPlacement>;
    }
    type CarvingMaskPlacement_ = CarvingMaskPlacement;
    class Direction8 extends Internal.Enum<Internal.Direction8> {
        getDirections(): Internal.Set<Internal.Direction>;
        getStepX(): number;
        getStepZ(): number;
        static values(): Internal.Direction8[];
        static valueOf(arg0: string): Internal.Direction8;
        get directions(): Internal.Set<Internal.Direction>
        get stepX(): number
        get stepZ(): number
        static readonly NORTH_EAST: Internal.Direction8;
        static readonly EAST: Internal.Direction8;
        static readonly NORTH_WEST: Internal.Direction8;
        static readonly SOUTH_EAST: Internal.Direction8;
        static readonly SOUTH_WEST: Internal.Direction8;
        static readonly NORTH: Internal.Direction8;
        static readonly SOUTH: Internal.Direction8;
        static readonly WEST: Internal.Direction8;
    }
    type Direction8_ = "north_west" | "west" | "north_east" | "east" | "south_west" | "south" | "north" | Direction8 | "south_east";
    class OffsetCondition extends Internal.BlockCondition<Internal.OffsetConfiguration<Internal.ConfiguredBlockCondition<any, any>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type OffsetCondition_ = OffsetCondition;
    abstract class AbstractByteBufAllocator implements Internal.ByteBufAllocator {
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(): Internal.ByteBuf;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        heapBuffer(): Internal.ByteBuf;
        heapBuffer(arg0: number): Internal.ByteBuf;
        ioBuffer(arg0: number): Internal.ByteBuf;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        calculateNewCapacity(arg0: number, arg1: number): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        buffer(arg0: number): Internal.ByteBuf;
        get directBufferPooled(): boolean
    }
    type AbstractByteBufAllocator_ = AbstractByteBufAllocator;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface IScrollGridWidgetFactory <R> extends Internal.ISlottedWidgetFactory<R> {
        abstract setPosition(arg0: number, arg1: number): void;
        abstract getArea(): Internal.ScreenRectangle;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract createWidgetForSlots(arg0: Internal.IRecipeExtrasBuilder_, arg1: R, arg2: Internal.List_<Internal.IRecipeSlotDrawable>): void;
        get area(): Internal.ScreenRectangle
    }
    type IScrollGridWidgetFactory_<R> = IScrollGridWidgetFactory<R>;
    interface DoubleToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToIntFunction_ = DoubleToIntFunction;
    class MoveControl$Operation extends Internal.Enum<Internal.MoveControl$Operation> {
        static values(): Internal.MoveControl$Operation[];
        static valueOf(arg0: string): Internal.MoveControl$Operation;
        static readonly STRAFE: Internal.MoveControl$Operation;
        static readonly MOVE_TO: Internal.MoveControl$Operation;
        static readonly WAIT: Internal.MoveControl$Operation;
        static readonly JUMPING: Internal.MoveControl$Operation;
    }
    type MoveControl$Operation_ = MoveControl$Operation | "wait" | "jumping" | "move_to" | "strafe";
    class ConsumeItemTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ItemPredicate_)
        static usedItem(arg0: Internal.ItemPredicate_): Internal.ConsumeItemTrigger$TriggerInstance;
        static usedItem(): Internal.ConsumeItemTrigger$TriggerInstance;
        matches(arg0: Internal.ItemStack_): boolean;
        static usedItem(arg0: Internal.ItemLike_): Internal.ConsumeItemTrigger$TriggerInstance;
    }
    type ConsumeItemTrigger$TriggerInstance_ = ConsumeItemTrigger$TriggerInstance;
    abstract class ViewportEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number)
        getRenderer(): Internal.GameRenderer;
        getCamera(): Internal.Camera;
        getPartialTick(): number;
        get renderer(): Internal.GameRenderer
        get camera(): Internal.Camera
        get partialTick(): number
    }
    type ViewportEvent_ = ViewportEvent;
    class ScatteredOreFeature extends Internal.Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
    }
    type ScatteredOreFeature_ = ScatteredOreFeature;
    interface FileNotFoundAction {
        copyData(arg0: Internal.InputStream_): this;
        copyData(arg0: Internal.URL_): this;
        abstract run(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): boolean;
        copyData(arg0: Internal.File_): this;
        copyResource(arg0: string): this;
        copyData(arg0: Internal.Path_): this;
        (arg0: Internal.Path, arg1: Internal.ConfigFormat<any>): boolean;
        readonly THROW_ERROR: Internal.FileNotFoundAction;
        readonly READ_NOTHING: Internal.FileNotFoundAction;
        readonly CREATE_EMPTY: Internal.FileNotFoundAction;
    }
    type FileNotFoundAction_ = FileNotFoundAction;
    class SpiderAspectEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
        static readonly DAMAGE_PER_LEVEL: 0.05;
    }
    type SpiderAspectEffect_ = SpiderAspectEffect;
    interface VerticalAnchor {
        aboveBottom(arg0: number): this;
        absolute(arg0: number): this;
        belowTop(arg0: number): this;
        bottom(): this;
        top(): this;
        abstract resolveY(arg0: Internal.WorldGenerationContext_): number;
        (arg0: Internal.WorldGenerationContext): number;
        readonly BOTTOM: Internal.VerticalAnchor$AboveBottom;
        readonly CODEC: Internal.Codec<Internal.VerticalAnchor>;
        readonly TOP: Internal.VerticalAnchor$BelowTop;
    }
    type VerticalAnchor_ = VerticalAnchor;
    class AnimationController$State extends Internal.Enum<Internal.AnimationController$State> {
        static values(): Internal.AnimationController$State[];
        static valueOf(arg0: string): Internal.AnimationController$State;
        static readonly TRANSITIONING: Internal.AnimationController$State;
        static readonly PAUSED: Internal.AnimationController$State;
        static readonly RUNNING: Internal.AnimationController$State;
        static readonly STOPPED: Internal.AnimationController$State;
    }
    type AnimationController$State_ = "transitioning" | "paused" | AnimationController$State | "stopped" | "running";
    interface IForgeRegistry$ValidateCallback <V> {
        abstract onValidate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_, arg2: number, arg3: ResourceLocation_, arg4: V): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V): void;
    }
    type IForgeRegistry$ValidateCallback_<V> = IForgeRegistry$ValidateCallback<V>;
    class PhasingConfiguration$RenderType extends Internal.Enum<Internal.PhasingConfiguration$RenderType> {
        static valueOf(arg0: string): Internal.PhasingConfiguration$RenderType;
        static values(): Internal.PhasingConfiguration$RenderType[];
        static readonly BLINDNESS: Internal.PhasingConfiguration$RenderType;
        static readonly NONE: Internal.PhasingConfiguration$RenderType;
        static readonly REMOVE_BLOCKS: Internal.PhasingConfiguration$RenderType;
    }
    type PhasingConfiguration$RenderType_ = PhasingConfiguration$RenderType | "remove_blocks" | "none" | "blindness";
    class ClickData {
        constructor()
        writeToBuf(buf: Internal.FriendlyByteBuf_): void;
        static readFromBuf(buf: Internal.FriendlyByteBuf_): Internal.ClickData;
        readonly isRemote: boolean;
        readonly button: number;
        readonly isCtrlClick: boolean;
        readonly isShiftClick: boolean;
    }
    type ClickData_ = ClickData;
    class IntComparingEntityCondition extends Internal.EntityCondition<Internal.IntegerComparisonConfiguration> {
        constructor(arg0: Internal.Function_<Internal.Entity, number>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        check(arg0: Internal.IntegerComparisonConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type IntComparingEntityCondition_ = IntComparingEntityCondition;
    abstract class FieldNamingPolicy extends Internal.Enum<Internal.FieldNamingPolicy> implements Internal.FieldNamingStrategy {
        abstract translateName(arg0: Internal.Field_): string;
        static valueOf(arg0: string): Internal.FieldNamingPolicy;
        static values(): Internal.FieldNamingPolicy[];
        static readonly UPPER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly IDENTITY: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DASHES: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE_WITH_SPACES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DOTS: Internal.FieldNamingPolicy;
    }
    type FieldNamingPolicy_ = "lower_case_with_underscores" | "lower_case_with_dashes" | "identity" | "upper_camel_case_with_spaces" | "lower_case_with_dots" | "upper_case_with_underscores" | FieldNamingPolicy | "upper_camel_case";
    class ContextUtils$EntityItemStackContext {
        constructor(item: Internal.ItemStack_, entity: Internal.LivingEntity_)
        /**
         * The item stack
        */
        readonly item: Internal.ItemStack;
        /**
         * The living entity
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$EntityItemStackContext_ = ContextUtils$EntityItemStackContext;
    class CaxtonAtlas$Page extends Internal.AbstractTexture {
        constructor(atlas: Internal.CaxtonAtlas_, pageNum: number, range: number, numMipmapLevels: number, format: Internal.NativeImage$Format_)
        getId(): ResourceLocation;
        getNumMipmapLevels(): number;
        getFormat(): Internal.NativeImage$Format;
        getRange(): number;
        get id(): ResourceLocation
        get numMipmapLevels(): number
        get format(): Internal.NativeImage$Format
        get range(): number
    }
    type CaxtonAtlas$Page_ = CaxtonAtlas$Page;
    interface ItemTintFunction {
        abstract getColor(arg0: Internal.ItemStack_, arg1: number): Internal.Color;
        of(cx: Internal.Context_, o: any): this;
        (arg0: Internal.ItemStack, arg1: number): Internal.Color_;
        readonly POTION: Internal.ItemTintFunction;
        readonly DISPLAY_COLOR_NBT: Internal.ItemTintFunction;
        readonly BLOCK: Internal.ItemTintFunction;
        readonly MAP: Internal.ItemTintFunction;
    }
    type ItemTintFunction_ = ItemTintFunction;
}
