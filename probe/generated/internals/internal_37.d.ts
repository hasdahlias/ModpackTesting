/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class RuleBasedBlockStateProvider extends Internal.Record {
        constructor(arg0: Internal.BlockStateProvider_, arg1: Internal.List_<Internal.RuleBasedBlockStateProvider$Rule>)
        getState(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.BlockState;
        static simple(arg0: Internal.Block_): Internal.RuleBasedBlockStateProvider;
        fallback(): Internal.BlockStateProvider;
        rules(): Internal.List<Internal.RuleBasedBlockStateProvider$Rule>;
        static simple(arg0: Internal.BlockStateProvider_): Internal.RuleBasedBlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider>;
    }
    type RuleBasedBlockStateProvider_ = RuleBasedBlockStateProvider;
    class MinecartTNT extends Internal.AbstractMinecart {
        constructor(arg0: Internal.EntityType_<Internal.MinecartTNT>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
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
        explode(arg0: number): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        shouldDoRailFunctions(): boolean;
        canRiderInteract(): boolean;
        shouldRiderSit(): boolean;
        explode(arg0: DamageSource_, arg1: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        primeFuse(): void;
        isPrimed(): boolean;
        getFuse(): number;
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
        get primed(): boolean
        get fuse(): number
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
    type MinecartTNT_ = MinecartTNT;
    interface AmbiguityConsumer <S> {
        abstract ambiguous(arg0: Internal.CommandNode_<S>, arg1: Internal.CommandNode_<S>, arg2: Internal.CommandNode_<S>, arg3: Internal.Collection_<string>): void;
        (arg0: Internal.CommandNode<S>, arg1: Internal.CommandNode<S>, arg2: Internal.CommandNode<S>, arg3: Internal.Collection<string>): void;
    }
    type AmbiguityConsumer_<S> = AmbiguityConsumer<S>;
    class EventLivingRenderer$SetupRotations extends Internal.EventLivingRenderer {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.EntityModel_<any>, arg2: Internal.PoseStack_, arg3: number, arg4: number)
        getBodyYRot(): number;
        get bodyYRot(): number
    }
    type EventLivingRenderer$SetupRotations_ = EventLivingRenderer$SetupRotations;
    abstract class StructurePoolElement {
        constructor(arg0: Internal.StructureTemplatePool$Projection_)
        abstract getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        abstract getType(): Internal.StructurePoolElementType<any>;
        abstract getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        abstract getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        getGroundLevelDelta(): number;
        abstract place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): this;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get type(): Internal.StructurePoolElementType<any>
        get groundLevelDelta(): number
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        get projection(): Internal.StructureTemplatePool$Projection
        static readonly CODEC: Internal.Codec<Internal.StructurePoolElement>;
    }
    type StructurePoolElement_ = StructurePoolElement;
    class MethodCreator$MethodCodeBuilder {
        constructor(parent: Internal.MethodCreator_)
        /**
         * Add an `dload` instruction to the method.
         * 
         * The `dload` instruction loads a double from a local variable onto the operand stack.
         * 
         * **Operand Stack:** (*d* is the loaded double and "---" is the second slot taken.)
         * 
         * { ... } → { ... , *d* , --- }
         * 
         * @param variableName - The name of the local variable to load the double from.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable does not exist or is not of type `double`.
        */
        loadDouble(variableName: string): this;
        /**
         * Add an `astore` instruction to the method.
         * 
         * The `astore` instruction stores an object reference from the operand stack into a local variable.
         * 
         * **Note:** All *store* instructions *overrides* the variable type.
         * 
         * **Operand Stack:** (*object* is the stored object reference.)
         * 
         * { ... , *object* } → { ... }
         * 
         * @param variableName - The name of the local variable to store the object into.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable exists but is not of an object type.
        */
        storeObject(variableName: string): this;
        /**
         * Add an `istore` instruction to the method.
         * 
         * The `istore` instruction stores an integer from the operand stack into a local variable.
         * 
         * **Note:** All *store* instructions *overrides* the variable type.
         * 
         * **Operand Stack:** (*i* is the stored integer.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @param variableName - The name of the local variable to store the integer into.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default. (Change them using `parameterNames(String[])` method before calling `code()`.)
         *     If the local variable does not exist, it will be created.
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalArgumentException` - if the local variable exists but is not of type `int`.
        */
        storeInt(variableName: string): this;
        /**
         * Add an `l2i` instruction to the method to convert the top long on the operand stack to an integer.
         * 
         * The `l2i` instruction converts the top long on the operand stack to an integer and pushes the resulting integer back onto the operand stack.
         * 
         * **Operand Stack:** (*l* is the long to be converted, "---" is the second slot taken, and *i* is the resulting integer.)
         * 
         * { ... , *l* , --- } → { ... , *i* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longToInt(): this;
        /**
         * Add an `fstore` instruction to the method.
         * 
         * The `fstore` instruction stores a float from the operand stack into a local variable.
         * 
         * **Note:** All *store* instructions *overrides* the variable type.
         * 
         * **Operand Stack:** (*f* is the stored float.)
         * 
         * { ... , *f* } → { ... }
         * 
         * @param variableName - The name of the local variable to store the float into.
         *     If the local variable does not exist, it will be created.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable exists but is not of type `float`.
        */
        storeFloat(variableName: string): this;
        /**
         * Add an `i2l` instruction to the method to convert the top integer on the operand stack to a long.
         * 
         * The `i2l` instruction converts the top integer on the operand stack to a long and pushes the resulting long back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *l* is the resulting long.)
         * 
         * { ... , *i* } → { ... , *l* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToLong(): this;
        /**
         * Add an `lload` instruction to the method.
         * 
         * The `lload` instruction loads a long from a local variable onto the operand stack.
         * 
         * **Operand Stack:** (*l* is the loaded long and "---" is the second slot taken.)
         * 
         * { ... } → { ... , *l* , --- }
         * 
         * @param variableName - The name of the local variable to load the long from.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable does not exist or is not of type `long`.
        */
        loadLong(variableName: string): this;
        /**
         * Add an `i2c` instruction to the method to convert the top integer on the operand stack to a char.
         * 
         * The `i2c` instruction converts the top integer on the operand stack to a char by truncating it to 16 bits and pushes the resulting char (as an integer) back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *c* is the resulting char as an integer.)
         * 
         * { ... , *i* } → { ... , *c* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToChar(): this;
        /**
         * Add a `ddiv` instruction to the method.
         * 
         * The `ddiv` instruction divides the second top double on the operand stack by the top double.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles to be divided, "---" are the second slots taken,
         *     and *result* is *d1* / *d2*.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleDiv(): this;
        /**
         * Add an `aaload` instruction to the method.
         * 
         * The `aaload` instruction loads an object reference from an object array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the object array,
         *     and *index* is the index of the element to load.
         *     *object* is the loaded object reference from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *object* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadObjectFromArray(): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is non-negative.
         * 
         * The `ifNonNegative` method pops the top integer from the operand stack and checks if it is greater than or equal to zero.
         * If the value is non-negative, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNonNegative(): this;
        /**
         * Add a `swap` instruction to the method.
         * 
         * The `swap` instruction swaps the top two values on the operand stack.
         * 
         * **Note:** This instruction can only be used to swap values that are neither longs nor doubles.
         *     For swapping longs and doubles, you need to use a combination of `dup` and `pop` instructions.
         * 
         * **Operand Stack:** (*v1* and *v2* are the values to be swapped, and neither of them is a long or a double.)
         * 
         * { ... , *v2* , *v1* } → { ... , *v1* , *v2* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        swap(): this;
        /**
         * Add a `dmul` instruction to the method.
         * 
         * The `dmul` instruction multiplies the top two doubles on the operand stack.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles to be multiplied, "---" are the second slots taken,
         *     and *result* is *d1* \* *d2*.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleMul(): this;
        /**
         * Add an `i2b` instruction to the method to convert the top integer on the operand stack to a byte.
         * 
         * The `i2b` instruction converts the top integer on the operand stack to a byte by truncating it to 8 bits and pushes the resulting byte (as an integer) back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *b* is the resulting byte as an integer.)
         * 
         * { ... , *i* } → { ... , *b* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToByte(): this;
        /**
         * Add an instruction to push a string constant onto the operand stack.
         * 
         * The method uses the `ldc` instruction to push the string.
         * 
         * **Operand Stack:** (*s* is the pushed string constant.)
         * 
         * { ... } → { ... , *s* }
         * 
         * @param s - The string constant to push onto the operand stack.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushString(s: string): this;
        /**
         * Add an `land` instruction to the method.
         * 
         * The `land` instruction performs a bitwise AND operation on the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be ANDed, "---" are the second slots taken,
         *     and *result* is *l1* & *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longAnd(): this;
        /**
         * Add a `dsub` instruction to the method.
         * 
         * The `dsub` instruction subtracts the top double on the operand stack from the second top double.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles to be subtracted, "---" are the second slots taken,
         *     and *result* is *d1* - *d2*.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleSub(): this;
        /**
         * Add an `lmul` instruction to the method.
         * 
         * The `lmul` instruction multiplies the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be multiplied, "---" are the second slots taken,
         *     and *result* is *l1* \* *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longMul(): this;
        /**
         * Add an `ior` instruction to the method.
         * 
         * The `ior` instruction performs a bitwise OR operation on the top two integers on the operand stack.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be ORed, and *result* is *i1* | *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intOr(): this;
        /**
         * Add an `lstore` instruction to the method.
         * 
         * The `lstore` instruction stores a long from the operand stack into a local variable.
         * 
         * **Note:** All *store* instructions *overrides* the variable type.
         * 
         * **Operand Stack:** (*l* is the stored long and "---" is the second slot taken.)
         * 
         * { ... , *l* , --- } → { ... }
         * 
         * @param variableName - The name of the local variable to store the long into.
         *     If the local variable does not exist, it will be created.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable exists but is not of type `long`.
        */
        storeLong(variableName: string): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are greater than.
         * 
         * The `ifLessThan` method pops the top two integers from the operand stack and checks if the first integer is greater than the second integer.
         * If *i1* < *i2*, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifLessThan(): this;
        /**
         * Add an `ishl` instruction to the method.
         * 
         * The `ishl` instruction performs a left shift on the top integer on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*i1* is the integer to be shifted, *i2* is the number of bits to shift,
         *     and *result* is *i1* << *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intLShift(): this;
        /**
         * Add a `pop` instruction to the method.
         * 
         * The `pop` instruction removes the top value from the operand stack.
         * 
         * **Note:** This instruction can only be used to pop values that take up one slot (e.g., int, float, reference).
         *     For removing longs and doubles, use the `pop2` instruction instead.
         * 
         * **Operand Stack:** (*v* is the popped value.)
         * 
         * { ... , *v* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        pop(): this;
        /**
         * Add a `anewarray` instruction to the method to create a new array of a specified reference type.
         * 
         * The `anewarray` instruction creates a new array of the specified reference type and pushes its reference onto the operand stack.
         * The size of the array is determined by the integer value on the top of the operand stack.
         * 
         * **Operand Stack:** (*count* is the number of elements in the new array, and *arrayref* is the reference to the new array.)
         * 
         * { ... , *count* } → { ... , *arrayref* }
         * 
         * @param elementType - The class or interface of the elements in the new array (e.g., `java.lang.String` for an array of `String`).
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
        */
        newObjectArray(elementType: Internal.ClassNameWrapper_): this;
        /**
         * Add a `goto` instruction to the method to unconditionally jump to a specified label.
         * 
         * The `goto` instruction causes an unconditional jump to the specified label in the method code.
         * 
         * **Operand Stack:**
         * 
         * { ... } → { ... }
         * 
         * @param labelName - The name of the label to jump to.
         * @returns This `MethodCodeBuilder` instance.
        */
        gotoLabel(labelName: string): this;
        /**
         * Add an `lrem` instruction to the method.
         * 
         * The `lrem` instruction computes the remainder of the division of the second top long on the operand stack by the top long.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs, "---" are the second slots taken,
         *     and *result* is *l1* % *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longRem(): this;
        /**
         * Add a `d2f` instruction to the method to convert the top double on the operand stack to a float.
         * 
         * The `d2f` instruction converts the top double on the operand stack to a float and pushes the resulting float back onto the operand stack.
         * 
         * **Operand Stack:** (*d* is the double to be converted, "---" is the second slot taken, and *f* is the resulting float.)
         * 
         * { ... , *d* , --- } → { ... , *f* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleToFloat(): this;
        /**
         * Add a `lreturn` instruction to the method.
         * 
         * The `lreturn` instruction is used to return a long from a method.
         * Before `lreturn`, the operand stack must have ***one and only one*** long value (which takes two slots).
         * 
         * **Operand Stack:** (*l* is the returned long. "---" is the second slot taken by the long.)
         * 
         * { *l* , --- } → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnLong(): this;
        /**
         * Add a `d2i` instruction to the method to convert the top double on the operand stack to an integer.
         * 
         * The `d2i` instruction converts the top double on the operand stack to an integer and pushes the resulting integer back onto the operand stack.
         * 
         * **Operand Stack:** (*d* is the double to be converted, "---" is the second slot taken, and *i* is the resulting integer.)
         * 
         * { ... , *d* , --- } → { ... , *i* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleToInt(): this;
        /**
         * Add an `i2f` instruction to the method to convert the top integer on the operand stack to a float.
         * 
         * The `i2f` instruction converts the top integer on the operand stack to a float and pushes the resulting float back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *f* is the resulting float.)
         * 
         * { ... , *i* } → { ... , *f* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToFloat(): this;
        /**
         * Add a `putfield` instruction to the method to set the value of an instance field in an object.
         * 
         * The `putfield` instruction sets the value of an instance field in an object using the value on the top of the operand stack.
         * The object reference must be below the value on the operand stack before executing this instruction.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object, and *fieldValue* is the value to be assigned to the instance field.)
         * 
         * { ... , *objectRef* , *fieldValue* } → { ... }
         * 
         * @param objectType - The type of the object containing the instance field
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param fieldName - The name of the instance field.
         * @param fieldType - The type of the instance field (e.g., `int`, `java.lang.String`, etc.).
         * @returns This `MethodCodeBuilder` instance.
        */
        putField(objectType: Internal.ClassNameWrapper_, fieldName: string, fieldType: Internal.ClassNameWrapper_): this;
        /**
         * Add an `ixor` instruction to the method.
         * 
         * The `ixor` instruction performs a bitwise XOR operation on the top two integers on the operand stack.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be XORed, and *result* is *i1* ^ *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intXor(): this;
        /**
         * Add an `fcmpl` or `fcmpg` instruction to the method to compare the top two floats on the operand stack.
         * 
         * The `fcmpl` and `fcmpg` instructions compare the top two floats on the operand stack.
         * The choice between `fcmpl` and `fcmpg` determines how NaN (Not a Number) values are handled:
         * - `fcmpl`: If either of the floats is NaN, it pushes -1 onto the operand stack.
         * - `fcmpg`: If either of the floats is NaN, it pushes 1 onto the operand stack.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats to be compared, and *result* is -1, 0, or 1,
         *     depending on the sign of *f1* - *f2*, or -1/1 if either is NaN.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @param push1IfNaN - If true, uses `fcmpg`; if false, uses `fcmpl`.
         * @returns This `MethodCodeBuilder` instance.
        */
        compareFloat(push1IfNaN: boolean): this;
        /**
         * Add instructions to the method to synchronize on an object.
         * 
         * This method combines the `duplicate`, `storeObject`, and `monitorEnter` instructions
         * to duplicate the object reference on the top of the operand stack, store one copy in a local variable,
         * and acquire a monitor lock on the object.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being synchronized on.)
         * 
         * { ... , *objectRef* } → { ... }
         * 
         * **Note:** After executing `synchronizeOn`, the object reference is ***removed*** from the operand stack.
         *     You may `duplicate` the object before calling this method to keep it on the operand stack.
         * 
         * Also, you **must** call the `synchronizeEnd` method to release the monitor lock acquired by this method.
         *     Failing to do so may lead to deadlocks in your program.
         * 
         * @param variableName - The name of the local variable to store the object reference.
         *     Make sure this variable will not be overridden before calling `synchronizeEnd`.
         * @returns This `MethodCodeBuilder` instance.
        */
        synchronizeOn(variableName: string): this;
        /**
         * Add a `dadd` instruction to the method.
         * 
         * The `dadd` instruction adds the top two doubles on the operand stack.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles to be added, "---" are the second slots taken,
         *     and *result* is *d1* + *d2*.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleAdd(): this;
        /**
         * Add an `ldiv` instruction to the method.
         * 
         * The `ldiv` instruction divides the second top long on the operand stack by the top long.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be divided, "---" are the second slots taken,
         *     and *result* is *l1* / *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longDiv(): this;
        /**
         * Add a `aconst_null` instruction to the method.
         * 
         * The `aconst_null` instruction pushes a `null` reference onto the operand stack.
         * 
         * **Operand Stack:**
         * 
         * { ... } → { ... , `null` }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        pushNull(): this;
        /**
         * Add a `new` instruction to the method to create a new object of a specified class.
         * 
         * The `new` instruction creates a new instance of the specified class and pushes its reference onto the operand stack.
         * 
         * **Note:** The created object is **NOT** initialized. You must call the constructor (using `invokespecial`) to initialize the object before using it.
         *     You can also use the `newAndConstructObject` method to create and initialize an object in one step.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the newly created object.)
         * 
         * { ... } → { ... , *objectRef* }
         * 
         * @param clazz - The class to instantiate.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalAccessException` if the specified class is denied by the `ClassFilter`.
        */
        newObject(clazz: Internal.ClassNameWrapper_): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is non-positive.
         * 
         * The `ifNonPositive` method pops the top integer from the operand stack and checks if it is less than or equal to zero.
         * If the value is non-positive, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNonPositive(): this;
        /**
         * Add an `invokestatic` instruction to the method to call a static method from a specified class.
         * 
         * The `invokestatic` instruction calls a static method from a specified class.
         * The arguments for the method must be on the operand stack in the correct order before executing this instruction.
         * If the method has a return value, it will be pushed onto the operand stack.
         * 
         * **Operand Stack:** (*arg1*, *arg2*, ..., *argN* are the arguments for the method, and *returnValue* is the return value of the method if it has one.)
         * 
         * { ... , *arg1* , *arg2* , ... , *argN* } → { ... , *returnValue* }
         * 
         * @param clazz - The class containing the static method.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param methodName - The name of the static method.
         * @param paramTypes - An array of parameter types for the method (e.g., `int`, `java.lang.String`, etc.).
         * @param returnType - The return type of the method (e.g., `int`, `java.lang.String`, or `void`).
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalAccessException` if the specified class is not allowed to be accessed.
        */
        invokeStatic(clazz: Internal.ClassNameWrapper_, methodName: string, paramTypes: Internal.ClassNameWrapper_[], returnType: Internal.ClassNameWrapper_): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are equal.
         * 
         * The `ifEqualsTo` method pops the top two integers from the operand stack and checks if they are equal.
         * If the values are equal, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifEqualsTo(): this;
        /**
         * Ends the current loop scope.
         * 
         * This method **MUST** be called after entering a loop scope using `forLoop()` or `whileLoop()`.
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        endLoop(): this;
        /**
         * Add a `caload` instruction to the method.
         * 
         * The `caload` instruction loads a char from a char array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the char array,
         *     and *index* is the index of the element to load.
         *     *c* is the loaded char from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *c* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadCharFromArray(): this;
        /**
         * Add a `ireturn` instruction to the method.
         * 
         * The `ireturn` instruction is used to return an integer from a method.
         * Before `ireturn`, the operand stack must have ***one and only one*** integer value.
         * 
         * **Operand Stack:** (*i* is the returned integer.)
         * 
         * { *i* } → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnInt(): this;
        /**
         * Add a `monitorenter` instruction to the method to acquire a monitor lock on an object.
         * 
         * The `monitorenter` instruction is used to acquire a monitor lock on the object whose reference is on the top of the operand stack.
         * This is typically used in synchronized blocks or methods to ensure that only one thread can execute the synchronized code at a time.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object whose monitor lock is being acquired.)
         * 
         * { ... , *objectRef* } → { ... }
         * 
         * **Note:** After executing `monitorenter`, the object reference is removed from the operand stack.
         *     You **MUST** manage to keep the object's reference.
         *     (For example, keep it in a local variable before calling `monitorenter`.)
         *     As you **MUST** `monitorexit` the object again.
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        monitorEnter(): this;
        /**
         * Add an `fload` instruction to the method.
         * 
         * The `fload` instruction loads a float from a local variable onto the operand stack.
         * 
         * **Operand Stack:** (*f* is the loaded float.)
         * 
         * { ... } → { ... , *f* }
         * 
         * @param variableName - The name of the local variable to load the float from.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable does not exist or is not of type `float`.
        */
        loadFloat(variableName: string): this;
        /**
         * Add an `fsub` instruction to the method.
         * 
         * The `fsub` instruction subtracts the top float on the operand stack from the second top float.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats to be subtracted, and *result* is *f1* - *f2*.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatSub(): this;
        /**
         * Add a `dup` instruction to the method.
         * 
         * The `dup` instruction duplicates the top value on the operand stack.
         * 
         * **Note:** This instruction can only be used to duplicate values that are neither longs nor doubles.
         *     For duplicating longs and doubles, use the `dup2` instruction instead.
         * 
         * **Operand Stack:** (*v* is the duplicated value.)
         * 
         * { ... , *v* } → { ... , *v* , *v* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicate(): this;
        /**
         * Add an `fneg` instruction to the method.
         * 
         * The `fneg` instruction negates the top float on the operand stack.
         * 
         * **Operand Stack:** (*f* is the float to be negated, and *result* is -*f*.)
         * 
         * { ... , *f* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatNeg(): this;
        /**
         * Add an `l2f` instruction to the method to convert the top long on the operand stack to a float.
         * 
         * The `l2f` instruction converts the top long on the operand stack to a float and pushes the resulting float back onto the operand stack.
         * 
         * **Operand Stack:** (*l* is the long to be converted, "---" is the second slot taken, and *f* is the resulting float.)
         * 
         * { ... , *l* , --- } → { ... , *f* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longToFloat(): this;
        /**
         * Add a `return` instruction to the method.
         * 
         * The `return` instruction is used to return from a method that has a `void` return type.
         * Before `return`, the operand stack must be ***empty***.
         * 
         * **Operand Stack:**
         * 
         * [*EMPTY*] → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnVoid(): this;
        /**
         * Add a `f2d` instruction to the method to convert the top float on the operand stack to a double.
         * 
         * The `f2d` instruction converts the top float on the operand stack to a double and pushes the resulting double back onto the operand stack.
         * 
         * **Operand Stack:** (*f* is the float to be converted, and *d* is the resulting double.)
         * 
         * { ... , *f* } → { ... , *d* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatToDouble(): this;
        /**
         * Add an `lushr` instruction to the method.
         * 
         * The `lushr` instruction performs a logical right shift on the top long on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*l* is the long to be shifted, "---" is the second slot taken,
         *     *i* is the number of bits to shift, and *result* is *l* >>> *i*.)
         * 
         * { ... , *l* , --- , *i* } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longRShiftLogical(): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is negative.
         * 
         * The `ifNegative` method pops the top integer from the operand stack and checks if it is less than zero.
         * If the value is negative, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNegative(): this;
        /**
         * Ends the method creation and returns to the parent `ClassCreator`.
         * 
         * **Note:** Do not try to add any codes after this method.
         * They may cause undefined behaviors.
         * 
         * @returns The parent `ClassCreator`.
         * 
         * **Note**: The returned is ***NOT*** the parent `MethodCreator`, but the `ClassCreator`.
        */
        build(): ClassCreator;
        /**
         * Add a `pop2` instruction to the method.
         * 
         * The `pop2` instruction removes the top one or two values from the operand stack.
         * 
         * **Operand Stack:**
         * 
         * - If the top value is a long or double: (*v1* is the popped long or double, and "---" is the second slot taken.)
         *   - { ... , *v1* , --- } → { ... }
         * 
         * - Otherwise: (*v1* and *v2* are the popped values and neither of them is a long or a double.)
         *   - { ... , *v2* , *v1* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        pop2(): this;
        /**
         * Add an `iastore` instruction to the method.
         * 
         * The `iastore` instruction stores an integer into an integer array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the integer array,
         *     *index* is the index of the element to store, and *value* is the integer to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeIntIntoArray(): this;
        /**
         * Add an `fadd` instruction to the method.
         * 
         * The `fadd` instruction adds the top two floats on the operand stack.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats to be added, and *result* is *f1* + *f2*.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatAdd(): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is `null`.
         * 
         * The `ifNull` method pops the top object reference from the operand stack and checks if it is `null`.
         * If the value is `null`, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Note:** `undefined` is treated as **non-`null`**.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being checked.)
         * 
         * { ... , *objectRef* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNull(): this;
        /**
         * Close the most recent `if` statement.
         * 
         * The `fi()` method marks the end of an `if` statement.
         * 
         * If there is no open `if` statement to close, an `IllegalStateException` is thrown.
         * 
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalStateException` if there is no open `if` statement to close.
        */
        fi(): this;
        /**
         * Add a `f2l` instruction to the method to convert the top float on the operand stack to a long.
         * 
         * The `f2l` instruction converts the top float on the operand stack to a long and pushes the resulting long back onto the operand stack.
         * 
         * **Operand Stack:** (*f* is the float to be converted, and *l* is the resulting long.)
         * 
         * { ... , *f* } → { ... , *l* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatToLong(): this;
        /**
         * Add an `lsub` instruction to the method.
         * 
         * The `lsub` instruction subtracts the top long on the operand stack from the second top long.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be subtracted, "---" are the second slots taken,
         *     and *result* is *l1* - *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longSub(): this;
        /**
         * Add a `fastore` instruction to the method.
         * 
         * The `fastore` instruction stores a float into a float array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the float array,
         *     *index* is the index of the element to store, and *value* is the float to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeFloatIntoArray(): this;
        /**
         * Add an instruction to push a double constant onto the operand stack.
         * 
         * The method optimizes the instruction based on the value of the double:
         * - For values 0.0 and 1.0, it uses the `dconst_0` and `dconst_1` instructions respectively.
         * - For all other values, it uses the `ldc` instruction.
         * 
         * **Operand Stack:** (*d* is the pushed double constant. "---" is the second slot taken by the double.)
         * 
         * { ... } → { ... , *d* , --- }
         * 
         * @param d - The double constant to push onto the operand stack.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushDouble(d: number): this;
        /**
         * Add an `lneg` instruction to the method.
         * 
         * The `lneg` instruction negates the top long on the operand stack.
         * 
         * **Operand Stack:** (*l* is the long to be negated, "---" is the second slot taken,
         *     and *result* is -*l*.)
         * 
         * { ... , *l* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longNeg(): this;
        /**
         * Add an `l2d` instruction to the method to convert the top long on the operand stack to a double.
         * 
         * The `l2d` instruction converts the top long on the operand stack to a double and pushes the resulting double back onto the operand stack.
         * 
         * **Operand Stack:** (*l* is the long to be converted, "---" is the second slot taken, and *d* is the resulting double.)
         * 
         * { ... , *l* , --- } → { ... , *d* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longToDouble(): this;
        /**
         * Add a `dup2` instruction to the method.
         * 
         * The `dup2` instruction duplicates the top one or two values on the operand stack.
         * 
         * **Operand Stack:**
         * 
         * - If the top value is a long or double: (*v1* is the duplicated long or double, and "---" is the second slot taken.)
         *   - { ... , *v1* , --- } → { ... , *v1* , --- , *v1* , --- }
         * 
         * - Otherwise: (*v1* and *v2* are the duplicated values and neither of them is a long or a double.)
         *   - { ... , *v2* , *v1* } → { ... , *v2* , *v1* , *v2* , *v1* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicate2(): this;
        /**
         * Add an `fmul` instruction to the method.
         * 
         * The `fmul` instruction multiplies the top two floats on the operand stack.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats to be multiplied, and *result* is *f1* \* *f2*.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatMul(): this;
        /**
         * Add an `else` clause to the most recent `if` statement.
         * 
         * The `elseThen()` method adds an `else` clause to the most recent `if` statement.
         * It creates a new label for the end of the `if-else` construct and jumps to it if the `if` condition was true.
         * The execution continues at the next instruction after the `if` block if the condition was false.
         * 
         * This method must be called after an `ifNonZero()`, `ifZero()`, `ifPositive()`, or `ifNegative()` call and before a corresponding `fi()` call.
         * 
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalStateException` if there is no open `if` statement to add an `else`.
        */
        elseThen(): this;
        /**
         * Add an `i2s` instruction to the method to convert the top integer on the operand stack to a short.
         * 
         * The `i2s` instruction converts the top integer on the operand stack to a short by truncating it to 16 bits and pushes the resulting short (as an integer) back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *s* is the resulting short as an integer.)
         * 
         * { ... , *i* } → { ... , *s* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToShort(): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are greater than.
         * 
         * The `ifGreaterThan` method pops the top two integers from the operand stack and checks if the first integer is greater than the second integer.
         * If *i1* > *i2*, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifGreaterThan(): this;
        /**
         * Add an `iand` instruction to the method.
         * 
         * The `iand` instruction performs a bitwise AND operation on the top two integers on the operand stack.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be ANDed, and *result* is *i1* & *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intAnd(): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is non-zero.
         * 
         * The `ifNonZero` method pops the top integer from the operand stack and checks if it is not equal to zero.
         * If the value is non-zero, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNonZero(): this;
        /**
         * Add a `getfield` instruction to the method to retrieve the value of an instance field from an object.
         * 
         * The `getfield` instruction fetches the value of an instance field from an object and pushes it onto the operand stack.
         * The object reference must be on the top of the operand stack before executing this instruction.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object, and *fieldValue* is the value of the instance field.)
         * 
         * { ... , *objectRef* } → { ... , *fieldValue* }
         * 
         * @param objectType - The type of the object containing the instance field.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param fieldName - The name of the instance field.
         * @param fieldType - The type of the instance field (e.g., `int`, `java.lang.String`, etc.).
         * @returns This `MethodCodeBuilder` instance.
        */
        getField(objectType: Internal.ClassNameWrapper_, fieldName: string, fieldType: Internal.ClassNameWrapper_): this;
        /**
         * Break out of the nearest enclosing *case* block.
         * 
         * The `breakCase()` method allows you to exit the nearest enclosing case block prematurely.
         * It generates a `goto` instruction to jump to the end of the `switch` construct.
         * 
         * This method must be called within a case block; otherwise, it throws an `IllegalStateException`.
         * 
         * **Operand Stack:**
         * 
         * { ... } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalStateException` if there is no open case block to break from.
        */
        breakCase(): this;
        /**
         * Add an `aastore` instruction to the method.
         * 
         * The `aastore` instruction stores an object reference into an object array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the object array,
         *     *index* is the index of the element to store, and *value* is the object reference to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeObjectIntoArray(): this;
        /**
         * Add a `dup2_x1` instruction to the method.
         * 
         * The `dup2_x1` instruction duplicates the top one or two values on the operand stack and inserts them two or three values down.
         * 
         * **Operand Stack:**
         * 
         * - If the top value is a long or double: (*v1* is the duplicated long or double, *v2* is the value below it, and "---" is the second slot taken.)
         *   - { ... , *v2* , *v1* , --- } → { ... , *v1* , --- , *v2* , *v1* , --- }
         * 
         * - Otherwise: (*v1* and *v2* are the duplicated values, *v3* is the value below them, and none of them is a long or a double.)
         *   - { ... , *v3* , *v2* , *v1* } → { ... , *v2* , *v1* , *v3* , *v2* , *v1* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicate2X1(): this;
        /**
         * Add a `dreturn` instruction to the method.
         * 
         * The `dreturn` instruction is used to return a double from a method.
         * Before `dreturn`, the operand stack must have ***one and only one*** double value (which takes two slots).
         * 
         * **Operand Stack:** (*d* is the returned double. "---" is the second slot taken by the double.)
         * 
         * { *d* , --- } → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnDouble(): this;
        /**
         * Add an `iinc` instruction to the method to increment a local integer variable by a specified constant.
         * 
         * The `iinc` instruction increments the value of a local variable by a constant value.
         * This instruction is specifically designed for local variables of type `int`.
         * 
         * **Operand Stack:**
         * 
         * { ... } → { ... }
         * 
         * @param varIndex - The name of the local variable to increase.
         * @param increment - The constant value to add to the local variable. Can be positive or negative.
         * @returns This `MethodCodeBuilder` instance.
        */
        intIncrease(variableName: string, increment: number): this;
        /**
         * Add a `getstatic` instruction to the method to retrieve the value of a static field from a specified class.
         * 
         * The `getstatic` instruction fetches the value of a static field from a specified class and pushes it onto the operand stack.
         * 
         * **Operand Stack:** (*value* is the value of the static field.)
         * 
         * { ... } → { ... , *value* }
         * 
         * @param clazz - The class containing the static field.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param fieldName - The name of the static field.
         * @param fieldType - The type of the static field (e.g., `int`, `java.lang.String`, etc.).
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalAccessException` if the specified class is not allowed to be accessed.
        */
        getStaticField(clazz: Internal.ClassNameWrapper_, fieldName: string, fieldType: Internal.ClassNameWrapper_): this;
        /**
         * Add an `lshr` instruction to the method.
         * 
         * The `lshr` instruction performs an arithmetic right shift on the top long on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*l* is the long to be shifted, "---" is the second slot taken,
         *     *i* is the number of bits to shift, and *result* is the shifted long.)
         * 
         * { ... , *l* , --- , *i* } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longRShift(): this;
        /**
         * Add a `lor` instruction to the method.
         * 
         * The `lor` instruction performs a bitwise OR operation on the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be ORed, "---" are the second slots taken,
         *     and *result* is *l1* | *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longOr(): this;
        /**
         * Add a `putstatic` instruction to the method to set the value of a static field in a specified class.
         * 
         * The `putstatic` instruction sets the value of a static field in a specified class using the value on the top of the operand stack.
         * 
         * **Operand Stack:** (*value* is the value to be assigned to the static field.)
         * 
         * { ... , *value* } → { ... }
         * 
         * @param clazz - The class containing the static field.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param fieldName - The name of the static field.
         * @param fieldType - The type of the static field (e.g., `int`, `java.lang.String`, etc.).
         * @returns This `MethodCodeBuilder` instance.
        */
        putStaticField(clazz: Internal.ClassNameWrapper_, fieldName: string, fieldType: Internal.ClassNameWrapper_): this;
        /**
         * Add an `laload` instruction to the method.
         * 
         * The `laload` instruction loads a long from a long array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the long array,
         *     and *index* is the index of the element to load.
         *     *l* is the loaded long from the array and "---" is the second slot taken.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *l* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadLongFromArray(): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are not equal.
         * 
         * The `ifNotEqualsTo` method pops the top two integers from the operand stack and checks if they are not equal.
         * If the values are not equal, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNotEqualsTo(): this;
        /**
         * Add an `fdiv` instruction to the method.
         * 
         * The `fdiv` instruction divides the second top float on the operand stack by the top float.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats to be divided, and *result* is *f1* / *f2*.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatDiv(): this;
        /**
         * Add an `ladd` instruction to the method.
         * 
         * The `ladd` instruction adds the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be added, "---" are the second slots taken,
         *     and *result* is *l1* + *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longAdd(): this;
        /**
         * Add an `idiv` instruction to the method.
         * 
         * The `idiv` instruction divides the second top integer on the operand stack by the top integer.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be divided, and *result* is *i1* / *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intDiv(): this;
        /**
         * Add a `checkcast` instruction to the method to cast an object to a specified type.
         * 
         * The `checkcast` instruction checks whether the object on the top of the operand stack is of the specified type.
         * If it is, the object reference remains on the operand stack.
         * If it is not, a `ClassCastException` is thrown at runtime.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being cast.)
         * 
         * { ... , *objectRef* } → { ... , *objectRef* }
         * 
         * @param clazz - The class or interface to cast the object to (e.g., `java.lang.String`).
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
        */
        checkCast(clazz: Internal.ClassNameWrapper_): this;
        /**
         * Add an `frem` instruction to the method.
         * 
         * The `frem` instruction computes the remainder of the division of the second top float on the operand stack by the top float.
         * 
         * **Operand Stack:** (*f1* and *f2* are the floats, and *result* is *f1* % *f2*.)
         * 
         * { ... , *f1* , *f2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatRem(): this;
        /**
         * Add an `imul` instruction to the method.
         * 
         * The `imul` instruction multiplies the top two integers on the operand stack.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be multiplied, and *result* is *i1* \* *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intMul(): this;
        /**
         * Add an `invokeinterface` instruction to the method to call an interface method on an object.
         * 
         * The `invokeinterface` instruction calls an interface method on an object.
         * The object reference and the arguments for the method must be on the operand stack in the correct order before executing this instruction.
         * If the method has a return value, it will be pushed onto the operand stack.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object, *arg1*, *arg2*, ..., *argN* are the arguments for the method, and *returnValue* is the return value of the method if it has one.)
         * 
         * { ... , *objectRef* , *arg1* , *arg2* , ... , *argN* } → { ... , *returnValue* }
         * 
         * @param interfaceType - The type of the interface containing the method.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param methodName - The name of the interface method.
         * @param paramTypes - An array of parameter types for the method (e.g., `int`, `java.lang.String`, etc.).
         * @param returnType - The return type of the method (e.g., `int`, `java.lang.String`, or `void`).
         * @returns This `MethodCodeBuilder` instance.
        */
        invokeInterface(interfaceType: Internal.ClassNameWrapper_, methodName: string, paramTypes: Internal.ClassNameWrapper_[], returnType: Internal.ClassNameWrapper_): this;
        /**
         * Add instructions to the method to create a new object of a specified class and invoke its constructor.
         * 
         * The constructor is assumed to have **no parameters** (i.e., the default constructor).
         * 
         * This method combines the `new` instruction to create a new instance of the specified class
         * and the `invokespecial` instruction to call the constructor of that class.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the newly created object.)
         * 
         * { ... } → { ... , *objectRef* }
         * 
         * **Note:** This method is equvilant to:
         * 
         * ```javascript
         * .newObject(className)
         * .duplicate()
         * .invokeSpecial("className", "<init>", [], "void")
         * ```
         * 
         * @param clazz - The class to instantiate (e.g., `java.lang.String`).
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalAccessException` if the specified class is denied by the `ClassFilter`.
        */
        newAndConstructObject(clazz: Internal.ClassNameWrapper_): this;
        /**
         * Add a `bastore` instruction to the method.
         * 
         * The `bastore` instruction stores a byte or boolean into a byte array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the byte array,
         *     *index* is the index of the element to store, and *value* is the byte or boolean to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeByteIntoArray(): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are less than or equal to.
         * 
         * The `ifLessThanOrEqualsTo` method pops the top two integers from the operand stack and checks if the first integer is less than or equal to the second integer.
         * If *i1* ≤ *i2*, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifLessThanOrEqualsTo(): this;
        /**
         * Add a `saload` instruction to the method.
         * 
         * The `saload` instruction loads a short from a short array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the short array,
         *     and *index* is the index of the element to load.
         *     *s* is the loaded short from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *s* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadShortFromArray(): this;
        /**
         * Add a `newarray` instruction to the method to create a new array of a specified primitive type.
         * 
         * The `newarray` instruction creates a new array of the specified primitive type and pushes its reference onto the operand stack.
         * The size of the array is determined by the integer value on the top of the operand stack.
         * 
         * Supported primitive types are:
         * - `boolean`
         * - `char`
         * - `float`
         * - `double`
         * - `byte`
         * - `short`
         * - `int`
         * - `long`
         * 
         * **Operand Stack:** (*count* is the number of elements in the new array, and *arrayref* is the reference to the new array.)
         * 
         * { ... , *count* } → { ... , *arrayref* }
         * 
         * @param elementType - The type of elements in the new array. Must be one of the supported primitive types.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the specified element type is not supported.
        */
        newArray(elementType: string): this;
        /**
         * Add an `lcmp` instruction to the method.
         * 
         * The `lcmp` instruction compares the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be compared, "---" are the second slots taken,
         *     and *result* is -1, 0, or 1, depending on the sign of *l1* - *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        compareLong(): this;
        /**
         * Add an `athrow` instruction to the method to throw an exception.
         * 
         * The `athrow` instruction throws an exception object that is on the top of the operand stack.
         * The exception object must be a reference type that is a subclass of `java.lang.Throwable`.
         * 
         * **Operand Stack:** (*throwable* is the exception object to be thrown.)
         * 
         * { ... , *throwable* } → { *throwable* }
         * 
         * **Note:** After the `athrow` instruction is executed, all values on the operand stack are cleared,
         *     and the control flow is transferred to the nearest enclosing exception handler that can handle the thrown exception type.
         *     If found, the operand stack will then contain only the thrown exception object's reference.
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        throwObject(): this;
        /**
         * Add an `irem` instruction to the method.
         * 
         * The `irem` instruction computes the remainder of the division of the second top integer on the operand stack by the top integer.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers, and *result* is *i1* % *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intRem(): this;
        /**
         * Add an `aload` instruction to the method.
         * 
         * The `aload` instruction loads an object reference from a local variable onto the operand stack.
         * 
         * **Operand Stack:** (*object* is the loaded object reference.)
         * 
         * { ... } → { ... , *object* }
         * 
         * @param variableName - The name of the local variable to load the object from.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable does not exist or is not of the required type.
        */
        loadObject(variableName: string): this;
        /**
         * Automatically generates a `invokedynamic` instruction to invoke a JavaScript function.
         * 
         * @param paramTypes - An array of parameter types for the method.
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param returnType - The return type of the method (e.g., `int`, `java.lang.String`, or `void`).
         * @param jsFunction - The JavaScript function to invoke.
         * 
         * @throws `NoSuchMethodException`
         * @throws `IllegalAccessException`
        */
        invokeJS(paramTypes: Internal.ClassNameWrapper_[], returnType: Internal.ClassNameWrapper_, jsFunction: dev.latvian.mods.rhino.Function_): this;
        /**
         * Add a `dup_x2` instruction to the method.
         * 
         * The `dup_x2` instruction duplicates the top value on the operand stack and inserts it two or three values down.
         * 
         * **Operand Stack:**
         * 
         * - If the second value is a long or double: (*v1* is the duplicated value, *v2* is the long or double, and "---" is the second slot taken.)
         *   - { ... , *v2* , --- , *v1* } → { ... , *v1* , *v2* , --- , *v1* }
         * 
         * - Otherwise: (*v1*, *v2*, and *v3* are the values, and none of them is a long or a double.)
         *   - { ... , *v3* , *v2* , *v1* } → { ... , *v1* , *v3* , *v2* , *v1* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicateX2(): this;
        /**
         * Add an instruction to push a class reference onto the operand stack.
         * 
         * The method uses the `ldc` instruction to push the class reference.
         * 
         * **Operand Stack:** (*c* is the pushed class reference.)
         * 
         * { ... } → { ... , *c* }
         * 
         * **Note:** The pushed class reference is of type `java.lang.Class`.
         *     It is different from KubeJS's classes, `java.lang.Class` can **NOT** be used to access static members.
         *     If you want to access static members, use `getStaticField` or `invokeStaticMethod` instead.
         * 
         * @param clazz - The class (e.g., `java.lang.String`).
         *     Can be a full qualified name or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushClass(clazz: Internal.ClassNameWrapper_): this;
        /**
         * Add a `faload` instruction to the method.
         * 
         * The `faload` instruction loads a float from a float array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the float array,
         *     and *index* is the index of the element to load.
         *     *f* is the loaded float from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *f* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadFloatFromArray(): this;
        /**
         * Add a `dcmpl` or `dcmpg` instruction to the method to compare the top two doubles on the operand stack.
         * 
         * The `dcmpl` and `dcmpg` instructions compare the top two doubles on the operand stack.
         * The choice between `dcmpl` and `dcmpg` determines how NaN (Not a Number) values are handled:
         * - `dcmpl`: If either of the doubles is NaN, it pushes -1 onto the operand stack.
         * - `dcmpg`: If either of the doubles is NaN, it pushes 1 onto the operand stack.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles to be compared, "---" are the second slots taken,
         *     and *result* is -1, 0, or 1, depending on the sign of *d1* - *d2*, or -1/1 if either is NaN.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* }
         * 
         * @param push1IfNaN - If true, uses `dcmpg`; if false, uses `dcmpl`.
         * @returns This `MethodCodeBuilder` instance.
        */
        compareDouble(push1IfNaN: boolean): this;
        /**
         * Enters a `while` loop scope.
         * 
         * The loop consists of a condition part that is executed before each iteration of the loop.
         * If the condition evaluates to `true`, the loop body is executed.
         * 
         * The condition part **MUST** be a valid method to begin an if scope.
         * 
         * @param initialization - A consumer that adds bytecode for the initialization part.
         * @param condition - A consumer that adds bytecode for the condition part.
         * @param update - A consumer that adds bytecode for the update part.
         * @returns This `MethodCodeBuilder` instance.
         * 
         * @example
         * // let i = 0; while (i < 10) {...; i ++;}
         * ... Other code ...
         * .pushInt(0)
         * .storeInt("i")
         * .whileLoop(
         *     mb => mb.loadInt("i").pushInt(10).ifLessThan("loopBody"), // condition
         * )
         *     ... Loop body ...
         *     .intIncrease("i", 1)
         * .endLoop() // End loop here
        */
        whileLoop(condition: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>): this;
        /**
         * Add a `dastore` instruction to the method.
         * 
         * The `dastore` instruction stores a double into a double array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the double array,
         *     *index* is the index of the element to store, and *value* is the double to store.
         *     "---" is the second slot taken by the double.)
         * 
         * { ... , *arrayref* , *index* , *value* , --- } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeDoubleIntoArray(): this;
        /**
         * Add an `invokespecial` instruction to the method to call a special instance method, such as a constructor or a private method.
         * 
         * The `invokespecial` instruction is used to call special instance methods, including constructors and private methods.
         * The object reference and the arguments for the method must be on the operand stack in the correct order before executing this instruction.
         * If the method has a return value, it will be pushed onto the operand stack.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object, *arg1*, *arg2*, ..., *argN* are the arguments for the method, and *returnValue* is the return value of the method if it has one.)
         * 
         * { ... , *objectRef* , *arg1* , *arg2* , ... , *argN* } → { ... , *returnValue* }
         * 
         * @param objectType - The type of the object containing the special instance method
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param methodName - The name of the special instance method.
         * @param paramTypes - An array of parameter types for the method (e.g., `int`, `java.lang.String`, etc.).
         * @param returnType - The return type of the method (e.g., `int`, `java.lang.String`, or `void`).
         * @returns This `MethodCodeBuilder` instance.
        */
        invokeSpecial(objectType: Internal.ClassNameWrapper_, methodName: string, paramTypes: Internal.ClassNameWrapper_[], returnType: Internal.ClassNameWrapper_): this;
        /**
         * Add an instruction to push an integer constant onto the operand stack.
         * 
         * The method optimizes the instruction based on the value of the integer:
         * - For values between -1 and 5 (inclusive), it uses the `iconst_<i>` instructions.
         * - For values between -128 and 127 (inclusive), it uses the `bipush` instruction.
         * - For values between -32,768 and 32,767 (inclusive), it uses the `sipush` instruction.
         * - For all other values, it uses the `ldc` instruction.
         * 
         * **Operand Stack:** (*i* is the pushed integer constant.)
         * 
         * { ... } → { ... , *i* }
         * 
         * @param i - The integer constant to push onto the operand stack.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushInt(i: number): this;
        /**
         * Add an instruction to push a long constant onto the operand stack.
         * 
         * The method optimizes the instruction based on the value of the long:
         * - For values 0L and 1L, it uses the `lconst_0` and `lconst_1` instructions respectively.
         * - For all other values, it uses the `ldc` instruction.
         * 
         * **Operand Stack:** (*l* is the pushed long constant. "---" is the second slot taken by the long.)
         * 
         * { ... } → { ... , *l* , --- }
         * 
         * @param l - The long constant to push onto the operand stack.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushLong(l: number): this;
        /**
         * Add a `dneg` instruction to the method.
         * 
         * The `dneg` instruction negates the top double on the operand stack.
         * 
         * **Operand Stack:** (*d* is the double to be negated, "---" is the second slot taken,
         *     and *result* is -*d*.)
         * 
         * { ... , *d* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleNeg(): this;
        /**
         * Add an `iload` instruction to the method.
         * 
         * The `iload` instruction loads an integer from a local variable onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the loaded integer.)
         * 
         * { ... } → { ... , *i* }
         * 
         * @param variableName - The name of the local variable to load the integer from.
         *     Use `this` for instance methods to refer to the current object (if this method is an instance method).
         *     Parameters names are `arg0`, `arg1`, etc. at default.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable does not exist or is not of type `int`.
        */
        loadInt(variableName: string): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is non-`null`.
         * 
         * The `ifNonNull` method pops the top object reference from the operand stack and checks if it is not `null`.
         * If the value is non-`null`, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Note:** `undefined` is treated as **non-`null`**.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being checked.)
         * 
         * { ... , *objectRef* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifNonNull(): this;
        /**
         * Add a `dup2_x2` instruction to the method.
         * 
         * The `dup2_x2` instruction duplicates the top one or two values on the operand stack and inserts them two, three, or four values down.
         * 
         * **Operand Stack:**
         * 
         * - If the top value is a long or double and the second value is also a long or double:
         *     (*v1* is the duplicated long or double, *v2* is the long or double below it, and "---" are the second slots taken.)
         *     - { ... , *v2* , --- , *v1* , --- } → { ... , *v1* , --- , *v2* , --- , *v1* , --- }
         * 
         * - If the top value is a long or double and the second value is not:
         *     (*v1* is the duplicated long or double, *v2* is the value below it, and "---" is the second slot taken.)
         *     - { ... , *v2* , *v1* , --- } → { ... , *v1* , --- , *v2* , *v1* , --- }
         * 
         * - If neither of the top two values is a long or double and the third value is a long or double:
         *     (*v1* and *v2* are the duplicated values, *v3* is the long or double below them, and "---" is the second slot taken.)
         *     - { ... , *v3* , --- , *v2* , *v1* } → { ... , *v2* , *v1* , *v3* , --- , *v2* , *v1* }
         * 
         * - If none of the top three values is a long or double:
         *     (*v1*, *v2*, and *v3* are the values, and none of them is a long or a double.)
         *     - { ... , *v4* , *v3* , *v2* , *v1* } → { ... , *v2* , *v1* , *v4* , *v3* , *v2* , *v1* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicate2X2(): this;
        /**
         * Add an `ishr` instruction to the method.
         * 
         * The `ishr` instruction performs an arithmetic right shift on the top integer on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*i1* is the integer to be shifted, *i2* is the number of bits to shift,
         *     and *result* is *i1* >> *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intRShift(): this;
        /**
         * Add a `freturn` instruction to the method.
         * 
         * The `freturn` instruction is used to return a float from a method.
         * Before `freturn`, the operand stack must have ***one and only one*** float value.
         * 
         * **Operand Stack:** (*f* is the returned float.)
         * 
         * { *f* } → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnFloat(): this;
        /**
         * Start an `if` statement that checks if the top two integers on the operand stack are less than.
         * 
         * The `ifLessThan` method pops the top two integers from the operand stack and checks if the first integer is less than the second integer.
         * If *i1* ≥ *i2*, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be compared.)
         * 
         * { ... , *i1* , *i2* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifGreaterThanOrEqualsTo(): this;
        /**
         * Add a `tableswitch` instruction to the method for switch-case control flow based on integer values.
         * 
         * The `tableswitch` instruction allows for efficient branching based on a range of integer values.
         * It pops an integer from the operand stack and jumps to the corresponding label based on the value.
         * If the value is outside the specified range, it jumps to the default label.
         * 
         * **Operand Stack:** (*index* is the integer value used for switching.)
         * 
         * { ... , *index* } → { ... }
         * 
         * @param min - The minimum integer value in the switch range (inclusive).
         * @param max - The maximum integer value in the switch range (inclusive).
         * @param actions - An array of actions (as `(MethodCodeBuilder) => void`) corresponding to each integer value from min to max.
         *     Each action will be executed when the operand stack's integer matches its index (min + i).
         *     **To break out of a case block, use the `breakCase()` method within the action.**
         *     Or else, the execution will **"fall through"** to the next case block.
         * @param defaultAction - The action (as `(MethodCodeBuilder) => void`) to execute if the integer value is outside the range [min, max].
         * @returns This `MethodCodeBuilder` instance.
         *     May be `null` if no default action is provided.
         * @throws `IllegalArgumentException` if the number of actions does not equal (max - min + 1).
        */
        tableSwitch(min: number, max: number, actions: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>[], defaultAction: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is positive.
         * 
         * The `ifPositive` method pops the top integer from the operand stack and checks if it is greater than zero.
         * If the value is positive, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifPositive(): this;
        /**
         * Add a `multianewarray` instruction to the method to create a new multi-dimensional array.
         * 
         * The `multianewarray` instruction creates a new multi-dimensional array of the specified type and dimensions,
         * and pushes its reference onto the operand stack.
         * The sizes of each dimension are determined by the integer values on the top of the operand stack.
         * 
         * **Operand Stack:** (*count1*, *count2*, ..., *countN* are the sizes of each dimension, and *arrayref* is the reference to the new multi-dimensional array.)
         * 
         * { ... , *count1* , *count2* , ... , *countN* } → { ... , *arrayref* }
         * 
         * @param arrayElementType - The type of elements in the new array (e.g., `int`, `java.lang.String`, etc.).
         * @param dimension - The number of dimensions for the new array (e.g., `2` for a 2D array).
         * @returns This `MethodCodeBuilder` instance.
        */
        newMultiArray(arrayElementType: Internal.ClassNameWrapper_, dimension: number): this;
        /**
         * Add an `ineg` instruction to the method.
         * 
         * The `ineg` instruction negates the top integer on the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be negated, and *result* is -*i*.)
         * 
         * { ... , *i* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intNeg(): this;
        /**
         * Add an `i2d` instruction to the method to convert the top integer on the operand stack to a double.
         * 
         * The `i2d` instruction converts the top integer on the operand stack to a double and pushes the resulting double back onto the operand stack.
         * 
         * **Operand Stack:** (*i* is the integer to be converted, and *d* is the resulting double.)
         * 
         * { ... , *i* } → { ... , *d* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intToDouble(): this;
        /**
         * Enters a `for` loop scope.
         * 
         * The loop consists of three parts: initialization, condition, and update.
         * The initialization part is executed once before the loop starts.
         * The condition part is executed before each iteration of the loop.
         * If the condition evaluates to `true`, the loop body is executed.
         * After the loop body, the update part is executed.
         * To exit the loop scope, call the `endLoop()` method.
         * 
         * It is better not to let them modify the stack height.
         * For example, `.loadInt("i").ifPositive()` is better than `.ifPositive()` because the latter modifies the stack height.
         * 
         * The condition part **MUST** be a valid method to begin an if scope.
         * 
         * @param initialization - A consumer that adds bytecode for the initialization part.
         * @param condition - A consumer that adds bytecode for the condition part.
         * @param update - A consumer that adds bytecode for the update part.
         * @returns This `MethodCodeBuilder` instance.
         * 
         * @example
         * // for (let i = 0; i < 10; i++) { ... }
         * ... Other code ...
         * .forLoop(
         *     mb => mb.pushInt(0).storeInt("i"), // initialization
         *     mb => mb.loadInt("i").pushInt(10).ifLessThan("loopBody"), // condition
         *     mb => mb.intIncrease("i", 1) // update
         * )
         *     ... Loop body ...
         * .endLoop() // End loop here
        */
        forLoop(initialization: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>, condition: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>, update: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>): this;
        /**
         * Add an instruction to push a float constant onto the operand stack.
         * 
         * The method optimizes the instruction based on the value of the float:
         * - For values 0.0f, 1.0f, and 2.0f, it uses the `fconst_0`, `fconst_1`, and `fconst_2` instructions respectively.
         * - For all other values, it uses the `ldc` instruction.
         * 
         * **Operand Stack:** (*f* is the pushed float constant.)
         * 
         * { ... } → { ... , *f* }
         * 
         * @param f - The float constant to push onto the operand stack.
         * @returns This `MethodCodeBuilder` instance.
        */
        pushFloat(f: number): this;
        /**
         * Add an `invokevirtual` instruction to the method to call an instance method on an object.
         * 
         * The `invokevirtual` instruction calls an instance method on an object.
         * The object reference and the arguments for the method must be on the operand stack in the correct order before executing this instruction.
         * If the method has a return value, it will be pushed onto the operand stack.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object, *arg1*, *arg2*, ..., *argN* are the arguments for the method, and *returnValue* is the return value of the method if it has one.)
         * 
         * { ... , *objectRef* , *arg1* , *arg2* , ... , *argN* } → { ... , *returnValue* }
         * 
         * @param objectType - The type of the object containing the instance method
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param methodName - The name of the instance method.
         * @param paramTypes - An array of parameter types for the method (e.g., `int`, `java.lang.String`, etc.).
         * @param returnType - The return type of the method (e.g., `int`, `java.lang.String`, or `void`).
         * @returns This `MethodCodeBuilder` instance.
        */
        invokeVirtual(objectType: Internal.ClassNameWrapper_, methodName: string, paramTypes: Internal.ClassNameWrapper_[], returnType: Internal.ClassNameWrapper_): this;
        tableSwitch(min: number, max: number, actions: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>[]): this;
        /**
         * Add an `iushr` instruction to the method.
         * 
         * The `iushr` instruction performs a logical right shift on the top integer on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*i1* is the integer to be shifted, *i2* is the number of bits to shift,
         *     and *result* is *i1* >>> *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intRShiftLogical(): this;
        /**
         * Add a `monitorexit` instruction to the method to release a monitor lock on an object.
         * 
         * The `monitorexit` instruction is used to release a monitor lock on the object whose reference is on the top of the operand stack.
         * This is typically used in synchronized blocks or methods to allow other threads to acquire the lock.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object whose monitor lock is being released.)
         * 
         * { ... , *objectRef* } → { ... }
         * 
         * **Note:** After executing `monitorexit`, the object reference is removed from the operand stack.
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        monitorExit(): this;
        /**
         * Add a `lxor` instruction to the method.
         * 
         * The `lxor` instruction performs a bitwise XOR operation on the top two longs on the operand stack.
         * 
         * **Operand Stack:** (*l1* and *l2* are the longs to be XORed, "---" are the second slots taken,
         *     and *result* is *l1* ^ *l2*.)
         * 
         * { ... , *l1* , --- , *l2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longXor(): this;
        /**
         * Add an `arraylength` instruction to the method to get the length of an array.
         * 
         * The `arraylength` instruction retrieves the length of an array and pushes it onto the operand stack.
         * The array reference must be on the top of the operand stack before executing this instruction.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the array, and *length* is the length of the array.)
         * 
         * { ... , *arrayref* } → { ... , *length* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        getArrayLength(): this;
        /**
         * Define a label at the current position in the method code.
         * 
         * This method creates a new label with the specified name and marks the current position in the method code with this label.
         * If a label with the same name already exists, an `IllegalArgumentException` is thrown.
         * 
         * Later, you can use the `labelName` in {@linkcode ifNonZero}, {@linkcode goto}, etc. to jump here.
         * 
         * @param labelName - The name of the label to be defined. Must be unique within the method.
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalArgumentException` if a label with the specified name already exists.
        */
        labelNext(labelName: string): this;
        /**
         * Add a `castore` instruction to the method.
         * 
         * The `castore` instruction stores a char into a char array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the char array,
         *     *index* is the index of the element to store, and *value* is the char to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeCharIntoArray(): this;
        /**
         * Add instructions to the method to end a synchronized block.
         * 
         * This method combines the `loadObject` and `monitorExit` instructions
         * to load the object reference from a local variable and release the monitor lock on the object.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being synchronized on.)
         * 
         * { ... } → { ... }
         * 
         * **Note:** You **MUST** call this method to release the monitor lock acquired by `synchronizeOn`.
         *     Failing to do so may lead to deadlocks in your program.
         * 
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalStateException if there is no open synchronized block to end.
        */
        synchronizeEnd(): this;
        /**
         * Add a `f2i` instruction to the method to convert the top float on the operand stack to an integer.
         * 
         * The `f2i` instruction converts the top float on the operand stack to an integer and pushes the resulting integer back onto the operand stack.
         * 
         * **Operand Stack:** (*f* is the float to be converted, and *i* is the resulting integer.)
         * 
         * { ... , *f* } → { ... , *i* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        floatToInt(): this;
        /**
         * Add a `sastore` instruction to the method.
         * 
         * The `sastore` instruction stores a short into a short array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the short array,
         *     *index* is the index of the element to store, and *value* is the short to store.)
         * 
         * { ... , *arrayref* , *index* , *value* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeShortIntoArray(): this;
        /**
         * Start an `if` statement that checks if the top integer on the operand stack is zero.
         * 
         * The `ifZero` method pops the top integer from the operand stack and checks if it is equal to zero.
         * If the value is zero, execution continues with the next instruction; otherwise, execution jumps to the instruction after the corresponding `fi()` or `else()`.
         * 
         * This method must be paired with a subsequent call to `fi()` to close the `if` statement.
         * 
         * **Operand Stack:** (*i* is the integer to be checked.)
         * 
         * { ... , *i* } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        ifZero(): this;
        /**
         * Add an `dstore` instruction to the method.
         * 
         * The `dstore` instruction stores a double from the operand stack into a local variable.
         * 
         * **Note:** All *store* instructions *overrides* the variable type.
         * 
         * **Operand Stack:** (*d* is the stored double and "---" is the second slot taken.)
         * 
         * { ... , *d* , --- } → { ... }
         * 
         * @param variableName - The name of the local variable to store the double into.
         *     If the local variable does not exist, it will be created.
         * @returns This `MethodCodeBuilder` instance.
         * @throws IllegalArgumentException if the local variable exists but is not of type `double`.
        */
        storeDouble(variableName: string): this;
        /**
         * Add an `isub` instruction to the method.
         * 
         * The `isub` instruction subtracts the top integer on the operand stack from the second top integer.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be subtracted, and *result* is *i1* - *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intSub(): this;
        /**
         * Add a `lookupswitch` instruction to the method for switch-case control flow based on specific integer keys.
         * 
         * The `lookupswitch` instruction allows for branching based on specific integer values.
         * It pops an integer from the operand stack and jumps to the corresponding label if the value matches one of the specified keys.
         * If the value does not match any key, it jumps to the default label.
         * 
         * **Operand Stack:** (*key* is the integer value used for switching.)
         * 
         * { ... , *key* } → { ... }
         * 
         * @param keys - An array of integer keys for the switch cases. Must be sorted in ascending order.
         * @param actions - An array of actions (as `(MethodCodeBuilder) => void`) corresponding to each key.
         *     Each action will be executed when the operand stack's integer matches its corresponding key.
         *     **To break out of a case block, use the `breakCase()` method within the action.**
         *     Or else, the execution will **"fall through"** to the next case block.
         * @param defaultAction - The action (as `(MethodCodeBuilder) => void`) to execute if the integer value does not match any key.
         * @returns This `MethodCodeBuilder` instance.
         *     May be `null` if no default action is provided.
         * @throws `IllegalArgumentException` if the number of actions does not equal the number of keys.
        */
        lookupSwitch(keys: number[], actions: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>[], defaultAction: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>): this;
        /**
         * Add instructions to the method to create a new object of a specified class and invoke its constructor with parameters.
         * 
         * This method combines the `new` instruction to create a new instance of the specified class,
         * and the `invokespecial` instruction to call the constructor of that class with the provided parameters.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the newly created object, *arg1*, *arg2*, ..., *argN* are the arguments for the constructor.
         *     *uninitializedObjectRef* is a special marker representing an uninitialized object reference.)
         * 
         * { ... }  → { ... , *uninitializedObjectRef* , *uninitializedObjectRef*}
         * 
         * (Then the passed `beforeInvoking` consumer is called to push constructor arguments onto the operand stack.)
         * 
         * → { ... , *uninitializedObjectRef* , *uninitializedObjectRef* , *arg1* , *arg2* , ... , *argN* }
         * 
         * (Final result below)
         * 
         * → { ... , *objectRef* }
         * 
         * **Note:** This method is equvilant to:
         * 
         * ```javascript
         * .newObject(clazz)
         * .duplicate()
         * // Push constructor arguments here
         * .invokeSpecial("className", "<init>", paramTypes, "void")
         * ```
         * 
         * @param clazz - The class to instantiate (e.g., `java.lang.String`).
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @param paramTypes - An array of parameter types for the constructor (e.g., `int`, `java.lang.String`, etc.).
         *     The types must match the types of the arguments pushed onto the operand stack before calling this method.
         * @param beforeInvoking - A consumer that accepts this `MethodCodeBuilder` instance.
         *     Use this consumer to push the constructor arguments onto the operand stack.
         *     The arguments must be pushed in the correct order (i.e., from first to last).
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalAccessException` if the specified class is denied by the `ClassFilter`.
        */
        newAndConstructObject(clazz: Internal.ClassNameWrapper_, paramTypes: Internal.ClassNameWrapper_[], beforeInvoking: Internal.Consumer_<Internal.MethodCreator$MethodCodeBuilder>): this;
        /**
         * Add a `baload` instruction to the method.
         * 
         * The `baload` instruction loads a byte or boolean from a byte array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the byte array,
         *     and *index* is the index of the element to load.
         *     *b* is the loaded byte or boolean from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *b* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadByteFromArray(): this;
        /**
         * Add an `lastore` instruction to the method.
         * 
         * The `lastore` instruction stores a long into a long array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the long array,
         *     *index* is the index of the element to store, and *value* is the long to store.
         *     "---" is the second slot taken by the long.)
         * 
         * { ... , *arrayref* , *index* , *value* , --- } → { ... }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        storeLongIntoArray(): this;
        /**
         * Add an `lshl` instruction to the method.
         * 
         * The `lshl` instruction performs a left shift on the top long on the operand stack by the number of bits specified by the second top integer.
         * 
         * **Operand Stack:** (*l* is the long to be shifted, "---" is the second slot taken,
         *     *i* is the number of bits to shift, and *result* is *l* << *i*.)
         * 
         * { ... , *l* , --- , *i* } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        longLShift(): this;
        /**
         * Add an `instanceof` instruction to the method to check if an object is an instance of a specified type.
         * 
         * The `instanceof` instruction checks whether the object on the top of the operand stack is an instance of the specified class or interface.
         * It pushes `1` (`true`) onto the operand stack if the object is an instance of the specified type, and `0` (`false`) otherwise.
         * 
         * **Operand Stack:** (*objectRef* is the reference to the object being checked, and *result* is `1` if true, `0` if false.)
         * 
         * { ... , *objectRef* } → { ... , *result* }
         * 
         * @param clazz - The class or interface to check against (e.g., `java.lang.String`).
         *     Can be a full qualified name of a class or a class object loaded from `Java.loadClass`.
         * @returns This `MethodCodeBuilder` instance.
        */
        isInstanceOf(clazz: Internal.ClassNameWrapper_): this;
        /**
         * Add an `iaload` instruction to the method.
         * 
         * The `iaload` instruction loads an integer from an integer array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the integer array,
         *     and *index* is the index of the element to load.
         *     *i* is the loaded integer from the array.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *i* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadIntFromArray(): this;
        /**
         * Add a `dup_x1` instruction to the method.
         * 
         * The `dup_x1` instruction duplicates the top value on the operand stack and inserts it two values down.
         * 
         * **Operand Stack:** (*v1* is the duplicated value, and *v2* is the value below it.
         *     Neither *v1* nor *v2* can be a long or a double.)
         * 
         * { ... , *v2* , *v1* } → { ... , *v1* , *v2* , *v1* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        duplicateX1(): this;
        /**
         * Add a `daload` instruction to the method.
         * 
         * The `daload` instruction loads a double from a double array.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the double array,
         *     and *index* is the index of the element to load.
         *     *d* is the loaded double from the array and "---" is the second slot taken.)
         * 
         * { ... , *arrayref* , *index* } → { ... , *d* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        loadDoubleFromArray(): this;
        /**
         * Add an `iadd` instruction to the method.
         * 
         * The `iadd` instruction adds the top two integers on the operand stack.
         * 
         * **Operand Stack:** (*i1* and *i2* are the integers to be added, and *result* is *i1* + *i2*.)
         * 
         * { ... , *i1* , *i2* } → { ... , *result* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        intAdd(): this;
        /**
         * Add a `nop` (no operation) instruction to the method.
         * 
         * The `nop` instruction does nothing and is often used for alignment or timing purposes.
         * 
         * **Operand Stack:**
         * 
         * {...} → {...}
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        noOperation(): this;
        /**
         * Add a `drem` instruction to the method.
         * 
         * The `drem` instruction computes the remainder of the division of the second top double on the operand stack by the top double.
         * 
         * **Operand Stack:** (*d1* and *d2* are the doubles, "---" are the second slots taken,
         *     and *result* is *d1* % *d2*.)
         * 
         * { ... , *d1* , --- , *d2* , --- } → { ... , *result* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleRem(): this;
        /**
         * Add an `areturn` instruction to the method.
         * 
         * The `areturn` instruction is used to return a reference from a method.
         * Before `areturn`, the operand stack must have ***one and only one*** reference value.
         * 
         * **Operand Stack:** (*o* is the returned reference.)
         * 
         * { *o* } → [*EMPTY*]
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        returnObject(): this;
        /**
         * Add a `d2l` instruction to the method to convert the top double on the operand stack to a long.
         * 
         * The `d2l` instruction converts the top double on the operand stack to a long and pushes the resulting long back onto the operand stack.
         * 
         * **Operand Stack:** (*d* is the double to be converted, "---" is the second slot taken, and *l* is the resulting long.)
         * 
         * { ... , *d* , --- } → { ... , *l* , --- }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        doubleToLong(): this;
        /**
         * @deprecated This instruction is deprecated in Java 6 and later.
         * 
         * Add a `jsr` instruction to the method to jump to a specified subroutine.
         * 
         * The `jsr` instruction causes a jump to a specified label in the method code, saving the return address on the operand stack.
         * This instruction is used for implementing subroutines in Java bytecode.
         * 
         * **Operand Stack:** (*returnAddress* is the address to return to after the subroutine.)
         * 
         * { ... } → { ... , *returnAddress* }
         * 
         * @param labelName - The name of the label to jump to.
         * @returns This `MethodCodeBuilder` instance.
        */
        jumpSubroutine(labelName: string): this;
        /**
         * @deprecated This instruction is deprecated in Java 6 and later.
         * 
         * Add a `ret` instruction to the method to return from a subroutine.
         * 
         * The `ret` instruction returns from a subroutine by jumping to the address stored in a local variable.
         * This instruction is used in conjunction with the `jsr` instruction for implementing subroutines in Java bytecode.
         * 
         * **Operand Stack:**
         * 
         * { ... } → { ... }
         * 
         * @param variableName - The name of the local variable that contains the return address.
         * @returns This `MethodCodeBuilder` instance.
         * @throws `IllegalArgumentException` if the specified variable does not exist.
        */
        returnSubroutine(variableName: string): this;
        /**
         * Add an `arraylength` instruction to the method to get the length of an array.
         * 
         * The `arraylength` instruction retrieves the length of an array and pushes it onto the operand stack.
         * The array reference must be on the top of the operand stack before executing this instruction.
         * 
         * **Operand Stack:** (*arrayref* is the reference to the array, and *length* is the length of the array.)
         * 
         * { ... , *arrayref* } → { ... , *length* }
         * 
         * @returns This `MethodCodeBuilder` instance.
        */
        get arrayLength(): Internal.MethodCreator$MethodCodeBuilder
    }
    type MethodCreator$MethodCodeBuilder_ = MethodCreator$MethodCodeBuilder;
    class RuinedPortalStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: any_)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.List_<any>)
        static readonly CODEC: Internal.Codec<Internal.RuinedPortalStructure>;
    }
    type RuinedPortalStructure_ = RuinedPortalStructure;
    class ClientboundSetChunkCacheCenterPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        isSkippable(): boolean;
        get x(): number
        get z(): number
        get skippable(): boolean
    }
    type ClientboundSetChunkCacheCenterPacket_ = ClientboundSetChunkCacheCenterPacket;
    class ListCodec <A> implements Internal.Codec<Internal.List<A>> {
        constructor(arg0: Internal.Codec_<A>)
        optionalFieldOf(arg0: string, arg1: Internal.List_<A>): Internal.MapCodec<Internal.List<A>>;
        dispatchMap<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.MapCodec<E>;
        static empty<A>(): Internal.MapEncoder<A>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Decoder<any>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<Internal.List<A>>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        comap<B>(arg0: Internal.Function_<B, Internal.List<A>>): Internal.Encoder<B>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.List<A>, T>>;
        stable(): Internal.Codec<Internal.List<A>>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<Internal.List<A>>>, arg2: Internal.Function_<Internal.List<A>, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.List<A>>, arg2: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
        encode<T>(arg0: Internal.List_<A>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        optionalFieldOf(arg0: string, arg1: Internal.List_<A>, arg2: Internal.Lifecycle_): Internal.MapCodec<Internal.List<A>>;
        map<B>(arg0: Internal.Function_<Internal.List<A>, B>): Internal.Decoder<B>;
        terminal(): Internal.Decoder$Terminal<Internal.List<A>>;
        flatMap<B>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<B>>): Internal.Decoder<B>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        comapFlatMap<S>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.List<A>>): Internal.Codec<S>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.List_<A>): Internal.DataResult<T>;
        simple(): Internal.Decoder$Simple<Internal.List<A>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        flatXmap<S>(arg0: Internal.Function_<Internal.List<A>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.List<A>>>): Internal.Codec<S>;
        flatComapMap<S>(arg0: Internal.Function_<Internal.List<A>, S>, arg1: Internal.Function_<S, Internal.DataResult<Internal.List<A>>>): Internal.Codec<S>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<Internal.List<A>>>;
        fieldOf(arg0: string): Internal.MapDecoder<any>;
        mapResult(arg0: Internal.Codec$ResultFunction_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.List<A>>;
        dispatch<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
        orElse(arg0: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: Internal.List_<A>, arg3: Internal.Lifecycle_): Internal.MapCodec<Internal.List<A>>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        deprecated(arg0: number): Internal.Codec<Internal.List<A>>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.List<A>>>): Internal.Encoder<B>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, Internal.List<A>>, arg2: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.MapCodec<E>;
        boxed(): Internal.Decoder$Boxed<Internal.List<A>>;
        promotePartial(arg0: Internal.Consumer_<any>): Internal.Decoder<any>;
        orElseGet(arg0: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.List<A>>): Internal.Codec<Internal.List<A>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        listOf(): Internal.Codec<Internal.List<Internal.List<A>>>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.List_<A>): Internal.Codec<Internal.List<A>>;
        xmap<S>(arg0: Internal.Function_<Internal.List<A>, S>, arg1: Internal.Function_<S, Internal.List<A>>): Internal.Codec<S>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.List<A>, T>>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
        dispatchStable<E>(arg0: Internal.Function_<E, Internal.List<A>>, arg1: Internal.Function_<Internal.List<A>, Internal.Codec<E>>): Internal.Codec<E>;
    }
    type ListCodec_<A> = ListCodec<A>;
    class NetworkEvent$ClientCustomPayloadEvent extends Internal.NetworkEvent {
        constructor()
    }
    type NetworkEvent$ClientCustomPayloadEvent_ = NetworkEvent$ClientCustomPayloadEvent;
    class RecipeComponentValue <T> implements Internal.Map$Entry<Internal.RecipeKey<T>, T>, Internal.WrappedJS {
        constructor(key: Internal.RecipeKey_<T>, index: number)
        getKey(): any;
        static comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        shouldWrite(): boolean;
        isOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_): boolean;
        replaceInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        isInput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_): boolean;
        getIndex(): number;
        copy(): this;
        checkEmpty(): string;
        static comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        write(): void;
        static copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getValue(): T;
        static comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        static comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        setValue(newValue: T): T;
        get key(): any
        get index(): number
        get value(): T
        set value(newValue: T)
        readonly index: number;
        value: T;
        readonly key: Internal.RecipeKey<T>;
        static readonly EMPTY_ARRAY: Internal.RecipeComponentValue<any>[];
        write: boolean;
    }
    type RecipeComponentValue_<T> = RecipeComponentValue<T>;
    abstract class AbstractCandleBlock extends Internal.Block {
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
        canBeLit(arg0: Internal.BlockState_): boolean;
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
        static extinguish(arg0: Player_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): void;
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
        static isLit(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        abstract getParticleOffsets(arg0: Internal.BlockState_): Internal.Iterable<Vec3d>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly LIGHT_PER_CANDLE: 3;
        static readonly LIT: Internal.BooleanProperty;
    }
    type AbstractCandleBlock_ = AbstractCandleBlock;
    class RealmsWorldOptions extends Internal.ValueObject {
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: string)
        static createDefaults(): Internal.RealmsWorldOptions;
        getSlotName(arg0: number): string;
        clone(): this;
        getDefaultSlotName(arg0: number): string;
        setEmpty(arg0: boolean): void;
        static createEmptyDefaults(): Internal.RealmsWorldOptions;
        static parse(arg0: Internal.JsonObject_): Internal.RealmsWorldOptions;
        toJson(): string;
        set empty(arg0: boolean)
        readonly difficulty: number;
        readonly commandBlocks: boolean;
        empty: boolean;
        templateImage: string;
        readonly gameMode: number;
        readonly spawnMonsters: boolean;
        readonly forceGameMode: boolean;
        templateId: number;
        readonly spawnAnimals: boolean;
        readonly spawnNPCs: boolean;
        readonly spawnProtection: number;
        readonly pvp: boolean;
    }
    type RealmsWorldOptions_ = RealmsWorldOptions;
    class ModifierOperation {
        constructor(arg0: Internal.ModifierOperation$Phase_, arg1: number, arg2: any_<Internal.List<number>, number, number, number>)
        getPhase(): Internal.ModifierOperation$Phase;
        getOrder(): number;
        getCodec(): Internal.Codec<Internal.ConfiguredModifier<any>>;
        apply(arg0: Internal.List_<Internal.ConfiguredModifier<any>>, arg1: Internal.Entity_, arg2: number, arg3: number): number;
        get phase(): Internal.ModifierOperation$Phase
        get order(): number
        get codec(): Internal.Codec<Internal.ConfiguredModifier<any>>
        static readonly STRICT_CODEC: Internal.Codec<Internal.ModifierOperation>;
        static readonly CODEC: Internal.Codec<Internal.ModifierOperation>;
    }
    type ModifierOperation_ = Special.Modifier | ModifierOperation;
    class MendingTableBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
    type MendingTableBlock_ = MendingTableBlock;
    class BendingTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.IntProvider_)
        static readonly CODEC: Internal.Codec<Internal.BendingTrunkPlacer>;
    }
    type BendingTrunkPlacer_ = BendingTrunkPlacer;
    class BlockPlacerItem extends Internal.BlockItem {
        constructor(pBlock: Internal.Block_, pProperties: Internal.Item$Properties_)
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
        static get(): Internal.BlockPlacerItem;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        mimicGetPlacementState(pContext: Internal.BlockPlaceContext_, toPlace: Internal.Block_): Internal.BlockState;
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
        mimicPlace(pContext: Internal.BlockPlaceContext_, toPlace: Internal.Block_, overrideSound: SoundType_): InteractionResult;
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
        mimicUseOn(pContext: Internal.UseOnContext_, toPlace: Internal.Block_, foodProperties: Internal.FoodProperties_): InteractionResult;
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
    type BlockPlacerItem_ = BlockPlacerItem;
    class UnboundedMapCodec <K, V> implements Internal.BaseMapCodec<K, V>, Internal.Codec<Internal.Map<K, V>> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>)
        keyCodec(): Internal.Codec<K>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        dispatchStable<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        optionalFieldOf(arg0: string, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static empty<A>(): Internal.MapEncoder<A>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Decoder<any>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        deprecated(arg0: number): Internal.Codec<Internal.Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: Internal.Map_<K, V>, arg2: Internal.Lifecycle_): Internal.MapCodec<Internal.Map<K, V>>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        dispatchMap<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.MapCodec<E>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<Internal.Map<K, V>>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.Map<K, V>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.Decoder<B>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, Internal.Map<K, V>>, arg2: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.MapCodec<E>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.Encoder<B>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Map<K, V>, T>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        elementCodec(): Internal.Codec<V>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        boxed(): Internal.Decoder$Boxed<Internal.Map<K, V>>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        fieldOf(arg0: string): Internal.MapDecoder<any>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<Internal.Map<K, V>>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        orElse(arg0: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        listOf(): Internal.Codec<Internal.List<Internal.Map<K, V>>>;
        xmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.Codec<S>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        stable(): Internal.Codec<Internal.Map<K, V>>;
        flatComapMap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.Codec<S>;
        simple(): Internal.Decoder$Simple<Internal.Map<K, V>>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Map<K, V>, T>>;
        comapFlatMap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.Codec<S>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.Encoder<B>;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.Decoder<B>;
        promotePartial(arg0: Internal.Consumer_<any>): Internal.Decoder<any>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        mapResult(arg0: Internal.Codec$ResultFunction_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        dispatch<E>(arg0: Internal.Function_<E, Internal.Map<K, V>>, arg1: Internal.Function_<Internal.Map<K, V>, Internal.Codec<E>>): Internal.Codec<E>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.Map_<K, V>): Internal.DataResult<T>;
        terminal(): Internal.Decoder$Terminal<Internal.Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: Internal.Map_<K, V>, arg3: Internal.Lifecycle_): Internal.MapCodec<Internal.Map<K, V>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        orElseGet(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.Codec<Internal.Map<K, V>>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.Codec<Internal.Map<K, V>>;
        flatXmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.Codec<S>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
    }
    type UnboundedMapCodec_<K, V> = UnboundedMapCodec<K, V>;
    class User {
        constructor(arg0: string, arg1: string, arg2: string, arg3: Internal.Optional_<string>, arg4: Internal.Optional_<string>, arg5: Internal.User$Type_)
        getGameProfile(): Internal.GameProfile;
        getClientId(): Internal.Optional<string>;
        getSessionId(): string;
        getName(): string;
        hasCachedProperties(): boolean;
        getXuid(): Internal.Optional<string>;
        setProperties(arg0: Internal.PropertyMap_): void;
        getUuid(): string;
        getAccessToken(): string;
        getType(): Internal.User$Type;
        getProfileId(): Internal.UUID;
        get gameProfile(): Internal.GameProfile
        get clientId(): Internal.Optional<string>
        get sessionId(): string
        get name(): string
        get xuid(): Internal.Optional<string>
        set properties(arg0: Internal.PropertyMap_)
        get uuid(): string
        get accessToken(): string
        get type(): Internal.User$Type
        get profileId(): Internal.UUID
    }
    type User_ = User;
    class UnrefinedWasteBlock extends Internal.FallingBlockWithColor {
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
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type UnrefinedWasteBlock_ = UnrefinedWasteBlock;
    class RawAnimation {
        constructor(arg0: Internal.List_<Internal.RawAnimation$Stage>)
        then(arg0: string, arg1: Internal.Animation$LoopType_): this;
        static begin(): Internal.RawAnimation;
        thenLoop(arg0: string): this;
        getStageCount(): number;
        static copyOf(arg0: Internal.RawAnimation_): Internal.RawAnimation;
        thenWait(arg0: number): this;
        thenPlayAndHold(arg0: string): this;
        thenPlayXTimes(arg0: string, arg1: number): this;
        thenPlay(arg0: string): this;
        getAnimationStages(): Internal.List<Internal.RawAnimation$Stage>;
        get stageCount(): number
        get animationStages(): Internal.List<Internal.RawAnimation$Stage>
    }
    type RawAnimation_ = RawAnimation;
    class SimpleRandomFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.HolderSet_<Internal.PlacedFeature>)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.SimpleRandomFeatureConfiguration>;
        readonly features: Internal.HolderSet<Internal.PlacedFeature>;
    }
    type SimpleRandomFeatureConfiguration_ = SimpleRandomFeatureConfiguration;
    abstract class CharBuffer extends Internal.Buffer implements Internal.Comparable<Internal.CharBuffer>, Internal.CharSequence, Internal.Appendable, Internal.Readable {
        mark(): this;
        static wrap(arg0: string[], arg1: number, arg2: number): Internal.CharBuffer;
        abstract get(): string;
        static wrap(arg0: Internal.CharSequence_): Internal.CharBuffer;
        array(): string[];
        put(arg0: string): this;
        position(arg0: number): this;
        isEmpty(): boolean;
        clear(): this;
        compareTo(arg0: any): number;
        abstract asReadOnlyBuffer(): this;
        subSequence(arg0: number, arg1: number): Internal.CharSequence;
        read(arg0: Internal.CharBuffer_): number;
        get(arg0: number, arg1: string[], arg2: number, arg3: number): this;
        rewind(): this;
        abstract order(): Internal.ByteOrder;
        put(arg0: number, arg1: string[]): this;
        charAt(arg0: number): string;
        abstract put(arg0: number, arg1: string): this;
        get(arg0: number, arg1: string[]): this;
        put(arg0: Internal.CharBuffer_): this;
        length(): number;
        put(arg0: number, arg1: string[], arg2: number, arg3: number): this;
        abstract compact(): this;
        put(arg0: number, arg1: Internal.CharBuffer_, arg2: number, arg3: number): this;
        limit(arg0: number): this;
        abstract get(arg0: number): string;
        static allocate(arg0: number): Internal.CharBuffer;
        get(arg0: string[]): this;
        abstract put(arg0: string): this;
        put(arg0: string[]): this;
        put(arg0: string, arg1: number, arg2: number): this;
        append(arg0: string): this;
        static wrap(arg0: Internal.CharSequence_, arg1: number, arg2: number): Internal.CharBuffer;
        append(arg0: Internal.CharSequence_): this;
        static wrap(arg0: string[]): Internal.CharBuffer;
        static compare(arg0: Internal.CharSequence_, arg1: Internal.CharSequence_): number;
        mismatch(arg0: Internal.CharBuffer_): number;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        compareTo(arg0: Internal.CharBuffer_): number;
        chars(): Internal.IntStream;
        get(arg0: string[], arg1: number, arg2: number): this;
        put(arg0: string[], arg1: number, arg2: number): this;
        abstract slice(arg0: number, arg1: number): this;
        abstract duplicate(): this;
        codePoints(): Internal.IntStream;
        get empty(): boolean
    }
    type CharBuffer_ = CharBuffer;
    class MossMultifaceBlock extends Internal.MultifaceBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
    type MossMultifaceBlock_ = MossMultifaceBlock;
    class Uniform extends Internal.AbstractUniform implements Internal.AutoCloseable {
        constructor(arg0: string, arg1: number, arg2: number, arg3: Internal.Shader_)
        upload(): void;
        getCount(): number;
        getFloatBuffer(): Internal.FloatBuffer;
        static glGetAttribLocation(arg0: number, arg1: Internal.CharSequence_): number;
        static uploadInteger(arg0: number, arg1: number): void;
        setLocation(arg0: number): void;
        set(arg0: number, arg1: number): void;
        getIntBuffer(): Internal.IntBuffer;
        static glBindAttribLocation(arg0: number, arg1: number, arg2: Internal.CharSequence_): void;
        getType(): number;
        static glGetUniformLocation(arg0: number, arg1: Internal.CharSequence_): number;
        getName(): string;
        close(): void;
        static getTypeFromString(arg0: string): number;
        getLocation(): number;
        get count(): number
        get floatBuffer(): Internal.FloatBuffer
        set location(arg0: number)
        get intBuffer(): Internal.IntBuffer
        get type(): number
        get name(): string
        get location(): number
        static readonly UT_MAT4: 10;
        static readonly UT_FLOAT4: 7;
        static readonly UT_MAT2: 8;
        static readonly UT_MAT3: 9;
        static readonly UT_INT2: 1;
        static readonly UT_INT1: 0;
        static readonly UT_INT4: 3;
        static readonly UT_FLOAT3: 6;
        static readonly UT_INT3: 2;
        static readonly UT_FLOAT2: 5;
        static readonly UT_FLOAT1: 4;
    }
    type Uniform_ = Uniform;
    class EnchantmentInstance extends Internal.WeightedEntry$IntrusiveBase {
        constructor(arg0: Internal.Enchantment_, arg1: number)
        static wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        readonly level: number;
        readonly enchantment: Internal.Enchantment;
    }
    type EnchantmentInstance_ = EnchantmentInstance;
    class ClientboundRecipePacket$State extends Internal.Enum<Internal.ClientboundRecipePacket$State> {
        static values(): Internal.ClientboundRecipePacket$State[];
        static valueOf(arg0: string): Internal.ClientboundRecipePacket$State;
        static readonly REMOVE: Internal.ClientboundRecipePacket$State;
        static readonly ADD: Internal.ClientboundRecipePacket$State;
        static readonly INIT: Internal.ClientboundRecipePacket$State;
    }
    type ClientboundRecipePacket$State_ = "init" | "remove" | ClientboundRecipePacket$State | "add";
    class MushroomCow extends Internal.Cow implements Internal.Shearable, Internal.IForgeShearable {
        constructor(arg0: Internal.EntityType_<Internal.MushroomCow>, arg1: Internal.Level_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setVariant(arg0: Internal.MushroomCow$MushroomType_): void;
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
        readyForShearing(): boolean;
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
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        getVariant(): Internal.MushroomCow$MushroomType;
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
        shear(arg0: Internal.SoundSource_): void;
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
        static checkMushroomSpawnRules(arg0: Internal.EntityType_<Internal.MushroomCow>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
        set variant(arg0: Internal.MushroomCow$MushroomType_)
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
        get variant(): Internal.MushroomCow$MushroomType
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
    type MushroomCow_ = MushroomCow;
    abstract class PathfinderMobBuilder <T extends Internal.PathfinderMob & Internal.IAnimatableJS> extends Internal.MobBuilder<T> {
        constructor(i: ResourceLocation_)
        /**
         * Sets the follow leash speed for the entity.
         * 
         * @param speed The follow leash speed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.followLeashSpeed(1.5);
         * ```
        */
        followLeashSpeed(speed: number): this;
        /**
         * Sets the walk target value function for the entity.
         * 
         * @param function A Function accepting a {@link ContextUtils.EntityBlockPosLevelContext} parameter,
         *                 defining the walk target value based on the entity's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.walkTargetValue(context => {
         *     // Custom logic to calculate the walk target value based on the provided context.
         *     // Access information about the block position and level using the provided context.
         *     return 10;
         * });
         * ```
        */
        walkTargetValue(function_: Internal.Function_<Internal.ContextUtils$EntityBlockPosLevelContext, any>): this;
        /**
         * Sets the function to determine whether the entity should stay close to its leash holder.
         * 
         * @param predicate A Function accepting a {@link Mob} parameter,
         *                  defining the condition for the entity to stay close to its leash holder.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldStayCloseToLeashHolder(entity => {
         *     // Custom logic to determine whether the entity should stay close to its leash holder.
         *     return true;
         * });
         * ```
        */
        shouldStayCloseToLeashHolder(predicate: Internal.Function_<Internal.Mob, any>): this;
        createObject(): any;
    }
    type PathfinderMobBuilder_<T extends Internal.PathfinderMob & Internal.IAnimatableJS> = PathfinderMobBuilder<T>;
    class ClientboundBlockDestructionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: BlockPos_, arg2: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getProgress(): number;
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get progress(): number
        get pos(): BlockPos
        get skippable(): boolean
        get id(): number
    }
    type ClientboundBlockDestructionPacket_ = ClientboundBlockDestructionPacket;
    class StairBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.Supplier_<Internal.BlockState>, arg1: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static isStairs(arg0: Internal.BlockState_): boolean;
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
        static readonly SHAPE: Internal.EnumProperty<Internal.StairsShape>;
        static readonly OCTET_NPN: Internal.CubeVoxelShape;
        static readonly OCTET_PPN: Internal.CubeVoxelShape;
        static readonly OCTET_NNN: Internal.CubeVoxelShape;
        static readonly OCTET_NPP: Internal.CubeVoxelShape;
        static readonly OCTET_PNN: Internal.CubeVoxelShape;
        static readonly OCTET_PPP: Internal.CubeVoxelShape;
        static readonly OCTET_NNP: Internal.CubeVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly OCTET_PNP: Internal.CubeVoxelShape;
        static readonly BOTTOM_SHAPES: Internal.VoxelShape[];
        static readonly HALF: Internal.EnumProperty<Internal.Half>;
        static readonly TOP_AABB: Internal.CubeVoxelShape;
        static readonly BOTTOM_AABB: Internal.CubeVoxelShape;
        static readonly TOP_SHAPES: Internal.VoxelShape[];
        static readonly FACING: Internal.DirectionProperty;
    }
    type StairBlock_ = StairBlock;
    class LightSectionDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.LightLayer_)
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
    }
    type LightSectionDebugRenderer_ = LightSectionDebugRenderer;
    interface ChangeOverTimeBlock <T extends Internal.Enum<T>> {
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        abstract getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        abstract getAge(): T;
        abstract getChanceModifier(): number;
        get age(): T
        get chanceModifier(): number
        readonly SCAN_DISTANCE: 4;
    }
    type ChangeOverTimeBlock_<T extends Internal.Enum<T>> = ChangeOverTimeBlock<T>;
    interface Hash {
        /**
         * @deprecated
        */
        readonly PRIMES: number[];
        readonly DEFAULT_LOAD_FACTOR: 0.75;
        /**
         * @deprecated
        */
        readonly FREE: 0;
        readonly VERY_FAST_LOAD_FACTOR: 0.25;
        /**
         * @deprecated
        */
        readonly DEFAULT_GROWTH_FACTOR: 16;
        readonly FAST_LOAD_FACTOR: 0.5;
        /**
         * @deprecated
        */
        readonly OCCUPIED: -1;
        /**
         * @deprecated
        */
        readonly REMOVED: 1;
        readonly DEFAULT_INITIAL_SIZE: 16;
    }
    type Hash_ = Hash;
    class Toast$Visibility extends Internal.Enum<Internal.Toast$Visibility> {
        playSound(arg0: Internal.SoundManager_): void;
        static values(): Internal.Toast$Visibility[];
        static valueOf(arg0: string): Internal.Toast$Visibility;
        static readonly HIDE: Internal.Toast$Visibility;
        static readonly SHOW: Internal.Toast$Visibility;
    }
    type Toast$Visibility_ = "hide" | "show" | Toast$Visibility;
    interface SerializationAttribute$Instance {
        abstract attribute(): Internal.SerializationAttribute;
        abstract value(): any;
    }
    type SerializationAttribute$Instance_ = SerializationAttribute$Instance;
    class SerializableDataType <T> implements Internal.Codec<T> {
        constructor(arg0: T, arg1: Internal.Codec_<T>)
        constructor(arg0: T, arg1: Internal.BiConsumer_<Internal.FriendlyByteBuf, T>, arg2: Internal.Function_<Internal.FriendlyByteBuf, T>, arg3: Internal.Function_<Internal.JsonElement, T>)
        constructor(arg0: T, arg1: Internal.BiConsumer_<Internal.FriendlyByteBuf, T>, arg2: Internal.Function_<Internal.FriendlyByteBuf, T>, arg3: Internal.Function_<Internal.JsonElement, T>, arg4: Internal.Function_<T, Internal.JsonElement>)
        boxed(): Internal.Decoder$Boxed<T>;
        deprecated(arg0: number): Internal.Codec<T>;
        dispatch<E>(arg0: Internal.Function_<E, T>, arg1: Internal.Function_<T, Internal.Codec<E>>): Internal.Codec<E>;
        flatXmap<S>(arg0: Internal.Function_<T, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<T>>): Internal.Codec<S>;
        static empty<A>(): Internal.MapEncoder<A>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Decoder<any>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<T>): Internal.Codec<T>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<T, T>>;
        static registry<T>(arg0: T, arg1: Internal.Registry_<T>): Internal.SerializableDataType<T>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<T>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        static registryKey<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.SerializableDataType<Internal.ResourceKey<T>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<T>>): Internal.Encoder<B>;
        read(arg0: Internal.JsonElement_): T;
        static compound<T>(arg0: T, arg1: Internal.SerializableData_, arg2: Internal.Function_<Internal.SerializableData$Instance, T>, arg3: Internal.BiFunction_<Internal.SerializableData, T, Internal.SerializableData$Instance>): Internal.SerializableDataType<T>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, T>, arg2: Internal.Function_<T, Internal.Codec<E>>): Internal.MapCodec<E>;
        mapResult(arg0: Internal.Codec$ResultFunction_<T>): Internal.Codec<T>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: T): Internal.Codec<T>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): Internal.Decoder<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: T, arg3: Internal.Lifecycle_): Internal.MapCodec<T>;
        send(arg0: Internal.FriendlyByteBuf_, arg1: any): void;
        listOf(): Internal.Codec<Internal.List<T>>;
        comap<B>(arg0: Internal.Function_<B, T>): Internal.Encoder<B>;
        encode<T1>(arg0: T, arg1: Internal.DynamicOps_<T1>, arg2: T1): Internal.DataResult<T1>;
        flatComapMap<S>(arg0: Internal.Function_<T, S>, arg1: Internal.Function_<S, Internal.DataResult<T>>): Internal.Codec<S>;
        cast(arg0: any): T;
        static tag<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.SerializableDataType<Internal.TagKey<T>>;
        xmap<S>(arg0: Internal.Function_<T, S>, arg1: Internal.Function_<S, T>): Internal.Codec<S>;
        orElse(arg0: T): Internal.Codec<T>;
        optionalFieldOf(arg0: string, arg1: T): Internal.MapCodec<T>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        static enumValue<T extends Internal.Enum<T>>(arg0: T, arg1: Internal.Function_<T, string>): Internal.SerializableDataType<T>;
        static wrap<T, U>(arg0: T, arg1: Internal.SerializableDataType_<U>, arg2: Internal.Function_<T, U>, arg3: Internal.Function_<U, T>): Internal.SerializableDataType<T>;
        static tagLike<T>(arg0: Internal.Registry_<T>): Internal.SerializableDataType<Internal.TagLike<T>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        terminal(): Internal.Decoder$Terminal<T>;
        static enumSet<T extends Internal.Enum<T>>(arg0: T, arg1: Internal.SerializableDataType_<T>): Internal.SerializableDataType<Internal.EnumSet<T>>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        fieldOf(arg0: string): Internal.MapDecoder<any>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>, arg2: string): Internal.Codec<A>;
        stable(): Internal.Codec<T>;
        simple(): Internal.Decoder$Simple<T>;
        static weightedList<T>(arg0: Internal.SerializableDataType_<T>): Internal.SerializableDataType<Internal.FilterableWeightedList<T>>;
        dispatchMap<E>(arg0: Internal.Function_<E, T>, arg1: Internal.Function_<T, Internal.Codec<E>>): Internal.MapCodec<E>;
        orElse(arg0: Internal.Consumer_<string>, arg1: T): Internal.Codec<T>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): Internal.Decoder<A>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<T>>;
        static enumValue<T extends Internal.Enum<T>>(arg0: T): Internal.SerializableDataType<T>;
        optionalFieldOf(arg0: string, arg1: T, arg2: Internal.Lifecycle_): Internal.MapCodec<T>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): Internal.Decoder<A>;
        dispatchStable<E>(arg0: Internal.Function_<E, T>, arg1: Internal.Function_<T, Internal.Codec<E>>): Internal.Codec<E>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, T>, arg2: Internal.Function_<T, Internal.Codec<E>>): Internal.Codec<E>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<T>;
        codec(): Internal.Optional<Internal.Codec<T>>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<T>): Internal.Codec<T>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        static list<T>(arg0: Internal.SerializableDataType_<T>): Internal.SerializableDataType<Internal.List<T>>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<T>;
        promotePartial(arg0: Internal.Consumer_<any>): Internal.Decoder<any>;
        flatMap<B>(arg0: Internal.Function_<T, Internal.DataResult<B>>): Internal.Decoder<B>;
        receive(arg0: Internal.FriendlyByteBuf_): T;
        map<B>(arg0: Internal.Function_<T, B>): Internal.Decoder<B>;
        static isDataContext<T>(arg0: Internal.DynamicOps_<T>): boolean;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        static mapped<T>(arg0: T, arg1: Internal.BiMap_<string, T>): Internal.SerializableDataType<T>;
        static argumentType<T, U extends Internal.ArgumentType<T>>(arg0: U): Internal.SerializableDataType<Internal.ArgumentWrapper<T>>;
        static enumValue<T extends Internal.Enum<T>>(arg0: T, arg1: Internal.HashMap_<string, T>): Internal.SerializableDataType<T>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: Internal.Decoder_<A>): Internal.Codec<A>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<T>>, arg2: Internal.Function_<T, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        orElseGet(arg0: Internal.Supplier_<T>): Internal.Codec<T>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        write(arg0: T): Internal.JsonElement;
        decode<T1>(arg0: Internal.DynamicOps_<T1>, arg1: T1): Internal.DataResult<com.mojang.datafixers.util.Pair<T, T1>>;
        comapFlatMap<S>(arg0: Internal.Function_<T, Internal.DataResult<S>>, arg1: Internal.Function_<S, T>): Internal.Codec<S>;
        static registry<T>(arg0: T, arg1: Internal.IForgeRegistry_<T>): Internal.SerializableDataType<T>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
    }
    type SerializableDataType_<T> = SerializableDataType<T>;
    class ClientPacketListener implements Internal.ClientGamePacketListener, Internal.NetworkHandlerExtensions, Internal.TickablePacketListener {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Screen_, arg2: Internal.Connection_, arg3: Internal.ServerData_, arg4: Internal.GameProfile_, arg5: Internal.WorldSessionTelemetryManager_)
        setActionBarText(arg0: Internal.ClientboundSetActionBarTextPacket_): void;
        handleContainerSetSlot(arg0: Internal.ClientboundContainerSetSlotPacket_): void;
        handleAddPlayer(arg0: Internal.ClientboundAddPlayerPacket_): void;
        handleSetScore(arg0: Internal.ClientboundSetScorePacket_): void;
        handleAnimate(arg0: Internal.ClientboundAnimatePacket_): void;
        handlePlayerInfoRemove(arg0: Internal.ClientboundPlayerInfoRemovePacket_): void;
        handleResourcePack(arg0: Internal.ClientboundResourcePackPacket_): void;
        handleOpenScreen(arg0: Internal.ClientboundOpenScreenPacket_): void;
        handleContainerContent(arg0: Internal.ClientboundContainerSetContentPacket_): void;
        handleLogin(arg0: Internal.ClientboundLoginPacket_): void;
        handleTagQueryPacket(arg0: Internal.ClientboundTagQueryPacket_): void;
        getConnection(): Internal.Connection;
        getPlayerInfo(arg0: string): Internal.PlayerInfo;
        onDisconnect(arg0: Internal.Component_): void;
        handleUpdateAttributes(arg0: Internal.ClientboundUpdateAttributesPacket_): void;
        handleSetSpawn(arg0: Internal.ClientboundSetDefaultSpawnPositionPacket_): void;
        handleCustomPayload(arg0: Internal.ClientboundCustomPayloadPacket_): void;
        handleLookAt(arg0: Internal.ClientboundPlayerLookAtPacket_): void;
        handlePlayerInfoUpdate(arg0: Internal.ClientboundPlayerInfoUpdatePacket_): void;
        handleParticleEvent(arg0: Internal.ClientboundLevelParticlesPacket_): void;
        sendChat(arg0: string): void;
        levels(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        getCommands(): Internal.CommandDispatcher<Internal.SharedSuggestionProvider>;
        handleHurtAnimation(arg0: Internal.ClientboundHurtAnimationPacket_): void;
        handleTitlesClear(arg0: Internal.ClientboundClearTitlesPacket_): void;
        handleCustomChatCompletions(arg0: Internal.ClientboundCustomChatCompletionsPacket_): void;
        sendUnsignedCommand(arg0: string): boolean;
        handler$cbl000$attributeslib$apoth_recordOldAttrValue(arg0: Internal.ClientboundUpdateAttributesPacket_, arg1: Internal.CallbackInfo_, arg2: Internal.Entity_, arg3: Internal.AttributeMap_, arg4: Internal.Iterator_<any>, arg5: Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot_, arg6: Internal.AttributeInstance_): void;
        handleRemoveEntities(arg0: Internal.ClientboundRemoveEntitiesPacket_): void;
        handleContainerClose(arg0: Internal.ClientboundContainerClosePacket_): void;
        handleTeleportEntity(arg0: Internal.ClientboundTeleportEntityPacket_): void;
        handleForgetLevelChunk(arg0: Internal.ClientboundForgetLevelChunkPacket_): void;
        handlePlayerCombatEnter(arg0: Internal.ClientboundPlayerCombatEnterPacket_): void;
        handleSetCamera(arg0: Internal.ClientboundSetCameraPacket_): void;
        handleBlockEvent(arg0: Internal.ClientboundBlockEventPacket_): void;
        handleLightUpdatePacket(arg0: Internal.ClientboundLightUpdatePacket_): void;
        handleMoveVehicle(arg0: Internal.ClientboundMoveVehiclePacket_): void;
        handleCommands(arg0: Internal.ClientboundCommandsPacket_): void;
        handleSetBorderCenter(arg0: Internal.ClientboundSetBorderCenterPacket_): void;
        getOnlinePlayers(): Internal.Collection<Internal.PlayerInfo>;
        handleItemCooldown(arg0: Internal.ClientboundCooldownPacket_): void;
        handleAddExperienceOrb(arg0: Internal.ClientboundAddExperienceOrbPacket_): void;
        setSubtitleText(arg0: Internal.ClientboundSetSubtitleTextPacket_): void;
        handleRespawn(arg0: Internal.ClientboundRespawnPacket_): void;
        getLevel(): Internal.ClientLevel;
        handleCommandSuggestions(arg0: Internal.ClientboundCommandSuggestionsPacket_): void;
        setKeyPair(arg0: Internal.ProfileKeyPair_): void;
        handleSetEquipment(arg0: Internal.ClientboundSetEquipmentPacket_): void;
        handleChunkBlocksUpdate(arg0: Internal.ClientboundSectionBlocksUpdatePacket_): void;
        handleBlockChangedAck(arg0: Internal.ClientboundBlockChangedAckPacket_): void;
        isFeatureEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getOnlinePlayerIds(): Internal.Collection<Internal.UUID>;
        handleExplosion(arg0: Internal.ClientboundExplodePacket_): void;
        handleUpdateMobEffect(arg0: Internal.ClientboundUpdateMobEffectPacket_): void;
        handleKeepAlive(arg0: Internal.ClientboundKeepAlivePacket_): void;
        handleUpdateRecipes(arg0: Internal.ClientboundUpdateRecipesPacket_): void;
        handleLevelChunkWithLight(arg0: Internal.ClientboundLevelChunkWithLightPacket_): void;
        handleOpenBook(arg0: Internal.ClientboundOpenBookPacket_): void;
        handleBlockEntityData(arg0: Internal.ClientboundBlockEntityDataPacket_): void;
        handleUpdateAdvancementsPacket(arg0: Internal.ClientboundUpdateAdvancementsPacket_): void;
        handleSetChunkCacheRadius(arg0: Internal.ClientboundSetChunkCacheRadiusPacket_): void;
        handleBundlePacket(arg0: Internal.ClientboundBundlePacket_): void;
        handleMapItemData(arg0: Internal.ClientboundMapItemDataPacket_): void;
        handleInitializeBorder(arg0: Internal.ClientboundInitializeBorderPacket_): void;
        getAdvancements(): Internal.ClientAdvancements;
        handleSetPlayerTeamPacket(arg0: Internal.ClientboundSetPlayerTeamPacket_): void;
        handleTakeItemEntity(arg0: Internal.ClientboundTakeItemEntityPacket_): void;
        handleBlockDestruction(arg0: Internal.ClientboundBlockDestructionPacket_): void;
        handleServerData(arg0: Internal.ClientboundServerDataPacket_): void;
        handleEntityLinkPacket(arg0: Internal.ClientboundSetEntityLinkPacket_): void;
        getServerData(): Internal.ServerData;
        handlePlayerChat(arg0: Internal.ClientboundPlayerChatPacket_): void;
        handleSetTime(arg0: Internal.ClientboundSetTimePacket_): void;
        handleSetBorderSize(arg0: Internal.ClientboundSetBorderSizePacket_): void;
        handleSetCarriedItem(arg0: Internal.ClientboundSetCarriedItemPacket_): void;
        setTitlesAnimation(arg0: Internal.ClientboundSetTitlesAnimationPacket_): void;
        handleDamageEvent(arg0: Internal.ClientboundDamageEventPacket_): void;
        handleSetBorderLerpSize(arg0: Internal.ClientboundSetBorderLerpSizePacket_): void;
        handleSetExperience(arg0: Internal.ClientboundSetExperiencePacket_): void;
        markMessageAsProcessed(arg0: Internal.PlayerChatMessage_, arg1: boolean): void;
        handleSetDisplayObjective(arg0: Internal.ClientboundSetDisplayObjectivePacket_): void;
        handler$cbl000$attributeslib$apoth_postAttrChangedEvent(arg0: Internal.ClientboundUpdateAttributesPacket_, arg1: Internal.CallbackInfo_, arg2: Internal.Entity_, arg3: Internal.AttributeMap_, arg4: Internal.Iterator_<any>, arg5: Internal.ClientboundUpdateAttributesPacket$AttributeSnapshot_, arg6: Internal.AttributeInstance_): void;
        handleChunksBiomes(arg0: Internal.ClientboundChunksBiomesPacket_): void;
        enabledFeatures(): Internal.FeatureFlagSet;
        handleDisconnect(arg0: Internal.ClientboundDisconnectPacket_): void;
        handleSetHealth(arg0: Internal.ClientboundSetHealthPacket_): void;
        handleTabListCustomisation(arg0: Internal.ClientboundTabListPacket_): void;
        handleAddObjective(arg0: Internal.ClientboundSetObjectivePacket_): void;
        handleUpdateTags(arg0: Internal.ClientboundUpdateTagsPacket_): void;
        handleMerchantOffers(arg0: Internal.ClientboundMerchantOffersPacket_): void;
        handleStopSoundEvent(arg0: Internal.ClientboundStopSoundPacket_): void;
        tick(): void;
        handleRemoveMobEffect(arg0: Internal.ClientboundRemoveMobEffectPacket_): void;
        handleSetSimulationDistance(arg0: Internal.ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(arg0: Internal.ClientboundSetChunkCacheCenterPacket_): void;
        getAddon(): Internal.AbstractNetworkAddon<any>;
        sendCommand(arg0: string): void;
        getId(): Internal.UUID;
        handler$deb000$alexscaves$iws_handleSetEntityPassengersPacket(arg0: Internal.ClientboundSetPassengersPacket_, arg1: Internal.CallbackInfo_): void;
        handleDisguisedChat(arg0: Internal.ClientboundDisguisedChatPacket_): void;
        handlePing(arg0: Internal.ClientboundPingPacket_): void;
        handleBlockUpdate(arg0: Internal.ClientboundBlockUpdatePacket_): void;
        handleRotateMob(arg0: Internal.ClientboundRotateHeadPacket_): void;
        handleSystemChat(arg0: Internal.ClientboundSystemChatPacket_): void;
        handleMovePlayer(arg0: Internal.ClientboundPlayerPositionPacket_): void;
        handleDeleteChat(arg0: Internal.ClientboundDeleteChatPacket_): void;
        handleAddEntity(arg0: Internal.ClientboundAddEntityPacket_): void;
        handleSoundEntityEvent(arg0: Internal.ClientboundSoundEntityPacket_): void;
        handleHorseScreenOpen(arg0: Internal.ClientboundHorseScreenOpenPacket_): void;
        handleChangeDifficulty(arg0: Internal.ClientboundChangeDifficultyPacket_): void;
        handleEntityEvent(arg0: Internal.ClientboundEntityEventPacket_): void;
        handleSetBorderWarningDelay(arg0: Internal.ClientboundSetBorderWarningDelayPacket_): void;
        handleEnabledFeatures(arg0: Internal.ClientboundUpdateEnabledFeaturesPacket_): void;
        getListedOnlinePlayers(): Internal.Collection<Internal.PlayerInfo>;
        handleOpenSignEditor(arg0: Internal.ClientboundOpenSignEditorPacket_): void;
        setTitleText(arg0: Internal.ClientboundSetTitleTextPacket_): void;
        handleSetEntityData(arg0: Internal.ClientboundSetEntityDataPacket_): void;
        getDebugQueryHandler(): Internal.DebugQueryHandler;
        handleBossUpdate(arg0: Internal.ClientboundBossEventPacket_): void;
        handlePlaceRecipe(arg0: Internal.ClientboundPlaceGhostRecipePacket_): void;
        getSuggestionsProvider(): Internal.ClientSuggestionProvider;
        getLocalGameProfile(): Internal.GameProfile;
        getPlayerInfo(arg0: Internal.UUID_): Internal.PlayerInfo;
        handleGameEvent(arg0: Internal.ClientboundGameEventPacket_): void;
        isAcceptingMessages(): boolean;
        handleSoundEvent(arg0: Internal.ClientboundSoundPacket_): void;
        handler$dol000$unionlib$addPlayer_inject(pPacket: Internal.ClientboundLoginPacket_, ci: Internal.CallbackInfo_): void;
        handleSetEntityMotion(arg0: Internal.ClientboundSetEntityMotionPacket_): void;
        handleContainerSetData(arg0: Internal.ClientboundContainerSetDataPacket_): void;
        handlePlayerCombatEnd(arg0: Internal.ClientboundPlayerCombatEndPacket_): void;
        handleMoveEntity(arg0: Internal.ClientboundMoveEntityPacket_): void;
        registryAccess(): Internal.RegistryAccess;
        handleLevelEvent(arg0: Internal.ClientboundLevelEventPacket_): void;
        handlePlayerAbilities(arg0: Internal.ClientboundPlayerAbilitiesPacket_): void;
        shouldPropagateHandlingExceptions(): boolean;
        handlePlayerCombatKill(arg0: Internal.ClientboundPlayerCombatKillPacket_): void;
        handleSetBorderWarningDistance(arg0: Internal.ClientboundSetBorderWarningDistancePacket_): void;
        getRecipeManager(): Internal.RecipeManager;
        handleSetEntityPassengersPacket(arg0: Internal.ClientboundSetPassengersPacket_): void;
        handleAwardStats(arg0: Internal.ClientboundAwardStatsPacket_): void;
        close(): void;
        handleSelectAdvancementsTab(arg0: Internal.ClientboundSelectAdvancementsTabPacket_): void;
        send(arg0: Internal.Packet_<any>): void;
        handleAddOrRemoveRecipes(arg0: Internal.ClientboundRecipePacket_): void;
        set actionBarText(arg0: Internal.ClientboundSetActionBarTextPacket_)
        get connection(): Internal.Connection
        get commands(): Internal.CommandDispatcher<Internal.SharedSuggestionProvider>
        get onlinePlayers(): Internal.Collection<Internal.PlayerInfo>
        set subtitleText(arg0: Internal.ClientboundSetSubtitleTextPacket_)
        get level(): Internal.ClientLevel
        set keyPair(arg0: Internal.ProfileKeyPair_)
        get onlinePlayerIds(): Internal.Collection<Internal.UUID>
        get advancements(): Internal.ClientAdvancements
        get serverData(): Internal.ServerData
        set titlesAnimation(arg0: Internal.ClientboundSetTitlesAnimationPacket_)
        get addon(): Internal.AbstractNetworkAddon<any>
        get id(): Internal.UUID
        get listedOnlinePlayers(): Internal.Collection<Internal.PlayerInfo>
        set titleText(arg0: Internal.ClientboundSetTitleTextPacket_)
        get debugQueryHandler(): Internal.DebugQueryHandler
        get suggestionsProvider(): Internal.ClientSuggestionProvider
        get localGameProfile(): Internal.GameProfile
        get acceptingMessages(): boolean
        get recipeManager(): Internal.RecipeManager
        commands: Internal.CommandDispatcher<Internal.SharedSuggestionProvider>;
    }
    type ClientPacketListener_ = ClientPacketListener;
    abstract class AbstractObjectCollection <K> extends Internal.AbstractCollection<K> implements Internal.ObjectCollection<K> {
        parallelStream(): Internal.Stream<K>;
        abstract iterator(): Internal.ObjectIterator<K>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        forEach(arg0: Internal.Consumer_<K>): void;
        spliterator(): Internal.ObjectSpliterator<K>;
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        stream(): Internal.Stream<K>;
    }
    type AbstractObjectCollection_<K> = AbstractObjectCollection<K>;
    interface Byte2DoubleFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Byte2CharFunction;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        apply(arg0: number): number;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2DoubleFunction;
        abstract get(arg0: number): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2DoubleFunction<T>;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Byte2ByteFunction;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2DoubleFunction;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2DoubleFunction;
        defaultReturnValue(): number;
        size(): number;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Byte2IntFunction;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        clear(): void;
        put(arg0: number, arg1: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2DoubleFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2DoubleFunction;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): number;
    }
    type Byte2DoubleFunction_ = Byte2DoubleFunction;
    class CPacketUIClientAction implements Internal.IPacket {
        constructor()
        constructor(windowId: number, updateData: Internal.FriendlyByteBuf_)
        encode(buf: Internal.FriendlyByteBuf_): void;
        decode(buf: Internal.FriendlyByteBuf_): void;
        execute(handler: Internal.IHandlerContext_): void;
        updateData: Internal.FriendlyByteBuf;
        windowId: number;
    }
    type CPacketUIClientAction_ = CPacketUIClientAction;
    class FloatComparingBlockCondition extends Internal.BlockCondition<Internal.FloatComparisonConfiguration> {
        constructor(arg0: any_)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type FloatComparingBlockCondition_ = FloatComparingBlockCondition;
    class MendingAuraChestBlock extends Internal.MendingAuraBlock {
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
        static readonly CHEST_TYPE: Internal.EnumProperty<Internal.ChestType>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type MendingAuraChestBlock_ = MendingAuraChestBlock;
    class RenderTooltipEvent$Color extends Internal.RenderTooltipEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: Internal.Font_, arg5: number, arg6: number, arg7: number, arg8: Internal.List_<Internal.ClientTooltipComponent>)
        setBackgroundStart(arg0: number): void;
        setBackgroundEnd(arg0: number): void;
        setBorderStart(arg0: number): void;
        setBorderEnd(arg0: number): void;
        getOriginalBackgroundStart(): number;
        getOriginalBorderStart(): number;
        setBackground(arg0: number): void;
        getBorderEnd(): number;
        getBorderStart(): number;
        getBackgroundStart(): number;
        getBackgroundEnd(): number;
        getOriginalBorderEnd(): number;
        getOriginalBackgroundEnd(): number;
        set backgroundStart(arg0: number)
        set backgroundEnd(arg0: number)
        set borderStart(arg0: number)
        set borderEnd(arg0: number)
        get originalBackgroundStart(): number
        get originalBorderStart(): number
        set background(arg0: number)
        get borderEnd(): number
        get borderStart(): number
        get backgroundStart(): number
        get backgroundEnd(): number
        get originalBorderEnd(): number
        get originalBackgroundEnd(): number
    }
    type RenderTooltipEvent$Color_ = RenderTooltipEvent$Color;
    class Clear implements Internal.RuleBlockEntityModifier {
        constructor()
        getType(): Internal.RuleBlockEntityModifierType<any>;
        apply(arg0: Internal.RandomSource_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        get type(): Internal.RuleBlockEntityModifierType<any>
        static readonly CODEC: Internal.Codec<Internal.Clear>;
    }
    type Clear_ = Clear;
    interface EnchantmentBuilder$DamageBonusFunction {
        abstract getDamageBonus(arg0: number, arg1: string): number;
        (arg0: number, arg1: string): number;
    }
    type EnchantmentBuilder$DamageBonusFunction_ = EnchantmentBuilder$DamageBonusFunction;
    class NoneSpell extends Internal.AbstractSpell {
        constructor()
    }
    type NoneSpell_ = NoneSpell;
    interface Reference2ObjectFunction <K, V> extends it.unimi.dsi.fastutil.Function<K, V> {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ObjectFunction<V>;
        getOrDefault(arg0: any, arg1: V): V;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Reference2DoubleFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ObjectFunction<V>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Reference2FloatFunction<K>;
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Reference2LongFunction<K>;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        put(arg0: K, arg1: V): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Reference2ByteFunction<K>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ObjectFunction<V>;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Reference2ShortFunction<K>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Reference2ReferenceFunction<K, T>;
        apply(arg0: K): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Reference2CharFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ObjectFunction<V>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ObjectFunction<V>;
        size(): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Reference2ObjectFunction<K, T>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Reference2IntFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ObjectFunction<V>;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: any): V;
    }
    type Reference2ObjectFunction_<K, V> = Reference2ObjectFunction<K, V>;
    class ModelLayerLocation {
        constructor(arg0: ResourceLocation_, arg1: string)
        getModel(): ResourceLocation;
        getLayer(): string;
        get model(): ResourceLocation
        get layer(): string
    }
    type ModelLayerLocation_ = ModelLayerLocation;
    interface WatchService extends Internal.Closeable {
        abstract poll(): Internal.WatchKey;
        abstract take(): Internal.WatchKey;
        abstract close(): void;
        abstract poll(arg0: number, arg1: Internal.TimeUnit_): Internal.WatchKey;
    }
    type WatchService_ = WatchService;
    interface ClassDesc extends Internal.TypeDescriptor$OfField<Internal.ClassDesc>, Internal.ConstantDesc {
        displayName(): string;
        isPrimitive(): boolean;
        ofDescriptor(arg0: string): this;
        of(arg0: string): this;
        abstract descriptorString(): string;
        nested(arg0: string, ...arg1: string[]): this;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        of(arg0: string, arg1: string): this;
        componentType(): this;
        isArray(): boolean;
        nested(arg0: string): this;
        isClassOrInterface(): boolean;
        packageName(): string;
        abstract equals(arg0: any): boolean;
        arrayType(arg0: number): this;
        arrayType(): Internal.TypeDescriptor$OfField<any>;
        get primitive(): boolean
        get array(): boolean
        get classOrInterface(): boolean
    }
    type ClassDesc_ = ClassDesc;
    class Blazing_Grips extends Internal.CuriosItem {
        constructor(arg0: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        getAttributesTooltip(arg0: Internal.List_<Internal.Component>, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<Internal.Component>, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setArmorToughness(armorToughness: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        setAttackSpeed(attackSpeed: number): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getSlotsTooltip(arg0: Internal.List_<Internal.Component>, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type Blazing_Grips_ = Blazing_Grips;
    abstract class AbstractSchoolingFish extends Internal.AbstractFish {
        constructor(arg0: Internal.EntityType_<Internal.AbstractSchoolingFish>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getMaxSchoolSize(): number;
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
        isFollower(): boolean;
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
        pathToLeader(): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        canBeFollowed(): boolean;
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
        addFollowers(arg0: Internal.Stream_<Internal.AbstractSchoolingFish>): void;
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
        stopFollowing(): void;
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
        inRangeOfLeader(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        hasFollowers(): boolean;
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
        startFollowing(arg0: Internal.AbstractSchoolingFish_): this;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get maxSchoolSize(): number
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
        get follower(): boolean
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
    type AbstractSchoolingFish_ = AbstractSchoolingFish;
    class EnchantmentConfiguration$Calculation extends Internal.Enum<Internal.EnchantmentConfiguration$Calculation> {
        static valueOf(arg0: string): Internal.EnchantmentConfiguration$Calculation;
        apply(arg0: Internal.IntStream_): Internal.OptionalInt;
        static values(): Internal.EnchantmentConfiguration$Calculation[];
        static readonly MAX: Internal.EnchantmentConfiguration$Calculation;
        static readonly SUM: Internal.EnchantmentConfiguration$Calculation;
    }
    type EnchantmentConfiguration$Calculation_ = "max" | EnchantmentConfiguration$Calculation | "sum";
    interface GatheringByteChannel extends Internal.WritableByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract write(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        abstract write(arg0: Internal.ByteBuffer_[]): number;
        get open(): boolean
    }
    type GatheringByteChannel_ = GatheringByteChannel;
    abstract class EnhancedTerrainAdaptation {
        getKernelDistance(): number;
        abstract type(): Internal.EnhancedTerrainAdaptationType<any>;
        getKernelSize(): number;
        getKernelRadius(): number;
        carves(): boolean;
        computeDensityFactor(arg0: number, arg1: number, arg2: number, arg3: number): number;
        beards(): boolean;
        getKernel(): number[];
        get kernelDistance(): number
        get kernelSize(): number
        get kernelRadius(): number
        get kernel(): number[]
        static readonly NONE: Internal.NoneAdaptation;
    }
    type EnhancedTerrainAdaptation_ = EnhancedTerrainAdaptation;
    interface MultifaceSpreader$SpreadPredicate {
        abstract test(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.MultifaceSpreader$SpreadPos_): boolean;
        (arg0: Internal.BlockGetter, arg1: BlockPos, arg2: Internal.MultifaceSpreader$SpreadPos): boolean;
    }
    type MultifaceSpreader$SpreadPredicate_ = MultifaceSpreader$SpreadPredicate;
    class ModConfigEvent extends Internal.Event implements Internal.IConfigEvent, Internal.IModBusEvent {
        constructor()
        static unloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        static loading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        self<T extends Internal.Event & Internal.IConfigEvent>(): T;
        getConfig(): Internal.ModConfig;
        static reloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        get config(): Internal.ModConfig
    }
    type ModConfigEvent_ = ModConfigEvent;
    class SingletonArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<A> {
        constructor(arg0: Internal.SingletonArgumentInfo_<any>, arg1: Internal.Function_<any, any>)
        type(): Internal.ArgumentTypeInfo<A, any>;
        instantiate(arg0: Internal.CommandBuildContext_): A;
        readonly f_235462_: Internal.SingletonArgumentInfo<any>;
    }
    type SingletonArgumentInfo$Template_ = SingletonArgumentInfo$Template;
    class ClientboundLevelChunkPacketData {
        constructor(arg0: Internal.FriendlyByteBuf_, arg1: number, arg2: number)
        constructor(arg0: Internal.LevelChunk_)
        write(arg0: Internal.FriendlyByteBuf_): void;
        getHeightmaps(): Internal.CompoundTag;
        getReadBuffer(): Internal.FriendlyByteBuf;
        static extractChunkData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.LevelChunk_): void;
        getBlockEntitiesTagsConsumer(arg0: number, arg1: number): Internal.Consumer<Internal.ClientboundLevelChunkPacketData$BlockEntityTagOutput>;
        get heightmaps(): Internal.CompoundTag
        get readBuffer(): Internal.FriendlyByteBuf
    }
    type ClientboundLevelChunkPacketData_ = ClientboundLevelChunkPacketData;
    class MagicConchItem extends Internal.Item {
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
    type MagicConchItem_ = MagicConchItem;
    class MinecraftProfileTexture$Type extends Internal.Enum<Internal.MinecraftProfileTexture$Type> {
        static values(): Internal.MinecraftProfileTexture$Type[];
        static valueOf(arg0: string): Internal.MinecraftProfileTexture$Type;
        static readonly CAPE: Internal.MinecraftProfileTexture$Type;
        static readonly ELYTRA: Internal.MinecraftProfileTexture$Type;
        static readonly SKIN: Internal.MinecraftProfileTexture$Type;
    }
    type MinecraftProfileTexture$Type_ = MinecraftProfileTexture$Type | "elytra" | "skin" | "cape";
    class ServerboundContainerClickPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.ClickType_, arg5: Internal.ItemStack_, arg6: Internal.Int2ObjectMap_<Internal.ItemStack>)
        handle(arg0: Internal.PacketListener_): void;
        getButtonNum(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getStateId(): number;
        getChangedSlots(): Internal.Int2ObjectMap<Internal.ItemStack>;
        getCarriedItem(): Internal.ItemStack;
        getSlotNum(): number;
        getContainerId(): number;
        getClickType(): Internal.ClickType;
        isSkippable(): boolean;
        get buttonNum(): number
        get stateId(): number
        get changedSlots(): Internal.Int2ObjectMap<Internal.ItemStack>
        get carriedItem(): Internal.ItemStack
        get slotNum(): number
        get containerId(): number
        get clickType(): Internal.ClickType
        get skippable(): boolean
    }
    type ServerboundContainerClickPacket_ = ServerboundContainerClickPacket;
    interface ScreenMouseEvents$BeforeMouseClick {
        abstract beforeMouseClick(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): void;
    }
    type ScreenMouseEvents$BeforeMouseClick_ = ScreenMouseEvents$BeforeMouseClick;
    interface LivingEntityAccessor {
        abstract accessors$breakItem(arg0: Internal.ItemStack_): void;
        (arg0: Internal.ItemStack): void;
    }
    type LivingEntityAccessor_ = LivingEntityAccessor;
    interface RegistryEntryRemovedCallback <T> {
        abstract onEntryRemoved(arg0: number, arg1: ResourceLocation_, arg2: T): void;
        event<T>(registry: Internal.Registry_<T>): net.fabricmc.fabric.api.event.Event<Internal.RegistryEntryRemovedCallback<T>>;
        (arg0: number, arg1: ResourceLocation, arg2: T): void;
    }
    type RegistryEntryRemovedCallback_<T> = RegistryEntryRemovedCallback<T>;
    class TorchflowerCropBlock extends Internal.CropBlock {
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
        static readonly MAX_AGE: 2;
    }
    type TorchflowerCropBlock_ = TorchflowerCropBlock;
    abstract class RenderGuiOverlayEvent extends Internal.Event {
        constructor()
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        getWindow(): Internal.Window;
        getOverlay(): Internal.NamedGuiOverlay;
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        get window(): Internal.Window
        get overlay(): Internal.NamedGuiOverlay
    }
    type RenderGuiOverlayEvent_ = RenderGuiOverlayEvent;
    interface BlockSensitiveBufferBuilder {
        abstract endBlock(): void;
        abstract beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type BlockSensitiveBufferBuilder_ = BlockSensitiveBufferBuilder;
    abstract class HolderSet$ListBacked <T> implements Internal.HolderSet<T> {
        constructor()
        iterator(): Internal.Iterator<Internal.Holder<T>>;
        abstract unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        abstract unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        get(arg0: number): Internal.Holder<T>;
        spliterator(): Internal.Spliterator<Internal.Holder<T>>;
        stream(): Internal.Stream<Internal.Holder<T>>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        abstract contents(): Internal.List<Internal.Holder<T>>;
        size(): number;
        abstract contains(arg0: Internal.Holder_<T>): boolean;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        static direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        static direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        getRandomElement(arg0: Internal.RandomSource_): Internal.Optional<Internal.Holder<T>>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
    }
    type HolderSet$ListBacked_<T> = HolderSet$ListBacked<T>;
    class ZoneOffset extends Internal.ZoneId implements Internal.TemporalAccessor, Internal.Comparable<Internal.ZoneOffset>, Internal.TemporalAdjuster, Internal.Serializable {
        static ofHoursMinutes(arg0: number, arg1: number): Internal.ZoneOffset;
        static ofTotalSeconds(arg0: number): Internal.ZoneOffset;
        compareTo(arg0: Internal.ZoneOffset_): number;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        static ofHours(arg0: number): Internal.ZoneOffset;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        static of(arg0: string): Internal.ZoneOffset;
        compareTo(arg0: any): number;
        static ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): Internal.ZoneOffset;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        getLong(arg0: Internal.TemporalField_): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZoneOffset;
        getTotalSeconds(): number;
        isSupported(arg0: Internal.TemporalField_): boolean;
        get totalSeconds(): number
        static readonly MIN: Internal.ZoneOffset;
        static readonly MAX: Internal.ZoneOffset;
        static readonly UTC: Internal.ZoneOffset;
    }
    type ZoneOffset_ = ZoneOffset;
    interface WeightedEntry {
        abstract getWeight(): Internal.Weight;
        wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        get weight(): Internal.Weight
        (): Internal.Weight_;
    }
    type WeightedEntry_ = WeightedEntry;
    class PlayerEvent$PlayerLoggedInEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type PlayerEvent$PlayerLoggedInEvent_ = PlayerEvent$PlayerLoggedInEvent;
    abstract class MapCodec <A> extends Internal.CompressorHolder implements Internal.MapEncoder<A>, Internal.MapDecoder<A> {
        constructor()
        codec(): Internal.Codec<A>;
        forGetter<O>(arg0: Internal.Function_<O, A>): Internal.RecordCodecBuilder<O, A>;
        abstract decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<A>;
        orElseGet(arg0: Internal.Supplier_<A>): this;
        map<B>(arg0: Internal.Function_<A, B>): Internal.MapDecoder<B>;
        flatXmap<S>(arg0: Internal.Function_<A, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<A>>): Internal.MapCodec<S>;
        stable(): this;
        fieldOf(arg0: string): this;
        setPartial(arg0: Internal.Supplier_<A>): this;
        flatMap<B>(arg0: Internal.Function_<A, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        xmap<S>(arg0: Internal.Function_<A, S>, arg1: Internal.Function_<S, A>): Internal.MapCodec<S>;
        orElse(arg0: Internal.Consumer_<string>, arg1: A): this;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        abstract encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        mapResult(arg0: Internal.MapCodec$ResultFunction_<A>): this;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<A>): this;
        static unit<A>(arg0: A): Internal.MapCodec<A>;
        deprecated(arg0: number): this;
        dependent<E>(arg0: Internal.MapCodec_<E>, arg1: Internal.Function_<A, com.mojang.datafixers.util.Pair<E, Internal.MapCodec<E>>>, arg2: Internal.BiFunction_<A, E, A>): this;
        withLifecycle(arg0: Internal.Lifecycle_): this;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<A>;
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        decoder(): Internal.Decoder<A>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<A, E>>): Internal.MapDecoder<E>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.MapEncoder<B>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.MapCodec<A>;
        orElse(arg0: A): this;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<A>): this;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: A): this;
        set partial(arg0: Internal.Supplier_<A>)
    }
    type MapCodec_<A> = MapCodec<A>;
    class ModifiableStructureInfo$StructureInfo extends Internal.Record {
        constructor(structureSettings: Internal.Structure$StructureSettings_)
        structureSettings(): Internal.Structure$StructureSettings;
    }
    type ModifiableStructureInfo$StructureInfo_ = ModifiableStructureInfo$StructureInfo;
    class FluidBlockCondition extends Internal.BlockCondition<Internal.FieldConfiguration<Internal.ConfiguredFluidCondition<any, any>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type FluidBlockCondition_ = FluidBlockCondition;
    abstract class TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static trunkPlacerParts<P extends Internal.TrunkPlacer>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<P>, number, number, number>;
        abstract type(): Internal.TrunkPlacerType<any>;
        abstract placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        static setDirtAt(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): void;
        validTreePos(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_, arg5: Internal.Function_<Internal.BlockState, Internal.BlockState>): boolean;
        placeLogIfFree(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.BlockPos$MutableBlockPos_, arg4: Internal.TreeConfiguration_): void;
        static readonly MAX_HEIGHT: 80;
        readonly heightRandB: number;
        readonly heightRandA: number;
        static readonly CODEC: Internal.Codec<Internal.TrunkPlacer>;
        readonly baseHeight: number;
    }
    type TrunkPlacer_ = TrunkPlacer;
    interface Double2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.DoubleToIntFunction {
        put(arg0: number, arg1: string): string;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2CharFunction;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Double2DoubleFunction;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2CharFunction;
        defaultReturnValue(): string;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Double2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Double2ByteFunction;
        defaultReturnValue(arg0: string): void;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        apply(arg0: number): string;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Double2IntFunction;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2CharFunction<T>;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Double2FloatFunction;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Double2ObjectFunction<T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: string): string;
        size(): number;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Double2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2CharFunction;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2CharFunction<T>;
        clear(): void;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Double2ShortFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        abstract get(arg0: number): string;
        remove(arg0: number): string;
        applyAsInt(arg0: number): number;
        (arg0: number): string;
    }
    type Double2CharFunction_ = Double2CharFunction;
    class DoubleArgumentType implements Internal.ArgumentType<number> {
        parse(arg0: Internal.StringReader_): number;
        getExamples(): Internal.Collection<string>;
        getMaximum(): number;
        getMinimum(): number;
        static doubleArg(): Internal.DoubleArgumentType;
        static doubleArg(arg0: number, arg1: number): Internal.DoubleArgumentType;
        static doubleArg(arg0: number): Internal.DoubleArgumentType;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static getDouble(arg0: Internal.CommandContext_<any>, arg1: string): number;
        get examples(): Internal.Collection<string>
        get maximum(): number
        get minimum(): number
    }
    type DoubleArgumentType_ = DoubleArgumentType;
    class ItemOnItemPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ItemOnItemConfiguration> {
        constructor()
        apply(arg0: Internal.ConfiguredPower_<Internal.ItemOnItemConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.Slot_, arg3: Internal.SlotAccess_): void;
        check(arg0: Internal.ConfiguredPower_<Internal.ItemOnItemConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.ItemStack_, arg3: Internal.ItemStack_): boolean;
        static execute(arg0: Internal.Entity_, arg1: Internal.Slot_, arg2: Internal.SlotAccess_): boolean;
    }
    type ItemOnItemPower_ = ItemOnItemPower;
    interface HandledScreenAccessor {
        abstract getFocusedSlot(): Internal.Slot;
        abstract getBackgroundWidth(): number;
        abstract invokeGetSlotAt(arg0: number, arg1: number): Internal.Slot;
        abstract getX(): number;
        abstract getY(): number;
        abstract getBackgroundHeight(): number;
        get focusedSlot(): Internal.Slot
        get backgroundWidth(): number
        get x(): number
        get y(): number
        get backgroundHeight(): number
    }
    type HandledScreenAccessor_ = HandledScreenAccessor;
    interface IntSpliterator extends Internal.Spliterator$OfInt {
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: any): void;
        getComparator(): Internal.Comparator<any>;
        hasCharacteristics(arg0: number): boolean;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        skip(arg0: number): number;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract estimateSize(): number;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        abstract tryAdvance(arg0: Internal.IntConsumer_): boolean;
        getExactSizeIfKnown(): number;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        tryAdvance(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): boolean;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type IntSpliterator_ = IntSpliterator;
    interface EventExecutor extends Internal.EventExecutorGroup {
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        abstract newProgressivePromise<V>(): Internal.ProgressivePromise<V>;
        abstract scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract parent(): Internal.EventExecutorGroup;
        abstract next(): this;
        abstract newFailedFuture<V>(arg0: Internal.Throwable_): io.netty.util.concurrent.Future<V>;
        abstract isTerminated(): boolean;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract isShutdown(): boolean;
        abstract newPromise<V>(): Internal.Promise<V>;
        /**
         * @deprecated
        */
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        abstract shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        abstract inEventLoop(arg0: Internal.Thread_): boolean;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract newSucceededFuture<V>(arg0: V): io.netty.util.concurrent.Future<V>;
        abstract submit(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract isShuttingDown(): boolean;
        abstract inEventLoop(): boolean;
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type EventExecutor_ = EventExecutor;
    class WaterBoundPathNavigation extends Internal.PathNavigation {
        constructor(arg0: Internal.Mob_, arg1: Internal.Level_)
    }
    type WaterBoundPathNavigation_ = WaterBoundPathNavigation;
    class VertexFormat$IndexType extends Internal.Enum<Internal.VertexFormat$IndexType> {
        static values(): Internal.VertexFormat$IndexType[];
        static valueOf(arg0: string): Internal.VertexFormat$IndexType;
        static least(arg0: number): Internal.VertexFormat$IndexType;
        static readonly SHORT: Internal.VertexFormat$IndexType;
        readonly asGLType: number;
        static readonly INT: Internal.VertexFormat$IndexType;
        readonly bytes: number;
    }
    type VertexFormat$IndexType_ = VertexFormat$IndexType | "int" | "short";
    class CaveSurface extends Internal.Enum<Internal.CaveSurface> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getY(): number;
        getSerializedName(): string;
        static values(): Internal.CaveSurface[];
        static valueOf(arg0: string): Internal.CaveSurface;
        getDirection(): Internal.Direction;
        get y(): number
        get serializedName(): string
        get direction(): Internal.Direction
        static readonly FLOOR: Internal.CaveSurface;
        static readonly CEILING: Internal.CaveSurface;
        static readonly CODEC: Internal.Codec<Internal.CaveSurface>;
    }
    type CaveSurface_ = "floor" | CaveSurface | "ceiling";
    class EntityType <T extends Internal.Entity> implements Internal.FeatureElement, Internal.InjectedEntityTypeExtension, Internal.EntityTypeTest<Internal.Entity, T>, Internal.DynamicLightHandlerHolder<any> {
        constructor(arg0: Internal.EntityType$EntityFactory_<T>, arg1: Internal.MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Internal.ImmutableSet_<Internal.Block>, arg7: Internal.EntityDimensions_, arg8: number, arg9: number, arg10: Internal.FeatureFlagSet_)
        constructor(arg0: Internal.EntityType$EntityFactory_<T>, arg1: Internal.MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Internal.ImmutableSet_<Internal.Block>, arg7: Internal.EntityDimensions_, arg8: number, arg9: number, arg10: Internal.FeatureFlagSet_, arg11: Internal.Predicate_<Internal.EntityType<any>>, arg12: Internal.ToIntFunction_<Internal.EntityType<any>>, arg13: Internal.ToIntFunction_<Internal.EntityType<any>>, arg14: Internal.BiFunction_<Internal.PlayMessages$SpawnEntity, Internal.Level, T>)
        getBaseClass(): typeof Internal.Entity;
        create(arg0: Internal.ServerLevel_, arg1: Internal.CompoundTag_, arg2: Internal.Consumer_<T>, arg3: BlockPos_, arg4: Internal.MobSpawnType_, arg5: boolean, arg6: boolean): T;
        arch$holder(): Internal.Holder<Internal.EntityType<any>>;
        toShortString(): string;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getWidth(): number;
        spawn(arg0: Internal.ServerLevel_, arg1: Internal.ItemStack_, arg2: Player_, arg3: BlockPos_, arg4: Internal.MobSpawnType_, arg5: boolean, arg6: boolean): T;
        getAABB(arg0: number, arg1: number, arg2: number): Internal.AABB;
        tryCast(arg0: any): any;
        static appendCustomNameConfig<T extends Internal.Entity>(arg0: Internal.Consumer_<T>, arg1: Internal.ItemStack_): Internal.Consumer<T>;
        getDescriptionId(): string;
        getTags(): Internal.Stream<Internal.TagKey<Internal.EntityType<any>>>;
        canSummon(): boolean;
        updateInterval(): number;
        static byString(arg0: string): Internal.Optional<Internal.EntityType<any>>;
        getDimensions(): Internal.EntityDimensions;
        static appendCustomEntityStackConfig<T extends Internal.Entity>(arg0: Internal.Consumer_<T>, arg1: Internal.ServerLevel_, arg2: Internal.ItemStack_, arg3: Player_): Internal.Consumer<T>;
        static create(arg0: Internal.CompoundTag_, arg1: Internal.Level_): Internal.Optional<Internal.Entity>;
        trackDeltas(): boolean;
        canSerialize(): boolean;
        sodiumdynamiclights$setDynamicLightHandler(handler: Internal.DynamicLightHandler_<any>): void;
        sodiumdynamiclights$getName(): Internal.Component;
        static appendDefaultStackConfig<T extends Internal.Entity>(arg0: Internal.Consumer_<T>, arg1: Internal.ServerLevel_, arg2: Internal.ItemStack_, arg3: Player_): Internal.Consumer<T>;
        static forClass<B, T extends B>(arg0: T): Internal.EntityTypeTest<B, T>;
        getDescription(): Internal.Component;
        static updateCustomEntityTag(arg0: Internal.Level_, arg1: Player_, arg2: Internal.Entity_, arg3: Internal.CompoundTag_): void;
        isBlockDangerous(arg0: Internal.BlockState_): boolean;
        tryCast(arg0: Internal.Entity_): T;
        static cast<T extends Internal.Entity>(entityType: Internal.EntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.EntityType<any>>;
        customClientSpawn(arg0: Internal.PlayMessages$SpawnEntity_, arg1: Internal.Level_): T;
        clientTrackingRange(): number;
        static cast<T extends Internal.BlockEntity>(entityType: Internal.BlockEntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        getCategory(): Internal.MobCategory;
        getDefaultLootTable(): ResourceLocation;
        static loadEntityRecursive(arg0: Internal.CompoundTag_, arg1: Internal.Level_, arg2: Internal.Function_<Internal.Entity, Internal.Entity>): Internal.Entity;
        getHeight(): number;
        static createDefaultStackConfig<T extends Internal.Entity>(arg0: Internal.ServerLevel_, arg1: Internal.ItemStack_, arg2: Player_): Internal.Consumer<T>;
        fireImmune(): boolean;
        arch$registryName(): ResourceLocation;
        sodiumdynamiclights$getSetting(): boolean;
        canSpawnFarFromPlayer(): boolean;
        static by(arg0: Internal.CompoundTag_): Internal.Optional<Internal.EntityType<any>>;
        static getKey(arg0: Internal.EntityType_<any>): ResourceLocation;
        create(arg0: Internal.Level_): T;
        static getYOffset(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: boolean, arg3: Internal.AABB_): number;
        sodiumdynamiclights$getDynamicLightHandler(): Internal.DynamicLightHandler<any>;
        spawn(arg0: Internal.ServerLevel_, arg1: Internal.CompoundTag_, arg2: Internal.Consumer_<T>, arg3: BlockPos_, arg4: Internal.MobSpawnType_, arg5: boolean, arg6: boolean): T;
        requiredFeatures(): Internal.FeatureFlagSet;
        is(arg0: Internal.TagKey_<Internal.EntityType<any>>): boolean;
        static loadEntitiesRecursive(arg0: Internal.List_<Internal.Tag>, arg1: Internal.Level_): Internal.Stream<Internal.Entity>;
        spawn(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.MobSpawnType_): T;
        get baseClass(): typeof Internal.Entity
        get width(): number
        get descriptionId(): string
        get tags(): Internal.Stream<Internal.TagKey<Internal.EntityType<any>>>
        get dimensions(): Internal.EntityDimensions
        get description(): Internal.Component
        get category(): Internal.MobCategory
        get defaultLootTable(): ResourceLocation
        get height(): number
        static readonly TURTLE: Internal.EntityType<Internal.Turtle>;
        static readonly EVOKER: Internal.EntityType<Internal.Evoker>;
        static readonly INTERACTION: Internal.EntityType<Internal.Interaction>;
        static readonly SHULKER_BULLET: Internal.EntityType<Internal.ShulkerBullet>;
        static readonly ARROW: Internal.EntityType<Internal.Arrow>;
        static readonly DOLPHIN: Internal.EntityType<Internal.Dolphin>;
        static readonly PUFFERFISH: Internal.EntityType<Internal.Pufferfish>;
        static readonly HUSK: Internal.EntityType<Internal.Husk>;
        static readonly PANDA: Internal.EntityType<Internal.Panda>;
        static readonly ENDER_DRAGON: Internal.EntityType<Internal.EnderDragon>;
        static readonly PILLAGER: Internal.EntityType<Internal.Pillager>;
        static readonly GUARDIAN: Internal.EntityType<Internal.Guardian>;
        static readonly PIG: Internal.EntityType<Internal.Pig>;
        static readonly WITCH: Internal.EntityType<Internal.Witch>;
        static readonly FURNACE_MINECART: Internal.EntityType<Internal.MinecartFurnace>;
        static readonly ITEM_FRAME: Internal.EntityType<Internal.ItemFrame>;
        static readonly ITEM_DISPLAY: Internal.EntityType<Internal.Display$ItemDisplay>;
        static readonly AREA_EFFECT_CLOUD: Internal.EntityType<Internal.AreaEffectCloud>;
        static readonly STRAY: Internal.EntityType<Internal.Stray>;
        static readonly OCELOT: Internal.EntityType<Internal.Ocelot>;
        static readonly CAVE_SPIDER: Internal.EntityType<Internal.CaveSpider>;
        static readonly VINDICATOR: Internal.EntityType<Internal.Vindicator>;
        static readonly CHEST_MINECART: Internal.EntityType<Internal.MinecartChest>;
        static readonly TNT: Internal.EntityType<Internal.PrimedTnt>;
        static readonly WITHER: Internal.EntityType<Internal.WitherBoss>;
        static readonly ENDER_PEARL: Internal.EntityType<Internal.ThrownEnderpearl>;
        static readonly CHICKEN: Internal.EntityType<Internal.Chicken>;
        static readonly END_CRYSTAL: Internal.EntityType<Internal.EndCrystal>;
        static readonly ARMOR_STAND: Internal.EntityType<Internal.ArmorStand>;
        static readonly CHEST_BOAT: Internal.EntityType<Internal.ChestBoat>;
        static readonly PHANTOM: Internal.EntityType<Internal.Phantom>;
        static readonly FIREBALL: Internal.EntityType<Internal.LargeFireball>;
        static readonly SALMON: Internal.EntityType<Internal.Salmon>;
        static readonly WITHER_SKULL: Internal.EntityType<Internal.WitherSkull>;
        static readonly BAT: Internal.EntityType<Internal.Bat>;
        static readonly SMALL_FIREBALL: Internal.EntityType<Internal.SmallFireball>;
        static readonly PAINTING: Internal.EntityType<Internal.Painting>;
        static readonly WOLF: Internal.EntityType<Internal.Wolf>;
        static readonly GHAST: Internal.EntityType<Internal.Ghast>;
        static readonly MARKER: Internal.EntityType<Internal.Marker>;
        static readonly ZOGLIN: Internal.EntityType<Internal.Zoglin>;
        static readonly SHEEP: Internal.EntityType<Internal.Sheep>;
        static readonly ZOMBIE_VILLAGER: Internal.EntityType<Internal.ZombieVillager>;
        static readonly SPECTRAL_ARROW: Internal.EntityType<Internal.SpectralArrow>;
        static readonly ENTITY_TAG: "EntityTag";
        static readonly CREEPER: Internal.EntityType<Internal.Creeper>;
        static readonly SPIDER: Internal.EntityType<Internal.Spider>;
        static readonly LLAMA: Internal.EntityType<Internal.Llama>;
        static readonly SNIFFER: Internal.EntityType<Internal.Sniffer>;
        static readonly BLAZE: Internal.EntityType<Internal.Blaze>;
        static readonly TNT_MINECART: Internal.EntityType<Internal.MinecartTNT>;
        static readonly GLOW_SQUID: Internal.EntityType<Internal.GlowSquid>;
        static readonly FOX: Internal.EntityType<Internal.Fox>;
        static readonly SILVERFISH: Internal.EntityType<Internal.Silverfish>;
        static readonly SQUID: Internal.EntityType<Internal.Squid>;
        static readonly WITHER_SKELETON: Internal.EntityType<Internal.WitherSkeleton>;
        static readonly ZOMBIFIED_PIGLIN: Internal.EntityType<Internal.ZombifiedPiglin>;
        static readonly COD: Internal.EntityType<Internal.Cod>;
        static readonly SPAWNER_MINECART: Internal.EntityType<Internal.MinecartSpawner>;
        static readonly COMMAND_BLOCK_MINECART: Internal.EntityType<Internal.MinecartCommandBlock>;
        static readonly GLOW_ITEM_FRAME: Internal.EntityType<Internal.GlowItemFrame>;
        static readonly ZOMBIE_HORSE: Internal.EntityType<Internal.ZombieHorse>;
        static readonly TEXT_DISPLAY: Internal.EntityType<Internal.Display$TextDisplay>;
        static readonly STRIDER: Internal.EntityType<Internal.Strider>;
        static readonly SLIME: Internal.EntityType<Internal.Slime>;
        static readonly MULE: Internal.EntityType<Internal.Mule>;
        static readonly TRADER_LLAMA: Internal.EntityType<Internal.TraderLlama>;
        static readonly DROWNED: Internal.EntityType<Internal.Drowned>;
        static readonly EVOKER_FANGS: Internal.EntityType<Internal.EvokerFangs>;
        static readonly MINECART: Internal.EntityType<Internal.Minecart>;
        static readonly PIGLIN: Internal.EntityType<Internal.Piglin>;
        static readonly EXPERIENCE_ORB: Internal.EntityType<Internal.ExperienceOrb>;
        static readonly LLAMA_SPIT: Internal.EntityType<Internal.LlamaSpit>;
        static readonly ALLAY: Internal.EntityType<Internal.Allay>;
        static readonly TROPICAL_FISH: Internal.EntityType<Internal.TropicalFish>;
        static readonly IRON_GOLEM: Internal.EntityType<Internal.IronGolem>;
        static readonly VEX: Internal.EntityType<Internal.Vex>;
        static readonly EXPERIENCE_BOTTLE: Internal.EntityType<Internal.ThrownExperienceBottle>;
        static readonly WARDEN: Internal.EntityType<Internal.Warden>;
        static readonly ENDERMITE: Internal.EntityType<Internal.Endermite>;
        static readonly BOAT: Internal.EntityType<Internal.Boat>;
        static readonly EYE_OF_ENDER: Internal.EntityType<Internal.EyeOfEnder>;
        static readonly WANDERING_TRADER: Internal.EntityType<Internal.WanderingTrader>;
        static readonly SNOW_GOLEM: Internal.EntityType<Internal.SnowGolem>;
        static readonly SNOWBALL: Internal.EntityType<Internal.Snowball>;
        static readonly VILLAGER: Internal.EntityType<Internal.Villager>;
        static readonly FIREWORK_ROCKET: Internal.EntityType<Internal.FireworkRocketEntity>;
        static readonly TADPOLE: Internal.EntityType<Internal.Tadpole>;
        static readonly LEASH_KNOT: Internal.EntityType<Internal.LeashFenceKnotEntity>;
        static readonly RAVAGER: Internal.EntityType<Internal.Ravager>;
        static readonly MAGMA_CUBE: Internal.EntityType<Internal.MagmaCube>;
        static readonly ZOMBIE: Internal.EntityType<Internal.Zombie>;
        static readonly CAT: Internal.EntityType<Internal.Cat>;
        static readonly HOGLIN: Internal.EntityType<Internal.Hoglin>;
        static readonly CAMEL: Internal.EntityType<Internal.Camel>;
        static readonly GOAT: Internal.EntityType<Internal.Goat>;
        static readonly PARROT: Internal.EntityType<Internal.Parrot>;
        static readonly AXOLOTL: Internal.EntityType<Internal.Axolotl>;
        static readonly DRAGON_FIREBALL: Internal.EntityType<Internal.DragonFireball>;
        static readonly PIGLIN_BRUTE: Internal.EntityType<Internal.PiglinBrute>;
        static readonly POLAR_BEAR: Internal.EntityType<Internal.PolarBear>;
        static readonly ELDER_GUARDIAN: Internal.EntityType<Internal.ElderGuardian>;
        static readonly ENDERMAN: Internal.EntityType<Internal.EnderMan>;
        static readonly BEE: Internal.EntityType<Internal.Bee>;
        static readonly POTION: Internal.EntityType<Internal.ThrownPotion>;
        static readonly HOPPER_MINECART: Internal.EntityType<Internal.MinecartHopper>;
        static readonly SKELETON: Internal.EntityType<Internal.Skeleton>;
        static readonly FROG: Internal.EntityType<Internal.Frog>;
        static readonly PLAYER: Internal.EntityType<Player>;
        static readonly SHULKER: Internal.EntityType<Internal.Shulker>;
        static readonly GIANT: Internal.EntityType<Internal.Giant>;
        static readonly FISHING_BOBBER: Internal.EntityType<Internal.FishingHook>;
        static readonly FALLING_BLOCK: Internal.EntityType<Internal.FallingBlockEntity>;
        static readonly COW: Internal.EntityType<Internal.Cow>;
        static readonly BLOCK_DISPLAY: Internal.EntityType<Internal.Display$BlockDisplay>;
        static readonly TRIDENT: Internal.EntityType<Internal.ThrownTrident>;
        static readonly SKELETON_HORSE: Internal.EntityType<Internal.SkeletonHorse>;
        static readonly ITEM: Internal.EntityType<Internal.ItemEntity>;
        static readonly HORSE: Internal.EntityType<Internal.Horse>;
        static readonly ILLUSIONER: Internal.EntityType<Internal.Illusioner>;
        static readonly LIGHTNING_BOLT: Internal.EntityType<Internal.LightningBolt>;
        static readonly MOOSHROOM: Internal.EntityType<Internal.MushroomCow>;
        static readonly RABBIT: Internal.EntityType<Internal.Rabbit>;
        static readonly DONKEY: Internal.EntityType<Internal.Donkey>;
        static readonly EGG: Internal.EntityType<Internal.ThrownEgg>;
    }
    type EntityType_<T extends Internal.Entity> = Special.EntityType | EntityType<T>;
    class Criterion {
        constructor()
        constructor(arg0: Internal.CriterionTriggerInstance_)
        getTrigger(): Internal.CriterionTriggerInstance;
        serializeToJson(): Internal.JsonElement;
        static criterionFromJson(arg0: Internal.JsonObject_, arg1: Internal.DeserializationContext_): Internal.Criterion;
        static criterionFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Criterion;
        static criteriaFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Map<string, Internal.Criterion>;
        static criteriaFromJson(arg0: Internal.JsonObject_, arg1: Internal.DeserializationContext_): Internal.Map<string, Internal.Criterion>;
        serializeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        static serializeToNetwork(arg0: Internal.Map_<string, Internal.Criterion>, arg1: Internal.FriendlyByteBuf_): void;
        get trigger(): Internal.CriterionTriggerInstance
    }
    type Criterion_ = Criterion;
    interface RollCamera {
        abstract doABarrelRoll$getRoll(): number;
        (): number;
    }
    type RollCamera_ = RollCamera;
    class ClientboundLevelEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: BlockPos_, arg2: number, arg3: boolean)
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getType(): number;
        getData(): number;
        isGlobalEvent(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get pos(): BlockPos
        get type(): number
        get data(): number
        get globalEvent(): boolean
        get skippable(): boolean
    }
    type ClientboundLevelEventPacket_ = ClientboundLevelEventPacket;
    abstract class Locale$IsoCountryCode extends Internal.Enum<Internal.Locale$IsoCountryCode> {
        static valueOf(arg0: string): Internal.Locale$IsoCountryCode;
        static values(): Internal.Locale$IsoCountryCode[];
        static readonly PART1_ALPHA2: Internal.Locale$IsoCountryCode;
        static readonly PART1_ALPHA3: Internal.Locale$IsoCountryCode;
        static readonly PART3: Internal.Locale$IsoCountryCode;
    }
    type Locale$IsoCountryCode_ = Locale$IsoCountryCode | "part1_alpha2" | "part3" | "part1_alpha3";
    interface KubeJSCraftingRecipe extends Internal.CraftingRecipe {
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        abstract matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        abstract kjs$getModifyResult(): Internal.ModifyRecipeResultCallback;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        abstract assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract category(): Internal.CraftingBookCategory;
        kjs$getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        getMod(): string;
        abstract kjs$getIngredientActions(): Internal.List<Internal.IngredientAction>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        abstract kjs$getStage(): string;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        kjs$assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
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
    }
    type KubeJSCraftingRecipe_ = KubeJSCraftingRecipe;
    interface SearchTree <T> {
        abstract search(arg0: string): Internal.List<T>;
        (arg0: string): Internal.List_<T>;
    }
    type SearchTree_<T> = SearchTree<T>;
    class ShovelItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
    }
    type ShovelItemBuilder_ = ShovelItemBuilder;
    class ChorusFlowerBlock extends Internal.Block {
        constructor(arg0: Internal.ChorusPlantBlock_, arg1: Internal.BlockBehaviour$Properties_)
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
        static generatePlant(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: number): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly AGE: Internal.IntegerProperty;
        static readonly DEAD_AGE: 5;
    }
    type ChorusFlowerBlock_ = ChorusFlowerBlock;
    class PBRAtlasHolder {
        constructor()
        getNormalAtlas(): Internal.PBRAtlasTexture;
        setSpecularAtlas(atlas: Internal.PBRAtlasTexture_): void;
        setNormalAtlas(atlas: Internal.PBRAtlasTexture_): void;
        cycleAnimationFrames(): void;
        getSpecularAtlas(): Internal.PBRAtlasTexture;
        get normalAtlas(): Internal.PBRAtlasTexture
        set specularAtlas(atlas: Internal.PBRAtlasTexture_)
        set normalAtlas(atlas: Internal.PBRAtlasTexture_)
        get specularAtlas(): Internal.PBRAtlasTexture
    }
    type PBRAtlasHolder_ = PBRAtlasHolder;
    class ContextUtils$PositionRiderContext {
        constructor(entity: Internal.Entity_, passenger: Internal.Entity_, moveFunction: Internal.Entity$MoveFunction_)
        /**
         * The move function
        */
        readonly moveFunction: Internal.Entity$MoveFunction;
        /**
         * The passenger
        */
        readonly passenger: Internal.Entity;
        /**
         * The vehicle entity
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$PositionRiderContext_ = ContextUtils$PositionRiderContext;
    class AddOreProperties {
        constructor()
        /**
         * @deprecated
        */
        aboveBottom(y: number): Internal.VerticalAnchor;
        size(s: number): this;
        /**
         * @deprecated
        */
        belowTop(y: number): Internal.VerticalAnchor;
        /**
         * @deprecated
        */
        bottom(): Internal.VerticalAnchor;
        count(c: number): this;
        addTarget(ruleTest: Internal.RuleTest_, targetState: BlockStatePredicate_): void;
        squared(): this;
        triangleHeight(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        triangleHeight(min: number, max: number): this;
        /**
         * @deprecated
        */
        top(): Internal.VerticalAnchor;
        count(c: Internal.IntProvider_): this;
        count(min: number, max: number): this;
        chance(c: number): this;
        uniformHeight(min: number, max: number): this;
        uniformHeight(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        height: Internal.HeightRangePlacement;
        retrogen: number;
        count: Internal.IntProvider;
        worldgenLayer: Internal.GenerationStep$Decoration;
        chance: number;
        squared: boolean;
        noSurface: number;
        biomes: Internal.BiomeFilter;
        size: number;
        id: ResourceLocation;
        targets: Internal.List<Internal.OreConfiguration$TargetBlockState>;
    }
    type AddOreProperties_ = AddOreProperties;
    class VarHandle$VarHandleDesc extends Internal.DynamicConstantDesc<Internal.VarHandle> {
        resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): Internal.VarHandle;
        static ofArray(arg0: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        static ofField(arg0: Internal.ClassDesc_, arg1: string, arg2: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        static ofStaticField(arg0: Internal.ClassDesc_, arg1: string, arg2: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        varType(): Internal.ClassDesc;
    }
    type VarHandle$VarHandleDesc_ = VarHandle$VarHandleDesc;
    class MobWardBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static canSpawn(arg0: Internal.ServerLevel_, arg1: Internal.BlockPos$MutableBlockPos_, arg2: Internal.CallbackInfoReturnable_<boolean>): void;
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
        static readonly tripleBlockPart: Internal.EnumProperty<Internal.TripleBlockPart>;
        static readonly blockShape: Internal.ArrayVoxelShape;
        static readonly thinBlockShape: Internal.CubeVoxelShape;
    }
    type MobWardBlock_ = MobWardBlock;
    abstract class RenderLayer <T extends Internal.Entity, M extends Internal.EntityModel<T>> implements Internal.IUpperPartHelper {
        constructor(arg0: Internal.RenderLayerParent_<T, M>)
        static coloredCutoutModelCopyLayerRender<T extends Internal.LivingEntity>(arg0: Internal.EntityModel_<T>, arg1: Internal.EntityModel_<T>, arg2: ResourceLocation_, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: T, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        isUpperPart(): boolean;
        static renderColoredCutoutModel<T extends Internal.LivingEntity>(arg0: Internal.EntityModel_<T>, arg1: ResourceLocation_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: T, arg6: number, arg7: number, arg8: number): void;
        getTextureLocation(arg0: T): ResourceLocation;
        abstract render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        setUpperPart(bl: boolean): void;
        getParentModel(): M;
        get upperPart(): boolean
        set upperPart(bl: boolean)
        get parentModel(): M
    }
    type RenderLayer_<T extends Internal.Entity, M extends Internal.EntityModel<T>> = RenderLayer<T, M>;
    class SandStoneTrapBlock extends Internal.Block {
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
        static shouldTrigger(arg0: Internal.Entity_): boolean;
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
    type SandStoneTrapBlock_ = SandStoneTrapBlock;
    class InTagFluidCondition extends Internal.FluidCondition<Internal.TagConfiguration<Internal.Fluid>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        check(arg0: Internal.TagConfiguration_<Internal.Fluid>, arg1: Internal.FluidState_): boolean;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type InTagFluidCondition_ = InTagFluidCondition;
    class CanyonCarverConfiguration extends Internal.CarverConfiguration {
        constructor(arg0: number, arg1: Internal.HeightProvider_, arg2: Internal.FloatProvider_, arg3: Internal.VerticalAnchor_, arg4: Internal.CarverDebugSettings_, arg5: Internal.HolderSet_<Internal.Block>, arg6: Internal.FloatProvider_, arg7: Internal.CanyonCarverConfiguration$CanyonShapeConfiguration_)
        constructor(arg0: Internal.CarverConfiguration_, arg1: Internal.FloatProvider_, arg2: Internal.CanyonCarverConfiguration$CanyonShapeConfiguration_)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.CanyonCarverConfiguration>;
        readonly shape: Internal.CanyonCarverConfiguration$CanyonShapeConfiguration;
        readonly verticalRotation: Internal.FloatProvider;
    }
    type CanyonCarverConfiguration_ = CanyonCarverConfiguration;
    class DataLayer {
        constructor()
        constructor(arg0: number)
        constructor(arg0: number[])
        getData(): number[];
        get(arg0: number, arg1: number, arg2: number): number;
        copy(): this;
        isDefinitelyFilledWith(arg0: number): boolean;
        layerToString(arg0: number): string;
        fill(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isEmpty(): boolean;
        isDefinitelyHomogenous(): boolean;
        get data(): number[]
        get empty(): boolean
        get definitelyHomogenous(): boolean
        data: number[];
        static readonly LAYER_SIZE: 128;
        static readonly SIZE: 2048;
        static readonly LAYER_COUNT: 16;
    }
    type DataLayer_ = DataLayer;
    interface BiomeSourceAccessor {
        abstract getResourceKeyMap(): Internal.Map<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>;
        abstract expandBiomesWith(arg0: Internal.Set_<Internal.Holder<Internal.Biome>>): void;
        abstract setResourceKeyMap(arg0: Internal.Map_<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>): void;
        get resourceKeyMap(): Internal.Map<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>
        set resourceKeyMap(arg0: Internal.Map_<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>)
    }
    type BiomeSourceAccessor_ = BiomeSourceAccessor;
    interface FloatCollection extends Internal.FloatIterable, Internal.Collection<number> {
        abstract retainAll(arg0: Internal.FloatCollection_): boolean;
        abstract containsAll(arg0: Internal.FloatCollection_): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract addAll(arg0: Internal.FloatCollection_): boolean;
        abstract isEmpty(): boolean;
        removeIf(arg0: Internal.DoublePredicate_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract iterator(): Internal.FloatIterator;
        abstract contains(arg0: number): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        doubleParallelStream(): Internal.DoubleStream;
        doubleStream(): Internal.DoubleStream;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        forEach(arg0: Internal.FloatConsumer_): void;
        abstract rem(arg0: number): boolean;
        abstract toArray(arg0: number[]): number[];
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        doubleIterator(): Internal.DoubleIterator;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        doubleSpliterator(): Internal.DoubleSpliterator;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        forEach(arg0: Internal.DoubleConsumer_): void;
        spliterator(): Internal.FloatSpliterator;
        removeIf(arg0: Internal.FloatPredicate_): boolean;
        /**
         * @deprecated
        */
        toFloatArray(arg0: number[]): number[];
        abstract add(arg0: number): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract removeAll(arg0: Internal.FloatCollection_): boolean;
        abstract equals(arg0: any): boolean;
        abstract toFloatArray(): number[];
        get empty(): boolean
    }
    type FloatCollection_ = FloatCollection;
    class IntegratedServer extends Internal.MinecraftServer {
        constructor(arg0: Internal.Thread_, arg1: Internal.Minecraft_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.PackRepository_, arg4: Internal.WorldStem_, arg5: Internal.Services_, arg6: any_)
        getDisplayName(): Internal.Component;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getName(): Internal.Component;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        getEntities(): Internal.EntityArrayList;
        self(): Internal.MinecraftServer;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        sendData(channel: string): void;
        tell(message: Internal.Component_): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        resetGlobalTickLengthMs(): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        alwaysAccepts(): boolean;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        setUUID(arg0: Internal.UUID_): void;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        runCommand(command: string): number;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        get displayName(): Internal.Component
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        set UUID(arg0: Internal.UUID_)
    }
    type IntegratedServer_ = IntegratedServer;
    interface LongUnaryOperator {
        andThen(arg0: Internal.LongUnaryOperator_): this;
        compose(arg0: Internal.LongUnaryOperator_): this;
        identity(): this;
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type LongUnaryOperator_ = LongUnaryOperator;
    class SmallDripleafBlock extends Internal.DoublePlantBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
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
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 6.0;
        static readonly FACING: Internal.DirectionProperty;
    }
    type SmallDripleafBlock_ = SmallDripleafBlock;
    class DayOfWeek extends Internal.Enum<Internal.DayOfWeek> implements Internal.TemporalAccessor, Internal.TemporalAdjuster {
        plus(arg0: number): this;
        minus(arg0: number): this;
        static from(arg0: Internal.TemporalAccessor_): Internal.DayOfWeek;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        static values(): Internal.DayOfWeek[];
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        static of(arg0: number): Internal.DayOfWeek;
        get(arg0: Internal.TemporalField_): number;
        getLong(arg0: Internal.TemporalField_): number;
        getValue(): number;
        static valueOf(arg0: string): Internal.DayOfWeek;
        isSupported(arg0: Internal.TemporalField_): boolean;
        get value(): number
        static readonly SUNDAY: Internal.DayOfWeek;
        static readonly SATURDAY: Internal.DayOfWeek;
        static readonly THURSDAY: Internal.DayOfWeek;
        static readonly FRIDAY: Internal.DayOfWeek;
        static readonly MONDAY: Internal.DayOfWeek;
        static readonly WEDNESDAY: Internal.DayOfWeek;
        static readonly TUESDAY: Internal.DayOfWeek;
    }
    type DayOfWeek_ = DayOfWeek | "tuesday" | "friday" | "thursday" | "monday" | "saturday" | "sunday" | "wednesday";
    interface ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        abstract accept(arg0: BlockPos_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        (arg0: BlockPos, arg1: Internal.BlockEntityType<any>, arg2: Internal.CompoundTag): void;
    }
    type ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ClientboundLevelChunkPacketData$BlockEntityTagOutput;
    interface FloatConsumer extends Internal.DoubleConsumer, Internal.Consumer<number> {
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        andThen(arg0: Internal.FloatConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.DoubleConsumer_): this;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type FloatConsumer_ = FloatConsumer;
    class FireBlock extends Internal.BaseFireBlock implements Internal.FireBlockAccessor, Internal.FireBlockHooks {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isNearRain(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        dungeonnowloading$setFlammable(arg0: Internal.Block_, arg1: number, arg2: number): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canCatchFire(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        static bootStrap(): void;
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
        /**
         * @deprecated
        */
        getBurnOdds(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        getIgniteOdds(arg0: Internal.BlockState_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        fabric_getVanillaEntry(block: Internal.BlockState_): Internal.FlammableBlockRegistry$Entry;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setFlammable(arg0: Internal.Block_, arg1: number, arg2: number): void;
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
        static readonly NORTH: Internal.BooleanProperty;
        static readonly AGE: Internal.IntegerProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly UP: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly MAX_AGE: 15;
        static readonly EAST: Internal.BooleanProperty;
    }
    type FireBlock_ = FireBlock;
    interface ListIterator <E> extends Internal.Iterator<E> {
        abstract nextIndex(): number;
        abstract remove(): void;
        abstract hasPrevious(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<E>): void;
        abstract next(): E;
        abstract previous(): E;
        abstract hasNext(): boolean;
        abstract add(arg0: E): void;
        abstract set(arg0: E): void;
        abstract previousIndex(): number;
    }
    type ListIterator_<E> = ListIterator<E>;
    class SimplySwordsNetheriteSwordItem extends Internal.SwordItem {
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
    type SimplySwordsNetheriteSwordItem_ = SimplySwordsNetheriteSwordItem;
    class SpellPreCastEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: string, arg2: number, arg3: Internal.SchoolType_, arg4: Internal.CastSource_)
        getCastSource(): Internal.CastSource;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getSpellId(): string;
        getSchoolType(): Internal.SchoolType;
        get castSource(): Internal.CastSource
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get spellId(): string
        get schoolType(): Internal.SchoolType
    }
    type SpellPreCastEvent_ = SpellPreCastEvent;
    interface ISpellbook {
    }
    type ISpellbook_ = ISpellbook;
    class ParticleKeyframeData extends Internal.KeyFrameData {
        constructor(arg0: number, arg1: string, arg2: string, arg3: string)
        getLocator(): string;
        getEffect(): string;
        script(): string;
        get locator(): string
        get effect(): string
    }
    type ParticleKeyframeData_ = ParticleKeyframeData;
    class ScreenDirection extends Internal.Enum<Internal.ScreenDirection> {
        isPositive(): boolean;
        isBefore(arg0: number, arg1: number): boolean;
        static valueOf(arg0: string): Internal.ScreenDirection;
        getOpposite(): this;
        getAxis(): Internal.ScreenAxis;
        isAfter(arg0: number, arg1: number): boolean;
        coordinateValueComparator(): Internal.IntComparator;
        static values(): Internal.ScreenDirection[];
        get positive(): boolean
        get opposite(): Internal.ScreenDirection
        get axis(): Internal.ScreenAxis
        static readonly UP: Internal.ScreenDirection;
        static readonly RIGHT: Internal.ScreenDirection;
        static readonly LEFT: Internal.ScreenDirection;
        static readonly DOWN: Internal.ScreenDirection;
    }
    type ScreenDirection_ = ScreenDirection | "up" | "down" | "right" | "left";
    class MaterialItem extends Internal.Item {
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
    type MaterialItem_ = MaterialItem;
    class NuclearSirenFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type NuclearSirenFeature_ = NuclearSirenFeature;
    class HoneyBottleItem extends Internal.Item {
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
    type HoneyBottleItem_ = HoneyBottleItem;
    interface BooleanCollection extends Internal.BooleanIterable, Internal.Collection<boolean> {
        abstract addAll(arg0: Internal.BooleanCollection_): boolean;
        stream(): Internal.Stream<boolean>;
        /**
         * @deprecated
        */
        toBooleanArray(arg0: boolean[]): boolean[];
        abstract isEmpty(): boolean;
        abstract containsAll(arg0: Internal.BooleanCollection_): boolean;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<boolean>): void;
        abstract add(arg0: boolean): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract addAll(arg0: Internal.Collection_<boolean>): boolean;
        removeIf(arg0: Internal.BooleanPredicate_): boolean;
        abstract retainAll(arg0: Internal.BooleanCollection_): boolean;
        parallelStream(): Internal.Stream<boolean>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract toBooleanArray(): boolean[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<boolean>): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        spliterator(): Internal.BooleanSpliterator;
        abstract iterator(): Internal.BooleanIterator;
        abstract hashCode(): number;
        abstract size(): number;
        abstract removeAll(arg0: Internal.BooleanCollection_): boolean;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: boolean): boolean;
        abstract contains(arg0: boolean): boolean;
        abstract clear(): void;
        abstract rem(arg0: boolean): boolean;
        abstract toArray(arg0: boolean[]): boolean[];
        abstract equals(arg0: any): boolean;
        forEach(arg0: Internal.BooleanConsumer_): void;
        get empty(): boolean
    }
    type BooleanCollection_ = BooleanCollection;
    interface IForgeRegistryModifiable <V> extends Internal.IForgeRegistry<V> {
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
        abstract containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        abstract getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getCodec(): Internal.Codec<V>;
        abstract getDefaultKey(): ResourceLocation;
        abstract getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract remove(arg0: ResourceLocation_): V;
        abstract getKeys(): Internal.Set<ResourceLocation>;
        abstract tags(): Internal.ITagManager<V>;
        abstract getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        abstract register(arg0: string, arg1: V): void;
        abstract containsValue(arg0: V): boolean;
        abstract isLocked(): boolean;
        abstract getValue(arg0: ResourceLocation_): V;
        abstract clear(): void;
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
        get locked(): boolean
        get registryName(): ResourceLocation
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
    }
    type IForgeRegistryModifiable_<V> = IForgeRegistryModifiable<V>;
    class DataFetcher {
        constructor(arg0: Internal.Executor_, arg1: Internal.TimeUnit_, arg2: any_)
        createTask<T>(arg0: string, arg1: Internal.Callable_<T>, arg2: Duration_, arg3: Internal.RepeatedDelayStrategy_): Internal.DataFetcher$Task<T>;
        createSubscription(): Internal.DataFetcher$Subscription;
    }
    type DataFetcher_ = DataFetcher;
}
declare namespace org.apache.maven.repository.legacy.metadata {
    interface ArtifactMetadata {
        abstract storedInArtifactVersionDirectory(): boolean;
        abstract storedInGroupDirectory(): boolean;
        abstract storeInLocalRepository(arg0: Internal.ArtifactRepository_, arg1: Internal.ArtifactRepository_): void;
        abstract merge(arg0: org.apache.maven.repository.legacy.metadata.ArtifactMetadata_): void;
        abstract getKey(): any;
        abstract getGroupId(): string;
        abstract getLocalFilename(arg0: Internal.ArtifactRepository_): string;
        abstract getRemoteFilename(): string;
        abstract getBaseVersion(): string;
        abstract extendedToString(): string;
        abstract getArtifactId(): string;
        get key(): any
        get groupId(): string
        get remoteFilename(): string
        get baseVersion(): string
        get artifactId(): string
    }
    type ArtifactMetadata_ = ArtifactMetadata;
}
declare namespace org.apache.commons.lang3.tuple {
    abstract class Pair <L, R> implements Internal.Map$Entry<L, R>, Internal.Comparable<org.apache.commons.lang3.tuple.Pair<L, R>>, Internal.Serializable {
        constructor()
        getKey(): L;
        static comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getLeft(): L;
        static of<L, R>(arg0: L, arg1: R): org.apache.commons.lang3.tuple.Pair<L, R>;
        abstract getRight(): R;
        static emptyArray<L, R>(): org.apache.commons.lang3.tuple.Pair<L, R>[];
        compareTo(arg0: org.apache.commons.lang3.tuple.Pair_<L, R>): number;
        compareTo(arg0: any): number;
        getValue(): R;
        static comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        static copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        static of<L, R>(arg0: Internal.Map$Entry_<L, R>): org.apache.commons.lang3.tuple.Pair<L, R>;
        static comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        static comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract setValue(arg0: R): R;
        toString(arg0: string): string;
        get key(): L
        get left(): L
        get right(): R
        get value(): R
        set value(arg0: R)
        static readonly EMPTY_ARRAY: org.apache.commons.lang3.tuple.Pair<any, any>[];
    }
    type Pair_<L, R> = Pair<L, R>;
}
