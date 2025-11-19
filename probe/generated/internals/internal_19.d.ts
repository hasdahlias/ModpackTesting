/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface WidgetUIAccess {
        abstract writeClientAction(arg0: Widget_, arg1: number, arg2: Internal.Consumer_<Internal.FriendlyByteBuf>): void;
        abstract writeUpdateInfo(arg0: Widget_, arg1: number, arg2: Internal.Consumer_<Internal.FriendlyByteBuf>): void;
        abstract attemptMergeStack(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): boolean;
    }
    type WidgetUIAccess_ = WidgetUIAccess;
    class ContextUtils$OnEffectContext {
        constructor(effect: Internal.MobEffectInstance_, entity: Internal.LivingEntity_)
        /**
         * The mob effect instance applied to the living entity
        */
        readonly effect: Internal.MobEffectInstance;
        /**
         * The living entity affected by the mob effect
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$OnEffectContext_ = ContextUtils$OnEffectContext;
    class FloatComparingItemCondition extends Internal.ItemCondition<Internal.FloatComparisonConfiguration> {
        constructor(arg0: Internal.Function_<Internal.ItemStack, number>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type FloatComparingItemCondition_ = FloatComparingItemCondition;
    interface CaxtonTextHandler$HighlightConsumer {
        abstract accept(arg0: number, arg1: number): void;
        (arg0: number, arg1: number): void;
    }
    type CaxtonTextHandler$HighlightConsumer_ = CaxtonTextHandler$HighlightConsumer;
    interface WaterMovingEntity {
        abstract isInMovementPhase(): boolean;
        get inMovementPhase(): boolean
        (): boolean;
    }
    type WaterMovingEntity_ = WaterMovingEntity;
    class ChatVisiblity extends Internal.Enum<Internal.ChatVisiblity> implements Internal.OptionEnum {
        static byId(arg0: number): Internal.ChatVisiblity;
        getKey(): string;
        static valueOf(arg0: string): Internal.ChatVisiblity;
        getCaption(): Internal.Component;
        static values(): Internal.ChatVisiblity[];
        getId(): number;
        get key(): string
        get caption(): Internal.Component
        get id(): number
        static readonly HIDDEN: Internal.ChatVisiblity;
        static readonly FULL: Internal.ChatVisiblity;
        static readonly SYSTEM: Internal.ChatVisiblity;
    }
    type ChatVisiblity_ = "system" | "full" | "hidden" | ChatVisiblity;
    abstract class BiomeSource implements Internal.BiomeResolver, Internal.BiomeSourceAccessor, Internal.IExtendedBiomeSource {
        constructor()
        appendDeferredBiomesList(arg0: Internal.List_<any>): void;
        findClosestBiome3d(arg0: BlockPos_, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg5: Internal.Climate$Sampler_, arg6: Internal.LevelReader_): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
        possibleBiomes(): Internal.Set<Internal.Holder<Internal.Biome>>;
        getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Climate$Sampler_): Internal.Set<Internal.Holder<Internal.Biome>>;
        abstract collectPossibleBiomes(): Internal.Stream<Internal.Holder<Internal.Biome>>;
        fabric_modifyBiomeSet(biomes: Internal.Set_<any>): Internal.Set<any>;
        abstract codec(): Internal.Codec<Internal.BiomeSource>;
        getResourceKeyMap(): Internal.Map<any, any>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg5: Internal.RandomSource_, arg6: Internal.Climate$Sampler_): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
        expandBiomesWith(arg0: Internal.Set_<any>): void;
        addDebugInfo(arg0: Internal.List_<string>, arg1: BlockPos_, arg2: Internal.Climate$Sampler_): void;
        abstract getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Internal.Climate$Sampler_): Internal.Holder<Internal.Biome>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg6: Internal.RandomSource_, arg7: boolean, arg8: Internal.Climate$Sampler_): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
        setResourceKeyMap(arg0: Internal.Map_<any, any>): void;
        get resourceKeyMap(): Internal.Map<any, any>
        set resourceKeyMap(arg0: Internal.Map_<any, any>)
        possibleBiomes: Internal.Supplier<Internal.Set<Internal.Holder<Internal.Biome>>>;
        static CODEC: Internal.Codec<Internal.BiomeSource>;
    }
    type BiomeSource_ = BiomeSource;
    interface AbortableIterationConsumer <T> {
        forConsumer<T>(arg0: Internal.Consumer_<T>): this;
        abstract accept(arg0: T): Internal.AbortableIterationConsumer$Continuation;
        (arg0: T): Internal.AbortableIterationConsumer$Continuation_;
    }
    type AbortableIterationConsumer_<T> = AbortableIterationConsumer<T>;
    class RenderStateShard$CullStateShard extends Internal.RenderStateShard$BooleanStateShard {
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
    type RenderStateShard$CullStateShard_ = RenderStateShard$CullStateShard;
    class ObjectArrayList <K> extends Internal.AbstractObjectList<K> implements Internal.RandomAccess, Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.ObjectList_<K>)
        constructor(arg0: Internal.ObjectCollection_<K>)
        constructor(arg0: K[], arg1: number, arg2: number)
        constructor(arg0: Internal.ObjectIterator_<K>)
        constructor(arg0: K[])
        constructor(arg0: Internal.Iterator_<K>)
        constructor(arg0: number)
        constructor(arg0: Internal.Collection_<K>)
        clone(): any;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        setElements(arg0: number, arg1: K[]): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        toArray<K>(arg0: K[]): K[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        static of<K>(...arg0: K[]): Internal.ObjectArrayList<K>;
        set(arg0: number, arg1: K): K;
        parallelStream(): Internal.Stream<K>;
        static of<K>(): Internal.ObjectArrayList<K>;
        listIterator(arg0: number): Internal.ListIterator<any>;
        static wrap<K>(arg0: K[]): Internal.ObjectArrayList<K>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        setElements(arg0: K[]): void;
        static toListWithExpectedSize<K>(arg0: number): Internal.Collector<K, any, Internal.ObjectArrayList<K>>;
        equals(arg0: Internal.ObjectArrayList_<K>): boolean;
        compareTo(arg0: Internal.ObjectArrayList_<K>): number;
        static of<K>(arg0: K): Internal.ObjectList<K>;
        get(arg0: number): K;
        remove(arg0: number): K;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectList<K>;
        static wrap<K>(arg0: K[], arg1: number): Internal.ObjectArrayList<K>;
        elements(): K[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        replaceAll(arg0: Internal.UnaryOperator_<K>): void;
        static of<K>(arg0: K, arg1: K): Internal.ObjectList<K>;
        subList(arg0: number, arg1: number): Internal.List<any>;
        trim(): void;
        addAll(arg0: Internal.ObjectList_<K>): boolean;
        spliterator(): Internal.Spliterator<any>;
        ensureCapacity(arg0: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        trim(arg0: number): void;
        static toList<K>(): Internal.Collector<K, any, Internal.ObjectArrayList<K>>;
        stream(): Internal.Stream<K>;
        set elements(arg0: K[])
        static readonly DEFAULT_INITIAL_CAPACITY: 10;
    }
    type ObjectArrayList_<K> = ObjectArrayList<K>;
    class MutableComponent implements Internal.ComponentKJS, Internal.Component {
        constructor(arg0: Internal.ComponentContents_, arg1: Internal.List_<Internal.Component>, arg2: Internal.Style_)
        append(arg0: Internal.Component_): this;
        getVisualOrderText(): Internal.FormattedCharSequence;
        toFlatList(): Internal.List<Internal.Component>;
        hasStyle(): boolean;
        darkRed(): this;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        toJson(): Internal.JsonElement;
        clickOpenUrl(url: string): this;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        darkBlue(): this;
        obfuscated(value: boolean): this;
        getString(arg0: number): string;
        darkGreen(): this;
        color(c: Internal.Color_): this;
        bold(): this;
        underlined(): this;
        static nbt(arg0: string, arg1: boolean, arg2: Internal.Optional_<Internal.Component>, arg3: Internal.DataSource_): Internal.MutableComponent;
        yellow(): this;
        withStyle(arg0: Internal.UnaryOperator_<Internal.Style>): this;
        darkPurple(): this;
        clickCopy(text: string): this;
        blue(): this;
        static translatableWithFallback(arg0: string, arg1: string): Internal.MutableComponent;
        hover(s: Internal.Component_): this;
        bold(value: boolean): this;
        static score(arg0: string, arg1: string): Internal.MutableComponent;
        static create(arg0: Internal.ComponentContents_): Internal.MutableComponent;
        withStyle(arg0: Internal.ChatFormatting_): this;
        getContents(): Internal.ComponentContents;
        aqua(): this;
        green(): this;
        clickOpenFile(path: string): this;
        static literal(arg0: string): Internal.MutableComponent;
        black(): this;
        obfuscated(): this;
        strikethrough(value: boolean): this;
        insertion(s: string): this;
        static translatable(arg0: string): Internal.MutableComponent;
        red(): this;
        clickRunCommand(command: string): this;
        italic(): this;
        static translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        static empty(): Internal.MutableComponent;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        component(): Internal.Component;
        click(s: Internal.ClickEvent_): this;
        isEmpty(): boolean;
        underlined(value: boolean): this;
        asIterable(): Internal.Iterable<Internal.Component>;
        getStyle(): Internal.Style;
        self(): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        rawComponent(): this;
        gray(): this;
        font(s: ResourceLocation_): this;
        getSiblings(): Internal.List<Internal.Component>;
        darkAqua(): this;
        getString(): string;
        static nullToEmpty(arg0: string): Internal.Component;
        static translatableWithFallback(arg0: string, arg1: string, ...arg2: any[]): Internal.MutableComponent;
        static of(arg0: string, arg1: Internal.Style_): Internal.FormattedText;
        darkGray(): this;
        clickChangePage(page: string): this;
        noColor(): this;
        plainCopy(): this;
        static keybind(arg0: string): Internal.MutableComponent;
        setStyle(arg0: Internal.Style_): this;
        withStyle(arg0: Internal.Style_): this;
        strikethrough(): this;
        clickSuggestCommand(command: string): this;
        gold(): this;
        contains(arg0: Internal.Component_): boolean;
        hasSiblings(): boolean;
        white(): this;
        static composite(...arg0: Internal.FormattedText_[]): Internal.FormattedText;
        italic(value: boolean): this;
        static of(arg0: string): Internal.FormattedText;
        static composite(arg0: Internal.List_<Internal.FormattedText>): Internal.FormattedText;
        withStyle(...arg0: Internal.ChatFormatting_[]): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        rawCopy(): this;
        toFlatList(arg0: Internal.Style_): Internal.List<Internal.Component>;
        static selector(arg0: string, arg1: Internal.Optional_<Internal.Component>): Internal.MutableComponent;
        lightPurple(): this;
        copy(): this;
        forEach(action: Internal.Consumer_<Internal.Component>): void;
        get visualOrderText(): Internal.FormattedCharSequence
        get contents(): Internal.ComponentContents
        get empty(): boolean
        get style(): Internal.Style
        get siblings(): Internal.List<Internal.Component>
        get string(): string
        set style(arg0: Internal.Style_)
    }
    type MutableComponent_ = MutableComponent;
    class SignText {
        constructor()
        constructor(arg0: Internal.Component_[], arg1: Internal.Component_[], arg2: Internal.DyeColor_, arg3: boolean)
        getRenderMessages(arg0: boolean, arg1: Internal.Function_<Internal.Component, Internal.FormattedCharSequence>): Internal.FormattedCharSequence[];
        setMessage(arg0: number, arg1: Internal.Component_): this;
        getColor(): Internal.DyeColor;
        setHasGlowingText(arg0: boolean): this;
        hasGlowingText(): boolean;
        setColor(arg0: Internal.DyeColor_): this;
        hasMessage(arg0: Player_): boolean;
        getMessages(arg0: boolean): Internal.Component[];
        getMessage(arg0: number, arg1: boolean): Internal.Component;
        setMessage(arg0: number, arg1: Internal.Component_, arg2: Internal.Component_): this;
        hasAnyClickCommands(arg0: Player_): boolean;
        get color(): Internal.DyeColor
        set hasGlowingText(arg0: boolean)
        set color(arg0: Internal.DyeColor_)
        static readonly DIRECT_CODEC: Internal.Codec<Internal.SignText>;
        static readonly LINES: 4;
    }
    type SignText_ = SignText;
    interface IGuiClickableArea {
        abstract getArea(): Internal.Rect2i;
        createBasic(arg0: number, arg1: number, arg2: number, arg3: number, ...arg4: mezz.jei.api.recipe.RecipeType_<any>[]): this;
        isTooltipEnabled(): boolean;
        getTooltip(arg0: Internal.ITooltipBuilder_): void;
        abstract onClick(arg0: Internal.IFocusFactory_, arg1: Internal.IRecipesGui_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTooltipStrings(): Internal.List<Internal.Component>;
        get area(): Internal.Rect2i
        get tooltipEnabled(): boolean
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get tooltipStrings(): Internal.List<Internal.Component>
    }
    type IGuiClickableArea_ = IGuiClickableArea;
    class SculkSensorBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        static canActivate(arg0: Internal.BlockState_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        activate(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number, arg5: number): void;
        static tryResonateVibration(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static deactivate(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
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
        getActiveTicks(): number;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        static getPhase(arg0: Internal.BlockState_): Internal.SculkSensorPhase;
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
        get activeTicks(): number
        get mod(): string
        static readonly COOLDOWN_TICKS: 10;
        static readonly SHAPE: Internal.CubeVoxelShape;
        static readonly ACTIVE_TICKS: 30;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly POWER: Internal.IntegerProperty;
        static readonly PHASE: Internal.EnumProperty<Internal.SculkSensorPhase>;
    }
    type SculkSensorBlock_ = SculkSensorBlock;
    abstract class NearestVisibleLivingEntitySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        abstract getMemory(): Internal.MemoryModuleType<Internal.LivingEntity>;
        getVisibleEntities(arg0: Internal.LivingEntity_): Internal.Optional<Internal.NearestVisibleLivingEntities>;
        abstract isMatchingEntity(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        get memory(): Internal.MemoryModuleType<Internal.LivingEntity>
    }
    type NearestVisibleLivingEntitySensor_ = NearestVisibleLivingEntitySensor;
    interface ObjectIterator <K> extends Internal.Iterator<K> {
        remove(): void;
        skip(arg0: number): number;
        abstract next(): K;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
    }
    type ObjectIterator_<K> = ObjectIterator<K>;
    interface SignatureUpdater$Output {
        abstract update(arg0: number[]): void;
        (arg0: number[]): void;
    }
    type SignatureUpdater$Output_ = SignatureUpdater$Output;
    interface IForgeEnchantment {
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type IForgeEnchantment_ = IForgeEnchantment;
    class RandomPatchConfiguration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.Holder_<Internal.PlacedFeature>)
        tries(): number;
        ySpread(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        feature(): Internal.Holder<Internal.PlacedFeature>;
        xzSpread(): number;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.RandomPatchConfiguration>;
    }
    type RandomPatchConfiguration_ = RandomPatchConfiguration;
    class ContextUtils$MobInteractContext {
        constructor(entity: Internal.LivingEntity_, player: Player_, hand: Internal.InteractionHand_)
        /**
         * The player interacting with the living entity
        */
        readonly player: Player;
        /**
         * The hand used for interaction
        */
        readonly hand: Internal.InteractionHand;
        /**
         * The living entity being interacted with
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$MobInteractContext_ = ContextUtils$MobInteractContext;
    class ModelBlockRenderer$Cache {
        disable(): void;
        getLightColor(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        enable(): void;
    }
    type ModelBlockRenderer$Cache_ = ModelBlockRenderer$Cache;
    class ModCheck$Confidence extends Internal.Enum<Internal.ModCheck$Confidence> {
        static values(): Internal.ModCheck$Confidence[];
        static valueOf(arg0: string): Internal.ModCheck$Confidence;
        readonly description: string;
        readonly shouldReportAsModified: boolean;
        static readonly VERY_LIKELY: Internal.ModCheck$Confidence;
        static readonly DEFINITELY: Internal.ModCheck$Confidence;
        static readonly PROBABLY_NOT: Internal.ModCheck$Confidence;
    }
    type ModCheck$Confidence_ = "definitely" | "very_likely" | ModCheck$Confidence | "probably_not";
    class ReplaceInventoryConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(inventoryType: Internal.InventoryUtil$InventoryType_, entityAction: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>, itemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, itemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, slots: Internal.ListConfiguration_<Internal.ArgumentWrapper<number>>, power: Internal.Optional_<ResourceLocation>, stack: Internal.ItemStack_, mergeNbt: boolean)
        inventoryType(): Internal.InventoryUtil$InventoryType;
        isConfigurationValid(): boolean;
        slots(): Internal.ListConfiguration<Internal.ArgumentWrapper<number>>;
        entityAction(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
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
        mergeNbt(): boolean;
        itemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        getMissingBinds(): Internal.List<string>;
        power(): Internal.Optional<ResourceLocation>;
        stack(): Internal.ItemStack;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ReplaceInventoryConfiguration>;
    }
    type ReplaceInventoryConfiguration_ = ReplaceInventoryConfiguration;
    class AbuseReportRequest$ThirdPartyServerInfo {
        constructor(arg0: string)
        address: string;
    }
    type AbuseReportRequest$ThirdPartyServerInfo_ = AbuseReportRequest$ThirdPartyServerInfo;
    class Ghast extends Internal.FlyingMob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.Ghast>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getExplosionPower(): number;
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
        setCharging(arg0: boolean): void;
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
        static checkGhastSpawnRules(arg0: Internal.EntityType_<Internal.Ghast>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        isCharging(): boolean;
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
        get explosionPower(): number
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
        set charging(arg0: boolean)
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
        get charging(): boolean
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
    type Ghast_ = Ghast;
    class SpellDamageSource extends DamageSource {
        getLifestealPercent(): number;
        spell(): Internal.AbstractSpell;
        getFireTime(): number;
        getFreezeTicks(): number;
        get(): DamageSource;
        static source(arg0: Internal.Entity_, arg1: Internal.AbstractSpell_): Internal.SpellDamageSource;
        setFreezeTicks(arg0: number): this;
        getIFrames(): number;
        setIFrames(arg0: number): this;
        setFireTime(arg0: number): this;
        static source(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.AbstractSpell_): Internal.SpellDamageSource;
        setLifestealPercent(arg0: number): this;
        hasPostHitEffects(): boolean;
        get lifestealPercent(): number
        get fireTime(): number
        get freezeTicks(): number
        set freezeTicks(arg0: number)
        get IFrames(): number
        set IFrames(arg0: number)
        set fireTime(arg0: number)
        set lifestealPercent(arg0: number)
    }
    type SpellDamageSource_ = SpellDamageSource;
    interface SlotAccessor {
        abstract accessories$setY(arg0: number): void;
        (arg0: number): void;
    }
    type SlotAccessor_ = SlotAccessor;
    interface ScreenEvents$BeforeRender {
        abstract beforeRender(arg0: Internal.Screen_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.Screen, arg1: Internal.GuiGraphics, arg2: number, arg3: number, arg4: number): void;
    }
    type ScreenEvents$BeforeRender_ = ScreenEvents$BeforeRender;
    class ChangeResourceAction extends Internal.EntityAction<Internal.ChangeResourceConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.ChangeResourceConfiguration>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.ChangeResourceConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ChangeResourceAction_ = ChangeResourceAction;
    class HazmatArmorItem extends Internal.ArmorItem {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        static getWornAmount(arg0: Internal.LivingEntity_): number;
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
    type HazmatArmorItem_ = HazmatArmorItem;
    class CustomAdaptation extends Internal.EnhancedTerrainAdaptation {
        static readonly CODEC: Internal.Codec<Internal.CustomAdaptation>;
    }
    type CustomAdaptation_ = CustomAdaptation;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    class EntityEvent$Size extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Entity_, arg1: Internal.Pose_, arg2: Internal.EntityDimensions_, arg3: Internal.EntityDimensions_, arg4: number, arg5: number)
        constructor(arg0: Internal.Entity_, arg1: Internal.Pose_, arg2: Internal.EntityDimensions_, arg3: number)
        constructor(arg0: Internal.Entity_, arg1: Internal.Pose_, arg2: Internal.EntityDimensions_)
        setNewSize(arg0: Internal.EntityDimensions_): void;
        getPose(): Internal.Pose;
        setNewEyeHeight(arg0: number): void;
        getOldEyeHeight(): number;
        getNewSize(): Internal.EntityDimensions;
        getOriginalSize(): Internal.EntityDimensions;
        getOldSize(): Internal.EntityDimensions;
        setNewSize(arg0: Internal.EntityDimensions_, arg1: boolean): void;
        getNewEyeHeight(): number;
        set newSize(arg0: Internal.EntityDimensions_)
        get pose(): Internal.Pose
        set newEyeHeight(arg0: number)
        get oldEyeHeight(): number
        get newSize(): Internal.EntityDimensions
        get originalSize(): Internal.EntityDimensions
        get oldSize(): Internal.EntityDimensions
        get newEyeHeight(): number
    }
    type EntityEvent$Size_ = EntityEvent$Size;
    class GenerationStep$Carving extends Internal.Enum<Internal.GenerationStep$Carving> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        getName(): string;
        static valueOf(arg0: string): Internal.GenerationStep$Carving;
        static values(): Internal.GenerationStep$Carving[];
        get serializedName(): string
        get name(): string
        static readonly AIR: Internal.GenerationStep$Carving;
        static readonly LIQUID: Internal.GenerationStep$Carving;
        static readonly CODEC: Internal.Codec<Internal.GenerationStep$Carving>;
    }
    type GenerationStep$Carving_ = "liquid" | "air" | GenerationStep$Carving;
    class CarpetBlock extends Internal.Block {
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
    }
    type CarpetBlock_ = CarpetBlock;
    class Variant extends Internal.Enum<Internal.Variant> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.Variant[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Variant;
        static byId(arg0: number): Internal.Variant;
        getId(): number;
        get serializedName(): string
        get id(): number
        static readonly CODEC: Internal.Codec<Internal.Variant>;
        static readonly WHITE: Internal.Variant;
        static readonly BLACK: Internal.Variant;
        static readonly DARK_BROWN: Internal.Variant;
        static readonly CREAMY: Internal.Variant;
        static readonly BROWN: Internal.Variant;
        static readonly GRAY: Internal.Variant;
        static readonly CHESTNUT: Internal.Variant;
    }
    type Variant_ = Variant | "white" | "brown" | "gray" | "black" | "dark_brown" | "creamy" | "chestnut";
    class RenderStateShard$DepthTestStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: number)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$DepthTestStateShard_ = RenderStateShard$DepthTestStateShard;
    interface PalettedContainerRO <T> {
        abstract recreate(): Internal.PalettedContainer<T>;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        abstract maybeHas(arg0: Internal.Predicate_<T>): boolean;
        abstract getSerializedSize(): number;
        abstract pack(arg0: Internal.IdMap_<T>, arg1: Internal.PalettedContainer$Strategy_): Internal.PalettedContainerRO$PackedData<T>;
        abstract get(arg0: number, arg1: number, arg2: number): T;
        abstract count(arg0: Internal.PalettedContainer$CountConsumer_<T>): void;
        abstract getAll(arg0: Internal.Consumer_<T>): void;
        get serializedSize(): number
    }
    type PalettedContainerRO_<T> = PalettedContainerRO<T>;
    class LevelChunk$EntityCreationType extends Internal.Enum<Internal.LevelChunk$EntityCreationType> {
        static valueOf(arg0: string): Internal.LevelChunk$EntityCreationType;
        static values(): Internal.LevelChunk$EntityCreationType[];
        static readonly IMMEDIATE: Internal.LevelChunk$EntityCreationType;
        static readonly QUEUED: Internal.LevelChunk$EntityCreationType;
        static readonly CHECK: Internal.LevelChunk$EntityCreationType;
    }
    type LevelChunk$EntityCreationType_ = "check" | "immediate" | LevelChunk$EntityCreationType | "queued";
    class LiteralCommandNode <S> extends Internal.CommandNode<S> {
        constructor(arg0: string, arg1: Internal.Command_<S>, arg2: Internal.Predicate_<S>, arg3: Internal.CommandNode_<S>, arg4: Internal.RedirectModifier_<S>, arg5: boolean)
        isValidInput(arg0: string): boolean;
        createBuilder(): Internal.LiteralArgumentBuilder<S>;
        getLiteral(): string;
        get literal(): string
    }
    type LiteralCommandNode_<S> = LiteralCommandNode<S>;
    class SingleItemRecipe$Serializer <T extends Internal.SingleItemRecipe> implements Internal.RecipeSerializer<T> {
        constructor(arg0: Internal.SingleItemRecipe$Serializer$SingleItemMaker_<T>)
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        readonly factory: Internal.SingleItemRecipe$Serializer$SingleItemMaker<T>;
    }
    type SingleItemRecipe$Serializer_<T extends Internal.SingleItemRecipe> = SingleItemRecipe$Serializer<T>;
    interface IJeiConfigValueSerializer$IDeserializeResult <T> {
        abstract getErrors(): Internal.List<string>;
        abstract getResult(): Internal.Optional<T>;
        get errors(): Internal.List<string>
        get result(): Internal.Optional<T>
    }
    type IJeiConfigValueSerializer$IDeserializeResult_<T> = IJeiConfigValueSerializer$IDeserializeResult<T>;
    interface Byte2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        remove(arg0: number): number;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Byte2IntFunction;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Byte2CharFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Byte2FloatFunction;
        containsKey(arg0: number): boolean;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2LongFunction;
        getOrDefault(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        defaultReturnValue(): number;
        abstract get(arg0: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2LongFunction<T>;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2LongFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Byte2DoubleFunction;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2LongFunction;
        size(): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        clear(): void;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2LongFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        (arg0: number): number;
    }
    type Byte2LongFunction_ = Byte2LongFunction;
    class MapItemSavedData extends Internal.SavedData implements Internal.ExpandedMapData {
        handler$dgc000$moonlight$scaled(cir: Internal.CallbackInfoReturnable_<any>): void;
        getCustomMarkers(): Internal.Map<any, any>;
        static createForClient(arg0: number, arg1: boolean, arg2: Internal.ResourceKey_<Internal.Level>): Internal.MapItemSavedData;
        getDecorations(): Internal.Iterable<Internal.MapDecoration>;
        addClientSideDecorations(arg0: Internal.List_<Internal.MapDecoration>): void;
        tickCarriedBy(arg0: Player_, arg1: Internal.ItemStack_): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        toggleBanner(arg0: Internal.LevelAccessor_, arg1: BlockPos_): boolean;
        copy(): this;
        handler$dgc000$moonlight$save(tag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dgc000$moonlight$tickCarriedBy(player: Player_, stack: Internal.ItemStack_, ci: Internal.CallbackInfo_): void;
        scaled(arg0: number): this;
        resetCustomDecoration(): void;
        getUpdatePacket(arg0: number, arg1: Player_): Internal.Packet<any>;
        toggleCustomDecoration(world: Internal.LevelAccessor_, pos: BlockPos_): boolean;
        static load(arg0: Internal.CompoundTag_): Internal.MapItemSavedData;
        getVanillaDecorationSize(): number;
        isTrackedCountOverLimit(arg0: number): boolean;
        updateColor(arg0: number, arg1: number, arg2: number): boolean;
        getCustomData(): Internal.Map<any, any>;
        static addTargetDecoration(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: string, arg3: Internal.MapDecoration$Type_): void;
        addCustomMarker(marker: Internal.MapBlockMarker_<any>): void;
        removedFromFrame(arg0: BlockPos_, arg1: number): void;
        getHoldingPlayer(arg0: Player_): Internal.MapItemSavedData$HoldingPlayer;
        handler$dgc000$moonlight$checkCustomDeco(world: Internal.BlockGetter_, x: number, z: number, ci: Internal.CallbackInfo_): void;
        addDecoration(arg0: Internal.MapDecoration$Type_, arg1: Internal.LevelAccessor_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: Internal.Component_): void;
        getCustomDecorations(): Internal.Map<any, any>;
        handler$dgc000$moonlight$locked(cir: Internal.CallbackInfoReturnable_<any>): void;
        isExplorationMap(): boolean;
        removeCustomMarker(key: string): boolean;
        checkBanners(arg0: Internal.BlockGetter_, arg1: number, arg2: number): void;
        setCustomDataDirty(type: Internal.CustomMapData$Type_<any>, dirtySetter: Internal.Consumer_<any>): void;
        getBanners(): Internal.Collection<Internal.MapBanner>;
        locked(): this;
        setCustomDecorationsDirty(): void;
        handler$dgc000$moonlight$initCustomData(i: number, j: number, b: number, bl: boolean, bl2: boolean, bl3: boolean, resourceKey: Internal.ResourceKey_<any>, ci: Internal.CallbackInfo_): void;
        static createFresh(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: Internal.ResourceKey_<Internal.Level>): Internal.MapItemSavedData;
        get customMarkers(): Internal.Map<any, any>
        get decorations(): Internal.Iterable<Internal.MapDecoration>
        get vanillaDecorationSize(): number
        get customData(): Internal.Map<any, any>
        get customDecorations(): Internal.Map<any, any>
        get explorationMap(): boolean
        get banners(): Internal.Collection<Internal.MapBanner>
        colors: number[];
        static readonly MAX_SCALE: 4;
        readonly scale: number;
        readonly moonlight$customData: Internal.Map<any, any>;
        readonly locked: boolean;
        centerZ: number;
        dimension: Internal.ResourceKey<Internal.Level>;
        static readonly TRACKED_DECORATION_LIMIT: 256;
        readonly decorations: Internal.Map<string, Internal.MapDecoration>;
        moonlight$customDecorations: Internal.Map<any, any>;
        centerX: number;
    }
    type MapItemSavedData_ = MapItemSavedData;
    class Quaterniond implements Internal.Cloneable, Internal.Externalizable, Internal.Quaterniondc {
        constructor()
        constructor(arg0: Internal.AxisAngle4d_)
        constructor(arg0: Internal.Quaternionfc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.AxisAngle4f_)
        constructor(arg0: Internal.Quaterniondc_)
        rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): this;
        invert(): this;
        scaling(arg0: number): this;
        transformInverse(arg0: Internal.Vector4d_): Internal.Vector4d;
        transformPositiveY(arg0: Vector3f_): Vector3f;
        transformPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setFromUnnormalized(arg0: Internal.Matrix3fc_): this;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        static slerp(arg0: Internal.Quaterniond_[], arg1: number[], arg2: Internal.Quaterniond_): Internal.Quaterniondc;
        x(): number;
        transformInverse(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformPositiveY(arg0: Vec4f_): Vec4f;
        transformPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        dot(arg0: Internal.Quaterniondc_): number;
        transformUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        rotationX(arg0: number): this;
        rotateY(arg0: number, arg1: Internal.Quaterniond_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateY(arg0: number): this;
        setFromNormalized(arg0: Internal.Matrix3dc_): this;
        premul(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        normalize(): this;
        rotateAxis(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateTo(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): this;
        transformPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformPositiveZ(arg0: Vector3f_): Vector3f;
        transformUnit(arg0: Vec4f_): Vec4f;
        difference(arg0: Internal.Quaterniondc_): this;
        get(arg0: Matrix4f_): Matrix4f;
        conjugate(arg0: Internal.Quaterniond_): this;
        transform(arg0: Vec4f_): Vec4f;
        transformUnit(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        rotationAxis(arg0: Internal.AxisAngle4f_): this;
        setFromNormalized(arg0: Internal.Matrix4fc_): this;
        transformInverseUnit(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        fromAxisAngleRad(arg0: Internal.Vector3dc_, arg1: number): this;
        static nlerp(arg0: Internal.Quaterniond_[], arg1: number[], arg2: Internal.Quaterniond_): Internal.Quaterniondc;
        y(): number;
        transformPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        transformPositiveZ(arg0: Vec4f_): Vec4f;
        transformUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotateZ(arg0: number, arg1: Internal.Quaterniond_): this;
        transformInverse(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): this;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        transform(arg0: Vector3f_): Vector3f;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        getEulerAnglesZXY(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        transformPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        scale(arg0: number): this;
        rotateAxis(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): this;
        transformInverseUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        z(): number;
        isFinite(): boolean;
        setFromUnnormalized(arg0: Internal.Matrix3dc_): this;
        transformUnitPositiveX(arg0: Vector3f_): Vector3f;
        equals(arg0: Internal.Quaterniondc_, arg1: number): boolean;
        normalize(arg0: Internal.Quaterniond_): this;
        get(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): this;
        transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        transformPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        transformUnit(arg0: Vector3f_): Vector3f;
        rotationZ(arg0: number): this;
        conjugateBy(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        transformInverseUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        setFromUnnormalized(arg0: Internal.Matrix4fc_): this;
        setFromNormalized(arg0: Internal.Matrix3fc_): this;
        transformInverse(arg0: Vec4f_): Vec4f;
        premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): this;
        transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): this;
        difference(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        setFromNormalized(arg0: Internal.Matrix4x3fc_): this;
        slerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): this;
        transformInverse(arg0: Vector3f_): Vector3f;
        rotateX(arg0: number, arg1: Internal.Quaterniond_): this;
        integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): this;
        rotationY(arg0: number): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getEulerAnglesYXZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformInverse(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        scale(arg0: number, arg1: Internal.Quaterniond_): this;
        rotateX(arg0: number): this;
        setFromUnnormalized(arg0: Internal.Matrix4x3dc_): this;
        conjugate(): this;
        nlerp(arg0: Internal.Quaterniondc_, arg1: number): this;
        mul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        div(arg0: Internal.Quaterniondc_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): this;
        transformUnitPositiveZ(arg0: Vector3f_): Vector3f;
        transformUnitPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Quaterniondc_): this;
        transformUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        mul(arg0: number, arg1: Internal.Quaterniond_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): this;
        premul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): this;
        mul(arg0: number): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        transformInverseUnit(arg0: Vector3f_): Vector3f;
        transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        fromAxisAngleDeg(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateTo(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        setFromUnnormalized(arg0: Internal.Matrix4dc_): this;
        get(arg0: Quaternionf_): Quaternionf;
        transformUnitPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        transformUnitPositiveY(arg0: Vec4f_): Vec4f;
        premul(arg0: Internal.Quaterniondc_): this;
        div(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        identity(): this;
        clone(): any;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        angle(): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        add(arg0: Internal.Quaterniondc_): this;
        slerp(arg0: Internal.Quaterniondc_, arg1: number): this;
        set(arg0: Internal.Quaternionfc_): this;
        transformUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        transformInverseUnit(arg0: Vec4f_): Vec4f;
        transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        transformInverseUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        setFromNormalized(arg0: Internal.Matrix4x3dc_): this;
        transformUnitPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformUnitPositiveY(arg0: Vector3f_): Vector3f;
        lengthSquared(): number;
        get(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformInverse(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        nlerpIterative(arg0: Internal.Quaterniondc_, arg1: number, arg2: number): this;
        setFromUnnormalized(arg0: Internal.Matrix4x3fc_): this;
        transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        transformInverseUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        static nlerpIterative(arg0: Internal.Quaterniondc_[], arg1: number[], arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        transformUnitPositiveX(arg0: Vec4f_): Vec4f;
        rotateLocalZ(arg0: number, arg1: Internal.Quaterniond_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        rotateLocalZ(arg0: number): this;
        rotationTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setAngleAxis(arg0: number, arg1: Internal.Vector3dc_): this;
        nlerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): this;
        nlerpIterative(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: Internal.Quaterniond_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        fromAxisAngleRad(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        transformInverseUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        fromAxisAngleDeg(arg0: Internal.Vector3dc_, arg1: number): this;
        rotateLocalY(arg0: number): this;
        get(arg0: Matrix3f_): Matrix3f;
        rotateLocalY(arg0: number, arg1: Internal.Quaterniond_): this;
        transformUnitPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformPositiveX(arg0: Vector3f_): Vector3f;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        add(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        transformUnitPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        w(): number;
        setFromNormalized(arg0: Internal.Matrix4dc_): this;
        transformInverse(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        conjugateBy(arg0: Internal.Quaterniondc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformPositiveX(arg0: Vec4f_): Vec4f;
        set(arg0: Internal.AxisAngle4d_): this;
        invert(arg0: Internal.Quaterniond_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): this;
        setAngleAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateLocalX(arg0: number): this;
        rotateLocalX(arg0: number, arg1: Internal.Quaterniond_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformUnitPositiveZ(arg0: Vec4f_): Vec4f;
        get(arg0: Internal.Quaterniond_): this;
        rotationAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformUnitPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        integrate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set fromUnnormalized(arg0: Internal.Matrix3fc_)
        set fromNormalized(arg0: Internal.Matrix3dc_)
        set fromNormalized(arg0: Internal.Matrix4fc_)
        get finite(): boolean
        set fromUnnormalized(arg0: Internal.Matrix3dc_)
        set fromUnnormalized(arg0: Internal.Matrix4fc_)
        set fromNormalized(arg0: Internal.Matrix3fc_)
        set fromNormalized(arg0: Internal.Matrix4x3fc_)
        set fromUnnormalized(arg0: Internal.Matrix4x3dc_)
        set fromUnnormalized(arg0: Internal.Matrix4dc_)
        set fromNormalized(arg0: Internal.Matrix4x3dc_)
        set fromUnnormalized(arg0: Internal.Matrix4x3fc_)
        set fromNormalized(arg0: Internal.Matrix4dc_)
        z: number;
        w: number;
        x: number;
        y: number;
    }
    type Quaterniond_ = Quaterniond;
    class Point extends Internal.Point2D implements Internal.Serializable {
        constructor()
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.Point_)
        translate(arg0: number, arg1: number): void;
        setLocation(arg0: Internal.Point_): void;
        setLocation(arg0: number, arg1: number): void;
        getLocation(): this;
        move(arg0: number, arg1: number): void;
        set location(arg0: Internal.Point_)
        get location(): Internal.Point
        x: number;
        y: number;
    }
    type Point_ = Point;
    interface Matrix2dc {
        abstract scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract mul(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract getScale(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract m01(): number;
        abstract isFinite(): boolean;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract sub(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        abstract getRotation(): number;
        abstract mulComponentWise(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract equals(arg0: Internal.Matrix2dc_, arg1: number): boolean;
        abstract m10(): number;
        abstract transpose(arg0: Internal.Matrix2d_): Internal.Matrix2d;
        abstract transformTranspose(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract transform(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getToAddress(arg0: number): this;
        abstract rotateLocal(arg0: number, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract invert(arg0: Internal.Matrix2d_): Internal.Matrix2d;
        abstract rotate(arg0: number, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract mulLocal(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract add(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract lerp(arg0: Internal.Matrix2dc_, arg1: number, arg2: Internal.Matrix2d_): Internal.Matrix2d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract getRow(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract getColumn(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: Internal.Matrix2d_): Internal.Matrix2d;
        abstract transform(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        abstract transform(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract m00(): number;
        abstract positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2d_): Internal.Matrix2d;
        abstract get(arg0: number[]): number[];
        abstract normal(arg0: Internal.Matrix2d_): Internal.Matrix2d;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract determinant(): number;
        abstract scale(arg0: number, arg1: number, arg2: Internal.Matrix2d_): Internal.Matrix2d;
        abstract scale(arg0: number, arg1: Internal.Matrix2d_): Internal.Matrix2d;
        abstract getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number, arg1: number): number;
        abstract transformTranspose(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract m11(): number;
        get finite(): boolean
        get rotation(): number
    }
    type Matrix2dc_ = Matrix2dc;
    interface IRecipeExtrasBuilder {
        abstract addScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): Internal.IScrollBoxWidget;
        abstract addDrawable(arg0: Internal.IDrawable_): Internal.IPlaceable<any>;
        abstract addScrollGridWidget(arg0: Internal.List_<Internal.IRecipeSlotDrawable>, arg1: number, arg2: number): Internal.IScrollGridWidget;
        abstract addWidget(arg0: Internal.IRecipeWidget_): void;
        addText(arg0: Internal.FormattedText_, arg1: number, arg2: number): Internal.ITextWidget;
        abstract addAnimatedRecipeArrow(arg0: number): Internal.IPlaceable<any>;
        abstract addRecipePlusSign(): Internal.IPlaceable<any>;
        abstract addRecipeArrow(): Internal.IPlaceable<any>;
        abstract getRecipeSlots(): Internal.IRecipeSlotDrawablesView;
        abstract addText(arg0: Internal.List_<Internal.FormattedText>, arg1: number, arg2: number): Internal.ITextWidget;
        abstract addInputHandler(arg0: Internal.IJeiInputHandler_): void;
        abstract addAnimatedRecipeFlame(arg0: number): Internal.IPlaceable<any>;
        abstract addSlottedWidget(arg0: Internal.ISlottedRecipeWidget_, arg1: Internal.List_<Internal.IRecipeSlotDrawable>): void;
        abstract addDrawable(arg0: Internal.IDrawable_, arg1: number, arg2: number): void;
        abstract addGuiEventListener(arg0: Internal.IJeiGuiEventListener_): void;
        get recipeSlots(): Internal.IRecipeSlotDrawablesView
    }
    type IRecipeExtrasBuilder_ = IRecipeExtrasBuilder;
    class EnchantedItemTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ItemPredicate_, arg2: Internal.MinMaxBounds$Ints_)
        matches(arg0: Internal.ItemStack_, arg1: number): boolean;
        static enchantedItem(): Internal.EnchantedItemTrigger$TriggerInstance;
    }
    type EnchantedItemTrigger$TriggerInstance_ = EnchantedItemTrigger$TriggerInstance;
    class MendingAuraFenceBlock extends Internal.MendingAuraBlock {
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
        connectsTo(arg0: Internal.BlockState_, arg1: boolean, arg2: Internal.Direction_): boolean;
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
        static readonly NORTH: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type MendingAuraFenceBlock_ = MendingAuraFenceBlock;
    class BufferBuilder$DrawState extends Internal.Record {
        constructor(format: Internal.VertexFormat_, vertexCount: number, indexCount: number, mode: Internal.VertexFormat$Mode_, indexType: Internal.VertexFormat$IndexType_, indexOnly: boolean, sequentialIndex: boolean)
        mode(): Internal.VertexFormat$Mode;
        vertexBufferEnd(): number;
        indexOnly(): boolean;
        indexBufferStart(): number;
        vertexBufferStart(): number;
        indexBufferEnd(): number;
        vertexCount(): number;
        sequentialIndex(): boolean;
        indexCount(): number;
        format(): Internal.VertexFormat;
        indexType(): Internal.VertexFormat$IndexType;
        vertexBufferSize(): number;
        bufferSize(): number;
    }
    type BufferBuilder$DrawState_ = BufferBuilder$DrawState;
    class ReplaceBlockConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockState_)
        constructor(arg0: Internal.List_<Internal.OreConfiguration$TargetBlockState>)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.ReplaceBlockConfiguration>;
        readonly targetStates: Internal.List<Internal.OreConfiguration$TargetBlockState>;
    }
    type ReplaceBlockConfiguration_ = ReplaceBlockConfiguration;
    interface IModProvider {
        abstract scanFile(arg0: Internal.IModFile_, arg1: Internal.Consumer_<Internal.Path>): void;
        abstract name(): string;
        abstract isValid(arg0: Internal.IModFile_): boolean;
        abstract initArguments(arg0: Internal.Map_<string, any>): void;
    }
    type IModProvider_ = IModProvider;
    class ScreenEvent$MouseDragged$Post extends Internal.ScreenEvent$MouseDragged {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    }
    type ScreenEvent$MouseDragged$Post_ = ScreenEvent$MouseDragged$Post;
    class AddSpawnProperties {
        constructor()
        setEntity(s: string): void;
        setCategory(s: string): void;
        set entity(s: string)
        set category(s: string)
        minCount: number;
        _category: Internal.MobCategory;
        _entity: Internal.EntityType<any>;
        biomes: Internal.BiomeFilter;
        maxCount: number;
        weight: number;
    }
    type AddSpawnProperties_ = AddSpawnProperties;
    class AttachedStemBlock extends Internal.BushBlock {
        constructor(arg0: Internal.StemGrownBlock_, arg1: Internal.Supplier_<Internal.Item>, arg2: Internal.BlockBehaviour$Properties_)
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
        static readonly AABB_OFFSET: 2.0;
        static readonly FACING: Internal.DirectionProperty;
    }
    type AttachedStemBlock_ = AttachedStemBlock;
    class Comparison extends Internal.Enum<Internal.Comparison> {
        static valueOf(arg0: string): Internal.Comparison;
        inverse(): this;
        compare(arg0: number, arg1: number): boolean;
        static getFromString(arg0: string): Internal.Comparison;
        static values(): Internal.Comparison[];
        getOptimalStoppingIndex(arg0: number): number;
        getComparisonString(): string;
        get comparisonString(): string
        static readonly LESS_THAN: Internal.Comparison;
        static readonly GREATER_THAN: Internal.Comparison;
        static readonly GREATER_THAN_OR_EQUAL: Internal.Comparison;
        static readonly EQUAL: Internal.Comparison;
        static readonly NONE: Internal.Comparison;
        static readonly LESS_THAN_OR_EQUAL: Internal.Comparison;
        static readonly NOT_EQUAL: Internal.Comparison;
    }
    type Comparison_ = "less_than" | Comparison | "greater_than_or_equal" | "not_equal" | "less_than_or_equal" | "equal" | "none" | "greater_than";
    class CreativeFlightPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.NoConfiguration> {
        constructor()
        hasAbility(arg0: Internal.Entity_): boolean;
        grantAbility(arg0: Internal.Entity_): void;
        revokeAbility(arg0: Internal.Entity_): void;
    }
    type CreativeFlightPower_ = CreativeFlightPower;
    class CustomAction extends Internal.PostAction {
        constructor(arg0: Internal.JsonObject_)
        readonly data: Internal.JsonObject;
        applyFunc: Internal.CustomAction$Apply;
        canRepeat: boolean;
    }
    type CustomAction_ = CustomAction;
    abstract class SimpleCriterionTrigger <T extends Internal.AbstractCriterionTriggerInstance> implements Internal.CriterionTrigger<T> {
        constructor()
        abstract createInstance(arg0: Internal.JsonObject_, arg1: Internal.ContextAwarePredicate_, arg2: Internal.DeserializationContext_): T;
        abstract getId(): ResourceLocation;
        trigger(arg0: Internal.ServerPlayer_, arg1: Internal.Predicate_<T>): void;
        removePlayerListeners(arg0: Internal.PlayerAdvancements_): void;
        createInstance(arg0: Internal.JsonObject_, arg1: Internal.DeserializationContext_): T;
        addPlayerListener(arg0: Internal.PlayerAdvancements_, arg1: Internal.CriterionTrigger$Listener_<T>): void;
        removePlayerListener(arg0: Internal.PlayerAdvancements_, arg1: Internal.CriterionTrigger$Listener_<T>): void;
        get id(): ResourceLocation
    }
    type SimpleCriterionTrigger_<T extends Internal.AbstractCriterionTriggerInstance> = SimpleCriterionTrigger<T>;
    interface DensityFunctions$MarkerOrMarked extends Internal.DensityFunction {
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        abstract maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        abstract compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        abstract wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        abstract type(): Internal.DensityFunctions$Marker$Type;
        cube(): Internal.DensityFunction;
        abstract fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        abstract minValue(): number;
    }
    type DensityFunctions$MarkerOrMarked_ = DensityFunctions$MarkerOrMarked;
    interface EntityBlock {
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        (arg0: BlockPos, arg1: Internal.BlockState): Internal.BlockEntity_;
    }
    type EntityBlock_ = EntityBlock;
    class ButtonBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        behaviour(wt: string): this;
        arrowsCanPress(b: boolean): this;
        ticksToStayPressed(t: number): this;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        behaviour(wt: Internal.BlockSetType_): this;
        createObject(): any;
    }
    type ButtonBlockBuilder_ = ButtonBlockBuilder;
    interface ParticleProvider <T extends Internal.ParticleOptions> {
        abstract createParticle(arg0: T, arg1: Internal.ClientLevel_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.Particle;
        (arg0: T, arg1: Internal.ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.Particle_;
    }
    type ParticleProvider_<T extends Internal.ParticleOptions> = ParticleProvider<T>;
    class BiasedToBottomHeight extends Internal.HeightProvider {
        static of(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_, arg2: number): Internal.BiasedToBottomHeight;
        static readonly CODEC: Internal.Codec<Internal.BiasedToBottomHeight>;
    }
    type BiasedToBottomHeight_ = BiasedToBottomHeight;
    class EnchantmentPredicate {
        constructor()
        constructor(arg0: Internal.Enchantment_, arg1: Internal.MinMaxBounds$Ints_)
        serializeToJson(): Internal.JsonElement;
        static fromJson(arg0: Internal.JsonElement_): Internal.EnchantmentPredicate;
        containedIn(arg0: Internal.Map_<Internal.Enchantment, number>): boolean;
        static fromJsonArray(arg0: Internal.JsonElement_): Internal.EnchantmentPredicate[];
        static readonly ANY: Internal.EnchantmentPredicate;
        static readonly NONE: Internal.EnchantmentPredicate[];
    }
    type EnchantmentPredicate_ = EnchantmentPredicate;
    class StringArgumentSerializer$Template implements Internal.ArgumentTypeInfo$Template<Internal.StringArgumentType> {
        constructor(arg0: Internal.StringArgumentSerializer_, arg1: Internal.StringArgumentType$StringType_)
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.StringArgumentType, any>;
        readonly type: Internal.StringArgumentType$StringType;
        readonly f_235622_: Internal.StringArgumentSerializer;
    }
    type StringArgumentSerializer$Template_ = StringArgumentSerializer$Template;
    class GameModeCondition extends Internal.EntityCondition<Internal.FieldConfiguration<Internal.GameType>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.FieldConfiguration_<Internal.GameType>, arg1: Internal.Entity_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type GameModeCondition_ = GameModeCondition;
    class BiomeGenerationSettings$PlainBuilder {
        constructor()
        addFeature(arg0: Internal.GenerationStep$Decoration_, arg1: Internal.Holder_<Internal.PlacedFeature>): this;
        build(): Internal.BiomeGenerationSettings;
        addCarver(arg0: Internal.GenerationStep$Carving_, arg1: Internal.Holder_<Internal.ConfiguredWorldCarver<any>>): this;
        addFeature(arg0: number, arg1: Internal.Holder_<Internal.PlacedFeature>): this;
        addFeatureStepsUpTo(arg0: number): void;
        readonly features: Internal.List<Internal.List<Internal.Holder<Internal.PlacedFeature>>>;
        readonly carvers: Internal.Map<Internal.GenerationStep$Carving, Internal.List<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>>;
    }
    type BiomeGenerationSettings$PlainBuilder_ = BiomeGenerationSettings$PlainBuilder;
    class InteractionPowerConfiguration extends Internal.Record {
        constructor(hands: Internal.EnumSet_<Internal.InteractionHand>, actionResult: InteractionResult_, itemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, heldItemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, itemResult: Internal.ItemStack_, resultItemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>)
        itemResult(): Internal.ItemStack;
        performActorItemStuff(arg0: Internal.LivingEntity_, arg1: Internal.InteractionHand_): void;
        actionResult(): InteractionResult;
        resultItemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        appliesTo(arg0: Internal.InteractionHand_): boolean;
        heldItemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        hands(): Internal.EnumSet<Internal.InteractionHand>;
        appliesTo(arg0: Internal.Level_, arg1: Internal.ItemStack_): boolean;
        static reduce(arg0: InteractionResult_, arg1: InteractionResult_): InteractionResult;
        appliesTo(arg0: Internal.Level_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_): boolean;
        itemCondition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        static readonly PREVENTING_MAP_CODEC: Internal.MapCodec<Internal.InteractionPowerConfiguration>;
        static readonly MAP_CODEC: Internal.MapCodec<Internal.InteractionPowerConfiguration>;
    }
    type InteractionPowerConfiguration_ = InteractionPowerConfiguration;
    abstract class Writer implements Internal.Closeable, Internal.Appendable, Internal.Flushable {
        abstract flush(): void;
        write(arg0: number): void;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        write(arg0: string): void;
        abstract close(): void;
        write(arg0: string[]): void;
        write(arg0: string, arg1: number, arg2: number): void;
        append(arg0: Internal.CharSequence_): this;
        abstract write(arg0: string[], arg1: number, arg2: number): void;
        append(arg0: string): this;
        static nullWriter(): Internal.Writer;
    }
    type Writer_ = Writer;
    class TrueInvisibilityEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type TrueInvisibilityEffect_ = TrueInvisibilityEffect;
    class NLGlowingGeoLayerJS <T extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.AutoGlowingGeoLayer<T> {
        constructor(entityRendererIn: Internal.KubeJSNLEntityRenderer_<T>, geoBuilder: Internal.NLGeoLayerJSBuilder_<T>, builder: Internal.BaseEntityBuilder_<T>)
        entityName(): string;
        preRender(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderLayer: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTick: number, packedLight: number, packedOverlay: number): void;
        render(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderLayer: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTicks: number, packedLightIn: number, packedOverlay: number): void;
        readonly renderer: Internal.KubeJSNLEntityRenderer<T>;
        readonly builder: Internal.BaseEntityBuilder<T>;
        readonly geoBuilder: Internal.NLGeoLayerJSBuilder<T>;
        entity: T;
    }
    type NLGlowingGeoLayerJS_<T extends Internal.Entity & Internal.IAnimatableJSNL> = NLGlowingGeoLayerJS<T>;
    /**
     * Invoked before an entity is hurt by a damage source.
    */
    class LivingEntityHurtEventJS extends Internal.LivingEntityEventJS {
        constructor(entity: Internal.LivingEntity_, source: DamageSource_, amount: number)
        /**
         * The damage source.
        */
        getSource(): DamageSource;
        /**
         * The amount of damage.
        */
        getDamage(): number;
        /**
         * The damage source.
        */
        get source(): DamageSource
        /**
         * The amount of damage.
        */
        get damage(): number
    }
    type LivingEntityHurtEventJS_ = LivingEntityHurtEventJS;
    class MobSpawnSettings$MobSpawnCost extends Internal.Record {
        constructor(energyBudget: number, charge: number)
        charge(): number;
        energyBudget(): number;
        static readonly CODEC: Internal.Codec<Internal.MobSpawnSettings$MobSpawnCost>;
    }
    type MobSpawnSettings$MobSpawnCost_ = MobSpawnSettings$MobSpawnCost;
    class SpellSelectionManager {
        constructor(arg0: Player_)
        makeSelection(arg0: number): void;
        getSpellForSlot(arg0: string, arg1: number): SpellData;
        getCurrentSelection(): Internal.SpellSelection;
        getSpellSlot(arg0: number): Internal.SpellSelectionManager$SelectionOption;
        getSpellsForSlot(arg0: string): Internal.List<Internal.SpellSelectionManager$SelectionOption>;
        getSpellData(arg0: number): SpellData;
        getSelectedSpellData(): SpellData;
        getSelectionIndex(): number;
        getGlobalSelectionIndex(): number;
        getSelection(): Internal.SpellSelectionManager$SelectionOption;
        getAllSpells(): Internal.List<Internal.SpellSelectionManager$SelectionOption>;
        getSpellCount(): number;
        get currentSelection(): Internal.SpellSelection
        get selectedSpellData(): SpellData
        get selectionIndex(): number
        get globalSelectionIndex(): number
        get selection(): Internal.SpellSelectionManager$SelectionOption
        get allSpells(): Internal.List<Internal.SpellSelectionManager$SelectionOption>
        get spellCount(): number
        static readonly OFFHAND: "offhand";
        static readonly MAINHAND: "mainhand";
    }
    type SpellSelectionManager_ = SpellSelectionManager;
    interface Tag {
        abstract getType(): Internal.TagType<any>;
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        abstract toString(): string;
        abstract copy(): this;
        abstract write(arg0: Internal.DataOutput_): void;
        abstract getId(): number;
        abstract accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        abstract accept(arg0: Internal.TagVisitor_): void;
        abstract sizeInBytes(): number;
        get type(): Internal.TagType<any>
        get asString(): string
        get id(): number
        readonly OBJECT_REFERENCE: 4;
        readonly TAG_FLOAT: 5;
        readonly TAG_BYTE_ARRAY: 7;
        readonly OBJECT_HEADER: 8;
        readonly TAG_BYTE: 1;
        readonly TAG_INT_ARRAY: 11;
        readonly TAG_LONG_ARRAY: 12;
        readonly TAG_ANY_NUMERIC: 99;
        readonly MAX_DEPTH: 512;
        readonly TAG_LIST: 9;
        readonly STRING_SIZE: 28;
        readonly TAG_INT: 3;
        readonly TAG_SHORT: 2;
        readonly TAG_COMPOUND: 10;
        readonly TAG_STRING: 8;
        readonly TAG_END: 0;
        readonly ARRAY_HEADER: 12;
        readonly TAG_LONG: 4;
        readonly TAG_DOUBLE: 6;
    }
    type Tag_ = Tag;
    class IglooStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.IglooStructure>;
    }
    type IglooStructure_ = IglooStructure;
    class TimeArgument$Info implements Internal.ArgumentTypeInfo<Internal.TimeArgument, Internal.TimeArgument$Info$Template> {
        constructor()
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        serializeToJson(arg0: Internal.TimeArgument$Info$Template_, arg1: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.TimeArgument$Info$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
        unpack(arg0: Internal.TimeArgument_): Internal.TimeArgument$Info$Template;
    }
    type TimeArgument$Info_ = TimeArgument$Info;
    class FeatureFlagUniverse {
        constructor(arg0: string)
    }
    type FeatureFlagUniverse_ = FeatureFlagUniverse;
    class Spider extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Spider>, arg1: Internal.Level_)
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
        isClimbing(): boolean;
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
        setClimbing(arg0: boolean): void;
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
        get climbing(): boolean
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
        set climbing(arg0: boolean)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type Spider_ = Spider;
    class SerializableData extends Internal.MapCodec<Internal.SerializableData$Instance> {
        constructor()
        read(arg0: Internal.FriendlyByteBuf_): Internal.SerializableData$Instance;
        flatMap<B>(arg0: Internal.Function_<Internal.SerializableData$Instance, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        add<T>(arg0: string, arg1: Internal.SerializableDataType_<T>, arg2: T): this;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.SerializableData$Instance>;
        getFieldNames(): Internal.Iterable<string>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        getField(arg0: string): Internal.SerializableData$Field<any>;
        map<B>(arg0: Internal.Function_<Internal.SerializableData$Instance, B>): Internal.MapDecoder<B>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        copy(): this;
        encoder(): Internal.Encoder<Internal.SerializableData$Instance>;
        encode<T>(arg0: Internal.SerializableData$Instance_, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.SerializableData$Instance>>): Internal.MapEncoder<B>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.SerializableData$Instance>;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.SerializableData$Instance, E>>): Internal.MapDecoder<E>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SerializableData$Instance_): void;
        decoder(): Internal.Decoder<Internal.SerializableData$Instance>;
        addFunctionedDefault<T>(arg0: string, arg1: Internal.SerializableDataType_<T>, arg2: Internal.Function_<Internal.SerializableData$Instance, T>): this;
        read(arg0: Internal.JsonObject_): Internal.SerializableData$Instance;
        add(arg0: string, arg1: Internal.SerializableDataType_<any>): this;
        comap<B>(arg0: Internal.Function_<B, Internal.SerializableData$Instance>): Internal.MapEncoder<B>;
        get fieldNames(): Internal.Iterable<string>
        static CURRENT_NAMESPACE: string;
        static CURRENT_PATH: string;
    }
    type SerializableData_ = SerializableData;
    class BidiClassifier {
        constructor(arg0: any)
        setContext(arg0: any): void;
        classify(arg0: number): number;
        getContext(): any;
        set context(arg0: any)
        get context(): any
    }
    type BidiClassifier_ = BidiClassifier;
    class TagLoader$EntryWithSource extends Internal.Record {
        constructor(arg0: Internal.TagEntry_, arg1: string)
        constructor(entry: Internal.TagEntry_, source: string, remove: boolean)
        remove(): boolean;
        source(): string;
        entry(): Internal.TagEntry;
    }
    type TagLoader$EntryWithSource_ = TagLoader$EntryWithSource;
    interface RegisterEvent$RegisterHelper <T> {
        register(arg0: string, arg1: T): void;
        register(arg0: Internal.ResourceKey_<T>, arg1: T): void;
        abstract register(arg0: ResourceLocation_, arg1: T): void;
        (arg0: ResourceLocation, arg1: T): void;
    }
    type RegisterEvent$RegisterHelper_<T> = RegisterEvent$RegisterHelper<T>;
    interface IForgeRegistry$AddCallback <V> {
        abstract onAdd(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_, arg2: number, arg3: Internal.ResourceKey_<V>, arg4: V, arg5: V): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: Internal.ResourceKey<V>, arg4: V, arg5: V): void;
    }
    type IForgeRegistry$AddCallback_<V> = IForgeRegistry$AddCallback<V>;
    abstract class IdScriptableObject extends Internal.ScriptableObject implements Internal.IdFunctionCall {
        constructor()
        constructor(scope: Internal.Scriptable_, prototype: Internal.Scriptable_)
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        activatePrototypeMap(maxPrototypeId: number): void;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): Internal.IdFunctionObject;
    }
    type IdScriptableObject_ = IdScriptableObject;
    class NameTagItem extends Internal.Item {
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
    type NameTagItem_ = NameTagItem;
    abstract class Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        abstract findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        terrainAdaptation(): Internal.TerrainAdjustment;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number): number;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        static onTopOfChunkCenter(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Heightmap$Types_, arg2: Internal.Consumer_<Internal.StructurePiecesBuilder>): Internal.Optional<Internal.Structure$GenerationStub>;
        abstract type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        /**
         * @deprecated
        */
        getLowestYIn5by5BoxOffset7Blocks(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Rotation_): BlockPos;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.Structure>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.Structure>;
    }
    type Structure_ = Special.Structure | Structure;
    class RegisterParticleProvidersEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ParticleEngine_)
        registerSpriteSet<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<T>): void;
        registerSpecial<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider_<T>): void;
        registerSprite<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider$Sprite_<T>): void;
    }
    type RegisterParticleProvidersEvent_ = RegisterParticleProvidersEvent;
    abstract class ImmutableCollections$AbstractImmutableList <E> extends Internal.ImmutableCollections$AbstractImmutableCollection<E> implements Internal.RandomAccess, Internal.List<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        abstract get(arg0: number): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        set(arg0: number, arg1: E): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        remove(arg0: number): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        subList(arg0: number, arg1: number): Internal.List<E>;
        abstract indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<E>;
        abstract lastIndexOf(arg0: any): number;
    }
    type ImmutableCollections$AbstractImmutableList_<E> = ImmutableCollections$AbstractImmutableList<E>;
    interface Matrix2fc {
        abstract rotate(arg0: number, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract m00(): number;
        abstract invert(arg0: Internal.Matrix2f_): Internal.Matrix2f;
        abstract normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract getRow(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract getColumn(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract lerp(arg0: Internal.Matrix2fc_, arg1: number, arg2: Internal.Matrix2f_): Internal.Matrix2f;
        abstract get(arg0: Internal.Matrix2f_): Internal.Matrix2f;
        abstract isFinite(): boolean;
        abstract transform(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract normal(arg0: Internal.Matrix2f_): Internal.Matrix2f;
        abstract m10(): number;
        abstract scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2f_): Internal.Matrix2f;
        abstract sub(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract transformTranspose(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract get(arg0: number[]): number[];
        abstract mulComponentWise(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: number, arg1: number): number;
        abstract transform(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract transformTranspose(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract determinant(): number;
        abstract m01(): number;
        abstract mulLocal(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract add(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract rotateLocal(arg0: number, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract getRotation(): number;
        abstract get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract getScale(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract scale(arg0: number, arg1: number, arg2: Internal.Matrix2f_): Internal.Matrix2f;
        abstract positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract m11(): number;
        abstract scale(arg0: number, arg1: Internal.Matrix2f_): Internal.Matrix2f;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract equals(arg0: Internal.Matrix2fc_, arg1: number): boolean;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transform(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        abstract getToAddress(arg0: number): this;
        abstract transpose(arg0: Internal.Matrix2f_): Internal.Matrix2f;
        abstract transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        get finite(): boolean
        get rotation(): number
    }
    type Matrix2fc_ = Matrix2fc;
    class Rabbit$Variant extends Internal.Enum<Internal.Rabbit$Variant> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        id(): number;
        static byId(arg0: number): Internal.Rabbit$Variant;
        static values(): Internal.Rabbit$Variant[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Rabbit$Variant;
        get serializedName(): string
        static readonly WHITE_SPLOTCHED: Internal.Rabbit$Variant;
        static readonly EVIL: Internal.Rabbit$Variant;
        static readonly WHITE: Internal.Rabbit$Variant;
        static readonly SALT: Internal.Rabbit$Variant;
        static readonly BLACK: Internal.Rabbit$Variant;
        static readonly GOLD: Internal.Rabbit$Variant;
        readonly id: number;
        static readonly BROWN: Internal.Rabbit$Variant;
        static readonly CODEC: Internal.Codec<Internal.Rabbit$Variant>;
    }
    type Rabbit$Variant_ = "white_splotched" | Rabbit$Variant | "gold" | "white" | "evil" | "brown" | "black" | "salt";
    interface JsonSerializationContext {
        abstract serialize(arg0: any): Internal.JsonElement;
        abstract serialize(arg0: any, arg1: Internal.Type_): Internal.JsonElement;
    }
    type JsonSerializationContext_ = JsonSerializationContext;
    class Vindicator extends Internal.AbstractIllager {
        constructor(arg0: Internal.EntityType_<Internal.Vindicator>, arg1: Internal.Level_)
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
        static m_219151_(arg0: Internal.Vindicator_): Internal.RandomSource;
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
        isJohnny: boolean;
        static readonly DOOR_BREAKING_PREDICATE: Internal.Predicate<Internal.Difficulty>;
    }
    type Vindicator_ = Vindicator;
    class EventFactory$EventImpl <T> implements dev.architectury.event.Event<T> {
        constructor(function_: Internal.Function_<Internal.List<T>, T>)
        invoker(): T;
        unregister(listener: T): void;
        update(): void;
        register(listener: T): void;
        isRegistered(listener: T): boolean;
        clearListeners(): void;
    }
    type EventFactory$EventImpl_<T> = EventFactory$EventImpl<T>;
    abstract class VerticalAlignment extends Internal.Enum<Internal.VerticalAlignment> {
        abstract getYPos(arg0: number, arg1: number): number;
        static valueOf(arg0: string): Internal.VerticalAlignment;
        static values(): Internal.VerticalAlignment[];
        static readonly CENTER: Internal.VerticalAlignment;
        static readonly BOTTOM: Internal.VerticalAlignment;
        static readonly TOP: Internal.VerticalAlignment;
    }
    type VerticalAlignment_ = "center" | "bottom" | VerticalAlignment | "top";
    interface IGeometryBakingContext {
        abstract useAmbientOcclusion(): boolean;
        abstract getRenderTypeHint(): ResourceLocation;
        abstract isGui3d(): boolean;
        abstract getModelName(): string;
        abstract isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRenderType(arg0: ResourceLocation_): Internal.RenderTypeGroup;
        getRenderTypeFastHint(): ResourceLocation;
        abstract useBlockLight(): boolean;
        abstract getMaterial(arg0: string): Internal.Material;
        abstract getRootTransform(): Internal.Transformation;
        abstract getTransforms(): Internal.ItemTransforms;
        abstract hasMaterial(arg0: string): boolean;
        get renderTypeHint(): ResourceLocation
        get gui3d(): boolean
        get modelName(): string
        get renderTypeFastHint(): ResourceLocation
        get rootTransform(): Internal.Transformation
        get transforms(): Internal.ItemTransforms
    }
    type IGeometryBakingContext_ = IGeometryBakingContext;
    class ReportingContext {
        constructor(arg0: Internal.AbuseReportSender_, arg1: Internal.ReportEnvironment_, arg2: Internal.ChatLog_)
        matches(arg0: Internal.ReportEnvironment_): boolean;
        static create(arg0: Internal.ReportEnvironment_, arg1: Internal.UserApiService_): Internal.ReportingContext;
        draftReportHandled(arg0: Internal.Minecraft_, arg1: Internal.Screen_, arg2: Internal.Runnable_, arg3: boolean): void;
        setChatReportDraft(arg0: Internal.ChatReportBuilder$ChatReport_): void;
        sender(): Internal.AbuseReportSender;
        chatLog(): Internal.ChatLog;
        hasDraftReportFor(arg0: Internal.UUID_): boolean;
        hasDraftReport(): boolean;
        set chatReportDraft(arg0: Internal.ChatReportBuilder$ChatReport_)
    }
    type ReportingContext_ = ReportingContext;
    interface Long2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.LongPredicate {
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2BooleanFunction<T>;
        remove(arg0: number): boolean;
        put(arg0: number, arg1: boolean): boolean;
        test(arg0: number): boolean;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2BooleanFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Long2LongFunction;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2BooleanFunction;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Long2CharFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        or(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        apply(arg0: number): boolean;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Long2ByteFunction;
        abstract get(arg0: number): boolean;
        and(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        defaultReturnValue(): boolean;
        negate(): Internal.LongPredicate;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2BooleanFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        containsKey(arg0: number): boolean;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2BooleanFunction;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Long2ShortFunction;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Long2IntFunction;
        size(): number;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2BooleanFunction<T>;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2BooleanFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2BooleanFunction;
        (arg0: number): boolean;
    }
    type Long2BooleanFunction_ = Long2BooleanFunction;
    class FMLConstructModEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type FMLConstructModEvent_ = FMLConstructModEvent;
    class BlockSnapshot {
        restore(arg0: boolean): boolean;
        getCurrentBlock(): Internal.BlockState;
        getFlag(): number;
        restoreToLocation(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: boolean, arg3: boolean): boolean;
        restore(): boolean;
        getPos(): BlockPos;
        getBlockEntity(): Internal.BlockEntity;
        restore(arg0: boolean, arg1: boolean): boolean;
        static create(arg0: Internal.ResourceKey_<Internal.Level>, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number): Internal.BlockSnapshot;
        getTag(): Internal.CompoundTag;
        getReplacedBlock(): Internal.BlockState;
        getLevel(): Internal.LevelAccessor;
        static create(arg0: Internal.ResourceKey_<Internal.Level>, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockSnapshot;
        get currentBlock(): Internal.BlockState
        get flag(): number
        get pos(): BlockPos
        get blockEntity(): Internal.BlockEntity
        get tag(): Internal.CompoundTag
        get replacedBlock(): Internal.BlockState
        get level(): Internal.LevelAccessor
    }
    type BlockSnapshot_ = BlockSnapshot;
    class CooldownPower extends Internal.CooldownPowerFactory$Simple<Internal.CooldownConfiguration> {
        constructor()
        change(arg0: Internal.ConfiguredPower_<Internal.CooldownConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
        increment(arg0: Internal.ConfiguredPower_<Internal.CooldownConfiguration, any>, arg1: Internal.Entity_): number;
        decrement(arg0: Internal.ConfiguredPower_<Internal.CooldownConfiguration, any>, arg1: Internal.Entity_): number;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.CooldownConfiguration, any>, arg1: Internal.Entity_): number;
    }
    type CooldownPower_ = CooldownPower;
    class ModifyEntityBuilder extends Internal.EventJS {
        constructor(entityType: Internal.EntityType_<any>)
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isPushable(true);
         * ```
        */
        isPushable(b: boolean): this;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
        */
        isFreezing(isFreezing: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
        */
        isCurrentlyGlowing(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        setBlockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>): this;
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
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onFlap(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets the RenderType of the entity, effectively capable of dynamically replacing texture locations.
         * Return null for the default render type.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setRenderType(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return RenderType.entityCutout(skin);
         * });
         * ```
        */
        setRenderType(setRenderType: Internal.Function_<Internal.ContextUtils$RendererModelContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
        */
        isInvulnerableTo(predicate: Internal.Function_<Internal.ContextUtils$EDamageContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
        */
        onFall(c: Internal.Consumer_<Internal.ContextUtils$EEntityFallDamageContext>): this;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onSprint(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Boolean determining if the entity is controlled by the first passenger
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.controlledByFirstPassenger(true)
         * ```
        */
        controlledByFirstPassenger(controlledByFirstPassenger: boolean): this;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
        */
        mayInteract(predicate: Internal.Function_<Internal.ContextUtils$EMayInteractContext, any>): this;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        setSwimSound(sound: any): this;
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
         * Will output the entity type as well as the builder pertaining to the entity type 
         *  
         * Example usage: 
         * ```javascript
         * EntityJSEvents.modifyEntity(event => {
         *     event.modify("minecraft:zombie", builder => {
         *         console.log(builder.builderType())
         *     })
         * })
         * ```
        */
        builderType(): string;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
        */
        playerTouch(consumer: Internal.Consumer_<Internal.ContextUtils$EntityPlayerContext>): this;
        /**
         * Sets the Texture Location of the entity without modifying the RenderType logic.
         * Returns a ResourceLocation.
         * Return null for the default entity's location
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setTextureLocation(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return skin;
         * });
         * ```
        */
        setTextureLocation(setTextureLocation: Internal.Function_<Internal.ContextUtils$RendererModelContext, any>): this;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
        */
        blockSpeedFactor(callback: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets whether an entity should ignore explosions.
         * The provided function should return a truthy value (e.g., true) to ignore explosion effects.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.ignoreExplosion(entity => {
         *     // Ignore explosions only for entities named "BoomProof"
         *     return entity.name?.getString() == "BoomProof";
         * });
         * ```
        */
        ignoreExplosion(ignoreExplosion: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        canFreeze(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed when the entity
         * collides with another entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
        */
        onEntityCollision(consumer: Internal.Consumer_<Internal.ContextUtils$CollidingProjectileEntityContext>): this;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onRemovedFromWorld(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
        */
        isFlapping(b: Internal.Function_<Internal.Entity, any>): this;
        getEntityType(): Internal.EntityType<any>;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onStopRiding(callback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onClientRemoval(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets whether the entity is attackable or not.
         * 
         * @param isAttackable Boolean value indicating whether the entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAttackable(true);
         * ```
        */
        isAttackable(b: boolean): this;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onAddedToWorld(onAddedToWorldCallback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
        */
        move(consumer: Internal.Consumer_<Internal.ContextUtils$MovementContext>): this;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
        */
        thunderHit(consumer: Internal.Consumer_<Internal.ContextUtils$EThunderHitContext>): this;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
        */
        lerpTo(consumer: Internal.Consumer_<Internal.ContextUtils$LerpToContext>): this;
        /**
         * Function which sets the offset for riding on the entity.
         * 
         * @param myRidingOffset The offset value for riding on the mob.
         * Defaults to 0.0.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.myRidingOffset(entity => {
         *     //Use the provided context about the entity to determine the riding offset of the passengers
         *     return 5 //Some double value;
         * })
         * ```
        */
        myRidingOffset(myRidingOffset: Internal.Function_<Internal.Entity, any>): this;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     modifyBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
        */
        positionRider(builderConsumer: Internal.Consumer_<Internal.ContextUtils$PositionRiderContext>): this;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
        */
        canCollideWith(canCollideWith: Internal.Function_<Internal.ContextUtils$ECollidingEntityContext, any>): this;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
        */
        canAddPassenger(predicate: Internal.Function_<Internal.ContextUtils$EPassengerEntityContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        lavaHurt(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
        */
        shouldRenderAtSqrDistance(func: Internal.Function_<Internal.ContextUtils$EntitySqrDistanceContext, any>): this;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.rideTick(entity => {
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
         * modifyBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        setMaxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
        */
        canChangeDimensions(supplier: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
        */
        tick(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Function determining if the entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isPickable(entity => {
         *     return true;
         * })
         * ```
        */
        isPickable(isPickable: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
        */
        canTrample(predicate: Internal.Function_<Internal.ContextUtils$ECanTrampleContext, any>): this;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        setSwimSplashSound(sound: any): this;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onInteract(context => {
         *     // Define custom logic for the interaction with the entity
         *     // Use information about the EntityInteractContext provided by the context.
         *     if (context.player.isShiftKeyDown()) return
         *     context.player.startRiding(context.entity);
         * });
         * ```
        */
        onInteract(c: Internal.Consumer_<Internal.ContextUtils$EntityInteractContext>): this;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.repositionEntityAfterLoad(true);
         * ```
        */
        repositionEntityAfterLoad(customRepositionEntityAfterLoad: boolean): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        set blockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets the RenderType of the entity, effectively capable of dynamically replacing texture locations.
         * Return null for the default render type.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setRenderType(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return RenderType.entityCutout(skin);
         * });
         * ```
        */
        set renderType(setRenderType: Internal.Function_<Internal.ContextUtils$RendererModelContext, any>)
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        set swimSound(sound: any)
        /**
         * Sets the Texture Location of the entity without modifying the RenderType logic.
         * Returns a ResourceLocation.
         * Return null for the default entity's location
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setTextureLocation(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return skin;
         * });
         * ```
        */
        set textureLocation(setTextureLocation: Internal.Function_<Internal.ContextUtils$RendererModelContext, any>)
        get entityType(): Internal.EntityType<any>
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        set maxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        set swimSplashSound(sound: any)
        readonly entityType: Internal.EntityType<any>;
        static builderMap: {};
    }
    type ModifyEntityBuilder_ = ModifyEntityBuilder;
    class ElementType extends Internal.Enum<Internal.ElementType> {
        static values(): Internal.ElementType[];
        static valueOf(arg0: string): Internal.ElementType;
        static readonly TYPE: Internal.ElementType;
        static readonly TYPE_PARAMETER: Internal.ElementType;
        static readonly MODULE: Internal.ElementType;
        static readonly PARAMETER: Internal.ElementType;
        static readonly PACKAGE: Internal.ElementType;
        static readonly METHOD: Internal.ElementType;
        static readonly FIELD: Internal.ElementType;
        static readonly LOCAL_VARIABLE: Internal.ElementType;
        static readonly TYPE_USE: Internal.ElementType;
        static readonly CONSTRUCTOR: Internal.ElementType;
        static readonly ANNOTATION_TYPE: Internal.ElementType;
        static readonly RECORD_COMPONENT: Internal.ElementType;
    }
    type ElementType_ = ElementType | "method" | "type_parameter" | "module" | "constructor" | "annotation_type" | "package" | "type" | "type_use" | "parameter" | "field" | "local_variable" | "record_component";
    class SleepInBed extends Internal.Behavior<Internal.LivingEntity> {
        constructor()
        static readonly COOLDOWN_AFTER_BEING_WOKEN: 100;
    }
    type SleepInBed_ = SleepInBed;
    class ModFishBucket extends Internal.MobBucketItem {
        constructor(arg0: Internal.Supplier_<Internal.EntityType<any>>, arg1: Internal.Fluid_, arg2: Internal.Item$Properties_)
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
        arch$getFluid(): Internal.Fluid;
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
    type ModFishBucket_ = ModFishBucket;
    interface OptionalSupplier <T> extends Internal.Supplier<T> {
        getOrNull(): T;
        orElse(other: T): T;
        abstract isPresent(): boolean;
        stream(): Internal.Stream<T>;
        ifPresent(action: Internal.Consumer_<T>): void;
        orElseGet(supplier: Internal.Supplier_<T>): T;
        ifPresentOrElse(action: Internal.Consumer_<T>, emptyAction: Internal.Runnable_): void;
        abstract get(): T;
        toOptional(): Internal.Optional<T>;
        get orNull(): T
        get present(): boolean
    }
    type OptionalSupplier_<T> = OptionalSupplier<T>;
    class LivingHurtEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: DamageSource_, arg2: number)
        getEntity(): Internal.Entity;
        getAmount(): number;
        setAmount(arg0: number): void;
        getSource(): DamageSource;
        get entity(): Internal.Entity
        get amount(): number
        set amount(arg0: number)
        get source(): DamageSource
    }
    type LivingHurtEvent_ = LivingHurtEvent;
    class MethodType implements Internal.Constable, Internal.TypeDescriptor$OfMethod<typeof any, Internal.MethodType>, Internal.Serializable {
        appendParameterTypes(arg0: Internal.List_<typeof any>): this;
        describeConstable(): Internal.Optional<Internal.MethodTypeDesc>;
        descriptorString(): string;
        static genericMethodType(arg0: number, arg1: boolean): Internal.MethodType;
        changeParameterType(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        unwrap(): this;
        insertParameterTypes(arg0: number, arg1: Internal.List_<typeof any>): this;
        appendParameterTypes(...arg0: typeof any[]): this;
        changeReturnType(arg0: typeof any): this;
        generic(): this;
        parameterType(arg0: number): typeof any;
        parameterList(): Internal.List<typeof any>;
        hasPrimitives(): boolean;
        static genericMethodType(arg0: number): Internal.MethodType;
        static methodType(arg0: typeof any, arg1: Internal.List_<typeof any>): Internal.MethodType;
        dropParameterTypes(arg0: number, arg1: number): Internal.TypeDescriptor$OfMethod<any, any>;
        static methodType(arg0: typeof any, arg1: typeof any, ...arg2: typeof any[]): Internal.MethodType;
        parameterCount(): number;
        returnType(): typeof any;
        static methodType(arg0: typeof any, arg1: Internal.MethodType_): Internal.MethodType;
        insertParameterTypes(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>[]): Internal.TypeDescriptor$OfMethod<any, any>;
        toMethodDescriptorString(): string;
        static fromMethodDescriptorString(arg0: string, arg1: Internal.ClassLoader_): Internal.MethodType;
        insertParameterTypes(arg0: number, ...arg1: typeof any[]): this;
        wrap(): this;
        static methodType(arg0: typeof any): Internal.MethodType;
        changeParameterType(arg0: number, arg1: typeof any): this;
        static methodType(arg0: typeof any, arg1: typeof any): Internal.MethodType;
        erase(): this;
        changeReturnType(arg0: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        static methodType(arg0: typeof any, arg1: typeof any[]): Internal.MethodType;
        lastParameterType(): typeof any;
        parameterArray(): typeof any[];
        hasWrappers(): boolean;
    }
    type MethodType_ = MethodType;
    class FaceAttachedHorizontalDirectionalBlock extends Internal.HorizontalDirectionalBlock {
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
        static canAttach(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACE: Internal.EnumProperty<Internal.AttachFace>;
    }
    type FaceAttachedHorizontalDirectionalBlock_ = FaceAttachedHorizontalDirectionalBlock;
    class PathFinder {
        constructor(arg0: Internal.NodeEvaluator_, arg1: number)
        findPath(arg0: Internal.PathNavigationRegion_, arg1: Internal.Mob_, arg2: Internal.Set_<BlockPos>, arg3: number, arg4: number, arg5: number): net.minecraft.world.level.pathfinder.Path;
        distance(arg0: Internal.Node_, arg1: Internal.Node_): number;
    }
    type PathFinder_ = PathFinder;
    class KeyMapping implements Internal.KeyBindingAccessor, Internal.Comparable<Internal.KeyMapping>, Internal.IForgeKeyMapping, Internal.ContextualKeyBinding, net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor {
        constructor(arg0: string, arg1: Internal.IKeyConflictContext_, arg2: Internal.KeyModifier_, arg3: Internal.InputConstants$Key_, arg4: string)
        constructor(arg0: string, arg1: Internal.IKeyConflictContext_, arg2: Internal.KeyModifier_, arg3: Internal.InputConstants$Type_, arg4: number, arg5: string)
        constructor(arg0: string, arg1: Internal.IKeyConflictContext_, arg2: Internal.InputConstants$Type_, arg3: number, arg4: string)
        constructor(arg0: string, arg1: number, arg2: string)
        constructor(arg0: string, arg1: Internal.InputConstants$Type_, arg2: number, arg3: string)
        constructor(arg0: string, arg1: Internal.IKeyConflictContext_, arg2: Internal.InputConstants$Key_, arg3: string)
        static resetMapping(): void;
        doABarrelRoll$getContexts(): Internal.List<any>;
        isConflictContextAndModifierActive(): boolean;
        static set(arg0: Internal.InputConstants$Key_, arg1: boolean): void;
        compareTo(arg0: any): number;
        setKeyConflictContext(arg0: Internal.IKeyConflictContext_): void;
        isUnbound(): boolean;
        matchesMouse(arg0: number): boolean;
        static createNameSupplier(arg0: string): Internal.Supplier<Internal.Component>;
        setKeyModifierAndCode(arg0: Internal.KeyModifier_, arg1: Internal.InputConstants$Key_): void;
        saveString(): string;
        getKeyConflictContext(): Internal.IKeyConflictContext;
        getKey(): Internal.InputConstants$Key;
        getName(): string;
        static fabric_getCategoryMap(): Internal.Map<string, number>;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$2a2e30$0(): Internal.Map<any, any>;
        hasKeyModifierConflict(arg0: Internal.KeyMapping_): boolean;
        same(arg0: Internal.KeyMapping_): boolean;
        isActiveAndMatches(arg0: Internal.InputConstants$Key_): boolean;
        static click(arg0: Internal.InputConstants$Key_): void;
        doABarrelRoll$addToContext(context: Internal.InputContext_): void;
        setDown(arg0: boolean): void;
        setToDefault(): void;
        fabric_getBoundKey(): Internal.InputConstants$Key;
        getDefaultKey(): Internal.InputConstants$Key;
        static releaseAll(): void;
        setKey(arg0: Internal.InputConstants$Key_): void;
        getDefaultKeyModifier(): Internal.KeyModifier;
        isDefault(): boolean;
        getKeyModifier(): Internal.KeyModifier;
        compareTo(arg0: Internal.KeyMapping_): number;
        getCategory(): string;
        isDown(): boolean;
        static resetToggleKeys(): void;
        matches(arg0: number, arg1: number): boolean;
        fabric_getTimesPressed(): number;
        getTranslatedKeyMessage(): Internal.Component;
        static setAll(): void;
        consumeClick(): boolean;
        get conflictContextAndModifierActive(): boolean
        set keyConflictContext(arg0: Internal.IKeyConflictContext_)
        get unbound(): boolean
        get keyConflictContext(): Internal.IKeyConflictContext
        get key(): Internal.InputConstants$Key
        get name(): string
        set down(arg0: boolean)
        get defaultKey(): Internal.InputConstants$Key
        set key(arg0: Internal.InputConstants$Key_)
        get defaultKeyModifier(): Internal.KeyModifier
        get "default"(): boolean
        get keyModifier(): Internal.KeyModifier
        get category(): string
        get down(): boolean
        get translatedKeyMessage(): Internal.Component
        key: Internal.InputConstants$Key;
        static readonly CATEGORY_GAMEPLAY: "key.categories.gameplay";
        static readonly CATEGORY_MOVEMENT: "key.categories.movement";
        static readonly CATEGORY_INVENTORY: "key.categories.inventory";
        isDown: boolean;
        static readonly CATEGORY_MISC: "key.categories.misc";
        static readonly CATEGORY_INTERFACE: "key.categories.ui";
        static readonly CATEGORY_CREATIVE: "key.categories.creative";
        static readonly CATEGORY_MULTIPLAYER: "key.categories.multiplayer";
    }
    type KeyMapping_ = KeyMapping;
    class DebugScreenOverlay implements Internal.DebugScreenOverlayAccessor {
        constructor(arg0: Internal.Minecraft_)
        drawGameInformation(arg0: Internal.GuiGraphics_): void;
        getSystemInformation(): Internal.List<string>;
        drawSystemInformation(arg0: Internal.GuiGraphics_): void;
        handler$dmg000$entityculling$getLeftText(callback: Internal.CallbackInfoReturnable_<any>): Internal.List<any>;
        render(arg0: Internal.GuiGraphics_): void;
        handler$zze000$fabric_renderer_api_v1$getLeftText(info: Internal.CallbackInfoReturnable_<any>): void;
        getGameInformation(): Internal.List<string>;
        clearChunkCache(): void;
        invokeRenderLines(arg0: Internal.GuiGraphics_, arg1: Internal.List_<any>, arg2: boolean): void;
        get systemInformation(): Internal.List<string>
        get gameInformation(): Internal.List<string>
        block: Internal.HitResult;
        liquid: Internal.HitResult;
    }
    type DebugScreenOverlay_ = DebugScreenOverlay;
    class ArmorItemBuilder extends Internal.ItemBuilder {
        modifyTier(callback: Internal.Consumer_<Internal.MutableArmorTier>): this;
        tier(t: Internal.ArmorMaterial_): this;
        createObject(): any;
        readonly armorType: Internal.ArmorItem$Type;
        armorTier: Internal.MutableArmorTier;
    }
    type ArmorItemBuilder_ = ArmorItemBuilder;
    class BushFoliagePlacer extends Internal.BlobFoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.BushFoliagePlacer>;
    }
    type BushFoliagePlacer_ = BushFoliagePlacer;
    class CryingObsidianBlock extends Internal.Block {
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
    type CryingObsidianBlock_ = CryingObsidianBlock;
    class BossEvent$BossBarColor extends Internal.Enum<Internal.BossEvent$BossBarColor> {
        getFormatting(): Internal.ChatFormatting;
        getName(): string;
        static byName(name: string): Internal.BossEvent$BossBarColor;
        static values(): Internal.BossEvent$BossBarColor[];
        static valueOf(arg0: string): Internal.BossEvent$BossBarColor;
        get formatting(): Internal.ChatFormatting
        get name(): string
        static readonly PINK: Internal.BossEvent$BossBarColor;
        static readonly BLUE: Internal.BossEvent$BossBarColor;
        static readonly RED: Internal.BossEvent$BossBarColor;
        static readonly PURPLE: Internal.BossEvent$BossBarColor;
        static readonly WHITE: Internal.BossEvent$BossBarColor;
        static readonly GREEN: Internal.BossEvent$BossBarColor;
        static readonly YELLOW: Internal.BossEvent$BossBarColor;
    }
    type BossEvent$BossBarColor_ = "white" | "yellow" | BossEvent$BossBarColor | "red" | "purple" | "pink" | "blue" | "green";
    class ModifyValuePower extends Internal.ValueModifyingPowerFactory<any> {
        constructor()
    }
    type ModifyValuePower_ = ModifyValuePower;
    class MatchToolCondition implements org.mesdag.advjs.predicate.condition.ICondition {
        constructor(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
    }
    type MatchToolCondition_ = MatchToolCondition;
    class IClientItemExtensions$FontContext extends Internal.Enum<Internal.IClientItemExtensions$FontContext> {
        static valueOf(arg0: string): Internal.IClientItemExtensions$FontContext;
        static values(): Internal.IClientItemExtensions$FontContext[];
        static readonly TOOLTIP: Internal.IClientItemExtensions$FontContext;
        static readonly SELECTED_ITEM_NAME: Internal.IClientItemExtensions$FontContext;
        static readonly ITEM_COUNT: Internal.IClientItemExtensions$FontContext;
    }
    type IClientItemExtensions$FontContext_ = "item_count" | "tooltip" | IClientItemExtensions$FontContext | "selected_item_name";
    abstract class StoredUserList <K, V extends Internal.StoredUserEntry<K>> {
        constructor(arg0: Internal.File_)
        abstract createEntry(arg0: Internal.JsonObject_): Internal.StoredUserEntry<K>;
        remove(arg0: K): void;
        isEmpty(): boolean;
        save(): void;
        getFile(): Internal.File;
        getKeyForUser(arg0: K): string;
        getEntries(): Internal.Collection<V>;
        getUserList(): string[];
        get(arg0: K): V;
        contains(arg0: K): boolean;
        remove(arg0: Internal.StoredUserEntry_<K>): void;
        load(): void;
        add(arg0: V): void;
        get empty(): boolean
        get file(): Internal.File
        get entries(): Internal.Collection<V>
        get userList(): string[]
    }
    type StoredUserList_<K, V extends Internal.StoredUserEntry<K>> = StoredUserList<K, V>;
    interface InjectedItemExtension extends Internal.InjectedRegistryEntryExtension<Internal.Item> {
        arch$registryName(): ResourceLocation;
        arch$holder(): Internal.Holder<Internal.Item>;
    }
    type InjectedItemExtension_ = InjectedItemExtension;
    class BeaconBlockEntity extends Internal.BlockEntity implements Internal.Nameable, Internal.MenuProvider {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getDisplayName(): Internal.Component;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setCustomName(arg0: Internal.Component_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<any>;
        shouldCloseCurrentScreen(): boolean;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        static getValidEffectById(arg0: number): Internal.MobEffect;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getName(): Internal.Component;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BeaconBlockEntity_): void;
        getBeamSections(): Internal.List<Internal.BeaconBlockEntity$BeaconBeamSection>;
        deserializeNBT(arg0: Internal.Tag_): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        static playSound(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.SoundEvent_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getCustomName(): Internal.Component;
        getRenderBoundingBox(): Internal.AABB;
        get displayName(): Internal.Component
        set customName(arg0: Internal.Component_)
        get updatePacket(): Internal.Packet<any>
        get name(): Internal.Component
        get beamSections(): Internal.List<Internal.BeaconBlockEntity$BeaconBeamSection>
        get modelData(): Internal.ModelData
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        secondaryPower: Internal.MobEffect;
        primaryPower: Internal.MobEffect;
        static readonly DATA_SECONDARY: 2;
        static readonly NUM_DATA_VALUES: 3;
        static readonly DATA_PRIMARY: 1;
        levels: number;
        static readonly DATA_LEVELS: 0;
        beamSections: Internal.List<Internal.BeaconBlockEntity$BeaconBeamSection>;
        static readonly BEACON_EFFECTS: Internal.MobEffect[][];
    }
    type BeaconBlockEntity_ = BeaconBlockEntity;
    interface IForgeBlockGetter {
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getModelDataManager(): Internal.ModelDataManager;
        get modelDataManager(): Internal.ModelDataManager
    }
    type IForgeBlockGetter_ = IForgeBlockGetter;
    interface Commands$ParseFunction {
        abstract parse(arg0: Internal.StringReader_): void;
        (arg0: Internal.StringReader): void;
    }
    type Commands$ParseFunction_ = Commands$ParseFunction;
    class Pose extends Internal.Enum<Internal.Pose> {
        static valueOf(arg0: string): Internal.Pose;
        static values(): Internal.Pose[];
        static readonly ROARING: Internal.Pose;
        static readonly LONG_JUMPING: Internal.Pose;
        static readonly FALL_FLYING: Internal.Pose;
        static readonly SWIMMING: Internal.Pose;
        static readonly DYING: Internal.Pose;
        static readonly EMERGING: Internal.Pose;
        static readonly USING_TONGUE: Internal.Pose;
        static readonly DIGGING: Internal.Pose;
        static readonly CROAKING: Internal.Pose;
        static readonly SPIN_ATTACK: Internal.Pose;
        static readonly SNIFFING: Internal.Pose;
        static readonly CROUCHING: Internal.Pose;
        static readonly STANDING: Internal.Pose;
        static readonly SITTING: Internal.Pose;
        static readonly SLEEPING: Internal.Pose;
    }
    type Pose_ = "croaking" | "long_jumping" | "dying" | "sniffing" | "spin_attack" | "swimming" | "crouching" | "sitting" | "emerging" | "using_tongue" | "fall_flying" | Pose | "digging" | "sleeping" | "roaring" | "standing";
}
declare namespace com.lowdragmc.lowdraglib.gui.editor.configurator {
    interface IConfigurable extends Internal.ILDLRegister {
        name(): string;
        isLDLRegister(): boolean;
        getRegisterUI(): Internal.LDLRegister;
        getTranslateKey(): string;
        getChatComponent(): Internal.Component;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        group(): string;
        get LDLRegister(): boolean
        get registerUI(): Internal.LDLRegister
        get translateKey(): string
        get chatComponent(): Internal.Component
    }
    type IConfigurable_ = IConfigurable;
}
declare namespace net.minecraft.world {
    interface ContainerListener {
        abstract containerChanged(arg0: Internal.Container_): void;
        (arg0: Internal.Container): void;
    }
    type ContainerListener_ = ContainerListener;
}
