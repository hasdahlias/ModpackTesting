/// <reference path="./internal_*.d.ts" />
declare namespace dev.architectury.event {
    class EventResult {
        static interrupt(value: boolean): dev.architectury.event.EventResult;
        isPresent(): boolean;
        isTrue(): boolean;
        static interruptDefault(): dev.architectury.event.EventResult;
        asMinecraft(): InteractionResult;
        static interruptTrue(): dev.architectury.event.EventResult;
        interruptsFurtherEvaluation(): boolean;
        isFalse(): boolean;
        value(): boolean;
        static pass(): dev.architectury.event.EventResult;
        static interruptFalse(): dev.architectury.event.EventResult;
        isEmpty(): boolean;
        get present(): boolean
        get "true"(): boolean
        get "false"(): boolean
        get empty(): boolean
    }
    type EventResult_ = EventResult;
}
declare namespace com.google.common.base {
    interface Supplier <T> extends Internal.Supplier<T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T>;
}
declare namespace Internal {
    class ClientboundBlockUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: Internal.BlockGetter_, arg1: BlockPos_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getBlockState(): Internal.BlockState;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get pos(): BlockPos
        get blockState(): Internal.BlockState
        get skippable(): boolean
    }
    type ClientboundBlockUpdatePacket_ = ClientboundBlockUpdatePacket;
    class ResourceOrTagArgument <T> implements Internal.ArgumentType<Internal.ResourceOrTagArgument$Result<T>> {
        constructor(arg0: Internal.CommandBuildContext_, arg1: Internal.ResourceKey_<Internal.Registry<T>>)
        getExamples(): Internal.Collection<string>;
        static resourceOrTag<T>(arg0: Internal.CommandBuildContext_, arg1: Internal.ResourceKey_<Internal.Registry<T>>): Internal.ResourceOrTagArgument<T>;
        static getResourceOrTag<T>(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string, arg2: Internal.ResourceKey_<Internal.Registry<T>>): Internal.ResourceOrTagArgument$Result<T>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        parse(arg0: Internal.StringReader_): any;
        get examples(): Internal.Collection<string>
        readonly registryKey: Internal.ResourceKey<Internal.Registry<T>>;
    }
    type ResourceOrTagArgument_<T> = ResourceOrTagArgument<T>;
    class Mirror extends Internal.Enum<Internal.Mirror> implements Internal.StringRepresentable {
        getRotation(arg0: Internal.Direction_): Internal.Rotation;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        mirror(arg0: Internal.Direction_): Internal.Direction;
        getSerializedName(): string;
        static values(): Internal.Mirror[];
        mirror(arg0: number, arg1: number): number;
        rotation(): Internal.OctahedralGroup;
        static valueOf(arg0: string): Internal.Mirror;
        symbol(): Internal.Component;
        get serializedName(): string
        static readonly CODEC: Internal.Codec<Internal.Mirror>;
        static readonly FRONT_BACK: Internal.Mirror;
        static readonly NONE: Internal.Mirror;
        static readonly LEFT_RIGHT: Internal.Mirror;
    }
    type Mirror_ = "left_right" | "front_back" | Mirror | "none";
    class SmallCandyCaneBlock extends Internal.Block {
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
        static readonly COUNT: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type SmallCandyCaneBlock_ = SmallCandyCaneBlock;
    class ContextUtils$EDamageContext {
        constructor(entity: Internal.Entity_, damageSource: DamageSource_)
        /**
         * The source of the damage
        */
        readonly damageSource: DamageSource;
        /**
         * The entity that is the target of the damage
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EDamageContext_ = ContextUtils$EDamageContext;
    class ActionOnBlockBreakPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ActionOnBlockBreakConfiguration> {
        constructor()
        executeActions(arg0: Internal.ConfiguredPower_<Internal.ActionOnBlockBreakConfiguration, any>, arg1: Internal.Entity_, arg2: boolean, arg3: BlockPos_, arg4: Internal.Direction_): void;
        static execute(arg0: Internal.Entity_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>, arg4: boolean): void;
        doesApply(arg0: Internal.ConfiguredPower_<Internal.ActionOnBlockBreakConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: Internal.NonNullSupplier_<Internal.BlockState>): boolean;
    }
    type ActionOnBlockBreakPower_ = ActionOnBlockBreakPower;
    abstract class StructBuffer <T extends Internal.Struct, SELF extends Internal.StructBuffer<T, SELF>> extends Internal.CustomBuffer<SELF> implements Internal.Iterable<T> {
        put(arg0: T): SELF;
        get(arg0: number, arg1: T): SELF;
        stream(): Internal.Stream<T>;
        spliterator(): Internal.Spliterator<T>;
        apply(arg0: Internal.Consumer_<T>): SELF;
        apply(arg0: number, arg1: Internal.Consumer_<T>): SELF;
        get(arg0: T): SELF;
        iterator(): Internal.Iterator<T>;
        get(arg0: number): T;
        forEach(arg0: Internal.Consumer_<T>): void;
        put(arg0: number, arg1: T): SELF;
        parallelStream(): Internal.Stream<T>;
        get(): T;
    }
    type StructBuffer_<T extends Internal.Struct, SELF extends Internal.StructBuffer<T, SELF>> = StructBuffer<T, SELF>;
    class LightningBolt extends Internal.Entity {
        constructor(arg0: Internal.EntityType_<Internal.LightningBolt>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDamage(arg0: number): void;
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
        handler$cgg000$architectury$handleLightning(ci: Internal.CallbackInfo_, list: Internal.List_<any>): void;
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
        getBlocksSetOnFire(): number;
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
        getDamage(): number;
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
        setCause(arg0: Internal.ServerPlayer_): void;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setVisualOnly(arg0: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getCause(): Internal.ServerPlayer;
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
        getHitEntities(): Internal.Stream<Internal.Entity>;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        set damage(arg0: number)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get blocksSetOnFire(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        get damage(): number
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
        set cause(arg0: Internal.ServerPlayer_)
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set visualOnly(arg0: boolean)
        get cause(): Internal.ServerPlayer
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get hitEntities(): Internal.Stream<Internal.Entity>
        get profile(): Internal.GameProfile
        seed: number;
    }
    type LightningBolt_ = LightningBolt;
    class LongJumpToRandomPos$PossibleJump extends Internal.WeightedEntry$IntrusiveBase {
        constructor(arg0: BlockPos_, arg1: number)
        getJumpTarget(): BlockPos;
        static wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        get jumpTarget(): BlockPos
    }
    type LongJumpToRandomPos$PossibleJump_ = LongJumpToRandomPos$PossibleJump;
    class TextStyle extends Internal.Enum<Internal.TextStyle> {
        isStandalone(): boolean;
        asNormal(): this;
        asStandalone(): this;
        static values(): Internal.TextStyle[];
        static valueOf(arg0: string): Internal.TextStyle;
        get standalone(): boolean
        static readonly SHORT: Internal.TextStyle;
        static readonly NARROW: Internal.TextStyle;
        static readonly SHORT_STANDALONE: Internal.TextStyle;
        static readonly FULL: Internal.TextStyle;
        static readonly NARROW_STANDALONE: Internal.TextStyle;
        static readonly FULL_STANDALONE: Internal.TextStyle;
    }
    type TextStyle_ = "narrow" | TextStyle | "short" | "full_standalone" | "short_standalone" | "full" | "narrow_standalone";
    class AxisParticleType$AxisParticleData implements Internal.ParticleOptions {
        constructor(arg0: Internal.ParticleType_<Internal.AxisParticleType$AxisParticleData>, arg1: number, arg2: number)
        getDegree(): number;
        getAxis(): number;
        getType(): Internal.ParticleType<any>;
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get degree(): number
        get axis(): number
        get type(): Internal.ParticleType<any>
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.AxisParticleType$AxisParticleData>;
    }
    type AxisParticleType$AxisParticleData_ = AxisParticleType$AxisParticleData;
    interface Long2ObjectFunction <V> extends it.unimi.dsi.fastutil.Function<number, V>, Internal.LongFunction<V> {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        remove(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        apply(arg0: number): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        apply(arg0: number): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        abstract get(arg0: number): V;
        size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        defaultReturnValue(): V;
        getOrDefault(arg0: number, arg1: V): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        (arg0: number): V;
    }
    type Long2ObjectFunction_<V> = Long2ObjectFunction<V>;
    class Warden extends Internal.Monster implements Internal.VibrationSystem {
        constructor(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        clearAnger(arg0: Internal.Entity_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        increaseAngerAt(arg0: Internal.Entity_): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getAngerLevel(): Internal.AngerLevel;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        static getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        getTendrilAnimation(arg0: number): number;
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
        static getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
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
        getHeartAnimation(arg0: number): number;
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
        getAngerManagement(): Internal.AngerManagement;
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
        getClientAngerLevel(): number;
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
        isDiggingOrEmerging(): boolean;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        canTargetEntity(arg0: Internal.Entity_): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        getBrain(): Internal.Brain<Internal.Warden>;
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
        setAttackTarget(arg0: Internal.LivingEntity_): void;
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
        static getGameEventFrequency(arg0: Internal.GameEvent_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getEntityAngryAt(): Internal.Optional<Internal.LivingEntity>;
        static applyDarknessAround(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: Internal.Entity_, arg3: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        getVibrationUser(): Internal.VibrationSystem$User;
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
        increaseAngerAt(arg0: Internal.Entity_, arg1: number, arg2: boolean): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        static m_280253_(arg0: Internal.Warden_): Internal.Brain<any>;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        getVibrationData(): Internal.VibrationSystem$Data;
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
        get angerLevel(): Internal.AngerLevel
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
        get angerManagement(): Internal.AngerManagement
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get clientAngerLevel(): number
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get diggingOrEmerging(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        get brain(): Internal.Brain<Internal.Warden>
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set attackTarget(arg0: Internal.LivingEntity_)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get entityAngryAt(): Internal.Optional<Internal.LivingEntity>
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get vibrationUser(): Internal.VibrationSystem$User
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get vibrationData(): Internal.VibrationSystem$Data
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        diggingAnimationState: Internal.AnimationState;
        sonicBoomAnimationState: Internal.AnimationState;
        angerManagement: Internal.AngerManagement;
        attackAnimationState: Internal.AnimationState;
        roarAnimationState: Internal.AnimationState;
        emergeAnimationState: Internal.AnimationState;
        sniffAnimationState: Internal.AnimationState;
    }
    type Warden_ = Warden;
    class LineOfSightCondition extends Internal.BiEntityCondition<any> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type LineOfSightCondition_ = LineOfSightCondition;
    class KubeJSNLEntityRenderer <T extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.GeoEntityRenderer<T> {
        constructor(renderManager: Internal.EntityRendererProvider$Context_, builder: Internal.BaseEntityBuilder_<T>)
        entityName(): string;
        getScaleHeight(): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getScaleWidth(): number;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        getRenderType(animatable: T, texture: ResourceLocation_, bufferSource: Internal.MultiBufferSource_, partialTick: number): Internal.RenderType;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        scaleModelForRender(widthScale: number, heightScale: number, poseStack: Internal.PoseStack_, animatable: T, model: Internal.BakedGeoModel_, isReRender: boolean, partialTick: number, packedLight: number, packedOverlay: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get scaleHeight(): number
        get scaleWidth(): number
    }
    type KubeJSNLEntityRenderer_<T extends Internal.Entity & Internal.IAnimatableJSNL> = KubeJSNLEntityRenderer<T>;
    interface JEISubtypesEventJS$Interpreter extends Internal.Function<Internal.ItemStack, any> {
        compose<V>(arg0: Internal.Function_<V, Internal.ItemStack>): Internal.Function<V, any>;
        abstract apply(arg0: Internal.ItemStack_): any;
        identity<T>(): Internal.Function<T, T>;
        andThen<V>(arg0: Internal.Function_<any, V>): Internal.Function<Internal.ItemStack, V>;
        (arg0: Internal.ItemStack): any;
    }
    type JEISubtypesEventJS$Interpreter_ = JEISubtypesEventJS$Interpreter;
    interface CommentedConfig extends Internal.UnmodifiableCommentedConfig, Internal.Config {
        abstract add(arg0: Internal.List_<string>, arg1: any): boolean;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        of(arg0: Internal.Supplier_<Internal.Map<string, any>>, arg1: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getInt(arg0: Internal.List_<string>): number;
        abstract getComment(arg0: Internal.List_<string>): string;
        abstract commentMap(): Internal.Map<string, string>;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract containsComment(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalComment(arg0: Internal.List_<string>): Internal.Optional<string>;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        update(arg0: Internal.List_<string>, arg1: any): void;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        remove<T>(arg0: string): T;
        putAll(arg0: Internal.UnmodifiableConfig_): void;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        add(arg0: string, arg1: any): boolean;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): this;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_): this;
        fake(arg0: Internal.Config_): this;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getLong(arg0: Internal.List_<string>): number;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        copy(arg0: Internal.UnmodifiableConfig_): this;
        getComment(arg0: string): string;
        containsComment(arg0: string): boolean;
        inMemoryUniversal(): Internal.Config;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        removeComment(arg0: string): string;
        concurrentCopy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.ConfigFormat_<any>): this;
        copy(arg0: Internal.UnmodifiableConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>, arg2: Internal.ConfigFormat_<any>): this;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract setComment(arg0: Internal.List_<string>, arg1: string): string;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        unmodifiable(): Internal.UnmodifiableConfig;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract removeComment(arg0: Internal.List_<string>): string;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.Supplier_<Internal.Map<string, any>>): this;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        abstract createSubConfig(): this;
        update(arg0: string, arg1: any): void;
        abstract size(): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_): this;
        abstract valueMap(): Internal.Map<string, any>;
        abstract clear(): void;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        inMemoryConcurrent(): this;
        inMemory(): this;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        getCharOrElse(arg0: string, arg1: string): string;
        get<T>(arg0: Internal.List_<string>): T;
        abstract set<T>(arg0: Internal.List_<string>, arg1: any): T;
        inMemoryUniversalConcurrent(): Internal.Config;
        contains(arg0: string): boolean;
        set<T>(arg0: string, arg1: any): T;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        setInsertionOrderPreserved(arg0: boolean): void;
        removeAll(arg0: Internal.UnmodifiableConfig_): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        abstract remove<T>(arg0: Internal.List_<string>): T;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        isInsertionOrderPreserved(): boolean;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        getShort(arg0: string): number;
        putAllComments(arg0: Internal.UnmodifiableCommentedConfig_): void;
        abstract clearComments(): void;
        getComments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        addAll(arg0: Internal.UnmodifiableConfig_): void;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getChar(arg0: string): string;
        checked(): this;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getChar(arg0: Internal.List_<string>): string;
        setComment(arg0: string, arg1: string): string;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        concurrentCopy(arg0: Internal.UnmodifiableCommentedConfig_): this;
        isEmpty(): boolean;
        putAllComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        fake(arg0: Internal.UnmodifiableConfig_): Internal.UnmodifiableCommentedConfig;
        wrap(arg0: Internal.Map_<string, any>, arg1: Internal.ConfigFormat_<any>): this;
        getDefaultMapCreator<T>(arg0: boolean): Internal.Supplier<Internal.Map<string, T>>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract entrySet(): Internal.Set<Internal.CommentedConfig$Entry>;
        getOptionalComment(arg0: string): Internal.Optional<string>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        ofConcurrent(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        of(arg0: Internal.ConfigFormat_<Internal.CommentedConfig>): this;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getByte(arg0: string): number;
        copy(arg0: Internal.UnmodifiableCommentedConfig_, arg1: Internal.ConfigFormat_<any>): this;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        set insertionOrderPreserved(arg0: boolean)
        get insertionOrderPreserved(): boolean
        get comments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
        get empty(): boolean
    }
    type CommentedConfig_ = CommentedConfig;
    class EntitySectionStorage <T extends Internal.EntityAccess> {
        constructor(arg0: T, arg1: Internal.Long2ObjectFunction_<Internal.Visibility>)
        remove(arg0: number): void;
        getAllChunksWithExistingSections(): Internal.LongSet;
        getExistingSectionsInChunk(arg0: number): Internal.Stream<Internal.EntitySection<T>>;
        count(): number;
        getEntities<U extends T>(arg0: Internal.EntityTypeTest_<T, U>, arg1: Internal.AABB_, arg2: Internal.AbortableIterationConsumer_<U>): void;
        getOrCreateSection(arg0: number): Internal.EntitySection<T>;
        getExistingSectionPositionsInChunk(arg0: number): Internal.LongStream;
        forEachAccessibleNonEmptySection(arg0: Internal.AABB_, arg1: Internal.AbortableIterationConsumer_<Internal.EntitySection<T>>): void;
        getSection(arg0: number): Internal.EntitySection<T>;
        getEntities(arg0: Internal.AABB_, arg1: Internal.AbortableIterationConsumer_<T>): void;
        get allChunksWithExistingSections(): Internal.LongSet
    }
    type EntitySectionStorage_<T extends Internal.EntityAccess> = EntitySectionStorage<T>;
    interface CoreGeoModel <E extends Internal.GeoAnimatable> {
        abstract handleAnimations(arg0: E, arg1: number, arg2: software.bernie.geckolib.core.animation.AnimationState_<E>): void;
        abstract getBakedGeoModel(arg0: string): Internal.CoreBakedGeoModel;
        abstract getAnimationProcessor(): Internal.AnimationProcessor<E>;
        setCustomAnimations(arg0: E, arg1: number, arg2: software.bernie.geckolib.core.animation.AnimationState_<E>): void;
        applyMolangQueries(arg0: E, arg1: number): void;
        abstract getAnimation(arg0: E, arg1: string): software.bernie.geckolib.core.animation.Animation;
        getBone(arg0: string): Internal.Optional<Internal.CoreGeoBone>;
        get animationProcessor(): Internal.AnimationProcessor<E>
    }
    type CoreGeoModel_<E extends Internal.GeoAnimatable> = CoreGeoModel<E>;
    class PlayerInteractEvent$EntityInteract extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.InteractionHand_, arg2: Internal.Entity_)
        getTarget(): Internal.Entity;
        getEntity(): Internal.LivingEntity;
        get target(): Internal.Entity
        get entity(): Internal.LivingEntity
    }
    type PlayerInteractEvent$EntityInteract_ = PlayerInteractEvent$EntityInteract;
    interface TagType <T extends Internal.Tag> {
        abstract getPrettyName(): string;
        abstract skip(arg0: Internal.DataInput_, arg1: number): void;
        parseRoot(arg0: Internal.DataInput_, arg1: Internal.StreamTagVisitor_): void;
        abstract getName(): string;
        isValue(): boolean;
        abstract load(arg0: Internal.DataInput_, arg1: number, arg2: Internal.NbtAccounter_): T;
        abstract parse(arg0: Internal.DataInput_, arg1: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        createInvalid(arg0: number): Internal.TagType<Internal.EndTag>;
        abstract skip(arg0: Internal.DataInput_): void;
        get prettyName(): string
        get name(): string
        get value(): boolean
    }
    type TagType_<T extends Internal.Tag> = TagType<T>;
    interface IBookmarkOverlay {
        abstract getIngredientUnderMouse<T>(arg0: Internal.IIngredientType_<T>): T;
        getItemStackUnderMouse(): Internal.ItemStack;
        abstract getIngredientUnderMouse(): Internal.Optional<Internal.ITypedIngredient<any>>;
        get itemStackUnderMouse(): Internal.ItemStack
        get ingredientUnderMouse(): Internal.Optional<Internal.ITypedIngredient<any>>
    }
    type IBookmarkOverlay_ = IBookmarkOverlay;
    class TriggerRegistryEventJS extends Internal.StartupEventJS {
        constructor()
        create(arg0: ResourceLocation_): Internal.CustomTriggerBuilder;
    }
    type TriggerRegistryEventJS_ = TriggerRegistryEventJS;
    abstract class AbstractFurnaceMenu extends Internal.RecipeBookMenu<Internal.Container> {
        constructor(arg0: Internal.MenuType_<any>, arg1: Internal.RecipeType_<Internal.AbstractCookingRecipe>, arg2: Internal.RecipeBookType_, arg3: number, arg4: Internal.Inventory_, arg5: Internal.Container_, arg6: Internal.ContainerData_)
        constructor(arg0: Internal.MenuType_<any>, arg1: Internal.RecipeType_<Internal.AbstractCookingRecipe>, arg2: Internal.RecipeBookType_, arg3: number, arg4: Internal.Inventory_)
        isLit(): boolean;
        isFuel(arg0: Internal.ItemStack_): boolean;
        getBurnProgress(): number;
        canSmelt(arg0: Internal.ItemStack_): boolean;
        getLitProgress(): number;
        get lit(): boolean
        get burnProgress(): number
        get litProgress(): number
        static readonly FUEL_SLOT: 1;
        static readonly RESULT_SLOT: 2;
        static readonly DATA_COUNT: 4;
        static readonly SLOT_COUNT: 3;
        readonly level: Internal.Level;
        static readonly INGREDIENT_SLOT: 0;
    }
    type AbstractFurnaceMenu_ = AbstractFurnaceMenu;
    class TreeDecoratorType <P extends Internal.TreeDecorator> {
        constructor(arg0: Internal.Codec_<P>)
        codec(): Internal.Codec<P>;
        static readonly BEEHIVE: Internal.TreeDecoratorType<Internal.BeehiveDecorator>;
        static readonly LEAVE_VINE: Internal.TreeDecoratorType<Internal.LeaveVineDecorator>;
        static readonly COCOA: Internal.TreeDecoratorType<Internal.CocoaDecorator>;
        static readonly TRUNK_VINE: Internal.TreeDecoratorType<Internal.TrunkVineDecorator>;
        static readonly ALTER_GROUND: Internal.TreeDecoratorType<Internal.AlterGroundDecorator>;
        static readonly ATTACHED_TO_LEAVES: Internal.TreeDecoratorType<Internal.AttachedToLeavesDecorator>;
    }
    type TreeDecoratorType_<P extends Internal.TreeDecorator> = TreeDecoratorType<P> | Special.TreeDecoratorType;
    abstract class MultithreadEventLoopGroup extends Internal.MultithreadEventExecutorGroup implements Internal.EventLoopGroup {
        register(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        register(arg0: io.netty.channel.Channel_): Internal.ChannelFuture;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        /**
         * @deprecated
        */
        register(arg0: io.netty.channel.Channel_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        next(): Internal.EventLoop;
    }
    type MultithreadEventLoopGroup_ = MultithreadEventLoopGroup;
    class SmallFireball extends Internal.Fireball {
        constructor(arg0: Internal.EntityType_<Internal.SmallFireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number)
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
    }
    type SmallFireball_ = SmallFireball;
    class ImmutableEnumMap <K extends Internal.Enum<K>, V> extends Internal.ImmutableMap$IteratorBasedImmutableMap<K, V> {
        get(arg0: any): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
    }
    type ImmutableEnumMap_<K extends Internal.Enum<K>, V> = ImmutableEnumMap<K, V>;
    class Pack$Info extends Internal.Record {
        constructor(arg0: Internal.Component_, arg1: number, arg2: Internal.FeatureFlagSet_)
        constructor(description: Internal.Component_, dataFormat: number, resourceFormat: number, requestedFeatures: Internal.FeatureFlagSet_, hidden: boolean)
        description(): Internal.Component;
        requestedFeatures(): Internal.FeatureFlagSet;
        dataFormat(): number;
        resourceFormat(): number;
        hidden(): boolean;
        compatibility(arg0: Internal.PackType_): Internal.PackCompatibility;
        getFormat(arg0: Internal.PackType_): number;
    }
    type Pack$Info_ = Pack$Info;
    interface MinecraftServerKJS extends Internal.DataSenderKJS, Internal.MinecraftEnvironmentKJS, Internal.WithPersistentData, Internal.WithAttachedData<Internal.MinecraftServer> {
        getDisplayName(): Internal.Component;
        getPersistentData(): Internal.CompoundTag;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getName(): Internal.Component;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        getEntities(): Internal.EntityArrayList;
        self(): Internal.MinecraftServer;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        sendData(channel: string): void;
        abstract getScheduledEvents(): Internal.ScheduledEvents;
        tell(message: Internal.Component_): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        setStatusMessage(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<Internal.MinecraftServer>;
        getPlayers(): Internal.EntityArrayList;
        restoreInventories(): Internal.Map<Internal.UUID, Internal.Map<number, Internal.ItemStack>>;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        runCommand(command: string): number;
        abstract getReloadableResources(): Internal.MinecraftServer$ReloadableResources;
        abstract getOverworld(): Internal.ServerLevel;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        get displayName(): Internal.Component
        get persistentData(): Internal.CompoundTag
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get scheduledEvents(): Internal.ScheduledEvents
        set statusMessage(message: Internal.Component_)
        get data(): Internal.AttachedData<Internal.MinecraftServer>
        get players(): Internal.EntityArrayList
        get reloadableResources(): Internal.MinecraftServer$ReloadableResources
        get overworld(): Internal.ServerLevel
    }
    type MinecraftServerKJS_ = MinecraftServerKJS;
    class ClipBlockStateContext {
        constructor(arg0: Vec3d_, arg1: Vec3d_, arg2: Internal.Predicate_<Internal.BlockState>)
        getFrom(): Vec3d;
        getTo(): Vec3d;
        isTargetBlock(): Internal.Predicate<Internal.BlockState>;
        get from(): Vec3d
        get to(): Vec3d
    }
    type ClipBlockStateContext_ = ClipBlockStateContext;
    class AxolotlJSBuilder extends Internal.AnimalEntityBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * @param bucketItemStack Function returning the itemstack to receive when bucketed
         * Defaults to Axolotl Bucket
         * Example usage:
         * ```javascript
         * builder.bucketItemStack(entity => {
         *     // Use information about the entity to return an ItemStack.
         *     return Item.of('minecraft:diamond')
         * })
         * ```
        */
        bucketItemStack(function_: Internal.Function_<Internal.LivingEntity, any>): this;
        createObject(): any;
    }
    type AxolotlJSBuilder_ = AxolotlJSBuilder;
    interface MapEncoder <A> extends Internal.Keyable {
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.MapEncoder<B>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        abstract encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<A>;
        withLifecycle(arg0: Internal.Lifecycle_): this;
        makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
    }
    type MapEncoder_<A> = MapEncoder<A>;
    class StringArgumentSerializer implements Internal.ArgumentTypeInfo<Internal.StringArgumentType, Internal.StringArgumentSerializer$Template> {
        constructor()
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        serializeToNetwork(arg0: Internal.StringArgumentSerializer$Template_, arg1: Internal.FriendlyByteBuf_): void;
        unpack(arg0: Internal.StringArgumentType_): Internal.StringArgumentSerializer$Template;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
        serializeToJson(arg0: Internal.StringArgumentSerializer$Template_, arg1: Internal.JsonObject_): void;
    }
    type StringArgumentSerializer_ = StringArgumentSerializer;
    class ResourcePower extends Internal.HudRenderedVariableIntPowerFactory$Simple<Internal.ResourceConfiguration> {
        constructor()
        decrement(arg0: Internal.ConfiguredPower_<Internal.ResourceConfiguration, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<Internal.ResourceConfiguration, any>, arg1: Internal.Entity_): number;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.ResourceConfiguration, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<Internal.ResourceConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
    }
    type ResourcePower_ = ResourcePower;
    class ClimateSettingsBuilder {
        getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        getDownfall(): number;
        static create(arg0: boolean, arg1: number, arg2: Internal.Biome$TemperatureModifier_, arg3: number): Internal.ClimateSettingsBuilder;
        setTemperatureModifier(arg0: Internal.Biome$TemperatureModifier_): void;
        setDownfall(arg0: number): void;
        build(): Internal.Biome$ClimateSettings;
        getTemperature(): number;
        setTemperature(arg0: number): void;
        setHasPrecipitation(arg0: boolean): void;
        hasPrecipitation(): boolean;
        static copyOf(arg0: Internal.Biome$ClimateSettings_): Internal.ClimateSettingsBuilder;
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get downfall(): number
        set temperatureModifier(arg0: Internal.Biome$TemperatureModifier_)
        set downfall(arg0: number)
        get temperature(): number
        set temperature(arg0: number)
        set hasPrecipitation(arg0: boolean)
    }
    type ClimateSettingsBuilder_ = ClimateSettingsBuilder;
    class Holder$Reference$Type extends Internal.Enum<Internal.Holder$Reference$Type> {
        static values(): Internal.Holder$Reference$Type[];
        static valueOf(arg0: string): Internal.Holder$Reference$Type;
        static readonly STAND_ALONE: Internal.Holder$Reference$Type;
        static readonly INTRUSIVE: Internal.Holder$Reference$Type;
    }
    type Holder$Reference$Type_ = "stand_alone" | Holder$Reference$Type | "intrusive";
    class Visibility extends Internal.Enum<Internal.Visibility> {
        isTicking(): boolean;
        static valueOf(arg0: string): Internal.Visibility;
        static fromFullChunkStatus(arg0: Internal.FullChunkStatus_): Internal.Visibility;
        static values(): Internal.Visibility[];
        isAccessible(): boolean;
        get ticking(): boolean
        get accessible(): boolean
        static readonly HIDDEN: Internal.Visibility;
        static readonly TRACKED: Internal.Visibility;
        static readonly TICKING: Internal.Visibility;
    }
    type Visibility_ = Visibility | "tracked" | "hidden" | "ticking";
    class UnderwaterMagmaConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly floorSearchRange: number;
        readonly placementRadiusAroundFloor: number;
        static readonly CODEC: Internal.Codec<Internal.UnderwaterMagmaConfiguration>;
        readonly placementProbabilityPerValidPosition: number;
    }
    type UnderwaterMagmaConfiguration_ = UnderwaterMagmaConfiguration;
    interface SpriteFinder {
        /**
         * @deprecated
        */
        find(quad: Internal.QuadView_, textureIndex: number): Internal.TextureAtlasSprite;
        get(atlas: Internal.TextureAtlas_): this;
        abstract find(arg0: number, arg1: number): Internal.TextureAtlasSprite;
        abstract find(arg0: Internal.QuadView_): Internal.TextureAtlasSprite;
    }
    type SpriteFinder_ = SpriteFinder;
    interface ClientboundBossEventPacket$Handler {
        updateStyle(arg0: Internal.UUID_, arg1: Internal.BossEvent$BossBarColor_, arg2: Internal.BossEvent$BossBarOverlay_): void;
        remove(arg0: Internal.UUID_): void;
        updateProgress(arg0: Internal.UUID_, arg1: number): void;
        updateProperties(arg0: Internal.UUID_, arg1: boolean, arg2: boolean, arg3: boolean): void;
        add(arg0: Internal.UUID_, arg1: Internal.Component_, arg2: number, arg3: Internal.BossEvent$BossBarColor_, arg4: Internal.BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean): void;
        updateName(arg0: Internal.UUID_, arg1: Internal.Component_): void;
    }
    type ClientboundBossEventPacket$Handler_ = ClientboundBossEventPacket$Handler;
    interface MinecraftClient_BetterCombat {
        abstract getUpswingTicks(): number;
        isWeaponSwingInProgress(): boolean;
        getCursorTarget(): Internal.Entity;
        abstract hasTargetsInReach(): boolean;
        abstract getComboCount(): number;
        abstract cancelUpswing(): void;
        abstract getSwingProgress(): number;
        get upswingTicks(): number
        get weaponSwingInProgress(): boolean
        get cursorTarget(): Internal.Entity
        get comboCount(): number
        get swingProgress(): number
    }
    type MinecraftClient_BetterCombat_ = MinecraftClient_BetterCombat;
    class ClientboundMerchantOffersPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Internal.MerchantOffers_, arg2: number, arg3: number, arg4: boolean, arg5: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        showProgress(): boolean;
        getVillagerLevel(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        canRestock(): boolean;
        getOffers(): Internal.MerchantOffers;
        getContainerId(): number;
        getVillagerXp(): number;
        isSkippable(): boolean;
        get villagerLevel(): number
        get offers(): Internal.MerchantOffers
        get containerId(): number
        get villagerXp(): number
        get skippable(): boolean
    }
    type ClientboundMerchantOffersPacket_ = ClientboundMerchantOffersPacket;
    class SmokingRecipe extends Internal.AbstractCookingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CookingBookCategory_, arg3: Internal.Ingredient_, arg4: Internal.ItemStack_, arg5: number, arg6: number)
        isSpecial(): boolean;
        getGroup(): string;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        get special(): boolean
        get group(): string
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type SmokingRecipe_ = SmokingRecipe;
    class BurrowingArrowItem extends Internal.ArrowItem {
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
    type BurrowingArrowItem_ = BurrowingArrowItem;
    abstract class CharsetEncoder {
        replaceWith(arg0: number[]): this;
        averageBytesPerChar(): number;
        canEncode(arg0: Internal.CharSequence_): boolean;
        charset(): Internal.Charset;
        onUnmappableCharacter(arg0: Internal.CodingErrorAction_): this;
        unmappableCharacterAction(): Internal.CodingErrorAction;
        onMalformedInput(arg0: Internal.CodingErrorAction_): this;
        replacement(): number[];
        isLegalReplacement(arg0: number[]): boolean;
        reset(): this;
        maxBytesPerChar(): number;
        encode(arg0: Internal.CharBuffer_, arg1: Internal.ByteBuffer_, arg2: boolean): Internal.CoderResult;
        malformedInputAction(): Internal.CodingErrorAction;
        encode(arg0: Internal.CharBuffer_): Internal.ByteBuffer;
        flush(arg0: Internal.ByteBuffer_): Internal.CoderResult;
        canEncode(arg0: string): boolean;
    }
    type CharsetEncoder_ = CharsetEncoder;
    class TradeBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The villager the item was purchased from.
        */
        setVillager(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * The villager the item was purchased from.
        */
        setVillagerByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * The villager the item was purchased from.
        */
        setVillagerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The villager the item was purchased from.
        */
        set villager(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The villager the item was purchased from.
        */
        set villagerByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The villager the item was purchased from.
        */
        set villagerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The item that was purchased.
         * 
         * The 'count' tag checks the count from one trade, not multiple.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type TradeBuilder_ = TradeBuilder;
    class SimpleFoiledItem extends Internal.Item {
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
    type SimpleFoiledItem_ = SimpleFoiledItem;
    interface ServerPlayNetworkHandlerAccessor {
        abstract getConnection(): Internal.Connection;
        get connection(): Internal.Connection
        (): Internal.Connection_;
    }
    type ServerPlayNetworkHandlerAccessor_ = ServerPlayNetworkHandlerAccessor;
    interface MinMaxBounds$BoundsFactory <T extends number, R extends Internal.MinMaxBounds<T>> {
        abstract create(arg0: T, arg1: T): R;
        (arg0: T, arg1: T): R;
    }
    type MinMaxBounds$BoundsFactory_<T extends number, R extends Internal.MinMaxBounds<T>> = MinMaxBounds$BoundsFactory<T, R>;
    class MagicData {
        constructor()
        constructor(arg0: Internal.ServerPlayer_)
        constructor(arg0: boolean)
        setMana(arg0: number): void;
        getCastSource(): Internal.CastSource;
        static getPlayerMagicData(arg0: Internal.LivingEntity_): Internal.MagicData;
        getSyncedData(): Internal.SyncedSpellData;
        getMana(): number;
        getPlayerRecasts(): Internal.PlayerRecasts;
        setAdditionalCastData(arg0: Internal.ICastData_): void;
        isCasting(): boolean;
        setServerPlayer(arg0: Internal.ServerPlayer_): void;
        setSyncedData(arg0: Internal.SyncedSpellData_): void;
        markPoisoned(): void;
        getCastDurationRemaining(): number;
        initiateCast(arg0: Internal.AbstractSpell_, arg1: number, arg2: number, arg3: Internal.CastSource_, arg4: string): void;
        getCastingSpellLevel(): number;
        setPlayerRecasts(arg0: Internal.PlayerRecasts_): void;
        getPlayerCastingItem(): Internal.ItemStack;
        loadNBTData(arg0: Internal.CompoundTag_): void;
        getCastingSpell(): SpellData;
        getCastDuration(): number;
        popMarkedPoison(): boolean;
        getCastingSpellId(): string;
        getCastCompletionPercent(): number;
        getPlayerCooldowns(): Internal.PlayerCooldowns;
        setPlayerCastingItem(arg0: Internal.ItemStack_): void;
        handleCastDuration(): void;
        addMana(arg0: number): void;
        saveNBTData(arg0: Internal.CompoundTag_): void;
        getAdditionalCastData(): Internal.ICastData;
        getCastType(): CastType;
        getCastingEquipmentSlot(): string;
        resetAdditionalCastData(): void;
        resetCastingState(): void;
        set mana(arg0: number)
        get castSource(): Internal.CastSource
        get syncedData(): Internal.SyncedSpellData
        get mana(): number
        get playerRecasts(): Internal.PlayerRecasts
        set additionalCastData(arg0: Internal.ICastData_)
        get casting(): boolean
        set serverPlayer(arg0: Internal.ServerPlayer_)
        set syncedData(arg0: Internal.SyncedSpellData_)
        get castDurationRemaining(): number
        get castingSpellLevel(): number
        set playerRecasts(arg0: Internal.PlayerRecasts_)
        get playerCastingItem(): Internal.ItemStack
        get castingSpell(): SpellData
        get castDuration(): number
        get castingSpellId(): string
        get castCompletionPercent(): number
        get playerCooldowns(): Internal.PlayerCooldowns
        set playerCastingItem(arg0: Internal.ItemStack_)
        get additionalCastData(): Internal.ICastData
        get castType(): CastType
        get castingEquipmentSlot(): string
        static readonly MANA: "mana";
        static readonly RECASTS: "recasts";
        static readonly COOLDOWNS: "cooldowns";
    }
    type MagicData_ = MagicData;
    class ClientboundSetScorePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ServerScoreboard$Method_, arg1: string, arg2: string, arg3: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getOwner(): string;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getScore(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getObjectiveName(): string;
        getMethod(): Internal.ServerScoreboard$Method;
        get owner(): string
        get score(): number
        get skippable(): boolean
        get objectiveName(): string
        get method(): Internal.ServerScoreboard$Method
    }
    type ClientboundSetScorePacket_ = ClientboundSetScorePacket;
    interface ColorResolver {
        abstract getColor(arg0: Internal.Biome_, arg1: number, arg2: number): number;
        (arg0: Internal.Biome, arg1: number, arg2: number): number;
    }
    type ColorResolver_ = ColorResolver;
    interface IForgeBlockState extends Internal.FabricBlockState {
        getFlammability(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        onBlockExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        isPortalFrame(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getSoundType(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): SoundType;
        canRedstoneConnectTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        isBed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        getExpDrop(arg0: Internal.LevelReader_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: number, arg4: number): number;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        isConduitFrame(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): boolean;
        canHarvestBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Player_): boolean;
        setBedOccupied(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_, arg3: boolean): void;
        canBeHydrated(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: BlockPos_): boolean;
        isLadder(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Vec3d_): Internal.BlockState;
        shouldDisplayFluidOverlay(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getToolModifiedState(arg0: Internal.UseOnContext_, arg1: Internal.ToolAction_, arg2: boolean): Internal.BlockState;
        getBedDirection(arg0: Internal.LevelReader_, arg1: BlockPos_): Internal.Direction;
        canSustainPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.IPlantable_): boolean;
        isSlimeBlock(): boolean;
        getBeaconColorMultiplier(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): number[];
        canStickTo(arg0: Internal.BlockState_): boolean;
        addLandingEffects(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: number): boolean;
        isFlammable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        shouldCheckWeakPower(arg0: Internal.SignalGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        isFertile(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.LivingEntity_): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        canDropFromExplosion(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): boolean;
        supportsExternalFaceHiding(): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_): Internal.BlockPathTypes;
        isScaffolding(arg0: Internal.LivingEntity_): boolean;
        getAppearance(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockState_, arg4: BlockPos_): Internal.BlockState;
        rotate(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BlockState;
        getEnchantPowerBonus(arg0: Internal.LevelReader_, arg1: BlockPos_): number;
        onNeighborChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): void;
        isValidSpawn(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.SpawnPlacements$Type_, arg3: Internal.EntityType_<any>): boolean;
        isBurning(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canEntityDestroy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getRespawnPosition(arg0: Internal.EntityType_<any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: number, arg4: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getWeakChanges(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        onTreeGrow(arg0: Internal.LevelReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        getLightEmission(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        isFireSource(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getFriction(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): number;
        isStickyBlock(): boolean;
        onDestroyedByPlayer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Player_, arg3: boolean, arg4: Internal.FluidState_): boolean;
        getCloneItemStack(arg0: Internal.HitResult_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): Internal.ItemStack;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        getFireSpreadSpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        get slimeBlock(): boolean
        get stickyBlock(): boolean
    }
    type IForgeBlockState_ = IForgeBlockState;
    interface ChannelHandlerContext extends Internal.ChannelOutboundInvoker, io.netty.util.AttributeMap, Internal.ChannelInboundInvoker {
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_, arg2: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract pipeline(): Internal.ChannelPipeline;
        abstract deregister(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract fireChannelReadComplete(): this;
        abstract executor(): Internal.EventExecutor;
        /**
         * @deprecated
        */
        abstract attr<T>(arg0: Internal.AttributeKey_<T>): io.netty.util.Attribute<T>;
        abstract write(arg0: any): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any): Internal.ChannelFuture;
        abstract disconnect(): Internal.ChannelFuture;
        abstract isRemoved(): boolean;
        abstract close(): Internal.ChannelFuture;
        abstract write(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract deregister(): Internal.ChannelFuture;
        abstract fireChannelRegistered(): this;
        abstract fireChannelInactive(): this;
        abstract disconnect(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract read(): this;
        abstract handler(): Internal.ChannelHandler;
        abstract newFailedFuture(arg0: Internal.Throwable_): Internal.ChannelFuture;
        abstract alloc(): Internal.ByteBufAllocator;
        abstract newSucceededFuture(): Internal.ChannelFuture;
        abstract close(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract fireExceptionCaught(arg0: Internal.Throwable_): this;
        abstract newProgressivePromise(): Internal.ChannelProgressivePromise;
        abstract fireChannelUnregistered(): this;
        abstract flush(): this;
        abstract channel(): io.netty.channel.Channel;
        abstract name(): string;
        abstract bind(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract bind(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract fireChannelRead(arg0: any): this;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract fireUserEventTriggered(arg0: any): this;
        /**
         * @deprecated
        */
        abstract hasAttr<T>(arg0: Internal.AttributeKey_<T>): boolean;
        abstract fireChannelWritabilityChanged(): this;
        abstract voidPromise(): Internal.ChannelPromise;
        abstract fireChannelActive(): this;
        abstract newPromise(): Internal.ChannelPromise;
        get removed(): boolean
    }
    type ChannelHandlerContext_ = ChannelHandlerContext;
    class TrunkVineDecorator extends Internal.TreeDecorator {
        constructor()
        static readonly CODEC: Internal.Codec<Internal.TrunkVineDecorator>;
        static readonly INSTANCE: Internal.TrunkVineDecorator;
    }
    type TrunkVineDecorator_ = TrunkVineDecorator;
    interface Short2BooleanMap extends Internal.Short2BooleanFunction, Internal.Map<number, boolean> {
        apply(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        replaceAll(arg0: Internal.BiFunction_<number, boolean, boolean>): void;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        replace(arg0: number, arg1: boolean): boolean;
        remove(arg0: number, arg1: boolean): boolean;
        computeIfAbsentNullable(arg0: number, arg1: Internal.IntFunction_<boolean>): boolean;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Short2ByteFunction;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, boolean, boolean>): boolean;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2BooleanFunction;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, boolean, boolean>): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        keySet(): Internal.Set<any>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, boolean>>;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, boolean>): boolean;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2BooleanFunction;
        replace(arg0: number, arg1: boolean, arg2: boolean): boolean;
        merge(arg0: number, arg1: boolean, arg2: Internal.BiFunction_<boolean, boolean, boolean>): boolean;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2BooleanFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Short2DoubleFunction;
        abstract get(arg0: number): boolean;
        merge(arg0: number, arg1: boolean, arg2: Internal.BiFunction_<boolean, boolean, boolean>): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        abstract values(): Internal.BooleanCollection;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2BooleanFunction<T>;
        abstract containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Short2ShortFunction;
        compute(arg0: number, arg1: Internal.BiFunction_<number, boolean, boolean>): boolean;
        replace(arg0: number, arg1: boolean, arg2: boolean): boolean;
        forEach(arg0: Internal.BiConsumer_<number, boolean>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Short2BooleanFunction_): boolean;
        abstract putAll(arg0: Internal.Map_<number, boolean>): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2BooleanFunction;
        composeShort(arg0: Internal.Short2ShortFunction_): Internal.Short2BooleanFunction;
        identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: boolean): void;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Short2CharFunction;
        computeIfAbsent(arg0: number, arg1: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        negate(): Internal.IntPredicate;
        abstract containsValue(arg0: boolean): boolean;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        replace(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2BooleanFunction<T>;
        putIfAbsent(arg0: number, arg1: boolean): boolean;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Short2LongFunction;
        abstract defaultReturnValue(): boolean;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.Short2BooleanFunction_): boolean;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2BooleanFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2BooleanFunction;
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, boolean, boolean>): boolean;
        put(arg0: number, arg1: boolean): boolean;
        putIfAbsent(arg0: number, arg1: boolean): boolean;
        abstract size(): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Short2FloatFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Short2IntFunction;
        abstract short2BooleanEntrySet(): Internal.ObjectSet<Internal.Short2BooleanMap$Entry>;
        get empty(): boolean
    }
    type Short2BooleanMap_ = Short2BooleanMap;
    interface PositionTracker {
        abstract isVisibleBy(arg0: Internal.LivingEntity_): boolean;
        abstract currentPosition(): Vec3d;
        abstract currentBlockPosition(): BlockPos;
    }
    type PositionTracker_ = PositionTracker;
    class AllayJSBuilder extends Internal.PathfinderMobBuilder<any> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type AllayJSBuilder_ = AllayJSBuilder;
    class SectionStorage <R> implements Internal.AutoCloseable {
        constructor(arg0: Internal.Path_, arg1: Internal.Function_<Internal.Runnable, Internal.Codec<R>>, arg2: Internal.Function_<Internal.Runnable, R>, arg3: Internal.DataFixer_, arg4: any_, arg5: boolean, arg6: Internal.RegistryAccess_, arg7: Internal.LevelHeightAccessor_)
        outsideStoredRange(arg0: number): boolean;
        get(arg0: number): Internal.Optional<R>;
        tick(arg0: Internal.BooleanSupplier_): void;
        onSectionLoad(arg0: number): void;
        flush(arg0: Internal.ChunkPos_): void;
        close(): void;
        getOrCreate(arg0: number): R;
        getOrLoad(arg0: number): Internal.Optional<R>;
        setDirty(arg0: number): void;
        hasWork(): boolean;
        set dirty(arg0: number)
        readonly levelHeightAccessor: Internal.LevelHeightAccessor;
    }
    type SectionStorage_<R> = SectionStorage<R>;
    class TextColor implements Internal.IColor, Internal.Color {
        constructor(arg0: number, arg1: string)
        constructor(arg0: number)
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        static fromRgb(arg0: number): Internal.TextColor;
        getRgbJS(): number;
        formatValue(): string;
        isAnimated(): boolean;
        getSerializeJS(): string;
        serialize(): string;
        static parseColor(arg0: string): Internal.TextColor;
        static fromLegacyFormat(arg0: Internal.ChatFormatting_): Internal.TextColor;
        getName(): string;
        createTextColorJS(): this;
        getValue(): number;
        getHexJS(): string;
        getFireworkColorJS(): number;
        get argbJS(): number
        get rgbJS(): number
        get animated(): boolean
        get serializeJS(): string
        get name(): string
        get value(): number
        get hexJS(): string
        get fireworkColorJS(): number
        readonly name: string;
        static readonly CODEC: Internal.Codec<Internal.TextColor>;
        static NAMED_COLORS: {"dark_red": Internal.TextColor, "green": Internal.TextColor, "dark_green": Internal.TextColor, "black": Internal.TextColor, "yellow": Internal.TextColor, "dark_blue": Internal.TextColor, "dark_purple": Internal.TextColor, "gold": Internal.TextColor, "red": Internal.TextColor, "aqua": Internal.TextColor, "rainbow": any, "gray": Internal.TextColor, "light_purple": Internal.TextColor, "blue": Internal.TextColor, "white": Internal.TextColor, "dark_aqua": Internal.TextColor, "dark_gray": Internal.TextColor};
    }
    type TextColor_ = TextColor;
    class RenderLevelStageEvent$Stage {
        static fromRenderType(arg0: Internal.RenderType_): Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_WEATHER: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_TRIPWIRE_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_ENTITIES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_CUTOUT_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_BLOCK_ENTITIES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_LEVEL: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_SOLID_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_TRANSLUCENT_BLOCKS: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_PARTICLES: Internal.RenderLevelStageEvent$Stage;
        static readonly AFTER_SKY: Internal.RenderLevelStageEvent$Stage;
    }
    type RenderLevelStageEvent$Stage_ = RenderLevelStageEvent$Stage;
    class CustomBossEvent extends Internal.ServerBossEvent {
        constructor(arg0: ResourceLocation_, arg1: Internal.Component_)
        getDisplayName(): Internal.Component;
        setValue(arg0: number): void;
        onPlayerConnect(arg0: Internal.ServerPlayer_): void;
        save(): Internal.CompoundTag;
        setPlayers(arg0: Internal.Collection_<Internal.ServerPlayer>): boolean;
        static load(arg0: Internal.CompoundTag_, arg1: ResourceLocation_): Internal.CustomBossEvent;
        addOfflinePlayer(arg0: Internal.UUID_): void;
        getMax(): number;
        getTextId(): ResourceLocation;
        getValue(): number;
        setMax(arg0: number): void;
        onPlayerDisconnect(arg0: Internal.ServerPlayer_): void;
        get displayName(): Internal.Component
        set value(arg0: number)
        set players(arg0: Internal.Collection_<Internal.ServerPlayer>)
        get max(): number
        get textId(): ResourceLocation
        get value(): number
        set max(arg0: number)
    }
    type CustomBossEvent_ = CustomBossEvent;
    class ProbabilityFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly probability: number;
        static readonly CODEC: Internal.Codec<Internal.ProbabilityFeatureConfiguration>;
    }
    type ProbabilityFeatureConfiguration_ = ProbabilityFeatureConfiguration;
    interface Float2LongFunction extends Internal.DoubleToLongFunction, it.unimi.dsi.fastutil.Function<number, number> {
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Float2ShortFunction;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2LongFunction;
        put(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2LongFunction;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Float2ByteFunction;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2LongFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Float2DoubleFunction;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        containsKey(arg0: number): boolean;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2LongFunction;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Float2CharFunction;
        defaultReturnValue(): number;
        getOrDefault(arg0: number, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2LongFunction<T>;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        apply(arg0: number): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Float2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Float2FloatFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        size(): number;
        remove(arg0: number): number;
        abstract get(arg0: number): number;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        (arg0: number): number;
    }
    type Float2LongFunction_ = Float2LongFunction;
    class ContextUtils$EntityProjectileWeaponContext {
        constructor(projectileWeapon: Internal.ProjectileWeaponItem_, entity: Internal.LivingEntity_)
        /**
         * The projectile weapon being used
        */
        readonly projectileWeapon: Internal.ProjectileWeaponItem;
        /**
         * The living entity using the projectile weapon
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$EntityProjectileWeaponContext_ = ContextUtils$EntityProjectileWeaponContext;
    interface Endec$DecoderWithError <T> {
        abstract decode(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Deserializer_<any>, arg2: Internal.Exception_): T;
        (arg0: io.wispforest.endec.SerializationContext, arg1: Internal.Deserializer<any>, arg2: Internal.Exception): T;
    }
    type Endec$DecoderWithError_<T> = Endec$DecoderWithError<T>;
    class Run extends Internal.Record {
        constructor(text: string, style: Internal.Style_, font: Internal.ConfiguredCaxtonFont_)
        static splitIntoRunsFormatted(text: string, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, baseStyle: Internal.Style_, validateAdvance: boolean): Internal.List<Internal.Run>;
        static splitIntoRuns(text: Internal.FormattedCharSequence_, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, validateAdvance: boolean): Internal.List<Internal.Run>;
        static splitIntoRunsForwards(text: string, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, validateAdvance: boolean): Internal.List<Internal.Run>;
        static splitIntoRunsFormatted(text: Internal.FormattedText_, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, validateAdvance: boolean): Internal.List<Internal.Run>;
        static splitIntoRunsForwards(text: Internal.FormattedText_, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, validateAdvance: boolean): Internal.List<Internal.Run>;
        style(): Internal.Style;
        text(): string;
        static splitIntoRunsFormatted(text: string, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, validateAdvance: boolean, formattingCodeStarts: Internal.FcIndexConverter_): Internal.List<Internal.Run>;
        font(): Internal.ConfiguredCaxtonFont;
        static splitIntoRunsFormatted(text: string, fonts: Internal.Function_<ResourceLocation, Internal.FontSet>, style: Internal.Style_, validateAdvance: boolean): Internal.List<Internal.Run>;
    }
    type Run_ = Run;
    class DropperBlockEntity extends Internal.DispenserBlockEntity {
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
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
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
    type DropperBlockEntity_ = DropperBlockEntity;
    class DetonationEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type DetonationEffect_ = DetonationEffect;
    /**
     * Invoked when a player crafts an item.
    */
    class ItemCraftedEventJS extends Internal.PlayerEventJS {
        constructor(player: Player_, crafted: Internal.ItemStack_, container: Internal.Container_)
        /**
         * The inventory that the item was crafted in.
        */
        getInventory(): Internal.InventoryKJS;
        /**
         * The player that crafted the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was crafted.
        */
        getItem(): Internal.ItemStack;
        /**
         * The inventory that the item was crafted in.
        */
        get inventory(): Internal.InventoryKJS
        /**
         * The player that crafted the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was crafted.
        */
        get item(): Internal.ItemStack
    }
    type ItemCraftedEventJS_ = ItemCraftedEventJS;
    class TagPredicate <T> {
        constructor(arg0: Internal.TagKey_<T>, arg1: boolean)
        serializeToJson(): Internal.JsonElement;
        static isNot<T>(arg0: Internal.TagKey_<T>): Internal.TagPredicate<T>;
        static fromJson<T>(arg0: Internal.JsonElement_, arg1: Internal.ResourceKey_<Internal.Registry<T>>): Internal.TagPredicate<T>;
        static is<T>(arg0: Internal.TagKey_<T>): Internal.TagPredicate<T>;
        matches(arg0: Internal.Holder_<T>): boolean;
    }
    type TagPredicate_<T> = TagPredicate<T>;
    class UidContext extends Internal.Enum<Internal.UidContext> {
        static valueOf(arg0: string): Internal.UidContext;
        static values(): Internal.UidContext[];
        static readonly Ingredient: Internal.UidContext;
        static readonly Recipe: Internal.UidContext;
    }
    type UidContext_ = UidContext | "ingredient" | "recipe";
    interface TypeWrapperFactory$Simple <T> extends Internal.TypeWrapperFactory<T> {
        wrap(cx: Internal.Context_, o: any): T;
        abstract wrapSimple(arg0: any): T;
        (arg0: any): T;
    }
    type TypeWrapperFactory$Simple_<T> = TypeWrapperFactory$Simple<T>;
    class Vex extends Internal.Monster implements Internal.TraceableEntity {
        constructor(arg0: Internal.EntityType_<Internal.Vex>, arg1: Internal.Level_)
        static m_219137_(arg0: Internal.Vex_): Internal.RandomSource;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        static m_219146_(arg0: Internal.Vex_): Internal.RandomSource;
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
        setBoundOrigin(arg0: BlockPos_): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        getBoundOrigin(): BlockPos;
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
        static m_34035_(arg0: Internal.Vex_): Internal.MoveControl;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        static m_34012_(arg0: Internal.Vex_): Internal.MoveControl;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        static m_219144_(arg0: Internal.Vex_): Internal.RandomSource;
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
        setLimitedLife(arg0: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        setIsCharging(arg0: boolean): void;
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
        static m_219142_(arg0: Internal.Vex_): Internal.RandomSource;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        getOwner(): Internal.Mob;
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
        static m_34016_(arg0: Internal.Vex_): Internal.MoveControl;
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
        static m_219140_(arg0: Internal.Vex_): Internal.RandomSource;
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
        setOwner(arg0: Internal.Mob_): void;
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
        set boundOrigin(arg0: BlockPos_)
        get living(): boolean
        get boundOrigin(): BlockPos
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
        set limitedLife(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set isCharging(arg0: boolean)
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get owner(): Internal.Mob
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
        set owner(arg0: Internal.Mob_)
        set headArmorItem(item: Internal.ItemStack_)
        static readonly DATA_FLAGS_ID: Internal.EntityDataAccessor<number>;
        static readonly TICKS_PER_FLAP: 4;
        static readonly FLAP_DEGREES_PER_TICK: 45.836624;
        owner: Internal.Mob;
    }
    type Vex_ = Vex;
    class DualNoiseProvider extends Internal.NoiseProvider {
        constructor(arg0: Internal.InclusiveRange_<number>, arg1: Internal.NormalNoise$NoiseParameters_, arg2: number, arg3: number, arg4: Internal.NormalNoise$NoiseParameters_, arg5: number, arg6: Internal.List_<Internal.BlockState>)
        getSlowNoiseValue(arg0: BlockPos_): number;
        static readonly CODEC: Internal.Codec<Internal.DualNoiseProvider>;
    }
    type DualNoiseProvider_ = DualNoiseProvider;
    class EntityJoinLevelEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: boolean)
        constructor(arg0: Internal.Entity_, arg1: Internal.Level_)
        getLevel(): Internal.Level;
        loadedFromDisk(): boolean;
        get level(): Internal.Level
    }
    type EntityJoinLevelEvent_ = EntityJoinLevelEvent;
    interface CustomCondition$Test {
        abstract test(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.LycheeContext_, arg2: number): number;
        (arg0: Internal.ILycheeRecipe<any>, arg1: Internal.LycheeContext, arg2: number): number;
    }
    type CustomCondition$Test_ = CustomCondition$Test;
    interface Watchable {
        abstract register(arg0: Internal.WatchService_, ...arg1: Internal.WatchEvent$Kind_<any>[]): Internal.WatchKey;
        abstract register(arg0: Internal.WatchService_, arg1: Internal.WatchEvent$Kind_<any>[], ...arg2: any_[]): Internal.WatchKey;
    }
    type Watchable_ = Watchable;
    interface IRecipeLayoutDrawable <R> {
        abstract getSlotUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.RecipeSlotUnderMouse>;
        abstract setPosition(arg0: number, arg1: number): void;
        abstract drawOverlays(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract drawRecipe(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        getItemStackUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.ItemStack>;
        abstract tick(): void;
        abstract getRectWithBorder(): Internal.Rect2i;
        abstract getRecipeCategory(): Internal.IRecipeCategory<R>;
        abstract getRecipe(): R;
        /**
         * @deprecated
        */
        abstract getRecipeSlotUnderMouse(arg0: number, arg1: number): Internal.Optional<Internal.IRecipeSlotDrawable>;
        abstract getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract getRecipeTransferButtonArea(): Internal.Rect2i;
        abstract getRecipeBookmarkButtonArea(): Internal.Rect2i;
        abstract getRecipeSlotsView(): Internal.IRecipeSlotsView;
        abstract getRect(): Internal.Rect2i;
        abstract isMouseOver(arg0: number, arg1: number): boolean;
        abstract getInputHandler(): Internal.IJeiInputHandler;
        get rectWithBorder(): Internal.Rect2i
        get recipeCategory(): Internal.IRecipeCategory<R>
        get recipe(): R
        get recipeTransferButtonArea(): Internal.Rect2i
        get recipeBookmarkButtonArea(): Internal.Rect2i
        get recipeSlotsView(): Internal.IRecipeSlotsView
        get rect(): Internal.Rect2i
        get inputHandler(): Internal.IJeiInputHandler
    }
    type IRecipeLayoutDrawable_<R> = IRecipeLayoutDrawable<R>;
    class Cat extends Internal.TamableAnimal implements Internal.VariantHolder<Internal.CatVariant> {
        constructor(arg0: Internal.EntityType_<Internal.Cat>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getLieDownAmount(arg0: number): number;
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
        isRelaxStateOne(): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        setCollarColor(arg0: Internal.DyeColor_): void;
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
        setVariant(arg0: Internal.CatVariant_): void;
        getVariant(): any;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
        getCollarColor(): Internal.DyeColor;
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
        setRelaxStateOne(arg0: boolean): void;
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
        hiss(): void;
        getRelaxStateOneAmount(arg0: number): number;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isLying(): boolean;
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
        getResourceLocation(): ResourceLocation;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getLieDownAmountTail(arg0: number): number;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        setLying(arg0: boolean): void;
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
        get relaxStateOne(): boolean
        get displayName(): Internal.Component
        set collarColor(arg0: Internal.DyeColor_)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        set variant(arg0: Internal.CatVariant_)
        get variant(): any
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
        get collarColor(): Internal.DyeColor
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
        set relaxStateOne(arg0: boolean)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get lying(): boolean
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        get resourceLocation(): ResourceLocation
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        set variant(arg0: any)
        set lying(arg0: boolean)
        static readonly TEMPT_SPEED_MOD: 0.6;
        static readonly SPRINT_SPEED_MOD: 1.33;
        static readonly WALK_SPEED_MOD: 0.8;
    }
    type Cat_ = Cat;
    class ShapelessKubeJSRecipe$SerializerKJS implements Internal.RecipeSerializer<Internal.ShapelessKubeJSRecipe> {
        constructor()
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapelessKubeJSRecipe;
        fromNetwork(id: ResourceLocation_, buf: Internal.FriendlyByteBuf_): Internal.ShapelessKubeJSRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toNetwork(buf: Internal.FriendlyByteBuf_, r: Internal.ShapelessKubeJSRecipe_): void;
        fromJson(id: ResourceLocation_, json: Internal.JsonObject_): Internal.ShapelessKubeJSRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type ShapelessKubeJSRecipe$SerializerKJS_ = ShapelessKubeJSRecipe$SerializerKJS;
    interface TooltipComponent {
    }
    type TooltipComponent_ = TooltipComponent;
    class FullChunkStatus extends Internal.Enum<Internal.FullChunkStatus> {
        static valueOf(arg0: string): Internal.FullChunkStatus;
        isOrAfter(arg0: Internal.FullChunkStatus_): boolean;
        static values(): Internal.FullChunkStatus[];
        static readonly BLOCK_TICKING: Internal.FullChunkStatus;
        static readonly INACCESSIBLE: Internal.FullChunkStatus;
        static readonly ENTITY_TICKING: Internal.FullChunkStatus;
        static readonly FULL: Internal.FullChunkStatus;
    }
    type FullChunkStatus_ = "inaccessible" | "entity_ticking" | "full" | FullChunkStatus | "block_ticking";
    interface BlockBuilderProvider {
        getBlockBuilder(): Internal.BlockBuilder;
        get blockBuilder(): Internal.BlockBuilder
    }
    type BlockBuilderProvider_ = BlockBuilderProvider;
    class EnderpearlItem extends Internal.Item {
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
    type EnderpearlItem_ = EnderpearlItem;
    class LogicalSide extends Internal.Enum<Internal.LogicalSide> {
        isClient(): boolean;
        isServer(): boolean;
        static valueOf(arg0: string): Internal.LogicalSide;
        static values(): Internal.LogicalSide[];
        get client(): boolean
        get server(): boolean
        static readonly CLIENT: Internal.LogicalSide;
        static readonly SERVER: Internal.LogicalSide;
    }
    type LogicalSide_ = "server" | "client" | LogicalSide;
    class ExplosionDamageCalculator {
        constructor()
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_): Internal.Optional<number>;
    }
    type ExplosionDamageCalculator_ = ExplosionDamageCalculator;
    class WeighedSoundEvents implements Internal.Weighted<Internal.Sound> {
        constructor(arg0: ResourceLocation_, arg1: string)
        getSound(arg0: Internal.RandomSource_): any;
        addSound(arg0: Internal.Weighted_<Internal.Sound>): void;
        getWeight(): number;
        preloadIfRequired(arg0: Internal.SoundEngine_): void;
        getSubtitle(): Internal.Component;
        get weight(): number
        get subtitle(): Internal.Component
    }
    type WeighedSoundEvents_ = WeighedSoundEvents;
    abstract class WaterBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
    }
    type WaterBlock_ = WaterBlock;
    interface AnnotatedType extends Internal.AnnotatedElement {
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        getAnnotatedOwnerType(): this;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        abstract getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        abstract getAnnotations(): Internal.Annotation[];
        abstract getDeclaredAnnotations(): Internal.Annotation[];
        abstract getType(): Internal.Type;
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        get annotatedOwnerType(): Internal.AnnotatedType
        get annotations(): Internal.Annotation[]
        get declaredAnnotations(): Internal.Annotation[]
        get type(): Internal.Type
    }
    type AnnotatedType_ = AnnotatedType;
    class StainedGlassBlock extends Internal.AbstractGlassBlock implements Internal.BeaconBeamBlock {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.BlockBehaviour$Properties_)
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
    type StainedGlassBlock_ = StainedGlassBlock;
    abstract class AbstractObject2ObjectFunction <K, V> implements Internal.Object2ObjectFunction<K, V>, Internal.Serializable {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        size(): number;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        clear(): void;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
    }
    type AbstractObject2ObjectFunction_<K, V> = AbstractObject2ObjectFunction<K, V>;
    class WrapFactory {
        constructor()
        isJavaPrimitiveWrap(): boolean;
        setJavaPrimitiveWrap(value: boolean): void;
        wrap(cx: Internal.Context_, scope: Internal.Scriptable_, obj: any, staticType: typeof any): any;
        wrapJavaClass(cx: Internal.Context_, scope: Internal.Scriptable_, javaClass: typeof any): Internal.Scriptable;
        wrapAsJavaObject(cx: Internal.Context_, scope: Internal.Scriptable_, javaObject: any, staticType: typeof any): Internal.Scriptable;
        wrapNewObject(scope: Internal.Scriptable_, obj: any, cx: Internal.Context_): Internal.Scriptable;
        get javaPrimitiveWrap(): boolean
        set javaPrimitiveWrap(value: boolean)
    }
    type WrapFactory_ = WrapFactory;
    class ConditionedRestrictArmorPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
    }
    type ConditionedRestrictArmorPower_ = ConditionedRestrictArmorPower;
    abstract class RectangularShape implements Internal.Shape, Internal.Cloneable {
        clone(): any;
        abstract contains(arg0: number, arg1: number): boolean;
        getBounds(): Internal.Rectangle;
        getMaxX(): number;
        getMaxY(): number;
        intersects(arg0: Internal.Rectangle2D_): boolean;
        getCenterY(): number;
        abstract isEmpty(): boolean;
        getCenterX(): number;
        setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
        abstract contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        abstract getWidth(): number;
        abstract intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setFrame(arg0: Internal.Rectangle2D_): void;
        abstract getBounds2D(): Internal.Rectangle2D;
        contains(arg0: Internal.Rectangle2D_): boolean;
        abstract getHeight(): number;
        getMinX(): number;
        getMinY(): number;
        setFrameFromCenter(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        abstract setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
        abstract getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
        contains(arg0: Internal.Point2D_): boolean;
        abstract getX(): number;
        abstract getY(): number;
        setFrame(arg0: Internal.Point2D_, arg1: Internal.Dimension2D_): void;
        getFrame(): Internal.Rectangle2D;
        setFrameFromDiagonal(arg0: Internal.Point2D_, arg1: Internal.Point2D_): void;
        get bounds(): Internal.Rectangle
        get maxX(): number
        get maxY(): number
        get centerY(): number
        get empty(): boolean
        get centerX(): number
        get width(): number
        set frame(arg0: Internal.Rectangle2D_)
        get bounds2D(): Internal.Rectangle2D
        get height(): number
        get minX(): number
        get minY(): number
        get x(): number
        get y(): number
        get frame(): Internal.Rectangle2D
    }
    type RectangularShape_ = RectangularShape;
    class ZombieHorseFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor()
    }
    type ZombieHorseFeature_ = ZombieHorseFeature;
    interface VillagerTrades$ItemListing {
        abstract getOffer(arg0: Internal.Entity_, arg1: Internal.RandomSource_): Internal.MerchantOffer;
        (arg0: Internal.Entity, arg1: Internal.RandomSource): Internal.MerchantOffer_;
    }
    type VillagerTrades$ItemListing_ = VillagerTrades$ItemListing;
    class ChaosSpawnerBarrierEdgeBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly BARRIER_EDGE: Internal.EnumProperty<Internal.BarrierEdges>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type ChaosSpawnerBarrierEdgeBlock_ = ChaosSpawnerBarrierEdgeBlock;
    class TrimPattern extends Internal.Record {
        constructor(arg0: ResourceLocation_, arg1: Internal.Holder_<Internal.Item>, arg2: Internal.Component_)
        description(): Internal.Component;
        assetId(): ResourceLocation;
        copyWithStyle(arg0: Internal.Holder_<Internal.TrimMaterial>): Internal.Component;
        templateItem(): Internal.Holder<Internal.Item>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.TrimPattern>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.TrimPattern>;
    }
    type TrimPattern_ = Special.TrimPattern | TrimPattern;
    class BrewingStandFeature extends Internal.Feature<any> {
        constructor(arg0: Internal.Codec_<any>)
    }
    type BrewingStandFeature_ = BrewingStandFeature;
    class OverchargedRedstoneBlock extends Internal.Block {
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
    type OverchargedRedstoneBlock_ = OverchargedRedstoneBlock;
    interface Policy$VarExpiration <K, V> {
        abstract getExpiresAfter(arg0: K, arg1: Internal.TimeUnit_): Internal.OptionalLong;
        getExpiresAfter(arg0: K): Internal.Optional<Duration>;
        abstract put(arg0: K, arg1: V, arg2: number, arg3: Internal.TimeUnit_): V;
        oldest<T>(arg0: Internal.Function_<Internal.Stream<Internal.Policy$CacheEntry<K, V>>, T>): T;
        put(arg0: K, arg1: V, arg2: Duration_): V;
        abstract oldest(arg0: number): Internal.Map<K, V>;
        abstract youngest(arg0: number): Internal.Map<K, V>;
        putIfAbsent(arg0: K, arg1: V, arg2: Duration_): V;
        youngest<T>(arg0: Internal.Function_<Internal.Stream<Internal.Policy$CacheEntry<K, V>>, T>): T;
        abstract putIfAbsent(arg0: K, arg1: V, arg2: number, arg3: Internal.TimeUnit_): V;
        abstract setExpiresAfter(arg0: K, arg1: number, arg2: Internal.TimeUnit_): void;
        setExpiresAfter(arg0: K, arg1: Duration_): void;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>, arg2: Duration_): V;
    }
    type Policy$VarExpiration_<K, V> = Policy$VarExpiration<K, V>;
    class ChorusPlantBlock extends Internal.PipeBlock {
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
        getStateForPlacement(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type ChorusPlantBlock_ = ChorusPlantBlock;
    interface IoSupplier <T> {
        create(arg0: Internal.Path_): Internal.IoSupplier<Internal.InputStream>;
        abstract get(): T;
        create(arg0: Internal.ZipFile_, arg1: Internal.ZipEntry_): Internal.IoSupplier<Internal.InputStream>;
        (): T;
    }
    type IoSupplier_<T> = IoSupplier<T>;
    class AttributeCreationEventJS extends Internal.EventJS {
        constructor(event: Internal.EntityAttributeCreationEvent_)
        /**
         * Returns a list of all attributes the given entity type has by default
        */
        getAttributes(entityType: Internal.EntityType_<Internal.LivingEntity>): Internal.List<Internal.Attribute>;
        /**
         * Returns a list of all entity types available in the attribute map
        */
        getAllTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>;
        /**
         * Modifies the given entity type's default attributes
         * @param entityType The entity type whose default attributes are to be modified
         * @param attributes A consumer for modifying the default attributes and their values
        */
        create(entityType: Internal.EntityType_<Internal.LivingEntity>, attributes: Internal.Consumer_<Internal.AttributeCreationEventJS$AttributeCreationHelper>): void;
        getMap(): Internal.Map<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier>;
        /**
         * Returns a list of all entity types available in the attribute map
        */
        get allTypes(): Internal.List<Internal.EntityType<Internal.LivingEntity>>
        get map(): Internal.Map<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier>
    }
    type AttributeCreationEventJS_ = AttributeCreationEventJS;
    class BlobFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: number)
        static blobParts<P extends Internal.BlobFoliagePlacer>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<P>, Internal.IntProvider, Internal.IntProvider, number>;
        readonly height: number;
        static readonly CODEC: Internal.Codec<Internal.BlobFoliagePlacer>;
    }
    type BlobFoliagePlacer_ = BlobFoliagePlacer;
    class TagKey <T> extends Internal.Record {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_)
        static create<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: ResourceLocation_): Internal.TagKey<T>;
        location(): ResourceLocation;
        static codec<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Codec<Internal.TagKey<T>>;
        registry(): Internal.ResourceKey<Internal.Registry<T>>;
        cast<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.TagKey<E>>;
        static hashedCodec<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Codec<Internal.TagKey<T>>;
        isFor(arg0: Internal.ResourceKey_<Internal.Registry<any>>): boolean;
    }
    type TagKey_<T> = TagKey<T>;
    class ScreenEvent$KeyPressed$Pre extends Internal.ScreenEvent$KeyPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$KeyPressed$Pre_ = ScreenEvent$KeyPressed$Pre;
    interface IntIterator extends Internal.PrimitiveIterator$OfInt {
        forEachRemaining(arg0: any): void;
        remove(): void;
        skip(arg0: number): number;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract nextInt(): number;
        /**
         * @deprecated
        */
        next(): number;
    }
    type IntIterator_ = IntIterator;
    interface ToIntBiFunction <T, U> {
        abstract applyAsInt(arg0: T, arg1: U): number;
        (arg0: T, arg1: U): number;
    }
    type ToIntBiFunction_<T, U> = ToIntBiFunction<T, U>;
    class AxolotlAttackablesSensor extends Internal.NearestVisibleLivingEntitySensor {
        constructor()
        static readonly TARGET_DETECTION_DISTANCE: 8.0;
    }
    type AxolotlAttackablesSensor_ = AxolotlAttackablesSensor;
    class PlayerDestroyItemEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.InteractionHand_)
        getEntity(): Internal.LivingEntity;
        getOriginal(): Internal.ItemStack;
        getHand(): Internal.InteractionHand;
        get entity(): Internal.LivingEntity
        get original(): Internal.ItemStack
        get hand(): Internal.InteractionHand
    }
    type PlayerDestroyItemEvent_ = PlayerDestroyItemEvent;
    interface FrostmintFreezableAccessor {
        abstract isFreezingFromFrostmint(): boolean;
        abstract setFrostmintFreezing(arg0: boolean): void;
        get freezingFromFrostmint(): boolean
        set frostmintFreezing(arg0: boolean)
    }
    type FrostmintFreezableAccessor_ = FrostmintFreezableAccessor;
    class SurfaceRelativeThresholdFilter extends Internal.PlacementFilter {
        static of(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): Internal.SurfaceRelativeThresholdFilter;
        static readonly CODEC: Internal.Codec<Internal.SurfaceRelativeThresholdFilter>;
    }
    type SurfaceRelativeThresholdFilter_ = SurfaceRelativeThresholdFilter;
    class ContextUtils$EntityPlayerContext {
        constructor(player: Player_, entity: Internal.Entity_)
        /**
         * The player
        */
        readonly player: Player;
        /**
         * The entity
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EntityPlayerContext_ = ContextUtils$EntityPlayerContext;
    class ShulkerBoxBlockEntity$AnimationStatus extends Internal.Enum<Internal.ShulkerBoxBlockEntity$AnimationStatus> {
        static valueOf(arg0: string): Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static values(): Internal.ShulkerBoxBlockEntity$AnimationStatus[];
        static readonly OPENING: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly CLOSED: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly CLOSING: Internal.ShulkerBoxBlockEntity$AnimationStatus;
        static readonly OPENED: Internal.ShulkerBoxBlockEntity$AnimationStatus;
    }
    type ShulkerBoxBlockEntity$AnimationStatus_ = "opening" | ShulkerBoxBlockEntity$AnimationStatus | "closing" | "closed" | "opened";
    interface BlendingData$DensityConsumer {
        abstract consume(arg0: number, arg1: number, arg2: number, arg3: number): void;
        (arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
    type BlendingData$DensityConsumer_ = BlendingData$DensityConsumer;
    class ByteProcessor$IndexOfProcessor implements Internal.ByteProcessor {
        constructor(arg0: number)
        process(arg0: number): boolean;
    }
    type ByteProcessor$IndexOfProcessor_ = ByteProcessor$IndexOfProcessor;
    class MessageSignature$Packed extends Internal.Record {
        constructor(arg0: number, arg1: Internal.MessageSignature_)
        constructor(arg0: number)
        constructor(arg0: Internal.MessageSignature_)
        id(): number;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.MessageSignature$Packed;
        unpack(arg0: Internal.MessageSignatureCache_): Internal.Optional<Internal.MessageSignature>;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MessageSignature$Packed_): void;
        fullSignature(): Internal.MessageSignature;
        static readonly FULL_SIGNATURE: -1;
    }
    type MessageSignature$Packed_ = MessageSignature$Packed;
    class ConstantInt extends Internal.IntProvider {
        static of(arg0: number): Internal.ConstantInt;
        getValue(): number;
        get value(): number
        static readonly ZERO: Internal.ConstantInt;
        static readonly CODEC: Internal.Codec<Internal.ConstantInt>;
    }
    type ConstantInt_ = ConstantInt;
    interface IDrawableStatic extends Internal.IDrawable {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getWidth(): number;
        abstract getHeight(): number;
        draw(arg0: Internal.GuiGraphics_): void;
        get width(): number
        get height(): number
    }
    type IDrawableStatic_ = IDrawableStatic;
    class EndDragonFight$Data extends Internal.Record {
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: Internal.Optional_<Internal.UUID>, exitPortalLocation: Internal.Optional_<BlockPos>, gateways: Internal.Optional_<Internal.List<number>>)
        dragonUUID(): Internal.Optional<Internal.UUID>;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        exitPortalLocation(): Internal.Optional<BlockPos>;
        gateways(): Internal.Optional<Internal.List<number>>;
        needsStateScanning(): boolean;
        isRespawning(): boolean;
        get respawning(): boolean
        static readonly CODEC: Internal.Codec<Internal.EndDragonFight$Data>;
        static readonly DEFAULT: Internal.EndDragonFight$Data;
    }
    type EndDragonFight$Data_ = EndDragonFight$Data;
    class PowerActiveCondition extends Internal.EntityCondition<Internal.PowerReference> {
        constructor()
        check(arg0: Internal.PowerReference_, arg1: Internal.Entity_): boolean;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type PowerActiveCondition_ = PowerActiveCondition;
    interface AbstractWidgetInvoker {
        invokeRenderScrollingString(guiGraphics: Internal.GuiGraphics_, font: Internal.Font_, text: Internal.Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
    }
    type AbstractWidgetInvoker_ = AbstractWidgetInvoker;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongConsumer extends Internal.LongConsumer, Internal.Consumer<number> {
        andThen(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        andThen(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type LongConsumer_ = LongConsumer;
}
