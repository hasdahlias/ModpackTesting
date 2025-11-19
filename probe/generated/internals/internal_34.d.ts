/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class GingerbreadDoorBlock extends Internal.Block {
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
        setOpen(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: boolean): void;
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
        isOpen(arg0: Internal.BlockState_): boolean;
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
        static readonly HINGE: Internal.EnumProperty<Internal.DoorHingeSide>;
        static readonly OPEN: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type GingerbreadDoorBlock_ = GingerbreadDoorBlock;
    class ContextUtils$ArrowBlockHitContext {
        constructor(result: Internal.BlockHitResult_, entity: Internal.AbstractArrow_)
        /**
         * The result of the hit on the block
        */
        readonly result: Internal.BlockHitResult;
        /**
         * The abstract arrow entity
        */
        readonly entity: Internal.AbstractArrow;
    }
    type ContextUtils$ArrowBlockHitContext_ = ContextUtils$ArrowBlockHitContext;
    abstract class DirectionalBlock extends Internal.Block {
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
    type DirectionalBlock_ = DirectionalBlock;
    class EntryGroup$Builder extends Internal.LootPoolEntryContainer$Builder<Internal.EntryGroup$Builder> {
        constructor(...arg0: Internal.LootPoolEntryContainer$Builder_<any>[])
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): this;
        unwrap(): Internal.ConditionUserBuilder<any>;
        getThis(): Internal.LootPoolEntryContainer$Builder<any>;
        get "this"(): Internal.LootPoolEntryContainer$Builder<any>
    }
    type EntryGroup$Builder_ = EntryGroup$Builder;
    interface VillagerDataHolder extends Internal.VariantHolder<Internal.VillagerType> {
        abstract setVillagerData(arg0: Internal.VillagerData_): void;
        abstract getVillagerData(): Internal.VillagerData;
        setVariant(arg0: any): void;
        getVariant(): Internal.VillagerType;
        setVariant(arg0: Internal.VillagerType_): void;
        set villagerData(arg0: Internal.VillagerData_)
        get villagerData(): Internal.VillagerData
        set variant(arg0: any)
        get variant(): Internal.VillagerType
        set variant(arg0: Internal.VillagerType_)
    }
    type VillagerDataHolder_ = VillagerDataHolder;
    class LastSeenMessages$Update extends Internal.Record {
        constructor(arg0: number, arg1: Internal.BitSet_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        write(arg0: Internal.FriendlyByteBuf_): void;
        offset(): number;
        acknowledged(): Internal.BitSet;
    }
    type LastSeenMessages$Update_ = LastSeenMessages$Update;
    class MultiShotEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type MultiShotEnchantment_ = MultiShotEnchantment;
    interface Byte2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.IntPredicate {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Byte2ShortFunction;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        negate(): Internal.IntPredicate;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2BooleanFunction;
        remove(arg0: number): boolean;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2BooleanFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        put(arg0: number, arg1: boolean): boolean;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Byte2IntFunction;
        defaultReturnValue(): boolean;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Byte2DoubleFunction;
        abstract get(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2BooleanFunction;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Byte2FloatFunction;
        size(): number;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2BooleanFunction;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Byte2LongFunction;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2BooleanFunction<T>;
        clear(): void;
        apply(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2BooleanFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2BooleanFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2BooleanFunction;
        (arg0: number): boolean;
    }
    type Byte2BooleanFunction_ = Byte2BooleanFunction;
    interface IForgeGuiGraphics {
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        readonly UNDO_CHAR: "↶";
        readonly DEFAULT_BORDER_COLOR_END: 1344798847;
        readonly DEFAULT_BORDER_COLOR_START: 1347420415;
        readonly RESET_CHAR: "☄";
        readonly TEXT_COLOR_CODES: number[];
        readonly INVALID: "✕";
        readonly DEFAULT_BACKGROUND_COLOR: -267386864;
        readonly VALID: "✔";
    }
    type IForgeGuiGraphics_ = IForgeGuiGraphics;
    class BeehiveBlock extends Internal.BaseEntityBlock {
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
        static dropHoneycomb(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        releaseBeesAndResetHoneyLevel(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Player_, arg4: Internal.BeehiveBlockEntity$BeeReleaseStatus_): void;
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
        resetHoneyLevel(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
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
        static readonly MAX_HONEY_LEVELS: 5;
        static readonly HONEY_LEVEL: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type BeehiveBlock_ = BeehiveBlock;
    class DoubleHighBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
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
    type DoubleHighBlockItem_ = DoubleHighBlockItem;
    class BrambleSwordItem extends Internal.UniqueSwordItem {
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
    }
    type BrambleSwordItem_ = BrambleSwordItem;
    abstract class GeoRenderLayer <T extends Internal.GeoAnimatable> {
        constructor(arg0: Internal.GeoRenderer_<T>)
        getDefaultBakedModel(arg0: T): Internal.BakedGeoModel;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        getRenderer(): Internal.GeoRenderer<T>;
        renderForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        render(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        getGeoModel(): Internal.GeoModel<T>;
        get renderer(): Internal.GeoRenderer<T>
        get geoModel(): Internal.GeoModel<T>
    }
    type GeoRenderLayer_<T extends Internal.GeoAnimatable> = GeoRenderLayer<T>;
    abstract class SpreadingSnowyDirtBlock extends Internal.SnowyDirtBlock {
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
    type SpreadingSnowyDirtBlock_ = SpreadingSnowyDirtBlock;
    class PackOutput {
        constructor(arg0: Internal.Path_)
        getOutputFolder(arg0: Internal.PackOutput$Target_): Internal.Path;
        getOutputFolder(): Internal.Path;
        createPathProvider(arg0: Internal.PackOutput$Target_, arg1: string): Internal.PackOutput$PathProvider;
        get outputFolder(): Internal.Path
    }
    type PackOutput_ = PackOutput;
    class JeiRuntime implements Internal.IJeiRuntime {
        constructor(arg0: Internal.IRecipeManager_, arg1: Internal.IIngredientManager_, arg2: Internal.IJeiKeyMappings_, arg3: Internal.IJeiHelpers_, arg4: Internal.IScreenHelper_, arg5: Internal.IRecipeTransferManager_, arg6: Internal.IEditModeConfig_, arg7: Internal.IIngredientListOverlay_, arg8: Internal.IBookmarkOverlay_, arg9: Internal.IRecipesGui_, arg10: Internal.IIngredientFilter_, arg11: Internal.IJeiConfigManager_)
        getEditModeConfig(): Internal.IEditModeConfig;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIngredientVisibility(): Internal.IIngredientVisibility;
        getJeiHelpers(): Internal.IJeiHelpers;
        getKeyMappings(): Internal.IJeiKeyMappings;
        getIngredientManager(): Internal.IIngredientManager;
        getRecipesGui(): Internal.IRecipesGui;
        getConfigManager(): Internal.IJeiConfigManager;
        getIngredientListOverlay(): Internal.IIngredientListOverlay;
        getIngredientFilter(): Internal.IIngredientFilter;
        getRecipeTransferManager(): Internal.IRecipeTransferManager;
        getBookmarkOverlay(): Internal.IBookmarkOverlay;
        getRecipeManager(): Internal.IRecipeManager;
        getScreenHelper(): Internal.IScreenHelper;
        get editModeConfig(): Internal.IEditModeConfig
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get ingredientVisibility(): Internal.IIngredientVisibility
        get jeiHelpers(): Internal.IJeiHelpers
        get keyMappings(): Internal.IJeiKeyMappings
        get ingredientManager(): Internal.IIngredientManager
        get recipesGui(): Internal.IRecipesGui
        get configManager(): Internal.IJeiConfigManager
        get ingredientListOverlay(): Internal.IIngredientListOverlay
        get ingredientFilter(): Internal.IIngredientFilter
        get recipeTransferManager(): Internal.IRecipeTransferManager
        get bookmarkOverlay(): Internal.IBookmarkOverlay
        get recipeManager(): Internal.IRecipeManager
        get screenHelper(): Internal.IScreenHelper
    }
    type JeiRuntime_ = JeiRuntime;
    interface SuspiciousEffectHolder {
        abstract getEffectDuration(): number;
        abstract getSuspiciousEffect(): Internal.MobEffect;
        getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        tryGet(arg0: Internal.ItemLike_): this;
        get effectDuration(): number
        get suspiciousEffect(): Internal.MobEffect
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
    }
    type SuspiciousEffectHolder_ = SuspiciousEffectHolder;
    class RecipePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.FieldConfiguration<Internal.Recipe<any>>> {
        constructor()
    }
    type RecipePower_ = RecipePower;
    class RegistryEventJS <T> extends Internal.StartupEventJS implements Internal.IRegistryJS {
        constructor(r: Internal.RegistryInfo_<T>)
        create(id: string, type: string): Internal.BuilderBase<T>;
        /**
         * Creates a new custom entity based on an existing living entity class.
         * This allows extending or modifying behavior of vanilla or modded entities dynamically.
         * 
         * The builder provided in the callback can be used to directly access the respective entity's modification builder.
         * 
         * Example usage:
         * ```javascript
         * let Villager = Java.loadClass("net.minecraft.world.entity.npc.Villager")
         * event.createCustom('wyrm', Villager, modifyBuilder => {
         *     modifyBuilder.tick(entity => {
         *         console.log(entity.type)
         *     })
         * })
         * ```
        */
        createCustom(id: string, entityClass: typeof any, consumer: Internal.Consumer_<any>): Internal.CustomEntityBuilder;
        createCustom(id: string, object: Internal.Supplier_<any>): Internal.CustomBuilderObject;
        /**
         * @deprecated
        */
        custom(id: string, object: any): Internal.CustomBuilderObject;
        create(id: string): Internal.BuilderBase<T>;
        readonly created: Internal.List<Internal.BuilderBase<T>>;
    }
    type RegistryEventJS_<T> = RegistryEventJS<T>;
    interface IDelegatedConditionConfiguration <V> extends Internal.IDynamicFeatureConfiguration {
        isConfigurationValid(): boolean;
        abstract check(arg0: V): boolean;
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
        holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        (arg0: V): boolean;
    }
    type IDelegatedConditionConfiguration_<V> = IDelegatedConditionConfiguration<V>;
    interface Boolean2ShortFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Boolean2ByteFunction;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2ShortFunction;
        put(arg0: boolean, arg1: number): number;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Boolean2DoubleFunction;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2ShortFunction<T>;
        apply(arg0: boolean): number;
        defaultReturnValue(): number;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Boolean2IntFunction;
        abstract get(arg0: boolean): number;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        remove(arg0: boolean): number;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Boolean2LongFunction;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2ShortFunction;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Boolean2FloatFunction;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2ShortFunction;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        getOrDefault(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2ShortFunction;
        clear(): void;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2ShortFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Boolean2CharFunction;
        (arg0: boolean): number;
    }
    type Boolean2ShortFunction_ = Boolean2ShortFunction;
    class MetalBarrelBlock extends Internal.BarrelBlock {
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
    }
    type MetalBarrelBlock_ = MetalBarrelBlock;
    class RegionType extends Internal.Enum<Internal.RegionType> {
        static valueOf(arg0: string): Internal.RegionType;
        static values(): Internal.RegionType[];
        static readonly NETHER: Internal.RegionType;
        static readonly OVERWORLD: Internal.RegionType;
    }
    type RegionType_ = RegionType | "overworld" | "nether";
    interface DensityFunction$ContextProvider {
        abstract forIndex(arg0: number): Internal.DensityFunction$FunctionContext;
        abstract fillAllDirectly(arg0: number[], arg1: Internal.DensityFunction_): void;
    }
    type DensityFunction$ContextProvider_ = DensityFunction$ContextProvider;
    class DyeableHorseArmorItem extends Internal.HorseArmorItem implements Internal.DyeableLeatherItem {
        constructor(arg0: number, arg1: ResourceLocation_, arg2: Internal.Item$Properties_)
        constructor(arg0: number, arg1: string, arg2: Internal.Item$Properties_)
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
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
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
        getColor(arg0: Internal.ItemStack_): number;
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
        clearColor(arg0: Internal.ItemStack_): void;
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
    type DyeableHorseArmorItem_ = DyeableHorseArmorItem;
    class DropRule extends Internal.Enum<Internal.DropRule> {
        static values(): Internal.DropRule[];
        static valueOf(name: string): Internal.DropRule;
        static readonly KEEP: Internal.DropRule;
        static readonly DESTROY: Internal.DropRule;
        static readonly DEFAULT: Internal.DropRule;
        static readonly DROP: Internal.DropRule;
    }
    type DropRule_ = "keep" | DropRule | "drop" | "destroy" | "default";
    interface IJeiConfigValue <T> {
        abstract getName(): string;
        abstract getValue(): T;
        abstract set(arg0: T): boolean;
        abstract getDescription(): string;
        abstract getSerializer(): Internal.IJeiConfigValueSerializer<T>;
        abstract getDefaultValue(): T;
        get name(): string
        get value(): T
        get description(): string
        get serializer(): Internal.IJeiConfigValueSerializer<T>
        get defaultValue(): T
    }
    type IJeiConfigValue_<T> = IJeiConfigValue<T>;
    class MathContext implements Internal.Serializable {
        constructor(arg0: number)
        constructor(arg0: number, arg1: Internal.RoundingMode_)
        constructor(arg0: string)
        getPrecision(): number;
        getRoundingMode(): Internal.RoundingMode;
        get precision(): number
        get roundingMode(): Internal.RoundingMode
        static readonly DECIMAL128: Internal.MathContext;
        static readonly UNLIMITED: Internal.MathContext;
        static readonly DECIMAL32: Internal.MathContext;
        static readonly DECIMAL64: Internal.MathContext;
    }
    type MathContext_ = MathContext;
    class BatJSBuilder extends Internal.MobBuilder<any> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type BatJSBuilder_ = BatJSBuilder;
    class EntityDataAccessor <T> {
        constructor(arg0: number, arg1: Internal.EntityDataSerializer_<T>)
        getSerializer(): Internal.EntityDataSerializer<T>;
        getId(): number;
        get serializer(): Internal.EntityDataSerializer<T>
        get id(): number
    }
    type EntityDataAccessor_<T> = EntityDataAccessor<T>;
    class ExpandedSimpleContainer extends Internal.SimpleContainer implements Internal.Iterable<com.mojang.datafixers.util.Pair<number, Internal.ItemStack>> {
        constructor(container: any_, size: number, name: string)
        constructor(container: any_, size: number, name: string, toggleNewlyConstructed: boolean)
        stopOpen(arg0: Player_): void;
        static tryClear(arg0: any): void;
        wasNewlyConstructed(): boolean;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        spliterator(): Internal.Spliterator<com.mojang.datafixers.util.Pair<number, Internal.ItemStack>>;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        name(): string;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        validIndex(slot: number): boolean;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        forEach(arg0: Internal.Consumer_<com.mojang.datafixers.util.Pair<number, Internal.ItemStack>>): void;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        copyPrev(prevContainer: Internal.ExpandedSimpleContainer_): void;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        isSlotFlagged(slot: number): boolean;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        setPreviousItem(slot: number, stack: Internal.ItemStack_): void;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        iterator(): Internal.Iterator<com.mojang.datafixers.util.Pair<number, Internal.ItemStack>>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        setFromPrev(prevContainer: Internal.ExpandedSimpleContainer_): void;
        find(ingredient: Internal.Ingredient_): number;
        getPreviousItem(slot: number): Internal.ItemStack;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get width(): number
        get maxStackSize(): number
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set fromPrev(prevContainer: Internal.ExpandedSimpleContainer_)
    }
    type ExpandedSimpleContainer_ = ExpandedSimpleContainer;
    class RibbonwrathEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type RibbonwrathEffect_ = RibbonwrathEffect;
    class Potion implements Internal.IForgePotion {
        constructor(arg0: string, ...arg1: Internal.MobEffectInstance_[])
        constructor(...arg0: Internal.MobEffectInstance_[])
        isFoil(arg0: Internal.ItemStack_): boolean;
        getEffects(): Internal.List<Internal.MobEffectInstance>;
        hasInstantEffects(): boolean;
        static byName(arg0: string): Internal.Potion;
        getName(arg0: string): string;
        get effects(): Internal.List<Internal.MobEffectInstance>
    }
    type Potion_ = Potion | Special.Potion;
    abstract class ZoneId implements Internal.Serializable {
        static systemDefault(): Internal.ZoneId;
        static of(arg0: string): Internal.ZoneId;
        abstract getRules(): Internal.ZoneRules;
        static ofOffset(arg0: string, arg1: Internal.ZoneOffset_): Internal.ZoneId;
        static getAvailableZoneIds(): Internal.Set<string>;
        static of(arg0: string, arg1: Internal.Map_<string, string>): Internal.ZoneId;
        abstract getId(): string;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        normalized(): this;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZoneId;
        get rules(): Internal.ZoneRules
        get availableZoneIds(): Internal.Set<string>
        get id(): string
        static readonly SHORT_IDS: {"VST": "Asia/Ho_Chi_Minh", "JST": "Asia/Tokyo", "ART": "Africa/Cairo", "PST": "America/Los_Angeles", "BET": "America/Sao_Paulo", "MIT": "Pacific/Apia", "CAT": "Africa/Harare", "AGT": "America/Argentina/Buenos_Aires", "NET": "Asia/Yerevan", "CST": "America/Chicago", "IST": "Asia/Kolkata", "AET": "Australia/Sydney", "BST": "Asia/Dhaka", "ACT": "Australia/Darwin", "HST": "-10:00", "NST": "Pacific/Auckland", "AST": "America/Anchorage", "MST": "-07:00", "SST": "Pacific/Guadalcanal", "CTT": "Asia/Shanghai", "PRT": "America/Puerto_Rico", "ECT": "Europe/Paris", "EAT": "Africa/Addis_Ababa", "EST": "-05:00", "PNT": "America/Phoenix", "PLT": "Asia/Karachi", "CNT": "America/St_Johns", "IET": "America/Indiana/Indianapolis"};
    }
    type ZoneId_ = ZoneId;
    interface RemappableRegistry {
        abstract remap(arg0: string, arg1: Internal.Object2IntMap_<ResourceLocation>, arg2: Internal.RemappableRegistry$RemapMode_): void;
        abstract unmap(arg0: string): void;
    }
    type RemappableRegistry_ = RemappableRegistry;
    class DivingArmorItem extends Internal.ArmorItem {
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
    type DivingArmorItem_ = DivingArmorItem;
    class ReplaceLootTablePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
        static restore(): Internal.LootTable;
        static pop(): Internal.LootTable;
        static clearStack(): void;
        static peek(): Internal.LootTable;
        static addToStack(arg0: Internal.LootTable_): void;
        static readonly REPLACED_TABLE_UTIL_ID: ResourceLocation;
    }
    type ReplaceLootTablePower_ = ReplaceLootTablePower;
    class BambooStalkBlock extends Internal.Block implements Internal.IPlantable, Internal.BonemealableBlock {
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
        getHeightAboveUpToMax(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
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
        growBamboo(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: number): void;
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
        getHeightBelowUpToMax(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getMod(): string;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
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
        static readonly COLLISION_SHAPE: Internal.ArrayVoxelShape;
        static readonly MAX_HEIGHT: 16;
        static readonly LEAVES: Internal.EnumProperty<Internal.BambooLeaves>;
        static readonly SMALL_LEAVES_AABB_OFFSET: 3.0;
        static readonly STAGE_DONE_GROWING: 1;
        static readonly SMALL_SHAPE: Internal.ArrayVoxelShape;
        static readonly STAGE_GROWING: 0;
        static readonly LARGE_SHAPE: Internal.ArrayVoxelShape;
        static readonly STAGE: Internal.IntegerProperty;
        static readonly AGE_THIN_BAMBOO: 0;
        static readonly AGE: Internal.IntegerProperty;
        static readonly AGE_THICK_BAMBOO: 1;
        static readonly COLLISION_AABB_OFFSET: 1.5;
        static readonly LARGE_LEAVES_AABB_OFFSET: 5.0;
    }
    type BambooStalkBlock_ = BambooStalkBlock;
    class SimpleParticleTypeOverride extends Internal.SimpleParticleType {
        constructor(arg0: boolean)
        getType(): Internal.ParticleType<any>;
        get type(): Internal.ParticleType<any>
    }
    type SimpleParticleTypeOverride_ = SimpleParticleTypeOverride;
    class SodaBottleStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.SodaBottleStructure>;
    }
    type SodaBottleStructure_ = SodaBottleStructure;
    class SpawnEntityConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(type: Internal.EntityType_<any>, tag: Internal.CompoundTag_, action: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        tag(): Internal.CompoundTag;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        type(): Internal.EntityType<any>;
        getUnbound(): Internal.List<string>;
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
        static readonly CODEC: Internal.Codec<Internal.SpawnEntityConfiguration>;
    }
    type SpawnEntityConfiguration_ = SpawnEntityConfiguration;
    class StringBuilder extends Internal.AbstractStringBuilder implements Internal.CharSequence, Internal.Comparable<Internal.StringBuilder>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.CharSequence_)
        constructor(arg0: number)
        constructor(arg0: string)
        reverse(): this;
        insert(arg0: number, arg1: number): this;
        insert(arg0: number, arg1: Internal.CharSequence_): this;
        appendCodePoint(arg0: number): this;
        insert(arg0: number, arg1: number): this;
        isEmpty(): boolean;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.StringBuilder_): number;
        static compare(arg0: Internal.CharSequence_, arg1: Internal.CharSequence_): number;
        insert(arg0: number, arg1: Internal.CharSequence_, arg2: number, arg3: number): this;
        insert(arg0: number, arg1: boolean): this;
        insert(arg0: number, arg1: string): this;
        insert(arg0: number, arg1: string[]): this;
        get empty(): boolean
    }
    type StringBuilder_ = StringBuilder;
    class ClientboundForgetLevelChunkPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
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
    type ClientboundForgetLevelChunkPacket_ = ClientboundForgetLevelChunkPacket;
    class Structure$GenerationStub extends Internal.Record {
        constructor(position: BlockPos_, generator: Internal.Either_<Internal.Consumer<Internal.StructurePiecesBuilder>, Internal.StructurePiecesBuilder>)
        constructor(arg0: BlockPos_, arg1: Internal.Consumer_<Internal.StructurePiecesBuilder>)
        generator(): Internal.Either<Internal.Consumer<Internal.StructurePiecesBuilder>, Internal.StructurePiecesBuilder>;
        getPiecesBuilder(): Internal.StructurePiecesBuilder;
        position(): BlockPos;
        get piecesBuilder(): Internal.StructurePiecesBuilder
    }
    type Structure$GenerationStub_ = Structure$GenerationStub;
    class MutableArmorTier implements Internal.ArmorMaterial {
        constructor(id: string, p: Internal.ArmorMaterial_)
        getDefenseForType(equipmentSlot: Internal.ArmorItem$Type_): number;
        getDurabilityForType(equipmentSlot: Internal.ArmorItem$Type_): number;
        getVanillaRepairIngredient(): Internal.Ingredient;
        getEnchantmentValue(): number;
        getKnockbackResistance(): number;
        setToughness(f: number): void;
        setEnchantmentValue(i: number): void;
        setSlotProtections(p: number[]): void;
        setEquipSound(e: Internal.SoundEvent_): void;
        setKnockbackResistance(f: number): void;
        setName(name: string): void;
        setDurabilityMultiplier(m: number): void;
        getName(): string;
        getToughness(): number;
        setRepairIngredient(in_: Internal.Ingredient_): void;
        getEquipSound(): Internal.SoundEvent;
        get vanillaRepairIngredient(): Internal.Ingredient
        get enchantmentValue(): number
        get knockbackResistance(): number
        set toughness(f: number)
        set enchantmentValue(i: number)
        set slotProtections(p: number[])
        set equipSound(e: Internal.SoundEvent_)
        set knockbackResistance(f: number)
        set name(name: string)
        set durabilityMultiplier(m: number)
        get name(): string
        get toughness(): number
        set repairIngredient(in_: Internal.Ingredient_)
        get equipSound(): Internal.SoundEvent
        readonly parent: Internal.ArmorMaterial;
    }
    type MutableArmorTier_ = MutableArmorTier;
    class UpgradeOrbItem extends Internal.Item {
        constructor(arg0: Internal.UpgradeType_, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        getUpgradeType(): Internal.UpgradeType;
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
        get upgradeType(): Internal.UpgradeType
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
    type UpgradeOrbItem_ = UpgradeOrbItem;
    class WeaponAttributes {
        constructor(attack_range: number, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: Internal.WeaponAttributes$Attack_[])
        offHandPose(): string;
        isTwoHanded(): boolean;
        attacks(): Internal.WeaponAttributes$Attack[];
        category(): string;
        two_handed(): boolean;
        attackRange(): number;
        pose(): string;
        get twoHanded(): boolean
    }
    type WeaponAttributes_ = WeaponAttributes;
    class BambooLeaves extends Internal.Enum<Internal.BambooLeaves> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.BambooLeaves;
        getSerializedName(): string;
        static values(): Internal.BambooLeaves[];
        get serializedName(): string
        static readonly SMALL: Internal.BambooLeaves;
        static readonly NONE: Internal.BambooLeaves;
        static readonly LARGE: Internal.BambooLeaves;
    }
    type BambooLeaves_ = "large" | "small" | "none" | BambooLeaves;
    interface AnimationController$CustomKeyframeHandler <A extends Internal.GeoAnimatable> {
        abstract handle(arg0: Internal.CustomInstructionKeyframeEvent_<A>): void;
        (arg0: Internal.CustomInstructionKeyframeEvent<A>): void;
    }
    type AnimationController$CustomKeyframeHandler_<A extends Internal.GeoAnimatable> = AnimationController$CustomKeyframeHandler<A>;
    interface BootstapContext <T> {
        register(arg0: Internal.ResourceKey_<T>, arg1: T): Internal.Holder$Reference<T>;
        abstract register(arg0: Internal.ResourceKey_<T>, arg1: T, arg2: Internal.Lifecycle_): Internal.Holder$Reference<T>;
        abstract lookup<S>(arg0: Internal.ResourceKey_<Internal.Registry<S>>): Internal.HolderGetter<S>;
        registryLookup<S>(arg0: Internal.ResourceKey_<Internal.Registry<S>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<S>>;
    }
    type BootstapContext_<T> = BootstapContext<T>;
    class CameraType extends Internal.Enum<Internal.CameraType> {
        isMirrored(): boolean;
        static values(): Internal.CameraType[];
        isFirstPerson(): boolean;
        cycle(): this;
        static valueOf(arg0: string): Internal.CameraType;
        get mirrored(): boolean
        get firstPerson(): boolean
        static readonly THIRD_PERSON_BACK: Internal.CameraType;
        static readonly THIRD_PERSON_FRONT: Internal.CameraType;
        static readonly FIRST_PERSON: Internal.CameraType;
    }
    type CameraType_ = "first_person" | "third_person_back" | "third_person_front" | CameraType;
    class ClientboundSetBorderSizePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.WorldBorder_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getSize(): number;
        isSkippable(): boolean;
        get size(): number
        get skippable(): boolean
    }
    type ClientboundSetBorderSizePacket_ = ClientboundSetBorderSizePacket;
    interface Short2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2LongFunction<T>;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Short2CharFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2LongFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        remove(arg0: number): number;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2LongFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2LongFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2LongFunction<T>;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Short2FloatFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Short2DoubleFunction;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2LongFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Short2ShortFunction;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Short2IntFunction;
        defaultReturnValue(): number;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        containsKey(arg0: number): boolean;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        abstract get(arg0: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        size(): number;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2LongFunction;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2LongFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        (arg0: number): number;
    }
    type Short2LongFunction_ = Short2LongFunction;
    /**
     * @deprecated
    */
    class StructurePlacement$ExclusionZone extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.StructureSet>, arg1: number)
        otherSet(): Internal.Holder<Internal.StructureSet>;
        isPlacementForbidden(arg0: Internal.ChunkGeneratorStructureState_, arg1: number, arg2: number): boolean;
        chunkCount(): number;
        static readonly CODEC: Internal.Codec<Internal.StructurePlacement$ExclusionZone>;
    }
    type StructurePlacement$ExclusionZone_ = StructurePlacement$ExclusionZone;
    class IsEquippableCondition extends Internal.ItemCondition<Internal.FieldConfiguration<Internal.EquipmentSlot>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type IsEquippableCondition_ = IsEquippableCondition;
    abstract class VertexSorters$AbstractVertexSorter implements Internal.VertexSorting {
        sort(arg0: Vector3f_[]): number[];
        static byDistance(arg0: number, arg1: number, arg2: number): Internal.VertexSorting;
        static byDistance(arg0: Internal.VertexSorting$DistanceFunction_): Internal.VertexSorting;
        static byDistance(arg0: Vector3f_): Internal.VertexSorting;
    }
    type VertexSorters$AbstractVertexSorter_ = VertexSorters$AbstractVertexSorter;
    class TextureAtlasSprite {
        constructor(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number)
        wrap(arg0: Internal.VertexConsumer_): Internal.VertexConsumer;
        getX(): number;
        getY(): number;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        contents(): Internal.SpriteContents;
        getUOffset(arg0: number): number;
        uploadFirstFrame(): void;
        uvShrinkRatio(): number;
        atlasLocation(): ResourceLocation;
        getU(arg0: number): number;
        createTicker(): Internal.TextureAtlasSprite$Ticker;
        getVOffset(arg0: number): number;
        getV1(): number;
        getV(arg0: number): number;
        getU1(): number;
        getU0(): number;
        getV0(): number;
        get x(): number
        get y(): number
        get v1(): number
        get u1(): number
        get u0(): number
        get v0(): number
        readonly x: number;
        readonly y: number;
    }
    type TextureAtlasSprite_ = TextureAtlasSprite;
    class VinesFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type VinesFeature_ = VinesFeature;
    class AttributeModifierPower extends Internal.AttributeModifyingPowerFactory<any> {
        constructor(arg0: Internal.Supplier_<Internal.Attribute>)
    }
    type AttributeModifierPower_ = AttributeModifierPower;
    class StackedContents {
        constructor()
        has(arg0: number): boolean;
        put(arg0: number, arg1: number): void;
        static fromStackingIndex(arg0: number): Internal.ItemStack;
        static getStackingIndex(arg0: Internal.ItemStack_): number;
        accountStack(arg0: Internal.ItemStack_): void;
        canCraft(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_): boolean;
        canCraft(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_, arg2: number): boolean;
        accountStack(arg0: Internal.ItemStack_, arg1: number): void;
        clear(): void;
        take(arg0: number, arg1: number): number;
        accountSimpleStack(arg0: Internal.ItemStack_): void;
        getBiggestCraftableStack(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_): number;
        getBiggestCraftableStack(arg0: Internal.Recipe_<any>, arg1: number, arg2: Internal.IntList_): number;
        readonly contents: Internal.Int2IntMap;
    }
    type StackedContents_ = StackedContents;
    interface StructureAccess {
        abstract addReferenceForStructure(arg0: Internal.Structure_, arg1: number): void;
        abstract getAllReferences(): Internal.Map<Internal.Structure, Internal.LongSet>;
        abstract setAllReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>): void;
        abstract getStartForStructure(arg0: Internal.Structure_): Internal.StructureStart;
        abstract setStartForStructure(arg0: Internal.Structure_, arg1: Internal.StructureStart_): void;
        abstract getReferencesForStructure(arg0: Internal.Structure_): Internal.LongSet;
        get allReferences(): Internal.Map<Internal.Structure, Internal.LongSet>
        set allReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>)
    }
    type StructureAccess_ = StructureAccess;
    interface BaseLivingEntityBuilder$IAnimationPredicateJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> {
        /**
         * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
         * @param event The AnimationEvent, provides values that can be used to determine if the animation should continue or not
        */
        abstract test(event: Internal.BaseLivingEntityBuilder$AnimationEventJS_<E>): boolean;
        toGecko(): Internal.AnimationController$AnimationStateHandler<E>;
        (event: Internal.BaseLivingEntityBuilder$AnimationEventJS<E>): boolean;
    }
    type BaseLivingEntityBuilder$IAnimationPredicateJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$IAnimationPredicateJS<E>;
    class ExplosionEvent$Detonate extends Internal.ExplosionEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Explosion_, arg2: Internal.List_<Internal.Entity>)
        getAffectedEntities(): Internal.List<Internal.Entity>;
        getAffectedBlocks(): Internal.List<BlockPos>;
        get affectedEntities(): Internal.List<Internal.Entity>
        get affectedBlocks(): Internal.List<BlockPos>
    }
    type ExplosionEvent$Detonate_ = ExplosionEvent$Detonate;
    class EntityPredicate$Builder {
        constructor()
        effects(arg0: Internal.MobEffectsPredicate_): this;
        located(arg0: Internal.LocationPredicate_): this;
        targetedEntity(arg0: Internal.EntityPredicate_): this;
        of(arg0: Internal.TagKey_<Internal.EntityType<any>>): this;
        steppingOn(arg0: Internal.LocationPredicate_): this;
        distance(arg0: Internal.DistancePredicate_): this;
        static entity(): Internal.EntityPredicate$Builder;
        subPredicate(arg0: Internal.EntitySubPredicate_): this;
        build(): Internal.EntityPredicate;
        vehicle(arg0: Internal.EntityPredicate_): this;
        team(arg0: string): this;
        passenger(arg0: Internal.EntityPredicate_): this;
        of(arg0: Internal.EntityType_<any>): this;
        nbt(arg0: Internal.NbtPredicate_): this;
        flags(arg0: Internal.EntityFlagsPredicate_): this;
        entityType(arg0: Internal.EntityTypePredicate_): this;
        equipment(arg0: Internal.EntityEquipmentPredicate_): this;
    }
    type EntityPredicate$Builder_ = EntityPredicate$Builder;
    class VecDeltaCodec {
        constructor()
        encodeY(arg0: Vec3d_): number;
        decode(arg0: number, arg1: number, arg2: number): Vec3d;
        encodeX(arg0: Vec3d_): number;
        encodeZ(arg0: Vec3d_): number;
        static decode(arg0: number): number;
        static encode(arg0: number): number;
        delta(arg0: Vec3d_): Vec3d;
        setBase(arg0: Vec3d_): void;
        set base(arg0: Vec3d_)
    }
    type VecDeltaCodec_ = VecDeltaCodec;
    class CherryFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_, arg3: number, arg4: number, arg5: number, arg6: number)
        static readonly CODEC: Internal.Codec<Internal.CherryFoliagePlacer>;
    }
    type CherryFoliagePlacer_ = CherryFoliagePlacer;
    class ServerboundSignUpdatePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: BlockPos_, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getPos(): BlockPos;
        write(arg0: Internal.FriendlyByteBuf_): void;
        isFrontText(): boolean;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getLines(): string[];
        isSkippable(): boolean;
        get pos(): BlockPos
        get frontText(): boolean
        get lines(): string[]
        get skippable(): boolean
    }
    type ServerboundSignUpdatePacket_ = ServerboundSignUpdatePacket;
    interface IForgeLevelSummary {
        isLifecycleExperimental(): boolean;
        get lifecycleExperimental(): boolean
    }
    type IForgeLevelSummary_ = IForgeLevelSummary;
    class AmbientParticleSettings {
        constructor(arg0: Internal.ParticleOptions_, arg1: number)
        getOptions(): Internal.ParticleOptions;
        canSpawn(arg0: Internal.RandomSource_): boolean;
        get options(): Internal.ParticleOptions
        static readonly CODEC: Internal.Codec<Internal.AmbientParticleSettings>;
    }
    type AmbientParticleSettings_ = AmbientParticleSettings;
    class MeleeAttackGoal extends Internal.Goal {
        constructor(arg0: Internal.PathfinderMob_, arg1: number, arg2: boolean)
        getAttackReachSqr(arg0: Internal.LivingEntity_): number;
        isTimeToAttack(): boolean;
        bettermobcombat$setTicksUntilNextAttack(arg0: number): void;
        checkAndPerformAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        resetAttackCooldown(): void;
        bettermobcombat$allowCheckAndPerformAttackCall(arg0: Internal.LivingEntity_): boolean;
        bettermobcombat$postBetterCombatAttack(): void;
        getAttackInterval(): number;
        bettermobcombat$useBetterCombatAttackCheck(arg0: Internal.LivingEntity_): boolean;
        getTicksUntilNextAttack(): number;
        get timeToAttack(): boolean
        get attackInterval(): number
        get ticksUntilNextAttack(): number
        readonly mob: Internal.PathfinderMob;
    }
    type MeleeAttackGoal_ = MeleeAttackGoal;
    class ScreenEvent$Render$Pre extends Internal.ScreenEvent$Render {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number)
    }
    type ScreenEvent$Render$Pre_ = ScreenEvent$Render$Pre;
    class ChestMenuInventoryClickEvent {
        constructor(slot: Internal.Slot_, type: Internal.ClickType_, button: number)
        setItem(item: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        getIndex(): number;
        set item(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        get index(): number
        readonly button: number;
        readonly type: Internal.ClickType;
    }
    type ChestMenuInventoryClickEvent_ = ChestMenuInventoryClickEvent;
    class ThreadLocal <T> {
        constructor()
        remove(): void;
        static withInitial<S>(arg0: Internal.Supplier_<S>): Internal.ThreadLocal<S>;
        get(): T;
        set(arg0: T): void;
    }
    type ThreadLocal_<T> = ThreadLocal<T>;
    interface Double2FloatFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleUnaryOperator {
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Double2ShortFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2FloatFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Double2LongFunction;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2FloatFunction<T>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Double2DoubleFunction;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        apply(arg0: number): number;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2FloatFunction;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Double2CharFunction;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2FloatFunction;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2FloatFunction<T>;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        defaultReturnValue(): number;
        applyAsDouble(arg0: number): number;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Double2ObjectFunction<T>;
        containsKey(arg0: number): boolean;
        size(): number;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Double2ByteFunction;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2FloatFunction;
        identity(): Internal.DoubleUnaryOperator;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Double2ReferenceFunction<T>;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: number, arg1: number): number;
        (arg0: number): number;
    }
    type Double2FloatFunction_ = Double2FloatFunction;
    class EventLivingRenderer extends Internal.Event {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.EntityModel_<any>, arg2: Internal.PoseStack_, arg3: number)
        getPoseStack(): Internal.PoseStack;
        getModel(): Internal.EntityModel<any>;
        getEntity(): Internal.LivingEntity;
        getPartialTicks(): number;
        get poseStack(): Internal.PoseStack
        get model(): Internal.EntityModel<any>
        get entity(): Internal.LivingEntity
        get partialTicks(): number
    }
    type EventLivingRenderer_ = EventLivingRenderer;
    class Cursed_bow extends Internal.ProjectileWeaponItem {
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
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        static getUseTime(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getLerpedUseTime(arg0: Internal.ItemStack_, arg1: number): number;
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
        static setUseTime(arg0: Internal.ItemStack_, arg1: number): void;
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
        static getPullingAmount(arg0: Internal.ItemStack_, arg1: number): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        customArrow(arg0: Internal.AbstractArrow_): Internal.AbstractArrow;
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
    type Cursed_bow_ = Cursed_bow;
    class Hotbar extends Internal.ForwardingList<Internal.ItemStack> {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        delegate(): Internal.Collection<any>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        stream(): Internal.Stream<Internal.ItemStack>;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        replaceAll(arg0: Internal.UnaryOperator_<Internal.ItemStack>): void;
        fromTag(arg0: Internal.ListTag_): void;
        parallelStream(): Internal.Stream<Internal.ItemStack>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        createTag(): Internal.ListTag;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        abstract iterator(): Internal.Iterator<Internal.ItemStack>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<Internal.ItemStack>): void;
        spliterator(): Internal.Spliterator<Internal.ItemStack>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
    }
    type Hotbar_ = Hotbar;
    interface SeekableByteChannel extends Internal.ByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract position(): number;
        abstract truncate(arg0: number): this;
        abstract close(): void;
        abstract position(arg0: number): this;
        abstract size(): number;
        get open(): boolean
    }
    type SeekableByteChannel_ = SeekableByteChannel;
    class CustomKubeJSEntityRenderer <T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> extends Internal.GeoEntityRenderer<T> {
        constructor(renderManager: Internal.EntityRendererProvider$Context_, builder: Internal.CustomEntityJSBuilder_)
        entityName(): string;
        getScaleHeight(): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getScaleWidth(): number;
        getTextureLocation(entity: T): ResourceLocation;
        render(a: T, entityYaw: number, partialTick: number, poseStack: Internal.PoseStack_, bufferSource: Internal.MultiBufferSource_, packedLight: number): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        getRenderType(animatable: T, texture: ResourceLocation_, bufferSource: Internal.MultiBufferSource_, partialTick: number): Internal.RenderType;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        scaleModelForRender(widthScale: number, heightScale: number, poseStack: Internal.PoseStack_, a: T, model: Internal.BakedGeoModel_, isReRender: boolean, partialTick: number, packedLight: number, packedOverlay: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get scaleHeight(): number
        get scaleWidth(): number
    }
    type CustomKubeJSEntityRenderer_<T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> = CustomKubeJSEntityRenderer<T>;
    interface ShortSpliterator extends Internal.Spliterator$OfPrimitive<number, Internal.ShortConsumer, Internal.ShortSpliterator> {
        forEachRemaining(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract trySplit(): this;
        getComparator(): Internal.Comparator<any>;
        getExactSizeIfKnown(): number;
        abstract tryAdvance(arg0: Internal.ShortConsumer_): boolean;
        hasCharacteristics(arg0: number): boolean;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        skip(arg0: number): number;
        abstract estimateSize(): number;
        abstract characteristics(): number;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type ShortSpliterator_ = ShortSpliterator;
    class VisibilitySet {
        constructor()
        setAll(arg0: boolean): void;
        visibilityBetween(arg0: Internal.Direction_, arg1: Internal.Direction_): boolean;
        add(arg0: Internal.Set_<Internal.Direction>): void;
        set(arg0: Internal.Direction_, arg1: Internal.Direction_, arg2: boolean): void;
        set all(arg0: boolean)
    }
    type VisibilitySet_ = VisibilitySet;
    class PiglinJSBuilder extends Internal.PathfinderMobBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * Sets a function to determine if the entity is converting.
         * 
         * @param isConverting A Function accepting an entity parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.isConverting(entity => {
         *     return entity.age > 500;
         * });
         * ```
        */
        isConverting(isConverting: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a consumer responsible for spawning an entity after the mob has converted.
         * 
         * @param finishConversion A Function accepting an entity parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.finishConversion(entity => {
         *     //Convert to a ghast instead of a zombified piglin when in the overworld
         *     let EntityType = Java.loadClass("net.minecraft.world.entity.EntityType");
         *     entity.convertTo(EntityType.GHAST, true);
         * });
         * ```
        */
        finishConversion(finishConversion: Internal.Consumer_<Internal.ContextUtils$EntityServerLevelContext>): this;
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
    type PiglinJSBuilder_ = PiglinJSBuilder;
    class MultipleConfiguration <V> extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(children: Internal.Map_<string, Internal.Holder<V>>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        children(): Internal.Map<string, Internal.Holder<V>>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        static mapCodec<V>(arg0: Internal.Codec_<V>, arg1: Internal.Codec_<Internal.Holder<V>>, arg2: Internal.Predicate_<string>, arg3: Internal.UnaryOperator_<string>, arg4: Internal.Function3_<string, V, Internal.JsonElement, V>): Internal.MapCodec<Internal.MultipleConfiguration<V>>;
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
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
    }
    type MultipleConfiguration_<V> = MultipleConfiguration<V>;
    class CountingMap {
        constructor()
        add(key: any, value: number): number;
        set(key: any, value: number): number;
        getValues(): Internal.Collection<number>;
        forEach(forEach: Internal.Consumer_<Internal.Object2LongEntry>): void;
        get(key: any): number;
        getSize(): number;
        clear(): void;
        getTotalCount(): number;
        getEntries(): Internal.List<Internal.Object2LongEntry>;
        getKeys(): Internal.Set<any>;
        get values(): Internal.Collection<number>
        get size(): number
        get totalCount(): number
        get entries(): Internal.List<Internal.Object2LongEntry>
        get keys(): Internal.Set<any>
    }
    type CountingMap_ = CountingMap;
    abstract class EntityRenderersEvent extends Internal.Event implements Internal.IModBusEvent {
    }
    type EntityRenderersEvent_ = EntityRenderersEvent;
    class KeyDispatchDataCodec <A> extends Internal.Record {
        constructor(arg0: Internal.Codec_<A>)
        codec(): Internal.Codec<A>;
        static of<A>(arg0: Internal.MapCodec_<A>): Internal.KeyDispatchDataCodec<A>;
        static of<A>(arg0: Internal.Codec_<A>): Internal.KeyDispatchDataCodec<A>;
    }
    type KeyDispatchDataCodec_<A> = KeyDispatchDataCodec<A>;
    class Wither_Assault_SHoulder_Weapon extends Internal.Item {
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
        static getPowerForTime(arg0: number): number;
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
    type Wither_Assault_SHoulder_Weapon_ = Wither_Assault_SHoulder_Weapon;
    interface BiomeSpecialEffects$GrassColorModifier$ColorModifier {
        abstract modifyGrassColor(arg0: number, arg1: number, arg2: number): number;
        (arg0: number, arg1: number, arg2: number): number;
    }
    type BiomeSpecialEffects$GrassColorModifier$ColorModifier_ = BiomeSpecialEffects$GrassColorModifier$ColorModifier;
    class Object2FloatOpenHashMap <K> extends Internal.AbstractObject2FloatMap<K> implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor(arg0: K[], arg1: number[], arg2: number)
        constructor(arg0: Internal.Object2FloatMap_<K>)
        constructor()
        constructor(arg0: Internal.Map_<K, number>)
        constructor(arg0: K[], arg1: number[])
        constructor(arg0: Internal.Map_<K, number>, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.Object2FloatMap_<K>, arg1: number)
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2FloatFunction;
        trim(arg0: number): boolean;
        mergeFloat(arg0: K, arg1: number, arg2: Internal.FloatBinaryOperator_): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        apply(arg0: K): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        mergeFloat(arg0: K, arg1: number, arg2: Internal.DoubleBinaryOperator_): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2FloatFunction;
        trim(): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2FloatFunction;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2FloatFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        addTo(arg0: K, arg1: number): number;
        static identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        clone(): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        computeFloatIfAbsent(arg0: K, arg1: Internal.ToDoubleFunction_<K>): number;
        object2FloatEntrySet(): Internal.ObjectSet<any>;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Object2ShortFunction<K>;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2FloatFunction<T>;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2FloatFunction;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        computeFloatIfAbsentPartial(arg0: K, arg1: Internal.Object2FloatFunction_<K>): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2FloatFunction;
        keySet(): Internal.ObjectSet<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        mergeFloat(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Object2LongFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Object2IntFunction<K>;
        andThenFloat(arg0: Internal.Float2FloatFunction_): Internal.Object2FloatFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
    }
    type Object2FloatOpenHashMap_<K> = Object2FloatOpenHashMap<K>;
    interface K2 {
    }
    type K2_ = K2;
    class ScrollForgeBlock extends Internal.BaseEntityBlock {
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
        static readonly SHAPE_LEG_1: Internal.CubeVoxelShape;
        static readonly SHAPE_LEG_2: Internal.CubeVoxelShape;
        static readonly SHAPE_TABLETOP: Internal.CubeVoxelShape;
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly FACING: Internal.DirectionProperty;
    }
    type ScrollForgeBlock_ = ScrollForgeBlock;
    class CarvedPumpkinBlock extends Internal.HorizontalDirectionalBlock {
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
        canSpawnGolem(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        static clearPatternBlocks(arg0: Internal.Level_, arg1: Internal.BlockPattern$BlockPatternMatch_): void;
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
        static updatePatternBlocks(arg0: Internal.Level_, arg1: Internal.BlockPattern$BlockPatternMatch_): void;
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
    type CarvedPumpkinBlock_ = CarvedPumpkinBlock;
    interface K1 {
    }
    type K1_ = K1;
    class ShulkerBoxMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type ShulkerBoxMenu_ = ShulkerBoxMenu;
    class QuarrySmasherItem extends Internal.Item {
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
    type QuarrySmasherItem_ = QuarrySmasherItem;
    class MobCategory extends Internal.Enum<Internal.MobCategory> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        getDespawnDistance(): number;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        getSerializedName(): string;
        isFriendly(): boolean;
        getMaxInstancesPerChunk(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.MobCategory[];
        static byName(arg0: string): Internal.MobCategory;
        getName(): string;
        isPersistent(): boolean;
        static valueOf(arg0: string): Internal.MobCategory;
        static create(arg0: string, arg1: string, arg2: number, arg3: boolean, arg4: boolean, arg5: number): Internal.MobCategory;
        getNoDespawnDistance(): number;
        get despawnDistance(): number
        get serializedName(): string
        get friendly(): boolean
        get maxInstancesPerChunk(): number
        get name(): string
        get persistent(): boolean
        get noDespawnDistance(): number
        static readonly AMBIENT: Internal.MobCategory;
        static readonly CREATURE: Internal.MobCategory;
        static readonly MISC: Internal.MobCategory;
        static readonly MONSTER: Internal.MobCategory;
        static readonly WATER_AMBIENT: Internal.MobCategory;
        static readonly CODEC: Internal.Codec<Internal.MobCategory>;
        static readonly AXOLOTLS: Internal.MobCategory;
        static readonly WATER_CREATURE: Internal.MobCategory;
        static readonly UNDERGROUND_WATER_CREATURE: Internal.MobCategory;
    }
    type MobCategory_ = "monster" | "underground_water_creature" | "misc" | "creature" | string | "water_ambient" | "deep_sea_creature" | "cave_creature" | "axolotls" | "ambient" | MobCategory | "water_creature";
    interface IClientMobEffectExtensions {
        isVisibleInGui(arg0: Internal.MobEffectInstance_): boolean;
        renderInventoryIcon(arg0: Internal.MobEffectInstance_, arg1: Internal.EffectRenderingInventoryScreen_<any>, arg2: Internal.GuiGraphics_, arg3: number, arg4: number, arg5: number): boolean;
        of(arg0: Internal.MobEffect_): this;
        renderGuiIcon(arg0: Internal.MobEffectInstance_, arg1: Internal.Gui_, arg2: Internal.GuiGraphics_, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        of(arg0: Internal.MobEffectInstance_): this;
        renderInventoryText(arg0: Internal.MobEffectInstance_, arg1: Internal.EffectRenderingInventoryScreen_<any>, arg2: Internal.GuiGraphics_, arg3: number, arg4: number, arg5: number): boolean;
        isVisibleInInventory(arg0: Internal.MobEffectInstance_): boolean;
        readonly DEFAULT: Internal.IClientMobEffectExtensions;
    }
    type IClientMobEffectExtensions_ = IClientMobEffectExtensions;
    class DirectMethodHandleDesc$Kind extends Internal.Enum<Internal.DirectMethodHandleDesc$Kind> {
        static values(): Internal.DirectMethodHandleDesc$Kind[];
        static valueOf(arg0: string): Internal.DirectMethodHandleDesc$Kind;
        static valueOf(arg0: number, arg1: boolean): Internal.DirectMethodHandleDesc$Kind;
        static valueOf(arg0: number): Internal.DirectMethodHandleDesc$Kind;
        static readonly INTERFACE_SPECIAL: Internal.DirectMethodHandleDesc$Kind;
        readonly isInterface: boolean;
        static readonly STATIC_SETTER: Internal.DirectMethodHandleDesc$Kind;
        static readonly CONSTRUCTOR: Internal.DirectMethodHandleDesc$Kind;
        static readonly SPECIAL: Internal.DirectMethodHandleDesc$Kind;
        static readonly STATIC: Internal.DirectMethodHandleDesc$Kind;
        static readonly SETTER: Internal.DirectMethodHandleDesc$Kind;
        static readonly INTERFACE_VIRTUAL: Internal.DirectMethodHandleDesc$Kind;
        static readonly GETTER: Internal.DirectMethodHandleDesc$Kind;
        static readonly VIRTUAL: Internal.DirectMethodHandleDesc$Kind;
        readonly refKind: number;
        static readonly INTERFACE_STATIC: Internal.DirectMethodHandleDesc$Kind;
        static readonly STATIC_GETTER: Internal.DirectMethodHandleDesc$Kind;
    }
    type DirectMethodHandleDesc$Kind_ = "static" | "constructor" | "interface_special" | "static_getter" | "setter" | "virtual" | DirectMethodHandleDesc$Kind | "getter" | "interface_static" | "special" | "static_setter" | "interface_virtual";
    class DataGenerator implements Internal.DataGeneratorExtension {
        constructor(arg0: Internal.Path_, arg1: any_, arg2: boolean)
        getProvidersView(): Internal.Map<string, Internal.DataProvider>;
        getBuiltinDatapack(arg0: boolean, arg1: string): Internal.DataGenerator$PackGenerator;
        getPackOutput(): Internal.PackOutput;
        getVanillaPack(arg0: boolean): Internal.DataGenerator$PackGenerator;
        addProvider<T extends Internal.DataProvider>(arg0: boolean, arg1: Internal.DataProvider$Factory_<T>): T;
        run(): void;
        createPack(name: string, output: Internal.PackOutput_): Internal.DataGenerator$PackGenerator;
        addProvider<T extends Internal.DataProvider>(arg0: boolean, arg1: T): T;
        getPackOutput(arg0: string): Internal.PackOutput;
        createBuiltinResourcePack(shouldRun: boolean, packName: ResourceLocation_, modInfo: Internal.IModInfo_, strictValidation: boolean): com.mojang.datafixers.util.Pair<any, any>;
        get providersView(): Internal.Map<string, Internal.DataProvider>
        get packOutput(): Internal.PackOutput
        vanillaPackOutput: Internal.PackOutput;
        readonly allProviderIds: Internal.Set<string>;
        readonly providersToRun: Internal.Map<string, Internal.DataProvider>;
    }
    type DataGenerator_ = DataGenerator;
    class AncientTreeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type AncientTreeFeature_ = AncientTreeFeature;
    class ShieldBlockEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: DamageSource_, arg2: number)
        getDamageSource(): DamageSource;
        shieldTakesDamage(): boolean;
        setBlockedDamage(arg0: number): void;
        getEntity(): Internal.Entity;
        setShieldTakesDamage(arg0: boolean): void;
        getBlockedDamage(): number;
        getOriginalBlockedDamage(): number;
        get damageSource(): DamageSource
        set blockedDamage(arg0: number)
        get entity(): Internal.Entity
        set shieldTakesDamage(arg0: boolean)
        get blockedDamage(): number
        get originalBlockedDamage(): number
    }
    type ShieldBlockEvent_ = ShieldBlockEvent;
    class BlackVentFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type BlackVentFeature_ = BlackVentFeature;
    class ModuleDescriptor$Provides implements Internal.Comparable<Internal.ModuleDescriptor$Provides> {
        service(): string;
        compareTo(arg0: Internal.ModuleDescriptor$Provides_): number;
        providers(): Internal.List<string>;
        compareTo(arg0: any): number;
    }
    type ModuleDescriptor$Provides_ = ModuleDescriptor$Provides;
    interface Byte2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Byte2ByteFunction;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        defaultReturnValue(): number;
        put(arg0: number, arg1: number): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ShortFunction<T>;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ShortFunction;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Byte2FloatFunction;
        getOrDefault(arg0: number, arg1: number): number;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ShortFunction;
        remove(arg0: number): number;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Byte2IntFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Byte2CharFunction;
        size(): number;
        defaultReturnValue(arg0: number): void;
        abstract get(arg0: number): number;
        apply(arg0: number): number;
        clear(): void;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ShortFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ShortFunction;
        (arg0: number): number;
    }
    type Byte2ShortFunction_ = Byte2ShortFunction;
    class TrackedDummyWorld extends Internal.DummyWorld {
        constructor()
        constructor(world: Internal.Level_)
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Player;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getSize(): Vector3f;
        getMaxSection(): number;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        getSectionYFromSectionIndex(arg0: number): number;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playSound(arg0: Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getMaxPos(): Vector3f;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        blockUpdated(arg0: BlockPos_, arg1: Internal.Block_): void;
        runCommandSilent(command: string): number;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        setRenderFilter(renderFilter: Internal.Predicate_<BlockPos>): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Player;
        getDisplayName(): Internal.Component;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        tickWorld(): void;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        static isUnsafeItemNBTKey(name: string): boolean;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        clear(): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        addBlock(pos: BlockPos_, blockInfo: Internal.BlockInfo_): void;
        addBlocks(renderedBlocks: Internal.Map_<BlockPos, Internal.BlockInfo>): void;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        static withUnsafeNBTDiscarded(stack: Internal.ItemStack_): Internal.ItemStack;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        getPartEntities(): Internal.Collection<Internal.PartEntity<any>>;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getDimension(): ResourceLocation;
        getDifficulty(): Internal.Difficulty;
        getName(): Internal.Component;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        getRenderedBlocks(): Internal.Map<BlockPos, Internal.BlockInfo>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getPlayerByUUID(arg0: Internal.UUID_): Player;
        setInnerBlockEntity(pBlockEntity: Internal.BlockEntity_): void;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getSectionsCount(): number;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        self(): Internal.Level;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        hasChunk(arg0: number, arg1: number): boolean;
        getMinPos(): Vector3f;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        removeBlock(pos: BlockPos_): Internal.BlockInfo;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        getAllEntities(): Internal.List<Internal.Entity>;
        tell(message: Internal.Component_): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        isOverworld(): boolean;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        runCommand(command: string): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get size(): Vector3f
        get maxSection(): number
        get maxPos(): Vector3f
        set renderFilter(renderFilter: Internal.Predicate_<BlockPos>)
        get minBuildHeight(): number
        get displayName(): Internal.Component
        get maxBuildHeight(): number
        get height(): number
        get minSection(): number
        get partEntities(): Internal.Collection<Internal.PartEntity<any>>
        get dimension(): ResourceLocation
        get difficulty(): Internal.Difficulty
        get name(): Internal.Component
        get moonPhase(): number
        get renderedBlocks(): Internal.Map<BlockPos, Internal.BlockInfo>
        set innerBlockEntity(pBlockEntity: Internal.BlockEntity_)
        get sectionsCount(): number
        get minPos(): Vector3f
        get moonBrightness(): number
        get side(): Internal.ScriptType
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        get allEntities(): Internal.List<Internal.Entity>
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
        readonly minPos: Vector3f;
        readonly entities: Internal.Map<number, Internal.Entity>;
        readonly proxyWorld: Internal.WeakReference<Internal.Level>;
        readonly blockEntities: Internal.Map<BlockPos, Internal.BlockEntity>;
        readonly maxPos: Vector3f;
        readonly renderedBlocks: Internal.Map<BlockPos, Internal.BlockInfo>;
    }
    type TrackedDummyWorld_ = TrackedDummyWorld;
    class BlockPredicateFilter extends Internal.PlacementFilter {
        static forPredicate(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): Internal.BlockPredicateFilter;
        static readonly CODEC: Internal.Codec<Internal.BlockPredicateFilter>;
    }
    type BlockPredicateFilter_ = BlockPredicateFilter;
    abstract class AbstractSpell implements Internal.ISpellModify {
        constructor()
        irons_spells_js$setBuilder(resourceLocation: ResourceLocation_): void;
        onClientPreCast(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_, arg4: Internal.MagicData_): void;
        getManaCost(arg0: number): number;
        canBeCastedBy(arg0: number, arg1: Internal.CastSource_, arg2: Internal.MagicData_, arg3: Player_): Internal.CastResult;
        getComponentId(): string;
        abstract getSpellResource(): ResourceLocation;
        getEmptyCastData(): Internal.ICastDataSerializable;
        getMinRarity(): number;
        playSound(arg0: Internal.Optional_<Internal.SoundEvent>, arg1: Internal.Entity_): void;
        shouldAIStopCasting(arg0: number, arg1: Internal.Mob_, arg2: Internal.LivingEntity_): boolean;
        canBeCraftedBy(arg0: Player_): boolean;
        getMinLevelForRarity(arg0: SpellRarity_): number;
        onClientCast(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ICastData_): void;
        getTargetingColor(): Vector3f;
        onCast(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.CastSource_, arg4: Internal.MagicData_): void;
        getDamageSource(arg0: Internal.Entity_): Internal.SpellDamageSource;
        allowLooting(): boolean;
        canBeInterrupted(arg0: Player_): boolean;
        needsLearning(): boolean;
        stopSoundOnCancel(): boolean;
        getCastStartAnimation(): ISSAnimationHolder;
        getCastFinishAnimation(): ISSAnimationHolder;
        castSpell(arg0: Internal.Level_, arg1: number, arg2: Internal.ServerPlayer_, arg3: Internal.CastSource_, arg4: boolean): void;
        getDisplayName(arg0: Player_): Internal.MutableComponent;
        getCastFinishSound(): Internal.Optional<Internal.SoundEvent>;
        getDamageSource(arg0: Internal.Entity_, arg1: Internal.Entity_): Internal.SpellDamageSource;
        onServerCastTick(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.MagicData_): void;
        getLevelFor(arg0: number, arg1: Internal.LivingEntity_): number;
        getMaxRarity(): number;
        onRecastFinished(arg0: Internal.ServerPlayer_, arg1: Internal.RecastInstance_, arg2: Internal.RecastResult_, arg3: Internal.ICastDataSerializable_): void;
        getSpellId(): string;
        isEnabled(): boolean;
        onServerCastComplete(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.MagicData_, arg4: boolean): void;
        getCastTime(arg0: number): number;
        checkPreCastConditions(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.MagicData_): boolean;
        onServerPreCast(arg0: Internal.Level_, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.MagicData_): void;
        getSchoolType(): Internal.SchoolType;
        getEntityPowerMultiplier(arg0: Internal.LivingEntity_): number;
        abstract getDefaultConfig(): Internal.DefaultConfig;
        getMaxLevel(): number;
        getSpellPower(arg0: number, arg1: Internal.Entity_): number;
        getSpellIconResource(): ResourceLocation;
        getMinLevel(): number;
        allowCrafting(): boolean;
        getSpellName(): string;
        obfuscateStats(arg0: Player_): boolean;
        getRarity(arg0: number): SpellRarity;
        getEffectiveCastTime(arg0: number, arg1: Internal.LivingEntity_): number;
        getUniqueInfo(arg0: number, arg1: Internal.LivingEntity_): Internal.List<Internal.MutableComponent>;
        attemptInitiateCast(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Level_, arg3: Player_, arg4: Internal.CastSource_, arg5: boolean, arg6: string): boolean;
        getCastStartSound(): Internal.Optional<Internal.SoundEvent>;
        getSpellCooldown(): number;
        isLearned(arg0: Player_): boolean;
        getDeathMessageId(): string;
        getRecastCount(arg0: number, arg1: Internal.LivingEntity_): number;
        abstract getCastType(): CastType;
        irons_spells_js$getBuilder(): Internal.SpellModificationBuilder;
        get componentId(): string
        get spellResource(): ResourceLocation
        get emptyCastData(): Internal.ICastDataSerializable
        get minRarity(): number
        get targetingColor(): Vector3f
        get castStartAnimation(): ISSAnimationHolder
        get castFinishAnimation(): ISSAnimationHolder
        get castFinishSound(): Internal.Optional<Internal.SoundEvent>
        get maxRarity(): number
        get spellId(): string
        get enabled(): boolean
        get schoolType(): Internal.SchoolType
        get defaultConfig(): Internal.DefaultConfig
        get maxLevel(): number
        get spellIconResource(): ResourceLocation
        get minLevel(): number
        get spellName(): string
        get castStartSound(): Internal.Optional<Internal.SoundEvent>
        get spellCooldown(): number
        get deathMessageId(): string
        get castType(): CastType
    }
    type AbstractSpell_ = AbstractSpell | Special.Spells;
    class BeeNestDestroyedBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The item used to break the block.
        */
        setItem(arg0: Internal.Ingredient_): void;
        /**
         * The number of bees that were inside the bee nest/beehive before it was broken.
        */
        setBounds(arg0: Bounds_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The item used to break the block.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * Checks the block that was destroyed.
        */
        setBlock(arg0: Internal.BeeNestDestroyedBuilder$BeeNest_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item used to break the block.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The item used to break the block.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The number of bees that were inside the bee nest/beehive before it was broken.
        */
        set bounds(arg0: Bounds_)
        /**
         * The item used to break the block.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * Checks the block that was destroyed.
        */
        set block(arg0: Internal.BeeNestDestroyedBuilder$BeeNest_)
        /**
         * The item used to break the block.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type BeeNestDestroyedBuilder_ = BeeNestDestroyedBuilder;
    interface DataSenderKJS {
        sendData(channel: string): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
    }
    type DataSenderKJS_ = DataSenderKJS;
    class ClientboundSetCarriedItemPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getSlot(): number;
        isSkippable(): boolean;
        get slot(): number
        get skippable(): boolean
    }
    type ClientboundSetCarriedItemPacket_ = ClientboundSetCarriedItemPacket;
    class EntityTickList {
        constructor()
        forEach(arg0: Internal.Consumer_<Internal.Entity>): void;
        add(arg0: Internal.Entity_): void;
        contains(arg0: Internal.Entity_): boolean;
        remove(arg0: Internal.Entity_): void;
    }
    type EntityTickList_ = EntityTickList;
    class CampfireBlockEntity extends Internal.BlockEntity implements Internal.Clearable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        placeFood(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        static cooldownTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        getUpdatePacket(): Internal.Packet<any>;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        static cookTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        dowse(): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        static particleTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.CampfireBlockEntity_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        getCookableRecipe(arg0: Internal.ItemStack_): Internal.Optional<Internal.CampfireCookingRecipe>;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        getRenderBoundingBox(): Internal.AABB;
        get items(): Internal.NonNullList<Internal.ItemStack>
        get updatePacket(): Internal.Packet<any>
        get modelData(): Internal.ModelData
        get renderBoundingBox(): Internal.AABB
    }
    type CampfireBlockEntity_ = CampfireBlockEntity;
    class OceanRuinStructure$Type extends Internal.Enum<Internal.OceanRuinStructure$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.OceanRuinStructure$Type[];
        getSerializedName(): string;
        getName(): string;
        static valueOf(arg0: string): Internal.OceanRuinStructure$Type;
        get serializedName(): string
        get name(): string
        static readonly COLD: Internal.OceanRuinStructure$Type;
        static readonly CODEC: Internal.Codec<Internal.OceanRuinStructure$Type>;
        static readonly WARM: Internal.OceanRuinStructure$Type;
    }
    type OceanRuinStructure$Type_ = "warm" | "cold" | OceanRuinStructure$Type;
    interface TagVisitor {
        abstract visitFloat(arg0: Internal.FloatTag_): void;
        abstract visitByte(arg0: Internal.ByteTag_): void;
        abstract visitList(arg0: Internal.ListTag_): void;
        abstract visitLongArray(arg0: Internal.LongArrayTag_): void;
        abstract visitShort(arg0: Internal.ShortTag_): void;
        abstract visitEnd(arg0: Internal.EndTag_): void;
        abstract visitIntArray(arg0: Internal.IntArrayTag_): void;
        abstract visitInt(arg0: Internal.IntTag_): void;
        abstract visitByteArray(arg0: Internal.ByteArrayTag_): void;
        abstract visitString(arg0: Internal.StringTag_): void;
        abstract visitCompound(arg0: Internal.CompoundTag_): void;
        abstract visitLong(arg0: Internal.LongTag_): void;
        abstract visitDouble(arg0: Internal.DoubleTag_): void;
    }
    type TagVisitor_ = TagVisitor;
    interface DoublePredicate {
        or(arg0: Internal.DoublePredicate_): this;
        abstract test(arg0: number): boolean;
        and(arg0: Internal.DoublePredicate_): this;
        negate(): this;
        (arg0: number): boolean;
    }
    type DoublePredicate_ = DoublePredicate;
    class PlayerEvent$PlayerRespawnEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: boolean)
        getEntity(): Internal.LivingEntity;
        isEndConquered(): boolean;
        get entity(): Internal.LivingEntity
        get endConquered(): boolean
    }
    type PlayerEvent$PlayerRespawnEvent_ = PlayerEvent$PlayerRespawnEvent;
    interface CommandBuildContext$Configurable extends Internal.CommandBuildContext {
        abstract holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        simple(arg0: Internal.HolderLookup$Provider_, arg1: Internal.FeatureFlagSet_): Internal.CommandBuildContext;
        configurable(arg0: Internal.RegistryAccess_, arg1: Internal.FeatureFlagSet_): this;
        abstract missingTagAccessPolicy(arg0: Internal.CommandBuildContext$MissingTagAccessPolicy_): void;
    }
    type CommandBuildContext$Configurable_ = CommandBuildContext$Configurable;
    class BetterAdvEventJS extends Internal.EventJS {
        constructor()
        modify(arg0: ResourceLocation_): any;
    }
    type BetterAdvEventJS_ = BetterAdvEventJS;
    abstract class Rectangle2D extends Internal.RectangularShape {
        abstract outcode(arg0: number, arg1: number): number;
        static intersect(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        add(arg0: Internal.Point2D_): void;
        abstract createUnion(arg0: Internal.Rectangle2D_): this;
        outcode(arg0: Internal.Point2D_): number;
        intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        add(arg0: number, arg1: number): void;
        abstract setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        intersectsLine(arg0: Internal.Line2D_): boolean;
        add(arg0: Internal.Rectangle2D_): void;
        setRect(arg0: Internal.Rectangle2D_): void;
        static union(arg0: Internal.Rectangle2D_, arg1: Internal.Rectangle2D_, arg2: Internal.Rectangle2D_): void;
        abstract createIntersection(arg0: Internal.Rectangle2D_): this;
        set rect(arg0: Internal.Rectangle2D_)
        static readonly OUT_TOP: 2;
        static readonly OUT_LEFT: 1;
        static readonly OUT_RIGHT: 4;
        static readonly OUT_BOTTOM: 8;
    }
    type Rectangle2D_ = Rectangle2D;
    class MapBanner {
        constructor(arg0: BlockPos_, arg1: Internal.DyeColor_, arg2: Internal.Component_)
        getPos(): BlockPos;
        save(): Internal.CompoundTag;
        getColor(): Internal.DyeColor;
        getName(): Internal.Component;
        static load(arg0: Internal.CompoundTag_): Internal.MapBanner;
        static fromWorld(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MapBanner;
        getId(): string;
        getDecoration(): Internal.MapDecoration$Type;
        get pos(): BlockPos
        get color(): Internal.DyeColor
        get name(): Internal.Component
        get id(): string
        get decoration(): Internal.MapDecoration$Type
    }
    type MapBanner_ = MapBanner;
    class ItemCustomRender extends Internal.Item {
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
    type ItemCustomRender_ = ItemCustomRender;
    class ServerAdvancementManager extends Internal.SimpleJsonResourceReloadListener implements Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.LootDataManager_)
        constructor(arg0: Internal.LootDataManager_, arg1: Internal.ICondition$IContext_)
        getAllAdvancements(): Internal.Collection<Internal.Advancement>;
        getAdvancement(arg0: ResourceLocation_): Internal.Advancement;
        apply(arg0: Internal.Map_<ResourceLocation, Internal.JsonElement>, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_): void;
        getName(): string;
        getFabricDependencies(): Internal.Collection<any>;
        getFabricId(): ResourceLocation;
        get allAdvancements(): Internal.Collection<Internal.Advancement>
        get name(): string
        get fabricDependencies(): Internal.Collection<any>
        get fabricId(): ResourceLocation
    }
    type ServerAdvancementManager_ = ServerAdvancementManager;
    class WitherWallSkullBlock extends Internal.WallSkullBlock {
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
    }
    type WitherWallSkullBlock_ = WitherWallSkullBlock;
    class HoverEvent$Action <T> {
        constructor(arg0: string, arg1: boolean, arg2: Internal.Function_<Internal.JsonElement, T>, arg3: Internal.Function_<T, Internal.JsonElement>, arg4: Internal.Function_<Internal.Component, T>)
        static getByName(arg0: string): Internal.HoverEvent$Action<any>;
        cast(arg0: any): T;
        isAllowedFromServer(): boolean;
        deserializeFromLegacy(arg0: Internal.Component_): Internal.HoverEvent;
        getName(): string;
        serializeArg(arg0: any): Internal.JsonElement;
        deserialize(arg0: Internal.JsonElement_): Internal.HoverEvent;
        get allowedFromServer(): boolean
        get name(): string
        static readonly SHOW_ENTITY: Internal.HoverEvent$Action<Internal.HoverEvent$EntityTooltipInfo>;
        static readonly SHOW_TEXT: Internal.HoverEvent$Action<Internal.Component>;
        static readonly SHOW_ITEM: Internal.HoverEvent$Action<Internal.HoverEvent$ItemStackInfo>;
    }
    type HoverEvent$Action_<T> = HoverEvent$Action<T>;
    class HangingSignItem extends Internal.SignItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Block_, arg2: Internal.Item$Properties_)
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
    type HangingSignItem_ = HangingSignItem;
    class InterModProcessEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type InterModProcessEvent_ = InterModProcessEvent;
}
declare namespace mezz.jei.api.recipe {
    class RecipeType <T> {
        constructor(arg0: ResourceLocation_, arg1: T)
        static create<T>(arg0: string, arg1: string, arg2: T): mezz.jei.api.recipe.RecipeType<T>;
        getUid(): ResourceLocation;
        getRecipeClass(): T;
        get uid(): ResourceLocation
        get recipeClass(): T
    }
    type RecipeType_<T> = RecipeType<T>;
}
declare namespace dev.hexnowloading.dungeonnowloading.mixin.structures {
    interface StructureProcessorAccessor {
        abstract callGetType(): Internal.StructureProcessorType<any>;
        (): Internal.StructureProcessorType_<any>;
    }
    type StructureProcessorAccessor_ = StructureProcessorAccessor;
}
