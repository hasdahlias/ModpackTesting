/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface HumanoidModelAccess {
        abstract mobplayeranimator$getInitialBodyPose(): Internal.HumanoidBodyPose;
        abstract mobplayeranimator$getHead(): Internal.ModelPart;
        abstract mobplayeranimator$getLeftArm(): Internal.ModelPart;
        abstract mobplayeranimator$getRightArm(): Internal.ModelPart;
        abstract mobplayeranimator$getLeftLeg(): Internal.ModelPart;
        abstract mobplayeranimator$getRightLeg(): Internal.ModelPart;
        abstract mobplayeranimator$getBody(): Internal.ModelPart;
        abstract mobplayeranimator$getHat(): Internal.ModelPart;
    }
    type HumanoidModelAccess_ = HumanoidModelAccess;
    interface Long2IntFunction extends Internal.LongToIntFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2IntFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsInt(arg0: number): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Long2ShortFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Long2ByteFunction;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2IntFunction;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2IntFunction;
        remove(arg0: number): number;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2IntFunction;
        apply(arg0: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Long2CharFunction;
        clear(): void;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Long2DoubleFunction;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): number;
    }
    type Long2IntFunction_ = Long2IntFunction;
    class MendingAuraWallBlock extends Internal.MendingAuraBlock {
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
        static readonly SOUTH_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly NORTH_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly EAST_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly UP: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly WEST_WALL: Internal.EnumProperty<Internal.WallSide>;
    }
    type MendingAuraWallBlock_ = MendingAuraWallBlock;
    abstract class StemGrownBlock extends Internal.Block implements Internal.IPlantable {
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
        abstract getAttachedStem(): Internal.AttachedStemBlock;
        abstract getStem(): Internal.StemBlock;
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
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get attachedStem(): Internal.AttachedStemBlock
        get stem(): Internal.StemBlock
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type StemGrownBlock_ = StemGrownBlock;
    class TotemOfPossessionItem extends Internal.Item implements Internal.UpdatesStackTags, Internal.Vanishable {
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
        static getBoundEntityUUID(arg0: Internal.ItemStack_): Internal.UUID;
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
        static isBound(arg0: Internal.ItemStack_): boolean;
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
    type TotemOfPossessionItem_ = TotemOfPossessionItem;
    class ContextUtils$EntityDistanceToPlayerContext {
        constructor(distanceToClosestPlayer: number, entity: Internal.LivingEntity_)
        /**
         * The distance to the closest player
        */
        readonly distanceToClosestPlayer: number;
        /**
         * The living entity
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$EntityDistanceToPlayerContext_ = ContextUtils$EntityDistanceToPlayerContext;
    class MobSpawnSettings$SpawnerData extends Internal.WeightedEntry$IntrusiveBase {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Weight_, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: number, arg2: number, arg3: number)
        static wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        readonly minCount: number;
        static readonly CODEC: Internal.Codec<Internal.MobSpawnSettings$SpawnerData>;
        readonly type: Internal.EntityType<any>;
        readonly maxCount: number;
    }
    type MobSpawnSettings$SpawnerData_ = MobSpawnSettings$SpawnerData;
    class FarmBlock extends Internal.Block {
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
        static turnToDirt(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): void;
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
        static readonly MAX_MOISTURE: 7;
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly MOISTURE: Internal.IntegerProperty;
    }
    type FarmBlock_ = FarmBlock;
    class GeoEntityRenderer <T extends Internal.Entity & Internal.GeoAnimatable> extends Internal.EntityRenderer<T> implements Internal.GeoRenderer<T> {
        constructor(arg0: Internal.EntityRendererProvider$Context_, arg1: Internal.EntityType_<T>)
        constructor(arg0: Internal.EntityRendererProvider$Context_, arg1: Internal.GeoModel_<T>)
        renderFinal(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        updateAnimatedTextureFrame(arg0: Internal.GeoAnimatable_): void;
        preRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getAnimatable(): Internal.GeoAnimatable;
        getInstanceId(arg0: T): number;
        getTextureLocation(arg0: Internal.GeoAnimatable_): ResourceLocation;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        withScale(arg0: number, arg1: number): this;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        getGeoModel(): Internal.GeoModel<T>;
        addRenderLayer(arg0: Internal.GeoRenderLayer_<T>): this;
        fireCompileRenderLayersEvent(): void;
        getRenderType(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        isShaking(arg0: T): boolean;
        getNameRenderCutoffDistance(arg0: T): number;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getRenderLayers(): Internal.List<Internal.GeoRenderLayer<T>>;
        getPackedOverlay(arg0: T, arg1: number): number;
        getPackedOverlay(arg0: Internal.GeoAnimatable_, arg1: number, arg2: number): number;
        actuallyRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getPackedOverlay(arg0: T, arg1: number, arg2: number): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        getInstanceId(arg0: Internal.GeoAnimatable_): number;
        firePreRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): boolean;
        firePostRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderLeash<E extends Internal.Entity, M extends Internal.Mob>(arg0: M, arg1: number, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: E): void;
        doPostRenderCleanup(): void;
        updateAnimatedTextureFrame(arg0: T): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getPackedOverlay(arg0: Internal.GeoAnimatable_, arg1: number): number;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        scaleModelForRender(arg0: number, arg1: number, arg2: Internal.PoseStack_, arg3: T, arg4: Internal.BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderFinal(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        withScale(arg0: number): this;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get animatable(): Internal.GeoAnimatable
        get geoModel(): Internal.GeoModel<T>
        get renderLayers(): Internal.List<Internal.GeoRenderLayer<T>>
    }
    type GeoEntityRenderer_<T extends Internal.Entity & Internal.GeoAnimatable> = GeoEntityRenderer<T>;
    class SandBlock extends Internal.FallingBlock {
        constructor(arg0: number, arg1: Internal.BlockBehaviour$Properties_)
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
    type SandBlock_ = SandBlock;
    class PlayerSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
    }
    type PlayerSensor_ = PlayerSensor;
    interface AccessoriesContainer {
        abstract clearCachedModifiers(): void;
        abstract renderOptions(): Internal.List<boolean>;
        abstract hasChanged(): boolean;
        abstract capability(): Internal.AccessoriesCapability;
        abstract getCosmeticAccessories(): Internal.ExpandedSimpleContainer;
        abstract removeCachedModifiers(arg0: Internal.AttributeModifier_): void;
        abstract getCachedModifiers(): Internal.Set<Internal.AttributeModifier>;
        abstract markChanged(arg0: boolean): void;
        shouldRender(index: number): boolean;
        createReference(index: number): Internal.SlotReference;
        abstract removeModifier(arg0: Internal.UUID_): void;
        markChanged(): void;
        slotType(): Internal.SlotType;
        abstract addTransientModifier(arg0: Internal.AttributeModifier_): void;
        abstract addPersistentModifier(arg0: Internal.AttributeModifier_): void;
        abstract getSlotName(): string;
        abstract getSize(): number;
        abstract update(): void;
        abstract clearModifiers(): void;
        abstract getModifiersForOperation(arg0: Internal.AttributeModifier$Operation_): Internal.Collection<Internal.AttributeModifier>;
        abstract getModifiers(): Internal.Map<Internal.UUID, Internal.AttributeModifier>;
        abstract hasModifier(arg0: Internal.UUID_): boolean;
        abstract getAccessories(): Internal.ExpandedSimpleContainer;
        get cosmeticAccessories(): Internal.ExpandedSimpleContainer
        get cachedModifiers(): Internal.Set<Internal.AttributeModifier>
        get slotName(): string
        get size(): number
        get modifiers(): Internal.Map<Internal.UUID, Internal.AttributeModifier>
        get accessories(): Internal.ExpandedSimpleContainer
    }
    type AccessoriesContainer_ = AccessoriesContainer;
    class FurnaceBlockEntity extends Internal.AbstractFurnaceBlockEntity {
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
    type FurnaceBlockEntity_ = FurnaceBlockEntity;
    interface UnmodifiableCommentedConfig extends Internal.UnmodifiableConfig {
        getOrElse<T>(arg0: string, arg1: T): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getLong(arg0: string): number;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getByteOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getInt(arg0: Internal.List_<string>): number;
        abstract getComment(arg0: Internal.List_<string>): string;
        getCharOrElse(arg0: string, arg1: string): string;
        get<T>(arg0: Internal.List_<string>): T;
        contains(arg0: string): boolean;
        abstract commentMap(): Internal.Map<string, string>;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getShort(arg0: Internal.List_<string>): number;
        abstract containsComment(arg0: Internal.List_<string>): boolean;
        isNull(arg0: Internal.List_<string>): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalComment(arg0: Internal.List_<string>): Internal.Optional<string>;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        getShort(arg0: string): number;
        abstract entrySet(): Internal.Set<Internal.UnmodifiableCommentedConfig$Entry>;
        getComments(arg0: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>): void;
        getComments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getChar(arg0: string): string;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        getChar(arg0: Internal.List_<string>): string;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getLong(arg0: Internal.List_<string>): number;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        isEmpty(): boolean;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        fake(arg0: Internal.UnmodifiableConfig_): this;
        getComment(arg0: string): string;
        containsComment(arg0: string): boolean;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getRaw<T>(arg0: string): T;
        getOptionalComment(arg0: string): Internal.Optional<string>;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        getByte(arg0: string): number;
        getIntOrElse(arg0: string, arg1: number): number;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        abstract size(): number;
        abstract valueMap(): Internal.Map<string, any>;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        apply<T>(arg0: string): T;
        get comments(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
        get empty(): boolean
    }
    type UnmodifiableCommentedConfig_ = UnmodifiableCommentedConfig;
    class BlockEvent$FarmlandTrampleEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: number, arg4: Internal.Entity_)
        getEntity(): Internal.Entity;
        getFallDistance(): number;
        get entity(): Internal.Entity
        get fallDistance(): number
    }
    type BlockEvent$FarmlandTrampleEvent_ = BlockEvent$FarmlandTrampleEvent;
    class AirBlock extends Internal.Block {
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
    type AirBlock_ = AirBlock;
    class RuleProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.List_<any>)
        static readonly CODEC: Internal.Codec<Internal.RuleProcessor>;
    }
    type RuleProcessor_ = RuleProcessor;
    interface LongCollection extends Internal.LongIterable, Internal.Collection<number> {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        longIterator(): Internal.LongIterator;
        abstract iterator(): Internal.LongIterator;
        abstract add(arg0: number): boolean;
        removeIf(arg0: Internal.LongPredicate_): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        toLongArray(arg0: number[]): number[];
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract toArray(arg0: number[]): number[];
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        abstract retainAll(arg0: Internal.LongCollection_): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        forEach(arg0: Internal.LongConsumer_): void;
        abstract addAll(arg0: Internal.LongCollection_): boolean;
        abstract contains(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract rem(arg0: number): boolean;
        abstract toLongArray(): number[];
        spliterator(): Internal.LongSpliterator;
        abstract hashCode(): number;
        abstract size(): number;
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        longParallelStream(): Internal.LongStream;
        abstract removeAll(arg0: Internal.LongCollection_): boolean;
        abstract containsAll(arg0: Internal.LongCollection_): boolean;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        longStream(): Internal.LongStream;
        abstract clear(): void;
        longSpliterator(): Internal.LongSpliterator;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract equals(arg0: any): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        get empty(): boolean
    }
    type LongCollection_ = LongCollection;
    class PropagatingOptionalFieldCodec <A> extends Internal.MapCodec<Internal.Optional<A>> {
        constructor(arg0: string, arg1: Internal.Codec_<A>)
        encode<T>(arg0: Internal.Optional_<A>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        decoder(): Internal.Decoder<Internal.Optional<A>>;
        encoder(): Internal.Encoder<Internal.Optional<A>>;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Optional<A>>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        comap<B>(arg0: Internal.Function_<B, Internal.Optional<A>>): Internal.MapEncoder<B>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.Optional<A>, E>>): Internal.MapDecoder<E>;
        flatMap<B>(arg0: Internal.Function_<Internal.Optional<A>, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        map<B>(arg0: Internal.Function_<Internal.Optional<A>, B>): Internal.MapDecoder<B>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Optional<A>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Optional<A>>>): Internal.MapEncoder<B>;
    }
    type PropagatingOptionalFieldCodec_<A> = PropagatingOptionalFieldCodec<A>;
    interface IInventoryPower <T extends Internal.IDynamicFeatureConfiguration> {
        abstract getInventory(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): Internal.Container;
        abstract getMenuCreator(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): Internal.MenuConstructor;
        abstract shouldDropOnDeath(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_, arg2: Internal.ItemStack_): boolean;
        abstract shouldDropOnDeath(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): boolean;
    }
    type IInventoryPower_<T extends Internal.IDynamicFeatureConfiguration> = IInventoryPower<T>;
    class MagicSwordItemBuilderJS extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        /**
         *         Adds a spell to the default spell list of the item. It takes a spell ID (or just a spell object), and the spell level as an integer.
        */
        addDefaultSpell(spell: Internal.ISSKJSUtils$SpellHolder_, spellLevel: number): this;
        /**
         *         Adds an additional attribute to the item. It takes an attribute ID (or just an attribute object), the modifier name, the modifier amount, and the modifier operation.
         *         The modifier operation can be either `ADDITION`, `MULTIPLY_TOTAL` or `MULTIPLY_BASE`.
        */
        addAdditionalAttribute(attribute: Internal.ISSKJSUtils$AttributeHolder_, modifierName: string, modifierAmount: number, modifierOperation: Internal.AttributeModifier$Operation_): this;
        createObject(): Internal.MagicSwordItem;
    }
    type MagicSwordItemBuilderJS_ = MagicSwordItemBuilderJS;
    interface LightChunk extends Internal.BlockGetter {
        getMinSection(): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        abstract getSkyLightSources(): Internal.ChunkSkyLightSources;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        abstract findBlockLightSources(arg0: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
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
        get skyLightSources(): Internal.ChunkSkyLightSources
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type LightChunk_ = LightChunk;
    class ServerboundEditBookPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: number, arg1: Internal.List_<string>, arg2: Internal.Optional_<string>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getTitle(): Internal.Optional<string>;
        getPages(): Internal.List<string>;
        getSlot(): number;
        isSkippable(): boolean;
        get title(): Internal.Optional<string>
        get pages(): Internal.List<string>
        get slot(): number
        get skippable(): boolean
        static readonly MAX_BYTES_PER_CHAR: 4;
    }
    type ServerboundEditBookPacket_ = ServerboundEditBookPacket;
    interface PrimitiveIterator$OfLong extends Internal.PrimitiveIterator<number, Internal.LongConsumer> {
        forEachRemaining(arg0: any): void;
        next(): number;
        remove(): void;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract nextLong(): number;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
    }
    type PrimitiveIterator$OfLong_ = PrimitiveIterator$OfLong;
    interface TemporalAmount {
        abstract subtractFrom(arg0: Internal.Temporal_): Internal.Temporal;
        abstract addTo(arg0: Internal.Temporal_): Internal.Temporal;
        abstract getUnits(): Internal.List<Internal.TemporalUnit>;
        abstract get(arg0: Internal.TemporalUnit_): number;
        get units(): Internal.List<Internal.TemporalUnit>
    }
    type TemporalAmount_ = TemporalAmount;
    interface IModStateTransition$EventGenerator <T extends Internal.Event & Internal.IModBusEvent> extends Internal.Function<Internal.ModContainer, T> {
        compose<V>(arg0: Internal.Function_<V, Internal.ModContainer>): Internal.Function<V, T>;
        fromFunction<FN extends Internal.Event & Internal.IModBusEvent>(arg0: Internal.Function_<Internal.ModContainer, FN>): Internal.IModStateTransition$EventGenerator<FN>;
        andThen<V>(arg0: Internal.Function_<T, V>): Internal.Function<Internal.ModContainer, V>;
        abstract apply(arg0: Internal.ModContainer_): T;
        identity<T>(): Internal.Function<T, T>;
        (arg0: Internal.ModContainer): T;
    }
    type IModStateTransition$EventGenerator_<T extends Internal.Event & Internal.IModBusEvent> = IModStateTransition$EventGenerator<T>;
    class BrainDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        removePoi(arg0: BlockPos_): void;
        setFreeTicketCount(arg0: BlockPos_, arg1: number): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        removeBrainDump(arg0: number): void;
        addOrUpdateBrainDump(arg0: Internal.BrainDebugRenderer$BrainDump_): void;
        addPoi(arg0: Internal.BrainDebugRenderer$PoiInfo_): void;
    }
    type BrainDebugRenderer_ = BrainDebugRenderer;
    class RenderGuiOverlayEvent$Post extends Internal.RenderGuiOverlayEvent {
        constructor()
        constructor(arg0: Internal.Window_, arg1: Internal.GuiGraphics_, arg2: number, arg3: Internal.NamedGuiOverlay_)
    }
    type RenderGuiOverlayEvent$Post_ = RenderGuiOverlayEvent$Post;
    class ScoreboardCondition extends Internal.EntityCondition<Internal.ScoreboardComparisonConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.ScoreboardComparisonConfiguration_, arg1: Internal.Entity_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ScoreboardCondition_ = ScoreboardCondition;
    class AxisAngle4f implements Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Quaternionfc_)
        constructor(arg0: number, arg1: Internal.Vector3fc_)
        constructor(arg0: Internal.AxisAngle4f_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        clone(): any;
        normalize(): this;
        set(arg0: Internal.AxisAngle4f_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        set(arg0: Internal.AxisAngle4d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        set(arg0: number, arg1: Internal.Vector3fc_): this;
        get(arg0: Matrix4f_): Matrix4f;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        set(arg0: Internal.Quaternionfc_): this;
        transform(arg0: Vec4f_): Vec4f;
        set(arg0: Internal.Matrix4fc_): this;
        set(arg0: Internal.Quaterniondc_): this;
        set(arg0: Internal.Matrix4dc_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        get(arg0: Internal.AxisAngle4f_): this;
        get(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        readExternal(arg0: Internal.ObjectInput_): void;
        transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        toString(arg0: Internal.NumberFormat_): string;
        get(arg0: Matrix3f_): Matrix3f;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        transform(arg0: Vector3f_): Vector3f;
        set(arg0: Internal.Matrix3dc_): this;
        get(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        get(arg0: Quaternionf_): Quaternionf;
        set(arg0: Internal.Matrix3fc_): this;
        rotate(arg0: number): this;
        z: number;
        y: number;
        x: number;
        angle: number;
    }
    type AxisAngle4f_ = AxisAngle4f;
    interface WritableRegistry <T> extends Internal.Registry<T> {
        asHolderIdMap(): Internal.IdMap<Internal.Holder<T>>;
        abstract getResourceKey(arg0: T): Internal.Optional<Internal.ResourceKey<T>>;
        abstract get(arg0: Internal.ResourceKey_<T>): T;
        abstract registryKeySet(): Internal.Set<Internal.ResourceKey<T>>;
        abstract getTagNames(): Internal.Stream<Internal.TagKey<T>>;
        abstract keySet(): Internal.Set<ResourceLocation>;
        keys<U>(arg0: Internal.DynamicOps_<U>): Internal.Stream<U>;
        abstract get(arg0: ResourceLocation_): T;
        abstract key(): Internal.ResourceKey<Internal.Registry<T>>;
        abstract getTags(): Internal.Stream<com.mojang.datafixers.util.Pair<Internal.TagKey<T>, Internal.HolderSet$Named<T>>>;
        getTagOrEmpty(arg0: Internal.TagKey_<T>): Internal.Iterable<Internal.Holder<T>>;
        abstract freeze(): Internal.Registry<T>;
        abstract getRandom(arg0: Internal.RandomSource_): Internal.Optional<Internal.Holder$Reference<T>>;
        abstract holderOwner(): Internal.HolderOwner<T>;
        register<V, T extends V>(arg0: Internal.Registry_<V>, arg1: Internal.ResourceKey_<V>, arg2: T): T;
        abstract lifecycle(arg0: T): Internal.Lifecycle;
        registerForHolder<T>(arg0: Internal.Registry_<T>, arg1: ResourceLocation_, arg2: T): Internal.Holder$Reference<T>;
        asTagAddingLookup(): Internal.HolderLookup$RegistryLookup<T>;
        abstract getOrCreateTag(arg0: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        abstract getId(arg0: T): number;
        abstract register(arg0: Internal.ResourceKey_<T>, arg1: T, arg2: Internal.Lifecycle_): Internal.Holder$Reference<T>;
        register<V, T extends V>(arg0: Internal.Registry_<V>, arg1: ResourceLocation_, arg2: T): T;
        getOrThrow(arg0: Internal.ResourceKey_<T>): T;
        byNameCodec(): Internal.Codec<T>;
        registerMapping<V, T extends V>(arg0: Internal.Registry_<V>, arg1: number, arg2: string, arg3: T): T;
        abstract createRegistrationLookup(): Internal.HolderGetter<T>;
        getHolderOrThrow(arg0: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
        spliterator(): Internal.Spliterator<T>;
        abstract isEmpty(): boolean;
        abstract containsKey(arg0: Internal.ResourceKey_<T>): boolean;
        byIdOrThrow(arg0: number): T;
        abstract containsKey(arg0: ResourceLocation_): boolean;
        abstract bindTags(arg0: Internal.Map_<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>): void;
        abstract iterator(): Internal.Iterator<T>;
        registerForHolder<T>(arg0: Internal.Registry_<T>, arg1: Internal.ResourceKey_<T>, arg2: T): Internal.Holder$Reference<T>;
        forEach(arg0: Internal.Consumer_<T>): void;
        holderByNameCodec(): Internal.Codec<Internal.Holder<T>>;
        abstract getHolder(arg0: Internal.ResourceKey_<T>): Internal.Optional<Internal.Holder$Reference<T>>;
        abstract registerMapping(arg0: number, arg1: Internal.ResourceKey_<T>, arg2: T, arg3: Internal.Lifecycle_): Internal.Holder<T>;
        abstract registryLifecycle(): Internal.Lifecycle;
        abstract byId(arg0: number): T;
        abstract createIntrusiveHolder(arg0: T): Internal.Holder$Reference<T>;
        register<T>(arg0: Internal.Registry_<T>, arg1: string, arg2: T): T;
        stream(): Internal.Stream<T>;
        getOptional(arg0: Internal.ResourceKey_<T>): Internal.Optional<T>;
        abstract getTag(arg0: Internal.TagKey_<T>): Internal.Optional<Internal.HolderSet$Named<T>>;
        getOptional(arg0: ResourceLocation_): Internal.Optional<T>;
        forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        abstract size(): number;
        abstract entrySet(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<T>, T>>;
        abstract resetTags(): void;
        abstract getHolder(arg0: number): Internal.Optional<Internal.Holder$Reference<T>>;
        abstract getKey(arg0: T): ResourceLocation;
        abstract holders(): Internal.Stream<Internal.Holder$Reference<T>>;
        abstract asLookup(): Internal.HolderLookup$RegistryLookup<T>;
        abstract wrapAsHolder(arg0: T): Internal.Holder<T>;
        get tagNames(): Internal.Stream<Internal.TagKey<T>>
        get tags(): Internal.Stream<com.mojang.datafixers.util.Pair<Internal.TagKey<T>, Internal.HolderSet$Named<T>>>
        get empty(): boolean
    }
    type WritableRegistry_<T> = WritableRegistry<T>;
    interface IForgeMobEffectInstance {
        abstract setCurativeItems(arg0: Internal.List_<Internal.ItemStack>): void;
        addCurativeItem(arg0: Internal.ItemStack_): void;
        abstract getCurativeItems(): Internal.List<Internal.ItemStack>;
        writeCurativeItems(arg0: Internal.CompoundTag_): void;
        isCurativeItem(arg0: Internal.ItemStack_): boolean;
        set curativeItems(arg0: Internal.List_<Internal.ItemStack>)
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type IForgeMobEffectInstance_ = IForgeMobEffectInstance;
    class CaveVinesPlantBlock extends Internal.GrowingPlantBodyBlock implements Internal.CaveVines, Internal.BonemealableBlock {
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
        static emission(arg0: number): Internal.ToIntFunction<Internal.BlockState>;
        static use(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): InteractionResult;
        static hasGlowBerries(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type CaveVinesPlantBlock_ = CaveVinesPlantBlock;
    interface Decoder <A> {
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
        error<A>(arg0: string): this;
        withLifecycle(arg0: Internal.Lifecycle_): this;
        unit<A>(arg0: A): Internal.MapDecoder<A>;
        ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): this;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<A>;
        terminal(): Internal.Decoder$Terminal<A>;
        fieldOf(arg0: string): Internal.MapDecoder<A>;
        ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): this;
        map<B>(arg0: Internal.Function_<A, B>): Internal.Decoder<B>;
        simple(): Internal.Decoder$Simple<A>;
        abstract decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        flatMap<B>(arg0: Internal.Function_<A, Internal.DataResult<B>>): Internal.Decoder<B>;
        boxed(): Internal.Decoder$Boxed<A>;
        ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): this;
        unit<A>(arg0: Internal.Supplier_<A>): Internal.MapDecoder<A>;
        promotePartial(arg0: Internal.Consumer_<string>): this;
        (arg0: Internal.DynamicOps<T>, arg1: T): Internal.DataResult_<com.mojang.datafixers.util.Pair<A, T>>;
    }
    type Decoder_<A> = Decoder<A>;
    class AxisAngle4d implements Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.AxisAngle4d_)
        constructor(arg0: number, arg1: Vector3f_)
        constructor(arg0: Internal.Quaternionfc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.AxisAngle4f_)
        constructor(arg0: Internal.Quaterniondc_)
        constructor(arg0: number, arg1: Internal.Vector3dc_)
        clone(): any;
        normalize(): this;
        set(arg0: Internal.AxisAngle4f_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        set(arg0: number, arg1: Vector3f_): this;
        set(arg0: Internal.Matrix4dc_): this;
        get(arg0: Matrix4f_): Matrix4f;
        get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        rotate(arg0: number): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        set(arg0: Internal.Quaternionfc_): this;
        set(arg0: Internal.Matrix4fc_): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        set(arg0: number, arg1: Internal.Vector3dc_): this;
        set(arg0: Internal.Matrix4x3fc_): this;
        get(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        get(arg0: Internal.AxisAngle4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        readExternal(arg0: Internal.ObjectInput_): void;
        toString(arg0: Internal.NumberFormat_): string;
        get(arg0: Matrix3f_): Matrix3f;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        transform(arg0: Vector3f_): Vector3f;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix3fc_): this;
        set(arg0: Internal.Matrix3dc_): this;
        get(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        get(arg0: Quaternionf_): Quaternionf;
        z: number;
        angle: number;
        x: number;
        y: number;
    }
    type AxisAngle4d_ = AxisAngle4d;
    interface Float2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleToIntFunction {
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        getOrDefault(arg0: number, arg1: number): number;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ShortFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Float2FloatFunction;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Float2ByteFunction;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ShortFunction;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ShortFunction<T>;
        containsKey(arg0: number): boolean;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        abstract get(arg0: number): number;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ShortFunction;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ShortFunction;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Float2CharFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Float2LongFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ShortFunction;
        size(): number;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Float2DoubleFunction;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Float2IntFunction;
        defaultReturnValue(arg0: number): void;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ShortFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type Float2ShortFunction_ = Float2ShortFunction;
    class CastSource extends Internal.Enum<Internal.CastSource> {
        static valueOf(arg0: string): Internal.CastSource;
        respectsCooldown(): boolean;
        consumesMana(): boolean;
        static values(): Internal.CastSource[];
        static readonly SCROLL: Internal.CastSource;
        static readonly NONE: Internal.CastSource;
        static readonly SPELLBOOK: Internal.CastSource;
        static readonly SWORD: Internal.CastSource;
        static readonly MOB: Internal.CastSource;
        static readonly COMMAND: Internal.CastSource;
    }
    type CastSource_ = "sword" | "command" | "mob" | "spellbook" | CastSource | "scroll" | "none";
    class VillagerData {
        constructor(arg0: Internal.VillagerType_, arg1: Internal.VillagerProfession_, arg2: number)
        static getMaxXpPerLevel(arg0: number): number;
        getLevel(): number;
        static getMinXpPerLevel(arg0: number): number;
        getProfession(): Internal.VillagerProfession;
        static canLevelUp(arg0: number): boolean;
        setProfession(arg0: Internal.VillagerProfession_): this;
        setLevel(arg0: number): this;
        setType(arg0: Internal.VillagerType_): this;
        getType(): Internal.VillagerType;
        get level(): number
        get profession(): Internal.VillagerProfession
        set profession(arg0: Internal.VillagerProfession_)
        set level(arg0: number)
        set type(arg0: Internal.VillagerType_)
        get type(): Internal.VillagerType
        static readonly CODEC: Internal.Codec<Internal.VillagerData>;
        static readonly MAX_VILLAGER_LEVEL: 5;
        static readonly MIN_VILLAGER_LEVEL: 1;
    }
    type VillagerData_ = VillagerData;
    class Items$1 extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_, arg2: Internal.Block_[])
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
        readonly val$p_248886_: Internal.Block[];
    }
    type Items$1_ = Items$1;
    interface ShortUnaryOperator extends Internal.IntUnaryOperator, Internal.UnaryOperator<number> {
        identity(): this;
        /**
         * @deprecated
        */
        apply(arg0: number): number;
        compose<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        abstract apply(arg0: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any): any;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        negation(): this;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        (arg0: number): number;
    }
    type ShortUnaryOperator_ = ShortUnaryOperator;
    class MobBucketItem extends Internal.BucketItem {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Fluid_, arg2: Internal.SoundEvent_, arg3: Internal.Item$Properties_)
        constructor(arg0: Internal.Supplier_<Internal.EntityType<any>>, arg1: Internal.Supplier_<Internal.Fluid>, arg2: Internal.Supplier_<Internal.SoundEvent>, arg3: Internal.Item$Properties_)
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
        getEmptySound(): Internal.SoundEvent;
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
        getFishType(): Internal.EntityType<any>;
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
        get emptySound(): Internal.SoundEvent
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get fishType(): Internal.EntityType<any>
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type MobBucketItem_ = MobBucketItem;
    abstract class DiscreteVoxelShape {
        constructor(arg0: number, arg1: number, arg2: number)
        forAllEdges(arg0: Internal.DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        forAllBoxes(arg0: Internal.DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        abstract fill(arg0: number, arg1: number, arg2: number): void;
        isFullWide(arg0: number, arg1: number, arg2: number): boolean;
        lastFull(arg0: Internal.Direction$Axis_, arg1: number, arg2: number): number;
        isFull(arg0: Internal.AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        firstFull(arg0: Internal.Direction$Axis_, arg1: number, arg2: number): number;
        isEmpty(): boolean;
        getSize(arg0: Internal.Direction$Axis_): number;
        forAllFaces(arg0: Internal.DiscreteVoxelShape$IntFaceConsumer_): void;
        abstract firstFull(arg0: Internal.Direction$Axis_): number;
        abstract isFull(arg0: number, arg1: number, arg2: number): boolean;
        getXSize(): number;
        getYSize(): number;
        isFullWide(arg0: Internal.AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        getZSize(): number;
        abstract lastFull(arg0: Internal.Direction$Axis_): number;
        get empty(): boolean
        get XSize(): number
        get YSize(): number
        get ZSize(): number
        readonly zSize: number;
        readonly ySize: number;
        readonly xSize: number;
    }
    type DiscreteVoxelShape_ = DiscreteVoxelShape;
    class FileToIdConverter {
        constructor(arg0: string, arg1: string)
        static json(arg0: string): Internal.FileToIdConverter;
        idToFile(arg0: ResourceLocation_): ResourceLocation;
        fileToId(arg0: ResourceLocation_): ResourceLocation;
        listMatchingResources(arg0: Internal.ResourceManager_): Internal.Map<ResourceLocation, Internal.Resource>;
        listMatchingResourceStacks(arg0: Internal.ResourceManager_): Internal.Map<ResourceLocation, Internal.List<Internal.Resource>>;
    }
    type FileToIdConverter_ = FileToIdConverter;
    class ShapedCraftingRecipe extends Internal.ShapedRecipe implements Internal.ILycheeRecipe<Internal.CraftingContext> {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: number, arg4: number, arg5: Internal.NonNullList_<Internal.Ingredient>, arg6: Internal.ItemStack_, arg7: boolean)
        getActionGroups(): Internal.Map<Internal.JsonPointer, Internal.List<Internal.PostAction>>;
        showInRecipeViewer(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        addAssemblingAction(arg0: Internal.PostAction_): void;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        getComment(): string;
        getItemIndexes(arg0: Internal.JsonPointer_): Internal.IntList;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<any>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        getContextualHolder(): Internal.ContextualHolder;
        lychee$getId(): ResourceLocation;
        static makeContext(arg0: Internal.CraftingContainer_, arg1: Internal.Level_, arg2: number, arg3: number, arg4: boolean): Internal.CraftingContext;
        addPostAction(arg0: Internal.PostAction_): void;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getBlockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getPostActions(): Internal.Stream<Internal.PostAction>;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get actionGroups(): Internal.Map<Internal.JsonPointer, Internal.List<Internal.PostAction>>
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get mod(): string
        get allActions(): Internal.Stream<Internal.PostAction>
        get comment(): string
        get contextualHolder(): Internal.ContextualHolder
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get blockInputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get postActions(): Internal.Stream<Internal.PostAction>
        comment: string;
        static readonly CONTAINER_WORLD_LOCATOR: Internal.Cache<typeof any, Internal.Function<Internal.CraftingContainer, snownee.lychee.util.Pair<Vec3d, Player>>>;
        static readonly MENU_WORLD_LOCATOR: Internal.Cache<typeof any, Internal.Function<Internal.AbstractContainerMenu, snownee.lychee.util.Pair<Vec3d, Player>>>;
        ghost: boolean;
        pattern: string;
        hideInRecipeViewer: boolean;
    }
    type ShapedCraftingRecipe_ = ShapedCraftingRecipe;
    interface LongSpliterator extends Internal.Spliterator$OfLong {
        forEachRemaining(arg0: any): void;
        getComparator(): Internal.Comparator<any>;
        hasCharacteristics(arg0: number): boolean;
        abstract tryAdvance(arg0: Internal.LongConsumer_): boolean;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        skip(arg0: number): number;
        abstract estimateSize(): number;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        tryAdvance(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getExactSizeIfKnown(): number;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type LongSpliterator_ = LongSpliterator;
    interface CoreBakedGeoModel {
        searchForChildBone(arg0: Internal.CoreGeoBone_, arg1: string): Internal.CoreGeoBone;
        abstract getBones(): Internal.List<Internal.CoreGeoBone>;
        abstract getBone(arg0: string): Internal.Optional<Internal.CoreGeoBone>;
        get bones(): Internal.List<Internal.CoreGeoBone>
    }
    type CoreBakedGeoModel_ = CoreBakedGeoModel;
    abstract class Either <L, R> implements Internal.App<Internal.Either$Mu<R>, L> {
        abstract right(): Internal.Optional<R>;
        abstract ifRight(arg0: Internal.Consumer_<R>): this;
        abstract mapBoth<C, D>(arg0: Internal.Function_<L, C>, arg1: Internal.Function_<R, D>): Internal.Either<C, D>;
        flatMap<L2>(arg0: Internal.Function_<L, Internal.Either<L2, R>>): Internal.Either<L2, R>;
        swap(): Internal.Either<R, L>;
        abstract ifLeft(arg0: Internal.Consumer_<L>): this;
        mapRight<T>(arg0: Internal.Function_<R, T>): Internal.Either<L, T>;
        abstract map<T>(arg0: Internal.Function_<L, T>, arg1: Internal.Function_<R, T>): T;
        static right<L, R>(arg0: R): Internal.Either<L, R>;
        static unbox<L, R>(arg0: Internal.App_<Internal.Either$Mu<R>, L>): Internal.Either<L, R>;
        mapLeft<T>(arg0: Internal.Function_<L, T>): Internal.Either<T, R>;
        orThrow(): L;
        abstract left(): Internal.Optional<L>;
        static left<L, R>(arg0: L): Internal.Either<L, R>;
    }
    type Either_<L, R> = Either<L, R>;
    class ChangeManaEventJS extends Internal.PlayerEventJS {
        constructor(event: Internal.ChangeManaEvent_)
        /**
         *     Returns the player's current MagicData.
        */
        getMagicData(): Internal.MagicData;
        /**
         *     Returns the float mana value that the value was before it was changed.
        */
        getOldMana(): number;
        getEntity(): Internal.LivingEntity;
        /**
         *     Returns the float mana value that the value changed to after it was changed.
        */
        getNewMana(): number;
        /**
         *     Changes the value that the mana will change to during the event.
        */
        setNewMana(newMana: number): void;
        /**
         *     Returns the player's current MagicData.
        */
        get magicData(): Internal.MagicData
        /**
         *     Returns the float mana value that the value was before it was changed.
        */
        get oldMana(): number
        get entity(): Internal.LivingEntity
        /**
         *     Returns the float mana value that the value changed to after it was changed.
        */
        get newMana(): number
        /**
         *     Changes the value that the mana will change to during the event.
        */
        set newMana(newMana: number)
    }
    type ChangeManaEventJS_ = ChangeManaEventJS;
    class CaveSaplingBlock extends Internal.SaplingBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_, arg2: boolean)
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
    }
    type CaveSaplingBlock_ = CaveSaplingBlock;
    class FlatLevelGeneratorSettings {
        constructor(arg0: Internal.Optional_<Internal.HolderSet<Internal.StructureSet>>, arg1: Internal.Holder_<Internal.Biome>, arg2: Internal.List_<Internal.Holder<Internal.PlacedFeature>>)
        adjustGenerationSettings(arg0: Internal.Holder_<Internal.Biome>): Internal.BiomeGenerationSettings;
        getLayersInfo(): Internal.List<Internal.FlatLayerInfo>;
        setAddLakes(): void;
        structureOverrides(): Internal.Optional<Internal.HolderSet<Internal.StructureSet>>;
        static createLakesList(arg0: Internal.HolderGetter_<Internal.PlacedFeature>): Internal.List<Internal.Holder<Internal.PlacedFeature>>;
        setDecoration(): void;
        static getDefault(arg0: Internal.HolderGetter_<Internal.Biome>, arg1: Internal.HolderGetter_<Internal.StructureSet>, arg2: Internal.HolderGetter_<Internal.PlacedFeature>): Internal.FlatLevelGeneratorSettings;
        withBiomeAndLayers(arg0: Internal.List_<Internal.FlatLayerInfo>, arg1: Internal.Optional_<Internal.HolderSet<Internal.StructureSet>>, arg2: Internal.Holder_<Internal.Biome>): this;
        getBiome(): Internal.Holder<Internal.Biome>;
        updateLayers(): void;
        getLayers(): Internal.List<Internal.BlockState>;
        static getDefaultBiome(arg0: Internal.HolderGetter_<Internal.Biome>): Internal.Holder<Internal.Biome>;
        get layersInfo(): Internal.List<Internal.FlatLayerInfo>
        get biome(): Internal.Holder<Internal.Biome>
        get layers(): Internal.List<Internal.BlockState>
        static readonly CODEC: Internal.Codec<Internal.FlatLevelGeneratorSettings>;
    }
    type FlatLevelGeneratorSettings_ = FlatLevelGeneratorSettings;
    interface Struct$StructValidation {
        abstract validate(arg0: number): void;
        (arg0: number): void;
    }
    type Struct$StructValidation_ = Struct$StructValidation;
    abstract class StateHolder <O, S> {
        constructor(arg0: O, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<S>)
        hasProperty<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): boolean;
        static codec<O, S extends Internal.StateHolder<O, S>>(arg0: Internal.Codec_<O>, arg1: Internal.Function_<O, S>): Internal.Codec<S>;
        getProperties(): Internal.Collection<Internal.Property<any>>;
        cycle<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): S;
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        setValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): S;
        populateNeighbours(arg0: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, S>): void;
        trySetValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): S;
        getValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): T;
        getOptionalValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): Internal.Optional<T>;
        static findNextInCollection<T>(arg0: Internal.Collection_<T>, arg1: T): T;
        get properties(): Internal.Collection<Internal.Property<any>>
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        static readonly PROPERTIES_TAG: "Properties";
        owner: O;
        readonly propertiesCodec: Internal.MapCodec<S>;
        static readonly NAME_TAG: "Name";
    }
    type StateHolder_<O, S> = StateHolder<O, S>;
    class AirItem extends Internal.Item {
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
    type AirItem_ = AirItem;
    interface HiddenEffectStatus {
        abstract getHiddenEffect(): Internal.MobEffectInstance;
        get hiddenEffect(): Internal.MobEffectInstance
        (): Internal.MobEffectInstance_;
    }
    type HiddenEffectStatus_ = HiddenEffectStatus;
    interface IntComparator extends Internal.Comparator<number> {
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        abstract compare(arg0: number, arg1: number): number;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing(arg0: Internal.IntComparator_): this;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        reversed(): this;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
    }
    type IntComparator_ = IntComparator;
    class StringReader implements Internal.ImmutableStringReader {
        constructor(arg0: string)
        constructor(arg0: Internal.StringReader_)
        getTotalLength(): number;
        skipWhitespace(): void;
        peek(): string;
        setCursor(arg0: number): void;
        static isAllowedInUnquotedString(arg0: string): boolean;
        getRemainingLength(): number;
        readDouble(): number;
        canRead(arg0: number): boolean;
        readFloat(): number;
        getRead(): string;
        static isQuotedStringStart(arg0: string): boolean;
        peek(arg0: number): string;
        getString(): string;
        readStringUntil(arg0: string): string;
        expect(arg0: string): void;
        getCursor(): number;
        readLong(): number;
        readQuotedString(): string;
        static isAllowedNumber(arg0: string): boolean;
        readInt(): number;
        readBoolean(): boolean;
        readString(): string;
        readUnquotedString(): string;
        canRead(): boolean;
        skip(): void;
        getRemaining(): string;
        read(): string;
        get totalLength(): number
        set cursor(arg0: number)
        get remainingLength(): number
        get read(): string
        get string(): string
        get cursor(): number
        get remaining(): string
    }
    type StringReader_ = StringReader;
    /**
     * Invoked when an entity attempts to trample farmland.
    */
    class FarmlandTrampledEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, d: number, e: Internal.Entity_)
        /**
         * The distance of the entity from the block.
        */
        getDistance(): number;
        /**
         * The farmland block.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * The distance of the entity from the block.
        */
        get distance(): number
        /**
         * The farmland block.
        */
        get block(): Internal.BlockContainerJS
    }
    type FarmlandTrampledEventJS_ = FarmlandTrampledEventJS;
    interface WorldData {
        abstract setCustomBossEvents(arg0: Internal.CompoundTag_): void;
        abstract getLevelSettings(): Internal.LevelSettings;
        abstract setDataConfiguration(arg0: Internal.WorldDataConfiguration_): void;
        abstract endDragonFightData(): Internal.EndDragonFight$Data;
        abstract getKnownServerBrands(): Internal.Set<string>;
        abstract getLevelName(): string;
        abstract getGameRules(): Internal.GameRules;
        abstract isFlatWorld(): boolean;
        abstract isHardcore(): boolean;
        abstract worldGenSettingsLifecycle(): Internal.Lifecycle;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        abstract getLoadedPlayerTag(): Internal.CompoundTag;
        abstract getAllowCommands(): boolean;
        abstract worldGenOptions(): Internal.WorldOptions;
        getStorageVersionName(arg0: number): string;
        abstract setModdedInfo(arg0: string, arg1: boolean): void;
        abstract getDifficulty(): Internal.Difficulty;
        enabledFeatures(): Internal.FeatureFlagSet;
        abstract isDifficultyLocked(): boolean;
        abstract getDataConfiguration(): Internal.WorldDataConfiguration;
        abstract wasModded(): boolean;
        abstract setDifficulty(arg0: Internal.Difficulty_): void;
        abstract createTag(arg0: Internal.RegistryAccess_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        abstract getCustomBossEvents(): Internal.CompoundTag;
        abstract isDebugWorld(): boolean;
        abstract setDifficultyLocked(arg0: boolean): void;
        abstract overworldData(): Internal.ServerLevelData;
        abstract getRemovedFeatureFlags(): Internal.Set<string>;
        abstract setGameType(arg0: Internal.GameType_): void;
        abstract getGameType(): Internal.GameType;
        abstract getVersion(): number;
        abstract setEndDragonFightData(arg0: Internal.EndDragonFight$Data_): void;
        set customBossEvents(arg0: Internal.CompoundTag_)
        get levelSettings(): Internal.LevelSettings
        set dataConfiguration(arg0: Internal.WorldDataConfiguration_)
        get knownServerBrands(): Internal.Set<string>
        get levelName(): string
        get gameRules(): Internal.GameRules
        get flatWorld(): boolean
        get hardcore(): boolean
        get loadedPlayerTag(): Internal.CompoundTag
        get allowCommands(): boolean
        get difficulty(): Internal.Difficulty
        get difficultyLocked(): boolean
        get dataConfiguration(): Internal.WorldDataConfiguration
        set difficulty(arg0: Internal.Difficulty_)
        get customBossEvents(): Internal.CompoundTag
        get debugWorld(): boolean
        set difficultyLocked(arg0: boolean)
        get removedFeatureFlags(): Internal.Set<string>
        set gameType(arg0: Internal.GameType_)
        get gameType(): Internal.GameType
        get version(): number
        set endDragonFightData(arg0: Internal.EndDragonFight$Data_)
        readonly MCREGION_VERSION_ID: 19132;
        readonly ANVIL_VERSION_ID: 19133;
    }
    type WorldData_ = WorldData;
    interface ObjectSpliterator <K> extends Internal.Spliterator<K> {
        getComparator(): Internal.Comparator<K>;
        trySplit(): Internal.Spliterator<any>;
        getExactSizeIfKnown(): number;
        abstract tryAdvance(arg0: Internal.Consumer_<K>): boolean;
        hasCharacteristics(arg0: number): boolean;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
        abstract estimateSize(): number;
        abstract characteristics(): number;
        get comparator(): Internal.Comparator<K>
        get exactSizeIfKnown(): number
    }
    type ObjectSpliterator_<K> = ObjectSpliterator<K>;
    class EntityRenderersEvent$AddLayers extends Internal.EntityRenderersEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<any>, Internal.EntityRenderer<any>>, arg1: Internal.Map_<string, Internal.EntityRenderer<Player>>, arg2: Internal.EntityRendererProvider$Context_)
        getRenderer<T extends Internal.LivingEntity, R extends Internal.LivingEntityRenderer<T, Internal.EntityModel<T>>>(arg0: Internal.EntityType_<T>): R;
        getPlayerSkin<R extends Internal.EntityRenderer<Player>>(arg0: string): R;
        getSkin<R extends Internal.LivingEntityRenderer<Player, Internal.EntityModel<Player>>>(arg0: string): R;
        getEntityRenderer<T extends Internal.Entity, R extends Internal.EntityRenderer<T>>(arg0: Internal.EntityType_<T>): R;
        getContext(): Internal.EntityRendererProvider$Context;
        getEntityModels(): Internal.EntityModelSet;
        getSkins(): Internal.Set<string>;
        get context(): Internal.EntityRendererProvider$Context
        get entityModels(): Internal.EntityModelSet
        get skins(): Internal.Set<string>
    }
    type EntityRenderersEvent$AddLayers_ = EntityRenderersEvent$AddLayers;
    interface LazyComponentKJS extends Internal.Supplier<Internal.Component> {
        abstract get(): Internal.Component;
        (): Internal.Component_;
    }
    type LazyComponentKJS_ = LazyComponentKJS;
    interface BinaryOperator <T> extends Internal.BiFunction<T, T, T> {
        andThen<V>(arg0: Internal.Function_<T, V>): Internal.BiFunction<T, T, V>;
        abstract apply(arg0: T, arg1: T): T;
        maxBy<T>(arg0: Internal.Comparator_<T>): this;
        minBy<T>(arg0: Internal.Comparator_<T>): this;
        (arg0: T, arg1: T): T;
    }
    type BinaryOperator_<T> = BinaryOperator<T>;
    class RandomBooleanSelectorFeature extends Internal.Feature<Internal.RandomBooleanFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RandomBooleanFeatureConfiguration>)
    }
    type RandomBooleanSelectorFeature_ = RandomBooleanSelectorFeature;
    interface Reference2ReferenceFunction <K, V> extends it.unimi.dsi.fastutil.Function<K, V> {
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Reference2ShortFunction<K>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Reference2ReferenceFunction<K, T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ReferenceFunction<V>;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Reference2LongFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ReferenceFunction<V>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ReferenceFunction<V>;
        containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        abstract get(arg0: any): V;
        remove(arg0: any): V;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ReferenceFunction<V>;
        apply(arg0: K): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Reference2CharFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ReferenceFunction<V>;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ReferenceFunction<V>;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Reference2DoubleFunction<K>;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ReferenceFunction<T, V>;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Reference2IntFunction<K>;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Reference2ObjectFunction<K, T>;
        size(): number;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Reference2FloatFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ReferenceFunction<V>;
        clear(): void;
        defaultReturnValue(): V;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Reference2ByteFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ReferenceFunction<T, V>;
        (arg0: any): V;
    }
    type Reference2ReferenceFunction_<K, V> = Reference2ReferenceFunction<K, V>;
    class FertilizerItem extends Internal.Item {
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
    type FertilizerItem_ = FertilizerItem;
    interface IOptionGroupIdAccessor {
        abstract sodiumOptionsAPI$setId(arg0: toni.sodiumoptionsapi.api.OptionIdentifier_<void>): void;
        abstract sodiumOptionsAPI$setId(arg0: ResourceLocation_): void;
        abstract sodiumOptionsAPI$getId(): toni.sodiumoptionsapi.api.OptionIdentifier<void>;
    }
    type IOptionGroupIdAccessor_ = IOptionGroupIdAccessor;
    class RespawnAnchorBlock extends Internal.Block {
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
        static charge(arg0: Internal.Entity_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        static canSetSpawn(arg0: Internal.Level_): boolean;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        static findStandUpPosition(arg0: Internal.EntityType_<any>, arg1: Internal.CollisionGetter_, arg2: BlockPos_): Internal.Optional<Vec3d>;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        static getScaledChargeLevel(arg0: Internal.BlockState_, arg1: number): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly MIN_CHARGES: 0;
        static readonly CHARGE: Internal.IntegerProperty;
        static readonly MAX_CHARGES: 4;
    }
    type RespawnAnchorBlock_ = RespawnAnchorBlock;
    interface Temporal extends Internal.TemporalAccessor {
        abstract plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        abstract isSupported(arg0: Internal.TemporalUnit_): boolean;
        plus(arg0: Internal.TemporalAmount_): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        abstract getLong(arg0: Internal.TemporalField_): number;
        minus(arg0: Internal.TemporalAmount_): this;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        abstract "with"(arg0: Internal.TemporalField_, arg1: number): this;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
    }
    type Temporal_ = Temporal;
    class ParrotJSBuilder extends Internal.TameableMobBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * Sets a Consumer invoked after the entity is tamed
         * and replaces the logic used to set the UUID of the owner
         * with the parameter of ContextUtils.PlayerEntityContext callback
         * 
         * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
        */
        tameOverride(tameOverride: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): this;
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
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
        */
        onTamed(onTamed: Internal.Consumer_<any>): Internal.MobBuilder<any>;
    }
    type ParrotJSBuilder_ = ParrotJSBuilder;
    class ThreadLocal$SuppliedThreadLocal <T> extends Internal.ThreadLocal<T> {
    }
    type ThreadLocal$SuppliedThreadLocal_<T> = ThreadLocal$SuppliedThreadLocal<T>;
    class Sandstorm_In_A_Bottle extends Internal.Item {
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
    type Sandstorm_In_A_Bottle_ = Sandstorm_In_A_Bottle;
    class PlayerHurtEntityBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        /**
         * The entity that was damaged.
        */
        setEntityByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The entity that was damaged.
        */
        setEntityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The entity that was damaged.
        */
        setEntityByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * The damage that was dealt.
        */
        setDamageByPredicate(arg0: Internal.DamagePredicate_): void;
        /**
         * The damage that was dealt.
        */
        setDamage(arg0: Internal.Consumer_<Internal.DamagePredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * The entity that was damaged.
        */
        setEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The entity that was damaged.
        */
        set entityByType(arg0: Internal.EntityType_<any>)
        /**
         * The entity that was damaged.
        */
        set entityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The entity that was damaged.
        */
        set entityByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The damage that was dealt.
        */
        set damageByPredicate(arg0: Internal.DamagePredicate_)
        /**
         * The damage that was dealt.
        */
        set damage(arg0: Internal.Consumer_<Internal.DamagePredicateBuilder>)
        /**
         * The entity that was damaged.
        */
        set entity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
    }
    type PlayerHurtEntityBuilder_ = PlayerHurtEntityBuilder;
    class SignedMessageBody$Packed extends Internal.Record {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: string, arg1: Internal.Instant_, arg2: number, arg3: Internal.LastSeenMessages$Packed_)
        content(): string;
        lastSeen(): Internal.LastSeenMessages$Packed;
        write(arg0: Internal.FriendlyByteBuf_): void;
        timeStamp(): Internal.Instant;
        salt(): number;
        unpack(arg0: Internal.MessageSignatureCache_): Internal.Optional<Internal.SignedMessageBody>;
    }
    type SignedMessageBody$Packed_ = SignedMessageBody$Packed;
    abstract class AbstractObject2FloatFunction <K> implements Internal.Object2FloatFunction<K>, Internal.Serializable {
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2FloatFunction;
        removeFloat(arg0: any): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Object2ShortFunction<K>;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Object2ByteFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2FloatFunction<T>;
        apply(arg0: K): number;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsDouble(arg0: K): number;
        put(arg0: K, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2FloatFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2FloatFunction;
        defaultReturnValue(): number;
        abstract getFloat(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2FloatFunction<T>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2FloatFunction;
        size(): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Object2LongFunction<K>;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        static identity<T>(): Internal.Function<T, T>;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Object2IntFunction<K>;
        andThenFloat(arg0: Internal.Float2FloatFunction_): Internal.Object2FloatFunction<K>;
    }
    type AbstractObject2FloatFunction_<K> = AbstractObject2FloatFunction<K>;
    class BaseLivingEntityBuilder$AnimationEventJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> {
        constructor(parent: software.bernie.geckolib.core.animation.AnimationState_<E>)
        /**
         * Returns a number, in the range [0, 1], how far through the tick it currently is
        */
        getPartialTick(): number;
        /**
         * If the entity is moving
        */
        isMoving(): boolean;
        /**
         * Sets an animation to play an x amount of times
        */
        thenPlayXTimes(animationName: string, times: number): Internal.PlayState;
        /**
         * Returns any extra data that the event may have
         * 
         * Usually used by armor animations to know what item is worn
        */
        getExtraData(): Internal.Map<Internal.DataTicket<any>, any>;
        getLimbSwing(): number;
        getLimbSwingAmount(): number;
        /**
         * Wait a certain amount of ticks before starting the next animation
        */
        thenWait(ticks: number): Internal.PlayState;
        /**
         * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
         * 
         * @param animationName The name of the animation to be triggered, this is the animation named in the json.
         * @param triggerableAnimationID The unique identifier for the triggerable animation.
         * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
         * ```javascript
         *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
         *  ```
        */
        addTriggerableAnimation(animationName: string, triggerableAnimationID: string, loopTypeEnum: any): Internal.PlayState;
        /**
         * Returns the number of ticks the entity has been animating for
        */
        getAnimationTick(): number;
        /**
         * Sets an animation to play and hold on the last frame
        */
        thenPlayAndHold(animationName: string): Internal.PlayState;
        /**
         * Returns the entity that is being animated
        */
        getEntity(): E;
        /**
         * Returns the animation controller this event is part of
        */
        getController(): Internal.AnimationController<E>;
        /**
         * Sets an animation to play defaulting to the animations.json file loop type
        */
        thenPlay(animationName: string): Internal.PlayState;
        /**
         * Sets an animation to play in a loop
        */
        thenLoop(animationName: string): Internal.PlayState;
        /**
         * Adds an animation to the current animation list
        */
        then(animationName: string, loopType: Internal.Animation$LoopType_): this;
        /**
         * Returns a number, in the range [0, 1], how far through the tick it currently is
        */
        get partialTick(): number
        /**
         * If the entity is moving
        */
        get moving(): boolean
        /**
         * Returns any extra data that the event may have
         * 
         * Usually used by armor animations to know what item is worn
        */
        get extraData(): Internal.Map<Internal.DataTicket<any>, any>
        get limbSwing(): number
        get limbSwingAmount(): number
        /**
         * Returns the number of ticks the entity has been animating for
        */
        get animationTick(): number
        /**
         * Returns the entity that is being animated
        */
        get entity(): E
        /**
         * Returns the animation controller this event is part of
        */
        get controller(): Internal.AnimationController<E>
    }
    type BaseLivingEntityBuilder$AnimationEventJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$AnimationEventJS<E>;
    interface ByteBufConvertible {
        abstract asByteBuf(): Internal.ByteBuf;
        (): Internal.ByteBuf_;
    }
    type ByteBufConvertible_ = ByteBufConvertible;
    class BufferBuilder$SortState {
    }
    type BufferBuilder$SortState_ = BufferBuilder$SortState;
    class CuriosItem extends Internal.Item implements Internal.ICurioItem {
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
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
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
    type CuriosItem_ = CuriosItem;
    class EndPortalFrameBlock extends Internal.Block {
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
        static getOrCreatePortalShape(): Internal.BlockPattern;
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
        get orCreatePortalShape(): Internal.BlockPattern
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly EYE_SHAPE: Internal.ArrayVoxelShape;
        static readonly FULL_SHAPE: Internal.ArrayVoxelShape;
        static readonly HAS_EYE: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
        static readonly BASE_SHAPE: Internal.ArrayVoxelShape;
    }
    type EndPortalFrameBlock_ = EndPortalFrameBlock;
    class Team$CollisionRule extends Internal.Enum<Internal.Team$CollisionRule> {
        getDisplayName(): Internal.Component;
        static byName(arg0: string): Internal.Team$CollisionRule;
        static values(): Internal.Team$CollisionRule[];
        static valueOf(arg0: string): Internal.Team$CollisionRule;
        get displayName(): Internal.Component
        static readonly PUSH_OTHER_TEAMS: Internal.Team$CollisionRule;
        readonly name: string;
        static readonly ALWAYS: Internal.Team$CollisionRule;
        readonly id: number;
        static readonly NEVER: Internal.Team$CollisionRule;
        static readonly PUSH_OWN_TEAM: Internal.Team$CollisionRule;
    }
    type Team$CollisionRule_ = "push_own_team" | Team$CollisionRule | "push_other_teams" | "never" | "always";
    interface ScreenEvents$AfterTick {
        abstract afterTick(arg0: Internal.Screen_): void;
        (arg0: Internal.Screen): void;
    }
    type ScreenEvents$AfterTick_ = ScreenEvents$AfterTick;
    class ItemPickedUpByPlayerBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        /**
         * The entity that threw the item.
        */
        setEntityByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The entity that threw the item.
        */
        setEntityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The item thrown.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The item thrown.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * The entity that threw the item.
        */
        setEntityByPredicate(arg0: Internal.EntityPredicate_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * The entity that threw the item.
        */
        setEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item thrown.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The entity that threw the item.
        */
        set entityByType(arg0: Internal.EntityType_<any>)
        /**
         * The entity that threw the item.
        */
        set entityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The item thrown.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The item thrown.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The entity that threw the item.
        */
        set entityByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The entity that threw the item.
        */
        set entity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The item thrown.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type ItemPickedUpByPlayerBuilder_ = ItemPickedUpByPlayerBuilder;
    class LinkedList <E> extends Internal.AbstractSequentialList<E> implements Internal.Deque<E>, Internal.Cloneable, Internal.List<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        addLast(arg0: E): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        getLast(): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        remove(): E;
        sort(arg0: Internal.Comparator_<E>): void;
        poll(): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        descendingIterator(): Internal.Iterator<E>;
        peek(): E;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract subList(arg0: number, arg1: number): Internal.List<E>;
        addFirst(arg0: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        offer(arg0: E): boolean;
        pop(): E;
        listIterator(arg0: number): Internal.ListIterator<E>;
        abstract iterator(): Internal.Iterator<E>;
        pollFirst(): E;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        push(arg0: E): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        removeLast(): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        pollLast(): E;
        clone(): any;
        get(arg0: number): E;
        peekLast(): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        abstract listIterator(): Internal.ListIterator<E>;
        removeFirst(): E;
        element(): E;
        parallelStream(): Internal.Stream<E>;
        set(arg0: number, arg1: E): E;
        offerFirst(arg0: E): boolean;
        static of<E>(...arg0: E[]): Internal.List<E>;
        remove(arg0: number): E;
        removeFirstOccurrence(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        getFirst(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeLastOccurrence(arg0: any): boolean;
        spliterator(): Internal.Spliterator<E>;
        get last(): E
        get first(): E
    }
    type LinkedList_<E> = LinkedList<E>;
    abstract class LevelEventJS extends Internal.EventJS {
        constructor()
        abstract getLevel(): Internal.Level;
        getServer(): Internal.MinecraftServer;
        get level(): Internal.Level
        get server(): Internal.MinecraftServer
    }
    type LevelEventJS_ = LevelEventJS;
    class CustomSpell$PreCastContext extends Internal.Record {
        getLevel(): Internal.Level;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getPlayerMagicData(): Internal.MagicData;
        get level(): Internal.Level
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get playerMagicData(): Internal.MagicData
    }
    type CustomSpell$PreCastContext_ = CustomSpell$PreCastContext;
    interface Long2ObjectMap$Entry <V> extends Internal.Map$Entry<number, V> {
        /**
         * @deprecated
        */
        getKey(): number;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        abstract getLongKey(): number;
        abstract getValue(): V;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        /**
         * @deprecated
        */
        get key(): number
        get longKey(): number
        get value(): V
        set value(arg0: V)
    }
    type Long2ObjectMap$Entry_<V> = Long2ObjectMap$Entry<V>;
    class PlantType {
        getName(): string;
        static get(arg0: string): Internal.PlantType;
        get name(): string
        static readonly NETHER: Internal.PlantType;
        static readonly BEACH: Internal.PlantType;
        static readonly CROP: Internal.PlantType;
        static readonly WATER: Internal.PlantType;
        static readonly PLAINS: Internal.PlantType;
        static readonly CAVE: Internal.PlantType;
        static readonly DESERT: Internal.PlantType;
    }
    type PlantType_ = PlantType;
    interface ReadableByteChannel extends Internal.Channel {
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        get open(): boolean
    }
    type ReadableByteChannel_ = ReadableByteChannel;
    class ImmolationEffect extends Internal.WideOrbitingEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type ImmolationEffect_ = ImmolationEffect;
    class DragonFireball extends Internal.AbstractHurtingProjectile {
        constructor(arg0: Internal.EntityType_<Internal.DragonFireball>, arg1: Internal.Level_)
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
        static readonly SPLASH_RANGE: 4.0;
    }
    type DragonFireball_ = DragonFireball;
    abstract class AbstractMap <K, V> implements Internal.Map<K, V> {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        static of<K, V>(): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        keySet(): Internal.Set<K>;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        abstract entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get empty(): boolean
    }
    type AbstractMap_<K, V> = AbstractMap<K, V>;
    class GeoCube extends Internal.Record {
        constructor(quads: Internal.GeoQuad_[], pivot: Vec3d_, rotation: Vec3d_, size: Vec3d_, inflate: number, mirror: boolean)
        rotation(): Vec3d;
        mirror(): boolean;
        inflate(): number;
        quads(): Internal.GeoQuad[];
        size(): Vec3d;
        pivot(): Vec3d;
    }
    type GeoCube_ = GeoCube;
    abstract class ClientPlayerNetworkEvent extends Internal.Event {
        constructor()
        getMultiPlayerGameMode(): Internal.MultiPlayerGameMode;
        getConnection(): Internal.Connection;
        getPlayer(): Internal.LocalPlayer;
        get multiPlayerGameMode(): Internal.MultiPlayerGameMode
        get connection(): Internal.Connection
        get player(): Internal.LocalPlayer
    }
    type ClientPlayerNetworkEvent_ = ClientPlayerNetworkEvent;
    class ContextUtils$RendererModelContext {
        constructor(entity: Internal.Entity_, renderer: Internal.EntityRenderer_<any>, model: Internal.EntityModel_<any>)
        /**
         * The entity's renderer
        */
        readonly renderer: Internal.EntityRenderer<any>;
        /**
         * The entity's model
        */
        readonly model: Internal.EntityModel<any>;
        /**
         * The entity
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$RendererModelContext_ = ContextUtils$RendererModelContext;
    class VersionRange {
        restrict(arg0: Internal.VersionRange_): this;
        getSelectedVersion(arg0: Internal.Artifact_): Internal.ArtifactVersion;
        /**
         * @deprecated
        */
        cloneOf(): this;
        matchVersion(arg0: Internal.List_<Internal.ArtifactVersion>): Internal.ArtifactVersion;
        getRecommendedVersion(): Internal.ArtifactVersion;
        getRestrictions(): Internal.List<Internal.Restriction>;
        static createFromVersionSpec(arg0: string): Internal.VersionRange;
        containsVersion(arg0: Internal.ArtifactVersion_): boolean;
        static createFromVersion(arg0: string): Internal.VersionRange;
        isSelectedVersionKnown(arg0: Internal.Artifact_): boolean;
        hasRestrictions(): boolean;
        get recommendedVersion(): Internal.ArtifactVersion
        get restrictions(): Internal.List<Internal.Restriction>
    }
    type VersionRange_ = VersionRange;
    class MapRenderer implements Internal.AutoCloseable {
        constructor(arg0: Internal.TextureManager_)
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.MapItemSavedData_, arg4: boolean, arg5: number): void;
        close(): void;
        resetData(): void;
        update(arg0: number, arg1: Internal.MapItemSavedData_): void;
        readonly textureManager: Internal.TextureManager;
        static readonly MAP_ICONS: Internal.RenderType$CompositeRenderType;
    }
    type MapRenderer_ = MapRenderer;
    interface AnimationController$ParticleKeyframeHandler <A extends Internal.GeoAnimatable> {
        abstract handle(arg0: Internal.ParticleKeyframeEvent_<A>): void;
        (arg0: Internal.ParticleKeyframeEvent<A>): void;
    }
    type AnimationController$ParticleKeyframeHandler_<A extends Internal.GeoAnimatable> = AnimationController$ParticleKeyframeHandler<A>;
    interface ParticleOptions {
        abstract getType(): Internal.ParticleType<any>;
        abstract writeToString(): string;
        abstract writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get type(): Internal.ParticleType<any>
    }
    type ParticleOptions_ = ParticleOptions;
    class RandomOffsetPlacement extends Internal.PlacementModifier {
        static vertical(arg0: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static of(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static horizontal(arg0: Internal.IntProvider_): Internal.RandomOffsetPlacement;
        static readonly CODEC: Internal.Codec<Internal.RandomOffsetPlacement>;
    }
    type RandomOffsetPlacement_ = RandomOffsetPlacement;
    class VanishingCurseEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type VanishingCurseEnchantment_ = VanishingCurseEnchantment;
    interface Long2IntMap$Entry extends Internal.Map$Entry<number, number> {
        /**
         * @deprecated
        */
        getKey(): any;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getLongKey(): number;
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
        /**
         * @deprecated
        */
        get key(): any
        get longKey(): number
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
    type Long2IntMap$Entry_ = Long2IntMap$Entry;
    class MagneticActivatorBlock extends Internal.DirectionalBlock {
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
    type MagneticActivatorBlock_ = MagneticActivatorBlock;
    interface WorldCarver$CarveSkipChecker {
        abstract shouldSkip(arg0: Internal.CarvingContext_, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        (arg0: Internal.CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    type WorldCarver$CarveSkipChecker_ = WorldCarver$CarveSkipChecker;
    class ForgeFlowingFluid$Source extends Internal.ForgeFlowingFluid {
        constructor(arg0: any_)
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
    type ForgeFlowingFluid$Source_ = ForgeFlowingFluid$Source;
    interface IRecipeSlotsView {
        findSlotByName(arg0: string): Internal.Optional<Internal.IRecipeSlotView>;
        abstract getSlotViews(): Internal.List<Internal.IRecipeSlotView>;
        getSlotViews(arg0: Internal.RecipeIngredientRole_): Internal.List<Internal.IRecipeSlotView>;
        get slotViews(): Internal.List<Internal.IRecipeSlotView>
        (): Internal.List_<Internal.IRecipeSlotView>;
    }
    type IRecipeSlotsView_ = IRecipeSlotsView;
    class ServerboundPlayerCommandPacket$Action extends Internal.Enum<Internal.ServerboundPlayerCommandPacket$Action> {
        static values(): Internal.ServerboundPlayerCommandPacket$Action[];
        static valueOf(arg0: string): Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_SPRINTING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_SPRINTING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_RIDING_JUMP: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly PRESS_SHIFT_KEY: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_SLEEPING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly STOP_RIDING_JUMP: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly OPEN_INVENTORY: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly START_FALL_FLYING: Internal.ServerboundPlayerCommandPacket$Action;
        static readonly RELEASE_SHIFT_KEY: Internal.ServerboundPlayerCommandPacket$Action;
    }
    type ServerboundPlayerCommandPacket$Action_ = "press_shift_key" | "stop_sprinting" | "start_sprinting" | "start_fall_flying" | ServerboundPlayerCommandPacket$Action | "open_inventory" | "release_shift_key" | "start_riding_jump" | "stop_sleeping" | "stop_riding_jump";
    class WardenSpawnTracker {
        constructor(arg0: number, arg1: number, arg2: number)
        getWarningLevel(): number;
        setWarningLevel(arg0: number): void;
        reset(): void;
        tick(): void;
        static tryWarn(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ServerPlayer_): Internal.OptionalInt;
        get warningLevel(): number
        set warningLevel(arg0: number)
        static readonly CODEC: Internal.Codec<Internal.WardenSpawnTracker>;
        static readonly MAX_WARNING_LEVEL: 4;
    }
    type WardenSpawnTracker_ = WardenSpawnTracker;
    class MerchantOffer {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number)
        constructor(arg0: Internal.CompoundTag_)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: number)
        getSpecialPriceDiff(): number;
        needsRestock(): boolean;
        shouldRewardExp(): boolean;
        increaseUses(): void;
        resetSpecialPriceDiff(): void;
        isOutOfStock(): boolean;
        getMaxUses(): number;
        getBaseCostA(): Internal.ItemStack;
        createTag(): Internal.CompoundTag;
        getPriceMultiplier(): number;
        getUses(): number;
        resetUses(): void;
        assemble(): Internal.ItemStack;
        updateDemand(): void;
        take(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        addToSpecialPriceDiff(arg0: number): void;
        getResult(): Internal.ItemStack;
        setToOutOfStock(): void;
        getXp(): number;
        setSpecialPriceDiff(arg0: number): void;
        getCostB(): Internal.ItemStack;
        satisfiedBy(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDemand(): number;
        getCostA(): Internal.ItemStack;
        get specialPriceDiff(): number
        get outOfStock(): boolean
        get maxUses(): number
        get baseCostA(): Internal.ItemStack
        get priceMultiplier(): number
        get uses(): number
        get result(): Internal.ItemStack
        get xp(): number
        set specialPriceDiff(arg0: number)
        get costB(): Internal.ItemStack
        get demand(): number
        get costA(): Internal.ItemStack
    }
    type MerchantOffer_ = MerchantOffer;
    abstract class BlockAction <T extends Internal.IDynamicFeatureConfiguration> implements Internal.IFactory<T, Internal.ConfiguredBlockAction<T, any>, Internal.BlockAction<T>> {
        abstract execute(arg0: T, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_): void;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        getCodec(): Internal.Codec<Internal.ConfiguredBlockAction<T, any>>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        get codec(): Internal.Codec<Internal.ConfiguredBlockAction<T, any>>
        static readonly CODEC: Internal.Codec<Internal.BlockAction<any>>;
    }
    type BlockAction_<T extends Internal.IDynamicFeatureConfiguration> = BlockAction<T> | Special.BlockAction;
    class TutorialToast implements Internal.Toast {
        constructor(arg0: any_, arg1: Internal.Component_, arg2: Internal.Component_, arg3: boolean)
        slotCount(): number;
        render(arg0: Internal.GuiGraphics_, arg1: Internal.ToastComponent_, arg2: number): Internal.Toast$Visibility;
        getToken(): any;
        hide(): void;
        width(): number;
        height(): number;
        updateProgress(arg0: number): void;
        get token(): any
        static readonly PROGRESS_BAR_WIDTH: 154;
        static readonly PROGRESS_BAR_HEIGHT: 1;
        static readonly PROGRESS_BAR_Y: 28;
        static readonly PROGRESS_BAR_X: 3;
    }
    type TutorialToast_ = TutorialToast;
    /**
     * @deprecated
    */
    class CategoryBiomeCondition extends io.github.edwinmindcraft.apoli.api.power.factory.BiomeCondition<Internal.FieldConfiguration<Internal.TagKey<Internal.Biome>>> {
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
    type CategoryBiomeCondition_ = CategoryBiomeCondition;
    interface HasCaxtonTextRenderer {
        abstract getCaxtonTextRenderer(): Internal.CaxtonTextRenderer;
        get caxtonTextRenderer(): Internal.CaxtonTextRenderer
        (): Internal.CaxtonTextRenderer_;
    }
    type HasCaxtonTextRenderer_ = HasCaxtonTextRenderer;
    class AbyssalFloraFeature extends Internal.Feature<any> {
        constructor(arg0: Internal.Codec_<any>)
    }
    type AbyssalFloraFeature_ = AbyssalFloraFeature;
    abstract class MobEffectBuilder extends Internal.BuilderBase<Internal.MobEffect> {
        constructor(i: ResourceLocation_)
        beneficial(): this;
        category(c: Internal.MobEffectCategory_): this;
        modifyAttribute(attribute: ResourceLocation_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): this;
        harmful(): this;
        effectTick(effectTick: Internal.MobEffectBuilder$EffectTickCallback_): this;
        color(col: Internal.Color_): this;
    }
    type MobEffectBuilder_ = MobEffectBuilder;
    class ObjectDescJS extends Internal.Record implements Internal.TypeDescJS {
        constructor(types: Internal.List_<Internal.ObjectDescJS$Entry>)
        or(type: Internal.TypeDescJS_): Internal.TypeDescJS;
        types(): Internal.List<Internal.ObjectDescJS$Entry>;
        static object(init: number): Internal.ObjectDescJS;
        static fixedArray(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        build(): string;
        build(builder: Internal.StringBuilder_): void;
        static object(): Internal.ObjectDescJS;
        asMap(): Internal.TypeDescJS;
        asArray(): Internal.TypeDescJS;
        add(key: string, value: Internal.TypeDescJS_, optional: boolean): this;
        static any(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        withGenerics(...types: Internal.TypeDescJS_[]): Internal.TypeDescJS;
        asMap(key: Internal.TypeDescJS_): Internal.TypeDescJS;
        add(key: string, value: Internal.TypeDescJS_): this;
    }
    type ObjectDescJS_ = ObjectDescJS;
    class Panda$PandaLookAtPlayerGoal extends Internal.LookAtPlayerGoal {
        constructor(arg0: Internal.Panda_, arg1: typeof Internal.LivingEntity, arg2: number)
        setTarget(arg0: Internal.LivingEntity_): void;
        set target(arg0: Internal.LivingEntity_)
    }
    type Panda$PandaLookAtPlayerGoal_ = Panda$PandaLookAtPlayerGoal;
    class LiteralArgumentBuilder <S> extends Internal.ArgumentBuilder<S, Internal.LiteralArgumentBuilder<S>> {
        build(): Internal.LiteralCommandNode<S>;
        static literal<S>(arg0: string): Internal.LiteralArgumentBuilder<S>;
        getLiteral(): string;
        get literal(): string
    }
    type LiteralArgumentBuilder_<S> = LiteralArgumentBuilder<S>;
    class VertexFormat implements Internal.VertexFormatAccessor, me.jellysquid.mods.sodium.mixin.core.render.VertexFormatAccessor, Internal.ExtendedVertexFormat {
        constructor(arg0: Internal.ImmutableMap_<string, Internal.VertexFormatElement>)
        getIntegerSize(): number;
        hasUV(arg0: number): boolean;
        embeddium$getExtendedElements(): any[];
        getVertexSize(): number;
        hasPosition(): boolean;
        getElementMapping(): Internal.ImmutableMap<string, Internal.VertexFormatElement>;
        clearBufferState(): void;
        getOffset(arg0: number): number;
        getElementAttributeNames(): Internal.ImmutableList<string>;
        hasColor(): boolean;
        setupBufferState(): void;
        getImmediateDrawVertexBuffer(): Internal.VertexBuffer;
        getOffsets(): Internal.IntList;
        getElements(): Internal.ImmutableList<Internal.VertexFormatElement>;
        hasNormal(): boolean;
        get integerSize(): number
        get vertexSize(): number
        get elementMapping(): Internal.ImmutableMap<string, Internal.VertexFormatElement>
        get elementAttributeNames(): Internal.ImmutableList<string>
        get immediateDrawVertexBuffer(): Internal.VertexBuffer
        get offsets(): Internal.IntList
        get elements(): Internal.ImmutableList<Internal.VertexFormatElement>
        readonly offsets: Internal.IntList;
    }
    type VertexFormat_ = VertexFormat;
    class CuredZombieVillagerBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        setZombie(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        setZombieByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        setZombieByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        setVillager(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        setVillagerByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        setVillagerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        set zombie(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        set zombieByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The zombie villager right before the conversion is complete (not when it is initiated).
         * 
         * The 'type' tag is redundant since it will always be 'zombie_villager'.
        */
        set zombieByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        set villager(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        set villagerByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The villager that is the result of the conversion.
         * 
         * The 'type' tag is redundant since it will always be 'villager'.
        */
        set villagerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
    }
    type CuredZombieVillagerBuilder_ = CuredZombieVillagerBuilder;
    interface BooleanPredicate extends Internal.Predicate<boolean> {
        and(arg0: Internal.BooleanPredicate_): this;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        negate(): this;
        or(arg0: Internal.BooleanPredicate_): this;
        abstract test(arg0: boolean): boolean;
        /**
         * @deprecated
        */
        test(arg0: boolean): boolean;
        negation(): this;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<boolean>): Internal.Predicate<boolean>;
        identity(): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<boolean>): Internal.Predicate<boolean>;
        (arg0: boolean): boolean;
    }
    type BooleanPredicate_ = BooleanPredicate;
    class AbyssalAltarBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly ACTIVE: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly LIGHT_EMISSION: Internal.ToIntFunction<Internal.BlockState>;
    }
    type AbyssalAltarBlock_ = AbyssalAltarBlock;
    abstract class ProjectileEntityBuilder <T extends Internal.Entity & Internal.IProjectileEntityJS> extends Internal.BaseNonAnimatableEntityBuilder<T> {
        constructor(i: ResourceLocation_)
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
        */
        setCanShootFromDispenser(canShootFromDispenser: boolean): this;
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
         * Sets the scale for rendering the projectile entity.
         * 
         * @param pX The X-axis scale.
         * 
         * @param pY The Y-axis scale.
         * 
         * @param pZ The Z-axis scale.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.renderScale(1.5, 1.5, 1.5);
         * ```
        */
        renderScale(pX: number, pY: number, pZ: number): this;
        createObject(): any;
        /**
         * Sets the offset for rendering the projectile entity.
         * 
         * @param vX The X-axis offset.
         * 
         * @param vY The Y-axis offset.
         * 
         * @param vZ The Z-axis offset.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.renderOffset(0.5, 1.0, -0.5);
         * ```
        */
        renderOffset(vX: number, vY: number, vZ: number): this;
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
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureLocation(function_: Internal.Function_<T, any>): this;
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
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
        */
        set canShootFromDispenser(canShootFromDispenser: boolean)
        canShootFromDispenser: boolean;
        static readonly thisList: [];
    }
    type ProjectileEntityBuilder_<T extends Internal.Entity & Internal.IProjectileEntityJS> = ProjectileEntityBuilder<T>;
    interface FirstPersonTracker {
        abstract mobplayeranimator$isFirstPersonNext(): boolean;
        abstract mobplayeranimator$setFirstPersonNext(arg0: boolean): void;
    }
    type FirstPersonTracker_ = FirstPersonTracker;
    /**
     * @deprecated
    */
    class CountOnEveryLayerPlacement extends Internal.PlacementModifier {
        static of(arg0: Internal.IntProvider_): Internal.CountOnEveryLayerPlacement;
        static of(arg0: number): Internal.CountOnEveryLayerPlacement;
        static readonly CODEC: Internal.Codec<Internal.CountOnEveryLayerPlacement>;
    }
    type CountOnEveryLayerPlacement_ = CountOnEveryLayerPlacement;
    interface SodiumWorldRendererAccessor {
        abstract invokeRenderBlockEntities(arg0: Internal.PoseStack_, arg1: Internal.RenderBuffers_, arg2: Internal.Long2ObjectMap_<Internal.SortedSet<Internal.BlockDestructionProgress>>, arg3: number, arg4: Internal.MultiBufferSource$BufferSource_, arg5: number, arg6: number, arg7: number, arg8: Internal.BlockEntityRenderDispatcher_): void;
        abstract invokeRenderGlobalBlockEntities(arg0: Internal.PoseStack_, arg1: Internal.RenderBuffers_, arg2: Internal.Long2ObjectMap_<Internal.SortedSet<Internal.BlockDestructionProgress>>, arg3: number, arg4: Internal.MultiBufferSource$BufferSource_, arg5: number, arg6: number, arg7: number, arg8: Internal.BlockEntityRenderDispatcher_): void;
    }
    type SodiumWorldRendererAccessor_ = SodiumWorldRendererAccessor;
}
declare namespace io.netty.util {
    interface Attribute <T> {
        abstract setIfAbsent(arg0: T): T;
        abstract getAndSet(arg0: T): T;
        /**
         * @deprecated
        */
        abstract remove(): void;
        abstract compareAndSet(arg0: T, arg1: T): boolean;
        /**
         * @deprecated
        */
        abstract getAndRemove(): T;
        abstract key(): Internal.AttributeKey<T>;
        abstract get(): T;
        abstract set(arg0: T): void;
        set ifAbsent(arg0: T)
        /**
         * @deprecated
        */
        get andRemove(): T
    }
    type Attribute_<T> = Attribute<T>;
}
declare namespace net.irisshaders.iris.mixin {
    interface LevelRendererAccessor {
        abstract getRenderBuffers(): Internal.RenderBuffers;
        abstract setRenderBuffers(arg0: Internal.RenderBuffers_): void;
        abstract invokeRenderChunkLayer(arg0: Internal.RenderType_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number, arg5: Matrix4f_): void;
        abstract invokeSetupRender(arg0: Internal.Camera_, arg1: Internal.Frustum_, arg2: boolean, arg3: boolean): void;
        abstract getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        abstract getLevel(): Internal.ClientLevel;
        abstract invokeRenderEntity(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.PoseStack_, arg6: Internal.MultiBufferSource_): void;
        abstract shouldRegenerateClouds(): boolean;
        abstract setShouldRegenerateClouds(arg0: boolean): void;
        get renderBuffers(): Internal.RenderBuffers
        set renderBuffers(arg0: Internal.RenderBuffers_)
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        get level(): Internal.ClientLevel
        set shouldRegenerateClouds(arg0: boolean)
    }
    type LevelRendererAccessor_ = LevelRendererAccessor;
}
declare namespace software.bernie.geckolib.core.animation {
    class AnimationState <T extends Internal.GeoAnimatable> {
        constructor(arg0: T, arg1: number, arg2: number, arg3: number, arg4: boolean)
        withController(arg0: Internal.AnimationController_<T>): this;
        getPartialTick(): number;
        isMoving(): boolean;
        getController(): Internal.AnimationController<T>;
        getExtraData(): Internal.Map<Internal.DataTicket<any>, any>;
        getLimbSwing(): number;
        getData<D>(arg0: Internal.DataTicket_<D>): D;
        getAnimatable(): T;
        getLimbSwingAmount(): number;
        isCurrentAnimation(arg0: Internal.RawAnimation_): boolean;
        setControllerSpeed(arg0: number): void;
        getAnimationTick(): number;
        setAndContinue(arg0: Internal.RawAnimation_): Internal.PlayState;
        isCurrentAnimationStage(arg0: string): boolean;
        setAnimation(arg0: Internal.RawAnimation_): void;
        setData<D>(arg0: Internal.DataTicket_<D>, arg1: D): void;
        resetCurrentAnimation(): void;
        get partialTick(): number
        get moving(): boolean
        get controller(): Internal.AnimationController<T>
        get extraData(): Internal.Map<Internal.DataTicket<any>, any>
        get limbSwing(): number
        get animatable(): T
        get limbSwingAmount(): number
        set controllerSpeed(arg0: number)
        get animationTick(): number
        set andContinue(arg0: Internal.RawAnimation_)
        set animation(arg0: Internal.RawAnimation_)
        animationTick: number;
    }
    type AnimationState_<T extends Internal.GeoAnimatable> = AnimationState<T>;
}
