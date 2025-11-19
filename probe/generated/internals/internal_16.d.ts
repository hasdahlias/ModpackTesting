/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    abstract class ScreenEvent$KeyPressed extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$KeyPressed_ = ScreenEvent$KeyPressed;
    interface Object2DoubleMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        abstract setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        /**
         * @deprecated
        */
        getValue(): any;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        abstract getDoubleValue(): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        get key(): K
        /**
         * @deprecated
        */
        set value(arg0: number)
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: any)
        /**
         * @deprecated
        */
        get value(): any
        get doubleValue(): number
    }
    type Object2DoubleMap$Entry_<K> = Object2DoubleMap$Entry<K>;
    class EntityFallenOnBlockCallbackJS extends Internal.EntitySteppedOnBlockCallbackJS {
        constructor(level: Internal.Level_, entity: Internal.Entity_, pos: BlockPos_, state: Internal.BlockState_, fallHeight: number)
        /**
         * Applies fall damage to the entity, multiplier by the multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(multiplier: number): boolean;
        /**
         * Get the height the entity has fallen
        */
        getFallHeight(): number;
        /**
         * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
         * Note this does not force the damage, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(fallHeight: number, multiplier: number, damageSource: DamageSource_): boolean;
        /**
         * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(fallHeight: number, multiplier: number): boolean;
        /**
         * Applies default fall damage to the entity.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(): boolean;
        /**
         * Get the height the entity has fallen
        */
        get fallHeight(): number
    }
    type EntityFallenOnBlockCallbackJS_ = EntityFallenOnBlockCallbackJS;
    class SharedSuggestionProvider$TextCoordinates {
        constructor(arg0: string, arg1: string, arg2: string)
        readonly y: string;
        readonly x: string;
        readonly z: string;
        static readonly DEFAULT_LOCAL: Internal.SharedSuggestionProvider$TextCoordinates;
        static readonly DEFAULT_GLOBAL: Internal.SharedSuggestionProvider$TextCoordinates;
    }
    type SharedSuggestionProvider$TextCoordinates_ = SharedSuggestionProvider$TextCoordinates;
    interface DataSource {
        abstract getData(arg0: Internal.CommandSourceStack_): Internal.Stream<Internal.CompoundTag>;
        (arg0: Internal.CommandSourceStack): Internal.Stream_<Internal.CompoundTag>;
    }
    type DataSource_ = DataSource;
    class BoneNoduleBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
    type BoneNoduleBlock_ = BoneNoduleBlock;
    class RecipeNamespace extends Internal.LinkedHashMap<string, Internal.RecipeSchemaType> {
        constructor(name: string)
        shapeless(id: string): this;
        replace(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        shaped(id: string): this;
        static of<K, V>(): Internal.Map<K, V>;
        merge(arg0: string, arg1: Internal.RecipeSchemaType_, arg2: Internal.BiFunction_<Internal.RecipeSchemaType, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        replace(arg0: string, arg1: Internal.RecipeSchemaType_, arg2: Internal.RecipeSchemaType_): boolean;
        compute(arg0: string, arg1: Internal.BiFunction_<string, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static getMappedRecipes(): Internal.Map<string, ResourceLocation>;
        putIfAbsent(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        abstract put(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        abstract remove(arg0: any): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        computeIfPresent(arg0: string, arg1: Internal.BiFunction_<string, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        register(id: string, type: Internal.RecipeSchema_): this;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        registerBasic(id: string, ...keys: Internal.RecipeKey_<any>[]): this;
        special(id: string): this;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: string, arg1: Internal.Function_<string, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        static getAll(): Internal.Map<string, Internal.RecipeNamespace>;
        get mappedRecipes(): Internal.Map<string, ResourceLocation>
        get all(): Internal.Map<string, Internal.RecipeNamespace>
        readonly name: string;
    }
    type RecipeNamespace_ = RecipeNamespace;
    class LongJumpMidJump extends Internal.Behavior<Internal.Mob> {
        constructor(arg0: Internal.UniformInt_, arg1: Internal.SoundEvent_)
        start(arg0: Internal.ServerLevel_, arg1: Internal.Mob_, arg2: number): void;
        canStillUse(arg0: Internal.ServerLevel_, arg1: Internal.Mob_, arg2: number): boolean;
        stop(arg0: Internal.ServerLevel_, arg1: Internal.Mob_, arg2: number): void;
        static readonly TIME_OUT_DURATION: 100;
    }
    type LongJumpMidJump_ = LongJumpMidJump;
    /**
     * Invoked when the game is starting up and the armor tier registry is being built.
    */
    class ItemArmorTierRegistryEventJS extends Internal.StartupEventJS {
        constructor()
        /**
         * Adds a new armor tier.
        */
        add(id: string, tier: Internal.Consumer_<Internal.MutableArmorTier>): void;
        /**
         * Adds a new armor tier with a parent tier specified by string.
        */
        add(id: string, parent: string, tier: Internal.Consumer_<Internal.MutableArmorTier>): void;
    }
    type ItemArmorTierRegistryEventJS_ = ItemArmorTierRegistryEventJS;
    class CryomancerArmorItem extends Internal.ImbuableChestplateArmorItem {
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
    type CryomancerArmorItem_ = CryomancerArmorItem;
    class StaffOfTheNines extends Internal.Item {
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
        getPosition(arg0: Vec3d_, arg1: number, arg2: number, arg3: number, arg4: Internal.Vec2_): Vec3d;
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
    type StaffOfTheNines_ = StaffOfTheNines;
    class BlockItemWithSupplierLore extends Internal.BlockItemWithSupplier {
        constructor(arg0: Internal.RegistryObject_<Internal.Block>, arg1: Internal.Item$Properties_)
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
    type BlockItemWithSupplierLore_ = BlockItemWithSupplierLore;
    interface Vector2ic {
        abstract absolute(arg0: Internal.Vector2i_): Internal.Vector2i;
        abstract maxComponent(): number;
        abstract y(): number;
        abstract div(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract x(): number;
        abstract sub(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract gridDistance(arg0: Internal.Vector2ic_): number;
        abstract add(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract distance(arg0: Internal.Vector2ic_): number;
        abstract get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract equals(arg0: number, arg1: number): boolean;
        abstract mul(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract distanceSquared(arg0: number, arg1: number): number;
        abstract add(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract distance(arg0: number, arg1: number): number;
        abstract div(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract mul(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract negate(arg0: Internal.Vector2i_): Internal.Vector2i;
        abstract gridDistance(arg0: number, arg1: number): number;
        abstract mul(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract getToAddress(arg0: number): this;
        abstract lengthSquared(): number;
        abstract max(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract sub(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract min(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract distanceSquared(arg0: Internal.Vector2ic_): number;
        abstract minComponent(): number;
    }
    type Vector2ic_ = Vector2ic;
    class ServerboundCustomPayloadPacket implements Internal.CustomPayloadC2SPacketAccessor, Internal.Packet<Internal.ServerGamePacketListener>, Internal.ICustomPacket<Internal.ServerboundCustomPayloadPacket> {
        constructor(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getData(): Internal.FriendlyByteBuf;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getChannel(): ResourceLocation;
        getInternalData(): Internal.FriendlyByteBuf;
        getDirection(): Internal.NetworkDirection;
        getName(): ResourceLocation;
        getThis(): this;
        getIdentifier(): ResourceLocation;
        getIndex(): number;
        isSkippable(): boolean;
        get data(): Internal.FriendlyByteBuf
        get channel(): ResourceLocation
        get internalData(): Internal.FriendlyByteBuf
        get direction(): Internal.NetworkDirection
        get name(): ResourceLocation
        get "this"(): Internal.ServerboundCustomPayloadPacket
        get identifier(): ResourceLocation
        get index(): number
        get skippable(): boolean
        static readonly BRAND: ResourceLocation;
    }
    type ServerboundCustomPayloadPacket_ = ServerboundCustomPayloadPacket;
    interface ByteChannel extends Internal.ReadableByteChannel, Internal.WritableByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        get open(): boolean
    }
    type ByteChannel_ = ByteChannel;
    class CommonVertexAttribute extends Internal.Enum<Internal.CommonVertexAttribute> implements Internal.CommonVertexAttributeAccessor {
        static getCommonType(arg0: Internal.VertexFormatElement_): Internal.CommonVertexAttribute;
        static createCommonVertexElement$oculus_$md$2a2e30$0(arg0: string, arg1: number, arg2: Internal.VertexFormatElement_): Internal.CommonVertexAttribute;
        static values(): Internal.CommonVertexAttribute[];
        static valueOf(arg0: string): Internal.CommonVertexAttribute;
        getByteLength(): number;
        static createCommonVertexElement(name: string, ordinal: number, element: Internal.VertexFormatElement_): Internal.CommonVertexAttribute;
        get byteLength(): number
        static readonly COLOR: Internal.CommonVertexAttribute;
        static readonly NORMAL: Internal.CommonVertexAttribute;
        static readonly POSITION: Internal.CommonVertexAttribute;
        static readonly LIGHT: Internal.CommonVertexAttribute;
        static COUNT: 11;
        static readonly TEXTURE: Internal.CommonVertexAttribute;
        static readonly OVERLAY: Internal.CommonVertexAttribute;
    }
    type CommonVertexAttribute_ = "normal" | "mid_block" | "entity_id" | "color" | "tangent" | "block_id" | "position" | "mid_tex_coord" | "light" | "texture" | CommonVertexAttribute | "overlay";
    class ResourceGenerator {
        constructor(c: Internal.ConsoleJS_, m: Internal.Map_<ResourceLocation, any>)
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>, alwaysForget: boolean): void;
        json(id: ResourceLocation_, json: Internal.JsonElement_): void;
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>): void;
    }
    type ResourceGenerator_ = ResourceGenerator;
    class AttributeModificationData extends Internal.Record {
        constructor(attribute: Internal.Attribute_, modifier: Internal.AttributeModifier_)
        constructor(slotPath: string, attribute: Internal.Attribute_, modifier: Internal.AttributeModifier_)
        modifier(): Internal.AttributeModifier;
        slotPath(): string;
        attribute(): Internal.Attribute;
    }
    type AttributeModificationData_ = AttributeModificationData;
    class LootPool implements Internal.LootPoolAccessor {
        constructor(arg0: Internal.LootPoolEntryContainer_[], arg1: Internal.LootItemCondition_[], arg2: Internal.LootItemFunction_[], arg3: Internal.NumberProvider_, arg4: Internal.NumberProvider_, arg5: string)
        fabric_getFunctions(): Internal.LootItemFunction[];
        fabric_getBonusRolls(): Internal.NumberProvider;
        static lootPool(): Internal.LootPool$Builder;
        setBonusRolls(arg0: Internal.NumberProvider_): void;
        setRolls(arg0: Internal.NumberProvider_): void;
        fabric_getConditions(): Internal.LootItemCondition[];
        validate(arg0: Internal.ValidationContext_): void;
        isFrozen(): boolean;
        fabric_getEntries(): Internal.LootPoolEntryContainer[];
        getBonusRolls(): Internal.NumberProvider;
        addRandomItems(arg0: Internal.Consumer_<Internal.ItemStack>, arg1: Internal.LootContext_): void;
        getName(): string;
        getRolls(): Internal.NumberProvider;
        fabric_getRolls(): Internal.NumberProvider;
        freeze(): void;
        set bonusRolls(arg0: Internal.NumberProvider_)
        set rolls(arg0: Internal.NumberProvider_)
        get frozen(): boolean
        get bonusRolls(): Internal.NumberProvider
        get name(): string
        get rolls(): Internal.NumberProvider
        rolls: Internal.NumberProvider;
        readonly conditions: Internal.LootItemCondition[];
        readonly functions: Internal.LootItemFunction[];
        readonly entries: Internal.LootPoolEntryContainer[];
        bonusRolls: Internal.NumberProvider;
    }
    type LootPool_ = LootPool;
    interface IForgeEntity extends Internal.ICapabilitySerializable<Internal.CompoundTag> {
        abstract isAddedToWorld(): boolean;
        abstract canUpdate(arg0: boolean): void;
        abstract isInFluidType(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        abstract getEyeInFluidType(): Internal.FluidType;
        abstract canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        abstract captureDrops(): Internal.Collection<Internal.ItemEntity>;
        abstract canUpdate(): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getStepHeight(): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        abstract getFluidTypeHeight(arg0: Internal.FluidType_): number;
        canRiderInteract(): boolean;
        isMultipartEntity(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        serializeNBT(): Internal.Tag;
        abstract isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        abstract captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        abstract getPersistentData(): Internal.CompoundTag;
        abstract onAddedToWorld(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        canStartSwimming(): boolean;
        abstract onRemovedFromWorld(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        abstract revive(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        abstract getMaxHeightFluidType(): Internal.FluidType;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        get addedToWorld(): boolean
        get inFluidType(): boolean
        get eyeInFluidType(): Internal.FluidType
        get stepHeight(): number
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get persistentData(): Internal.CompoundTag
        get maxHeightFluidType(): Internal.FluidType
    }
    type IForgeEntity_ = IForgeEntity;
    interface Member {
        abstract getModifiers(): number;
        abstract getName(): string;
        abstract isSynthetic(): boolean;
        abstract getDeclaringClass(): typeof any;
        get modifiers(): number
        get name(): string
        get synthetic(): boolean
        get declaringClass(): typeof any
        readonly PUBLIC: 0;
        readonly DECLARED: 1;
    }
    type Member_ = Member;
    class NetworkInterface {
        inetAddresses(): Internal.Stream<Internal.InetAddress>;
        isPointToPoint(): boolean;
        subInterfaces(): Internal.Stream<Internal.NetworkInterface>;
        getMTU(): number;
        getParent(): this;
        getHardwareAddress(): number[];
        getSubInterfaces(): Internal.Enumeration<Internal.NetworkInterface>;
        static getNetworkInterfaces(): Internal.Enumeration<Internal.NetworkInterface>;
        getIndex(): number;
        static networkInterfaces(): Internal.Stream<Internal.NetworkInterface>;
        supportsMulticast(): boolean;
        isUp(): boolean;
        isVirtual(): boolean;
        isLoopback(): boolean;
        static getByName(arg0: string): Internal.NetworkInterface;
        static getByIndex(arg0: number): Internal.NetworkInterface;
        getInterfaceAddresses(): Internal.List<Internal.InterfaceAddress>;
        getDisplayName(): string;
        getName(): string;
        static getByInetAddress(arg0: Internal.InetAddress_): Internal.NetworkInterface;
        getInetAddresses(): Internal.Enumeration<Internal.InetAddress>;
        get pointToPoint(): boolean
        get MTU(): number
        get parent(): Internal.NetworkInterface
        get hardwareAddress(): number[]
        get subInterfaces(): Internal.Enumeration<Internal.NetworkInterface>
        get networkInterfaces(): Internal.Enumeration<Internal.NetworkInterface>
        get index(): number
        get up(): boolean
        get virtual(): boolean
        get loopback(): boolean
        get interfaceAddresses(): Internal.List<Internal.InterfaceAddress>
        get displayName(): string
        get name(): string
        get inetAddresses(): Internal.Enumeration<Internal.InetAddress>
    }
    type NetworkInterface_ = NetworkInterface;
    class FluidTransferHelper {
        constructor()
        static getContainerItem(copyContainer: ItemStackTransfer_, handler: Internal.IFluidTransfer_): Internal.ItemStack;
        static interactWithFluidHandler(player: Player_, hand: Internal.InteractionHand_, handler: Internal.IFluidTransfer_): boolean;
        static tryPlaceFluid(player: Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, container: Internal.ItemStack_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): Internal.FluidActionResult;
        static transferFluids(sourceHandler: Internal.IFluidTransfer_, destHandler: Internal.IFluidTransfer_, transferLimit: number, fluidFilter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>): number;
        static tryFluidTransfer(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, maxAmount: number, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static tryPlaceFluid(player: Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        static getFluidContained(container: Internal.ItemStack_): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static tryFillContainer(container: Internal.ItemStack_, fluidSource: Internal.IFluidTransfer_, maxAmount: number, player: Player_, doFill: boolean): Internal.FluidActionResult;
        static tryEmptyContainerAndStow(container: Internal.ItemStack_, fluidDestination: Internal.IFluidTransfer_, inventory: Internal.IItemTransfer_, maxAmount: number, player: Player_, doDrain: boolean): Internal.FluidActionResult;
        static getFluidTransfer(level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): Internal.IFluidTransfer;
        static getFluidTransfer(player: Player_, slot: number): Internal.IFluidTransfer;
        static tryEmptyContainer(container: Internal.ItemStack_, fluidDestination: Internal.IFluidTransfer_, maxAmount: number, player: Player_, doDrain: boolean): Internal.FluidActionResult;
        static tryFluidTransfer(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static getFluidTransfer(itemTransfer: Internal.IItemTransfer_, slot: number): Internal.IFluidTransfer;
        static tryPickUpFluid(emptyContainer: Internal.ItemStack_, playerIn: Player_, level: Internal.Level_, pos: BlockPos_, side: Internal.Direction_): Internal.FluidActionResult;
        static importToTarget(target: Internal.IFluidTransfer_, maxAmount: number, filter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): void;
        static interactWithFluidHandler(player: Player_, hand: Internal.InteractionHand_, level: Internal.Level_, pos: BlockPos_, side: Internal.Direction_): boolean;
        static destroyBlockOnFluidPlacement(level: Internal.Level_, pos: BlockPos_): void;
        static getFluidTransfer(player: Player_, hand: Internal.InteractionHand_): Internal.IFluidTransfer;
        /**
         * @deprecated
        */
        static getFluidTransfer(itemStack: Internal.ItemStack_): Internal.IFluidTransfer;
        static exportToTarget(source: Internal.IFluidTransfer_, maxAmount: number, filter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): void;
        static getFluidTransfer(player: Player_, screenHandler: Internal.AbstractContainerMenu_): Internal.IFluidTransfer;
        static tryFillContainerAndStow(container: Internal.ItemStack_, fluidSource: Internal.IFluidTransfer_, inventory: Internal.IItemTransfer_, maxAmount: number, player: Player_, doFill: boolean): Internal.FluidActionResult;
    }
    type FluidTransferHelper_ = FluidTransferHelper;
    class ContextUtils$LineOfSightContext {
        constructor(targetEntity: Internal.Entity_, entity: Internal.Entity_)
        /**
         * The target entity
        */
        readonly targetEntity: Internal.Entity;
        /**
         * The living entity associated with the target entity
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$LineOfSightContext_ = ContextUtils$LineOfSightContext;
    class TreeConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockStateProvider_, arg1: Internal.TrunkPlacer_, arg2: Internal.BlockStateProvider_, arg3: Internal.FoliagePlacer_, arg4: Internal.Optional_<Internal.RootPlacer>, arg5: Internal.BlockStateProvider_, arg6: Internal.FeatureSize_, arg7: Internal.List_<Internal.TreeDecorator>, arg8: boolean, arg9: boolean)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly minimumSize: Internal.FeatureSize;
        readonly dirtProvider: Internal.BlockStateProvider;
        readonly forceDirt: boolean;
        static readonly CODEC: Internal.Codec<Internal.TreeConfiguration>;
        readonly foliageProvider: Internal.BlockStateProvider;
        readonly rootPlacer: Internal.Optional<Internal.RootPlacer>;
        readonly trunkProvider: Internal.BlockStateProvider;
        readonly foliagePlacer: Internal.FoliagePlacer;
        readonly trunkPlacer: Internal.TrunkPlacer;
        readonly decorators: Internal.List<Internal.TreeDecorator>;
        readonly ignoreVines: boolean;
    }
    type TreeConfiguration_ = TreeConfiguration;
    class ReloadableResourceManager implements Internal.ResourceManager, Internal.AutoCloseable {
        constructor(arg0: Internal.PackType_)
        open(arg0: ResourceLocation_): Internal.InputStream;
        static fromMap(arg0: Internal.Map_<ResourceLocation, Internal.Resource>): Internal.ResourceProvider;
        registerReloadListenerIfNotPresent(arg0: Internal.PreparableReloadListener_): void;
        getResource(arg0: ResourceLocation_): Internal.Optional<Internal.Resource>;
        listResourceStacks(arg0: string, arg1: Internal.Predicate_<ResourceLocation>): Internal.Map<ResourceLocation, Internal.List<Internal.Resource>>;
        getResourceStack(arg0: ResourceLocation_): Internal.List<Internal.Resource>;
        openAsReader(arg0: ResourceLocation_): Internal.BufferedReader;
        registerReloadListener(arg0: Internal.PreparableReloadListener_): void;
        close(): void;
        getNamespaces(): Internal.Set<string>;
        listResources(arg0: string, arg1: Internal.Predicate_<ResourceLocation>): Internal.Map<ResourceLocation, Internal.Resource>;
        createReload(arg0: Internal.Executor_, arg1: Internal.Executor_, arg2: Internal.CompletableFuture_<net.minecraft.util.Unit>, arg3: Internal.List_<Internal.PackResources>): Internal.ReloadInstance;
        listPacks(): Internal.Stream<Internal.PackResources>;
        getResourceOrThrow(arg0: ResourceLocation_): Internal.Resource;
        get namespaces(): Internal.Set<string>
        readonly listeners: Internal.List<Internal.PreparableReloadListener>;
        readonly type: Internal.PackType;
    }
    type ReloadableResourceManager_ = ReloadableResourceManager;
    interface Int2IntMap$Entry extends Internal.Map$Entry<number, number> {
        /**
         * @deprecated
        */
        getKey(): any;
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
        abstract getIntKey(): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getIntValue(): number;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get key(): any
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
        get intKey(): number
        get intValue(): number
    }
    type Int2IntMap$Entry_ = Int2IntMap$Entry;
    class AngelWingsEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type AngelWingsEffect_ = AngelWingsEffect;
    class PewenTreeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type PewenTreeFeature_ = PewenTreeFeature;
    class ModifiableStructureInfo$StructureInfo$Builder {
        build(): Internal.ModifiableStructureInfo$StructureInfo;
        getStructureSettings(): Internal.StructureSettingsBuilder;
        static copyOf(arg0: Internal.ModifiableStructureInfo$StructureInfo_): Internal.ModifiableStructureInfo$StructureInfo$Builder;
        get structureSettings(): Internal.StructureSettingsBuilder
    }
    type ModifiableStructureInfo$StructureInfo$Builder_ = ModifiableStructureInfo$StructureInfo$Builder;
    abstract class RenderTarget implements Internal.AccessoriesFrameBufferExtension, Internal.Blaze3dRenderTargetExt {
        constructor(arg0: boolean)
        clear(arg0: boolean): void;
        getColorTextureId(): number;
        bindRead(): void;
        blitToScreen(arg0: number, arg1: number): void;
        setFilterMode(arg0: number): void;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        unbindWrite(): void;
        unbindRead(): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        enableStencil(): void;
        accessories$setUseHighlightShader(useHighlightShader: boolean): void;
        checkStatus(): void;
        destroyBuffers(): void;
        isStencilEnabled(): boolean;
        bindWrite(arg0: boolean): void;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        getDepthTextureId(): number;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        copyDepthFrom(arg0: Internal.RenderTarget_): void;
        get colorTextureId(): number
        set filterMode(arg0: number)
        get stencilEnabled(): boolean
        get depthTextureId(): number
        width: number;
        readonly useDepth: boolean;
        filterMode: number;
        height: number;
        frameBufferId: number;
        viewHeight: number;
        viewWidth: number;
    }
    type RenderTarget_ = RenderTarget;
    class LongArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.LongArgumentType> {
        constructor(arg0: Internal.LongArgumentInfo_, arg1: number, arg2: number)
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.LongArgumentType, any>;
        readonly max: number;
        readonly f_235590_: Internal.LongArgumentInfo;
        readonly min: number;
    }
    type LongArgumentInfo$Template_ = LongArgumentInfo$Template;
    class KelpBlock extends Internal.GrowingPlantHeadBlock implements Internal.LiquidBlockContainer {
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
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
    type KelpBlock_ = KelpBlock;
    class NetherFortressStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly FORTRESS_ENEMIES: Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        static readonly CODEC: Internal.Codec<Internal.NetherFortressStructure>;
    }
    type NetherFortressStructure_ = NetherFortressStructure;
    abstract class HorizontalDirectionalBlock extends Internal.Block {
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
    type HorizontalDirectionalBlock_ = HorizontalDirectionalBlock;
    abstract class Biome$TemperatureModifier extends Internal.Enum<Internal.Biome$TemperatureModifier> implements Internal.StringRepresentable {
        abstract modifyTemperature(arg0: BlockPos_, arg1: number): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.Biome$TemperatureModifier;
        getSerializedName(): string;
        getName(): string;
        static values(): Internal.Biome$TemperatureModifier[];
        get serializedName(): string
        get name(): string
        static readonly FROZEN: Internal.Biome$TemperatureModifier;
        static readonly NONE: Internal.Biome$TemperatureModifier;
        static readonly CODEC: Internal.Codec<Internal.Biome$TemperatureModifier>;
    }
    type Biome$TemperatureModifier_ = "frozen" | Biome$TemperatureModifier | "none";
    abstract class AbstractReferenceCountedByteBuf extends Internal.AbstractByteBuf {
        touch(arg0: any): Internal.ReferenceCounted;
        retain(): Internal.ReferenceCounted;
        touch(): Internal.ReferenceCounted;
    }
    type AbstractReferenceCountedByteBuf_ = AbstractReferenceCountedByteBuf;
    interface FabricBakedModelManager {
        getModel(id: ResourceLocation_): Internal.BakedModel;
    }
    type FabricBakedModelManager_ = FabricBakedModelManager;
    class StructureStart {
        constructor(arg0: Internal.Structure_, arg1: Internal.ChunkPos_, arg2: number, arg3: Internal.PiecesContainer_)
        canBeReferenced(): boolean;
        isValid(): boolean;
        getPieces(): Internal.List<Internal.StructurePiece>;
        getChunkPos(): Internal.ChunkPos;
        getStructure(): Internal.Structure;
        getReferences(): number;
        placeInChunk(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_): void;
        addReference(): void;
        getBoundingBox(): Internal.BoundingBox;
        createTag(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.ChunkPos_): Internal.CompoundTag;
        getMaxReferences(): number;
        static loadStaticStart(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_, arg2: number): Internal.StructureStart;
        get valid(): boolean
        get pieces(): Internal.List<Internal.StructurePiece>
        get chunkPos(): Internal.ChunkPos
        get structure(): Internal.Structure
        get references(): number
        get boundingBox(): Internal.BoundingBox
        get maxReferences(): number
        static readonly INVALID_START_ID: "INVALID";
        static readonly INVALID_START: Internal.StructureStart;
    }
    type StructureStart_ = StructureStart;
    class ConsoleLine {
        constructor(buf: Internal.FriendlyByteBuf_)
        constructor(console: Internal.ConsoleJS_, timestamp: number, message: string)
        withSourceLine(source: string, line: number): this;
        static writeToNet(buf: Internal.FriendlyByteBuf_, line: Internal.ConsoleLine_): void;
        getText(): string;
        withExternalFile(path: Internal.Path_): this;
        get text(): string
        type: Internal.LogType;
        externalFile: Internal.Path;
        readonly console: Internal.ConsoleJS;
        readonly timestamp: number;
        group: string;
        sourceLines: Internal.Collection<Internal.ConsoleLine$SourceLine>;
        static readonly EMPTY_ARRAY: Internal.ConsoleLine[];
        message: string;
        stackTrace: Internal.List<string>;
    }
    type ConsoleLine_ = ConsoleLine;
    class AdvConfigureEventJS extends Internal.EventJS {
        constructor(arg0: org.mesdag.advjs.trigger.Trigger_)
        /**
         * Remove all advancements without recipe advancements
         * 
         * If had invoked `event.enableRecipeAdvancementsRemoval()`, then truly remove all
        */
        removeAll(): void;
        /**
         * Invoke this when you want to remove recipe advancements
        */
        enableRecipeAdvancementsRemoval(): void;
        /**
         * Get an exist advancement to modify.
        */
        get(arg0: ResourceLocation_): Internal.AdvGetter;
        /**
         * It will automatically remove all of its children.
         * 
         * If you put in a string, it will remove advancement by its id.
         * 
         * Else if you put in an object, it will remove advancement by filter:
         * 
         * @param mod: the mod id of advancement.
         *     - Use `!modid` for not match `modid`
         * @param icon: the icon of advancement widget.
         * @param frame: type of frame for the icon. Available value is 'challenge', 'goal' or 'task'.
         * @param parent: the parent advancement id of this advancement.
        */
        remove(arg0: Internal.AdvancementFilter_): void;
        /**
         * Create a new advancement root
        */
        create(arg0: ResourceLocation_): Internal.AdvBuilder;
        /**
         * Trigger required in advancement.
         * 
         * More details please goto https://minecraft.wiki/w/Advancement/JSON_format
        */
        readonly TRIGGER: org.mesdag.advjs.trigger.Trigger;
        /**
         * Provides several data of vanilla.
        */
        readonly PROVIDER: org.mesdag.advjs.util.Provider;
        /**
         * Predicate required in trigger.
        */
        readonly PREDICATE: org.mesdag.advjs.predicate.Predicate;
        /**
         * Conditions used in trigger or predicate.
        */
        readonly CONDITION: Internal.Condition;
    }
    type AdvConfigureEventJS_ = AdvConfigureEventJS;
    class GauntletBlackstoneBlock extends Internal.Block {
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
    type GauntletBlackstoneBlock_ = GauntletBlackstoneBlock;
    class ToggleNightVisionConfiguration extends Internal.Record implements Internal.TogglePowerConfiguration$Wrapper {
        constructor(toggle: Internal.TogglePowerConfiguration_, strength: number)
        constructor(arg0: boolean, arg1: Internal.IActivePower$Key_, arg2: number)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        retainState(): boolean;
        toggle(): Internal.TogglePowerConfiguration;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        defaultState(): boolean;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        wrapped(): Internal.TogglePowerConfiguration;
        getMissingBinds(): Internal.List<string>;
        strength(): number;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        key(): Internal.IActivePower$Key;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ToggleNightVisionConfiguration>;
    }
    type ToggleNightVisionConfiguration_ = ToggleNightVisionConfiguration;
    interface RecipeFilterParseEvent {
        abstract parse(arg0: Internal.Context_, arg1: Internal.List_<Internal.RecipeFilter>, arg2: Internal.Map_<any, any>): void;
        (arg0: Internal.Context, arg1: Internal.List<Internal.RecipeFilter>, arg2: Internal.Map<any, any>): void;
    }
    type RecipeFilterParseEvent_ = RecipeFilterParseEvent;
    class ContextUtils$CalculateFallDamageContext {
        constructor(fallHeight: number, damageMultiplier: number, entity: Internal.LivingEntity_)
        /**
         * The height from which the entity is falling
        */
        readonly fallHeight: number;
        /**
         * The multiplier applied to calculate fall damage
        */
        readonly damageMultiplier: number;
        /**
         * The living entity experiencing fall damage calculation
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$CalculateFallDamageContext_ = ContextUtils$CalculateFallDamageContext;
    interface AccessoriesAPIAccess {
        accessoriesHolder(): Internal.AccessoriesHolder;
        accessoriesCapability(): Internal.AccessoriesCapability;
    }
    type AccessoriesAPIAccess_ = AccessoriesAPIAccess;
    class ContextUtils$SetWantedPositionContext {
        constructor(wantedX: number, wantedY: number, wantedZ: number, speedModifier: number)
        readonly wantedZ: number;
        readonly wantedY: number;
        readonly speedModifier: number;
        readonly wantedX: number;
    }
    type ContextUtils$SetWantedPositionContext_ = ContextUtils$SetWantedPositionContext;
    class WitherSkeleton extends Internal.AbstractSkeleton {
        constructor(arg0: Internal.EntityType_<Internal.WitherSkeleton>, arg1: Internal.Level_)
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
    type WitherSkeleton_ = WitherSkeleton;
    interface Long2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.LongToIntFunction {
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2CharFunction;
        abstract get(arg0: number): string;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Long2ByteFunction;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2CharFunction;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Long2LongFunction;
        defaultReturnValue(arg0: string): void;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsInt(arg0: number): number;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2CharFunction;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2CharFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2CharFunction<T>;
        apply(arg0: number): string;
        size(): number;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Long2IntFunction;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2CharFunction<T>;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2CharFunction;
        clear(): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Long2FloatFunction;
        put(arg0: number, arg1: string): string;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): string;
    }
    type Long2CharFunction_ = Long2CharFunction;
    class BlastFurnaceMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_, arg3: Internal.ContainerData_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type BlastFurnaceMenu_ = BlastFurnaceMenu;
    class RootedDirtBlock extends Internal.Block implements Internal.BonemealableBlock {
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
    }
    type RootedDirtBlock_ = RootedDirtBlock;
    interface SuggestionProvider <S> {
        abstract getSuggestions(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        (arg0: Internal.CommandContext<S>, arg1: Internal.SuggestionsBuilder): Internal.CompletableFuture_<Internal.Suggestions>;
    }
    type SuggestionProvider_<S> = SuggestionProvider<S>;
    interface IEventBusInvokeDispatcher {
        abstract invoke(arg0: Internal.IEventListener_, arg1: Internal.Event_): void;
        (arg0: Internal.IEventListener, arg1: Internal.Event): void;
    }
    type IEventBusInvokeDispatcher_ = IEventBusInvokeDispatcher;
    class MergeNbtItemAction extends Internal.ItemAction<Internal.FieldConfiguration<string>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.FieldConfiguration_<string>, arg1: Internal.Level_, arg2: Internal.Mutable_<Internal.ItemStack>): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type MergeNbtItemAction_ = MergeNbtItemAction;
    class AlterGroundDecorator extends Internal.TreeDecorator {
        constructor(arg0: Internal.BlockStateProvider_)
        static readonly CODEC: Internal.Codec<Internal.AlterGroundDecorator>;
    }
    type AlterGroundDecorator_ = AlterGroundDecorator;
    class NoiseBasedCountPlacement extends Internal.RepeatingPlacement {
        static of(arg0: number, arg1: number, arg2: number): Internal.NoiseBasedCountPlacement;
        static readonly CODEC: Internal.Codec<Internal.NoiseBasedCountPlacement>;
    }
    type NoiseBasedCountPlacement_ = NoiseBasedCountPlacement;
    abstract class RegisterColorHandlersEvent extends Internal.Event implements Internal.IModBusEvent {
    }
    type RegisterColorHandlersEvent_ = RegisterColorHandlersEvent;
    class CustomSpell$PreCastConditionsContext extends Internal.Record {
        getLevel(): Internal.Level;
        getSpell(): Internal.AbstractSpell;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getPlayerMagicData(): Internal.MagicData;
        get level(): Internal.Level
        get spell(): Internal.AbstractSpell
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get playerMagicData(): Internal.MagicData
    }
    type CustomSpell$PreCastConditionsContext_ = CustomSpell$PreCastConditionsContext;
    class Field extends Internal.AccessibleObject implements Internal.Member {
        getModifiers(): number;
        set(arg0: any, arg1: any): void;
        setShort(arg0: any, arg1: number): void;
        getType(): typeof any;
        getChar(arg0: any): string;
        getInt(arg0: any): number;
        getName(): string;
        getLong(arg0: any): number;
        setDouble(arg0: any, arg1: number): void;
        getAnnotatedType(): Internal.AnnotatedType;
        getGenericType(): Internal.Type;
        getShort(arg0: any): number;
        isEnumConstant(): boolean;
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        setInt(arg0: any, arg1: number): void;
        getFloat(arg0: any): number;
        getBoolean(arg0: any): boolean;
        isSynthetic(): boolean;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        setByte(arg0: any, arg1: number): void;
        setBoolean(arg0: any, arg1: boolean): void;
        setFloat(arg0: any, arg1: number): void;
        getDeclaringClass(): typeof any;
        getByte(arg0: any): number;
        toGenericString(): string;
        setChar(arg0: any, arg1: string): void;
        getDouble(arg0: any): number;
        get(arg0: any): any;
        setLong(arg0: any, arg1: number): void;
        get modifiers(): number
        get type(): typeof any
        get name(): string
        get annotatedType(): Internal.AnnotatedType
        get genericType(): Internal.Type
        get enumConstant(): boolean
        get synthetic(): boolean
        get declaringClass(): typeof any
    }
    type Field_ = Field;
    interface ReferenceCounted {
        abstract touch(arg0: any): this;
        abstract retain(): this;
        abstract touch(): this;
        abstract release(arg0: number): boolean;
        abstract refCnt(): number;
        abstract retain(arg0: number): this;
        abstract release(): boolean;
    }
    type ReferenceCounted_ = ReferenceCounted;
    class ItemRenderer implements Internal.ResourceManagerReloadListener, Internal.ItemRendererAccessor, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.TextureManager_, arg2: Internal.ModelManager_, arg3: Internal.ItemColors_, arg4: Internal.BlockEntityWithoutLevelRenderer_)
        static getArmorFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        renderModelLists(arg0: Internal.BakedModel_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_): void;
        static getFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        invokeRenderBakedItemModel(arg0: Internal.BakedModel_, arg1: Internal.ItemStack_, arg2: number, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_): void;
        getFabricDependencies(): Internal.Collection<any>;
        renderStatic(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.ItemDisplayContext_, arg3: boolean, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_, arg6: Internal.Level_, arg7: number, arg8: number, arg9: number): void;
        getBlockEntityRenderer(): Internal.BlockEntityWithoutLevelRenderer;
        handler$znc000$ldlib$injectRenderItem(stack: Internal.ItemStack_, itemDisplayContext: Internal.ItemDisplayContext_, leftHanded: boolean, matrices: Internal.PoseStack_, buffer: Internal.MultiBufferSource_, light: number, overlay: number, model: Internal.BakedModel_, ci: Internal.CallbackInfo_): void;
        static getFoilBufferDirect(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: boolean, arg3: boolean): Internal.VertexConsumer;
        handler$cla000$fabric_renderer_indigo$hook_renderItem(stack: Internal.ItemStack_, transformMode: Internal.ItemDisplayContext_, invert: boolean, matrixStack: Internal.PoseStack_, vertexConsumerProvider: Internal.MultiBufferSource_, light: number, overlay: number, model: Internal.BakedModel_, ci: Internal.CallbackInfo_): void;
        renderStatic(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: number, arg3: number, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_, arg6: Internal.Level_, arg7: number): void;
        getModel(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): Internal.BakedModel;
        renderQuadList(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: Internal.List_<Internal.BakedQuad>, arg3: Internal.ItemStack_, arg4: number, arg5: number): void;
        getName(): string;
        static getCompassFoilBufferDirect(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: Internal.PoseStack$Pose_): Internal.VertexConsumer;
        render(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: boolean, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: number, arg7: Internal.BakedModel_): void;
        static getCompassFoilBuffer(arg0: Internal.MultiBufferSource_, arg1: Internal.RenderType_, arg2: Internal.PoseStack$Pose_): Internal.VertexConsumer;
        getFabricId(): ResourceLocation;
        getItemModelShaper(): Internal.ItemModelShaper;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get fabricDependencies(): Internal.Collection<any>
        get blockEntityRenderer(): Internal.BlockEntityWithoutLevelRenderer
        get name(): string
        get fabricId(): ResourceLocation
        get itemModelShaper(): Internal.ItemModelShaper
        static readonly COMPASS_FOIL_UI_SCALE: 0.5;
        static readonly COMPASS_FOIL_TEXTURE_SCALE: 0.0078125;
        static readonly ENCHANTED_GLINT_ENTITY: ResourceLocation;
        static readonly COMPASS_FOIL_FIRST_PERSON_SCALE: 0.75;
        static readonly ENCHANTED_GLINT_ITEM: ResourceLocation;
        static readonly ITEM_COUNT_BLIT_OFFSET: 200;
        static readonly TRIDENT_IN_HAND_MODEL: Internal.ModelResourceLocation;
        static readonly GUI_SLOT_CENTER_Y: 8;
        static readonly SPYGLASS_IN_HAND_MODEL: Internal.ModelResourceLocation;
        static readonly GUI_SLOT_CENTER_X: 8;
    }
    type ItemRenderer_ = ItemRenderer;
    class ReportReason extends Internal.Enum<Internal.ReportReason> {
        description(): Internal.Component;
        static valueOf(arg0: string): Internal.ReportReason;
        title(): Internal.Component;
        static values(): Internal.ReportReason[];
        backendName(): string;
        static readonly NON_CONSENSUAL_INTIMATE_IMAGERY: Internal.ReportReason;
        static readonly TERRORISM_OR_VIOLENT_EXTREMISM: Internal.ReportReason;
        static readonly CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: Internal.ReportReason;
        static readonly IMMINENT_HARM: Internal.ReportReason;
        static readonly ALCOHOL_TOBACCO_DRUGS: Internal.ReportReason;
        static readonly HARASSMENT_OR_BULLYING: Internal.ReportReason;
        static readonly DEFAMATION_IMPERSONATION_FALSE_INFORMATION: Internal.ReportReason;
        static readonly HATE_SPEECH: Internal.ReportReason;
        static readonly SELF_HARM_OR_SUICIDE: Internal.ReportReason;
    }
    type ReportReason_ = "harassment_or_bullying" | "imminent_harm" | "terrorism_or_violent_extremism" | "alcohol_tobacco_drugs" | "self_harm_or_suicide" | "hate_speech" | ReportReason | "child_sexual_exploitation_or_abuse" | "non_consensual_intimate_imagery" | "defamation_impersonation_false_information";
    class AccessoryItemAttributeModifiers$Entry extends Internal.Record {
        constructor(attribute: Internal.Attribute_, modifier: Internal.AttributeModifier_, slotName: string, isStackable: boolean)
        modifier(): Internal.AttributeModifier;
        isStackable(): boolean;
        attribute(): Internal.Attribute;
        slotName(): string;
        get stackable(): boolean
        static readonly ENDEC: Internal.Endec<Internal.AccessoryItemAttributeModifiers$Entry>;
    }
    type AccessoryItemAttributeModifiers$Entry_ = AccessoryItemAttributeModifiers$Entry;
    class MissingMappingsEvent$Mapping <T> implements Internal.Comparable<Internal.MissingMappingsEvent$Mapping<T>> {
        constructor(arg0: Internal.IForgeRegistry_<T>, arg1: Internal.IForgeRegistry_<T>, arg2: ResourceLocation_, arg3: number)
        fail(): void;
        getRegistry(): Internal.IForgeRegistry<T>;
        warn(): void;
        ignore(): void;
        getKey(): ResourceLocation;
        compareTo(arg0: any): number;
        remap(arg0: T): void;
        compareTo(arg0: Internal.MissingMappingsEvent$Mapping_<T>): number;
        getId(): number;
        get registry(): Internal.IForgeRegistry<T>
        get key(): ResourceLocation
        get id(): number
    }
    type MissingMappingsEvent$Mapping_<T> = MissingMappingsEvent$Mapping<T>;
    class Object2ObjectArrayMap <K, V> extends Internal.AbstractObject2ObjectMap<K, V> implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: Internal.Map_<K, V>)
        constructor()
        constructor(arg0: any[], arg1: any[], arg2: number)
        constructor(arg0: Internal.Object2ObjectMap_<K, V>)
        constructor(arg0: number)
        constructor(arg0: any[], arg1: any[])
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        get(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        computeObjectIfAbsentPartial(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        abstract defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        clone(): any;
        replace(arg0: K, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        object2ObjectEntrySet(): Internal.ObjectSet<any>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        put(arg0: K, arg1: V): V;
        remove(arg0: any): V;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
    }
    type Object2ObjectArrayMap_<K, V> = Object2ObjectArrayMap<K, V>;
    class CurioBaseItem extends Internal.Item implements Internal.ICurioItem {
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
        isEquippedBy(arg0: Internal.LivingEntity_): boolean;
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
    type CurioBaseItem_ = CurioBaseItem;
    interface Palette$Factory {
        abstract create<A>(arg0: number, arg1: Internal.IdMap_<A>, arg2: Internal.PaletteResize_<A>, arg3: Internal.List_<A>): Internal.Palette<A>;
        (arg0: number, arg1: Internal.IdMap<A>, arg2: Internal.PaletteResize<A>, arg3: Internal.List<A>): Internal.Palette_<A>;
    }
    type Palette$Factory_ = Palette$Factory;
    abstract class SignBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.WoodType_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getSignHitboxCenterPosition(arg0: Internal.BlockState_): Vec3d;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static getWoodType(arg0: Internal.Block_): Internal.WoodType;
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
        abstract getYRotationDegrees(arg0: Internal.BlockState_): number;
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
        openTextEdit(arg0: Player_, arg1: Internal.SignBlockEntity_, arg2: boolean): void;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        type(): Internal.WoodType;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.CubeVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly AABB_OFFSET: 4.0;
    }
    type SignBlock_ = SignBlock;
    class HangingEntityItem extends Internal.Item {
        constructor(arg0: Internal.EntityType_<Internal.HangingEntity>, arg1: Internal.Item$Properties_)
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
        mayPlace(arg0: Player_, arg1: Internal.Direction_, arg2: Internal.ItemStack_, arg3: BlockPos_): boolean;
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
    type HangingEntityItem_ = HangingEntityItem;
    class DoubleArgumentInfo implements Internal.ArgumentTypeInfo<Internal.DoubleArgumentType, Internal.DoubleArgumentInfo$Template> {
        constructor()
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.DoubleArgumentType_): Internal.DoubleArgumentInfo$Template;
        serializeToJson(arg0: Internal.DoubleArgumentInfo$Template_, arg1: Internal.JsonObject_): void;
        serializeToNetwork(arg0: Internal.DoubleArgumentInfo$Template_, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type DoubleArgumentInfo_ = DoubleArgumentInfo;
    interface BiomeModificationContext {
        abstract getEffects(): Internal.BiomeModificationContext$EffectsContext;
        abstract getWeather(): Internal.BiomeModificationContext$WeatherContext;
        abstract getSpawnSettings(): Internal.BiomeModificationContext$SpawnSettingsContext;
        abstract getGenerationSettings(): Internal.BiomeModificationContext$GenerationSettingsContext;
        get effects(): Internal.BiomeModificationContext$EffectsContext
        get weather(): Internal.BiomeModificationContext$WeatherContext
        get spawnSettings(): Internal.BiomeModificationContext$SpawnSettingsContext
        get generationSettings(): Internal.BiomeModificationContext$GenerationSettingsContext
    }
    type BiomeModificationContext_ = BiomeModificationContext;
    interface EquipAction {
        abstract equipStack(arg0: Internal.ItemStack_): Internal.Optional<Internal.ItemStack>;
        (arg0: Internal.ItemStack): Internal.Optional_<Internal.ItemStack>;
    }
    type EquipAction_ = EquipAction;
    class NoRemainderShaplessRecipe$Serializer implements Internal.RecipeSerializer<Internal.NoRemainderShaplessRecipe> {
        constructor()
        fromNetwork(pRecipeId: ResourceLocation_, pBuffer: Internal.FriendlyByteBuf_): Internal.NoRemainderShaplessRecipe;
        fromJson(pRecipeId: ResourceLocation_, pJson: Internal.JsonObject_): Internal.NoRemainderShaplessRecipe;
        toNetwork(pBuffer: Internal.FriendlyByteBuf_, pRecipe: Internal.NoRemainderShaplessRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.NoRemainderShaplessRecipe;
        fromJson(pRecipeId: ResourceLocation_, pJson: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(pBuffer: Internal.FriendlyByteBuf_, pRecipe: Internal.Recipe_<any>): void;
        fromNetwork(pRecipeId: ResourceLocation_, pBuffer: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type NoRemainderShaplessRecipe$Serializer_ = NoRemainderShaplessRecipe$Serializer;
    class PressurePlateBlock extends Internal.BasePressurePlateBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_, arg2: Internal.BlockSetType_)
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
        static readonly POWERED: Internal.BooleanProperty;
    }
    type PressurePlateBlock_ = PressurePlateBlock;
    class IntArrayTag extends Internal.CollectionTag<Internal.IntTag> {
        constructor(arg0: Internal.List_<number>)
        constructor(arg0: number[])
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        add(arg0: number, arg1: Internal.IntTag_): void;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.IntTag>): void;
        spliterator(): Internal.Spliterator<Internal.IntTag>;
        removeIf(arg0: Internal.Predicate_<Internal.IntTag>): boolean;
        getAsIntArray(): number[];
        replaceAll(arg0: Internal.UnaryOperator_<Internal.IntTag>): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        sort(arg0: Internal.Comparator_<Internal.IntTag>): void;
        set(arg0: number, arg1: Internal.IntTag_): Internal.IntTag;
        stream(): Internal.Stream<Internal.IntTag>;
        getType(): Internal.TagType<Internal.IntArrayTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract toArray<T>(arg0: T[]): T[];
        remove(arg0: number): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.IntTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        copy(): this;
        get asIntArray(): number[]
        get type(): Internal.TagType<Internal.IntArrayTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.IntArrayTag>;
    }
    type IntArrayTag_ = IntArrayTag;
    interface Runnable {
        abstract run(): void;
        (): void;
    }
    type Runnable_ = Runnable;
    class MagmaBlock extends Internal.Block {
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
    type MagmaBlock_ = MagmaBlock;
    class StatePropertiesPredicate implements Internal.StatePropertiesPredicateAccess {
        constructor(arg0: Internal.List_<Internal.StatePropertiesPredicate$PropertyMatcher>)
        getProperties(): Internal.List<any>;
        matches<S extends Internal.StateHolder<any, S>>(arg0: Internal.StateDefinition_<any, S>, arg1: S): boolean;
        serializeToJson(): Internal.JsonElement;
        static fromJson(arg0: Internal.JsonElement_): Internal.StatePropertiesPredicate;
        matches(arg0: Internal.FluidState_): boolean;
        checkState(arg0: Internal.StateDefinition_<any, any>, arg1: Internal.Consumer_<string>): void;
        matches(arg0: Internal.BlockState_): boolean;
        get properties(): Internal.List<any>
        static readonly ANY: Internal.StatePropertiesPredicate;
    }
    type StatePropertiesPredicate_ = StatePropertiesPredicate;
    class SpikeFeature$EndSpike {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean)
        isCenterWithinChunk(arg0: BlockPos_): boolean;
        getRadius(): number;
        getCenterX(): number;
        getTopBoundingBox(): Internal.AABB;
        getCenterZ(): number;
        getHeight(): number;
        isGuarded(): boolean;
        get radius(): number
        get centerX(): number
        get topBoundingBox(): Internal.AABB
        get centerZ(): number
        get height(): number
        get guarded(): boolean
        static readonly CODEC: Internal.Codec<Internal.SpikeFeature$EndSpike>;
    }
    type SpikeFeature$EndSpike_ = SpikeFeature$EndSpike;
    class ModifiableBiomeInfo$BiomeInfo extends Internal.Record {
        constructor(climateSettings: Internal.Biome$ClimateSettings_, effects: Internal.BiomeSpecialEffects_, generationSettings: Internal.BiomeGenerationSettings_, mobSpawnSettings: Internal.MobSpawnSettings_)
        effects(): Internal.BiomeSpecialEffects;
        mobSpawnSettings(): Internal.MobSpawnSettings;
        climateSettings(): Internal.Biome$ClimateSettings;
        generationSettings(): Internal.BiomeGenerationSettings;
    }
    type ModifiableBiomeInfo$BiomeInfo_ = ModifiableBiomeInfo$BiomeInfo;
    class ModifierOperation$Phase extends Internal.Enum<Internal.ModifierOperation$Phase> {
        static valueOf(arg0: string): Internal.ModifierOperation$Phase;
        static values(): Internal.ModifierOperation$Phase[];
        static readonly TOTAL: Internal.ModifierOperation$Phase;
        static readonly BASE: Internal.ModifierOperation$Phase;
    }
    type ModifierOperation$Phase_ = "total" | "base" | ModifierOperation$Phase;
    class TrapBlock extends Internal.Block {
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
    type TrapBlock_ = TrapBlock;
    class RenderRegionCache {
        constructor()
        createRegion(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_, arg3: number): Internal.RenderChunkRegion;
    }
    type RenderRegionCache_ = RenderRegionCache;
    class SpellSelectionManager$SpellSelectionEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.SpellSelectionManager_)
        getEntity(): Internal.LivingEntity;
        addSelectionOption(arg0: SpellData_, arg1: string, arg2: number): void;
        getManager(): Internal.SpellSelectionManager;
        addSelectionOption(arg0: SpellData_, arg1: string, arg2: number, arg3: number): void;
        get entity(): Internal.LivingEntity
        get manager(): Internal.SpellSelectionManager
    }
    type SpellSelectionManager$SpellSelectionEvent_ = SpellSelectionManager$SpellSelectionEvent;
    class EasingType$CatmullRomEasing implements Internal.EasingType {
        constructor()
        static elastic(arg0: number): Internal.Double2DoubleFunction;
        static sine(arg0: number): number;
        static linear(arg0: number): number;
        static exp(arg0: number): number;
        static easeOut(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        static quadratic(arg0: number): number;
        static register(arg0: string, arg1: Internal.EasingType_): Internal.EasingType;
        static catmullRom(arg0: number): number;
        static circle(arg0: number): number;
        static step(arg0: number): Internal.Double2DoubleFunction;
        static stepPositive(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        static pow(arg0: number): Internal.Double2DoubleFunction;
        static fromString(arg0: string): Internal.EasingType;
        static fromJson(arg0: Internal.JsonElement_): Internal.EasingType;
        static cubic(arg0: number): number;
        static easeIn(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        static linear(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        apply(arg0: Internal.AnimationPoint_): number;
        static back(arg0: number): Internal.Double2DoubleFunction;
        static lerpWithOverride(arg0: Internal.AnimationPoint_, arg1: Internal.EasingType_): number;
        static easeInOut(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        buildTransformer(arg0: number): Internal.Double2DoubleFunction;
        static getPointOnSpline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static stepNonNegative(arg0: Internal.Double2DoubleFunction_): Internal.Double2DoubleFunction;
        static bounce(arg0: number): Internal.Double2DoubleFunction;
        apply(arg0: Internal.AnimationPoint_, arg1: number, arg2: number): number;
    }
    type EasingType$CatmullRomEasing_ = EasingType$CatmullRomEasing;
    abstract class ImmutableSet <E> extends Internal.ImmutableCollection<E> implements Internal.Set<E> {
        static of<E>(): Internal.ImmutableSet<E>;
        static of<E>(arg0: E): Internal.ImmutableSet<E>;
        static builderWithExpectedSize<E>(arg0: number): Internal.ImmutableSet$Builder<E>;
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableSet<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.ImmutableSet<E>;
        static copyOf<E>(arg0: E[]): Internal.ImmutableSet<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static toImmutableSet<E>(): Internal.Collector<E, any, Internal.ImmutableSet<E>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E): Internal.ImmutableSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.ImmutableSet<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.ImmutableSet<E>;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.ImmutableSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, ...arg6: E[]): Internal.ImmutableSet<E>;
        static builder<E>(): Internal.ImmutableSet$Builder<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        spliterator(): Internal.Spliterator<E>;
        static copyOf<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableSet<E>;
    }
    type ImmutableSet_<E> = ImmutableSet<E>;
    class BlockBehaviour$BlockStateBase$Cache {
        constructor(arg0: Internal.BlockState_)
        isFaceSturdy(arg0: Internal.Direction_, arg1: Internal.SupportType_): boolean;
        readonly occlusionShapes: Internal.VoxelShape[];
        readonly isCollisionShapeFullBlock: boolean;
        readonly propagatesSkylightDown: boolean;
        readonly largeCollisionShape: boolean;
        readonly solidRender: boolean;
        readonly collisionShape: Internal.VoxelShape;
        readonly lightBlock: number;
    }
    type BlockBehaviour$BlockStateBase$Cache_ = BlockBehaviour$BlockStateBase$Cache;
    interface ShovelItemAccessor {
        getPathStates(): Internal.Map<Internal.Block, Internal.BlockState>;
        get pathStates(): Internal.Map<Internal.Block, Internal.BlockState>
    }
    type ShovelItemAccessor_ = ShovelItemAccessor;
    class PlayLevelSoundEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Holder_<Internal.SoundEvent>, arg2: Internal.SoundSource_, arg3: number, arg4: number)
        setNewPitch(arg0: number): void;
        getLevel(): Internal.Level;
        getNewVolume(): number;
        getSound(): Internal.Holder<Internal.SoundEvent>;
        getOriginalVolume(): number;
        getNewPitch(): number;
        getSource(): Internal.SoundSource;
        setSound(arg0: Internal.Holder_<Internal.SoundEvent>): void;
        setSource(arg0: Internal.SoundSource_): void;
        getOriginalPitch(): number;
        setNewVolume(arg0: number): void;
        set newPitch(arg0: number)
        get level(): Internal.Level
        get newVolume(): number
        get sound(): Internal.Holder<Internal.SoundEvent>
        get originalVolume(): number
        get newPitch(): number
        get source(): Internal.SoundSource
        set sound(arg0: Internal.Holder_<Internal.SoundEvent>)
        set source(arg0: Internal.SoundSource_)
        get originalPitch(): number
        set newVolume(arg0: number)
    }
    type PlayLevelSoundEvent_ = PlayLevelSoundEvent;
    class Configuration {
        resolveAndBind(arg0: Internal.ModuleFinder_, arg1: Internal.ModuleFinder_, arg2: Internal.Collection_<string>): this;
        static resolve(arg0: Internal.ModuleFinder_, arg1: Internal.List_<Internal.Configuration>, arg2: Internal.ModuleFinder_, arg3: Internal.Collection_<string>): Internal.Configuration;
        parents(): Internal.List<Internal.Configuration>;
        modules(): Internal.Set<Internal.ResolvedModule>;
        resolve(arg0: Internal.ModuleFinder_, arg1: Internal.ModuleFinder_, arg2: Internal.Collection_<string>): this;
        static resolveAndBind(arg0: Internal.ModuleFinder_, arg1: Internal.List_<Internal.Configuration>, arg2: Internal.ModuleFinder_, arg3: Internal.Collection_<string>): Internal.Configuration;
        static empty(): Internal.Configuration;
        findModule(arg0: string): Internal.Optional<Internal.ResolvedModule>;
    }
    type Configuration_ = Configuration;
    interface OutputReplacementTransformer {
        abstract transform(arg0: Internal.RecipeKJS_, arg1: Internal.ReplacementMatch_, arg2: Internal.OutputReplacement_, arg3: Internal.OutputReplacement_): any;
        (arg0: Internal.RecipeKJS, arg1: Internal.ReplacementMatch, arg2: Internal.OutputReplacement, arg3: Internal.OutputReplacement): any;
    }
    type OutputReplacementTransformer_ = OutputReplacementTransformer;
    class SwingHandAction extends Internal.EntityAction<Internal.FieldConfiguration<Internal.InteractionHand>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.FieldConfiguration_<Internal.InteractionHand>, arg1: Internal.Entity_): void;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SwingHandAction_ = SwingHandAction;
    class VariableSet implements Internal.UnitVariables {
        constructor()
        setMutable(name: string, initialValue: number): Internal.MutableNumberUnit;
        createSubset(): this;
        get(entry: string): Internal.Unit;
        set(name: string, value: Internal.Unit_): this;
        getVariables(): this;
        set(name: string, value: number): this;
        get variables(): Internal.VariableSet
    }
    type VariableSet_ = VariableSet;
    class PlacementContext extends Internal.WorldGenerationContext {
        constructor(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkGenerator_, arg2: Internal.Optional_<Internal.PlacedFeature>)
        generator(): Internal.ChunkGenerator;
        getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getMinBuildHeight(): number;
        topFeature(): Internal.Optional<Internal.PlacedFeature>;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        getLevel(): Internal.WorldGenLevel;
        getCarvingMask(arg0: Internal.ChunkPos_, arg1: Internal.GenerationStep$Carving_): Internal.CarvingMask;
        get minBuildHeight(): number
        get level(): Internal.WorldGenLevel
    }
    type PlacementContext_ = PlacementContext;
    class StructureSpawnOverride$BoundingBoxType extends Internal.Enum<Internal.StructureSpawnOverride$BoundingBoxType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.StructureSpawnOverride$BoundingBoxType[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.StructureSpawnOverride$BoundingBoxType;
        get serializedName(): string
        static readonly STRUCTURE: Internal.StructureSpawnOverride$BoundingBoxType;
        static readonly CODEC: Internal.Codec<Internal.StructureSpawnOverride$BoundingBoxType>;
        static readonly PIECE: Internal.StructureSpawnOverride$BoundingBoxType;
    }
    type StructureSpawnOverride$BoundingBoxType_ = StructureSpawnOverride$BoundingBoxType | "structure" | "piece";
    class ElytraFlightPossibleConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(checkState: boolean, checkAbility: boolean)
        isConfigurationValid(): boolean;
        checkState(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        checkAbility(): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
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
        static readonly CODEC: Internal.Codec<Internal.ElytraFlightPossibleConfiguration>;
    }
    type ElytraFlightPossibleConfiguration_ = ElytraFlightPossibleConfiguration;
    class HashSet <E> extends Internal.AbstractSet<E> implements Internal.Cloneable, Internal.Set<E>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Collection_<E>)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        clone(): any;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        toArray<T>(arg0: T[]): T[];
        parallelStream(): Internal.Stream<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        iterator(): Internal.Iterator<E>;
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
    type HashSet_<E> = HashSet<E>;
    class DelegatedItemAction <T extends Internal.IDelegatedActionConfiguration<org.apache.commons.lang3.tuple.Pair<Internal.Level, Internal.Mutable<Internal.ItemStack>>>> extends Internal.ItemAction<T> {
        constructor(arg0: Internal.Codec_<T>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: T, arg1: Internal.Level_, arg2: Internal.Mutable_<Internal.ItemStack>): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DelegatedItemAction_<T extends Internal.IDelegatedActionConfiguration<org.apache.commons.lang3.tuple.Pair<Internal.Level, Internal.Mutable<Internal.ItemStack>>>> = DelegatedItemAction<T>;
    class AcidVentFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type AcidVentFeature_ = AcidVentFeature;
    class StringArgumentType implements Internal.ArgumentType<string> {
        getType(): Internal.StringArgumentType$StringType;
        static string(): Internal.StringArgumentType;
        getExamples(): Internal.Collection<string>;
        static word(): Internal.StringArgumentType;
        static greedyString(): Internal.StringArgumentType;
        static escapeIfRequired(arg0: string): string;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static getString(arg0: Internal.CommandContext_<any>, arg1: string): string;
        parse(arg0: Internal.StringReader_): any;
        get type(): Internal.StringArgumentType$StringType
        get examples(): Internal.Collection<string>
    }
    type StringArgumentType_ = StringArgumentType;
    interface ClipContext$ShapeGetter {
        abstract get(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        (arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos, arg3: Internal.CollisionContext): Internal.VoxelShape_;
    }
    type ClipContext$ShapeGetter_ = ClipContext$ShapeGetter;
    abstract class WaterAnimal extends Internal.PathfinderMob {
        constructor(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.Level_)
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
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        handleAirSupply(arg0: number): void;
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
    type WaterAnimal_ = WaterAnimal;
    class RaygunItem extends Internal.Item implements Internal.UpdatesStackTags, Internal.AlwaysCombinableOnAnvil {
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
        static getUseTime(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
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
        static getRayPosition(arg0: Internal.ItemStack_): Vec3d;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static hasCharge(arg0: Internal.ItemStack_): boolean;
        static setRayPosition(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: number): void;
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
        static getLerpedRayPosition(arg0: Internal.ItemStack_, arg1: number): Vec3d;
        static setCharge(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        static getCharge(arg0: Internal.ItemStack_): number;
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
        static readonly AMMO: Internal.Predicate<Internal.ItemStack>;
    }
    type RaygunItem_ = RaygunItem;
    interface BlendingStateHolder {
        abstract getTransparencyType(): Internal.TransparencyType;
        abstract setTransparencyType(arg0: Internal.TransparencyType_): void;
        get transparencyType(): Internal.TransparencyType
        set transparencyType(arg0: Internal.TransparencyType_)
    }
    type BlendingStateHolder_ = BlendingStateHolder;
    class CountPlacement extends Internal.RepeatingPlacement {
        static of(arg0: Internal.IntProvider_): Internal.CountPlacement;
        static of(arg0: number): Internal.CountPlacement;
        static readonly CODEC: Internal.Codec<Internal.CountPlacement>;
    }
    type CountPlacement_ = CountPlacement;
    class BrimstoneNectarItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.List_<any>)
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
    type BrimstoneNectarItem_ = BrimstoneNectarItem;
    class PowerCondition extends Internal.EntityCondition<Internal.PowerSourceConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        check(arg0: Internal.PowerSourceConfiguration_, arg1: Internal.Entity_): boolean;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type PowerCondition_ = PowerCondition;
    interface LoggingEventBuilder {
        abstract addKeyValue(arg0: string, arg1: Internal.Supplier_<any>): this;
        abstract addMarker(arg0: org.slf4j.Marker_): this;
        abstract setMessage(arg0: Internal.Supplier_<string>): this;
        abstract log(arg0: string, ...arg1: any[]): void;
        abstract log(): void;
        abstract log(arg0: string, arg1: any): void;
        abstract addArgument(arg0: Internal.Supplier_<any>): this;
        abstract setMessage(arg0: string): this;
        abstract log(arg0: string, arg1: any, arg2: any): void;
        abstract addKeyValue(arg0: string, arg1: any): this;
        abstract log(arg0: string): void;
        abstract setCause(arg0: Internal.Throwable_): this;
        abstract log(arg0: Internal.Supplier_<string>): void;
        abstract addArgument(arg0: any): this;
        set message(arg0: Internal.Supplier_<string>)
        set message(arg0: string)
        set cause(arg0: Internal.Throwable_)
    }
    type LoggingEventBuilder_ = LoggingEventBuilder;
    abstract class TogglePowerFactory$Simple <T extends Internal.TogglePowerConfiguration> extends Internal.TogglePowerFactory<T> {
    }
    type TogglePowerFactory$Simple_<T extends Internal.TogglePowerConfiguration> = TogglePowerFactory$Simple<T>;
    interface ItemStackExtensions {
        abstract connector_useOn(arg0: Internal.UseOnContext_): InteractionResult;
        (arg0: Internal.UseOnContext): InteractionResult_;
    }
    type ItemStackExtensions_ = ItemStackExtensions;
    class NativeImage implements pigcart.particlerain.mixin.access.NativeImageAccessor, Internal.AutoCloseable, Internal.NativeImageAccessor, xyz.flirora.caxton.mixin.NativeImageAccessor {
        constructor(arg0: Internal.NativeImage$Format_, arg1: number, arg2: number, arg3: boolean)
        constructor(arg0: number, arg1: number, arg2: boolean)
        applyToAllPixels(arg0: Internal.IntUnaryOperator_): void;
        getPixelRGBA(arg0: number, arg1: number): number;
        getPixelsRGBA(): number[];
        copyFrom(arg0: Internal.NativeImage_): void;
        copyRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        flipY(): void;
        getPointer(): number;
        static read(arg0: Internal.InputStream_): Internal.NativeImage;
        downloadTexture(arg0: number, arg1: boolean): void;
        copyRect(arg0: Internal.NativeImage_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        setPixelLuminance(arg0: number, arg1: number, arg2: number): void;
        static read(arg0: number[]): Internal.NativeImage;
        writeToFile(arg0: Internal.Path_): void;
        static read(arg0: Internal.NativeImage$Format_, arg1: Internal.InputStream_): Internal.NativeImage;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        writeToFile(arg0: Internal.File_): void;
        getHeight(): number;
        resizeSubRectTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_): void;
        static read(arg0: Internal.NativeImage$Format_, arg1: Internal.ByteBuffer_): Internal.NativeImage;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        untrack(): void;
        getGreenOrLuminance(arg0: number, arg1: number): number;
        getWidth(): number;
        downloadDepthBuffer(arg0: number): void;
        copyFromFont(arg0: Internal.STBTTFontinfo_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blendPixel(arg0: number, arg1: number, arg2: number): void;
        drawPixels(): void;
        getLuminanceOrAlpha(arg0: number, arg1: number): number;
        getRedOrLuminance(arg0: number, arg1: number): number;
        mappedCopy(arg0: Internal.IntUnaryOperator_): this;
        getBlueOrLuminance(arg0: number, arg1: number): number;
        static callInit$caxton_$md$2a2e30$0(arg0: Internal.NativeImage$Format_, arg1: number, arg2: number, arg3: boolean, arg4: number): Internal.NativeImage;
        callCheckAllocated(): void;
        static callInit(format: Internal.NativeImage$Format_, width: number, height: number, useStb: boolean, pointer: number): Internal.NativeImage;
        format(): Internal.NativeImage$Format;
        upload(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        setPixelRGBA(arg0: number, arg1: number, arg2: number): void;
        close(): void;
        /**
         * @deprecated
        */
        makePixelArray(): number[];
        getPixels(): number;
        static read(arg0: Internal.ByteBuffer_): Internal.NativeImage;
        asByteArray(): number[];
        get pixelsRGBA(): number[]
        get pointer(): number
        get height(): number
        get width(): number
        get pixels(): number
        pixels: number;
    }
    type NativeImage_ = NativeImage;
    interface VibrationSystem {
        abstract getVibrationUser(): Internal.VibrationSystem$User;
        getGameEventFrequency(arg0: Internal.GameEvent_): number;
        abstract getVibrationData(): Internal.VibrationSystem$Data;
        getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
        getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        get vibrationUser(): Internal.VibrationSystem$User
        get vibrationData(): Internal.VibrationSystem$Data
        readonly VIBRATION_FREQUENCY_FOR_EVENT: {[key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 7, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 5, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 11, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 12, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 15, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 13, [key: Internal.GameEvent]: 7, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 4, [key: Internal.GameEvent]: 13, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 11, [key: Internal.GameEvent]: 6, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 8, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 1, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 14, [key: Internal.GameEvent]: 2, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 5, [key: Internal.GameEvent]: 9, [key: Internal.GameEvent]: 10, [key: Internal.GameEvent]: 13, [key: Internal.GameEvent]: 3, [key: Internal.GameEvent]: 5};
        readonly RESONANCE_EVENTS: Internal.GameEvent[];
    }
    type VibrationSystem_ = VibrationSystem;
    class SpellModificationBuilder$ModifiedServerCastCompleteCallback extends Internal.Record {
        constructor(getLevel: Internal.Level_, getSpellLevel: number, getEntity: Internal.LivingEntity_, getPlayerMagicData: Internal.MagicData_, getCancelled: boolean)
        getLevel(): Internal.Level;
        getCancelled(): boolean;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getPlayerMagicData(): Internal.MagicData;
        get level(): Internal.Level
        get cancelled(): boolean
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get playerMagicData(): Internal.MagicData
    }
    type SpellModificationBuilder$ModifiedServerCastCompleteCallback_ = SpellModificationBuilder$ModifiedServerCastCompleteCallback;
    interface ExecutorService extends Internal.Executor {
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract isShutdown(): boolean;
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract submit<T>(arg0: Internal.Callable_<T>): Internal.Future<T>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdown(): void;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): Internal.Future<T>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract isTerminated(): boolean;
        get shutdown(): boolean
        get terminated(): boolean
    }
    type ExecutorService_ = ExecutorService;
    class BodyRotationControl implements Internal.Control {
        constructor(arg0: Internal.Mob_)
        clientTick(): void;
    }
    type BodyRotationControl_ = BodyRotationControl;
    abstract class TamableAnimal extends Internal.Animal implements Internal.OwnableEntity {
        constructor(arg0: Internal.EntityType_<Internal.TamableAnimal>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isOrderedToSit(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isInSittingPose(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        setTame(arg0: boolean): void;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        tame(arg0: Player_): void;
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
        setInSittingPose(arg0: boolean): void;
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
        setOwnerUUID(arg0: Internal.UUID_): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setOrderedToSit(arg0: boolean): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        reassessTameGoals(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getOwnerUUID(): Internal.UUID;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isTame(): boolean;
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
        isOwnedBy(arg0: Internal.LivingEntity_): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        spawnTamingParticles(arg0: boolean): void;
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
        wantsToAttack(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get orderedToSit(): boolean
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        get inSittingPose(): boolean
        set tame(arg0: boolean)
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
        set inSittingPose(arg0: boolean)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        set ownerUUID(arg0: Internal.UUID_)
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set orderedToSit(arg0: boolean)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ownerUUID(): Internal.UUID
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get tame(): boolean
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
        static readonly DATA_FLAGS_ID: Internal.EntityDataAccessor<number>;
        static readonly DATA_OWNERUUID_ID: Internal.EntityDataAccessor<Internal.Optional<Internal.UUID>>;
    }
    type TamableAnimal_ = TamableAnimal;
    interface ChannelProgressivePromise extends Internal.ChannelProgressiveFuture, Internal.ChannelPromise, Internal.ProgressivePromise<void> {
        abstract awaitUninterruptibly(): this;
        abstract isSuccess(): boolean;
        abstract sync(): this;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract await(): this;
        abstract trySuccess(): boolean;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract getNow(): void;
        abstract cause(): Internal.Throwable;
        abstract isVoid(): boolean;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract setUncancellable(): boolean;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): void;
        abstract trySuccess(arg0: void): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract setProgress(arg0: number, arg1: number): this;
        abstract setSuccess(): this;
        abstract setSuccess(arg0: void): this;
        abstract unvoid(): this;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract isDone(): boolean;
        abstract syncUninterruptibly(): this;
        abstract cancel(arg0: boolean): boolean;
        abstract channel(): io.netty.channel.Channel;
        abstract setSuccess(arg0: void): Internal.ProgressivePromise<void>;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract isCancellable(): boolean;
        abstract tryProgress(arg0: number, arg1: number): boolean;
        abstract get(): void;
        get success(): boolean
        get now(): void
        get "void"(): boolean
        get cancelled(): boolean
        set success(arg0: void)
        set failure(arg0: Internal.Throwable_)
        get done(): boolean
        set success(arg0: void)
        get cancellable(): boolean
    }
    type ChannelProgressivePromise_ = ChannelProgressivePromise;
    class TickEvent$LevelTickEvent extends Internal.TickEvent {
        constructor()
        constructor(arg0: Internal.LogicalSide_, arg1: Internal.TickEvent$Phase_, arg2: Internal.Level_, arg3: Internal.BooleanSupplier_)
        haveTime(): boolean;
        readonly level: Internal.Level;
    }
    type TickEvent$LevelTickEvent_ = TickEvent$LevelTickEvent;
    class BlockItem extends Internal.Item implements Internal.IExtendedItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): Internal.SoundEvent;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setArmorToughness(armorToughness: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        setDigSpeed(speed: number): void;
        setAttackSpeed(attackSpeed: number): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        getBlock(): Internal.Block;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        static readonly BLOCK_STATE_TAG: "BlockStateTag";
        static readonly BLOCK_ENTITY_TAG: "BlockEntityTag";
    }
    type BlockItem_ = BlockItem;
    interface InputReplacementTransformer {
        abstract transform(arg0: Internal.RecipeKJS_, arg1: Internal.ReplacementMatch_, arg2: Internal.InputReplacement_, arg3: Internal.InputReplacement_): any;
        (arg0: Internal.RecipeKJS, arg1: Internal.ReplacementMatch, arg2: Internal.InputReplacement, arg3: Internal.InputReplacement): any;
    }
    type InputReplacementTransformer_ = InputReplacementTransformer;
    class ModifyHarvestConfiguration extends Internal.Record implements Internal.IValueModifyingPowerConfiguration {
        constructor(modifiers: Internal.ListConfiguration_<Internal.ConfiguredModifier<any>>, condition: Internal.Holder_<Internal.ConfiguredBlockCondition<any, any>>, allow: boolean)
        modifiers(): Internal.ListConfiguration<Internal.ConfiguredModifier<any>>;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        allow(): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        condition(): Internal.Holder<Internal.ConfiguredBlockCondition<any, any>>;
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
        static readonly CODEC: Internal.Codec<Internal.ModifyHarvestConfiguration>;
    }
    type ModifyHarvestConfiguration_ = ModifyHarvestConfiguration;
    class DungeonWallTorch extends Internal.HorizontalDirectionalBlock {
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
        static readonly LIGHT_EMISSION: Internal.ToIntFunction<Internal.BlockState>;
    }
    type DungeonWallTorch_ = DungeonWallTorch;
    class ListConfiguration <T> implements Internal.IDynamicFeatureConfiguration, Internal.IStreamConfiguration<T> {
        constructor(arg0: Internal.Iterable_<T>)
        constructor(...arg0: T[])
        isConfigurationValid(): boolean;
        static modifierCodec(arg0: string): Internal.MapCodec<Internal.ListConfiguration<Internal.ConfiguredModifier<any>>>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        static of<T>(...arg0: T[]): Internal.ListConfiguration<T>;
        static mapCodec<T>(arg0: Internal.Codec_<T>, arg1: string, arg2: string): Internal.MapCodec<Internal.ListConfiguration<T>>;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        static codec<T>(arg0: Internal.Codec_<T>, arg1: string, arg2: string): Internal.Codec<Internal.ListConfiguration<T>>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        static optionalCodec<T>(arg0: Internal.Codec_<Internal.Optional<T>>, arg1: string, arg2: string): Internal.Codec<Internal.ListConfiguration<T>>;
        getMissingBinds(): Internal.List<string>;
        static optionalMapCodec<T>(arg0: Internal.Codec_<Internal.Optional<T>>, arg1: string, arg2: string): Internal.MapCodec<Internal.ListConfiguration<T>>;
        static attributeCodec(arg0: string): Internal.MapCodec<Internal.ListConfiguration<Internal.AttributeModifier>>;
        entries(): Internal.List<T>;
        getContent(): Internal.List<T>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        get content(): Internal.List<T>
        static readonly MODIFIER_CODEC: Internal.MapCodec<Internal.ListConfiguration<Internal.ConfiguredModifier<any>>>;
        static readonly ATTRIBUTE_CODEC: Internal.MapCodec<Internal.ListConfiguration<Internal.AttributeModifier>>;
    }
    type ListConfiguration_<T> = ListConfiguration<T>;
    class FossilFeature extends Internal.Feature<Internal.FossilFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.FossilFeatureConfiguration>)
    }
    type FossilFeature_ = FossilFeature;
    abstract class Entity extends Internal.CapabilityProvider<Internal.Entity> implements Internal.EntityAccess, Internal.IForgeEntity, Internal.EntityKJS, Internal.ExtensionHolder, Internal.AccessorEntity, Internal.RollEntity, Internal.SubmergableEntity, Internal.IsInsideStructureTracker$Access, Internal.EntityHook, Internal.EntityAccessor, Internal.Nameable, Internal.DynamicLightSource, Internal.AttachmentTargetImpl, Internal.IEntityJS, com.lowdragmc.lowdraglib.core.mixins.accessor.EntityAccessor, Internal.Cullable, Internal.CommandSource, Internal.MagneticEntityAccessor, Internal.MovingEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        handler$dch000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        setCulled(value: boolean): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        handler$dkf000$entityjs$canAddPassenger(pPassenger: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        handler$dkf000$entityjs$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        getAttachmentProgress(arg0: number): number;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        getBlockY(): number;
        doABarrelRoll$setRolling(rolling: boolean): void;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        handler$dkf000$entityjs$getSwimSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        isIgnoringBlockTriggers(): boolean;
        handler$dch000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        onFlap(): void;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        handler$dkf000$entityjs$isPickable(cir: Internal.CallbackInfoReturnable_<any>): void;
        canSprint(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        handler$dkf000$entityjs$onClientRemoval(ci: Internal.CallbackInfo_): void;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        abstract addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        doABarrelRoll$setRoll(roll: number): void;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        handler$dln000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getName(): Internal.Component;
        handler$dkf000$entityjs$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        isSubmergedInLoosely(arg0: Internal.TagKey_<any>): boolean;
        onGround(): boolean;
        getControlledVehicle(): this;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        modifyReturnValue$zzj000$additionalentityattributes$additionalEntityAttributes$getMaxAir(arg0: number): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        handler$dkf000$entityjs$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        postMagnetJump(): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        handler$dkf000$entityjs$onFlap(ci: Internal.CallbackInfo_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Player_): void;
        handler$doe000$unionlib$updateFluidOnEyes_inject_head(ci: Internal.CallbackInfo_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        handler$dkf000$entityjs$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        callIsBeingRainedOn(): boolean;
        doWaterSplashEffect(): void;
        getTeam(): Internal.Team;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        doABarrelRoll$changeElytraLook(pitch: number, yaw: number, roll: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        setTicksFrozen(arg0: number): void;
        handler$doe000$unionlib$updateFluidOnEyes_inject_tail(ci: Internal.CallbackInfo_): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        handler$dch000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isCulled(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        processPortalCooldown(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        handler$dkf000$entityjs$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        mergeNbt(tag: Internal.CompoundTag_): this;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        handler$dkf000$entityjs$playerTouch(pPlayer: Player_, ci: Internal.CallbackInfo_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        fluidHeights(): Internal.Object2DoubleMap<any>;
        isUnderWater(): boolean;
        handler$dkf000$entityjs$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        stopRiding(): void;
        handler$dkf000$entityjs$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        handler$dkf000$entityjs$rideTick(ci: Internal.CallbackInfo_): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        handler$dkf000$entityjs$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        handleInsidePortal(arg0: BlockPos_): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        handler$dkf000$entityjs$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        playSound(arg0: Internal.SoundEvent_): void;
        handler$dkf000$entityjs$isInvulnerableTo(pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        makeBoundingBox(): Internal.AABB;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        getFirstTick(): boolean;
        getVehicle(): this;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        doABarrelRoll$isRolling(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        localvar$cbc000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): this;
        handler$dch000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        handler$zpc000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        handler$doe000$unionlib$updateInWaterStateAndDoFluidPushing_inject_head(cir: Internal.CallbackInfoReturnable_<any>): void;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        handler$dkf000$entityjs$move(pType: Internal.MoverType_, pPos: Vec3d_, ci: Internal.CallbackInfo_): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        canRide(arg0: Internal.Entity_): boolean;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        getOnPos(arg0: number): BlockPos;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): this;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        interact(arg0: Player_, arg1: Internal.InteractionHand_): InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        handler$dkf000$entityjs$positionRider(pPassenger: Internal.Entity_, pCallback: Internal.Entity$MoveFunction_, ci: Internal.CallbackInfo_): void;
        handler$dkf000$entityjs$getSwimSplashSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        handler$dkf000$entityjs$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        getSoundSource(): Internal.SoundSource;
        addPassenger(arg0: Internal.Entity_): void;
        removeAfterChangingDimensions(): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getSharedFlag(arg0: number): boolean;
        sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        handler$dlf000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        abstract defineSynchedData(): void;
        nextStep(): number;
        isInvisible(): boolean;
        checkInsideBlocks(): void;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        getY(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        createHoverEvent(): Internal.HoverEvent;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        handler$dkf000$entityjs$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        handler$dch000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        canChangeDirection(): boolean;
        handler$dkf000$entityjs$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        doABarrelRoll$changeElytraLook(pitch: number, yaw: number, roll: number, sensitivity: Internal.Sensitivity_, mouseDelta: number): void;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        setTimeout(): void;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        isOutOfCamera(): boolean;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        isCrouching(): boolean;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        abstract readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handler$dkf000$entityjs$repositionEntityAfterLoad(cir: Internal.CallbackInfoReturnable_<any>): void;
        handleDamageEvent(arg0: DamageSource_): void;
        handler$dkf000$entityjs$getBlockSpeedFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkf000$entityjs$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): this;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): this;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        handler$dkf000$entityjs$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        isMoving(): boolean;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        processFlappingMovement(): void;
        handler$dch000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        entityJs$getTypeId(): string;
        getFireImmuneTicks(): number;
        getFacing(): Internal.Direction;
        setMagneticDeltaY(arg0: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        handler$dkf000$entityjs$getBlockJumpFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkf000$entityjs$isFlapping(cir: Internal.CallbackInfoReturnable_<any>): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        fluidInEyes(): Internal.FluidState;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getFluidHeightLoosely(arg0: Internal.TagKey_<any>): number;
        getFluidJumpThreshold(): number;
        unsetRemoved(): void;
        isInvisibleTo(arg0: Player_): boolean;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        handler$dkf000$entityjs$entityJs$ignoreExplosion(cir: Internal.CallbackInfoReturnable_<any>): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): this;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$dkf000$entityjs$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        repositionEntityAfterLoad(): boolean;
        handler$dpa000$unionlib$iTick2(ci: Internal.CallbackInfo_): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        isNoGravity(): boolean;
        sdl$getLuminance(): number;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setMagneticDeltaZ(arg0: number): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        setRemainingFireTicks(arg0: number): void;
        handler$dch000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        getUuid(): Internal.UUID;
        spawn(): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        getSwimSplashSound(): Internal.SoundEvent;
        isOnPortalCooldown(): boolean;
        playSwimSound(arg0: number): void;
        handler$dkf000$entityjs$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        animateHurt(arg0: number): void;
        handler$dkf000$entityjs$onInteract(pPlayer: Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        setExtension(key: any, value: any): void;
        isAlwaysTicking(): boolean;
        handler$dkf000$entityjs$lavaHurt(ci: Internal.CallbackInfo_): void;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        handler$dlf000$irons_spellbooks$setTicksFrozen(arg0: number, arg1: Internal.CallbackInfo_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        getBbWidth(): number;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        handler$dkf000$entityjs$stopRiding(ci: Internal.CallbackInfo_): void;
        addDeltaMovement(arg0: Vec3d_): void;
        handler$dkf000$entityjs$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        handler$dch000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        canUpdate(): boolean;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPercentFrozen(): number;
        getPickResult(): Internal.ItemStack;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        handler$dkf000$entityjs$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        handler$dpa000$unionlib$iTick1(ci: Internal.CallbackInfo_): void;
        doABarrelRoll$getRoll(tickDelta: number): number;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        handler$dkf000$entityjs$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        localvar$bgk000$lionfishapi$fluidCollision(arg0: Vec3d_): Vec3d;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        getPassengersRidingOffset(): number;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        discard(): void;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        handler$dlf000$irons_spellbooks$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        handler$zpc001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        acceptsSuccess(): boolean;
        handler$zcf000$apoli$pushOutOfBlocks(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        handler$dkf000$entityjs$entityJs$tick(ci: Internal.CallbackInfo_): void;
        setNoGravity(arg0: boolean): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        getMagneticDeltaZ(): number;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        sdl$resetDynamicLight(): void;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        handler$dkf000$entityjs$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        handler$dkf000$entityjs$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getMagneticDeltaY(): number;
        doABarrelRoll$getRoll(): number;
        handler$dch001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        isForcedVisible(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playEntityOnFireExtinguishedSound(): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        handler$dkf000$entityjs$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set culled(value: boolean)
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set magneticAttachmentFace(arg0: Internal.Direction_)
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        set outOfCamera(value: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get swimSound(): Internal.SoundEvent
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get culled(): boolean
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get permissionLevel(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get outOfCamera(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get customName(): Internal.Component
        get moving(): boolean
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get fireImmuneTicks(): number
        get facing(): Internal.Direction
        set magneticDeltaY(arg0: number)
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set magneticDeltaZ(arg0: number)
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get percentFrozen(): number
        get pickResult(): Internal.ItemStack
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get magneticDeltaZ(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get passenger(): boolean
        get magneticAttachmentFace(): Internal.Direction
        get flapping(): boolean
        get viewScale(): number
        set motionX(x: number)
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get magneticDeltaY(): number
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get blockJumpFactor(): number
        get forcedVisible(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        xRotO: number;
        isInsidePortal: boolean;
        boardingCooldown: number;
        forgeFluidTypeHeight: Internal.Object2DoubleMap<Internal.FluidType>;
        static readonly ENTITY_COUNTER: 3434;
        wasInPowderSnow: boolean;
        verticalCollision: boolean;
        nextStep: number;
        static readonly DATA_POSE: Internal.EntityDataAccessor<Internal.Pose>;
        static readonly TOTAL_AIR_SUPPLY: 300;
        fallDistance: number;
        wasTouchingWater: boolean;
        static readonly BREATHING_DISTANCE_BELOW_EYES: 0.11111111;
        blocksBuilding: boolean;
        walkDist: number;
        noCulling: boolean;
        wasEyeInWater: boolean;
        /**
         * @deprecated
        */
        fluidHeight: Internal.Object2DoubleMap<Internal.TagKey<Internal.Fluid>>;
        firstTick: boolean;
        stuckSpeedMultiplier: Vec3d;
        age: number;
        yo: number;
        static readonly FLAG_GLOWING: 6;
        readonly entityData: Internal.SynchedEntityData;
        invulnerableTime: number;
        horizontalCollision: boolean;
        level: Internal.Level;
        wasOnFire: boolean;
        sodiumdynamiclights$luminance: number;
        static readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: 0.999999;
        flyDist: number;
        mainSupportingBlockPos: Internal.Optional<BlockPos>;
        static readonly DEFAULT_BB_HEIGHT: 1.8;
        static readonly DATA_SHARED_FLAGS_ID: Internal.EntityDataAccessor<number>;
        hasImpulse: boolean;
        xOld: number;
        walkDistO: number;
        static readonly UUID_TAG: "UUID";
        static readonly DEFAULT_BB_WIDTH: 0.6;
        yOld: number;
        static readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: 0.2;
        static readonly FREEZE_HURT_FREQUENCY: 40;
        static readonly FLAG_ONFIRE: 0;
        static readonly BASE_TICKS_REQUIRED_TO_FREEZE: 140;
        verticalCollisionBelow: boolean;
        zOld: number;
        portalTime: number;
        static readonly FLAG_FALL_FLYING: 7;
        static readonly PASSENGERS_TAG: "Passengers";
        hurtMarked: boolean;
        isInPowderSnow: boolean;
        fluidInEyes: Internal.FluidState;
        portalEntrancePos: BlockPos;
        static readonly MAX_ENTITY_TAG_COUNT: 1024;
        xo: number;
        zo: number;
        stringUUID: string;
        yRotO: number;
        readonly random: Internal.RandomSource;
        fluidHeights: Internal.Object2DoubleMap<any>;
        static readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: 0.500001;
        static readonly BOARDING_COOLDOWN: 60;
        uuid: Internal.UUID;
        minorHorizontalCollision: boolean;
        moveDist: number;
        noPhysics: boolean;
        static readonly ID_TAG: "id";
    }
    type Entity_ = Entity;
    class ClientboundRespawnPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ResourceKey_<Internal.DimensionType>, arg1: Internal.ResourceKey_<Internal.Level>, arg2: number, arg3: Internal.GameType_, arg4: Internal.GameType_, arg5: boolean, arg6: boolean, arg7: number, arg8: Internal.Optional_<Internal.GlobalPos>, arg9: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getPortalCooldown(): number;
        getSeed(): number;
        getPlayerGameType(): Internal.GameType;
        getLastDeathLocation(): Internal.Optional<Internal.GlobalPos>;
        isSkippable(): boolean;
        shouldKeep(arg0: number): boolean;
        getDimension(): Internal.ResourceKey<Internal.Level>;
        getDimensionType(): Internal.ResourceKey<Internal.DimensionType>;
        getPreviousPlayerGameType(): Internal.GameType;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isFlat(): boolean;
        isDebug(): boolean;
        get portalCooldown(): number
        get seed(): number
        get playerGameType(): Internal.GameType
        get lastDeathLocation(): Internal.Optional<Internal.GlobalPos>
        get skippable(): boolean
        get dimension(): Internal.ResourceKey<Internal.Level>
        get dimensionType(): Internal.ResourceKey<Internal.DimensionType>
        get previousPlayerGameType(): Internal.GameType
        get flat(): boolean
        get debug(): boolean
        static readonly KEEP_ENTITY_DATA: 2;
        static readonly KEEP_ALL_DATA: 3;
        static readonly KEEP_ATTRIBUTES: 1;
    }
    type ClientboundRespawnPacket_ = ClientboundRespawnPacket;
}
declare namespace me.jellysquid.mods.sodium.client.gui.widgets {
    abstract class AbstractWidget implements Internal.NarratableEntry, Internal.GuiEventListener, Internal.Renderable {
        charTyped(arg0: string, arg1: number): boolean;
        isHovered(): boolean;
        isFocused(): boolean;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        setFocused(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        isActive(): boolean;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): Internal.ComponentPath;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        abstract render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        get hovered(): boolean
        get focused(): boolean
        set focused(arg0: boolean)
        get active(): boolean
        get tabOrderGroup(): number
        get currentFocusPath(): Internal.ComponentPath
        get rectangle(): Internal.ScreenRectangle
    }
    type AbstractWidget_ = AbstractWidget;
}
declare namespace pigcart.particlerain.mixin.access {
    interface NativeImageAccessor {
        abstract callCheckAllocated(): void;
        abstract getPixels(): number;
        get pixels(): number
    }
    type NativeImageAccessor_ = NativeImageAccessor;
}
