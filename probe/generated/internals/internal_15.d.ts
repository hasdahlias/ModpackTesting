/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ContextUtils$EntityFluidStateContext {
        constructor(entity: Internal.LivingEntity_, fluidState: Internal.FluidState_)
        /**
         * The living entity
        */
        readonly entity: Internal.LivingEntity;
        /**
         * The fluid state associated with the living entity
        */
        readonly fluidState: Internal.FluidState;
    }
    type ContextUtils$EntityFluidStateContext_ = ContextUtils$EntityFluidStateContext;
    class CustomMapData$Type <T extends Internal.CustomMapData<any>> extends Internal.Record {
        constructor(id: ResourceLocation_, factory: Internal.Supplier_<T>)
        id(): ResourceLocation;
        get(mapData: Internal.MapItemSavedData_): T;
        factory(): Internal.Supplier<T>;
    }
    type CustomMapData$Type_<T extends Internal.CustomMapData<any>> = CustomMapData$Type<T>;
    class CastingItem extends Internal.Item implements Internal.IMultihandWeapon {
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
    type CastingItem_ = CastingItem;
    class PowerLoadEvent$Post extends Internal.PowerLoadEvent {
        constructor()
        constructor(arg0: ResourceLocation_, arg1: Internal.JsonElement_, arg2: Internal.ConfiguredPower_<any, any>)
        getAdditionalData(arg0: string): Internal.JsonElement;
        getPower(): Internal.ConfiguredPower<any, any>;
        get power(): Internal.ConfiguredPower<any, any>
    }
    type PowerLoadEvent$Post_ = PowerLoadEvent$Post;
    class ItemStackSet implements Internal.Iterable<Internal.ItemStack> {
        constructor()
        constructor(...items: Internal.ItemStack_[])
        constructor(initialSize: number)
        add(stack: Internal.ItemStack_): void;
        size(): number;
        forEach(action: Internal.Consumer_<Internal.ItemStack>): void;
        contains(stack: Internal.ItemStack_): boolean;
        addItem(item: Internal.Item_): void;
        toList(): Internal.List<Internal.ItemStack>;
        toArray(): Internal.ItemStack[];
        remove(stack: Internal.ItemStack_): void;
        getFirst(): Internal.ItemStack;
        isEmpty(): boolean;
        iterator(): Internal.Iterator<Internal.ItemStack>;
        spliterator(): Internal.Spliterator<Internal.ItemStack>;
        get first(): Internal.ItemStack
        get empty(): boolean
    }
    type ItemStackSet_ = ItemStackSet;
    abstract class ForwardingList <E> extends Internal.ForwardingCollection<E> implements Internal.List<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        get(arg0: number): E;
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
        subList(arg0: number, arg1: number): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        listIterator(arg0: number): Internal.ListIterator<E>;
        abstract iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<E>;
        lastIndexOf(arg0: any): number;
    }
    type ForwardingList_<E> = ForwardingList<E>;
    interface ShortPredicate extends Internal.Predicate<number>, Internal.IntPredicate {
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        abstract test(arg0: number): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        negate(): this;
        or(arg0: Internal.ShortPredicate_): this;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        and(arg0: Internal.ShortPredicate_): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type ShortPredicate_ = ShortPredicate;
    class ExpirableValue <T> {
        constructor(arg0: T, arg1: number)
        static codec<T>(arg0: Internal.Codec_<T>): Internal.Codec<Internal.ExpirableValue<T>>;
        canExpire(): boolean;
        static of<T>(arg0: T): Internal.ExpirableValue<T>;
        static of<T>(arg0: T, arg1: number): Internal.ExpirableValue<T>;
        getValue(): T;
        hasExpired(): boolean;
        tick(): void;
        getTimeToLive(): number;
        get value(): T
        get timeToLive(): number
    }
    type ExpirableValue_<T> = ExpirableValue<T>;
    interface GameEventListener$Holder <T extends Internal.GameEventListener> {
        abstract getListener(): T;
        get listener(): T
        (): T;
    }
    type GameEventListener$Holder_<T extends Internal.GameEventListener> = GameEventListener$Holder<T>;
    class ModifyGrindstonePower$ResultType extends Internal.Enum<Internal.ModifyGrindstonePower$ResultType> {
        static values(): Internal.ModifyGrindstonePower$ResultType[];
        static valueOf(arg0: string): Internal.ModifyGrindstonePower$ResultType;
        static readonly SPECIFIED: Internal.ModifyGrindstonePower$ResultType;
        static readonly FROM_BOTTOM: Internal.ModifyGrindstonePower$ResultType;
        static readonly FROM_TOP: Internal.ModifyGrindstonePower$ResultType;
        static readonly UNCHANGED: Internal.ModifyGrindstonePower$ResultType;
    }
    type ModifyGrindstonePower$ResultType_ = "from_top" | "unchanged" | "from_bottom" | "specified" | ModifyGrindstonePower$ResultType;
    /**
     * Invoked when a block is destroyed by a player.
    */
    class BlockBrokenEventJS extends Internal.PlayerEventJS {
        constructor(entity: Internal.ServerPlayer_, level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, xp: any_)
        /**
         * The experience dropped by the block. Always `0` on Fabric.
        */
        getXp(): number;
        /**
         * The player that broke the block.
        */
        getEntity(): Internal.Entity;
        /**
         * Sets the experience dropped by the block. Only works on Forge.
        */
        setXp(xp: number): void;
        /**
         * The block that was broken.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * The experience dropped by the block. Always `0` on Fabric.
        */
        get xp(): number
        /**
         * The player that broke the block.
        */
        get entity(): Internal.Entity
        /**
         * Sets the experience dropped by the block. Only works on Forge.
        */
        set xp(xp: number)
        /**
         * The block that was broken.
        */
        get block(): Internal.BlockContainerJS
    }
    type BlockBrokenEventJS_ = BlockBrokenEventJS;
    abstract class Stages {
        constructor(p: Player_)
        static overrideCreation(event: Internal.Consumer_<Internal.StageCreationEvent>): void;
        static create(player: Player_): Internal.Stages;
        replace(stages: Internal.Collection_<string>): void;
        static removed(event: Internal.Consumer_<Internal.StageChangeEvent>): void;
        abstract getAll(): Internal.Collection<string>;
        static added(event: Internal.Consumer_<Internal.StageChangeEvent>): void;
        abstract addNoUpdate(arg0: string): boolean;
        add(stage: string): boolean;
        static invokeAdded(stages: Internal.Stages_, stage: string): void;
        abstract removeNoUpdate(arg0: string): boolean;
        has(stage: string): boolean;
        static invokeRemoved(stages: Internal.Stages_, stage: string): void;
        static get(player: Player_): Internal.Stages;
        toggle(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        remove(stage: string): boolean;
        sync(): void;
        clear(): boolean;
        get all(): Internal.Collection<string>
        readonly player: Player;
    }
    type Stages_ = Stages;
    class GlassBlock extends Internal.AbstractGlassBlock {
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
    type GlassBlock_ = GlassBlock;
    class OffsetConfiguration <T> extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(value: Internal.Holder_<T>, x: number, y: number, z: number)
        isConfigurationValid(): boolean;
        z(): number;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        y(): number;
        x(): number;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        value(): Internal.Holder<T>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        asBlockPos(): BlockPos;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        static codec<T>(arg0: Internal.MapCodec_<Internal.Holder<T>>): Internal.Codec<Internal.OffsetConfiguration<T>>;
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
    type OffsetConfiguration_<T> = OffsetConfiguration<T>;
    class BatchRenderElement <T> extends Internal.Record {
        constructor(ingredient: T, x: number, y: number)
        y(): number;
        x(): number;
        ingredient(): T;
    }
    type BatchRenderElement_<T> = BatchRenderElement<T>;
    class Pillager extends Internal.AbstractIllager implements Internal.InventoryCarrier, Internal.CrossbowAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Pillager>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getInventory(): Internal.SimpleContainer;
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
        setChargingCrossbow(arg0: boolean): void;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isChargingCrossbow(): boolean;
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
        getProjectileShotVector(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): Vector3f;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        static pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
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
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
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
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.Projectile_, arg3: number): void;
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
        shootCrossbowProjectile(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_, arg2: Internal.Projectile_, arg3: number, arg4: number): void;
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
        performCrossbowAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        onCrossbowAttackPerformed(): void;
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
        get inventory(): Internal.SimpleContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set chargingCrossbow(arg0: boolean)
        set y(y: number)
        get living(): boolean
        get chargingCrossbow(): boolean
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
    type Pillager_ = Pillager;
    class ModifyFogTypeConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(to: Internal.FogType_, from: Internal.Optional_<Internal.FogType>)
        isConfigurationValid(): boolean;
        to(): Internal.FogType;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        from(): Internal.Optional<Internal.FogType>;
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
        static readonly CODEC: Internal.Codec<Internal.ModifyFogTypeConfiguration>;
    }
    type ModifyFogTypeConfiguration_ = ModifyFogTypeConfiguration;
    interface MemoryTrackingRenderBuffers {
        abstract getMiscBufferAllocatedSize(): number;
        abstract freeAndDeleteBuffers(): void;
        abstract getEntityBufferAllocatedSize(): number;
        abstract getMaxBegins(): number;
        get miscBufferAllocatedSize(): number
        get entityBufferAllocatedSize(): number
        get maxBegins(): number
    }
    type MemoryTrackingRenderBuffers_ = MemoryTrackingRenderBuffers;
    interface IJeiBrewingRecipe {
        abstract getBrewingSteps(): number;
        abstract getPotionOutput(): Internal.ItemStack;
        abstract getIngredients(): Internal.List<Internal.ItemStack>;
        abstract getPotionInputs(): Internal.List<Internal.ItemStack>;
        getUid(): ResourceLocation;
        get brewingSteps(): number
        get potionOutput(): Internal.ItemStack
        get ingredients(): Internal.List<Internal.ItemStack>
        get potionInputs(): Internal.List<Internal.ItemStack>
        get uid(): ResourceLocation
    }
    type IJeiBrewingRecipe_ = IJeiBrewingRecipe;
    class AttributeEndecBuilder <T> {
        constructor(arg0: Internal.Endec_<T>, arg1: Internal.SerializationAttribute_)
        orElseIf(arg0: Internal.Endec_<T>, arg1: Internal.SerializationAttribute_): this;
        orElse(arg0: Internal.Endec_<T>): Internal.Endec<T>;
    }
    type AttributeEndecBuilder_<T> = AttributeEndecBuilder<T>;
    class TinyMap <K, V> extends Internal.Record {
        constructor(map: Internal.TinyMap_<K, V>)
        constructor(entries: any_<K, V>[])
        constructor(collection: Internal.Collection_<any>)
        entries(): any[];
        isEmpty(): boolean;
        static ofMap<K, V>(map: Internal.Map_<K, V>): Internal.TinyMap<K, V>;
        get empty(): boolean
    }
    type TinyMap_<K, V> = TinyMap<K, V>;
    class SpriteContents$FrameInfo implements Internal.SpriteContentsFrameInfoAccessor, Internal.SpriteContentsAnimationFrameAccessor, me.jellysquid.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor {
        constructor(arg0: number, arg1: number)
        getTime(): number;
        getIndex(): number;
        get time(): number
        get index(): number
        readonly index: number;
        readonly time: number;
    }
    type SpriteContents$FrameInfo_ = SpriteContents$FrameInfo;
    interface OutputReplacement {
        replaceOutput(recipe: Internal.RecipeJS_, match: Internal.ReplacementMatch_, original: Internal.OutputReplacement_): any;
        transform(transformer: Internal.OutputReplacementTransformer_): Internal.OutputReplacementTransformer$Replacement;
        of(o: any): this;
    }
    type OutputReplacement_ = OutputItem_ | OutputReplacement;
    class FlowerBlock extends Internal.BushBlock implements Internal.SuspiciousEffectHolder {
        constructor(arg0: Internal.MobEffect_, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.Supplier_<Internal.MobEffect>, arg1: number, arg2: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getSuspiciousEffect(): Internal.MobEffect;
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
        static tryGet(arg0: Internal.ItemLike_): Internal.SuspiciousEffectHolder;
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
        getEffectDuration(): number;
        static getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get suspiciousEffect(): Internal.MobEffect
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get effectDuration(): number
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 3.0;
    }
    type FlowerBlock_ = FlowerBlock;
    class CandyRuinsFeature extends Internal.UndergroundRuinsFeature {
        constructor(arg0: Internal.Codec_<any>)
    }
    type CandyRuinsFeature_ = CandyRuinsFeature;
    abstract class SimpleJsonResourceReloadListener extends Internal.SimplePreparableReloadListener<Internal.Map<ResourceLocation, Internal.JsonElement>> {
        constructor(arg0: Internal.Gson_, arg1: string)
        static scanDirectory(arg0: Internal.ResourceManager_, arg1: string, arg2: Internal.Gson_, arg3: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        getName(): string;
        getPreparedPath(arg0: ResourceLocation_): ResourceLocation;
        prepare(arg0: Internal.ResourceManager_, arg1: Internal.ProfilerFiller_): Internal.Map<ResourceLocation, Internal.JsonElement>;
        get name(): string
    }
    type SimpleJsonResourceReloadListener_ = SimpleJsonResourceReloadListener;
    class EffectsChangedTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.MobEffectsPredicate_, arg2: Internal.ContextAwarePredicate_)
        static hasEffects(arg0: Internal.MobEffectsPredicate_): Internal.EffectsChangedTrigger$TriggerInstance;
        matches(arg0: Internal.ServerPlayer_, arg1: Internal.LootContext_): boolean;
        static gotEffectsFrom(arg0: Internal.EntityPredicate_): Internal.EffectsChangedTrigger$TriggerInstance;
    }
    type EffectsChangedTrigger$TriggerInstance_ = EffectsChangedTrigger$TriggerInstance;
    class SetBaseModifierOperation extends Internal.ModifierOperation {
        constructor()
    }
    type SetBaseModifierOperation_ = SetBaseModifierOperation;
    class ThrownProjectileItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Function_<Player, Internal.ThrowableItemProjectile>, arg2: number, arg3: number, arg4: number)
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
    type ThrownProjectileItem_ = ThrownProjectileItem;
    class PowerLoadEvent extends Internal.Event {
        constructor()
        constructor(arg0: ResourceLocation_, arg1: Internal.JsonElement_)
        getId(): ResourceLocation;
        getOriginal(): Internal.JsonElement;
        get id(): ResourceLocation
        get original(): Internal.JsonElement
    }
    type PowerLoadEvent_ = PowerLoadEvent;
    class WardenEntitySensor extends Internal.NearestLivingEntitySensor<Internal.Warden> {
        constructor()
        doTick(arg0: Internal.ServerLevel_, arg1: Internal.Warden_): void;
    }
    type WardenEntitySensor_ = WardenEntitySensor;
    class MemoryStatus extends Internal.Enum<Internal.MemoryStatus> {
        static valueOf(arg0: string): Internal.MemoryStatus;
        static values(): Internal.MemoryStatus[];
        static readonly VALUE_PRESENT: Internal.MemoryStatus;
        static readonly VALUE_ABSENT: Internal.MemoryStatus;
        static readonly REGISTERED: Internal.MemoryStatus;
    }
    type MemoryStatus_ = "value_present" | MemoryStatus | "value_absent" | "registered";
    class CaveBookItem extends Internal.Item {
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
    type CaveBookItem_ = CaveBookItem;
    interface AnimationStackAccessor {
        abstract mobplayeranimator$getLayers(): Internal.ArrayList<Internal.Pair<number, Internal.IAnimation>>;
        (): Internal.ArrayList_<Internal.Pair<number, Internal.IAnimation>>;
    }
    type AnimationStackAccessor_ = AnimationStackAccessor;
    interface EntityAccessor {
        abstract callIsBeingRainedOn(): boolean;
        (): boolean;
    }
    type EntityAccessor_ = EntityAccessor;
    class ServerboundSetCreativeModeSlotPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.ItemStack_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getItem(): Internal.ItemStack;
        getSlotNum(): number;
        isSkippable(): boolean;
        get item(): Internal.ItemStack
        get slotNum(): number
        get skippable(): boolean
    }
    type ServerboundSetCreativeModeSlotPacket_ = ServerboundSetCreativeModeSlotPacket;
    class FluidState extends Internal.StateHolder<Internal.Fluid, Internal.FluidState> implements Internal.IForgeFluidState {
        constructor(arg0: Internal.Fluid_, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<Internal.FluidState>)
        getType(): Internal.Fluid;
        isSource(): boolean;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getHeight(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        createLegacyBlock(): Internal.BlockState;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        holder(): Internal.Holder<Internal.Fluid>;
        isSourceOfType(arg0: Internal.Fluid_): boolean;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>;
        getAmount(): number;
        isRandomlyTicking(): boolean;
        getOwnHeight(): number;
        tick(arg0: Internal.Level_, arg1: BlockPos_): void;
        is(arg0: Internal.HolderSet_<Internal.Fluid>): boolean;
        getDripParticle(): Internal.ParticleOptions;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        shouldRenderBackwardUpFace(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        is(arg0: Internal.Fluid_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        canBeReplacedWith(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Fluid_, arg3: Internal.Direction_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        get type(): Internal.Fluid
        get source(): boolean
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get tags(): Internal.Stream<Internal.TagKey<Internal.Fluid>>
        get amount(): number
        get randomlyTicking(): boolean
        get ownHeight(): number
        get dripParticle(): Internal.ParticleOptions
        /**
         * @deprecated
        */
        get explosionResistance(): number
        static readonly AMOUNT_FULL: 8;
        static readonly AMOUNT_MAX: 9;
        static readonly CODEC: Internal.Codec<Internal.FluidState>;
    }
    type FluidState_ = FluidState;
    class ChunkAccess$TicksToSave extends Internal.Record {
        constructor(blocks: Internal.SerializableTickContainer_<Internal.Block>, fluids: Internal.SerializableTickContainer_<Internal.Fluid>)
        fluids(): Internal.SerializableTickContainer<Internal.Fluid>;
        blocks(): Internal.SerializableTickContainer<Internal.Block>;
    }
    type ChunkAccess$TicksToSave_ = ChunkAccess$TicksToSave;
    class StructField <S, F> {
        constructor(arg0: string, arg1: Internal.Endec_<F>, arg2: Internal.Function_<S, F>)
        constructor(arg0: string, arg1: Internal.Endec_<F>, arg2: Internal.Function_<S, F>, arg3: Internal.Supplier_<F>)
        constructor(arg0: string, arg1: Internal.Endec_<F>, arg2: Internal.Function_<S, F>, arg3: F)
        encodeField(arg0: io.wispforest.endec.SerializationContext_, arg1: io.wispforest.endec.Serializer_<any>, arg2: Internal.Serializer$Struct_, arg3: S): void;
        decodeField(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Deserializer_<any>, arg2: Internal.Deserializer$Struct_): F;
    }
    type StructField_<S, F> = StructField<S, F>;
    class SoundSource extends Internal.Enum<Internal.SoundSource> {
        static valueOf(arg0: string): Internal.SoundSource;
        static values(): Internal.SoundSource[];
        getName(): string;
        get name(): string
        static readonly HOSTILE: Internal.SoundSource;
        static readonly MUSIC: Internal.SoundSource;
        static readonly RECORDS: Internal.SoundSource;
        static readonly NEUTRAL: Internal.SoundSource;
        static readonly MASTER: Internal.SoundSource;
        static readonly BLOCKS: Internal.SoundSource;
        static readonly PLAYERS: Internal.SoundSource;
        static readonly WEATHER: Internal.SoundSource;
        static readonly AMBIENT: Internal.SoundSource;
        static readonly VOICE: Internal.SoundSource;
    }
    type SoundSource_ = SoundSource | "records" | "weather" | "neutral" | "music" | "players" | "blocks" | "ambient" | "master" | "voice" | "hostile";
    class infernal_forge extends Internal.PickaxeItem {
        constructor(arg0: Internal.Tier_, arg1: Internal.Item$Properties_)
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
        setAttackSpeed(attackSpeed: number): void;
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
    type infernal_forge_ = infernal_forge;
    class EvasionEffect extends Internal.CustomDescriptionMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        static doEffect(arg0: Internal.LivingEntity_, arg1: DamageSource_): boolean;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type EvasionEffect_ = EvasionEffect;
    class Frustum implements Internal.ViewportProvider {
        constructor(arg0: Internal.Frustum_)
        constructor(arg0: Matrix4f_, arg1: Matrix4f_)
        prepare(arg0: number, arg1: number, arg2: number): void;
        isVisible(arg0: Internal.AABB_): boolean;
        offsetToFullyIncludeCameraCube(arg0: number): this;
        sodium$createViewport(): Internal.Viewport;
        static readonly OFFSET_STEP: 4;
    }
    type Frustum_ = Frustum;
    class ModifyJumpConfiguration extends Internal.Record implements Internal.IValueModifyingPowerConfiguration {
        constructor(modifiers: Internal.ListConfiguration_<Internal.ConfiguredModifier<any>>, condition: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>)
        modifiers(): Internal.ListConfiguration<Internal.ConfiguredModifier<any>>;
        isConfigurationValid(): boolean;
        condition(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
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
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ModifyJumpConfiguration>;
    }
    type ModifyJumpConfiguration_ = ModifyJumpConfiguration;
    class ChunkDataEvent extends Internal.ChunkEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.CompoundTag_)
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.LevelAccessor_, arg2: Internal.CompoundTag_)
        getData(): Internal.CompoundTag;
        get data(): Internal.CompoundTag
    }
    type ChunkDataEvent_ = ChunkDataEvent;
    abstract class AgeableMob extends Internal.PathfinderMob {
        constructor(arg0: Internal.EntityType_<Internal.AgeableMob>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
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
        getAge(): number;
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
        ageUp(arg0: number, arg1: boolean): void;
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
        setAge(arg0: number): void;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        abstract getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
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
        ageBoundaryReached(): void;
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
        canBreed(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        ageUp(arg0: number): void;
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
        get age(): number
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
        set age(arg0: number)
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
        forcedAge: number;
        static readonly BABY_START_AGE: -24000;
        age: number;
        forcedAgeTimer: number;
    }
    type AgeableMob_ = AgeableMob;
    class ClientLevel extends Internal.Level implements Internal.BiomeSeedProvider, Internal.ClientLevelKJS, Internal.ChunkTrackerHolder {
        constructor(arg0: Internal.ClientPacketListener_, arg1: any_, arg2: Internal.ResourceKey_<Internal.Level>, arg3: Internal.Holder_<Internal.DimensionType>, arg4: number, arg5: number, arg6: Internal.Supplier_<Internal.ProfilerFiller>, arg7: Internal.LevelRenderer_, arg8: boolean, arg9: number)
        handler$dok003$unionlib$init_inject(ci: Internal.CallbackInfo_): void;
        tickNonPassenger(arg0: Internal.Entity_): void;
        effects(): Internal.DimensionSpecialEffects;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Player;
        dayTime(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        handler$cie000$fabric_lifecycle_events_v1$tickWorldAfterBlockEntities(ci: Internal.CallbackInfo_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        unload(arg0: Internal.LevelChunk_): void;
        getSectionYFromSectionIndex(arg0: number): number;
        tick(arg0: Internal.BooleanSupplier_): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        handler$dmh000$entityculling$tickEntity(entity: Internal.Entity_, info: Internal.CallbackInfo_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playSound(arg0: Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
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
        getEntityCount(): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        getAllMapData(): Internal.Map<string, Internal.MapItemSavedData>;
        setDayTime(arg0: number): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        handleBlockChangedAck(arg0: number): void;
        getMinBuildHeight(): number;
        clearTintCaches(): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        setGameTime(arg0: number): void;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Player;
        queueLightUpdate(arg0: Internal.Runnable_): void;
        calculateBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getDisplayName(): Internal.Component;
        getBlockStatePredictionHandler(): Internal.BlockStatePredictionHandler;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        putNonPlayerEntity(arg0: number, arg1: Internal.Entity_): void;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getSkyFlashTime(): number;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        entitiesForRendering(): Internal.Iterable<Internal.Entity>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getHeight(): number;
        getSkyDarken(arg0: number): number;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        addMapData(arg0: Internal.Map_<string, Internal.MapItemSavedData>): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        tickEntities(): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getChunkSource(): Internal.ClientChunkCache;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        static getBiomeSeed(arg0: Internal.ClientLevel_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        setScoreboard(arg0: Internal.Scoreboard_): void;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getDimension(): ResourceLocation;
        getName(): Internal.Component;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        getCloudColor(arg0: number): Vec3d;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getPlayerByUUID(arg0: Internal.UUID_): Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getSectionsCount(): number;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        handler$dok000$unionlib$addPlayer_inject(pPlayerId: number, pPlayerEntity: Internal.AbstractClientPlayer_, ci: Internal.CallbackInfo_): void;
        static get(arg0: Internal.ClientLevel_): Internal.ChunkTracker;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getBestNeighborSignal(arg0: BlockPos_): number;
        sodium$getBiomeSeed(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_, arg5: Internal.Block_, arg6: Internal.BlockPos$MutableBlockPos_): void;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getSkyColor(arg0: Vec3d_, arg1: number): Vec3d;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        setServerSimulationDistance(arg0: number): void;
        isWaterAt(arg0: BlockPos_): boolean;
        isLightUpdateQueueEmpty(): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        sodium$getTracker(): Internal.ChunkTracker;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        removeEntity(arg0: number, arg1: Internal.Entity$RemovalReason_): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        overrideMapData(arg0: string, arg1: Internal.MapItemSavedData_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        tell(message: Internal.Component_): void;
        setServerVerifiedBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): void;
        pollLightUpdates(): void;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getServerSimulationDistance(): number;
        onChunkLoaded(arg0: Internal.ChunkPos_): void;
        addPlayer(arg0: number, arg1: Internal.AbstractClientPlayer_): void;
        handler$cje000$particlerain$hookDoAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_, arg5: Internal.Block_, arg6: Internal.BlockPos$MutableBlockPos_, arg7: Internal.CallbackInfo_, arg8: Internal.BlockState_): void;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        syncBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Vec3d_): void;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        isOverworld(): boolean;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        runCommand(command: string): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        getStarBrightness(arg0: number): number;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get entityCount(): number
        get allMapData(): Internal.Map<string, Internal.MapItemSavedData>
        set dayTime(arg0: number)
        get minBuildHeight(): number
        set gameTime(arg0: number)
        get displayName(): Internal.Component
        get blockStatePredictionHandler(): Internal.BlockStatePredictionHandler
        get maxBuildHeight(): number
        get skyFlashTime(): number
        get height(): number
        get minSection(): number
        get chunkSource(): Internal.ClientChunkCache
        set scoreboard(arg0: Internal.Scoreboard_)
        get dimension(): ResourceLocation
        get name(): Internal.Component
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get moonBrightness(): number
        set serverSimulationDistance(arg0: number)
        get lightUpdateQueueEmpty(): boolean
        get side(): Internal.ScriptType
        get entities(): Internal.EntityArrayList
        get serverSimulationDistance(): number
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get maxLightLevel(): number
        get overworld(): boolean
        readonly tickingEntities: Internal.EntityTickList;
        readonly tintCaches: Internal.Object2ObjectArrayMap<Internal.ColorResolver, Internal.BlockTintCache>;
    }
    type ClientLevel_ = ClientLevel;
    class ZombieJSBuilder extends Internal.PathfinderMobBuilder<any> {
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
        /**
         * @param isSunSensitive Sets whether the mob should burn in daylight
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.isSunSensitive(false);
         * ```
        */
        isSunSensitive(isSunSensitive: boolean): this;
        /**
         * @param isSunSensitive Sets whether the mob should convert in water to another mob
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.convertsInWater(false);
         * ```
        */
        convertsInWater(convertsInWater: boolean): this;
        createObject(): any;
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
        */
        defaultBehaviourGoals(defaultBehaviourGoals: boolean): this;
    }
    type ZombieJSBuilder_ = ZombieJSBuilder;
    class PermissionNode <T> {
        constructor(arg0: ResourceLocation_, arg1: Internal.PermissionType_<T>, arg2: Internal.PermissionNode$PermissionResolver_<T>, ...arg3: any_<any>[])
        constructor(arg0: string, arg1: string, arg2: Internal.PermissionType_<T>, arg3: Internal.PermissionNode$PermissionResolver_<T>, ...arg4: any_<any>[])
        getDefaultResolver(): Internal.PermissionNode$PermissionResolver<T>;
        getReadableName(): Internal.Component;
        setInformation(arg0: Internal.Component_, arg1: Internal.Component_): Internal.PermissionNode<any>;
        getDynamics(): any[];
        getType(): Internal.PermissionType<T>;
        getNodeName(): string;
        getDescription(): Internal.Component;
        get defaultResolver(): Internal.PermissionNode$PermissionResolver<T>
        get readableName(): Internal.Component
        get dynamics(): any[]
        get type(): Internal.PermissionType<T>
        get nodeName(): string
        get description(): Internal.Component
    }
    type PermissionNode_<T> = PermissionNode<T>;
    class DeserializationContext {
        constructor(arg0: ResourceLocation_, arg1: Internal.LootDataManager_)
        deserializeConditions(arg0: Internal.JsonArray_, arg1: string, arg2: Internal.LootContextParamSet_): Internal.LootItemCondition[];
        getAdvancementId(): ResourceLocation;
        get advancementId(): ResourceLocation
    }
    type DeserializationContext_ = DeserializationContext;
    interface JarMetadata {
        abstract name(): string;
        abstract version(): string;
        from(arg0: Internal.SecureJar_, ...arg1: Internal.Path_[]): this;
        fromFileName(arg0: Internal.Path_, arg1: Internal.Set_<string>, arg2: Internal.List_<Internal.SecureJar$Provider>): Internal.SimpleJarMetadata;
        abstract descriptor(): Internal.ModuleDescriptor;
        readonly LEADING_DOTS: Internal.Pattern;
        readonly NUMBERLIKE_PARTS: Internal.Pattern;
        readonly MODULE_VERSION: Internal.Pattern;
        readonly KEYWORD_PARTS: Internal.Pattern;
        readonly TRAILING_DOTS: Internal.Pattern;
        readonly ILLEGAL_KEYWORDS: ["abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while"];
        readonly DASH_VERSION: Internal.Pattern;
        readonly NON_ALPHANUM: Internal.Pattern;
        readonly REPEATING_DOTS: Internal.Pattern;
    }
    type JarMetadata_ = JarMetadata;
    class ClientChatEvent extends Internal.Event {
        constructor()
        constructor(arg0: string)
        getMessage(): string;
        setMessage(arg0: string): void;
        getOriginalMessage(): string;
        get message(): string
        set message(arg0: string)
        get originalMessage(): string
    }
    type ClientChatEvent_ = ClientChatEvent;
    class ForbiddenSymlinkInfo extends Internal.Record {
        constructor(arg0: Internal.Path_, arg1: Internal.Path_)
        link(): Internal.Path;
        target(): Internal.Path;
    }
    type ForbiddenSymlinkInfo_ = ForbiddenSymlinkInfo;
    class MothDustItem extends Internal.Item {
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
    type MothDustItem_ = MothDustItem;
    interface SmithingRecipe extends Internal.Recipe<Internal.Container> {
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract isBaseIngredient(arg0: Internal.ItemStack_): boolean;
        abstract assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        abstract matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract isTemplateIngredient(arg0: Internal.ItemStack_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        abstract isAdditionIngredient(arg0: Internal.ItemStack_): boolean;
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
    }
    type SmithingRecipe_ = SmithingRecipe;
    class LocationCheckCondition implements org.mesdag.advjs.predicate.condition.ICondition {
        constructor()
        /**
         * The location predicate of this check.
        */
        location(arg0: Internal.Consumer_<Internal.LocationPredicateBuilder>): this;
        /**
         * The offset block pos of this check.
        */
        offset(arg0: BlockPos_): this;
    }
    type LocationCheckCondition_ = LocationCheckCondition;
    class MapItemSavedData$HoldingPlayer implements Internal.IHoldingPlayerExtension {
        constructor(arg0: Internal.MapItemSavedData_, arg1: Player_)
        moonlight$setCustomDataDirty(type: Internal.CustomMapData$Type_<any>, dirtySetter: Internal.Consumer_<any>): void;
        modifyReturnValue$dfn000$moonlight$addExtraPacketData(packet: Internal.Packet_<any>, mapId: number): Internal.Packet<any>;
        moonlight$setCustomMarkersDirty(): void;
        nextUpdatePacket(arg0: number): Internal.Packet<any>;
        markColorsDirty(arg0: number, arg1: number): void;
        handler$dfn000$moonlight$initializeDirty(mapItemSavedData: Internal.MapItemSavedData_, player: Player_, ci: Internal.CallbackInfo_): void;
        handler$dfn000$moonlight$lockData(x: number, z: number, ci: Internal.CallbackInfo_): void;
        handler$dfn000$moonlight$checkLocked(mapId: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dfn000$moonlight$sanityCheck(x: number, z: number, ci: Internal.CallbackInfo_): void;
        readonly player: Player;
        readonly f_77961_: Internal.MapItemSavedData;
        step: number;
    }
    type MapItemSavedData$HoldingPlayer_ = MapItemSavedData$HoldingPlayer;
    class Sniffer extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        canDig(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getBrain(): Internal.Brain<Internal.Sniffer>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        onDiggingComplete(arg0: boolean): this;
        isTempted(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        transitionTo(arg0: Internal.Sniffer$State_): this;
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
        canSniff(): boolean;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        canPlayDiggingSound(): boolean;
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
        isPanicking(): boolean;
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
        calculateDigPosition(): Internal.Optional<BlockPos>;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        brainProvider(): Internal.Brain$Provider<Internal.Sniffer>;
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
        isSearching(): boolean;
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
        get brain(): Internal.Brain<Internal.Sniffer>
        set defaultMovementSpeedMultiplier(speed: number)
        get tempted(): boolean
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
        get panicking(): boolean
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
        get searching(): boolean
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
        readonly diggingAnimationState: Internal.AnimationState;
        readonly risingAnimationState: Internal.AnimationState;
        readonly scentingAnimationState: Internal.AnimationState;
        readonly feelingHappyAnimationState: Internal.AnimationState;
        readonly sniffingAnimationState: Internal.AnimationState;
    }
    type Sniffer_ = Sniffer;
    abstract class BlockBehaviour implements Internal.AbstractBlockAccessor, Internal.BlockKJS, Internal.FeatureElement {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getSettings(): Internal.BlockBehaviour$Properties;
        setDestroySpeed(v: number): void;
        abstract asItem(): Internal.Item;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        getMaxVerticalOffset(): number;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        defaultMapColor(): Internal.MapColor;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        setNameKey(key: string): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        abstract asBlock(): Internal.Block;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setExplosionResistance(arg0: number): void;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        requiredFeatures(): Internal.FeatureFlagSet;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get settings(): Internal.BlockBehaviour$Properties
        set destroySpeed(v: number)
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get maxHorizontalOffset(): number
        get maxVerticalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set blockBuilder(b: Internal.BlockBuilder_)
        set nameKey(key: string)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        jumpFactor: number;
        explosionResistance: number;
        static readonly UPDATE_SHAPE_ORDER: Internal.Direction[];
        isRandomlyTicking: boolean;
        drops: ResourceLocation;
        speedFactor: number;
        hasCollision: boolean;
        soundType: SoundType;
        readonly requiredFeatures: Internal.FeatureFlagSet;
        readonly dynamicShape: boolean;
        friction: number;
        readonly properties: Internal.BlockBehaviour$Properties;
    }
    type BlockBehaviour_ = BlockBehaviour;
    interface OwnableEntity {
        abstract getOwnerUUID(): Internal.UUID;
        abstract level(): Internal.EntityGetter;
        getOwner(): Internal.LivingEntity;
        get ownerUUID(): Internal.UUID
        get owner(): Internal.LivingEntity
    }
    type OwnableEntity_ = OwnableEntity;
    class AnimatableManager <T extends Internal.GeoAnimatable> {
        constructor(arg0: Internal.GeoAnimatable_)
        tryTriggerAnimation(arg0: string, arg1: string): void;
        getFirstTickTime(): number;
        updatedAt(arg0: number): void;
        getAnimationControllers(): Internal.Map<string, Internal.AnimationController<T>>;
        getLastUpdateTime(): number;
        isFirstTick(): boolean;
        getData<D>(arg0: Internal.DataTicket_<D>): D;
        startedAt(arg0: number): void;
        stopTriggeredAnimation(arg0: string): void;
        clearSnapshotCache(): void;
        addController(arg0: Internal.AnimationController_<any>): void;
        removeController(arg0: string): void;
        getBoneSnapshotCollection(): Internal.Map<string, Internal.BoneSnapshot>;
        setData<D>(arg0: Internal.DataTicket_<D>, arg1: D): void;
        tryTriggerAnimation(arg0: string): void;
        stopTriggeredAnimation(arg0: string, arg1: string): void;
        get firstTickTime(): number
        get animationControllers(): Internal.Map<string, Internal.AnimationController<T>>
        get lastUpdateTime(): number
        get firstTick(): boolean
        get boneSnapshotCollection(): Internal.Map<string, Internal.BoneSnapshot>
    }
    type AnimatableManager_<T extends Internal.GeoAnimatable> = AnimatableManager<T>;
    class VillagerProfessionBuilder extends Internal.BuilderBase<Internal.VillagerProfession> {
        constructor(i: ResourceLocation_)
        workSound(t: Internal.SoundEvent_): this;
        createObject(): Internal.VillagerProfession;
        poiTypeTag(t: ResourceLocation_): this;
        poiType(t: ResourceLocation_): this;
        requestedItems(t: Internal.Item_[]): this;
        secondaryPoi(t: Internal.Block_[]): this;
    }
    type VillagerProfessionBuilder_ = VillagerProfessionBuilder;
    interface DoubleStream$DoubleMapMultiConsumer {
        abstract accept(arg0: number, arg1: Internal.DoubleConsumer_): void;
        (arg0: number, arg1: Internal.DoubleConsumer): void;
    }
    type DoubleStream$DoubleMapMultiConsumer_ = DoubleStream$DoubleMapMultiConsumer;
    abstract class AbstractGolem extends Internal.PathfinderMob {
        constructor(arg0: Internal.EntityType_<Internal.AbstractGolem>, arg1: Internal.Level_)
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
    type AbstractGolem_ = AbstractGolem;
    class Tadpole extends Internal.AbstractFish {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
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
        getFacing(): Internal.Direction;
        brainProvider(): Internal.Brain$Provider<Internal.Tadpole>;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        getBrain(): Internal.Brain<Internal.Tadpole>;
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
        get brain(): Internal.Brain<Internal.Tadpole>
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
        static HITBOX_WIDTH: 0.4;
        static readonly SENSOR_TYPES: [Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>];
        static ticksToBeFrog: 24000;
        static readonly MEMORY_TYPES: [Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>];
        static HITBOX_HEIGHT: 0.3;
    }
    type Tadpole_ = Tadpole;
    class StatusEffectCondition extends Internal.EntityCondition<Internal.StatusEffectConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        check(arg0: Internal.StatusEffectConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type StatusEffectCondition_ = StatusEffectCondition;
    class QuickPlayLog$Type extends Internal.Enum<Internal.QuickPlayLog$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.QuickPlayLog$Type;
        getSerializedName(): string;
        static values(): Internal.QuickPlayLog$Type[];
        get serializedName(): string
        static readonly CODEC: Internal.Codec<Internal.QuickPlayLog$Type>;
        static readonly MULTIPLAYER: Internal.QuickPlayLog$Type;
        static readonly SINGLEPLAYER: Internal.QuickPlayLog$Type;
        static readonly REALMS: Internal.QuickPlayLog$Type;
    }
    type QuickPlayLog$Type_ = QuickPlayLog$Type | "multiplayer" | "realms" | "singleplayer";
    class ForgeEventWrapper extends Internal.Record {
        constructor(name: string, eventBus: Internal.IEventBus_)
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick", handler: (event: Internal.LivingEntityUseItemEvent$Tick) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderBlockScreenEffectEvent", handler: (event: Internal.RenderBlockScreenEffectEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$BossEventProgress", handler: (event: Internal.CustomizeGuiOverlayEvent$BossEventProgress) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent", handler: (event: Internal.FMLConstructModEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent", handler: (event: Internal.RenderHighlightEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventLivingRenderer$SetupRotations", handler: (event: Internal.EventLivingRenderer$SetupRotations) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", handler: (event: Internal.FMLLoadCompleteEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.ProjectileImpactEvent", handler: (event: Internal.ProjectileImpactEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.RegisterEvent", handler: (event: Internal.RegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent", handler: (event: Internal.DataPackRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Expired", handler: (event: Internal.MobEffectEvent$Expired) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent", handler: (event: Internal.ExplosionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.github.L_Ender.lionfishapi.server.event.StandOnFluidEvent", handler: (event: Internal.StandOnFluidEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Post", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ClientCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.SleepingLocationCheckEvent", handler: (event: Internal.SleepingLocationCheckEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent", handler: (event: Internal.PlayerInteractEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.EntityItemPickupEvent", handler: (event: Internal.EntityItemPickupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", handler: (event: Internal.AdvancementEvent$AdvancementEarnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$Clone", handler: (event: Internal.ClientPlayerNetworkEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent", handler: (event: Internal.ViewportEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "dev.shadowsoffire.placebo.registry.RegistryEvent", generic: Special.JavaClass, handler: (event: Internal.RegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Foreground", handler: (event: Internal.ContainerScreenEvent$Render$Foreground) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent", handler: (event: Internal.PlayerContainerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent$Pre", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Block", handler: (event: Internal.RegisterColorHandlersEvent$Block) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppingEvent", handler: (event: Internal.ServerStoppingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeFogColor", handler: (event: Internal.ViewportEvent$ComputeFogColor) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent", handler: (event: Internal.PlayerDestroyItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterRecipeBookCategoriesEvent", handler: (event: Internal.RegisterRecipeBookCategoriesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingSwapItemsEvent", handler: (event: Internal.LivingSwapItemsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn", handler: (event: Internal.MobSpawnEvent$FinalizeSpawn) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AnvilUpdateEvent", handler: (event: Internal.AnvilUpdateEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "dev.shadowsoffire.attributeslib.api.client.GatherEffectScreenTooltipsEvent", handler: (event: Internal.GatherEffectScreenTooltipsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent$SoundSourceEvent", handler: (event: Internal.SoundEvent$SoundSourceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventGetOutlineColor", handler: (event: Internal.EventGetOutlineColor) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemCraftedEvent", handler: (event: Internal.PlayerEvent$ItemCraftedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent", handler: (event: Internal.TickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent$Post", handler: (event: Internal.RenderPlayerEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void): any;
        eventBus(): Internal.IEventBus;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Unload", handler: (event: Internal.LevelEvent$Unload) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", handler: (event: Internal.PlayerInteractEvent$RightClickEmpty) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Background", handler: (event: Internal.ContainerScreenEvent$Render$Background) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: Internal.LivingEvent$LivingJumpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent", handler: (event: Internal.ChunkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterParticleProvidersEvent", handler: (event: Internal.RegisterParticleProvidersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract", handler: (event: Internal.PlayerInteractEvent$EntityInteract) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent", handler: (event: Internal.SpellSelectionManager$SpellSelectionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init", handler: (event: Internal.ScreenEvent$Init) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent", handler: (event: Internal.PermissionGatherEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent", handler: (event: Internal.BlockEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Pre", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.MissingMappingsEvent", handler: (event: Internal.MissingMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Post", handler: (event: Internal.RenderGuiEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.SleepFinishedTimeEvent", handler: (event: Internal.SleepFinishedTimeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed", handler: (event: Internal.ScreenEvent$KeyPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased", handler: (event: Internal.ScreenEvent$KeyReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeModificationEvent", handler: (event: Internal.EntityAttributeModificationEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton", handler: (event: Internal.InputEvent$MouseButton) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.apace100.apoli.integration.PowerLoadEvent", handler: (event: Internal.PowerLoadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$Clone", handler: (event: Internal.PlayerEvent$Clone) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$FarmlandTrampleEvent", handler: (event: Internal.BlockEvent$FarmlandTrampleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry", handler: (event: Internal.DataPackRegistryEvent$NewRegistry) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingSwapItemsEvent$Hands", handler: (event: Internal.LivingSwapItemsEvent$Hands) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent", handler: (event: Internal.SpawnPlacementRegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTravelToDimensionEvent", handler: (event: Internal.EntityTravelToDimensionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterGeometryLoaders", handler: (event: Internal.ModelEvent$RegisterGeometryLoaders) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventLivingRenderer", handler: (event: Internal.EventLivingRenderer) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent", handler: (event: Internal.LevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent", handler: (event: Internal.FMLCommonSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Pre", handler: (event: Internal.RenderGuiEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterGuiOverlaysEvent", handler: (event: Internal.RegisterGuiOverlaysEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Reloading", handler: (event: Internal.ModConfigEvent$Reloading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent", handler: (event: Internal.SpellOnCastEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModProcessEvent", handler: (event: Internal.InterModProcessEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppedEvent", handler: (event: Internal.ServerStoppedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.data.event.GatherDataEvent", handler: (event: Internal.GatherDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent", handler: (event: Internal.PlayerXpEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.eventbus.api.GenericEvent", generic: Special.JavaClass, handler: (event: Internal.GenericEvent) => void): any;
        name(): string;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingHealEvent", handler: (event: Internal.LivingHealEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$CropGrowEvent", handler: (event: Internal.BlockEvent$CropGrowEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingConversionEvent", handler: (event: Internal.LivingConversionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent", handler: (event: Internal.ModelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$LevelTickEvent", handler: (event: Internal.TickEvent$LevelTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Item", handler: (event: Internal.RegisterColorHandlersEvent$Item) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Post", handler: (event: Internal.RenderGuiOverlayEvent$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BlockToolModificationEvent", handler: (event: Internal.BlockEvent$BlockToolModificationEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered", handler: (event: Internal.InputEvent$InteractionKeyMappingTriggered) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$Key", handler: (event: Internal.InputEvent$Key) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Start", handler: (event: Internal.LivingEntityUseItemEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.apace100.apoli.integration.PowerLoadEvent$Post", handler: (event: Internal.PowerLoadEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemSmeltedEvent", handler: (event: Internal.PlayerEvent$ItemSmeltedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterAdditional", handler: (event: Internal.ModelEvent$RegisterAdditional) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled", handler: (event: Internal.ScreenEvent$MouseScrolled) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Pre", handler: (event: Internal.ScreenEvent$MouseDragged$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerLifecycleEvent", handler: (event: Internal.ServerLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent", handler: (event: Internal.TextureStitchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingOut", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingOut) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Stop", handler: (event: Internal.LivingEntityUseItemEvent$Stop) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$AddLayers", handler: (event: Internal.EntityRenderersEvent$AddLayers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingConversionEvent$Post", handler: (event: Internal.LivingConversionEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeCreationEvent", handler: (event: Internal.EntityAttributeCreationEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingIn", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingIn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ComputeFovModifierEvent", handler: (event: Internal.ComputeFovModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent", handler: (event: Internal.InterModEnqueueEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", handler: (event: Internal.LivingEntityUseItemEvent$Finish) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent", handler: (event: Internal.NetworkEvent$GatherLoginPayloadsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Detonate", handler: (event: Internal.ExplosionEvent$Detonate) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Post", handler: (event: Internal.ScreenEvent$MouseScrolled$Post) => void): any;
        onGenericEvent(eventClass: any, genericClass: any, consumer: Internal.GenericForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent", handler: (event: Internal.RenderGuiOverlayEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.AnimalTameEvent", handler: (event: Internal.AnimalTameEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Post", handler: (event: Internal.ScreenEvent$Init$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Save", handler: (event: Internal.LevelEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "top.theillusivec4.curios.api.event.CurioChangeEvent", handler: (event: Internal.CurioChangeEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Pre", handler: (event: Internal.InputEvent$MouseButton$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent", handler: (event: Internal.CurioAttributeModifierEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Post", handler: (event: Internal.ScreenEvent$KeyPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.redspace.ironsspellbooks.api.events.ChangeManaEvent", handler: (event: Internal.ChangeManaEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent$Post", handler: (event: Internal.TextureStitchEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent", handler: (event: Internal.EmbeddiumEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Pre", handler: (event: Internal.ScreenEvent$Render$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.VanillaGameEvent", handler: (event: Internal.VanillaGameEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render", handler: (event: Internal.ScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent", handler: (event: Internal.RegisterClientTooltipComponentFactoriesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent", handler: (event: Internal.ClientPlayerNetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.SleepingTimeCheckEvent", handler: (event: Internal.SleepingTimeCheckEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent", handler: (event: Internal.RenderPlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent", handler: (event: Internal.NetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open", handler: (event: Internal.PlayerContainerEvent$Open) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions", handler: (event: Internal.EntityRenderersEvent$RegisterLayerDefinitions) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent", handler: (event: Internal.LivingEvent$LivingTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.IdMappingEvent", handler: (event: Internal.IdMappingEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AttackEntityEvent", handler: (event: Internal.AttackEntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", handler: (event: Internal.PlayerEvent$BreakSpeed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Post", handler: (event: Internal.ScreenEvent$CharacterTyped$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.PlayLevelSoundEvent", handler: (event: Internal.PlayLevelSoundEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Pre", handler: (event: Internal.ScreenEvent$KeyReleased$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Opening", handler: (event: Internal.ScreenEvent$Opening) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$DebugText", handler: (event: Internal.CustomizeGuiOverlayEvent$DebugText) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent", handler: (event: Internal.PlayerEvent$PlayerRespawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent", handler: (event: Internal.FMLClientSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventRenderSplashText$Pre", handler: (event: Internal.EventRenderSplashText$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ServerChatEvent", handler: (event: Internal.ServerChatEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", handler: (event: Internal.PlayerInteractEvent$EntityInteractSpecific) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Pre", handler: (event: Internal.ScreenEvent$Init$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent", handler: (event: Internal.CalioDynamicRegistryEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent", handler: (event: Internal.PlayerEvent$ItemPickupEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem", handler: (event: Internal.PlayerInteractEvent$RightClickItem) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "com.github.L_Ender.cataclysm.client.event.EventPosePlayerHand", handler: (event: com.github.L_Ender.cataclysm.client.event.EventPosePlayerHand) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "dev.shadowsoffire.placebo.registry.RegistryEvent$Register", generic: Special.JavaClass, handler: (event: Internal.RegistryEvent$Register) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.BuildCreativeModeTabContentsEvent", handler: (event: Internal.BuildCreativeModeTabContentsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent", handler: (event: Internal.CustomizeGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent", handler: (event: Internal.RegisterCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent", handler: (event: Internal.ScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerSleepInBedEvent", handler: (event: Internal.PlayerSleepInBedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged", handler: (event: Internal.ScreenEvent$MouseDragged) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased", handler: (event: Internal.ScreenEvent$MouseButtonReleased) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityMountEvent", handler: (event: Internal.EntityMountEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Loading", handler: (event: Internal.ModConfigEvent$Loading) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingExperienceDropEvent", handler: (event: Internal.LivingExperienceDropEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Remove", handler: (event: Internal.MobEffectEvent$Remove) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.OptionGUIConstructionEvent", handler: (event: Internal.OptionGUIConstructionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddPackFindersEvent", handler: (event: Internal.AddPackFindersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$LoadComplete", handler: (event: Internal.CalioDynamicRegistryEvent$LoadComplete) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent", handler: (event: Internal.EntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent", handler: (event: Internal.ContainerScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$CreateSkullModels", handler: (event: Internal.EntityRenderersEvent$CreateSkullModels) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Post", handler: (event: Internal.InputEvent$MouseButton$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.OptionPageConstructionEvent", handler: (event: Internal.OptionPageConstructionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityJoinLevelEvent", handler: (event: Internal.EntityJoinLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent", handler: (event: Internal.LivingEntityUseItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent", handler: (event: Internal.PlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent", handler: (event: Internal.MobEffectEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Post", handler: (event: Internal.ScreenEvent$Render$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseInput", handler: (event: Internal.ScreenEvent$MouseInput) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.NewRegistryEvent", handler: (event: Internal.NewRegistryEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Post", handler: (event: Internal.ScreenEvent$KeyReleased$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$RenderFog", handler: (event: Internal.ViewportEvent$RenderFog) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Closing", handler: (event: Internal.ScreenEvent$Closing) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "dev.shadowsoffire.attributeslib.api.AttributeChangedValueEvent", handler: (event: Internal.AttributeChangedValueEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent", handler: (event: Internal.ChunkDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent", handler: (event: Internal.ModConfigEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientReloadListenersEvent", handler: (event: Internal.RegisterClientReloadListenersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed", handler: (event: Internal.ScreenEvent$MouseButtonPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent", handler: (event: Internal.SpellPreCastEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource", handler: (event: Internal.EventLivingRenderer$AccessToBufferSource) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent", handler: (event: Internal.MobSpawnEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Pre", handler: (event: Internal.ScreenEvent$CharacterTyped$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", handler: (event: Internal.MobEffectEvent$Applicable) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerWakeUpEvent", handler: (event: Internal.PlayerWakeUpEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterShadersEvent", handler: (event: Internal.RegisterShadersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render", handler: (event: Internal.ContainerScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent", handler: (event: Internal.LivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent", handler: (event: Internal.ModLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventRenderSplashText", handler: (event: Internal.EventRenderSplashText) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingChangeTargetEvent", handler: (event: Internal.LivingChangeTargetEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.client.event.RenderLivingEvent$Post", generic: Special.JavaClass, handler: (event: Internal.RenderLivingEvent$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Start", handler: (event: Internal.ExplosionEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$Initialize", handler: (event: Internal.CalioDynamicRegistryEvent$Initialize) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped", handler: (event: Internal.ScreenEvent$CharacterTyped) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent", handler: (event: Internal.RegisterColorHandlersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyInput", handler: (event: Internal.ScreenEvent$KeyInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ServerCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.maxhenkel.corpse.corelib.death.PlayerDeathEvent", handler: (event: Internal.PlayerDeathEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", handler: (event: Internal.ViewportEvent$ComputeCameraAngles) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent", handler: (event: Internal.ChunkWatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Post", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterNamedRenderTypesEvent", handler: (event: Internal.RegisterNamedRenderTypesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterRenderers", handler: (event: Internal.EntityRenderersEvent$RegisterRenderers) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", handler: (event: Internal.InputEvent$MouseScrollingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.event.AttachCapabilitiesEvent", generic: Special.JavaClass, handler: (event: Internal.AttachCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Load", handler: (event: Internal.LevelEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterKeyMappingsEvent", handler: (event: Internal.RegisterKeyMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent", handler: (event: net.minecraftforge.client.event.sound.SoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.CriticalHitEvent", handler: (event: Internal.CriticalHitEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent", handler: (event: Internal.InputEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent", handler: (event: Internal.EntityRenderersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$ModifyBakingResult", handler: (event: Internal.ModelEvent$ModifyBakingResult) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingKnockBackEvent", handler: (event: Internal.LivingKnockBackEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemEvent", handler: (event: Internal.ItemEvent) => void): any;
        onEvent(eventClass: any, consumer: Internal.ForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty", handler: (event: Internal.PlayerInteractEvent$LeftClickEmpty) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp", handler: (event: Internal.PlayerXpEvent$PickupXp) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: Internal.EnderManAngerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Pre", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.FillBucketEvent", handler: (event: Internal.FillBucketEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Post", handler: (event: Internal.ScreenEvent$MouseDragged$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "com.github.alexthe666.citadel.client.event.EventPosePlayerHand", handler: (event: Internal.EventPosePlayerHand) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Post", handler: (event: Internal.RenderTooltipExtEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Unloading", handler: (event: Internal.ModConfigEvent$Unloading) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Pre", handler: (event: Internal.ScreenEvent$KeyPressed$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.edwinmindcraft.origins.api.event.AutoBadgeEvent", handler: (event: Internal.AutoBadgeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent", handler: (event: Internal.ParallelDispatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Pre", handler: (event: Internal.ScreenEvent$MouseScrolled$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.ShieldBlockEvent", handler: (event: Internal.ShieldBlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent", handler: (event: Internal.RenderTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent$ComputeFov", handler: (event: Internal.ViewportEvent$ComputeFov) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Added", handler: (event: Internal.MobEffectEvent$Added) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre", handler: (event: Internal.RenderGuiOverlayEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent", handler: (event: Internal.RenderGuiEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedOutEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$Reload", handler: (event: Internal.CalioDynamicRegistryEvent$Reload) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", handler: (event: Internal.PlayerEvent$PlayerChangedDimensionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "io.github.edwinmindcraft.calio.api.event.DynamicRegistrationEvent", generic: Special.JavaClass, handler: (event: Internal.DynamicRegistrationEvent) => void): any;
    }
    type ForgeEventWrapper_ = ForgeEventWrapper;
    interface BlockApiLookup <A, C> {
        abstract getProvider(arg0: Internal.Block_): Internal.BlockApiLookup$BlockApiProvider<A, C>;
        registerForBlockEntity<T extends Internal.BlockEntity>(provider: Internal.BiFunction_<T, C, A>, blockEntityType: Internal.BlockEntityType_<T>): void;
        abstract registerSelf(...arg0: Internal.BlockEntityType_<any>[]): void;
        abstract contextClass(): C;
        get<A, C>(lookupId: ResourceLocation_, apiClass: A, contextClass: C): this;
        abstract getId(): ResourceLocation;
        abstract registerFallback(arg0: Internal.BlockApiLookup$BlockApiProvider_<A, C>): void;
        abstract find(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_, arg4: C): A;
        abstract registerForBlockEntities(arg0: Internal.BlockApiLookup$BlockEntityApiProvider_<A, C>, ...arg1: Internal.BlockEntityType_<any>[]): void;
        abstract apiClass(): A;
        find(world: Internal.Level_, pos: BlockPos_, context: C): A;
        abstract registerForBlocks(arg0: Internal.BlockApiLookup$BlockApiProvider_<A, C>, ...arg1: Internal.Block_[]): void;
        get id(): ResourceLocation
    }
    type BlockApiLookup_<A, C> = BlockApiLookup<A, C>;
    interface IForgePackResources {
        isHidden(): boolean;
        getChildren(): Internal.Collection<Internal.PackResources>;
        get hidden(): boolean
        get children(): Internal.Collection<Internal.PackResources>
    }
    type IForgePackResources_ = IForgePackResources;
    interface DoubleToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToLongFunction_ = DoubleToLongFunction;
    class UIEvents$BlockUIEventJS extends Internal.EventJS {
        constructor(level: Internal.Level_, pos: BlockPos_, block: Internal.BlockContainerJS_, player: Player_)
        getLevel(): Internal.Level;
        getPos(): BlockPos;
        getPlayer(): Player;
        getBlock(): Internal.BlockContainerJS;
        get level(): Internal.Level
        get pos(): BlockPos
        get player(): Player
        get block(): Internal.BlockContainerJS
        player: Player;
        pos: BlockPos;
        block: Internal.BlockContainerJS;
        level: Internal.Level;
    }
    type UIEvents$BlockUIEventJS_ = UIEvents$BlockUIEventJS;
    class RuleBasedBlockStateProvider$Rule extends Internal.Record {
        constructor(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: Internal.BlockStateProvider_)
        ifTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        then(): Internal.BlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider$Rule>;
    }
    type RuleBasedBlockStateProvider$Rule_ = RuleBasedBlockStateProvider$Rule;
    interface LevelTimeAccess extends Internal.LevelReader {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        abstract getBiomeManager(): Internal.BiomeManager;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract isClientSide(): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        abstract hasChunk(arg0: number, arg1: number): boolean;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        getMoonBrightness(): number;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getLightEngine(): Internal.LevelLightEngine;
        abstract getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get biomeManager(): Internal.BiomeManager
        get clientSide(): boolean
        get moonPhase(): number
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelTimeAccess_ = LevelTimeAccess;
    class DecimalFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        clone(): any;
        setDecimalSeparator(arg0: string): void;
        getDecimalSeparator(): string;
        setInternationalCurrencySymbol(arg0: string): void;
        getInternationalCurrencySymbol(): string;
        static getAvailableLocales(): Internal.Locale[];
        getNaN(): string;
        getMinusSign(): string;
        getMonetaryDecimalSeparator(): string;
        getCurrency(): Internal.Currency;
        setCurrency(arg0: Internal.Currency_): void;
        getPercent(): string;
        getPerMill(): string;
        setPerMill(arg0: string): void;
        setPercent(arg0: string): void;
        getDigit(): string;
        setMonetaryDecimalSeparator(arg0: string): void;
        setMonetaryGroupingSeparator(arg0: string): void;
        static getInstance(): Internal.DecimalFormatSymbols;
        setMinusSign(arg0: string): void;
        getGroupingSeparator(): string;
        getCurrencySymbol(): string;
        getPatternSeparator(): string;
        static getInstance(arg0: Internal.Locale_): Internal.DecimalFormatSymbols;
        getZeroDigit(): string;
        setNaN(arg0: string): void;
        getExponentSeparator(): string;
        setCurrencySymbol(arg0: string): void;
        setGroupingSeparator(arg0: string): void;
        setZeroDigit(arg0: string): void;
        setDigit(arg0: string): void;
        setPatternSeparator(arg0: string): void;
        setExponentSeparator(arg0: string): void;
        getMonetaryGroupingSeparator(): string;
        getInfinity(): string;
        setInfinity(arg0: string): void;
        set decimalSeparator(arg0: string)
        get decimalSeparator(): string
        set internationalCurrencySymbol(arg0: string)
        get internationalCurrencySymbol(): string
        get availableLocales(): Internal.Locale[]
        get naN(): string
        get minusSign(): string
        get monetaryDecimalSeparator(): string
        get currency(): Internal.Currency
        set currency(arg0: Internal.Currency_)
        get percent(): string
        get perMill(): string
        set perMill(arg0: string)
        set percent(arg0: string)
        get digit(): string
        set monetaryDecimalSeparator(arg0: string)
        set monetaryGroupingSeparator(arg0: string)
        get instance(): Internal.DecimalFormatSymbols
        set minusSign(arg0: string)
        get groupingSeparator(): string
        get currencySymbol(): string
        get patternSeparator(): string
        get zeroDigit(): string
        set naN(arg0: string)
        get exponentSeparator(): string
        set currencySymbol(arg0: string)
        set groupingSeparator(arg0: string)
        set zeroDigit(arg0: string)
        set digit(arg0: string)
        set patternSeparator(arg0: string)
        set exponentSeparator(arg0: string)
        get monetaryGroupingSeparator(): string
        get infinity(): string
        set infinity(arg0: string)
    }
    type DecimalFormatSymbols_ = DecimalFormatSymbols;
    class PreventSleepConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(condition: Internal.Holder_<Internal.ConfiguredBlockCondition<any, any>>, message: string, allowSpawn: boolean)
        message(): string;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
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
        allowSpawn(): boolean;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.PreventSleepConfiguration>;
    }
    type PreventSleepConfiguration_ = PreventSleepConfiguration;
    interface EntityTypeTest <B, T extends B> {
        abstract tryCast(arg0: B): T;
        abstract getBaseClass(): B;
        forClass<B, T extends B>(arg0: T): this;
        get baseClass(): B
    }
    type EntityTypeTest_<B, T extends B> = EntityTypeTest<B, T>;
    class SimpleAttributeSpellBook extends Internal.SpellBook {
        constructor(arg0: number, arg1: SpellRarity_, arg2: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>, arg3: Internal.Item$Properties_)
        constructor(arg0: number, arg1: SpellRarity_, arg2: Internal.Attribute_, arg3: number)
        constructor(arg0: number, arg1: SpellRarity_, arg2: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>)
        constructor(arg0: number, arg1: SpellRarity_, arg2: Internal.Attribute_, arg3: number, arg4: number)
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
    type SimpleAttributeSpellBook_ = SimpleAttributeSpellBook;
    class DragonSittingFlamingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        resetFlameCount(): void;
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>
    }
    type DragonSittingFlamingPhase_ = DragonSittingFlamingPhase;
    class GrindstoneBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
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
        static readonly WALL_EAST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_PIVOT: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly WALL_SOUTH_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_NORTH_SOUTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_NORTH_LEFT_PIVOT: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_LEG: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_ALL_LEGS: Internal.ArrayVoxelShape;
        static readonly CEILING_EAST_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_LEFT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_EAST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly FLOOR_EAST_WEST_GRINDSTONE: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_LEG: Internal.ArrayVoxelShape;
        static readonly FLOOR_NORTH_SOUTH_RIGHT_POST: Internal.ArrayVoxelShape;
        static readonly WALL_WEST_RIGHT_POST: Internal.ArrayVoxelShape;
    }
    type GrindstoneBlock_ = GrindstoneBlock;
    class WaterFluid$Flowing extends Internal.WaterFluid {
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
    type WaterFluid$Flowing_ = WaterFluid$Flowing;
    interface Function10 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function3<T8, T9, T10, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function<T10, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function5<T6, T7, T8, T9, T10, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.BiFunction<T9, T10, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function7<T4, T5, T6, T7, T8, T9, T10, R>>;
        curry(): Internal.Function<T1, Internal.Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function6<T5, T6, T7, T8, T9, T10, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function4<T7, T8, T9, T10, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
    }
    type Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    class LockCode {
        constructor(arg0: string)
        static fromTag(arg0: Internal.CompoundTag_): Internal.LockCode;
        unlocksWith(arg0: Internal.ItemStack_): boolean;
        addToTag(arg0: Internal.CompoundTag_): void;
        static readonly NO_LOCK: Internal.LockCode;
        static readonly TAG_LOCK: "Lock";
    }
    type LockCode_ = LockCode;
    class BlockCrushingRecipe extends Internal.LycheeRecipe<Internal.BlockCrushingContext> implements Internal.BlockKeyRecipe<Internal.BlockCrushingRecipe> {
        constructor(arg0: ResourceLocation_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        matchesFallingBlock(arg0: Internal.BlockState_, arg1: Internal.CompoundTag_): boolean;
        getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        compareTo(arg0: any): number;
        getRemainingItems(arg0: Internal.BlockCrushingContext_): Internal.NonNullList<Internal.ItemStack>;
        matches(arg0: Internal.BlockCrushingContext_, arg1: Internal.Level_): boolean;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        compareTo(arg0: Internal.BlockCrushingRecipe_): number;
        applyPostActions(arg0: Internal.LycheeContext_, arg1: number): void;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getLandingBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get mod(): string
        get special(): boolean
        get allActions(): Internal.Stream<Internal.PostAction>
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get landingBlock(): net.minecraft.advancements.critereon.BlockPredicate
        get incomplete(): boolean
        static readonly ANVIL: net.minecraft.advancements.critereon.BlockPredicate;
    }
    type BlockCrushingRecipe_ = BlockCrushingRecipe;
    class BaseCoralPlantBlock extends Internal.BaseCoralPlantTypeBlock {
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
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 6.0;
    }
    type BaseCoralPlantBlock_ = BaseCoralPlantBlock;
    class HorizontalDirectionalBlockBuilder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): Internal.Block;
        textureAll(tex: string): this;
    }
    type HorizontalDirectionalBlockBuilder_ = HorizontalDirectionalBlockBuilder;
    interface MobAttackWindup {
        abstract bettermobcombat$getAttackCooldown(): number;
        abstract bettermobcombat$hasDelayedUpswing(): boolean;
        isWeaponSwingInProgress(): boolean;
        abstract bettermobcombat$getUpswingTicks(): number;
        abstract bettermobcombat$cancelUpswing(): void;
        abstract bettermobcombat$setDelayedUpswing(arg0: Internal.Runnable_): void;
        abstract bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_, arg1: Internal.BiConsumer_<Internal.Mob, Internal.Entity>): void;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        abstract bettermobcombat$getSwingProgress(): number;
        get weaponSwingInProgress(): boolean
    }
    type MobAttackWindup_ = MobAttackWindup;
    class ClientboundRemoveEntitiesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(...arg0: number[])
        constructor(arg0: Internal.IntList_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        getEntityIds(): Internal.IntList;
        get skippable(): boolean
        get entityIds(): Internal.IntList
    }
    type ClientboundRemoveEntitiesPacket_ = ClientboundRemoveEntitiesPacket;
    class ChatComponent implements Internal.ChatHudAccessor {
        constructor(arg0: Internal.Minecraft_)
        addMessage(arg0: Internal.Component_): void;
        getVisibleMessages(): Internal.List<any>;
        constant$zep000$placebo$unEscapeChatLogNewlines(arg0: string): string;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        getWidth(): number;
        static defaultUnfocusedPct(): number;
        rescaleChat(): void;
        getScale(): number;
        getMessageTagAt(arg0: number, arg1: number): Internal.GuiMessageTag;
        addRecentChat(arg0: string): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        tick(): void;
        getLinesPerPage(): number;
        scrollChat(arg0: number): void;
        getClickedComponentStyleAt(arg0: number, arg1: number): Internal.Style;
        static getHeight(arg0: number): number;
        deleteMessage(arg0: Internal.MessageSignature_): void;
        getRecentChat(): Internal.List<string>;
        addMessage(arg0: Internal.Component_, arg1: Internal.MessageSignature_, arg2: Internal.GuiMessageTag_): void;
        getHeight(): number;
        resetChatScroll(): void;
        static getWidth(arg0: number): number;
        clearMessages(arg0: boolean): void;
        get visibleMessages(): Internal.List<any>
        get width(): number
        get scale(): number
        get linesPerPage(): number
        get recentChat(): Internal.List<string>
        get height(): number
    }
    type ChatComponent_ = ChatComponent;
    class ResourceKeyArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.ResourceKeyArgument<T>> {
        constructor(arg0: Internal.ResourceKeyArgument$Info_<any>, arg1: Internal.ResourceKey_<any>)
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.ResourceKeyArgument<T>, any>;
        readonly f_233292_: Internal.ResourceKeyArgument$Info<any>;
        readonly registryKey: Internal.ResourceKey<Internal.Registry<T>>;
    }
    type ResourceKeyArgument$Info$Template_ = ResourceKeyArgument$Info$Template;
    interface InventoryCarrier {
        abstract getInventory(): Internal.SimpleContainer;
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
        pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
        get inventory(): Internal.SimpleContainer
        (): Internal.SimpleContainer_;
        readonly TAG_INVENTORY: "Inventory";
    }
    type InventoryCarrier_ = InventoryCarrier;
    interface Function15 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function3<T13, T14, T15, R>>;
        curry(): Internal.Function<T1, Internal.Function14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function5<T11, T12, T13, T14, T15, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function8<T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.BiFunction<T14, T15, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function4<T12, T13, T14, T15, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function6<T10, T11, T12, T13, T14, T15, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.Function<T15, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function7<T9, T10, T11, T12, T13, T14, T15, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
    }
    type Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
    interface Function16 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function8<T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry(): Internal.Function<T1, Internal.Function15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry15(): Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Internal.Function<T16, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function3<T14, T15, T16, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function4<T13, T14, T15, T16, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function5<T12, T13, T14, T15, T16, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function7<T10, T11, T12, T13, T14, T15, T16, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function6<T11, T12, T13, T14, T15, T16, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.BiFunction<T15, T16, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
    }
    type Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
    class ClientboundCooldownPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Item_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getItem(): Internal.Item;
        isSkippable(): boolean;
        getDuration(): number;
        get item(): Internal.Item
        get skippable(): boolean
        get duration(): number
    }
    type ClientboundCooldownPacket_ = ClientboundCooldownPacket;
    interface PrivilegedAction <T> {
        abstract run(): T;
        (): T;
    }
    type PrivilegedAction_<T> = PrivilegedAction<T>;
    interface Function13 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
        curry2(): Internal.BiFunction<T1, T2, Internal.Function11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function8<T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function<T13, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function7<T7, T8, T9, T10, T11, T12, T13, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.BiFunction<T12, T13, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function5<T9, T10, T11, T12, T13, R>>;
        curry(): Internal.Function<T1, Internal.Function12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function3<T11, T12, T13, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function6<T8, T9, T10, T11, T12, T13, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function4<T10, T11, T12, T13, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
    }
    type Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    interface SpriteContentsInvoker {
        abstract invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_[]): void;
        (arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage[]): void;
    }
    type SpriteContentsInvoker_ = SpriteContentsInvoker;
    interface Function14 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function7<T8, T9, T10, T11, T12, T13, T14, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function6<T9, T10, T11, T12, T13, T14, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function4<T11, T12, T13, T14, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function8<T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function<T14, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function5<T10, T11, T12, T13, T14, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function3<T12, T13, T14, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.BiFunction<T13, T14, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry(): Internal.Function<T1, Internal.Function13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
    }
    type Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
    interface Function11 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function7<T5, T6, T7, T8, T9, T10, T11, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function3<T9, T10, T11, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function5<T7, T8, T9, T10, T11, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.BiFunction<T10, T11, R>>;
        curry(): Internal.Function<T1, Internal.Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function6<T6, T7, T8, T9, T10, T11, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function4<T8, T9, T10, T11, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function<T11, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
    }
    type Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    interface Function12 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function3<T10, T11, T12, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.BiFunction<T11, T12, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function<T12, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function6<T7, T8, T9, T10, T11, T12, R>>;
        curry(): Internal.Function<T1, Internal.Function11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function8<T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function7<T6, T7, T8, T9, T10, T11, T12, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function4<T9, T10, T11, T12, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function5<T8, T9, T10, T11, T12, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
    }
    type Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    class RunicSwordItem extends Internal.SwordItem {
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
        static maxUseTime: 0;
    }
    type RunicSwordItem_ = RunicSwordItem;
    class StructureTemplateManager {
        constructor(arg0: Internal.ResourceManager_, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.DataFixer_, arg3: Internal.HolderGetter_<Internal.Block>)
        listTemplates(): Internal.Stream<ResourceLocation>;
        save(arg0: ResourceLocation_): boolean;
        remove(arg0: ResourceLocation_): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        getOrCreate(arg0: ResourceLocation_): Internal.StructureTemplate;
        readStructure(arg0: Internal.CompoundTag_): Internal.StructureTemplate;
        get(arg0: ResourceLocation_): Internal.Optional<Internal.StructureTemplate>;
        static createPathToStructure(arg0: Internal.Path_, arg1: ResourceLocation_, arg2: string): Internal.Path;
        getPathToGeneratedStructure(arg0: ResourceLocation_, arg1: string): Internal.Path;
    }
    type StructureTemplateManager_ = StructureTemplateManager;
    class ImmutableList$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        add(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        build(): Internal.ImmutableList<E>;
        addAll(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        addAll(arg0: Internal.Iterator_<E>): this;
        add(arg0: any): Internal.ImmutableCollection$Builder<any>;
    }
    type ImmutableList$Builder_<E> = ImmutableList$Builder<E>;
    abstract class Goal {
        constructor()
        isInterruptable(): boolean;
        start(): void;
        static reducedTickDelay(arg0: number): number;
        getFlags(): Internal.EnumSet<Internal.Goal$Flag>;
        setFlags(arg0: Internal.EnumSet_<Internal.Goal$Flag>): void;
        stop(): void;
        abstract canUse(): boolean;
        requiresUpdateEveryTick(): boolean;
        canContinueToUse(): boolean;
        adjustedTickDelay(arg0: number): number;
        tick(): void;
        get interruptable(): boolean
        get flags(): Internal.EnumSet<Internal.Goal$Flag>
        set flags(arg0: Internal.EnumSet_<Internal.Goal$Flag>)
    }
    type Goal_ = Goal;
    class STBTTFontinfo extends Internal.Struct implements Internal.NativeResource {
        constructor(arg0: Internal.ByteBuffer_)
        static malloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        static create(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        static malloc(): Internal.STBTTFontinfo;
        static create(): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static callocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static malloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        static calloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static mallocStack(): Internal.STBTTFontinfo;
        static calloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static createSafe(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        static calloc(): Internal.STBTTFontinfo;
        static createSafe(arg0: number): Internal.STBTTFontinfo;
        close(): void;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        static malloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static create(arg0: number): Internal.STBTTFontinfo;
        static create(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(): Internal.STBTTFontinfo;
        static calloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        static readonly ALIGNOF: 8;
        static readonly SIZEOF: 160;
    }
    type STBTTFontinfo_ = STBTTFontinfo;
    interface DebugRenderer$SimpleDebugRenderer {
        abstract render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        (arg0: Internal.PoseStack, arg1: Internal.MultiBufferSource, arg2: number, arg3: number, arg4: number): void;
    }
    type DebugRenderer$SimpleDebugRenderer_ = DebugRenderer$SimpleDebugRenderer;
    class EnchantedBookItem extends Internal.Item {
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
        static getEnchantments(arg0: Internal.ItemStack_): Internal.ListTag;
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
        static addEnchantment(arg0: Internal.ItemStack_, arg1: Internal.EnchantmentInstance_): void;
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
        static createForEnchantment(arg0: Internal.EnchantmentInstance_): Internal.ItemStack;
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
        static readonly TAG_STORED_ENCHANTMENTS: "StoredEnchantments";
    }
    type EnchantedBookItem_ = EnchantedBookItem;
    interface LongBinaryOperator {
        abstract applyAsLong(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type LongBinaryOperator_ = LongBinaryOperator;
    class PBRAtlasTexture extends Internal.AbstractTexture implements Internal.PBRDumpable {
        constructor(atlasTexture: Internal.TextureAtlas_, type: Internal.PBRType_)
        upload(atlasWidth: number, atlasHeight: number, mipLevel: number): void;
        addSprite(sprite: Internal.AtlasPBRLoader$PBRTextureAtlasSprite_): void;
        tryUpload(atlasWidth: number, atlasHeight: number, mipLevel: number): boolean;
        getType(): Internal.PBRType;
        getDefaultDumpLocation(): ResourceLocation;
        getSprite(id: ResourceLocation_): Internal.AtlasPBRLoader$PBRTextureAtlasSprite;
        dumpContents(id: ResourceLocation_, path: Internal.Path_): void;
        static syncAnimation(source: Internal.SpriteContents$Ticker_, target: Internal.SpriteContents$Ticker_): void;
        clear(): void;
        cycleAnimationFrames(): void;
        getAtlasId(): ResourceLocation;
        get type(): Internal.PBRType
        get defaultDumpLocation(): ResourceLocation
        get atlasId(): ResourceLocation
    }
    type PBRAtlasTexture_ = PBRAtlasTexture;
    class ForgeGui extends Internal.Gui {
        constructor(arg0: Internal.Minecraft_)
        setupOverlayRenderState(arg0: boolean, arg1: boolean): void;
        modify$zej000$apoli$changeArmorBarTextures(arg0: ResourceLocation_): ResourceLocation;
        modify$zej000$apoli$changeFoodBarTextures(arg0: ResourceLocation_): ResourceLocation;
        shouldDrawSurvivalElements(): boolean;
        getMinecraft(): Internal.Minecraft;
        handler$blo000$oculus$iris$handleHudHidingScreens(pGui0: Internal.GuiGraphics_, pFloat1: number, ci: Internal.CallbackInfo_): void;
        renderHealth(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        modify$zej000$apoli$changeAirBarTextures(arg0: ResourceLocation_): ResourceLocation;
        modify$zej000$apoli$changeHealthMountBarTextures(arg0: ResourceLocation_): ResourceLocation;
        connector_wrapCancellableCall(arg0: string, arg1: Internal.Runnable_): boolean;
        renderFood(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        get minecraft(): Internal.Minecraft
        rightHeight: number;
        static rayTraceDistance: 20.0;
        leftHeight: number;
    }
    type ForgeGui_ = ForgeGui;
    abstract class ShortBuffer extends Internal.Buffer implements Internal.Comparable<Internal.ShortBuffer> {
        mismatch(arg0: Internal.ShortBuffer_): number;
        abstract put(arg0: number): this;
        reset(): this;
        abstract asReadOnlyBuffer(): this;
        put(arg0: number[]): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract get(): number;
        compareTo(arg0: any): number;
        limit(arg0: number): this;
        abstract order(): Internal.ByteOrder;
        static allocate(arg0: number): Internal.ShortBuffer;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract get(arg0: number): number;
        get(arg0: number[]): this;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.ShortBuffer;
        put(arg0: Internal.ShortBuffer_): this;
        abstract put(arg0: number, arg1: number): this;
        put(arg0: number, arg1: number[]): this;
        abstract slice(arg0: number, arg1: number): this;
        abstract duplicate(): this;
        get(arg0: number, arg1: number[]): this;
        get(arg0: number[], arg1: number, arg2: number): this;
        rewind(): this;
        static wrap(arg0: number[]): Internal.ShortBuffer;
        mark(): this;
        compareTo(arg0: Internal.ShortBuffer_): number;
        put(arg0: number[], arg1: number, arg2: number): this;
        flip(): this;
        abstract compact(): this;
        put(arg0: number, arg1: Internal.ShortBuffer_, arg2: number, arg3: number): this;
    }
    type ShortBuffer_ = ShortBuffer;
    class ItemBuilder$HurtEnemyContext extends Internal.Record {
        constructor(getItem: Internal.ItemStack_, getTarget: Internal.LivingEntity_, getAttacker: Internal.LivingEntity_)
        getTarget(): Internal.LivingEntity;
        getItem(): Internal.ItemStack;
        getAttacker(): Internal.LivingEntity;
        get target(): Internal.LivingEntity
        get item(): Internal.ItemStack
        get attacker(): Internal.LivingEntity
    }
    type ItemBuilder$HurtEnemyContext_ = ItemBuilder$HurtEnemyContext;
    class Ingredient implements Internal.Predicate<Internal.ItemStack>, Internal.FabricIngredient, Internal.IngredientKJS {
        constructor(arg0: Internal.Stream_<Internal.Ingredient$Value>)
        getDisplayStacks(): Internal.ItemStackSet;
        isVanilla(): boolean;
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        static invalidateAll(): void;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        isSimple(): boolean;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        asStack(): InputItem;
        toJson(): Internal.JsonElement;
        or(ingredient: Internal.Ingredient_): this;
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        isWildcard(): boolean;
        static of(): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        getItemTypes(): Internal.Set<Internal.Item>;
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): this;
        negate(): Internal.Predicate<Internal.ItemStack>;
        subtract(subtracted: Internal.Ingredient_): this;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        markValid(): void;
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        self(): this;
        getCustomIngredient(): Internal.CustomIngredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        invalidate(): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        getStackingIds(): Internal.IntList;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        test(arg0: Internal.ItemStack_): boolean;
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        getFirst(): Internal.ItemStack;
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        requiresTesting(): boolean;
        asIngredient(): this;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get wildcard(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get customIngredient(): Internal.CustomIngredient
        get stacks(): Internal.ItemStackSet
        get stackingIds(): Internal.IntList
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get first(): Internal.ItemStack
        static readonly EMPTY: Internal.Ingredient;
        values: Internal.Ingredient$Value[];
        itemStacks: Internal.ItemStack[];
        stackingIds: Internal.IntList;
    }
    type Ingredient_ = `%${Special.CreativeModeTab}` | Internal.ItemStack_ | Ingredient | RegExp | Internal.Ingredient_[] | `#${Special.ItemTag}` | `@${Special.Mod}` | "*";
    interface AxeItemAccessor {
        getStrippedBlocks(): Internal.Map<Internal.Block, Internal.Block>;
        get strippedBlocks(): Internal.Map<Internal.Block, Internal.Block>
    }
    type AxeItemAccessor_ = AxeItemAccessor;
    interface LongIterable extends Internal.Iterable<number> {
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        iterator(): Internal.Iterator<any>;
        spliterator(): Internal.Spliterator<any>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        longIterator(): Internal.LongIterator;
        longSpliterator(): Internal.LongSpliterator;
        forEach(arg0: Internal.LongConsumer_): void;
    }
    type LongIterable_ = LongIterable;
    class FMLCommonSetupEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
    }
    type FMLCommonSetupEvent_ = FMLCommonSetupEvent;
    interface ItemLike {
        abstract asItem(): Internal.Item;
        (): Internal.Item_;
    }
    type ItemLike_ = Internal.Item_ | ItemLike;
    class BiomeGenerationSettingsBuilder extends Internal.BiomeGenerationSettings$PlainBuilder {
        constructor(arg0: Internal.BiomeGenerationSettings_)
        getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.List<Internal.Holder<Internal.PlacedFeature>>;
        getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.List<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
    }
    type BiomeGenerationSettingsBuilder_ = BiomeGenerationSettingsBuilder;
    class TridentLoyaltyEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type TridentLoyaltyEnchantment_ = TridentLoyaltyEnchantment;
    class ArmorItemBuilder$Leggings extends Internal.ArmorItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type ArmorItemBuilder$Leggings_ = ArmorItemBuilder$Leggings;
    abstract class ConfiguredCondition <T extends Internal.IDynamicFeatureConfiguration, F, CF extends Internal.ConfiguredCondition<any, any, CF>> extends Internal.ConfiguredFactory<T, F, CF> {
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        getData(): Internal.ConditionData;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        get data(): Internal.ConditionData
    }
    type ConfiguredCondition_<T extends Internal.IDynamicFeatureConfiguration, F, CF extends Internal.ConfiguredCondition<any, any, CF>> = ConfiguredCondition<T, F, CF>;
    class RealmsServer$State extends Internal.Enum<Internal.RealmsServer$State> {
        static valueOf(arg0: string): Internal.RealmsServer$State;
        static values(): Internal.RealmsServer$State[];
        static readonly OPEN: Internal.RealmsServer$State;
        static readonly CLOSED: Internal.RealmsServer$State;
        static readonly UNINITIALIZED: Internal.RealmsServer$State;
    }
    type RealmsServer$State_ = RealmsServer$State | "open" | "closed" | "uninitialized";
    class CustomSpell$Builder extends Internal.BuilderBase<Internal.CustomSpell> {
        constructor(i: ResourceLocation_)
        /**
         *     Sets the sound that the spell will play after it is done casting.
        */
        setFinishSound(soundEvent: Internal.ISSKJSUtils$SoundEventHolder_): this;
        /**
         *     Sets the predicate for whether or not the spell can be crafted by a player.
        */
        canBeCraftedBy(predicate: Internal.Predicate_<Player>): this;
        /**
         *     Sets the cast finish animation for the spell.
        */
        setCastFinishAnimation(path: string, playOnce: boolean, animatesLegs: boolean): this;
        /**
         *     Sets the sound that the spell will play when it starts casting.
        */
        setStartSound(soundEvent: Internal.ISSKJSUtils$SoundEventHolder_): this;
        /**
         *     Sets the cast start animation for the spell.
        */
        setCastStartAnimation(path: string, playOnce: boolean, animatesLegs: boolean): this;
        getRegistryType(): Internal.RegistryInfo<Internal.AbstractSpell>;
        /**
         *     Sets whether or not the spell needs to be learned before it can be casted.
        */
        needsLearning(needs: boolean): this;
        /**
         *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
        */
        setCastType(type: CastType_): this;
        /**
         *     Sets the school of the spell. The different schools each are a resource location.
         * 
         *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
         *     Another example: `setSchool('irons_spellbooks:blood')`
        */
        setSchool(schoolHolder: Internal.ISSKJSUtils$SchoolHolder_): this;
        /**
         *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
        */
        setCooldownSeconds(seconds: number): this;
        /**
         *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
        */
        setUniqueInfo(info: Internal.BiFunction_<number, Internal.LivingEntity, Internal.List<Internal.MutableComponent>>): this;
        /**
         *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
         * 
         *     Example: ```js
         *     .checkPreCastConditions(ctx => {
         *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
         *     })
         *     ```
        */
        checkPreCastConditions(predicate: Internal.Predicate_<Internal.CustomSpell$PreCastConditionsContext>): this;
        /**
         *     Sets whether or not the spell can be looted from a loot table.
        */
        setAllowLooting(allow: boolean): this;
        /**
         *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
        */
        onPreCast(consumer: Internal.Consumer_<Internal.CustomSpell$PreCastContext>): this;
        /**
         *     Sets the spell power per level.
        */
        setSpellPowerPerLevel(power: number): this;
        createObject(): Internal.CustomSpell;
        /**
         *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
        */
        onPreClientCast(consumer: Internal.Consumer_<Internal.CustomSpell$PreCastClientContext>): this;
        /**
         *     Sets the max level of the spell. Goes up to `10` from `1`.
        */
        setMaxLevel(level: number): this;
        /**
         *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
        */
        onClientCast(consumer: Internal.Consumer_<Internal.CustomSpell$CastClientContext>): this;
        /**
         *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
        */
        onCast(consumer: Internal.Consumer_<Internal.CustomSpell$CastContext>): this;
        /**
         *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
        */
        setBaseSpellPower(power: number): this;
        /**
         *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
        */
        setCastTime(time: number): this;
        /**
         *     Sets the base mana cost. The mana cost per level adds on to this.
        */
        setBaseManaCost(cost: number): this;
        /**
         *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
        */
        setManaCostPerLevel(cost: number): this;
        /**
         *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
        */
        setMinRarity(rarity: SpellRarity_): this;
        /**
         *     Sets the sound that the spell will play after it is done casting.
        */
        set finishSound(soundEvent: Internal.ISSKJSUtils$SoundEventHolder_)
        /**
         *     Sets the sound that the spell will play when it starts casting.
        */
        set startSound(soundEvent: Internal.ISSKJSUtils$SoundEventHolder_)
        get registryType(): Internal.RegistryInfo<Internal.AbstractSpell>
        /**
         *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
        */
        set castType(type: CastType_)
        /**
         *     Sets the school of the spell. The different schools each are a resource location.
         * 
         *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
         *     Another example: `setSchool('irons_spellbooks:blood')`
        */
        set school(schoolHolder: Internal.ISSKJSUtils$SchoolHolder_)
        /**
         *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
        */
        set cooldownSeconds(seconds: number)
        /**
         *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
        */
        set uniqueInfo(info: Internal.BiFunction_<number, Internal.LivingEntity, Internal.List<Internal.MutableComponent>>)
        /**
         *     Sets whether or not the spell can be looted from a loot table.
        */
        set allowLooting(allow: boolean)
        /**
         *     Sets the spell power per level.
        */
        set spellPowerPerLevel(power: number)
        /**
         *     Sets the max level of the spell. Goes up to `10` from `1`.
        */
        set maxLevel(level: number)
        /**
         *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
        */
        set baseSpellPower(power: number)
        /**
         *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
        */
        set castTime(time: number)
        /**
         *     Sets the base mana cost. The mana cost per level adds on to this.
        */
        set baseManaCost(cost: number)
        /**
         *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
        */
        set manaCostPerLevel(cost: number)
        /**
         *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
        */
        set minRarity(rarity: SpellRarity_)
    }
    type CustomSpell$Builder_ = CustomSpell$Builder;
    class AccessibleObject implements Internal.AnnotatedElement {
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        setAccessible(arg0: boolean): void;
        canAccess(arg0: any): boolean;
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        trySetAccessible(): boolean;
        getAnnotations(): Internal.Annotation[];
        getDeclaredAnnotations(): Internal.Annotation[];
        static setAccessible(arg0: Internal.AccessibleObject_[], arg1: boolean): void;
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        /**
         * @deprecated
        */
        isAccessible(): boolean;
        set accessible(arg0: boolean)
        get annotations(): Internal.Annotation[]
        get declaredAnnotations(): Internal.Annotation[]
        /**
         * @deprecated
        */
        get accessible(): boolean
    }
    type AccessibleObject_ = AccessibleObject;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongPredicate extends Internal.Predicate<number>, Internal.LongPredicate {
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        negate(): Internal.LongPredicate;
        or(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        and(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        abstract test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        or(arg0: Internal.LongPredicate_): this;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        (arg0: number): boolean;
    }
    type LongPredicate_ = LongPredicate;
}
declare namespace com.mojang.realmsclient.dto {
    class PlayerInfo extends Internal.ValueObject implements Internal.ReflectionBasedSerialization {
        constructor()
        setOnline(arg0: boolean): void;
        setOperator(arg0: boolean): void;
        setAccepted(arg0: boolean): void;
        getOnline(): boolean;
        getAccepted(): boolean;
        setName(arg0: string): void;
        getName(): string;
        setUuid(arg0: string): void;
        isOperator(): boolean;
        getUuid(): string;
        set online(arg0: boolean)
        set operator(arg0: boolean)
        set accepted(arg0: boolean)
        get online(): boolean
        get accepted(): boolean
        set name(arg0: string)
        get name(): string
        set uuid(arg0: string)
        get operator(): boolean
        get uuid(): string
    }
    type PlayerInfo_ = PlayerInfo;
}
declare namespace io.github.edwinmindcraft.apoli.api.power.factory {
    class PowerFactory <T extends Internal.IDynamicFeatureConfiguration> {
        canTick(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): boolean;
        onRespawn(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        isActive(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): boolean;
        configure(arg0: T, arg1: Internal.PowerData_): Internal.ConfiguredPower<T, any>;
        tick(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        getContainedPowers(arg0: Internal.ConfiguredPower_<T, any>): Internal.Map<string, Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        onRemoved(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        serialize(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.IPowerContainer_, arg2: Internal.CompoundTag_): void;
        initCapabilities(): Internal.ICapabilityProvider;
        getCodec(): Internal.Codec<Internal.ConfiguredPower<T, any>>;
        tickInterval(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        getContainedPowerKeys(arg0: Internal.ConfiguredPower_<T, any>): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        onGained(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        getLegacyFactory(): Internal.PowerFactory<any>;
        onAdded(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        onLost(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): void;
        deserialize(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.IPowerContainer_, arg2: Internal.CompoundTag_): void;
        complete(arg0: ResourceLocation_, arg1: T): T;
        get codec(): Internal.Codec<Internal.ConfiguredPower<T, any>>
        get legacyFactory(): Internal.PowerFactory<any>
        static readonly IGNORE_NAMESPACE_CODEC: Internal.Codec<io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any>>;
        static readonly CODEC: Internal.Codec<io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any>>;
    }
    type PowerFactory_<T extends Internal.IDynamicFeatureConfiguration> = PowerFactory<T> | Special.PowerFactory;
}
declare namespace net.minecraftforge.client.event.sound {
    abstract class SoundEvent extends Internal.Event {
        constructor()
        getEngine(): Internal.SoundEngine;
        get engine(): Internal.SoundEngine
    }
    type SoundEvent_ = SoundEvent;
}
