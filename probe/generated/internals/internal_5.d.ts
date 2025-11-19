/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface ShaderInstanceAccessor {
        abstract getUniformMap(): Internal.Map<string, Internal.Uniform>;
        abstract getBlend(): Internal.BlendMode;
        abstract getSamplerNames(): Internal.List<string>;
        get uniformMap(): Internal.Map<string, Internal.Uniform>
        get blend(): Internal.BlendMode
        get samplerNames(): Internal.List<string>
    }
    type ShaderInstanceAccessor_ = ShaderInstanceAccessor;
    interface Float2FloatFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleUnaryOperator {
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2FloatFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2FloatFunction;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Float2CharFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Float2LongFunction;
        defaultReturnValue(arg0: number): void;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2FloatFunction;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Float2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2FloatFunction<T>;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        identity(): this;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        put(arg0: number, arg1: number): number;
        apply(arg0: number): number;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2FloatFunction;
        size(): number;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        remove(arg0: number): number;
        clear(): void;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Float2DoubleFunction;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Float2ByteFunction;
        (arg0: number): number;
    }
    type Float2FloatFunction_ = Float2FloatFunction;
    class UnitTokenStream {
        constructor(context: Internal.UnitContext_, input: string)
        peekToken(): Internal.UnitToken;
        readFully(): Internal.UnitToken;
        nextToken(): Internal.UnitToken;
        getUnit(): Internal.Unit;
        ifNextToken(token: Internal.UnitToken_): boolean;
        readSingleToken(): Internal.UnitToken;
        get unit(): Internal.Unit
        readonly context: Internal.UnitContext;
        readonly input: string;
        readonly charStream: Internal.CharStream;
        readonly unit: Internal.Unit;
        readonly inputStringPos: Internal.ArrayList<number>;
        readonly infix: Internal.ArrayList<Internal.UnitToken>;
    }
    type UnitTokenStream_ = UnitTokenStream;
    class SmokerBlockEntity extends Internal.AbstractFurnaceBlockEntity {
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
    type SmokerBlockEntity_ = SmokerBlockEntity;
    class FenceGateBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        behaviour(wt: Internal.WoodType_): this;
        behaviour(wt: string): this;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): any;
    }
    type FenceGateBlockBuilder_ = FenceGateBlockBuilder;
    class ModelPart implements toni.immersivelanterns.foundation.mixin.ModelPartAccessor, Internal.ModelPartData, io.wispforest.accessories.mixin.client.ModelPartAccessor, Internal.ModelPartAccessor, Internal.IUpperPartHelper {
        constructor(arg0: Internal.List_<Internal.ModelPart$Cube>, arg1: Internal.Map_<string, Internal.ModelPart>)
        getChildren(): Internal.Map<any, any>;
        copyFrom(arg0: Internal.ModelPart_): void;
        offsetRotation(arg0: Vector3f_): void;
        hasChild(arg0: string): boolean;
        render(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        loadPose(arg0: Internal.PartPose_): void;
        getInitialPose(): Internal.PartPose;
        setPos(arg0: number, arg1: number, arg2: number): void;
        visit(arg0: Internal.PoseStack_, arg1: Internal.ModelPart$Visitor_): void;
        isEmpty(): boolean;
        getAllParts(): Internal.Stream<Internal.ModelPart>;
        getChild(arg0: string): this;
        setRotation(arg0: number, arg1: number, arg2: number): void;
        setInitialPose(arg0: Internal.PartPose_): void;
        translateAndRotate(matrixStack: Internal.PoseStack_): void;
        isVisible(): boolean;
        render(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number): void;
        isUpperPart(): boolean;
        getRandomCube(arg0: Internal.RandomSource_): Internal.ModelPart$Cube;
        isHidden(): boolean;
        setUpperPart(bl: boolean): void;
        offsetPos(arg0: Vector3f_): void;
        mobplayeranimator$getChildren(): Internal.Map<any, any>;
        static from(arg0: Internal.ModelPart_): Internal.ModelPartData;
        getCubes(): Internal.List<any>;
        resetPose(): void;
        storePose(): Internal.PartPose;
        offsetScale(arg0: Vector3f_): void;
        getCuboids(): Internal.ModelCuboid[];
        get children(): Internal.Map<any, any>
        get initialPose(): Internal.PartPose
        get empty(): boolean
        get allParts(): Internal.Stream<Internal.ModelPart>
        set initialPose(arg0: Internal.PartPose_)
        get visible(): boolean
        get upperPart(): boolean
        get hidden(): boolean
        set upperPart(bl: boolean)
        get cubes(): Internal.List<any>
        get cuboids(): Internal.ModelCuboid[]
        zScale: number;
        yScale: number;
        xRot: number;
        cubes: Internal.List<Internal.ModelPart$Cube>;
        zRot: number;
        visible: boolean;
        z: number;
        skipDraw: boolean;
        y: number;
        x: number;
        xScale: number;
        static readonly DEFAULT_SCALE: 1.0;
        yRot: number;
    }
    type ModelPart_ = ModelPart;
    class CaxtonGlyphCache {
        constructor(textureManager: Internal.TextureManager_)
        getLocations(): Internal.Map<Internal.CaxtonFont, Internal.Int2LongMap>;
        getAtlas(): Internal.CaxtonAtlas;
        clear(): void;
        getAtlasPageTexture(pageNum: number): Internal.CaxtonAtlas$Page;
        getAtlasPage(pageNum: number): ResourceLocation;
        forFont(font: Internal.CaxtonFont_): Internal.CaxtonGlyphCache$Font;
        get locations(): Internal.Map<Internal.CaxtonFont, Internal.Int2LongMap>
        get atlas(): Internal.CaxtonAtlas
    }
    type CaxtonGlyphCache_ = CaxtonGlyphCache;
    class CalioDynamicRegistryEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ICalioDynamicRegistryManager_)
        getRegistryManager(): Internal.ICalioDynamicRegistryManager;
        get registryManager(): Internal.ICalioDynamicRegistryManager
    }
    type CalioDynamicRegistryEvent_ = CalioDynamicRegistryEvent;
    class AdvancementProgress implements Internal.Comparable<Internal.AdvancementProgress> {
        constructor()
        grantProgress(arg0: string): boolean;
        getCriterion(arg0: string): Internal.CriterionProgress;
        isDone(): boolean;
        hasProgress(): boolean;
        getCompletedCriteria(): Internal.Iterable<string>;
        compareTo(arg0: any): number;
        update(arg0: Internal.Map_<string, Internal.Criterion>, arg1: string[][]): void;
        getPercent(): number;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.AdvancementProgress;
        revokeProgress(arg0: string): boolean;
        getProgressText(): string;
        getFirstProgressDate(): Internal.Date;
        getRemainingCriteria(): Internal.Iterable<string>;
        serializeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        compareTo(arg0: Internal.AdvancementProgress_): number;
        get done(): boolean
        get completedCriteria(): Internal.Iterable<string>
        get percent(): number
        get progressText(): string
        get firstProgressDate(): Internal.Date
        get remainingCriteria(): Internal.Iterable<string>
        readonly criteria: Internal.Map<string, Internal.CriterionProgress>;
    }
    type AdvancementProgress_ = AdvancementProgress;
    class DataVersion {
        constructor(arg0: number, arg1: string)
        constructor(arg0: number)
        isSideSeries(): boolean;
        getSeries(): string;
        getVersion(): number;
        isCompatible(arg0: Internal.DataVersion_): boolean;
        get sideSeries(): boolean
        get series(): string
        get version(): number
        static MAIN_SERIES: "main";
    }
    type DataVersion_ = DataVersion;
    class ClientboundSetPlayerTeamPacket$Action extends Internal.Enum<Internal.ClientboundSetPlayerTeamPacket$Action> {
        static values(): Internal.ClientboundSetPlayerTeamPacket$Action[];
        static valueOf(arg0: string): Internal.ClientboundSetPlayerTeamPacket$Action;
        static readonly REMOVE: Internal.ClientboundSetPlayerTeamPacket$Action;
        static readonly ADD: Internal.ClientboundSetPlayerTeamPacket$Action;
    }
    type ClientboundSetPlayerTeamPacket$Action_ = "remove" | ClientboundSetPlayerTeamPacket$Action | "add";
    class RemoveSpawnsProperties {
        constructor()
        mobs: Internal.MobFilter;
        biomes: Internal.BiomeFilter;
    }
    type RemoveSpawnsProperties_ = RemoveSpawnsProperties;
    class FishingRodHookedBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        setEntityByType(arg0: Internal.EntityType_<any>): void;
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        setEntityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The item that was caught.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The item that was caught.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        setEntityByPredicate(arg0: Internal.EntityPredicate_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * The item that was caught.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The fishing rod used.
        */
        setRod(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * The fishing rod used.
        */
        setRod(arg0: Internal.ItemPredicate_): void;
        /**
         * The fishing rod used.
        */
        setRod(arg0: Internal.Ingredient_): void;
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        setEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        set entityByType(arg0: Internal.EntityType_<any>)
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        set entityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The item that was caught.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The item that was caught.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        set entityByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The item that was caught.
        */
        set item(arg0: Internal.ItemPredicate_)
        /**
         * The fishing rod used.
        */
        set rod(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The fishing rod used.
        */
        set rod(arg0: Internal.ItemPredicate_)
        /**
         * The fishing rod used.
        */
        set rod(arg0: Internal.Ingredient_)
        /**
         * The entity that was pulled, or the fishing bobber if no entity is pulled.
        */
        set entity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
    }
    type FishingRodHookedBuilder_ = FishingRodHookedBuilder;
    interface Int2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ObjectFunction<V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Int2CharFunction;
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        abstract get(arg0: number): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Int2ReferenceFunction<T>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Int2ByteFunction;
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
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Int2DoubleFunction;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Int2IntFunction;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        remove(arg0: number): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Int2ShortFunction;
        getOrDefault(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ObjectFunction<V>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Int2FloatFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Int2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Int2LongFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ObjectFunction<V>;
        size(): number;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ObjectFunction<V>;
        clear(): void;
        defaultReturnValue(): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ObjectFunction<V>;
        (arg0: number): V;
    }
    type Int2ObjectFunction_<V> = Int2ObjectFunction<V>;
    class SimplePlayerEventJS extends Internal.PlayerEventJS {
        constructor(p: Player_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type SimplePlayerEventJS_ = SimplePlayerEventJS;
    class ClientboundBlockEntityDataPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        static create(arg0: Internal.BlockEntity_, arg1: Internal.Function_<Internal.BlockEntity, Internal.CompoundTag>): Internal.ClientboundBlockEntityDataPacket;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getTag(): Internal.CompoundTag;
        isSkippable(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static create(arg0: Internal.BlockEntity_): Internal.ClientboundBlockEntityDataPacket;
        get pos(): BlockPos
        get tag(): Internal.CompoundTag
        get skippable(): boolean
        get type(): Internal.BlockEntityType<any>
    }
    type ClientboundBlockEntityDataPacket_ = ClientboundBlockEntityDataPacket;
    interface TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number
    }
    type TabOrderedElement_ = TabOrderedElement;
    abstract class AbstractSequentialList <E> extends Internal.AbstractList<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        get(arg0: number): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        set(arg0: number, arg1: E): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        remove(arg0: number): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<E>;
    }
    type AbstractSequentialList_<E> = AbstractSequentialList<E>;
    interface IForgeRegistryInternal <V> extends Internal.IForgeRegistry<V> {
        abstract getResourceKey(arg0: V): Internal.Optional<Internal.ResourceKey<V>>;
        abstract getDelegateOrThrow(arg0: V): Internal.Holder$Reference<V>;
        abstract iterator(): Internal.Iterator<V>;
        abstract getHolder(arg0: V): Internal.Optional<Internal.Holder<V>>;
        abstract getValues(): Internal.Collection<V>;
        abstract getHolder(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        spliterator(): Internal.Spliterator<V>;
        abstract isEmpty(): boolean;
        abstract getSlaveMap<T>(arg0: ResourceLocation_, arg1: T): T;
        abstract register(arg0: ResourceLocation_, arg1: V): void;
        abstract getDelegate(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getValue(arg0: number): V;
        abstract containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        abstract getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract register(arg0: number, arg1: ResourceLocation_, arg2: V): void;
        abstract getCodec(): Internal.Codec<V>;
        abstract getDefaultKey(): ResourceLocation;
        abstract setSlaveMap(arg0: ResourceLocation_, arg1: any): void;
        abstract getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getKeys(): Internal.Set<ResourceLocation>;
        abstract tags(): Internal.ITagManager<V>;
        abstract getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        abstract register(arg0: string, arg1: V): void;
        abstract containsValue(arg0: V): boolean;
        abstract getValue(arg0: ResourceLocation_): V;
        abstract getRegistryName(): ResourceLocation;
        abstract getEntries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>;
        abstract getDelegateOrThrow(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        abstract getKey(arg0: V): ResourceLocation;
        abstract getDelegateOrThrow(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        get values(): Internal.Collection<V>
        get empty(): boolean
        get codec(): Internal.Codec<V>
        get defaultKey(): ResourceLocation
        get keys(): Internal.Set<ResourceLocation>
        get registryKey(): Internal.ResourceKey<Internal.Registry<V>>
        get registryName(): ResourceLocation
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
    }
    type IForgeRegistryInternal_<V> = IForgeRegistryInternal<V>;
    class LootTableLoadEvent extends Internal.Event {
        constructor()
        constructor(arg0: ResourceLocation_, arg1: Internal.LootTable_)
        getName(): ResourceLocation;
        setTable(arg0: Internal.LootTable_): void;
        getTable(): Internal.LootTable;
        get name(): ResourceLocation
        set table(arg0: Internal.LootTable_)
        get table(): Internal.LootTable
    }
    type LootTableLoadEvent_ = LootTableLoadEvent;
    interface ClientAdvancements$Listener extends Internal.AdvancementList$Listener {
        abstract onAddAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onRemoveAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onSelectedTabChanged(arg0: Internal.Advancement_): void;
        abstract onUpdateAdvancementProgress(arg0: Internal.Advancement_, arg1: Internal.AdvancementProgress_): void;
        abstract onRemoveAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAdvancementsCleared(): void;
    }
    type ClientAdvancements$Listener_ = ClientAdvancements$Listener;
    class ComponentRole extends Internal.Enum<Internal.ComponentRole> {
        isOutput(): boolean;
        static values(): Internal.ComponentRole[];
        isInput(): boolean;
        static valueOf(name: string): Internal.ComponentRole;
        isOther(): boolean;
        get output(): boolean
        get input(): boolean
        get other(): boolean
        static readonly INPUT: Internal.ComponentRole;
        static readonly OTHER: Internal.ComponentRole;
        static readonly OUTPUT: Internal.ComponentRole;
    }
    type ComponentRole_ = "other" | "output" | ComponentRole | "input";
    interface ICreativeTab {
        abstract getGenerator(): Internal.CreativeModeTab$DisplayItemsGenerator;
        get generator(): Internal.CreativeModeTab$DisplayItemsGenerator
        (): Internal.CreativeModeTab$DisplayItemsGenerator_;
    }
    type ICreativeTab_ = ICreativeTab;
    class NoColor implements Internal.Color {
        constructor()
        getSerializeJS(): string;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getArgbJS(): number;
        createTextColorJS(): Internal.TextColor;
        specialEquals(o: any, shallow: boolean): boolean;
        getHexJS(): string;
        getRgbJS(): number;
        getFireworkColorJS(): number;
        get serializeJS(): string
        get argbJS(): number
        get hexJS(): string
        get rgbJS(): number
        get fireworkColorJS(): number
    }
    type NoColor_ = NoColor;
    class EndIceSpikeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type EndIceSpikeFeature_ = EndIceSpikeFeature;
    class DetectorRailBlock extends Internal.BaseRailBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        registerDefaultState(): void;
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
        updatePowerToConnected(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
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
        getRailMaxSpeed(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.EnumProperty<Internal.RailShape>;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type DetectorRailBlock_ = DetectorRailBlock;
    class MethodInfo {
        constructor(methodInfo: Internal.JavaMembers$MethodInfo_, from: typeof any)
        static getRemappedOrOriginalClass(clazz: typeof any): string;
        setReturnType(returnType: Internal.ITypeInfo_): void;
        getAnnotations(): Internal.List<Internal.Annotation>;
        isAbstract(): boolean;
        setParams(params: Internal.List_<Internal.MethodInfo$ParamInfo>): void;
        getFrom(): Internal.ClassInfo;
        shouldHide(): boolean;
        getMethod(): Internal.Method;
        getParams(): Internal.List<Internal.MethodInfo$ParamInfo>;
        isDefaultMethod(): boolean;
        setTypeVariables(typeVariables: Internal.List_<Internal.ITypeInfo>): void;
        static getMethodInfo(method: Internal.Method_, from: typeof any): Internal.Optional<Internal.JavaMembers$MethodInfo>;
        getName(): string;
        getTypeVariables(): Internal.List<Internal.ITypeInfo>;
        getReturnType(): Internal.ITypeInfo;
        isStatic(): boolean;
        set returnType(returnType: Internal.ITypeInfo_)
        get annotations(): Internal.List<Internal.Annotation>
        get "abstract"(): boolean
        set params(params: Internal.List_<Internal.MethodInfo$ParamInfo>)
        get from(): Internal.ClassInfo
        get method(): Internal.Method
        get params(): Internal.List<Internal.MethodInfo$ParamInfo>
        get defaultMethod(): boolean
        set typeVariables(typeVariables: Internal.List_<Internal.ITypeInfo>)
        get name(): string
        get typeVariables(): Internal.List<Internal.ITypeInfo>
        get returnType(): Internal.ITypeInfo
        get "static"(): boolean
        static readonly RUNTIME: Internal.MinecraftRemapper;
    }
    type MethodInfo_ = MethodInfo;
    class FrameType extends Internal.Enum<Internal.FrameType> {
        getDisplayName(): Internal.Component;
        static valueOf(arg0: string): Internal.FrameType;
        getName(): string;
        static byName(name: string): Internal.FrameType;
        getTexture(): number;
        getChatColor(): Internal.ChatFormatting;
        static values(): Internal.FrameType[];
        get displayName(): Internal.Component
        get name(): string
        get texture(): number
        get chatColor(): Internal.ChatFormatting
        static readonly TASK: Internal.FrameType;
        static readonly CHALLENGE: Internal.FrameType;
        static readonly GOAL: Internal.FrameType;
    }
    type FrameType_ = "challenge" | FrameType | "goal" | "task";
    interface IEventHandler {
        abstract onEvent(arg0: Internal.EventJS_): any;
        (arg0: Internal.EventJS): any;
    }
    type IEventHandler_ = IEventHandler;
    interface RecipeComponentFactory extends Internal.CustomJavaToJsWrapper {
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        abstract create(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Map_<string, any>): Internal.RecipeComponent<any>;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>): Internal.RecipeComponent_<any>;
    }
    type RecipeComponentFactory_ = RecipeComponentFactory;
    interface WorldRendererAccessor {
        abstract sodiumdynamiclights$scheduleChunkRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        (arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
    type WorldRendererAccessor_ = WorldRendererAccessor;
    class ShapelessRecipe implements Internal.CraftingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: Internal.ItemStack_, arg4: Internal.NonNullList_<Internal.Ingredient>)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        handler$dpl000$fabric_recipe_api_v1$customIngredientMatch(craftingInventory: Internal.CraftingContainer_, world: Internal.Level_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        readonly ingredients: Internal.NonNullList<Internal.Ingredient>;
        readonly category: Internal.CraftingBookCategory;
        readonly result: Internal.ItemStack;
        readonly group: string;
    }
    type ShapelessRecipe_ = ShapelessRecipe;
    class CatJSBuilder extends Internal.TameableMobBuilder<any> {
        constructor(i: ResourceLocation_)
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
        createObject(): any;
    }
    type CatJSBuilder_ = CatJSBuilder;
    class PlayerRenderer extends Internal.LivingEntityRenderer<Internal.AbstractClientPlayer, any> {
        constructor(arg0: Internal.EntityRendererProvider$Context_, arg1: boolean)
        setupRotations(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        renderNameTag(arg0: Internal.AbstractClientPlayer_, arg1: Internal.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        renderLeftHand(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.AbstractClientPlayer_): void;
        render(arg0: Internal.AbstractClientPlayer_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: Internal.AbstractClientPlayer_): ResourceLocation;
        scale(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number): void;
        renderRightHand(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.AbstractClientPlayer_): void;
        getRenderOffset(arg0: Internal.AbstractClientPlayer_, arg1: number): Vec3d;
    }
    type PlayerRenderer_ = PlayerRenderer;
    interface ItemEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        getTicksUntilDespawn(): number;
        setNoPickUpDelay(): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isAmbientCreature(): boolean;
        setTicksUntilDespawn(ticks: number): void;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        isLiving(): boolean;
        setDefaultPickUpDelay(): void;
        getLifespan(): number;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setInfinitePickUpDelay(): void;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        getFacing(): Internal.Direction;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        setNoDespawn(): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setLifespan(lifespan: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ticksUntilDespawn(): number
        get ambientCreature(): boolean
        set ticksUntilDespawn(ticks: number)
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
        get lifespan(): number
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
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set lifespan(lifespan: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type ItemEntityKJS_ = ItemEntityKJS;
    class BlockExplodingContext extends Internal.LycheeContext {
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
    }
    type BlockExplodingContext_ = BlockExplodingContext;
    class HeartstopEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type HeartstopEffect_ = HeartstopEffect;
    class BanDetails extends Internal.Record {
        constructor(id: Internal.UUID_, expires: Internal.Instant_, reason: string, reasonMessage: string)
        id(): Internal.UUID;
        expires(): Internal.Instant;
        reasonMessage(): string;
        reason(): string;
        static readonly MULTIPLAYER_SCOPE: "MULTIPLAYER";
    }
    type BanDetails_ = BanDetails;
    interface EpsilonizableBlockElement {
        abstract embeddium$epsilonize(): void;
        (): void;
    }
    type EpsilonizableBlockElement_ = EpsilonizableBlockElement;
    class BiEntityConditionPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
        static any(arg0: Internal.BiEntityConditionPower_, arg1: Internal.Entity_, arg2: Internal.Entity_, arg3: Internal.Entity_): boolean;
    }
    type BiEntityConditionPower_ = BiEntityConditionPower;
    class GameRules$Type <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: Internal.Supplier_<Internal.ArgumentType<any>>, arg1: Internal.Function_<Internal.GameRules$Type<T>, T>, arg2: Internal.BiConsumer_<Internal.MinecraftServer, T>, arg3: any_<T>)
        callVisitor(arg0: Internal.GameRules$GameRuleTypeVisitor_, arg1: Internal.GameRules$Key_<T>): void;
        createRule(): T;
        createArgument(arg0: string): Internal.RequiredArgumentBuilder<Internal.CommandSourceStack, any>;
        readonly callback: Internal.BiConsumer<Internal.MinecraftServer, T>;
    }
    type GameRules$Type_<T extends Internal.GameRules$Value<T>> = GameRules$Type<T>;
    class Listener {
        constructor()
        getListenerPosition(): Vec3d;
        setListenerOrientation(arg0: Vector3f_, arg1: Vector3f_): void;
        setListenerPosition(arg0: Vec3d_): void;
        setGain(arg0: number): void;
        reset(): void;
        getGain(): number;
        get listenerPosition(): Vec3d
        set listenerPosition(arg0: Vec3d_)
        set gain(arg0: number)
        get gain(): number
    }
    type Listener_ = Listener;
    class AutoBadgeEvent extends Internal.Event {
        constructor(arg0: ResourceLocation_, arg1: Internal.ConfiguredPower_<any, any>, arg2: Internal.List_<Internal.Badge>)
        constructor()
        getRegistryName(): ResourceLocation;
        getBadges(): Internal.List<Internal.Badge>;
        getPower(): Internal.ConfiguredPower<any, any>;
        get registryName(): ResourceLocation
        get badges(): Internal.List<Internal.Badge>
        get power(): Internal.ConfiguredPower<any, any>
    }
    type AutoBadgeEvent_ = AutoBadgeEvent;
    class BeeDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addOrUpdateHiveInfo(arg0: Internal.BeeDebugRenderer$HiveInfo_): void;
        removeBeeInfo(arg0: number): void;
        addOrUpdateBeeInfo(arg0: Internal.BeeDebugRenderer$BeeInfo_): void;
        clear(): void;
    }
    type BeeDebugRenderer_ = BeeDebugRenderer;
    abstract class HitResult {
        constructor(arg0: Vec3d_)
        distanceTo(arg0: Internal.Entity_): number;
        getLocation(): Vec3d;
        abstract getType(): Internal.HitResult$Type;
        get location(): Vec3d
        get type(): Internal.HitResult$Type
        readonly location: Vec3d;
    }
    type HitResult_ = HitResult;
    interface Float2ObjectFunction <V> extends Internal.DoubleFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Float2FloatFunction;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ObjectFunction<V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ObjectFunction<V>;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Float2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract get(arg0: number): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        apply(arg0: number): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Float2IntFunction;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Float2LongFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Float2ObjectFunction<T>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Float2ShortFunction;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Float2DoubleFunction;
        size(): number;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ObjectFunction<V>;
        clear(): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        defaultReturnValue(): V;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ObjectFunction<V>;
        put(arg0: number, arg1: V): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Float2ReferenceFunction<T>;
        (arg0: number): V;
    }
    type Float2ObjectFunction_<V> = Float2ObjectFunction<V>;
    class ItemOnItemConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(usingItemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, onItemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, resultFromOnStack: number, newStack: Internal.ItemStack_, usingItemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, onItemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, resultItemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, entityAction: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>)
        entityAction(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getUnbound(): Internal.List<string>;
        onItemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        getMissingBinds(): Internal.List<string>;
        execute(arg0: Internal.Entity_, arg1: Internal.Mutable_<Internal.ItemStack>, arg2: Internal.Mutable_<Internal.ItemStack>, arg3: Internal.Slot_): void;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        usingItemCondition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        resultFromOnStack(): number;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        newStack(): Internal.ItemStack;
        check(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        resultItemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        onItemCondition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        usingItemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        static readonly CODEC: Internal.Codec<Internal.ItemOnItemConfiguration>;
    }
    type ItemOnItemConfiguration_ = ItemOnItemConfiguration;
    interface ISceneEntityRenderHook {
        applyEntity(world: Internal.Level_, entity: Internal.Entity_, poseStack: Internal.PoseStack_, partialTicks: number): void;
    }
    type ISceneEntityRenderHook_ = ISceneEntityRenderHook;
    class CreativeModeTab$TabVisibility extends Internal.Enum<Internal.CreativeModeTab$TabVisibility> {
        static valueOf(arg0: string): Internal.CreativeModeTab$TabVisibility;
        static values(): Internal.CreativeModeTab$TabVisibility[];
        static readonly PARENT_TAB_ONLY: Internal.CreativeModeTab$TabVisibility;
        static readonly SEARCH_TAB_ONLY: Internal.CreativeModeTab$TabVisibility;
        static readonly PARENT_AND_SEARCH_TABS: Internal.CreativeModeTab$TabVisibility;
    }
    type CreativeModeTab$TabVisibility_ = CreativeModeTab$TabVisibility | "parent_and_search_tabs" | "parent_tab_only" | "search_tab_only";
    class DelegatedDamageCondition <T extends Internal.IDelegatedConditionConfiguration<org.apache.commons.lang3.tuple.Pair<DamageSource, number>>> extends Internal.DamageCondition<T> {
        constructor(arg0: Internal.Codec_<T>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DelegatedDamageCondition_<T extends Internal.IDelegatedConditionConfiguration<org.apache.commons.lang3.tuple.Pair<DamageSource, number>>> = DelegatedDamageCondition<T>;
    class SignableCommand$Argument <S> extends Internal.Record {
        constructor(arg0: Internal.ArgumentCommandNode_<S, any>, arg1: string)
        name(): string;
        node(): Internal.ArgumentCommandNode<S, any>;
        value(): string;
    }
    type SignableCommand$Argument_<S> = SignableCommand$Argument<S>;
    class ClientboundPlayerInfoUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.EnumSet_<Internal.ClientboundPlayerInfoUpdatePacket$Action>, arg1: Internal.Collection_<Internal.ServerPlayer>)
        constructor(arg0: Internal.ClientboundPlayerInfoUpdatePacket$Action_, arg1: Internal.ServerPlayer_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        static createPlayerInitializing(arg0: Internal.Collection_<Internal.ServerPlayer>): Internal.ClientboundPlayerInfoUpdatePacket;
        actions(): Internal.EnumSet<Internal.ClientboundPlayerInfoUpdatePacket$Action>;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        newEntries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        entries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        isSkippable(): boolean;
        get skippable(): boolean
    }
    type ClientboundPlayerInfoUpdatePacket_ = ClientboundPlayerInfoUpdatePacket;
    class ZonedDateTime implements Internal.ChronoZonedDateTime<Internal.LocalDate>, Internal.Temporal, Internal.Serializable {
        getHour(): number;
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        isAfter(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        withDayOfMonth(arg0: number): this;
        minus(arg0: Internal.TemporalAmount_): Internal.ChronoZonedDateTime<any>;
        toInstant(): Internal.Instant;
        static ofLocal(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_, arg2: Internal.ZoneOffset_): Internal.ZonedDateTime;
        getDayOfWeek(): Internal.DayOfWeek;
        withMonth(arg0: number): this;
        compareTo(arg0: any): number;
        withMinute(arg0: number): this;
        withZoneSameLocal(arg0: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        getMinute(): number;
        withLaterOffsetAtOverlap(): Internal.ChronoZonedDateTime<any>;
        minusWeeks(arg0: number): this;
        getDayOfMonth(): number;
        withFixedOffsetZone(): this;
        withDayOfYear(arg0: number): this;
        plusSeconds(arg0: number): this;
        plusMinutes(arg0: number): this;
        plusYears(arg0: number): this;
        plusDays(arg0: number): this;
        minusDays(arg0: number): this;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneId_): Internal.ZonedDateTime;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        withYear(arg0: number): this;
        static ofStrict(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        isSupported(arg0: Internal.TemporalField_): boolean;
        compareTo(arg0: Internal.ChronoZonedDateTime_<any>): number;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        minusSeconds(arg0: number): this;
        getYear(): number;
        isBefore(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.ZonedDateTime;
        get(arg0: Internal.TemporalField_): number;
        minusMonths(arg0: number): this;
        static now(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.ChronoZonedDateTime<any>;
        withSecond(arg0: number): this;
        toEpochSecond(): number;
        getMonthValue(): number;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZonedDateTime;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        plusMonths(arg0: number): this;
        minusNanos(arg0: number): this;
        static now(): Internal.ZonedDateTime;
        plusNanos(arg0: number): this;
        static ofInstant(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        getZone(): Internal.ZoneId;
        getLong(arg0: Internal.TemporalField_): number;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoZonedDateTime<any>>;
        withHour(arg0: number): this;
        withEarlierOffsetAtOverlap(): Internal.ChronoZonedDateTime<any>;
        minusHours(arg0: number): this;
        withZoneSameInstant(arg0: Internal.ZoneId_): this;
        toLocalDate(): Internal.ChronoLocalDate;
        withNano(arg0: number): this;
        getOffset(): Internal.ZoneOffset;
        plus(arg0: Internal.TemporalAmount_): Internal.ChronoZonedDateTime<any>;
        getDayOfYear(): number;
        isEqual(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        toLocalDateTime(): Internal.LocalDateTime;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        minusMinutes(arg0: number): this;
        getSecond(): number;
        getNano(): number;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.ChronoZonedDateTime<any>;
        plusHours(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.ZonedDateTime;
        minusYears(arg0: number): this;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        plusWeeks(arg0: number): this;
        static now(arg0: Internal.Clock_): Internal.ZonedDateTime;
        toOffsetDateTime(): Internal.OffsetDateTime;
        get hour(): number
        get month(): Internal.Month
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get dayOfMonth(): number
        get chronology(): Internal.Chronology
        get year(): number
        get monthValue(): number
        get zone(): Internal.ZoneId
        get offset(): Internal.ZoneOffset
        get dayOfYear(): number
        get second(): number
        get nano(): number
    }
    type ZonedDateTime_ = ZonedDateTime;
    abstract class Record {
    }
    type Record_ = Record;
    abstract class ModelEvent extends Internal.Event {
    }
    type ModelEvent_ = ModelEvent;
    class CalioDynamicRegistryEvent$Reload extends Internal.CalioDynamicRegistryEvent {
        constructor()
        constructor(arg0: Internal.ICalioDynamicRegistryManager_)
    }
    type CalioDynamicRegistryEvent$Reload_ = CalioDynamicRegistryEvent$Reload;
    class EquippedItemConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(slot: Internal.EquipmentSlot_, condition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>)
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
        condition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        slot(): Internal.EquipmentSlot;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.EquippedItemConfiguration>;
    }
    type EquippedItemConfiguration_ = EquippedItemConfiguration;
    abstract class AbstractEventExecutorGroup implements Internal.EventExecutorGroup {
        constructor()
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        submit(arg0: Internal.Runnable_, arg1: any): Internal.Future<any>;
        schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract next(): Internal.EventExecutor;
        submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract isTerminated(): boolean;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract isShutdown(): boolean;
        /**
         * @deprecated
        */
        shutdownNow(): Internal.List<Internal.Runnable>;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        submit(arg0: Internal.Callable_<any>): Internal.Future<any>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        execute(arg0: Internal.Runnable_): void;
        abstract isShuttingDown(): boolean;
        schedule(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type AbstractEventExecutorGroup_ = AbstractEventExecutorGroup;
    class WaterBubbleCarver extends Internal.CaveWorldCarver {
        constructor(arg0: Internal.Codec_<Internal.CaveCarverConfiguration>)
    }
    type WaterBubbleCarver_ = WaterBubbleCarver;
    interface ScriptTypeHolder {
        abstract kjs$getScriptType(): Internal.ScriptType;
        (): Internal.ScriptType_;
    }
    type ScriptTypeHolder_ = ScriptTypeHolder;
    class StartRidingTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_)
        static playerStartsRiding(arg0: Internal.EntityPredicate$Builder_): Internal.StartRidingTrigger$TriggerInstance;
    }
    type StartRidingTrigger$TriggerInstance_ = StartRidingTrigger$TriggerInstance;
    abstract class BanListEntry <T> extends Internal.StoredUserEntry<T> {
        constructor(arg0: T, arg1: Internal.JsonObject_)
        constructor(arg0: T, arg1: Internal.Date_, arg2: string, arg3: Internal.Date_, arg4: string)
        abstract getDisplayName(): Internal.Component;
        getExpires(): Internal.Date;
        getSource(): string;
        getCreated(): Internal.Date;
        getReason(): string;
        get displayName(): Internal.Component
        get expires(): Internal.Date
        get source(): string
        get created(): Internal.Date
        get reason(): string
        readonly source: string;
        static readonly EXPIRES_NEVER: "forever";
        readonly reason: string;
        readonly expires: Internal.Date;
        static readonly DATE_FORMAT: Internal.SimpleDateFormat;
        readonly created: Internal.Date;
    }
    type BanListEntry_<T> = BanListEntry<T>;
    abstract class ScreenEvent$KeyReleased extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$KeyReleased_ = ScreenEvent$KeyReleased;
    class DoubleBlockHalf extends Internal.Enum<Internal.DoubleBlockHalf> implements Internal.StringRepresentable {
        static values(): Internal.DoubleBlockHalf[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.DoubleBlockHalf;
        get serializedName(): string
        static readonly UPPER: Internal.DoubleBlockHalf;
        static readonly LOWER: Internal.DoubleBlockHalf;
    }
    type DoubleBlockHalf_ = "lower" | DoubleBlockHalf | "upper";
    class Ignitium_Armor extends Internal.ArmorItem implements Internal.KeybindUsingArmor {
        constructor(arg0: any_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
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
        onKeyPacket(arg0: Player_, arg1: Internal.ItemStack_, arg2: number): void;
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
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
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
    type Ignitium_Armor_ = Ignitium_Armor;
    class PlayerTabOverlay {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Gui_)
        renderPingIcon(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: Internal.PlayerInfo_): void;
        setHeader(arg0: Internal.Component_): void;
        setFooter(arg0: Internal.Component_): void;
        getNameForDisplay(arg0: Internal.PlayerInfo_): Internal.Component;
        reset(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.Scoreboard_, arg3: Internal.Objective_): void;
        setVisible(arg0: boolean): void;
        set header(arg0: Internal.Component_)
        set footer(arg0: Internal.Component_)
        set visible(arg0: boolean)
        static readonly HEART_GOLDEN_FULL: 160;
        static readonly HEART_EMPTY_CONTAINER: 16;
        static readonly HEART_GHOST_HALF_FULL: 79;
        static readonly MAX_ROWS_PER_COL: 20;
        static readonly HEART_GHOST_FULL: 70;
        static readonly HEART_GOLDEN_HALF_FULL: 169;
        static readonly HEART_EMPTY_CONTAINER_BLINKING: 25;
        static readonly HEART_HALF_FULL: 61;
        static readonly HEART_FULL: 52;
    }
    type PlayerTabOverlay_ = PlayerTabOverlay;
    class GolemSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        static golemDetected(arg0: Internal.LivingEntity_): void;
        static checkForNearbyGolem(arg0: Internal.LivingEntity_): void;
    }
    type GolemSensor_ = GolemSensor;
    class AnvilCraftingRecipe$Serializer extends Internal.LycheeRecipe$Serializer<Internal.AnvilCraftingRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.AnvilCraftingRecipe;
        fromNetwork(arg0: Internal.AnvilCraftingRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.AnvilCraftingRecipe_): void;
        fromJson(arg0: Internal.AnvilCraftingRecipe_, arg1: Internal.JsonObject_): void;
    }
    type AnvilCraftingRecipe$Serializer_ = AnvilCraftingRecipe$Serializer;
    interface Deserializer$Map <E> extends Internal.Iterator<Internal.Map$Entry<string, E>> {
        remove(): void;
        next(): any;
        abstract estimatedSize(): number;
        forEachRemaining(arg0: Internal.Consumer_<Internal.Map$Entry<string, E>>): void;
        abstract hasNext(): boolean;
    }
    type Deserializer$Map_<E> = Deserializer$Map<E>;
    abstract class Permission implements Internal.Guard, Internal.Serializable {
        constructor(arg0: string)
        getName(): string;
        abstract getActions(): string;
        newPermissionCollection(): Internal.PermissionCollection;
        abstract implies(arg0: Internal.Permission_): boolean;
        checkGuard(arg0: any): void;
        get name(): string
        get actions(): string
    }
    type Permission_ = Permission;
    class ItemTooltipEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_)
        getFlags(): Internal.TooltipFlag;
        getToolTip(): Internal.List<Internal.Component>;
        getItemStack(): Internal.ItemStack;
        get flags(): Internal.TooltipFlag
        get toolTip(): Internal.List<Internal.Component>
        get itemStack(): Internal.ItemStack
    }
    type ItemTooltipEvent_ = ItemTooltipEvent;
    interface EntityInLevelCallback {
        abstract onMove(): void;
        abstract onRemove(arg0: Internal.Entity$RemovalReason_): void;
        readonly NULL: Internal.EntityInLevelCallback;
    }
    type EntityInLevelCallback_ = EntityInLevelCallback;
    interface Packet <T extends Internal.PacketListener> {
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        abstract handle(arg0: T): void;
        get skippable(): boolean
    }
    type Packet_<T extends Internal.PacketListener> = Packet<T>;
    interface BaseEntityBuilder$ISoundListenerJS <E extends Internal.Entity & Internal.IAnimatableJSNL> {
        abstract playSound(event: Internal.BaseEntityBuilder$SoundKeyFrameEventJS_<E>): void;
        (event: Internal.BaseEntityBuilder$SoundKeyFrameEventJS<E>): void;
    }
    type BaseEntityBuilder$ISoundListenerJS_<E extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder$ISoundListenerJS<E>;
    abstract class StructurePiece$BlockSelector {
        constructor()
        abstract next(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getNext(): Internal.BlockState;
        get next(): Internal.BlockState
        next: Internal.BlockState;
    }
    type StructurePiece$BlockSelector_ = StructurePiece$BlockSelector;
    class ClientboundLevelChunkWithLightPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        getChunkData(): Internal.ClientboundLevelChunkPacketData;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        get x(): number
        get z(): number
        get chunkData(): Internal.ClientboundLevelChunkPacketData
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
    }
    type ClientboundLevelChunkWithLightPacket_ = ClientboundLevelChunkWithLightPacket;
    abstract class BaseCommandBlock implements Internal.CommandSource {
        constructor()
        getCommand(): string;
        isTrackOutput(): boolean;
        abstract isValid(): boolean;
        abstract getLevel(): Internal.ServerLevel;
        getName(): Internal.Component;
        abstract getPosition(): Vec3d;
        usedBy(arg0: Player_): InteractionResult;
        abstract createCommandSourceStack(): Internal.CommandSourceStack;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getLastOutput(): Internal.Component;
        shouldInformAdmins(): boolean;
        acceptsFailure(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        alwaysAccepts(): boolean;
        setName(arg0: Internal.Component_): void;
        setCommand(arg0: string): void;
        setSuccessCount(arg0: number): void;
        setLastOutput(arg0: Internal.Component_): void;
        setTrackOutput(arg0: boolean): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        getSuccessCount(): number;
        abstract onUpdated(): void;
        performCommand(arg0: Internal.Level_): boolean;
        get command(): string
        get trackOutput(): boolean
        get valid(): boolean
        get level(): Internal.ServerLevel
        get name(): Internal.Component
        get position(): Vec3d
        get lastOutput(): Internal.Component
        set name(arg0: Internal.Component_)
        set command(arg0: string)
        set successCount(arg0: number)
        set lastOutput(arg0: Internal.Component_)
        set trackOutput(arg0: boolean)
        get successCount(): number
    }
    type BaseCommandBlock_ = BaseCommandBlock;
    class ModConfigEvent$Reloading extends Internal.ModConfigEvent {
        constructor()
        constructor(arg0: Internal.ModConfig_)
        static unloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        static loading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        self<T extends Internal.Event & Internal.IConfigEvent>(): T;
        static reloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
    }
    type ModConfigEvent$Reloading_ = ModConfigEvent$Reloading;
    interface Byte2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        getOrDefault(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        apply(arg0: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2IntFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2IntFunction;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Byte2ShortFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Byte2LongFunction;
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
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Byte2FloatFunction;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2IntFunction<T>;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Byte2ByteFunction;
        clear(): void;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2IntFunction;
        (arg0: number): number;
    }
    type Byte2IntFunction_ = Byte2IntFunction;
    class AnvilCraftingRecipe extends Internal.LycheeRecipe<Internal.AnvilContext> implements Internal.Comparable<Internal.AnvilCraftingRecipe> {
        constructor(arg0: ResourceLocation_)
        matches(arg0: Internal.AnvilContext_, arg1: Internal.Level_): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        compareTo(arg0: any): number;
        getMaterialCost(): number;
        assemble(arg0: Internal.AnvilContext_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getResultItem(): Internal.ItemStack;
        getRemainingItems(arg0: Internal.AnvilContext_): Internal.NonNullList<Internal.ItemStack>;
        getMod(): string;
        compareTo(arg0: Internal.AnvilCraftingRecipe_): number;
        isSpecial(): boolean;
        addAssemblingAction(arg0: Internal.PostAction_): void;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getLeft(): Internal.Ingredient;
        getRight(): Internal.Ingredient;
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
        get materialCost(): number
        get resultItem(): Internal.ItemStack
        get mod(): string
        get special(): boolean
        get left(): Internal.Ingredient
        get right(): Internal.Ingredient
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get blockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get incomplete(): boolean
    }
    type AnvilCraftingRecipe_ = AnvilCraftingRecipe;
    interface StreamTagVisitor {
        abstract visitEntry(arg0: Internal.TagType_<any>, arg1: string): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitContainerEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitElement(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visitEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract visitRootEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visitList(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$EntryResult;
    }
    type StreamTagVisitor_ = StreamTagVisitor;
    class ServerboundSetCarriedItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSlot(): number;
        isSkippable(): boolean;
        get slot(): number
        get skippable(): boolean
    }
    type ServerboundSetCarriedItemPacket_ = ServerboundSetCarriedItemPacket;
    abstract class CombiningPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>)
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
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
        static codec<T extends Internal.CombiningPredicate>(arg0: Internal.Function_<Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>, T>): Internal.Codec<T>;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        readonly predicates: Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>;
    }
    type CombiningPredicate_ = CombiningPredicate;
    class SimpleMapCodec <K, V> extends Internal.MapCodec<Internal.Map<K, V>> implements Internal.BaseMapCodec<K, V> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_)
        keyCodec(): Internal.Codec<K>;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.MapDecoder<B>;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.MapEncoder<B>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapEncoder<B>;
        elementCodec(): Internal.Codec<V>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        decoder(): Internal.Decoder<Internal.Map<K, V>>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.Map<K, V>, E>>): Internal.MapDecoder<E>;
        encoder(): Internal.Encoder<Internal.Map<K, V>>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
    }
    type SimpleMapCodec_<K, V> = SimpleMapCodec<K, V>;
    class CompassItem extends Internal.Item implements Internal.Vanishable {
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
        static getLodestonePosition(arg0: Internal.CompoundTag_): Internal.GlobalPos;
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
        static getSpawnPosition(arg0: Internal.Level_): Internal.GlobalPos;
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
        static isLodestoneCompass(arg0: Internal.ItemStack_): boolean;
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
        static readonly TAG_LODESTONE_TRACKED: "LodestoneTracked";
        static readonly TAG_LODESTONE_POS: "LodestonePos";
        static readonly TAG_LODESTONE_DIMENSION: "LodestoneDimension";
    }
    type CompassItem_ = CompassItem;
    interface Blender$DistanceGetter {
        abstract getDistance(arg0: number, arg1: number, arg2: number): number;
        (arg0: number, arg1: number, arg2: number): number;
    }
    type Blender$DistanceGetter_ = Blender$DistanceGetter;
    class RecursiveTypeFamily implements Internal.TypeFamily {
        constructor(arg0: string, arg1: Internal.TypeTemplate_)
        fold(arg0: Internal.Algebra_, arg1: Internal.RecursiveTypeFamily_): Internal.IntFunction<Internal.RewriteResult<any, any>>;
        name(): string;
        size(): number;
        everywhere(arg0: number, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<any, any>>;
        findType<A, B>(arg0: number, arg1: com.mojang.datafixers.types.Type_<A>, arg2: com.mojang.datafixers.types.Type_<B>, arg3: Internal.Type$TypeMatcher_<A, B>, arg4: boolean): Internal.Either<Internal.TypedOptic<any, any, A, B>, Internal.Type$FieldNotFoundException>;
        buildMuType<A>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.RecursiveTypeFamily_): Internal.RecursivePoint$RecursivePointType<A>;
        static familyOptic<A, B>(arg0: Internal.IntFunction_<Internal.TypedOptic<any, any, A, B>>): Internal.FamilyOptic<A, B>;
        template(): Internal.TypeTemplate;
        apply(arg0: number): com.mojang.datafixers.types.Type<any>;
    }
    type RecursiveTypeFamily_ = RecursiveTypeFamily;
    interface DirectMethodHandleDesc extends Internal.MethodHandleDesc {
        abstract isOwnerInterface(): boolean;
        of(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: string): this;
        abstract invocationType(): Internal.MethodTypeDesc;
        abstract methodName(): string;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract kind(): Internal.DirectMethodHandleDesc$Kind;
        abstract owner(): Internal.ClassDesc;
        ofField(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.ClassDesc_): this;
        ofMethod(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.MethodTypeDesc_): this;
        asType(arg0: Internal.MethodTypeDesc_): Internal.MethodHandleDesc;
        abstract lookupDescriptor(): string;
        abstract refKind(): number;
        ofConstructor(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        abstract equals(arg0: any): boolean;
        get ownerInterface(): boolean
    }
    type DirectMethodHandleDesc_ = DirectMethodHandleDesc;
    interface ColorProviderRegistryImpl$ColorMapperHolder <T, Provider> {
        abstract get(arg0: T): Provider;
        (arg0: T): Provider;
    }
    type ColorProviderRegistryImpl$ColorMapperHolder_<T, Provider> = ColorProviderRegistryImpl$ColorMapperHolder<T, Provider>;
    class UnmodifiableCommentedConfig$CommentNode {
        constructor(arg0: string, arg1: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>)
        getComment(): string;
        getChildren(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        get comment(): string
        get children(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
    }
    type UnmodifiableCommentedConfig$CommentNode_ = UnmodifiableCommentedConfig$CommentNode;
    class IExtensionPoint$DisplayTest extends Internal.Record implements Internal.IExtensionPoint<Internal.IExtensionPoint$DisplayTest> {
        constructor(arg0: string, arg1: Internal.BiPredicate_<string, boolean>)
        constructor(suppliedVersion: Internal.Supplier_<string>, remoteVersionTest: Internal.BiPredicate_<string, boolean>)
        remoteVersionTest(): Internal.BiPredicate<string, boolean>;
        suppliedVersion(): Internal.Supplier<string>;
        static readonly IGNORE_ALL_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
        static readonly IGNORESERVERONLY: "OHNOES😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱";
        static readonly IGNORE_SERVER_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
    }
    type IExtensionPoint$DisplayTest_ = IExtensionPoint$DisplayTest;
    class Transformation implements Internal.IForgeTransformation {
        constructor(arg0: Matrix4f_)
        constructor(arg0: Vector3f_, arg1: Quaternionf_, arg2: Vector3f_, arg3: Quaternionf_)
        inverse(): this;
        getScale(): Vector3f;
        compose(arg0: Internal.Transformation_): this;
        getMatrix(): Matrix4f;
        getTranslation(): Vector3f;
        blockCenterToCorner(): this;
        static identity(): Internal.Transformation;
        transformNormal(arg0: Vector3f_): void;
        rotateTransform(arg0: Internal.Direction_): Internal.Direction;
        slerp(arg0: Internal.Transformation_, arg1: number): this;
        getRightRotation(): Quaternionf;
        blockCornerToCenter(): this;
        transformPosition(arg0: Vec4f_): void;
        getLeftRotation(): Quaternionf;
        applyOrigin(arg0: Vector3f_): this;
        isIdentity(): boolean;
        getNormalMatrix(): Matrix3f;
        get scale(): Vector3f
        get matrix(): Matrix4f
        get translation(): Vector3f
        get rightRotation(): Quaternionf
        get leftRotation(): Quaternionf
        get identity(): boolean
        get normalMatrix(): Matrix3f
        static readonly EXTENDED_CODEC: Internal.Codec<Internal.Transformation>;
        static readonly CODEC: Internal.Codec<Internal.Transformation>;
    }
    type Transformation_ = Transformation;
    class BoneAnimationQueue extends Internal.Record {
        constructor(bone: Internal.CoreGeoBone_, rotationXQueue: Internal.AnimationPointQueue_, rotationYQueue: Internal.AnimationPointQueue_, rotationZQueue: Internal.AnimationPointQueue_, positionXQueue: Internal.AnimationPointQueue_, positionYQueue: Internal.AnimationPointQueue_, positionZQueue: Internal.AnimationPointQueue_, scaleXQueue: Internal.AnimationPointQueue_, scaleYQueue: Internal.AnimationPointQueue_, scaleZQueue: Internal.AnimationPointQueue_)
        constructor(arg0: Internal.CoreGeoBone_)
        addPosYPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosZPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotations(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
        addScaleYPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addNextScale(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.AnimationPoint_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_): void;
        scaleYQueue(): Internal.AnimationPointQueue;
        scaleXQueue(): Internal.AnimationPointQueue;
        scaleZQueue(): Internal.AnimationPointQueue;
        addNextPosition(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.AnimationPoint_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_): void;
        rotationXQueue(): Internal.AnimationPointQueue;
        positionZQueue(): Internal.AnimationPointQueue;
        addScales(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
        positionXQueue(): Internal.AnimationPointQueue;
        rotationYQueue(): Internal.AnimationPointQueue;
        rotationZQueue(): Internal.AnimationPointQueue;
        positionYQueue(): Internal.AnimationPointQueue;
        addScaleZPoint(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addNextRotation(arg0: software.bernie.geckolib.core.keyframe.Keyframe_<any>, arg1: number, arg2: number, arg3: Internal.BoneSnapshot_, arg4: Internal.BoneSnapshot_, arg5: Internal.AnimationPoint_, arg6: Internal.AnimationPoint_, arg7: Internal.AnimationPoint_): void;
        bone(): Internal.CoreGeoBone;
        addPositions(arg0: Internal.AnimationPoint_, arg1: Internal.AnimationPoint_, arg2: Internal.AnimationPoint_): void;
    }
    type BoneAnimationQueue_ = BoneAnimationQueue;
    class ItemInsideRecipe$Serializer extends Internal.ItemShapelessRecipe$Serializer<Internal.ItemInsideRecipe> {
        constructor()
        fromNetwork(arg0: Internal.ItemInsideRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        fromJson(arg0: Internal.ItemInsideRecipe_, arg1: Internal.JsonObject_): void;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ItemInsideRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ItemInsideRecipe;
    }
    type ItemInsideRecipe$Serializer_ = ItemInsideRecipe$Serializer;
    class ContextUtils$CollidingEntityContext {
        constructor(entity: Internal.LivingEntity_, collidingEntity: Internal.Entity_)
        /**
         * The entity colliding
        */
        readonly collidingEntity: Internal.Entity;
        /**
         * The entity getting collided with
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$CollidingEntityContext_ = ContextUtils$CollidingEntityContext;
    abstract class WorldCarver <C extends Internal.CarverConfiguration> {
        constructor(arg0: Internal.Codec_<C>)
        static canReach(arg0: Internal.ChunkPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        configured(arg0: C): Internal.ConfiguredWorldCarver<C>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<C>>;
        abstract isStartChunk(arg0: C, arg1: Internal.RandomSource_): boolean;
        getRange(): number;
        carveEllipsoid(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.Aquifer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.CarvingMask_, arg11: Internal.WorldCarver$CarveSkipChecker_): boolean;
        canReplaceBlock(arg0: C, arg1: Internal.BlockState_): boolean;
        carveBlock(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.CarvingMask_, arg5: Internal.BlockPos$MutableBlockPos_, arg6: Internal.BlockPos$MutableBlockPos_, arg7: Internal.Aquifer_, arg8: Internal.MutableBoolean_): boolean;
        abstract carve(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        get range(): number
        static readonly CANYON: Internal.CanyonWorldCarver;
        static readonly AIR: Internal.BlockState;
        liquids: Internal.Set<Internal.Fluid>;
        static readonly LAVA: Internal.FluidState;
        static readonly NETHER_CAVE: Internal.NetherWorldCarver;
        static readonly CAVE_AIR: Internal.BlockState;
        static readonly WATER: Internal.FluidState;
        static readonly CAVE: Internal.CaveWorldCarver;
    }
    type WorldCarver_<C extends Internal.CarverConfiguration> = WorldCarver<C> | Special.Carver;
    abstract class Sensor <E extends Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        abstract doTick(arg0: Internal.ServerLevel_, arg1: E): void;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        abstract requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        tick(arg0: Internal.ServerLevel_, arg1: E): void;
        static readonly TARGETING_RANGE: 16;
    }
    type Sensor_<E extends Internal.LivingEntity> = Sensor<E>;
    interface SubmergableEntity {
        abstract isSubmergedInLoosely(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        abstract getFluidHeightLoosely(arg0: Internal.TagKey_<Internal.Fluid>): number;
    }
    type SubmergableEntity_ = SubmergableEntity;
    class Boss_Respawn_Spawner_Block extends Internal.BaseEntityBlock {
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
        static readonly LIT: Internal.BooleanProperty;
    }
    type Boss_Respawn_Spawner_Block_ = Boss_Respawn_Spawner_Block;
    class ServerboundPongPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get skippable(): boolean
        get id(): number
    }
    type ServerboundPongPacket_ = ServerboundPongPacket;
    class Options {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.File_)
        panoramaSpeed(): Internal.OptionInstance<number>;
        backgroundForChatOnly(): Internal.OptionInstance<boolean>;
        entityShadows(): Internal.OptionInstance<boolean>;
        damageTiltStrength(): Internal.OptionInstance<number>;
        touchscreen(): Internal.OptionInstance<boolean>;
        mouseWheelSensitivity(): Internal.OptionInstance<number>;
        biomeBlendRadius(): Internal.OptionInstance<number>;
        cloudStatus(): Internal.OptionInstance<Internal.CloudStatus>;
        guiScale(): Internal.OptionInstance<number>;
        telemetryOptInExtra(): Internal.OptionInstance<boolean>;
        chatOpacity(): Internal.OptionInstance<number>;
        hideLightningFlash(): Internal.OptionInstance<boolean>;
        attackIndicator(): Internal.OptionInstance<Internal.AttackIndicatorStatus>;
        framerateLimit(): Internal.OptionInstance<number>;
        chatColors(): Internal.OptionInstance<boolean>;
        notificationDisplayTime(): Internal.OptionInstance<number>;
        chatScale(): Internal.OptionInstance<number>;
        glintSpeed(): Internal.OptionInstance<number>;
        darknessEffectScale(): Internal.OptionInstance<number>;
        setServerRenderDistance(arg0: number): void;
        highContrast(): Internal.OptionInstance<boolean>;
        ambientOcclusion(): Internal.OptionInstance<boolean>;
        broadcastOptions(): void;
        mainHand(): Internal.OptionInstance<Internal.HumanoidArm>;
        chatWidth(): Internal.OptionInstance<number>;
        simulationDistance(): Internal.OptionInstance<number>;
        chatDelay(): Internal.OptionInstance<number>;
        particles(): Internal.OptionInstance<Internal.ParticleStatus>;
        static genericValueLabel(arg0: Internal.Component_, arg1: Internal.Component_): Internal.Component;
        chatLinks(): Internal.OptionInstance<boolean>;
        onlyShowSecureChat(): Internal.OptionInstance<boolean>;
        soundDevice(): Internal.OptionInstance<string>;
        realmsNotifications(): Internal.OptionInstance<boolean>;
        getSoundSourceVolume(arg0: Internal.SoundSource_): number;
        getCloudsType(): Internal.CloudStatus;
        getFile(): Internal.File;
        prioritizeChunkUpdates(): Internal.OptionInstance<Internal.PrioritizeChunkUpdates>;
        getBackgroundColor(arg0: number): number;
        loadSelectedResourcePacks(arg0: Internal.PackRepository_): void;
        autoSuggestions(): Internal.OptionInstance<boolean>;
        entityDistanceScaling(): Internal.OptionInstance<number>;
        gamma(): Internal.OptionInstance<number>;
        textBackgroundOpacity(): Internal.OptionInstance<number>;
        toggleSprint(): Internal.OptionInstance<boolean>;
        screenEffectScale(): Internal.OptionInstance<number>;
        enableVsync(): Internal.OptionInstance<boolean>;
        static isFalse(arg0: string): boolean;
        fullscreen(): Internal.OptionInstance<boolean>;
        showAutosaveIndicator(): Internal.OptionInstance<boolean>;
        setCameraType(arg0: Internal.CameraType_): void;
        autoJump(): Internal.OptionInstance<boolean>;
        showSubtitles(): Internal.OptionInstance<boolean>;
        discreteMouseScroll(): Internal.OptionInstance<boolean>;
        reducedDebugInfo(): Internal.OptionInstance<boolean>;
        isModelPartEnabled(arg0: Internal.PlayerModelPart_): boolean;
        narrator(): Internal.OptionInstance<Internal.NarratorStatus>;
        useNativeTransport(): boolean;
        static genericValueLabel(arg0: Internal.Component_, arg1: number): Internal.Component;
        load(arg0: boolean): void;
        bobView(): Internal.OptionInstance<boolean>;
        chatLineSpacing(): Internal.OptionInstance<number>;
        forceUnicodeFont(): Internal.OptionInstance<boolean>;
        renderDistance(): Internal.OptionInstance<number>;
        allowServerListing(): Internal.OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        directionalAudio(): Internal.OptionInstance<boolean>;
        operatorItemsTab(): Internal.OptionInstance<boolean>;
        chatHeightFocused(): Internal.OptionInstance<number>;
        load(): void;
        glintStrength(): Internal.OptionInstance<number>;
        toggleCrouch(): Internal.OptionInstance<boolean>;
        setKey(arg0: Internal.KeyMapping_, arg1: Internal.InputConstants$Key_): void;
        hideMatchedNames(): Internal.OptionInstance<boolean>;
        getBackgroundOpacity(arg0: number): number;
        fov(): Internal.OptionInstance<number>;
        toggleModelPart(arg0: Internal.PlayerModelPart_, arg1: boolean): void;
        getSoundSourceOptionInstance(arg0: Internal.SoundSource_): Internal.OptionInstance<number>;
        mipmapLevels(): Internal.OptionInstance<number>;
        chatHeightUnfocused(): Internal.OptionInstance<number>;
        updateResourcePacks(arg0: Internal.PackRepository_): void;
        save(): void;
        getCameraType(): Internal.CameraType;
        chatVisibility(): Internal.OptionInstance<Internal.ChatVisiblity>;
        sensitivity(): Internal.OptionInstance<number>;
        rawMouseInput(): Internal.OptionInstance<boolean>;
        graphicsMode(): Internal.OptionInstance<Internal.GraphicsStatus>;
        fovEffectScale(): Internal.OptionInstance<number>;
        invertYMouse(): Internal.OptionInstance<boolean>;
        static isTrue(arg0: string): boolean;
        darkMojangStudiosBackground(): Internal.OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        getBackgroundColor(arg0: number): number;
        chatLinksPrompt(): Internal.OptionInstance<boolean>;
        set serverRenderDistance(arg0: number)
        get cloudsType(): Internal.CloudStatus
        get file(): Internal.File
        set cameraType(arg0: Internal.CameraType_)
        get effectiveRenderDistance(): number
        get cameraType(): Internal.CameraType
        readonly keySwapOffhand: Internal.KeyMapping;
        readonly keyDown: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_NORMAL: 8;
        static readonly LOGGER: Internal.Log4jLogger;
        static readonly RENDER_DISTANCE_FAR: 12;
        hideBundleTutorial: boolean;
        readonly keyUp: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_EXTREME: 32;
        skipMultiplayerWarning: boolean;
        readonly keyShift: Internal.KeyMapping;
        hideGui: boolean;
        readonly keyScreenshot: Internal.KeyMapping;
        pauseOnLostFocus: boolean;
        languageCode: string;
        readonly keyPlayerList: Internal.KeyMapping;
        static readonly AUTO_GUI_SCALE: 0;
        readonly keyRight: Internal.KeyMapping;
        smoothCamera: boolean;
        readonly keyCommand: Internal.KeyMapping;
        readonly keyAttack: Internal.KeyMapping;
        renderFpsChart: boolean;
        readonly keyChat: Internal.KeyMapping;
        readonly keyPickItem: Internal.KeyMapping;
        joinedFirstServer: boolean;
        static readonly RENDER_DISTANCE_TINY: 2;
        minecraft: Internal.Minecraft;
        incompatibleResourcePacks: Internal.List<string>;
        readonly keyFullscreen: Internal.KeyMapping;
        skipRealms32bitWarning: boolean;
        fullscreenVideoModeString: string;
        useNativeTransport: boolean;
        glDebugVerbosity: number;
        readonly keyTogglePerspective: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_REALLY_FAR: 16;
        readonly keySmoothCamera: Internal.KeyMapping;
        static readonly UNLIMITED_FRAMERATE_CUTOFF: 260;
        overrideWidth: number;
        readonly keySaveHotbarActivator: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_SHORT: 4;
        overrideHeight: number;
        renderDebug: boolean;
        lastMpIp: string;
        readonly keyAdvancements: Internal.KeyMapping;
        readonly keyLeft: Internal.KeyMapping;
        readonly keyJump: Internal.KeyMapping;
        static readonly GSON: Internal.Gson;
        readonly keyUse: Internal.KeyMapping;
        readonly keyDrop: Internal.KeyMapping;
        onboardAccessibility: boolean;
        resourcePacks: Internal.List<string>;
        readonly keySocialInteractions: Internal.KeyMapping;
        readonly keySpectatorOutlines: Internal.KeyMapping;
        readonly keySprint: Internal.KeyMapping;
        readonly keyInventory: Internal.KeyMapping;
        readonly keyLoadHotbarActivator: Internal.KeyMapping;
        advancedItemTooltips: boolean;
        renderDebugCharts: boolean;
        syncWrites: boolean;
        readonly keyHotbarSlots: Internal.KeyMapping[];
        hideServerAddress: boolean;
        tutorialStep: Internal.TutorialSteps;
        keyMappings: Internal.KeyMapping[];
        static readonly DEFAULT_SOUND_DEVICE: "";
    }
    type Options_ = Options;
    interface Weighted <T> {
        abstract getSound(arg0: Internal.RandomSource_): T;
        abstract getWeight(): number;
        abstract preloadIfRequired(arg0: Internal.SoundEngine_): void;
        get weight(): number
    }
    type Weighted_<T> = Weighted<T>;
    class CustomCommandEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, e: Internal.Entity_, p: BlockPos_, i: string)
        getId(): string;
        getBlock(): Internal.BlockContainerJS;
        get id(): string
        get block(): Internal.BlockContainerJS
    }
    type CustomCommandEventJS_ = CustomCommandEventJS;
    class Heightmap {
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_)
        getHighestTaken(arg0: number, arg1: number): number;
        static primeHeightmaps(arg0: Internal.ChunkAccess_, arg1: Internal.Set_<Internal.Heightmap$Types>): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        getRawData(): number[];
        update(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_): boolean;
        setRawData(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_, arg2: number[]): void;
        get rawData(): number[]
        static readonly NOT_AIR: Internal.Predicate<Internal.BlockState>;
        static readonly MATERIAL_MOTION_BLOCKING: Internal.Predicate<Internal.BlockState>;
    }
    type Heightmap_ = Heightmap;
    interface RepeatedDelayStrategy {
        abstract delayCyclesAfterSuccess(): number;
        exponentialBackoff(arg0: number): this;
        abstract delayCyclesAfterFailure(): number;
        readonly CONSTANT: Internal.RepeatedDelayStrategy;
    }
    type RepeatedDelayStrategy_ = RepeatedDelayStrategy;
    abstract class AbstractWidget implements Internal.LayoutElement, Internal.NarratableEntry, Internal.GuiEventListener, Internal.AbstractWidgetInvoker, Internal.Renderable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Component_)
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        renderScrollingString(arg0: Internal.GuiGraphics_, arg1: Internal.Font_, arg2: number, arg3: number): void;
        getY(): number;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTooltip(): Internal.Tooltip;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        clearFGColor(): void;
        setX(arg0: number): void;
        setAlpha(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        abstract updateWidgetNarration(arg0: Internal.NarrationElementOutput_): void;
        createTooltipPositioner(): Internal.ClientTooltipPositioner;
        isHovered(): boolean;
        getWidth(): number;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        static invokeRenderScrollingString(guiGraphics: Internal.GuiGraphics_, font: Internal.Font_, text: Internal.Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        setMessage(arg0: Internal.Component_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        isValidClickButton(arg0: number): boolean;
        isFocused(): boolean;
        getX(): number;
        clicked(arg0: number, arg1: number): boolean;
        isActive(): boolean;
        static invokeRenderScrollingString$raised_$md$2a2e30$0(arg0: Internal.GuiGraphics_, arg1: Internal.Font_, arg2: Internal.Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getTabOrderGroup(): number;
        abstract renderWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        setTooltipDelay(arg0: number): void;
        getMessage(): Internal.Component;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setY(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        playDownSound(arg0: Internal.SoundManager_): void;
        defaultButtonNarrationText(arg0: Internal.NarrationElementOutput_): void;
        static wrapDefaultNarrationMessage(arg0: Internal.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        static renderScrollingString(arg0: Internal.GuiGraphics_, arg1: Internal.Font_, arg2: Internal.Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        createNarrationMessage(): Internal.MutableComponent;
        setHeight(arg0: number): void;
        get y(): number
        set focused(arg0: boolean)
        get tooltip(): Internal.Tooltip
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get hoveredOrFocused(): boolean
        set message(arg0: Internal.Component_)
        get focused(): boolean
        get x(): number
        get active(): boolean
        get tabOrderGroup(): number
        set tooltipDelay(arg0: number)
        get message(): Internal.Component
        set y(arg0: number)
        set width(arg0: number)
        get height(): number
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
        width: number;
        visible: boolean;
        alpha: number;
        static readonly WIDGETS_LOCATION: ResourceLocation;
        height: number;
        static readonly ACCESSIBILITY_TEXTURE: ResourceLocation;
        x: number;
        isHovered: boolean;
        y: number;
        static readonly UNSET_FG_COLOR: -1;
        active: boolean;
        packedFGColor: number;
    }
    type AbstractWidget_ = AbstractWidget;
    class EntityEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Entity_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type EntityEvent_ = EntityEvent;
    class MultipleDinosaurEggsBlock extends Internal.DinosaurEggBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.RegistryObject_<any>, arg2: number)
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
        static readonly EGGS: Internal.IntegerProperty;
    }
    type MultipleDinosaurEggsBlock_ = MultipleDinosaurEggsBlock;
    class Realms32BitWarningStatus {
        constructor(arg0: Internal.Minecraft_)
        showRealms32BitWarningIfNeeded(arg0: Internal.Screen_): void;
    }
    type Realms32BitWarningStatus_ = Realms32BitWarningStatus;
    class EntityTravelToDimensionEvent extends Internal.EntityEvent {
        constructor(arg0: Internal.Entity_, arg1: Internal.ResourceKey_<Internal.Level>)
        constructor()
        getDimension(): Internal.ResourceKey<Internal.Level>;
        get dimension(): Internal.ResourceKey<Internal.Level>
    }
    type EntityTravelToDimensionEvent_ = EntityTravelToDimensionEvent;
    class ModelQuadFacing extends Internal.Enum<Internal.ModelQuadFacing> {
        static fromDirection(arg0: Internal.Direction_): Internal.ModelQuadFacing;
        static values(): Internal.ModelQuadFacing[];
        static valueOf(arg0: string): Internal.ModelQuadFacing;
        getOpposite(): this;
        get opposite(): Internal.ModelQuadFacing
        static readonly NEG_X: Internal.ModelQuadFacing;
        static readonly UNASSIGNED: Internal.ModelQuadFacing;
        static readonly NONE: 0;
        static readonly NEG_Y: Internal.ModelQuadFacing;
        static readonly COUNT: 7;
        static readonly POS_Z: Internal.ModelQuadFacing;
        static readonly NEG_Z: Internal.ModelQuadFacing;
        static readonly POS_X: Internal.ModelQuadFacing;
        static readonly VALUES: Internal.ModelQuadFacing[];
        static readonly ALL: 127;
        static readonly POS_Y: Internal.ModelQuadFacing;
    }
    type ModelQuadFacing_ = "unassigned" | "pos_z" | "neg_z" | "pos_y" | "neg_y" | "pos_x" | "neg_x" | ModelQuadFacing;
    class InteractionResultHolder <T> {
        constructor(arg0: InteractionResult_, arg1: T)
        getResult(): InteractionResult;
        static fail<T>(arg0: T): Internal.InteractionResultHolder<T>;
        static consume<T>(arg0: T): Internal.InteractionResultHolder<T>;
        getObject(): T;
        static success<T>(arg0: T): Internal.InteractionResultHolder<T>;
        static pass<T>(arg0: T): Internal.InteractionResultHolder<T>;
        static sidedSuccess<T>(arg0: T, arg1: boolean): Internal.InteractionResultHolder<T>;
        get result(): InteractionResult
        get object(): T
    }
    type InteractionResultHolder_<T> = InteractionResultHolder<T>;
    class SubmergedInCondition extends Internal.EntityCondition<Internal.TagConfiguration<Internal.Fluid>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        check(arg0: Internal.TagConfiguration_<Internal.Fluid>, arg1: Internal.Entity_): boolean;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SubmergedInCondition_ = SubmergedInCondition;
    class StoringChunkProgressListener implements Internal.ChunkProgressListener {
        constructor(arg0: number)
        getProgress(): number;
        getFullDiameter(): number;
        start(): void;
        getStatus(arg0: number, arg1: number): Internal.ChunkStatus;
        getDiameter(): number;
        stop(): void;
        onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        updateSpawnPos(arg0: Internal.ChunkPos_): void;
        get progress(): number
        get fullDiameter(): number
        get diameter(): number
    }
    type StoringChunkProgressListener_ = StoringChunkProgressListener;
    class BuilderType <T> extends Internal.Record {
        constructor(type: string, builderClass: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_)
        factory(): Internal.BuilderFactory;
        type(): string;
        builderClass(): Internal.BuilderBase<T>;
    }
    type BuilderType_<T> = BuilderType<T>;
    class BlockContainerJS implements Internal.SpecialEquality {
        constructor(blockEntity: Internal.BlockEntity_)
        constructor(w: Internal.Level_, p: BlockPos_)
        getTags(): Internal.Collection<ResourceLocation>;
        getWest(): this;
        getY(): number;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getNorth(): this;
        getBlockLight(): number;
        spawnLightning(): void;
        spawnFireworks(fireworks: Internal.FireworksJS_): void;
        getPos(): BlockPos;
        getDown(): this;
        getLight(): number;
        getDrops(): Internal.List<Internal.ItemStack>;
        getSouth(): this;
        getSkyLight(): number;
        mergeEntityData(tag: Internal.CompoundTag_): void;
        getCanSeeSky(): boolean;
        getDimension(): ResourceLocation;
        getBlockState(): Internal.BlockState;
        specialEquals(o: any, shallow: boolean): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        getTypeData(): Internal.CompoundTag;
        getInventory(): Internal.InventoryKJS;
        offset(x: number, y: number, z: number): this;
        offset(f: Internal.Direction_): this;
        offset(f: Internal.Direction_, d: number): this;
        spawnLightning(effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getEast(): this;
        getEntityId(): string;
        getX(): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getDrops(entity: Internal.Entity_, heldItem: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        popItem(item: Internal.ItemStack_): void;
        set(id: ResourceLocation_, properties: Internal.Map_<any, any>): void;
        set(id: ResourceLocation_, properties: Internal.Map_<any, any>, flags: number): void;
        setBlockState(state: Internal.BlockState_, flags: number): void;
        getLevel(): Internal.Level;
        popItemFromFace(item: Internal.ItemStack_, dir: Internal.Direction_): void;
        getEntity(): Internal.BlockEntity;
        getPlayersInRadius(radius: number): Internal.EntityArrayList;
        getUp(): this;
        clearCache(): void;
        getZ(): number;
        getEntityData(): Internal.CompoundTag;
        spawnLightning(effectOnly: boolean): void;
        getItem(): Internal.ItemStack;
        getInventory(facing: Internal.Direction_): Internal.InventoryKJS;
        getId(): string;
        canSeeSkyFromBelowWater(): boolean;
        createExplosion(): Internal.ExplosionJS;
        getProperties(): Internal.Map<string, string>;
        setEntityData(tag: Internal.CompoundTag_): void;
        getPlayersInRadius(): Internal.EntityArrayList;
        set(id: ResourceLocation_): void;
        getBiomeId(): ResourceLocation;
        get tags(): Internal.Collection<ResourceLocation>
        get west(): Internal.BlockContainerJS
        get y(): number
        get north(): Internal.BlockContainerJS
        get blockLight(): number
        get pos(): BlockPos
        get down(): Internal.BlockContainerJS
        get light(): number
        get drops(): Internal.List<Internal.ItemStack>
        get south(): Internal.BlockContainerJS
        get skyLight(): number
        get canSeeSky(): boolean
        get dimension(): ResourceLocation
        get blockState(): Internal.BlockState
        get typeData(): Internal.CompoundTag
        get inventory(): Internal.InventoryKJS
        get east(): Internal.BlockContainerJS
        get entityId(): string
        get x(): number
        get level(): Internal.Level
        get entity(): Internal.BlockEntity
        get up(): Internal.BlockContainerJS
        get z(): number
        get entityData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        get id(): string
        get properties(): Internal.Map<string, string>
        set entityData(tag: Internal.CompoundTag_)
        get playersInRadius(): Internal.EntityArrayList
        get biomeId(): ResourceLocation
        readonly minecraftLevel: Internal.Level;
    }
    type BlockContainerJS_ = BlockContainerJS;
    interface CustomIngredientSerializer <T extends Internal.CustomIngredient> {
        get(identifier: ResourceLocation_): Internal.CustomIngredientSerializer<any>;
        abstract read(arg0: Internal.JsonObject_): T;
        abstract write(arg0: Internal.JsonObject_, arg1: T): void;
        abstract getIdentifier(): ResourceLocation;
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        abstract read(arg0: Internal.FriendlyByteBuf_): T;
        register(serializer: Internal.CustomIngredientSerializer_<any>): void;
        get identifier(): ResourceLocation
    }
    type CustomIngredientSerializer_<T extends Internal.CustomIngredient> = CustomIngredientSerializer<T>;
    class EnderDragon extends Internal.Mob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.EnderDragon>, arg1: Internal.Level_)
        getHeadLookVector(arg0: number): Vec3d;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getLatencyPos(arg0: number, arg1: number): number[];
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        reallyHurt(arg0: DamageSource_, arg1: number): boolean;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        hurt(arg0: Internal.EnderDragonPart_, arg1: DamageSource_, arg2: number): boolean;
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
        getSubEntities(): Internal.EnderDragonPart[];
        isInFluid(fluidState: Internal.FluidState_): boolean;
        findClosestNode(): number;
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
        getFightOrigin(): BlockPos;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_): void;
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
        findClosestNode(arg0: number, arg1: number, arg2: number): number;
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
        setFightOrigin(arg0: BlockPos_): void;
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
        getHeadPartYOffset(arg0: number, arg1: number[], arg2: number[]): number;
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
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        setMovementSpeedAddition(speed: number): void;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        findPath(arg0: number, arg1: number, arg2: Internal.Node_): net.minecraft.world.level.pathfinder.Path;
        getPhaseManager(): Internal.EnderDragonPhaseManager;
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
        getDragonFight(): Internal.EndDragonFight;
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
        get subEntities(): Internal.EnderDragonPart[]
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get fightOrigin(): BlockPos
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
        set fightOrigin(arg0: BlockPos_)
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
        set dragonFight(arg0: Internal.EndDragonFight_)
        set movementSpeedAddition(speed: number)
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get phaseManager(): Internal.EnderDragonPhaseManager
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get dragonFight(): Internal.EndDragonFight
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        oFlapTime: number;
        nearestCrystal: Internal.EndCrystal;
        flapTime: number;
        static readonly DATA_PHASE: Internal.EntityDataAccessor<number>;
        yRotA: number;
        readonly head: Internal.EnderDragonPart;
        dragonDeathTime: number;
        readonly positions: number[][];
        posPointer: number;
        inWall: boolean;
    }
    type EnderDragon_ = EnderDragon;
    abstract class KeyFrameData {
        constructor(arg0: number)
        getStartTick(): number;
        get startTick(): number
    }
    type KeyFrameData_ = KeyFrameData;
    class IceCreamBlock extends Internal.Block {
        constructor(arg0: number)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
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
        getType(arg0: Internal.LevelAccessor_, arg1: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly ABOVE_OCCLUDE_SHAPE: Internal.CubeVoxelShape;
        static readonly DRIPPING_SHAPE: Internal.CubeVoxelShape;
        static readonly TYPE: Internal.IntegerProperty;
    }
    type IceCreamBlock_ = IceCreamBlock;
    interface Delayed extends Internal.Comparable<Internal.Delayed> {
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
    }
    type Delayed_ = Delayed;
    class MagicMobEffect extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type MagicMobEffect_ = MagicMobEffect;
    class EventBasedSpawnModifier implements Internal.BiomeModifier {
        constructor()
        codec(): Internal.Codec<Internal.BiomeModifier>;
        modify(biome: Internal.Holder_<Internal.Biome>, phase: Internal.BiomeModifier$Phase_, builder: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type EventBasedSpawnModifier_ = EventBasedSpawnModifier;
    class InscriptionTableBlock extends Internal.HorizontalDirectionalBlock {
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
        static readonly SHAPE_LEG_1: Internal.ArrayVoxelShape;
        static readonly SHAPE_LEG_2: Internal.ArrayVoxelShape;
        static readonly SHAPE_TABLETOP: Internal.CubeVoxelShape;
        static readonly SHAPE_LEG_3: Internal.ArrayVoxelShape;
        static readonly SHAPE_LEG_4: Internal.ArrayVoxelShape;
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly PART: Internal.EnumProperty<Internal.ChestType>;
        static readonly SHAPE_LEGS_NORTH: Internal.ArrayVoxelShape;
        static readonly SHAPE_LEGS_EAST: Internal.ArrayVoxelShape;
        static readonly SHAPE_LEGS_WEST: Internal.ArrayVoxelShape;
        static readonly SHAPE_LEGS_SOUTH: Internal.ArrayVoxelShape;
    }
    type InscriptionTableBlock_ = InscriptionTableBlock;
    class DamagePredicate$Builder {
        constructor()
        type(arg0: Internal.DamageSourcePredicate_): this;
        build(): Internal.DamagePredicate;
        blocked(arg0: boolean): this;
        dealtDamage(arg0: Internal.MinMaxBounds$Doubles_): this;
        takenDamage(arg0: Internal.MinMaxBounds$Doubles_): this;
        static damageInstance(): Internal.DamagePredicate$Builder;
        sourceEntity(arg0: Internal.EntityPredicate_): this;
        type(arg0: Internal.DamageSourcePredicate$Builder_): this;
    }
    type DamagePredicate$Builder_ = DamagePredicate$Builder;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface DomainCombiner {
        abstract combine(arg0: Internal.ProtectionDomain_[], arg1: Internal.ProtectionDomain_[]): Internal.ProtectionDomain[];
        (arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[]): Internal.ProtectionDomain_[];
    }
    type DomainCombiner_ = DomainCombiner;
    class FilterMask {
        constructor(arg0: number)
        apply(arg0: string): string;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.FilterMask;
        applyWithFormatting(arg0: string): Internal.Component;
        isEmpty(): boolean;
        setFiltered(arg0: number): void;
        isFullyFiltered(): boolean;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.FilterMask_): void;
        get empty(): boolean
        set filtered(arg0: number)
        get fullyFiltered(): boolean
        static readonly CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly PARTIALLY_FILTERED_CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FILTERED_STYLE: Internal.Style;
        static readonly PASS_THROUGH: Internal.FilterMask;
        static readonly PASS_THROUGH_CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FULLY_FILTERED: Internal.FilterMask;
        static readonly FULLY_FILTERED_CODEC: Internal.Codec<Internal.FilterMask>;
    }
    type FilterMask_ = FilterMask;
    class LavaFluid$Flowing extends Internal.LavaFluid {
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
    }
    type LavaFluid$Flowing_ = LavaFluid$Flowing;
}
