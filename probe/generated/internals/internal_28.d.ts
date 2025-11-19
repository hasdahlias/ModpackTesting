/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    /**
     * @deprecated
    */
    interface ArtifactMetadata extends org.apache.maven.repository.legacy.metadata.ArtifactMetadata {
        abstract storedInArtifactVersionDirectory(): boolean;
        abstract storedInGroupDirectory(): boolean;
        abstract storeInLocalRepository(arg0: Internal.ArtifactRepository_, arg1: Internal.ArtifactRepository_): void;
        abstract merge(arg0: org.apache.maven.repository.legacy.metadata.ArtifactMetadata_): void;
        abstract getKey(): any;
        abstract getGroupId(): string;
        abstract getLocalFilename(arg0: Internal.ArtifactRepository_): string;
        abstract merge(arg0: Internal.ArtifactMetadata_): void;
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
    class StandOnFluidEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.FluidState_)
        getFluidState(): Internal.FluidState;
        getEntity(): Internal.Entity;
        get fluidState(): Internal.FluidState
        get entity(): Internal.Entity
    }
    type StandOnFluidEvent_ = StandOnFluidEvent;
    interface FunctionFactory$Arg1 extends Internal.FunctionFactory$FuncSupplier {
        abstract createArg(arg0: Internal.Unit_): Internal.Unit;
        create(args: Internal.Unit_[]): Internal.Unit;
        (arg0: Internal.Unit): Internal.Unit_;
    }
    type FunctionFactory$Arg1_ = FunctionFactory$Arg1;
    interface FunctionFactory$Arg2 extends Internal.FunctionFactory$FuncSupplier {
        create(args: Internal.Unit_[]): Internal.Unit;
        abstract createArg(arg0: Internal.Unit_, arg1: Internal.Unit_): Internal.Unit;
        (arg0: Internal.Unit, arg1: Internal.Unit): Internal.Unit_;
    }
    type FunctionFactory$Arg2_ = FunctionFactory$Arg2;
    class SoftFluid$Builder {
        constructor(stillTexture: ResourceLocation_, flowingTexture: ResourceLocation_)
        constructor(fluid: Internal.Fluid_)
        addEqFluid(fluid: Internal.Fluid_): this;
        drink(item: Internal.Item_): this;
        containers(containerList: Internal.FluidContainerList_): this;
        tinted(): this;
        emptyHandContainerItem(filledItem: Internal.Item_, itemCapacity: number): this;
        luminosity(luminosity: number): this;
        copyTexturesFrom(fluidRes: ResourceLocation_): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number): this;
        textures(still: ResourceLocation_, flow: ResourceLocation_): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number, fillSound: Internal.SoundEvent_, emptySound: Internal.SoundEvent_): this;
        translation(component: Internal.Component_): this;
        emissivity(emissivity: number): this;
        bottle(item: Internal.Item_): this;
        keepNBTFromItem(...NBTkey: string[]): this;
        food(foodProvider: Internal.FoodProvider_): this;
        stew(item: Internal.Item_): this;
        food(item: Internal.Item_): this;
        bucket(item: Internal.Item_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        fromMod(s: string): this;
        copyTexturesFrom(fluidRes: string): this;
        food(item: Internal.Item_, foodDivider: number): this;
        onlyFlowingTinted(): this;
        tintMethod(tint: Internal.SoftFluid$TintMethod_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        translationKey(translationKey: string): this;
        color(tintColor: number): this;
        build(): Internal.SoftFluid;
        noTint(): this;
        bowl(item: Internal.Item_): this;
    }
    type SoftFluid$Builder_ = SoftFluid$Builder;
    interface IIngredientAcceptor <THIS extends Internal.IIngredientAcceptor<THIS>> extends Internal.IIngredientConsumer {
        addItemStack(arg0: Internal.ItemStack_): Internal.IIngredientConsumer;
        addOptionalTypedIngredients(arg0: Internal.List_<any>): Internal.IIngredientConsumer;
        addTypedIngredients(arg0: Internal.List_<any>): Internal.IIngredientConsumer;
        abstract addIngredient<I>(arg0: Internal.IIngredientType_<I>, arg1: I): THIS;
        addIngredientsUnsafe(arg0: Internal.List_<any>): Internal.IIngredientConsumer;
        addTypedIngredient(arg0: Internal.ITypedIngredient_<any>): Internal.IIngredientConsumer;
        addIngredients(arg0: Internal.IIngredientType_<any>, arg1: Internal.List_<any>): Internal.IIngredientConsumer;
        addIngredients(arg0: Internal.Ingredient_): Internal.IIngredientConsumer;
        addItemLike(arg0: Internal.ItemLike_): Internal.IIngredientConsumer;
        addItemStacks(arg0: Internal.List_<Internal.ItemStack>): THIS;
        addFluidStack(arg0: Internal.Fluid_): Internal.IIngredientConsumer;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): THIS;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number): THIS;
    }
    type IIngredientAcceptor_<THIS extends Internal.IIngredientAcceptor<THIS>> = IIngredientAcceptor<THIS>;
    class ModifyDamageDealtPower extends Internal.ValueModifyingPowerFactory<Internal.ModifyDamageDealtConfiguration> {
        constructor()
        static modifyMelee(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): number;
        static modifyProjectile(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): number;
        static modifyMeleeNoExec(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): number;
        execute(arg0: Internal.ConfiguredPower_<Internal.ModifyDamageDealtConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.Entity_): void;
        check(arg0: Internal.ConfiguredPower_<Internal.ModifyDamageDealtConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.Entity_, arg3: DamageSource_, arg4: number): boolean;
        static modifyProjectileNoExec(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): number;
    }
    type ModifyDamageDealtPower_ = ModifyDamageDealtPower;
    class BeaconMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Container_, arg2: Internal.ContainerData_, arg3: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Container_)
        updateEffects(arg0: Internal.Optional_<Internal.MobEffect>, arg1: Internal.Optional_<Internal.MobEffect>): void;
        hasPayment(): boolean;
        getPrimaryEffect(): Internal.MobEffect;
        getLevels(): number;
        getSecondaryEffect(): Internal.MobEffect;
        get primaryEffect(): Internal.MobEffect
        get levels(): number
        get secondaryEffect(): Internal.MobEffect
    }
    type BeaconMenu_ = BeaconMenu;
    interface SculkBehaviour {
        depositCharge(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        attemptSpreadVein(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>, arg4: boolean): boolean;
        abstract attemptUseCharge(arg0: Internal.SculkSpreader$ChargeCursor_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.SculkSpreader_, arg5: boolean): number;
        canChangeBlockStateOnSpread(): boolean;
        getSculkSpreadDelay(): number;
        onDischarged(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        updateDecayDelay(arg0: number): number;
        get sculkSpreadDelay(): number
        (arg0: Internal.SculkSpreader$ChargeCursor, arg1: Internal.LevelAccessor, arg2: BlockPos, arg3: Internal.RandomSource, arg4: Internal.SculkSpreader, arg5: boolean): number;
        readonly DEFAULT: Internal.SculkBehaviour;
    }
    type SculkBehaviour_ = SculkBehaviour;
    class FilterOutputStream extends Internal.OutputStream {
        constructor(arg0: Internal.OutputStream_)
    }
    type FilterOutputStream_ = FilterOutputStream;
    class SpectatorMenu {
        constructor(arg0: Internal.SpectatorMenuListener_)
        getSelectedCategory(): Internal.SpectatorMenuCategory;
        exit(): void;
        getItems(): Internal.List<Internal.SpectatorMenuItem>;
        getSelectedItem(): Internal.SpectatorMenuItem;
        getCurrentPage(): Internal.SpectatorPage;
        selectCategory(arg0: Internal.SpectatorMenuCategory_): void;
        getSelectedSlot(): number;
        selectSlot(arg0: number): void;
        getItem(arg0: number): Internal.SpectatorMenuItem;
        get selectedCategory(): Internal.SpectatorMenuCategory
        get items(): Internal.List<Internal.SpectatorMenuItem>
        get selectedItem(): Internal.SpectatorMenuItem
        get currentPage(): Internal.SpectatorPage
        get selectedSlot(): number
        static readonly EMPTY_SLOT: Internal.SpectatorMenuItem;
        static readonly PREVIOUS_PAGE_TEXT: Internal.MutableComponent;
        page: number;
        static readonly NEXT_PAGE_TEXT: Internal.MutableComponent;
        static readonly CLOSE_MENU_TEXT: Internal.MutableComponent;
    }
    type SpectatorMenu_ = SpectatorMenu;
    class ItemHolderCollection$InWorld extends Internal.ItemHolderCollection {
        constructor(...arg0: any_[])
        static of(...arg0: Internal.ItemEntity_[]): Internal.ItemHolderCollection;
    }
    type ItemHolderCollection$InWorld_ = ItemHolderCollection$InWorld;
    class BaseLivingEntityBuilder$ParticleKeyFrameEventJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> extends Internal.BaseLivingEntityBuilder$KeyFrameEventJS<E, Internal.ParticleKeyframeData> {
        constructor(parent: Internal.ParticleKeyframeEvent_<E>)
        /**
         * Gets the locator string given by the Keyframe instruction from the animation.json
        */
        readonly locator: string;
        /**
         * Gets the script string given by the Keyframe instruction from the animation.json
        */
        readonly script: string;
        /**
         * Gets the effect id given by the Keyframe instruction from the animation.json
        */
        readonly effect: string;
    }
    type BaseLivingEntityBuilder$ParticleKeyFrameEventJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>;
    class SeekingArrowItem extends Internal.ArrowItem {
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
    type SeekingArrowItem_ = SeekingArrowItem;
    interface Vector3dc {
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract add(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract round(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateX(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract x(): number;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract normalize(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract div(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract orthogonalizeUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPositionW(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        abstract mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract smoothStep(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranspose(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract half(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract absolute(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract dot(arg0: number, arg1: number, arg2: number): number;
        abstract maxComponent(): number;
        abstract getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        abstract add(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract floor(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateY(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract getToAddress(arg0: number): this;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number): number;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract y(): number;
        abstract mulTransposeDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract lengthSquared(): number;
        abstract mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract hermite(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract negate(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPositionW(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract max(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranspose(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract orthogonalize(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract ceil(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract div(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract distanceSquared(arg0: Internal.Vector3dc_): number;
        abstract dot(arg0: Internal.Vector3dc_): number;
        abstract angleSigned(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): number;
        abstract cross(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract z(): number;
        abstract isFinite(): boolean;
        abstract equals(arg0: Internal.Vector3dc_, arg1: number): boolean;
        abstract mulTransposePosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateZ(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulAdd(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract half(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract angleCos(arg0: Internal.Vector3dc_): number;
        abstract get(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract angle(arg0: Internal.Vector3dc_): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract minComponent(): number;
        abstract mul(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract normalize(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract div(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract min(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Vector3f_): Vector3f;
        abstract fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract cross(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Vector3f_): Vector3f;
        abstract distance(arg0: Internal.Vector3dc_): number;
        abstract mul(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract lerp(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract div(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotationTo(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        get finite(): boolean
    }
    type Vector3dc_ = Vector3dc;
    interface IFactory <T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredFactory<T, any, any>, F extends Internal.IFactory<T, C, F>> {
        asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        abstract configure(arg0: T): C;
        singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        (arg0: T): C;
    }
    type IFactory_<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredFactory<T, any, any>, F extends Internal.IFactory<T, C, F>> = IFactory<T, C, F>;
    class BannerDuplicateRecipe extends Internal.CustomRecipe {
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
    type BannerDuplicateRecipe_ = BannerDuplicateRecipe;
    class MobSpawnSettings$Builder implements Internal.SpawnSettingsBuilderAccessor {
        constructor()
        addSpawn(arg0: Internal.MobCategory_, arg1: Internal.MobSpawnSettings$SpawnerData_): this;
        getSpawnCosts(): Internal.Map<any, any>;
        build(): Internal.MobSpawnSettings;
        creatureGenerationProbability(arg0: number): this;
        addMobCharge(arg0: Internal.EntityType_<any>, arg1: number, arg2: number): this;
        get spawnCosts(): Internal.Map<any, any>
        readonly mobSpawnCosts: Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        creatureGenerationProbability: number;
        readonly spawners: Internal.Map<Internal.MobCategory, Internal.List<Internal.MobSpawnSettings$SpawnerData>>;
    }
    type MobSpawnSettings$Builder_ = MobSpawnSettings$Builder;
    class OptionImpact extends Internal.Enum<Internal.OptionImpact> implements Internal.TextProvider {
        getLocalizedName(): Internal.Component;
        static valueOf(arg0: string): Internal.OptionImpact;
        static values(): Internal.OptionImpact[];
        get localizedName(): Internal.Component
        static readonly HIGH: Internal.OptionImpact;
        static readonly VARIES: Internal.OptionImpact;
        static readonly MEDIUM: Internal.OptionImpact;
        static readonly LOW: Internal.OptionImpact;
    }
    type OptionImpact_ = "medium" | "high" | "low" | OptionImpact | "varies";
    class ProjectileItemBuilder extends Internal.ItemBuilder {
        constructor(i: ResourceLocation_, parent: Internal.BuilderBase_<any>)
        createObject(): any;
        /**
         * Sets the velocity of the projectile.
         * 
         * @param projectileVelocity The velocity of the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileVelocity(1.5f);
         * ```
        */
        projectileVelocity(projectileVelocity: number): Internal.ItemBuilder;
        /**
         * Sets the inaccuracy of the projectile.
         * 
         * @param projectileInaccuracy The inaccuracy of the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileInaccuracy(0.1f);
         * ```
        */
        projectileInaccuracy(projectileInaccuracy: number): Internal.ItemBuilder;
        /**
         * Sets whether the item can be thrown.
         * 
         * @param canThrow True if the item can be thrown, false otherwise.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.canThrow(true);
         * ```
        */
        canThrow(canThrow: boolean): Internal.ItemBuilder;
        /**
         * Sets the Z offset for the projectile.
         * 
         * @param projectileZ The Z offset for the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileZ(0.5f);
         * ```
        */
        projectileZ(projectileZ: number): Internal.ItemBuilder;
    }
    type ProjectileItemBuilder_ = ProjectileItemBuilder;
    class RecipeComponentBuilderMap extends Internal.AbstractMap<Internal.RecipeKey<any>, any> {
        constructor(holders: Internal.RecipeComponentValue_<any>[])
        constructor(keys: Internal.RecipeKey_<any>[])
        constructor(builder: Internal.RecipeComponentBuilder_)
        forEach(arg0: Internal.BiConsumer_<Internal.RecipeKey<any>, any>): void;
        computeIfPresent(arg0: Internal.RecipeKey_<any>, arg1: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): any;
        getOrDefault(key: any, defaultValue: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<Internal.RecipeKey<any>, any>>;
        merge(arg0: Internal.RecipeKey_<any>, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        computeIfAbsent(arg0: Internal.RecipeKey_<any>, arg1: Internal.Function_<Internal.RecipeKey<any>, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(key: Internal.RecipeKey_<any>, value: any): any;
        put(arg0: any, arg1: any): any;
        getHolder(key: any): Internal.RecipeComponentValue<any>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        compute(arg0: Internal.RecipeKey_<any>, arg1: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replace(arg0: Internal.RecipeKey_<any>, arg1: any, arg2: any): boolean;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        replace(arg0: Internal.RecipeKey_<any>, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        putIfAbsent(arg0: Internal.RecipeKey_<any>, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): void;
        get(key: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        static readonly EMPTY: {};
        readonly holders: Internal.RecipeComponentValue<any>[];
        hasChanged: boolean;
    }
    type RecipeComponentBuilderMap_ = RecipeComponentBuilderMap;
    class ImmutableSet$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        add(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        addAll(arg0: Internal.Iterable_<E>): this;
        addAll(arg0: Internal.Iterator_<any>): Internal.ImmutableCollection$Builder<any>;
        build(): Internal.ImmutableCollection<any>;
        add(arg0: any): Internal.ImmutableCollection$Builder<any>;
    }
    type ImmutableSet$Builder_<E> = ImmutableSet$Builder<E>;
    interface BiomeResolver {
        abstract getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: Internal.Climate$Sampler_): Internal.Holder<Internal.Biome>;
        (arg0: number, arg1: number, arg2: number, arg3: Internal.Climate$Sampler): Internal.Holder_<Internal.Biome>;
    }
    type BiomeResolver_ = BiomeResolver;
    class EnchantedItemBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The item after it has been enchanted.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The item after it has been enchanted.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * The levels spent by the player on the enchantment.
        */
        setLevels(arg0: Bounds_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item after it has been enchanted.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The item after it has been enchanted.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The item after it has been enchanted.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The levels spent by the player on the enchantment.
        */
        set levels(arg0: Bounds_)
        /**
         * The item after it has been enchanted.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type EnchantedItemBuilder_ = EnchantedItemBuilder;
    interface ProgressiveFuture <V> extends io.netty.util.concurrent.Future<V> {
        abstract isSuccess(): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract isDone(): boolean;
        abstract awaitUninterruptibly(): this;
        abstract cancel(arg0: boolean): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract cause(): Internal.Throwable;
        abstract syncUninterruptibly(): this;
        abstract await(): this;
        abstract get(): V;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract getNow(): V;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract sync(): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract isCancellable(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        get success(): boolean
        get done(): boolean
        get now(): V
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type ProgressiveFuture_<V> = ProgressiveFuture<V>;
    class PriestArmorItem extends Internal.ImbuableChestplateArmorItem {
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
    type PriestArmorItem_ = PriestArmorItem;
    class SulfurStackFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type SulfurStackFeature_ = SulfurStackFeature;
    interface RegistryCallback <T> {
        abstract accept(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>): void;
        (arg0: ResourceLocation, arg1: Internal.Supplier<T>): void;
    }
    type RegistryCallback_<T> = RegistryCallback<T>;
    class CustomizeGuiOverlayEvent$DebugText extends Internal.CustomizeGuiOverlayEvent {
        constructor()
        constructor(arg0: Internal.Window_, arg1: Internal.GuiGraphics_, arg2: number, arg3: Internal.ArrayList_<string>, arg4: Internal.ArrayList_<string>)
        getRight(): Internal.ArrayList<string>;
        getLeft(): Internal.ArrayList<string>;
        get right(): Internal.ArrayList<string>
        get left(): Internal.ArrayList<string>
    }
    type CustomizeGuiOverlayEvent$DebugText_ = CustomizeGuiOverlayEvent$DebugText;
    class HugeFungusFeature extends Internal.Feature<Internal.HugeFungusConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.HugeFungusConfiguration>)
    }
    type HugeFungusFeature_ = HugeFungusFeature;
    class TypeToken$TypeSet extends Internal.ForwardingSet<Internal.TypeToken<T>> implements Internal.Serializable {
        stream(): Internal.Stream<Internal.TypeToken<T>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<Internal.TypeToken<T>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<Internal.TypeToken<T>>): void;
        classes(): this;
        abstract toArray<T>(arg0: T[]): T[];
        abstract iterator(): Internal.Iterator<Internal.TypeToken<T>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        interfaces(): this;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        rawTypes(): Internal.Set<T>;
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        removeIf(arg0: Internal.Predicate_<Internal.TypeToken<T>>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        parallelStream(): Internal.Stream<Internal.TypeToken<T>>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
    }
    type TypeToken$TypeSet_ = TypeToken$TypeSet;
    class RunGroup {
        constructor(styleRuns: Internal.List_<Internal.Run>, runLevel: number, charOffset: number, bidiRuns: number[], cache: Internal.LayoutCache_)
        getTotalLength(): number;
        getCharOffset(): number;
        getStyleRuns(): Internal.List<Internal.Run>;
        getJoinedStr(): string;
        containsIndex(index: number): boolean;
        getJoined(): string[];
        getBidiRuns(): number[];
        getFont(): Internal.ConfiguredCaxtonFont;
        acceptRender(visitor: Internal.DirectionalCharacterVisitor_): boolean;
        accept(visitor: Internal.FormattedCharSink_): boolean;
        acceptRender(visitor: Internal.FormattedCharSink_): boolean;
        getRunLevel(): number;
        accept(visitor: Internal.DirectionalCharacterVisitor_): boolean;
        getShapingResults(): Internal.ShapingResult[];
        getStyleAt(index: number): Internal.Style;
        get totalLength(): number
        get charOffset(): number
        get styleRuns(): Internal.List<Internal.Run>
        get joinedStr(): string
        get joined(): string[]
        get bidiRuns(): number[]
        get font(): Internal.ConfiguredCaxtonFont
        get runLevel(): number
        get shapingResults(): Internal.ShapingResult[]
    }
    type RunGroup_ = RunGroup;
    class VillagerHostilesSensor extends Internal.NearestVisibleLivingEntitySensor {
        constructor()
    }
    type VillagerHostilesSensor_ = VillagerHostilesSensor;
    interface DataOutput {
        abstract writeBoolean(arg0: boolean): void;
        abstract writeUTF(arg0: string): void;
        abstract writeLong(arg0: number): void;
        abstract writeChars(arg0: string): void;
        abstract writeChar(arg0: number): void;
        abstract write(arg0: number[]): void;
        abstract writeFloat(arg0: number): void;
        abstract writeBytes(arg0: string): void;
        abstract write(arg0: number): void;
        abstract writeInt(arg0: number): void;
        abstract writeByte(arg0: number): void;
        abstract write(arg0: number[], arg1: number, arg2: number): void;
        abstract writeDouble(arg0: number): void;
        abstract writeShort(arg0: number): void;
    }
    type DataOutput_ = DataOutput;
    class Illusioner extends Internal.SpellcasterIllager implements Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Illusioner>, arg1: Internal.Level_)
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
        getIllusionOffsets(arg0: number): Vec3d[];
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
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
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
    type Illusioner_ = Illusioner;
    class PlayerTeam extends Internal.Team {
        constructor(arg0: Internal.Scoreboard_, arg1: string)
        getDisplayName(): Internal.Component;
        setPlayerPrefix(arg0: Internal.Component_): void;
        unpackOptions(arg0: number): void;
        setDeathMessageVisibility(arg0: Internal.Team$Visibility_): void;
        getFormattedDisplayName(): Internal.MutableComponent;
        packOptions(): number;
        getPlayerSuffix(): Internal.Component;
        setSeeFriendlyInvisibles(arg0: boolean): void;
        setColor(arg0: Internal.ChatFormatting_): void;
        getScoreboard(): Internal.Scoreboard;
        setPlayerSuffix(arg0: Internal.Component_): void;
        setDisplayName(arg0: Internal.Component_): void;
        getPlayerPrefix(): Internal.Component;
        setAllowFriendlyFire(arg0: boolean): void;
        setNameTagVisibility(arg0: Internal.Team$Visibility_): void;
        setCollisionRule(arg0: Internal.Team$CollisionRule_): void;
        static formatNameForTeam(arg0: Internal.Team_, arg1: Internal.Component_): Internal.MutableComponent;
        get displayName(): Internal.Component
        set playerPrefix(arg0: Internal.Component_)
        set deathMessageVisibility(arg0: Internal.Team$Visibility_)
        get formattedDisplayName(): Internal.MutableComponent
        get playerSuffix(): Internal.Component
        set seeFriendlyInvisibles(arg0: boolean)
        set color(arg0: Internal.ChatFormatting_)
        get scoreboard(): Internal.Scoreboard
        set playerSuffix(arg0: Internal.Component_)
        set displayName(arg0: Internal.Component_)
        get playerPrefix(): Internal.Component
        set allowFriendlyFire(arg0: boolean)
        set nameTagVisibility(arg0: Internal.Team$Visibility_)
        set collisionRule(arg0: Internal.Team$CollisionRule_)
    }
    type PlayerTeam_ = PlayerTeam;
    class ChorusPlantFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type ChorusPlantFeature_ = ChorusPlantFeature;
    interface QuadView {
        toBakedQuad(sprite: Internal.TextureAtlasSprite_): Internal.BakedQuad;
        abstract u(arg0: number): number;
        abstract normalX(arg0: number): number;
        abstract y(arg0: number): number;
        abstract copyPos(arg0: number, arg1: Vector3f_): Vector3f;
        abstract cullFace(): Internal.Direction;
        abstract x(arg0: number): number;
        abstract v(arg0: number): number;
        abstract copyNormal(arg0: number, arg1: Vector3f_): Vector3f;
        abstract color(arg0: number): number;
        abstract z(arg0: number): number;
        /**
         * @deprecated
        */
        spriteU(vertexIndex: number, spriteIndex: number): number;
        /**
         * @deprecated
        */
        spriteV(vertexIndex: number, spriteIndex: number): number;
        /**
         * @deprecated
        */
        toVanilla(spriteIndex: number, target: number[], targetIndex: number, isItem: boolean): void;
        abstract nominalFace(): Internal.Direction;
        abstract hasNormal(arg0: number): boolean;
        abstract material(): Internal.RenderMaterial;
        abstract lightFace(): Internal.Direction;
        abstract toVanilla(arg0: number[], arg1: number): void;
        abstract faceNormal(): Vector3f;
        abstract posByIndex(arg0: number, arg1: number): number;
        abstract colorIndex(): number;
        abstract lightmap(arg0: number): number;
        /**
         * @deprecated
        */
        spriteColor(vertexIndex: number, spriteIndex: number): number;
        abstract tag(): number;
        /**
         * @deprecated
        */
        toBakedQuad(spriteIndex: number, sprite: Internal.TextureAtlasSprite_, isItem: boolean): Internal.BakedQuad;
        /**
         * @deprecated
        */
        copyTo(target: Internal.MutableQuadView_): void;
        abstract normalY(arg0: number): number;
        abstract normalZ(arg0: number): number;
        abstract copyUv(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        readonly VANILLA_QUAD_STRIDE: 32;
        readonly VANILLA_VERTEX_STRIDE: 8;
    }
    type QuadView_ = QuadView;
    class FishingRodHookedTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ItemPredicate_, arg2: Internal.ContextAwarePredicate_, arg3: Internal.ItemPredicate_)
        matches(arg0: Internal.ItemStack_, arg1: Internal.LootContext_, arg2: Internal.Collection_<Internal.ItemStack>): boolean;
        static fishedItem(arg0: Internal.ItemPredicate_, arg1: Internal.EntityPredicate_, arg2: Internal.ItemPredicate_): Internal.FishingRodHookedTrigger$TriggerInstance;
    }
    type FishingRodHookedTrigger$TriggerInstance_ = FishingRodHookedTrigger$TriggerInstance;
    class BlockAgeProcessor extends Internal.StructureProcessor {
        constructor(arg0: number)
        static readonly CODEC: Internal.Codec<Internal.BlockAgeProcessor>;
    }
    type BlockAgeProcessor_ = BlockAgeProcessor;
    class PoiManager$Occupancy extends Internal.Enum<Internal.PoiManager$Occupancy> {
        static valueOf(arg0: string): Internal.PoiManager$Occupancy;
        static values(): Internal.PoiManager$Occupancy[];
        getTest(): Internal.Predicate<Internal.PoiRecord>;
        get test(): Internal.Predicate<Internal.PoiRecord>
        static readonly IS_OCCUPIED: Internal.PoiManager$Occupancy;
        static readonly HAS_SPACE: Internal.PoiManager$Occupancy;
        static readonly ANY: Internal.PoiManager$Occupancy;
    }
    type PoiManager$Occupancy_ = "has_space" | "any" | PoiManager$Occupancy | "is_occupied";
    class DripstoneClusterFeature extends Internal.Feature<Internal.DripstoneClusterConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.DripstoneClusterConfiguration>)
    }
    type DripstoneClusterFeature_ = DripstoneClusterFeature;
    interface SpawnProperties {
        abstract getMobSpawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        abstract getCreatureProbability(): number;
        abstract getSpawners(): Internal.Map<Internal.MobCategory, Internal.List<Internal.MobSpawnSettings$SpawnerData>>;
        get mobSpawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>
        get creatureProbability(): number
        get spawners(): Internal.Map<Internal.MobCategory, Internal.List<Internal.MobSpawnSettings$SpawnerData>>
    }
    type SpawnProperties_ = SpawnProperties;
    interface Vector3fc {
        abstract absolute(arg0: Vector3f_): Vector3f;
        abstract angleSigned(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): number;
        abstract half(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract cross(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract normalize(arg0: Vector3f_): Vector3f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: number, arg2: Vector3f_): Vector3f;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract add(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Vector3f_): Vector3f;
        abstract floor(arg0: Vector3f_): Vector3f;
        abstract isFinite(): boolean;
        abstract mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Vector3f_): Vector3f;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Vector3f_): Vector3f;
        abstract getToAddress(arg0: number): this;
        abstract angleCos(arg0: Internal.Vector3fc_): number;
        abstract half(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract normalize(arg0: number, arg1: Vector3f_): Vector3f;
        abstract sub(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract smoothStep(arg0: Internal.Vector3fc_, arg1: number, arg2: Vector3f_): Vector3f;
        abstract z(): number;
        abstract x(): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract mulPositionW(arg0: Internal.Matrix4fc_, arg1: Vector3f_): number;
        abstract negate(arg0: Vector3f_): Vector3f;
        abstract mul(arg0: number, arg1: Vector3f_): Vector3f;
        abstract hermite(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: number, arg4: Vector3f_): Vector3f;
        abstract mulDirection(arg0: Internal.Matrix4dc_, arg1: Vector3f_): Vector3f;
        abstract orthogonalizeUnit(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract mulAdd(arg0: number, arg1: Internal.Vector3fc_, arg2: Vector3f_): Vector3f;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract lengthSquared(): number;
        abstract get(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateY(arg0: number, arg1: Vector3f_): Vector3f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract mulTranspose(arg0: Internal.Matrix3fc_, arg1: Vector3f_): Vector3f;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f_): Vector3f;
        abstract minComponent(): number;
        abstract ceil(arg0: Vector3f_): Vector3f;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Vector3f_): Vector3f;
        abstract maxComponent(): number;
        abstract dot(arg0: Internal.Vector3fc_): number;
        abstract div(arg0: number, arg1: Vector3f_): Vector3f;
        abstract div(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract min(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract dot(arg0: number, arg1: number, arg2: number): number;
        abstract mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Vector3f_): Vector3f;
        abstract round(arg0: Vector3f_): Vector3f;
        abstract distanceSquared(arg0: Internal.Vector3fc_): number;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Vector3f_): Vector3f;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract rotationTo(arg0: Internal.Vector3fc_, arg1: Quaternionf_): Quaternionf;
        abstract angle(arg0: Internal.Vector3fc_): number;
        abstract mul(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract equals(arg0: Internal.Vector3fc_, arg1: number): boolean;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: Vector3f_): Vector3f;
        abstract mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vector3f_): Vector3f;
        abstract div(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Vector3f_): Vector3f;
        abstract y(): number;
        abstract lerp(arg0: Internal.Vector3fc_, arg1: number, arg2: Vector3f_): Vector3f;
        abstract get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract max(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract length(): number;
        abstract angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        abstract fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Vector3f_): Vector3f;
        abstract mulPosition(arg0: Internal.Matrix4fc_, arg1: Vector3f_): Vector3f;
        abstract rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract distance(arg0: Internal.Vector3fc_): number;
        abstract mulDirection(arg0: Internal.Matrix4fc_, arg1: Vector3f_): Vector3f;
        abstract fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vector3f_): Vector3f;
        abstract mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Vector3f_): Vector3f;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract get(arg0: Vector3f_): Vector3f;
        abstract rotateX(arg0: number, arg1: Vector3f_): Vector3f;
        abstract rotateZ(arg0: number, arg1: Vector3f_): Vector3f;
        abstract orthogonalize(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract cross(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        get finite(): boolean
    }
    type Vector3fc_ = Vector3fc;
    class SweepingEdgeEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        handler$did000$bettercombat$getMaxLevel_DisableSweeping(cir: Internal.CallbackInfoReturnable_<any>): void;
        static getSweepingDamageRatio(arg0: number): number;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type SweepingEdgeEnchantment_ = SweepingEdgeEnchantment;
    class AddGoalTargetsEventJS <T extends Internal.Mob> extends Internal.GoalEventJS<T> {
        constructor(mob: T, selector: Internal.GoalSelector_)
        /**
         * Adds a `OwnerHurtByTargetGoal` to the entity, only applicable to **tamable** mobs
         * @param priority The priority of the goal
        */
        ownerHurtByTarget(priority: number): void;
        /**
         * Remove all goals fitting the specified predicate. Returns a boolean
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * e.removeGoals(context => {
         *     const { goal, entity } = context
         *     return goal.getClass() == $PanicGoal
         * })
         * =====================================
         * @param goalFunction A function to remove goals with entity & available goals as arguments
        */
        removeGoals(goalFunction: Internal.Function_<Internal.ContextUtils$GoalContext, boolean>): void;
        /**
         * Enables the addition of arbitrary goals to an entity
         * 
         * It is the responsibility of the user to ensure the goal is
         * compatible with the entity
         * 
         * Example of usage:
         * =====================================
         * builder.arbitraryTargetGoal(3, entity -> new $DefendVillageTargetGoal(entity))
         * =====================================
         * 
         * Note in the example the entity must be an instance of IronGolem
         * @param priority The priority of the goal
         * @param goalSupplier The goal supplier, a function that takes a Mob and returns a Goal
        */
        arbitraryTargetGoal(priority: number, goalSuppler: Internal.Function_<T, Internal.Goal>): void;
        /**
         * Remove a goal from the entity via class reference.
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * builder.removeGoal($PanicGoal)
         * =====================================
         * @param goal The goal class to remove
        */
        removeGoal(goal: typeof Internal.Goal): void;
        /**
         * Adds a `ResetUniversalAngerTargetGoal` to the entity, only applicable to **neutral** mobs
         * @param priority The priority of the goal
         * @param alertOthersOfSameType If other mobs of the same type should be alerted
        */
        resetUniversalAngerTarget<E extends Internal.Mob & Internal.NeutralMob>(priority: number, alertOthersOfSameType: boolean): void;
        /**
         * Adds a `NearestAttackableTargetGoal` to the entity
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param randomInterval The interval at which the goal amy be 'refreshed'
         * @param mustSee If the mob must have line of sight at all times
         * @param mustReach If the mob must be able to reach the target to attack
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
        */
        nearestAttackableTarget<E extends Internal.LivingEntity>(priority: number, targetClass: E, randomInterval: number, mustSee: boolean, mustReach: boolean, targetConditions: Internal.Predicate_<Internal.LivingEntity>): void;
        /**
         * Adds a `NonTameRandomTargetGoal` to the entity, only applicable to **tamable** mobs
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param mustSee If the mob must have line of sight at all times
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
        */
        nonTameRandomTarget<E extends Internal.LivingEntity>(priority: number, targetClass: E, mustSee: boolean, targetCondition: Internal.Predicate_<Internal.LivingEntity>): void;
        /**
         * Adds a `NearestAttackableTargetGoalJS` to the entity
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param randomInterval The interval at which the goal amy be 'refreshed'
         * @param mustSee If the mob must have line of sight at all times
         * @param mustReach If the mob must be able to reach the target to attack
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
         * @param radius The AABB radius to check for a potential target
        */
        nearestAttackableTarget<E extends Internal.LivingEntity>(priority: number, targetClass: E, randomInterval: number, mustSee: boolean, mustReach: boolean, targetConditions: Internal.Predicate_<Internal.LivingEntity>, radius: Internal.AABB_): void;
        /**
         * Remove all goals.
         * 
         * Example of usage:
         * =====================================
         * builder.removeAllGoals()
         * =====================================
         * @param goal The goal to remove
        */
        removeAllGoals(): void;
        /**
         * Adds s `HurtByTargetGoal` to the entity, only applicable to **pathfinder** mobs
         * @param priority The priority of the goal
         * @param toIgnoreDamage The classes that damage should be ignored from
         * @param alertOthers If other mobs should be alerted when this mob is damaged
         * @param toIgnoreAlert The entity classes that should not be alerted
        */
        hurtByTarget(priority: number, toIgnoreDamage: Internal.List_<typeof any>, alertOthers: boolean, toIgnoreAlert: Internal.List_<typeof any>): void;
    }
    type AddGoalTargetsEventJS_<T extends Internal.Mob> = AddGoalTargetsEventJS<T>;
    class MobEffectEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffectInstance_)
        getEntity(): Internal.Entity;
        getEffectInstance(): Internal.MobEffectInstance;
        get entity(): Internal.Entity
        get effectInstance(): Internal.MobEffectInstance
    }
    type MobEffectEvent_ = MobEffectEvent;
    class PowderSnowBlock extends Internal.Block implements Internal.BucketPickup {
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
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        static canEntityWalkOnPowderSnow(arg0: Internal.Entity_): boolean;
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
    }
    type PowderSnowBlock_ = PowderSnowBlock;
    class SingletonArgumentInfo <A extends Internal.ArgumentType<any>> implements Internal.ArgumentTypeInfo<A, Internal.SingletonArgumentInfo$Template<>> {
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        static contextFree<T extends Internal.ArgumentType<any>>(arg0: Internal.Supplier_<T>): Internal.SingletonArgumentInfo<T>;
        serializeToJson(arg0: Internal.SingletonArgumentInfo$Template_<>, arg1: Internal.JsonObject_): void;
        static contextAware<T extends Internal.ArgumentType<any>>(arg0: Internal.Function_<Internal.CommandBuildContext, T>): Internal.SingletonArgumentInfo<T>;
        serializeToNetwork(arg0: Internal.SingletonArgumentInfo$Template_<>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        unpack(arg0: A): Internal.SingletonArgumentInfo$Template<>;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type SingletonArgumentInfo_<A extends Internal.ArgumentType<any>> = SingletonArgumentInfo<A>;
    class WetSpongeBlock extends Internal.Block {
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
    type WetSpongeBlock_ = WetSpongeBlock;
    class CraftingMenu extends Internal.RecipeBookMenu<Internal.CraftingContainer> implements Internal.CraftingMenuAccess {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        static slotChangedCraftingGrid(arg0: Internal.AbstractContainerMenu_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.CraftingContainer_, arg4: Internal.ResultContainer_): void;
        getAccess(): Internal.ContainerLevelAccess;
        getPlayer(): Player;
        get access(): Internal.ContainerLevelAccess
        get player(): Player
        readonly player: Player;
        static readonly RESULT_SLOT: 0;
        readonly access: Internal.ContainerLevelAccess;
    }
    type CraftingMenu_ = CraftingMenu;
    class ExecuteCommandEntityAction extends Internal.EntityAction<Internal.CommandConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.CommandConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ExecuteCommandEntityAction_ = ExecuteCommandEntityAction;
    class EntityPredicateBuilder$TypeSpecific {
        /**
         * Test properties of the fishing hook that just got reeled in by this entity.
         * @param isOpenWater 
        */
        fishingHook(arg0: boolean): this;
        /**
         * A frog variant.
        */
        frog(arg0: Internal.EntityPredicateBuilder$FrogType_): this;
        /**
         * To check information about this lightning bolt; fails when entity is not a lightning bolt.
        */
        lightningBolt(arg0: Internal.Consumer_<Internal.LightningBoltPredicateBuilder>): this;
        /**
         * Any FishingHookPredicate.
        */
        anyFishingHook(): this;
        /**
         * Any LightningBoltPredicate.
        */
        anyLightningBolt(): this;
        /**
         * To check information about this lightning bolt; fails when entity is not a lightning bolt.
        */
        lightningBoltFromJson(arg0: Internal.JsonObject_): this;
        /**
         * Test if the size of this slime matches a bounds.
        */
        slime(arg0: Bounds_): this;
        /**
         * A cat variant.
        */
        cat(arg0: Internal.EntityPredicateBuilder$CatType_): this;
        /**
         * A simple player type.
        */
        playerFromJson(arg0: Internal.JsonObject_): this;
    }
    type EntityPredicateBuilder$TypeSpecific_ = EntityPredicateBuilder$TypeSpecific;
    class CountConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.IntProvider_)
        constructor(arg0: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        count(): Internal.IntProvider;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.CountConfiguration>;
    }
    type CountConfiguration_ = CountConfiguration;
    class WeightedEntry$IntrusiveBase implements Internal.WeightedEntry {
        constructor(arg0: number)
        constructor(arg0: Internal.Weight_)
        getWeight(): Internal.Weight;
        static wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        get weight(): Internal.Weight
    }
    type WeightedEntry$IntrusiveBase_ = WeightedEntry$IntrusiveBase;
    class StringTag implements Internal.Tag, Internal.SpecialEquality {
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        specialEquals(o: any, shallow: boolean): boolean;
        static skipString(arg0: Internal.DataInput_): void;
        copy(): this;
        accept(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        getType(): Internal.TagType<Internal.StringTag>;
        write(arg0: Internal.DataOutput_): void;
        static quoteAndEscape(arg0: string): string;
        getId(): number;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        static valueOf(arg0: string): Internal.StringTag;
        get asString(): string
        get type(): Internal.TagType<Internal.StringTag>
        get id(): number
        static readonly TYPE: Internal.TagType<Internal.StringTag>;
    }
    type StringTag_ = StringTag;
    abstract class AbstractContainerEventHandler implements Internal.ContainerEventHandler {
        constructor()
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        setFocused(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setDragging(arg0: boolean): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        abstract children(): Internal.List<Internal.GuiEventListener>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getFocused(): Internal.GuiEventListener;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        get focused(): boolean
        set focused(arg0: boolean)
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        set dragging(arg0: boolean)
        get currentFocusPath(): Internal.ComponentPath
        get dragging(): boolean
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
    }
    type AbstractContainerEventHandler_ = AbstractContainerEventHandler;
    class CuredZombieVillagerTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ContextAwarePredicate_, arg2: Internal.ContextAwarePredicate_)
        static curedZombieVillager(): Internal.CuredZombieVillagerTrigger$TriggerInstance;
        matches(arg0: Internal.LootContext_, arg1: Internal.LootContext_): boolean;
    }
    type CuredZombieVillagerTrigger$TriggerInstance_ = CuredZombieVillagerTrigger$TriggerInstance;
    class ExplosiveBarrelBlock extends Internal.FallingBlock implements Internal.SimpleWaterloggedBlock {
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
        explode(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_): void;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
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
    type ExplosiveBarrelBlock_ = ExplosiveBarrelBlock;
    class Allay extends Internal.PathfinderMob implements Internal.InventoryCarrier, Internal.VibrationSystem {
        constructor(arg0: Internal.EntityType_<Internal.Allay>, arg1: Internal.Level_)
        getBrain(): Internal.Brain<Internal.Allay>;
        getSpinningProgress(arg0: number): number;
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
        static getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
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
        isSpinning(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        hasItemInHand(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getHoldingItemAnimationProgress(arg0: number): number;
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
        setJukeboxPlaying(arg0: BlockPos_, arg1: boolean): void;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        isPanicking(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
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
        isDancing(): boolean;
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
        brainProvider(): Internal.Brain$Provider<Internal.Allay>;
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
        static getGameEventFrequency(arg0: Internal.GameEvent_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
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
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setDancing(arg0: boolean): void;
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
        get brain(): Internal.Brain<Internal.Allay>
        get inventory(): Internal.SimpleContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get spinning(): boolean
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
        get dancing(): boolean
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
        get vibrationUser(): Internal.VibrationSystem$User
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set dancing(arg0: boolean)
        get vibrationData(): Internal.VibrationSystem$Data
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly SENSOR_TYPES: [Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>, Internal.SensorType<any>];
        static readonly THROW_SOUND_PITCHES: [0.5625, 0.625, 0.75, 0.9375, 1.0, 1.0, 1.125, 1.25, 1.5, 1.875, 2.0, 2.25, 2.5, 3.0, 3.75, 4.0];
        static readonly MEMORY_TYPES: [Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>];
    }
    type Allay_ = Allay;
    class LycheeContext extends Internal.EmptyContainer {
        stopOpen(arg0: Player_): void;
        static tryClear(arg0: any): void;
        setParam(arg0: Internal.LootContextParam_<any>, arg1: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        lazyGetBlockEntity(): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        save(): Internal.JsonObject;
        setChanged(): void;
        getRandom(): Internal.RandomSource;
        removeParam(arg0: Internal.LootContextParam_<any>): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getParam<T>(arg0: Internal.LootContextParam_<T>): T;
        getMaxStackSize(): number;
        toLootContext(): Internal.LootContext;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        getServerLevel(): Internal.ServerLevel;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        getParamOrNull<T>(arg0: Internal.LootContextParam_<T>): T;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        getLevel(): Internal.Level;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        hasParam(arg0: Internal.LootContextParam_<any>): boolean;
        enqueueActions(arg0: Internal.Stream_<Internal.PostAction>, arg1: number, arg2: boolean): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getParams(): Internal.Map<Internal.LootContextParam<any>, any>;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        static load(arg0: Internal.JsonObject_, arg1: Internal.Delay$LycheeMarker_): Internal.LycheeContext;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get random(): Internal.RandomSource
        get width(): number
        get maxStackSize(): number
        get serverLevel(): Internal.ServerLevel
        get empty(): boolean
        get level(): Internal.Level
        get params(): Internal.Map<Internal.LootContextParam<any>, any>
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        runtime: Internal.ActionRuntime;
        json: Internal.JsonObject;
        itemHolders: Internal.ItemHolderCollection;
    }
    type LycheeContext_ = LycheeContext;
    interface BiomeModifications$BiomeContext {
        abstract getProperties(): Internal.BiomeProperties;
        abstract hasTag(arg0: Internal.TagKey_<Internal.Biome>): boolean;
        abstract getKey(): Internal.Optional<ResourceLocation>;
        get properties(): Internal.BiomeProperties
        get key(): Internal.Optional<ResourceLocation>
    }
    type BiomeModifications$BiomeContext_ = BiomeModifications$BiomeContext;
    class ServerboundChatSessionUpdatePacket extends Internal.Record implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.RemoteChatSession$Data_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        chatSession(): Internal.RemoteChatSession$Data;
        isSkippable(): boolean;
        get skippable(): boolean
    }
    type ServerboundChatSessionUpdatePacket_ = ServerboundChatSessionUpdatePacket;
    class RenderLevelStageEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.RenderLevelStageEvent$Stage_, arg1: Internal.LevelRenderer_, arg2: Internal.PoseStack_, arg3: Matrix4f_, arg4: number, arg5: number, arg6: Internal.Camera_, arg7: Internal.Frustum_)
        getStage(): Internal.RenderLevelStageEvent$Stage;
        getPoseStack(): Internal.PoseStack;
        getPartialTick(): number;
        getProjectionMatrix(): Matrix4f;
        getFrustum(): Internal.Frustum;
        getCamera(): Internal.Camera;
        getRenderTick(): number;
        getLevelRenderer(): Internal.LevelRenderer;
        get stage(): Internal.RenderLevelStageEvent$Stage
        get poseStack(): Internal.PoseStack
        get partialTick(): number
        get projectionMatrix(): Matrix4f
        get frustum(): Internal.Frustum
        get camera(): Internal.Camera
        get renderTick(): number
        get levelRenderer(): Internal.LevelRenderer
    }
    type RenderLevelStageEvent_ = RenderLevelStageEvent;
    class DebugQueryHandler {
        constructor(arg0: Internal.ClientPacketListener_)
        queryBlockEntityTag(arg0: BlockPos_, arg1: Internal.Consumer_<Internal.CompoundTag>): void;
        queryEntityTag(arg0: number, arg1: Internal.Consumer_<Internal.CompoundTag>): void;
        handleResponse(arg0: number, arg1: Internal.CompoundTag_): boolean;
    }
    type DebugQueryHandler_ = DebugQueryHandler;
    class FireworkStarFadeRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
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
    type FireworkStarFadeRecipe_ = FireworkStarFadeRecipe;
    interface IModLanguageProvider$IModLanguageLoader {
        abstract loadMod<T>(arg0: Internal.IModInfo_, arg1: Internal.ModFileScanData_, arg2: Internal.ModuleLayer_): T;
        (arg0: Internal.IModInfo, arg1: Internal.ModFileScanData, arg2: Internal.ModuleLayer): T;
    }
    type IModLanguageProvider$IModLanguageLoader_ = IModLanguageProvider$IModLanguageLoader;
    abstract class DataSlot {
        constructor()
        static standalone(): Internal.DataSlot;
        static forContainer(arg0: Internal.ContainerData_, arg1: number): Internal.DataSlot;
        static shared(arg0: number[], arg1: number): Internal.DataSlot;
        abstract set(arg0: number): void;
        abstract get(): number;
        checkAndClearUpdateFlag(): boolean;
    }
    type DataSlot_ = DataSlot;
    class SuspiciousStewRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
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
    type SuspiciousStewRecipe_ = SuspiciousStewRecipe;
    class ObjectDescJS$Entry extends Internal.Record {
        constructor(key: string, value: Internal.TypeDescJS_, optional: boolean, wrap: boolean)
        constructor(key: string, value: Internal.TypeDescJS_, optional: boolean)
        key(): string;
        value(): Internal.TypeDescJS;
        optional(): boolean;
        wrap(): boolean;
    }
    type ObjectDescJS$Entry_ = ObjectDescJS$Entry;
    interface SurfaceRules$Condition {
        abstract test(): boolean;
        (): boolean;
    }
    type SurfaceRules$Condition_ = SurfaceRules$Condition;
    class PointedDripstoneConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly chanceOfTallerDripstone: number;
        static readonly CODEC: Internal.Codec<Internal.PointedDripstoneConfiguration>;
        readonly chanceOfSpreadRadius2: number;
        readonly chanceOfSpreadRadius3: number;
        readonly chanceOfDirectionalSpread: number;
    }
    type PointedDripstoneConfiguration_ = PointedDripstoneConfiguration;
    class PlayerXpEvent$PickupXp extends Internal.PlayerXpEvent {
        constructor(arg0: Player_, arg1: Internal.ExperienceOrb_)
        constructor()
        getEntity(): Internal.LivingEntity;
        getOrb(): Internal.ExperienceOrb;
        get entity(): Internal.LivingEntity
        get orb(): Internal.ExperienceOrb
    }
    type PlayerXpEvent$PickupXp_ = PlayerXpEvent$PickupXp;
    interface SingletonGeoAnimatable extends Internal.GeoAnimatable {
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        getBoneResetTime(): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        abstract getTick(arg0: any): number;
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        get boneResetTime(): number
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
    }
    type SingletonGeoAnimatable_ = SingletonGeoAnimatable;
    class FluidProperties$Builder {
        tint(tint: Internal.Funcs$_3_<Internal.FluidState, Internal.BlockAndTintGetter, BlockPos, number>): this;
        canDrownIn(val: boolean): this;
        canPushEntity(canPushEntity: boolean): this;
        canExtinguish(val: boolean): this;
        toProperties(): Internal.FluidProperties;
        overlayTexture(text: ResourceLocation_): this;
        stillTexture(tex: ResourceLocation_): this;
        canSwim(canSwim: boolean): this;
        motionScale(motionScale: number): this;
        tint(tint: number): this;
        fallDistanceModifier(val: number): this;
        supportsBoats(val: boolean): this;
        flowingTexture(tex: ResourceLocation_): this;
        customMovement(move: Internal.Funcs$_4_<Internal.FluidState, Internal.LivingEntity, Vec3d, number, boolean>): this;
    }
    type FluidProperties$Builder_ = FluidProperties$Builder;
    class EntityDataSerializer$1 implements Internal.EntityDataSerializer$ForValueType<T> {
        constructor(arg0: Internal.FriendlyByteBuf$Writer_<any>, arg1: Internal.FriendlyByteBuf$Reader_<any>)
        static simple<T>(arg0: Internal.FriendlyByteBuf$Writer_<T>, arg1: Internal.FriendlyByteBuf$Reader_<T>): Internal.EntityDataSerializer<T>;
        static simpleId<T>(arg0: Internal.IdMap_<T>): Internal.EntityDataSerializer<T>;
        createAccessor(arg0: number): Internal.EntityDataAccessor<T>;
        copy(arg0: T): T;
        static optional<T>(arg0: Internal.FriendlyByteBuf$Writer_<T>, arg1: Internal.FriendlyByteBuf$Reader_<T>): Internal.EntityDataSerializer<Internal.Optional<T>>;
        static simpleEnum<T extends Internal.Enum<T>>(arg0: T): Internal.EntityDataSerializer<T>;
        write(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        read(arg0: Internal.FriendlyByteBuf_): T;
        readonly f_238101_: Internal.FriendlyByteBuf$Writer<any>;
        readonly f_238102_: Internal.FriendlyByteBuf$Reader<any>;
    }
    type EntityDataSerializer$1_ = EntityDataSerializer$1;
    interface NeighborUpdater {
        abstract shapeUpdate(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        abstract neighborChanged(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Block_, arg3: BlockPos_, arg4: boolean): void;
        executeUpdate(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        executeShapeUpdate(arg0: Internal.LevelAccessor_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: BlockPos_, arg5: number, arg6: number): void;
        abstract neighborChanged(arg0: BlockPos_, arg1: Internal.Block_, arg2: BlockPos_): void;
        updateNeighborsAtExceptFromFacing(arg0: BlockPos_, arg1: Internal.Block_, arg2: Internal.Direction_): void;
        readonly UPDATE_ORDER: Internal.Direction[];
    }
    type NeighborUpdater_ = NeighborUpdater;
    class Sensitivity {
        constructor()
        constructor(pitch: number, yaw: number, roll: number)
        pitch: number;
        roll: number;
        yaw: number;
    }
    type Sensitivity_ = Sensitivity;
    class PathComputationType extends Internal.Enum<Internal.PathComputationType> {
        static values(): Internal.PathComputationType[];
        static valueOf(arg0: string): Internal.PathComputationType;
        static readonly AIR: Internal.PathComputationType;
        static readonly LAND: Internal.PathComputationType;
        static readonly WATER: Internal.PathComputationType;
    }
    type PathComputationType_ = "land" | PathComputationType | "air" | "water";
    interface IValueModifyingPower <T extends Internal.IDynamicFeatureConfiguration> {
        abstract getModifiers(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): Internal.List<Internal.ConfiguredModifier<any>>;
        (arg0: Internal.ConfiguredPower<T, any>, arg1: Internal.Entity): Internal.List_<Internal.ConfiguredModifier<any>>;
    }
    type IValueModifyingPower_<T extends Internal.IDynamicFeatureConfiguration> = IValueModifyingPower<T>;
    class Behaviors extends Internal.Enum<Internal.Behaviors> {
        /**
         * Creates a `LocateHidingPlace` behavior
         * @param radius The maximum radius a hiding place will be searched for
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDistance The distance at which the entity considers itself close enough to the hiding place
        */
        locateHidingPlace(radius: number, speedModifier: number, closeEnoughDistance: number): Internal.OneShot<Internal.LivingEntity>;
        /**
         * Creates a `DoNothing` behavior
         * @param minTime The minimum amount of time to do nothing for
         * @param maxTime The maximum amount of time to do nothing for
        */
        doNothing(minTime: number, maxTime: number): Internal.DoNothing;
        /**
         * Creates a `VillageBoundRandomStroll` behavior, only applicable to **pathfinder** mobs
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param radius The radius around the village the mob will stroll
         * @param maxyDist The vertical range the mob will wander in
        */
        villageBoundRandomStroll(speedModifier: number, radius: number, maxYDist: number): Internal.OneShot<Internal.PathfinderMob>;
        /**
         * Creates a `Mount` behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        mount(speedModifier: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `WakeUp` behavior
        */
        wakeUp(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `GoToWantedItem` behavior
         * @param predicate The predicate that is checked to determine if the entity may use this behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistToWalk The maximum distance the entity will walk to go to the wanted item
         * @param hasWlkTargetMemoryModuleType If the entity has the `minecraft:walk_target` memory type
        */
        goToWantedItem<E extends Internal.LivingEntity>(predicate: Internal.Predicate_<E>, speedModifier: number, maxDistToWalk: number, hasWalkTargetMemoryModuleType: boolean): Internal.BehaviorControl<E>;
        /**
         * Creates a `RandomStroll` behavior, only applicable to **pathfinder** mobs
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxHorizontalDistance The maximum horizontal distance the mob will stroll
         * @param maxVerticalDistance The maximum vertical distance the mob will stroll
        */
        randomStroll(speedModifier: number, maxHorizontalDistance: number, maxVerticalDistance: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `ForceUnmount` behavior
        */
        forceUnmount(): Internal.ForceUnmount;
        /**
         * Creates a `SocializeAtBell` behavior
        */
        socializeAtBell(): Internal.OneShot<Internal.LivingEntity>;
        /**
         * Creates a `SetRaidStatus` behavior
        */
        setRaidStatus(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates an `AnimalMakeLove` behavior, only applicable to **animal** entities
         * @param partnerType The entity type the animal can breed with, note: both animals must have the same class unless their `canBreed` methods have been overridden
         * @param speedModifier The modifier to the animal's speed when this behavior is active
        */
        animalMakeLove(partnerType: Internal.EntityType_<Internal.Animal>, speedModifier: number): Internal.AnimalMakeLove;
        /**
         * Creates a `SetClosestHomeAsWalkTarget` behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        setClosestHomeAsWalkTarget(speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `FlyingRandomStroll` behavior, only applicable to **pathfinder** mobs
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        flyingRandomStroll(speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `FollowTemptation` behavior, only applicable to **pathfinder** mobs
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        followTemptation(speedModifier: Internal.Function_<Internal.LivingEntity, number>): Internal.FollowTemptation;
        /**
         * Creates a `StrollAroundPoi` behavior, only applicable to **pathfinder** mobs
         * @param memoryType The memory that is used for the poi
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistanceFromPoi The maximum distance away from the poi that the mob may go while strolling
        */
        strollAroundPoi(memoryType: Internal.MemoryModuleType_<Internal.GlobalPos>, speedModifier: number, maxDistanceFromPoi: number): Internal.OneShot<Internal.PathfinderMob>;
        /**
         * Creates a `MoveToSkySeeingSpot` behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        moveToSkySeeingSpot(speedModifier: number): Internal.OneShot<Internal.LivingEntity>;
        /**
         * Creates a `DismountOrSkipMounting` behavior
         * @param maxWalkDistToRideTarget The maximum distance the entity is willing to walk to ride an entity
         * @param dontRideIf The predicate for when the entity should get off its mount
        */
        dismountOrSkipMounting<E extends Internal.LivingEntity>(maxWalkDistToRideTarget: number, dontRideIf: Internal.BiPredicate_<E, Internal.Entity>): Internal.BehaviorControl<E>;
        /**
         * Creates a `LongJumpToPreferredBlock` behavior, only applicable to **mob** entities
         * @param minTimeBetweenJumps The minimum number of ticks between jumps
         * @param maxTimeBetweenJumps The maximum number of ticks between jumps
         * @param maxJumpHeight The maximum vertical distance the mob will attempt to jump between
         * @param maxJumpWidth the maximum horizontal distance the mob will attempt to jump
         * @param maxJumpVelocity The maximum velocity the mob may jump at
         * @param jumpSound The sound that is played when the mob jumps
         * @param preferredBlockTag A block tag, the blocks which the mob will attempt to jump to
         * @param preferredBlockChance The chance that the behavior will use its preferred blocks for jumps instead of any block. Range: [0, 1]
         * @param acceptableLandingSpot A filter for what blocks are acceptable to land on
        */
        longJumpToPreferredBlock<E extends Internal.Mob>(minTimeBetweenJumps: number, maxTimeBetweenJumps: number, maxJumpHeight: number, maxJumpWidth: number, maxJumpVelocity: number, jumpSound: Internal.Function_<E, Internal.SoundEvent>, preferredBlockTag: ResourceLocation_, preferredBlockChance: number, acceptableLandingSpot: Internal.BiPredicate_<E, BlockPos>): Internal.LongJumpToPreferredBlock<E>;
        /**
         * Creates a behavior which sets the entity's attack target to its walk target if the target is out of reach
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        setWalkTargetFromAttackTargetIfTargetOutOfReach(speedModifier: Internal.Function_<Internal.LivingEntity, number>): Internal.BehaviorControl<Internal.Mob>;
        /**
         * Creates a `StopBeingAngryIfTargetDead` behavior, only applicable to **mob** entities
        */
        stopBeingAngryIfTargetDead(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `LookAtTargetSink` behavior, only applicable to **mob** entities
         * @param minDuration The minimum duration of the behavior
         * @param maxDuration The maximum duration of the behavior
        */
        lookAtTargetSink(minDuration: number, maxDuration: number): Internal.LookAtTargetSink;
        /**
         * Creates an `AcquirePoi` behavior, only applicable to **pathfinder** entities
         * @param poiType A predicate for pois the entity will attempt to acquire
         * @param memoryKey The memory type that may not be present for this behavior to be enabled, villagers use `minecraft:job_site` here
         * @param memoryToAcquire The memory type to use when a poi is acquired, villagers use `minecraft:potential_job_site` here
         * @param onlyIfAdult If this behavior should only apply when the entity is an adult
         * @param onPoiAcquisitionEvent The entity event to be sent to the entity when it acquires the poi, may be null to not send a client bound packet. This value is handled by an entity's implementation of the `handleEntityEvent` method
        */
        acquirePoi(poiType: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, memoryKey: Internal.MemoryModuleType_<Internal.GlobalPos>, memoryToAcquire: Internal.MemoryModuleType_<Internal.GlobalPos>, onlyIfAdult: boolean, onPoiAcquisitionEvent: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `PrepareRanNearestTarget` behavior, only applicable to **pathfinder** mobs
         * @param cooldownOnFall Sets the `minecraft:ram_cooldown_ticks` memory based on the entity when the behavior ends
         * @param minRamDistance The minimum distance something will be rammed at
         * @param maxRamDistance The maximum distance something will be rammed at
         * @param walkSpeed The speed at which the mob will walk at
         * @param targetingConditions The targeting conditions used by the entity with this behavior
         * @param ramPrepareTime The amount of ticks the entity will prepare to ram its target
         * @param prepareRamSound The sound event that will be played based on the entity
        */
        prepareRamNearestTarget<E extends Internal.PathfinderMob>(cooldownOnFall: Internal.ToIntFunction_<E>, minRamDistance: number, maxRamDistance: number, walkSpeed: number, targetingConditions: Internal.TargetingConditions_, ramPrepareTime: number, prepareRamSound: Internal.Function_<E, Internal.SoundEvent>): Internal.PrepareRamNearestTarget<E>;
        /**
         * Creates a `StartCelebratingIfTargetDead` behavior
         * @param celebrationDuration The number of ticks the entity should celebrate for
         * @param dancePredicate A predicate for if the entity should dance. The first entity provided is the entity that will dance, the second is the target
        */
        startCelebratingIfTargetDead(celebrationDuration: number, dancePredicate: Internal.BiPredicate_<Internal.LivingEntity, Internal.LivingEntity>): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `TryFindLand` behavior, only applicable to **pathfinder** mobs
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        tryFindLand(range: number, speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `StrollToPoi` behavior, only applicable to **pathfinder** mobs
         * @param memoryType The memory that is used for the poi
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDist The distance that is considered close enough to the poi
         * @param maxDistanceFromPoi The maximum distance away from the poi that this behavior will apply
        */
        strollToPoi(memoryType: Internal.MemoryModuleType_<Internal.GlobalPos>, speedModifier: number, closeEnoughDist: number, maxDistanceFromPoi: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `MoveToTargetSink` behavior, only applicable to **mob** entities
         * @param minDuration The minimum duration of the behavior
         * @param maxDuration The maximum duration of the behavior
        */
        moveToTargetSink(minDuration: number, maxDuration: number): Internal.MoveToTargetSink;
        /**
         * Creates a `StartAttacking` behavior, only applicable to **mob** entities
         * @param canAttackPredicate A predicate for if the mob can attack
         * @param targetFinder A function that finds a target to attack
         * @param duration The number of ticks that the behavior should be active for
        */
        startAttacking<E extends Internal.Mob>(canAttackPredicate: Internal.Predicate_<E>, targetFinder: Internal.Function_<E, Internal.LivingEntity>): Internal.BehaviorControl<E>;
        /**
         * Creates a `ValidateNearbyPoi` behavior
         * @param poiPredicate The predicate that is used to validate the poi
         * @param memoryType The memory that is used for the poi
        */
        validateNearbyPoi(poiPredicate: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, memoryType: Internal.MemoryModuleType_<Internal.GlobalPos>): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `BecomePassiveIfMemoryPresent` behavior
         * @param memoryType The memory type that will pacify the entity
         * @param pacifyDuration How long the entity will be pacified for
        */
        becomePassiveIfMemoryPresent(memoryType: Internal.MemoryModuleType_<any>, pacifyDuration: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `CountCooldownTicks` behavior
         * @param coolDownTicks The memory type to use to keep track of the cool down
        */
        countDownCooldownTicks(coolDownTicks: Internal.MemoryModuleType_<number>): Internal.CountDownCooldownTicks;
        /**
         * Creates a `StayCloseToTarget` behavior
         * @param targetPositionTracker A function that returns the position tracker for the entity, the returned tracker may be null, see `.blockPosTracker()` and `.entityPosTracker()`
         * @param pPredicate The predicate to use with the living Entity as an argument
         * @param closeEnough The distance that is close enough to the target
         * @param tooFar The distance that is too far from the target
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        stayCloseToTarget(targetPositionGetter: Internal.Function_<Internal.LivingEntity, Internal.PositionTracker>, pPredicate: Internal.Predicate_<Internal.LivingEntity>, closeEnough: number, tooFar: number, speedModifier: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `LongJumpToRandomPos` behavior, only applicable to **mob** entities
         * @param minTimeBetweenJumps The minimum number of ticks between jumps
         * @param maxTimeBetweenJumps The maximum number of ticks between jumps
         * @param maxJumpHeight The maximum vertical distance the mob will attempt to jump between
         * @param maxJumpWidth the maximum horizontal distance the mob will attempt to jump
         * @param maxJumpVelocity The maximum velocity the mob may jump at
         * @param jumpSound The sound that is played when the mob jumps
         * @param acceptableLandingSpot A filter for what blocks are acceptable to land on
        */
        longJumpToRandomPos<E extends Internal.Mob>(minTimeBetweenJumps: number, maxTimeBetweenJumps: number, maxJumpHeight: number, maxJumpWidth: number, maxJumpVelocity: number, jumpSound: Internal.Function_<E, Internal.SoundEvent>, acceptableLandingSpot: Internal.BiPredicate_<E, BlockPos>): Internal.LongJumpToRandomPos<E>;
        static valueOf(name: string): Internal.Behaviors;
        /**
         * Creates an `InteractWith` behavior
         * @param typeToInteractWith The entity type to interact with
         * @param interactionRange The range the entity will interact with the other entity
         * @param selfFilter A self-predicate which determines when this behavior can be used
         * @param targetFilter A target-predicate which determines when this behavior can be used
         * @param memory The memory type to use for this behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistance The maximum distance they entity may acquire an interaction target from
        */
        interactWith<E extends Internal.LivingEntity, T extends Internal.LivingEntity>(typeToInteractWith: Internal.EntityType_<T>, interactionRange: number, selfFilter: Internal.Predicate_<E>, targetFilter: Internal.Predicate_<T>, memory: Internal.MemoryModuleType_<T>, speedModifier: number, maxDistance: number): Internal.BehaviorControl<E>;
        static values(): Internal.Behaviors[];
        /**
         * Creates a `Swim` behavior, only applicable to **mob** entities
         * @param chance The chance the mob will move upwards during a tick. Range: [0, 1]
        */
        swim(chance: number): Internal.Swim;
        /**
         * Creates a `setEntityLookTarget` behavior
         * @param predicate A predicate for valid target entities
         * @param maxDist The maximum distance a target may be
        */
        setEntityLookTarget(predicate: Internal.Predicate_<Internal.LivingEntity>, maxDist: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `ReactToBell` behavior
        */
        reactToBell(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `SetWalkTargetFromLookTarget` behavior
         * @param predicate The predicate for setting the walk target
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDistance The distance that is close enough to the target to stop walking
        */
        setWalkTargetFromLookTarget(predicate: Internal.Predicate_<Internal.LivingEntity>, speedModifier: Internal.Function_<Internal.LivingEntity, number>, closeEnoughDistance: number): Internal.OneShot<Internal.LivingEntity>;
        /**
         * Creates a `EraseMemoryIf` behavior
         * @param predicate When to erase the memory
         * @param memoryType The memory type to be erased
        */
        eraseMemoryIf<E extends Internal.LivingEntity>(predicate: Internal.Predicate_<E>, memoryType: Internal.MemoryModuleType_<any>): Internal.BehaviorControl<E>;
        /**
         * Creates a `PlayTagWithOtherKids` behavior, only applicable to **pathfinder** mobs
        */
        playTagWithOtherKids(): Internal.PlayTagWithOtherKids;
        /**
         * Creates a `StopAttackingIfTargetInvalid` behavior, only applicable to **mob** entities
         * @param stopAttackingWhen A predicate for when the target is no longer valid
         * @param onTargetErased Actions that should be performed when the attack target is cleared, the first entity is the attacker and the second is the target
         * @param canGetTiredOfTryingToReachTarget If the attacker can get tired of trying to reach its target
        */
        stopAttackingIfTargetInvalid<E extends Internal.Mob>(stopAttackingWhen: Internal.Predicate_<Internal.LivingEntity>, onTargetErased: Internal.BiConsumer_<E, Internal.LivingEntity>, canGetTiredOfTryingToReachTarget: boolean): Internal.BehaviorControl<E>;
        /**
         * Creates a `JumpOnBed` behavior, only applicable to **mob** entities
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        jumpOnBed(speedModifier: number): Internal.JumpOnBed;
        /**
         * Creates an `BabyFollowAdult` behavior, only applicable to **ageable** mobs
         * @param minFollowRange The minimum follow distance of the baby
         * @param maxFollowRange The maximum follow distance of the baby
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        babyFollowAdult(minFollowRange: number, maxFollowRange: number, speedModifier: Internal.Function_<Internal.LivingEntity, number>): Internal.OneShot<Internal.AgeableMob>;
        /**
         * Creates a `MeleeAttack` behavior, only applicable to **mob** entities
         * @param attackCooldown The attack cooldown of the entity when this behavior is active
        */
        meleeAttack(attackCooldown: number): Internal.OneShot<Internal.Mob>;
        /**
         * Creates a `LongJumpMidJump` behavior, only applicable to **mob** entities
         * @param minTicksBetweenJumps The minimum number of ticks that must pass before the entity must jump
         * @param maxTicksBetweenJumps The maximum number of ticks that must pass before the entity must jump
         * @param landingSound The sound event that will be broadcast when the entity lands
        */
        longJumpMidJump(minTicksBetweenJumps: number, maxTicksBetweenJumps: number, landingSound: Internal.SoundEvent_): Internal.LongJumpMidJump;
        /**
         * Creates an `AnimalPanic` behavior, only applicable to **pathfinder** entities
         * @param speedModifier The modifier to the animal's speed when this behavior is active
        */
        animalPanic(speedMultiplier: number): Internal.AnimalPanic;
        /**
         * Creates a `BackUpIfTooClose` behavior, only applicable to **mob** entities
         * @param tooCloseDistance The distance at which the mob will begin to backup
         * @param strafeSpeed The speed at which the entity will back away
        */
        backUpIfTooClose(tooCloseDistance: number, strafeSpeed: number): Internal.OneShot<Internal.Mob>;
        /**
         * Creates a `RingBell` behavior
        */
        ringBell(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a new `TargetingConditions` for use in `.prepareRamNearestTarget()`
         * @param isForCombat If the conditions will be used for combat
         * @param range The range at which the entity will target
         * @param ignoreLineOfSight If the line of sight requirement should be ignored
         * @param ignoreInvisibilityTesting If the consideration of the target's invisibility status should be ignored
         * @param selector Sets the predicate for the target, may be null to accept all entities
        */
        targetingConditions(isForCombat: boolean, range: number, ignoreLineOfSight: boolean, ignoreInvisibilityTesting: boolean, selector: Internal.Predicate_<Internal.LivingEntity>): Internal.TargetingConditions;
        /**
         * Creates a `SleepInBed` behavior
        */
        sleepInBed(): Internal.SleepInBed;
        /**
         * Creates a `TryFindLandNearWater` behavior, only applicable to **pathfinder** mobs
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        tryFindLandNearWater(range: number, speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `SetHiddenState` behavior
         * @param stayHiddenSeconds How long the entity should be hidden for
         * @param closeEnoughDist The distance that is considered close enough to a hiding place
        */
        setHiddenState(stayHiddenSeconds: number, closeEnoughDist: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `BlockPosTracker` for use in `.stayCloseToTarget()`
         * @param pos THe position that is to be tracked
        */
        blockPosTracker(pos: BlockPos_): Internal.BlockPosTracker;
        /**
         * Creates a `InsideBrownianWalk` behavior, only applicable to **pathfinder** entities
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        insideBrownianWalk(speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates an `EntityTracker` for use in `.stayCloseToTarget()`
         * @param entity The target entity
         * @param trackEyeHeight If the eye height of the target should be considered
        */
        entityPosTracker(entity: Internal.Entity_, trackEyeHeight: boolean): Internal.EntityTracker;
        /**
         * Creates a `TryFindWater` behavior, only applicable to **pathfinder** mobs
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        tryFindWater(range: number, speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates an `InteractWithDoor` behavior
        */
        interactWithDoor(): Internal.InteractWithDoor;
        /**
         * Creates a `SetWalkTargetAwayFrom` behavior, only applicable to **pathfinder** mobs
         * @param pWalkTargetAwayFromMemory The memory type to use as the walk away from target
         * @param pSpeedModifier The modifier to the mob's speed when this behavior is active
         * @param pDesiredDistance The desired distance away from the target the entity will attempt to be
         * @param pHasTarget If the entity needs the `minecraft:walk_target` memory type
        */
        setWalkTargetAwayFrom(pWalkTargetAwayFromMemory: Internal.MemoryModuleType_<Internal.Entity>, pSpeedModifier: number, pDesiredDistance: number, pHasTarget: boolean): Internal.OneShot<Internal.PathfinderMob>;
        /**
         * Creates a `ResetRaidStatus` behavior
        */
        resetRaidStatus(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `SetLookAndInteract` behavior
         * @param type The entity type that the entity interacts with
         * @param interactionRange The range that the entity will interact with the target
        */
        setLookAndInteract(type: Internal.EntityType_<any>, interactionRange: number): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `GoToTargetLocation` behavior, only applicable to **mob** entities
         * @param locationMemory The memory type to use to store the target location
         * @param closeEnoughDistance The distance that is close enough to the location for the entity to consider it 'at' the target location
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        gotoTargetLocation<E extends Internal.Mob>(locationMemory: Internal.MemoryModuleType_<BlockPos>, closeEnoughDistance: number, speedModifier: number): Internal.OneShot<E>;
        /**
         * Creates a `UpdateActivityFromSchedule` behavior
        */
        updateActivityFromSchedule(): Internal.BehaviorControl<Internal.LivingEntity>;
        /**
         * Creates a `RandomSwim` behavior, only applicable to **pathfinder** mobs
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        randomSwim(speedModifier: number): Internal.BehaviorControl<Internal.PathfinderMob>;
        /**
         * Creates a `SetClosestHomeAsWalkTarget` behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        set closestHomeAsWalkTarget(speedModifier: number)
        /**
         * Creates a behavior which sets the entity's attack target to its walk target if the target is out of reach
         * @param speedModifier The modifier to the mob's speed when this behavior is active
        */
        set walkTargetFromAttackTargetIfTargetOutOfReach(speedModifier: Internal.Function_<Internal.LivingEntity, number>)
        static readonly INSTANCE: Internal.Behaviors;
    }
    type Behaviors_ = "instance" | Behaviors;
    class ActionOnItemUsePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ActionOnItemUseConfiguration> implements Internal.Prioritized<Internal.ActionOnItemUseConfiguration, Internal.ActionOnItemUsePower> {
        constructor()
        getPriority(arg0: Internal.ActionOnItemUseConfiguration_): number;
        getPriority(arg0: Internal.IDynamicFeatureConfiguration_): number;
        canRun(arg0: Internal.Holder_<Internal.ConfiguredPower<Internal.ActionOnItemUseConfiguration, Internal.ActionOnItemUsePower>>, arg1: Internal.Entity_, arg2: Internal.ItemStack_, arg3: Internal.ActionOnItemUseConfiguration$TriggerType_, arg4: Internal.ActionOnItemUseConfiguration$PriorityPhase_): boolean;
        static execute(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.Mutable_<Internal.ItemStack>, arg3: Internal.ActionOnItemUseConfiguration$TriggerType_, arg4: Internal.ActionOnItemUseConfiguration$PriorityPhase_): void;
    }
    type ActionOnItemUsePower_ = ActionOnItemUsePower;
    class ModifyFluidRenderPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ModifyFluidRenderConfiguration> {
        constructor()
        check(arg0: Internal.ConfiguredPower_<Internal.ModifyFluidRenderConfiguration, any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>, arg4: Internal.FluidState_): boolean;
    }
    type ModifyFluidRenderPower_ = ModifyFluidRenderPower;
    class AbstractIllager$IllagerArmPose extends Internal.Enum<Internal.AbstractIllager$IllagerArmPose> {
        static valueOf(arg0: string): Internal.AbstractIllager$IllagerArmPose;
        static values(): Internal.AbstractIllager$IllagerArmPose[];
        static readonly BOW_AND_ARROW: Internal.AbstractIllager$IllagerArmPose;
        static readonly CROSSBOW_CHARGE: Internal.AbstractIllager$IllagerArmPose;
        static readonly CROSSED: Internal.AbstractIllager$IllagerArmPose;
        static readonly CELEBRATING: Internal.AbstractIllager$IllagerArmPose;
        static readonly NEUTRAL: Internal.AbstractIllager$IllagerArmPose;
        static readonly SPELLCASTING: Internal.AbstractIllager$IllagerArmPose;
        static readonly CROSSBOW_HOLD: Internal.AbstractIllager$IllagerArmPose;
        static readonly ATTACKING: Internal.AbstractIllager$IllagerArmPose;
    }
    type AbstractIllager$IllagerArmPose_ = "crossed" | "neutral" | "celebrating" | "spellcasting" | "attacking" | "crossbow_hold" | "bow_and_arrow" | "crossbow_charge" | AbstractIllager$IllagerArmPose;
    abstract class MultithreadEventExecutorGroup extends Internal.AbstractEventExecutorGroup {
        submit(arg0: Internal.Callable_<any>): Internal.Future<any>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        executorCount(): number;
        submit(arg0: Internal.Runnable_): Internal.Future<any>;
        submit(arg0: Internal.Runnable_, arg1: any): Internal.Future<any>;
        schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        schedule(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
    }
    type MultithreadEventExecutorGroup_ = MultithreadEventExecutorGroup;
    interface IJeiRuntime {
        abstract getEditModeConfig(): Internal.IEditModeConfig;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIngredientVisibility(): Internal.IIngredientVisibility;
        abstract getJeiHelpers(): Internal.IJeiHelpers;
        abstract getKeyMappings(): Internal.IJeiKeyMappings;
        abstract getIngredientManager(): Internal.IIngredientManager;
        abstract getRecipesGui(): Internal.IRecipesGui;
        abstract getConfigManager(): Internal.IJeiConfigManager;
        abstract getIngredientListOverlay(): Internal.IIngredientListOverlay;
        abstract getIngredientFilter(): Internal.IIngredientFilter;
        abstract getRecipeTransferManager(): Internal.IRecipeTransferManager;
        abstract getBookmarkOverlay(): Internal.IBookmarkOverlay;
        abstract getRecipeManager(): Internal.IRecipeManager;
        abstract getScreenHelper(): Internal.IScreenHelper;
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
    type IJeiRuntime_ = IJeiRuntime;
    interface IForgeItem extends Internal.FabricItem {
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
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
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
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
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        (arg0: Internal.ItemStack): boolean;
    }
    type IForgeItem_ = IForgeItem;
    class StairsShape extends Internal.Enum<Internal.StairsShape> implements Internal.StringRepresentable {
        static values(): Internal.StairsShape[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.StairsShape;
        get serializedName(): string
        static readonly OUTER_LEFT: Internal.StairsShape;
        static readonly INNER_RIGHT: Internal.StairsShape;
        static readonly STRAIGHT: Internal.StairsShape;
        static readonly OUTER_RIGHT: Internal.StairsShape;
        static readonly INNER_LEFT: Internal.StairsShape;
    }
    type StairsShape_ = "inner_left" | "outer_left" | StairsShape | "outer_right" | "inner_right" | "straight";
    class RenderStateShard$TexturingStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$TexturingStateShard_ = RenderStateShard$TexturingStateShard;
    interface Vector3ic {
        abstract maxComponent(): number;
        abstract z(): number;
        abstract y(): number;
        abstract x(): number;
        abstract min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract negate(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: Internal.Vector3ic_): number;
        abstract get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract absolute(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract gridDistance(arg0: Internal.Vector3ic_): number;
        abstract sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract getToAddress(arg0: number): this;
        abstract lengthSquared(): number;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract distance(arg0: Internal.Vector3ic_): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract gridDistance(arg0: number, arg1: number, arg2: number): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract minComponent(): number;
    }
    type Vector3ic_ = Vector3ic;
    interface ArmorMaterial {
        abstract getDefenseForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getDurabilityForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getRepairIngredient(): Internal.Ingredient;
        abstract getEnchantmentValue(): number;
        abstract getName(): string;
        abstract getToughness(): number;
        abstract getKnockbackResistance(): number;
        abstract getEquipSound(): Internal.SoundEvent;
        get repairIngredient(): Internal.Ingredient
        get enchantmentValue(): number
        get name(): string
        get toughness(): number
        get knockbackResistance(): number
        get equipSound(): Internal.SoundEvent
    }
    type ArmorMaterial_ = string | ArmorMaterial;
    class Minecraft extends Internal.ReentrantBlockableEventLoop<Internal.Runnable> implements Internal.WindowEventHandler, Internal.MinecraftClient_BetterCombat, Internal.IForgeMinecraft, Internal.MinecraftClientKJS, net.bettercombat.mixin.client.MinecraftClientAccessor, me.jellysquid.mods.sodium.mixin.core.render.MinecraftAccessor, Internal.MinecraftClientAccessor, Internal.MinecraftAccessor {
        constructor(arg0: any_)
        getReportingContext(): Internal.ReportingContext;
        getResourcePackDirectory(): Internal.Path;
        getCursorTarget(): Internal.Entity;
        debugFpsMeterKeyPress(arg0: number): void;
        handler$doj000$unionlib$handleKeybinds_inject(ci: Internal.CallbackInfo_): void;
        handler$dmb000$irons_spellbooks$changeGlowOutline(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        delayCrashRaw(arg0: Internal.CrashReport_): void;
        destroy(): void;
        renderOnThread(): boolean;
        showOnlyReducedInfo(): boolean;
        handler$doj000$unionlib$resizeDisplay_inject(ci: Internal.CallbackInfo_): void;
        clearLevel(arg0: Internal.Screen_): void;
        getGpuUtilization(): number;
        getCurrentServer(): Internal.ServerData;
        getFps(): number;
        getProxy(): Internal.Proxy;
        getResourceManager(): Internal.ResourceManager;
        getOverlay(): Internal.Overlay;
        shouldEntityAppearGlowing(arg0: Internal.Entity_): boolean;
        getToasts(): Internal.ToastComponent;
        pushGuiLayer(arg0: Internal.Screen_): void;
        getSoundManager(): Internal.SoundManager;
        static useShaderTransparency(): boolean;
        getSplashManager(): Internal.SplashManager;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setAttackCooldown(arg0: number): void;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setConnectedToRealms(arg0: boolean): void;
        quickPlayLog(): Internal.QuickPlayLog;
        getFrameTimer(): Internal.FrameTimer;
        getConnection(): Internal.Connection;
        getResourcePackRepository(): Internal.PackRepository;
        debugClientMetricsStart(arg0: Internal.Consumer_<Internal.Component>): boolean;
        getBlockEntityRenderDispatcher(): Internal.BlockEntityRenderDispatcher;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        getLevelSource(): Internal.LevelStorageSource;
        getMainRenderTarget(): Internal.RenderTarget;
        getBlockRenderer(): Internal.BlockRenderDispatcher;
        setTitle(t: string): void;
        grabPanoramixScreenshot(arg0: Internal.File_, arg1: number, arg2: number): Internal.Component;
        getFrameTimeNs(): number;
        getSkinManager(): Internal.SkinManager;
        allowsRealms(): boolean;
        getVersionType(): string;
        getGpuWarnlistManager(): Internal.GpuWarnlistManager;
        forceSetScreen(arg0: Internal.Screen_): void;
        is64Bit(): boolean;
        populateSearchTree<T>(arg0: Internal.SearchRegistry$Key_<T>, arg1: Internal.List_<T>): void;
        getTextureManager(): Internal.TextureManager;
        getRealms32BitWarningStatus(): Internal.Realms32BitWarningStatus;
        getDisplayName(): Internal.Component;
        getPartialTick(): number;
        isSingleplayer(): boolean;
        getHotbarManager(): Internal.HotbarManager;
        run(): void;
        static fillReport(arg0: Internal.Minecraft_, arg1: Internal.LanguageManager_, arg2: string, arg3: Internal.Options_, arg4: Internal.CrashReport_): void;
        resizeDisplay(): void;
        setOverlay(arg0: Internal.Overlay_): void;
        static useAmbientOcclusion(): boolean;
        isAltDown(): boolean;
        getUpswingTicks(): number;
        isLocalServer(): boolean;
        hasSingleplayerServer(): boolean;
        getTutorial(): Internal.Tutorial;
        getEntityModels(): Internal.EntityModelSet;
        getDeltaFrameTime(): number;
        handler$dnf000$fabric_registry_sync_v0$disconnectAfter(screen_1: Internal.Screen_, info: Internal.CallbackInfo_): void;
        cancelUpswing(): void;
        clearLevel(): void;
        wrapRunnable(arg0: Internal.Runnable_): Internal.Runnable;
        getSearchTree<T>(arg0: Internal.SearchRegistry$Key_<T>): Internal.SearchTree<T>;
        static getFps$photon_$md$2a2e30$0(): number;
        setLastInputType(arg0: Internal.InputType_): void;
        setWindowActive(arg0: boolean): void;
        clearResourcePacksOnError(arg0: Internal.Throwable_, arg1: Internal.Component_): void;
        static useFancyGraphics(): boolean;
        getMusicManager(): Internal.MusicManager;
        delayTextureReload(): Internal.CompletableFuture<void>;
        getTextureAtlas(arg0: ResourceLocation_): Internal.Function<ResourceLocation, Internal.TextureAtlasSprite>;
        doWorldLoad(arg0: string, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.PackRepository_, arg3: Internal.WorldStem_, arg4: boolean): void;
        getScheduledEvents(): Internal.ScheduledEvents;
        static crash(arg0: Internal.CrashReport_): void;
        getMobEffectTextures(): Internal.MobEffectTextureManager;
        getMinecraftSessionService(): Internal.MinecraftSessionService;
        localvar$ebm000$fabric_events_interaction_v0$modifyItemPick(stack: Internal.ItemStack_): Internal.ItemStack;
        getLastInputType(): Internal.InputType;
        allowsTelemetry(): boolean;
        getFrameTime(): number;
        multiplayerBan(): Internal.BanDetails;
        extraTelemetryAvailable(): boolean;
        selectMainFont(arg0: boolean): void;
        getPaintingTextures(): Internal.PaintingTextureManager;
        reloadResourcePacks(): Internal.CompletableFuture<void>;
        getDownloadedPackSource(): Internal.DownloadedPackSource;
        realmsDataFetcher(): Internal.RealmsDataFetcher;
        getLanguageManager(): Internal.LanguageManager;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        handler$doj000$unionlib$setScreen_inject(pGuiScreen: Internal.Screen_, ci: Internal.CallbackInfo_): void;
        setCurrentScreen(gui: Internal.Screen_): void;
        getItemColors(): Internal.ItemColors;
        getWindow(): Internal.Window;
        allowsMultiplayer(): boolean;
        getNarrator(): Internal.GameNarrator;
        getCurrentWorldName(): string;
        isCtrlDown(): boolean;
        prepareForMultiplayer(): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        setCameraEntity(arg0: Internal.Entity_): void;
        getAttackCooldown(): number;
        isWeaponSwingInProgress(): boolean;
        getChatStatus(): Internal.Minecraft$ChatStatus;
        getProfileProperties(): Internal.PropertyMap;
        pauseGame(arg0: boolean): void;
        getEntityRenderDispatcher(): Internal.EntityRenderDispatcher;
        isEnforceUnicode(): boolean;
        telemetryOptInExtra(): boolean;
        setLevel(arg0: Internal.ClientLevel_): void;
        redirect$dkd000$iceberg$fixUpdateURLs(arg0: Internal.RenderTarget_, arg1: boolean): void;
        updateTitle(): void;
        getVanillaPackResources(): Internal.VanillaPackResources;
        isRunning(): boolean;
        getName(): Internal.Component;
        isShiftDown(): boolean;
        getSituationalMusic(): Internal.Music;
        getSearchTreeManager(): Internal.SearchRegistry;
        tick(): void;
        getProgressListener(): Internal.StoringChunkProgressListener;
        updateMaxMipLevel(arg0: number): void;
        getLocale(): Internal.Locale;
        delayCrash(arg0: Internal.CrashReport_): void;
        stop(): void;
        isTextFilteringEnabled(): boolean;
        embeddium$getGameThread(): Internal.Thread;
        getSwingProgress(): number;
        getTelemetryManager(): Internal.ClientTelemetryManager;
        isPaused(): boolean;
        getItemRenderer(): Internal.ItemRenderer;
        getUser(): Internal.User;
        static getInstance(): Internal.Minecraft;
        getChatListener(): Internal.ChatListener;
        self(): this;
        getSingleplayerServer(): Internal.IntegratedServer;
        static checkModStatus(): Internal.ModCheck;
        getProfiler(): Internal.ProfilerFiller;
        handler$doj002$unionlib$init_inject(ci: Internal.CallbackInfo_): void;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        isConnectedToRealms(): boolean;
        fillReport(arg0: Internal.CrashReport_): Internal.CrashReport;
        getProfileKeyPairManager(): Internal.ProfileKeyPairManager;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        hasTargetsInReach(): boolean;
        createSearchTrees(): void;
        getComboCount(): number;
        isKeyDown(key: number): boolean;
        isDemo(): boolean;
        emergencySave(): void;
        setScreen(arg0: Internal.Screen_): void;
        popGuiLayer(): void;
        handler$ebm000$fabric_events_interaction_v0$cancelItemPick(info: Internal.CallbackInfo_): void;
        getPlayerSocialManager(): Internal.PlayerSocialManager;
        isBlocked(arg0: Internal.UUID_): boolean;
        handler$bkg000$oculus$iris$trackLastDimensionOnLeave(arg: Internal.Screen_, ci: Internal.CallbackInfo_): void;
        getModelManager(): Internal.ModelManager;
        renderBuffers(): Internal.RenderBuffers;
        tell(message: Internal.Component_): void;
        getCurrentScreen(): Internal.Screen;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        getConnection(): Internal.ClientPacketListener;
        shouldShowBanNotice(): boolean;
        setStatusMessage(message: Internal.Component_): void;
        updateReportEnvironment(arg0: Internal.ReportEnvironment_): void;
        isWindowActive(): boolean;
        static renderNames(): boolean;
        getLaunchedVersion(): string;
        getFixerUpper(): Internal.DataFixer;
        cursorEntered(): void;
        createWorldOpenFlows(): Internal.WorldOpenFlows;
        runCommand(command: string): number;
        getCameraEntity(): Internal.Entity;
        getBlockColors(): Internal.BlockColors;
        get reportingContext(): Internal.ReportingContext
        get resourcePackDirectory(): Internal.Path
        get cursorTarget(): Internal.Entity
        get gpuUtilization(): number
        get currentServer(): Internal.ServerData
        get fps(): number
        get proxy(): Internal.Proxy
        get resourceManager(): Internal.ResourceManager
        get overlay(): Internal.Overlay
        get toasts(): Internal.ToastComponent
        get soundManager(): Internal.SoundManager
        get splashManager(): Internal.SplashManager
        set attackCooldown(arg0: number)
        set connectedToRealms(arg0: boolean)
        get frameTimer(): Internal.FrameTimer
        get connection(): Internal.Connection
        get resourcePackRepository(): Internal.PackRepository
        get blockEntityRenderDispatcher(): Internal.BlockEntityRenderDispatcher
        get levelSource(): Internal.LevelStorageSource
        get mainRenderTarget(): Internal.RenderTarget
        get blockRenderer(): Internal.BlockRenderDispatcher
        set title(t: string)
        get frameTimeNs(): number
        get skinManager(): Internal.SkinManager
        get versionType(): string
        get gpuWarnlistManager(): Internal.GpuWarnlistManager
        get textureManager(): Internal.TextureManager
        get realms32BitWarningStatus(): Internal.Realms32BitWarningStatus
        get displayName(): Internal.Component
        get partialTick(): number
        get singleplayer(): boolean
        get hotbarManager(): Internal.HotbarManager
        set overlay(arg0: Internal.Overlay_)
        get altDown(): boolean
        get upswingTicks(): number
        get localServer(): boolean
        get tutorial(): Internal.Tutorial
        get entityModels(): Internal.EntityModelSet
        get deltaFrameTime(): number
        get fps$photon_$md$2a2e30$0(): number
        set lastInputType(arg0: Internal.InputType_)
        set windowActive(arg0: boolean)
        get musicManager(): Internal.MusicManager
        get scheduledEvents(): Internal.ScheduledEvents
        get mobEffectTextures(): Internal.MobEffectTextureManager
        get minecraftSessionService(): Internal.MinecraftSessionService
        get lastInputType(): Internal.InputType
        get frameTime(): number
        get paintingTextures(): Internal.PaintingTextureManager
        get downloadedPackSource(): Internal.DownloadedPackSource
        get languageManager(): Internal.LanguageManager
        set currentScreen(gui: Internal.Screen_)
        get itemColors(): Internal.ItemColors
        get window(): Internal.Window
        get narrator(): Internal.GameNarrator
        get currentWorldName(): string
        get ctrlDown(): boolean
        set cameraEntity(arg0: Internal.Entity_)
        get attackCooldown(): number
        get weaponSwingInProgress(): boolean
        get chatStatus(): Internal.Minecraft$ChatStatus
        get profileProperties(): Internal.PropertyMap
        get entityRenderDispatcher(): Internal.EntityRenderDispatcher
        get enforceUnicode(): boolean
        set level(arg0: Internal.ClientLevel_)
        get vanillaPackResources(): Internal.VanillaPackResources
        get running(): boolean
        get name(): Internal.Component
        get shiftDown(): boolean
        get situationalMusic(): Internal.Music
        get searchTreeManager(): Internal.SearchRegistry
        get progressListener(): Internal.StoringChunkProgressListener
        get locale(): Internal.Locale
        get textFilteringEnabled(): boolean
        get swingProgress(): number
        get telemetryManager(): Internal.ClientTelemetryManager
        get paused(): boolean
        get itemRenderer(): Internal.ItemRenderer
        get user(): Internal.User
        get instance(): Internal.Minecraft
        get chatListener(): Internal.ChatListener
        get singleplayerServer(): Internal.IntegratedServer
        get profiler(): Internal.ProfilerFiller
        get connectedToRealms(): boolean
        get profileKeyPairManager(): Internal.ProfileKeyPairManager
        get comboCount(): number
        get demo(): boolean
        set screen(arg0: Internal.Screen_)
        get playerSocialManager(): Internal.PlayerSocialManager
        get modelManager(): Internal.ModelManager
        get currentScreen(): Internal.Screen
        get profileKeySignatureValidator(): Internal.SignatureValidator
        get connection(): Internal.ClientPacketListener
        set statusMessage(message: Internal.Component_)
        get windowActive(): boolean
        get launchedVersion(): string
        get fixerUpper(): Internal.DataFixer
        get cameraEntity(): Internal.Entity
        get blockColors(): Internal.BlockColors
        level: Internal.ClientLevel;
        static readonly UNIFORM_FONT: ResourceLocation;
        readonly frameTimer: Internal.FrameTimer;
        static instance: Internal.Minecraft;
        resourceManager: Internal.ReloadableResourceManager;
        fpsString: string;
        static readonly DEFAULT_FONT: ResourceLocation;
        readonly options: Internal.Options;
        chunkPath: boolean;
        noRender: boolean;
        hasRegisteredReloadableResources: boolean;
        cameraEntity: Internal.Entity;
        readonly fontFilterFishy: Internal.Font;
        hitResult: Internal.HitResult;
        static readonly ON_OSX: false;
        readonly textureManager: Internal.TextureManager;
        readonly debugRenderer: Internal.DebugRenderer;
        readonly gameDirectory: Internal.File;
        chunkVisibility: boolean;
        readonly particleEngine: Internal.ParticleEngine;
        screen: Internal.Screen;
        gameMode: Internal.MultiPlayerGameMode;
        readonly gameRenderer: Internal.GameRenderer;
        static readonly UPDATE_DRIVERS_ADVICE: "Please make sure you have up-to-date drivers (see aka.ms/mcdriver for instructions).";
        readonly mouseHandler: Internal.MouseHandler;
        smartCull: boolean;
        readonly font: Internal.Font;
        static readonly ALT_FONT: ResourceLocation;
        readonly timer: Internal.Timer;
        readonly gui: Internal.Gui;
        wireframe: boolean;
        crosshairPickEntity: Internal.Entity;
        readonly keyboardHandler: Internal.KeyboardHandler;
        missTime: number;
        readonly levelRenderer: Internal.LevelRenderer;
        player: Internal.LocalPlayer;
    }
    type Minecraft_ = Minecraft;
    abstract class MultipartShapedBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_, ...suffixes: string[])
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
    }
    type MultipartShapedBlockBuilder_ = MultipartShapedBlockBuilder;
    class TelemetryEventType$Builder {
        constructor(arg0: string, arg1: string)
        optIn(): this;
        defineAll(arg0: Internal.List_<Internal.TelemetryProperty<any>>): this;
        register(): Internal.TelemetryEventType;
        define<T>(arg0: Internal.TelemetryProperty_<T>): this;
    }
    type TelemetryEventType$Builder_ = TelemetryEventType$Builder;
    class Painter implements Internal.UnitVariables {
        constructor(id: string)
        registerBuiltinObjects(): void;
        unitOf(cx: Internal.Context_, o: any): Internal.Unit;
        inGameScreenDraw(graphics: Internal.GuiGraphics_, delta: number): void;
        getObject(key: string): Internal.PainterObject;
        clear(): void;
        make(type: string): Internal.PainterObject;
        unitOf(console: Internal.ConsoleJS_, o: any): Internal.Unit;
        paint(root: Internal.CompoundTag_): void;
        getVariables(): Internal.VariableSet;
        guiScreenDraw(screen: Internal.Screen_, graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, delta: number): void;
        setVariable(key: string, variable: Internal.Unit_): void;
        get variables(): Internal.VariableSet
        readonly mouseXUnit: Internal.MutableNumberUnit;
        readonly screenHeightUnit: Internal.MutableNumberUnit;
        readonly defaultLineSizeUnit: Internal.MutableNumberUnit;
        readonly id: string;
        static readonly INSTANCE: Internal.Painter;
        readonly screenWidthUnit: Internal.MutableNumberUnit;
        readonly deltaUnit: Internal.MutableNumberUnit;
        readonly unitContext: Internal.UnitContext;
        readonly mouseYUnit: Internal.MutableNumberUnit;
    }
    type Painter_ = Painter;
    class EventHandlerRegistrar <T extends Internal.EmbeddiumEvent> {
        constructor()
        post(arg0: T): boolean;
        addListener(arg0: Internal.EventHandlerRegistrar$Handler_<T>): void;
    }
    type EventHandlerRegistrar_<T extends Internal.EmbeddiumEvent> = EventHandlerRegistrar<T>;
    class HumanoidBodyPose {
        constructor(arg0: Internal.PartPose_, arg1: Internal.PartPose_, arg2: Internal.PartPose_, arg3: Internal.PartPose_, arg4: Internal.PartPose_, arg5: Internal.PartPose_)
        pose(arg0: Internal.HumanoidModelAccess_): void;
    }
    type HumanoidBodyPose_ = HumanoidBodyPose;
    class RecastInstance implements Internal.ISerializable, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor()
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: Internal.CastSource_, arg5: Internal.ICastDataSerializable_)
        getCastSource(): Internal.CastSource;
        deserializeNBT(arg0: Internal.Tag_): void;
        getRemainingRecasts(): number;
        getSpellId(): string;
        serializeNBT(): Internal.CompoundTag;
        getCastData(): Internal.ICastDataSerializable;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getTicksRemaining(): number;
        getSpellLevel(): number;
        getTicksToLive(): number;
        getTotalRecasts(): number;
        writeToBuffer(arg0: Internal.FriendlyByteBuf_): void;
        readFromBuffer(arg0: Internal.FriendlyByteBuf_): void;
        get castSource(): Internal.CastSource
        get remainingRecasts(): number
        get spellId(): string
        get castData(): Internal.ICastDataSerializable
        get ticksRemaining(): number
        get spellLevel(): number
        get ticksToLive(): number
        get totalRecasts(): number
    }
    type RecastInstance_ = RecastInstance;
    interface DimensionEffectsAccessor {
        getIdentifierMap(): Internal.Object2ObjectMap<ResourceLocation, Internal.DimensionSpecialEffects>;
        get identifierMap(): Internal.Object2ObjectMap<ResourceLocation, Internal.DimensionSpecialEffects>
    }
    type DimensionEffectsAccessor_ = DimensionEffectsAccessor;
    class DeepOnesRuinsFeature extends Internal.UndergroundRuinsFeature {
        constructor(arg0: Internal.Codec_<any>)
    }
    type DeepOnesRuinsFeature_ = DeepOnesRuinsFeature;
    interface IModIdHelper {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract addModNameToIngredientTooltip<T>(arg0: Internal.List_<Internal.Component>, arg1: T, arg2: Internal.IIngredientHelper_<T>): Internal.List<Internal.Component>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract addModNameToIngredientTooltip<T>(arg0: Internal.List_<Internal.Component>, arg1: Internal.ITypedIngredient_<T>): Internal.List<Internal.Component>;
        abstract isDisplayingModNameEnabled(): boolean;
        abstract getModNameForModId(arg0: string): string;
        abstract getFormattedModNameForModId(arg0: string): string;
        abstract getModNameForTooltip<T>(arg0: Internal.ITypedIngredient_<T>): Internal.Optional<Internal.Component>;
        get displayingModNameEnabled(): boolean
    }
    type IModIdHelper_ = IModIdHelper;
    /**
     * Invoked before a living entity dies.
     * 
     * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
    */
    class LivingEntityDeathEventJS extends Internal.LivingEntityEventJS {
        constructor(entity: Internal.LivingEntity_, source: DamageSource_)
        /**
         * The entity that dies.
        */
        getEntity(): Internal.Entity;
        /**
         * The damage source that triggers the death.
        */
        getSource(): DamageSource;
        /**
         * The entity that dies.
        */
        get entity(): Internal.Entity
        /**
         * The damage source that triggers the death.
        */
        get source(): DamageSource
    }
    type LivingEntityDeathEventJS_ = LivingEntityDeathEventJS;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface IRecipeSlotTooltipCallback {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onRichTooltip(arg0: Internal.IRecipeSlotView_, arg1: Internal.ITooltipBuilder_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract onTooltip(arg0: Internal.IRecipeSlotView_, arg1: Internal.List_<Internal.Component>): void;
        (arg0: Internal.IRecipeSlotView, arg1: Internal.List<Internal.Component>): void;
    }
    type IRecipeSlotTooltipCallback_ = IRecipeSlotTooltipCallback;
    class Climate$RTree <T> {
        search(arg0: Internal.Climate$TargetPoint_, arg1: Internal.Climate$DistanceMetric_<T>): T;
        static create<T>(arg0: Internal.List_<com.mojang.datafixers.util.Pair<Internal.Climate$ParameterPoint, T>>): Internal.Climate$RTree<T>;
        static buildParameterSpace<T>(arg0: Internal.List_<Internal.Climate$RTree$Node<T>>): Internal.List<Internal.Climate$Parameter>;
    }
    type Climate$RTree_<T> = Climate$RTree<T>;
    class CooldownInstance {
        constructor(arg0: number, arg1: number)
        constructor(arg0: number)
        decrementBy(arg0: number): void;
        getCooldownRemaining(): number;
        getCooldownPercent(): number;
        getSpellCooldown(): number;
        decrement(): void;
        get cooldownRemaining(): number
        get cooldownPercent(): number
        get spellCooldown(): number
    }
    type CooldownInstance_ = CooldownInstance;
    abstract class SerializableDataTicket <D> extends Internal.DataTicket<D> {
        constructor(arg0: string, arg1: D)
        static ofEnum<E extends Internal.Enum<E>>(arg0: ResourceLocation_, arg1: E): Internal.SerializableDataTicket<E>;
        abstract decode(arg0: Internal.FriendlyByteBuf_): D;
        abstract encode(arg0: D, arg1: Internal.FriendlyByteBuf_): void;
        static ofInt(arg0: ResourceLocation_): Internal.SerializableDataTicket<number>;
        static ofString(arg0: ResourceLocation_): Internal.SerializableDataTicket<string>;
        static ofDouble(arg0: ResourceLocation_): Internal.SerializableDataTicket<number>;
        static ofBoolean(arg0: ResourceLocation_): Internal.SerializableDataTicket<boolean>;
        static ofFloat(arg0: ResourceLocation_): Internal.SerializableDataTicket<number>;
    }
    type SerializableDataTicket_<D> = SerializableDataTicket<D>;
    interface IModFile {
        abstract getScanResult(): Internal.ModFileScanData;
        abstract getSecureJar(): Internal.SecureJar;
        abstract getModInfos(): Internal.List<Internal.IModInfo>;
        abstract getFilePath(): Internal.Path;
        abstract getModFileInfo(): Internal.IModFileInfo;
        abstract getLoaders(): Internal.List<Internal.IModLanguageProvider>;
        abstract getFileName(): string;
        abstract getType(): Internal.IModFile$Type;
        abstract setSecurityStatus(arg0: Internal.SecureJar$Status_): void;
        abstract getProvider(): Internal.IModProvider;
        abstract findResource(...arg0: string[]): Internal.Path;
        abstract getSubstitutionMap(): Internal.Supplier<Internal.Map<string, any>>;
        get scanResult(): Internal.ModFileScanData
        get secureJar(): Internal.SecureJar
        get modInfos(): Internal.List<Internal.IModInfo>
        get filePath(): Internal.Path
        get modFileInfo(): Internal.IModFileInfo
        get loaders(): Internal.List<Internal.IModLanguageProvider>
        get fileName(): string
        get type(): Internal.IModFile$Type
        set securityStatus(arg0: Internal.SecureJar$Status_)
        get provider(): Internal.IModProvider
        get substitutionMap(): Internal.Supplier<Internal.Map<string, any>>
    }
    type IModFile_ = IModFile;
    interface Object2CharFunction <K> extends it.unimi.dsi.fastutil.Function<K, string>, Internal.ToIntFunction<K> {
        put(arg0: K, arg1: string): string;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Object2ShortFunction<K>;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        removeChar(arg0: any): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Object2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, string>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2CharFunction;
        containsKey(arg0: any): boolean;
        abstract getChar(arg0: any): string;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2CharFunction;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2CharFunction<T>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        apply(arg0: K): string;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Object2LongFunction<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2CharFunction<T>;
        applyAsInt(arg0: K): number;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2CharFunction;
        size(): number;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2CharFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        clear(): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Object2FloatFunction<K>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2CharFunction;
        (arg0: any): string;
    }
    type Object2CharFunction_<K> = Object2CharFunction<K>;
    class CycadFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type CycadFeature_ = CycadFeature;
    class EntitySerializerType extends Internal.Enum<Internal.EntitySerializerType> {
        static values(): Internal.EntitySerializerType[];
        getSerializer(): Internal.EntityDataSerializer<any>;
        static fromObject(value: any): Internal.EntitySerializerType;
        static fromSerializer(serializer: Internal.EntityDataSerializer_<any>): Internal.EntitySerializerType;
        static castValue<T>(value: any, castHint: string): T;
        static valueOf(name: string): Internal.EntitySerializerType;
        get serializer(): Internal.EntityDataSerializer<any>
        static readonly INT: Internal.EntitySerializerType;
        static readonly UUID: Internal.EntitySerializerType;
        static readonly BYTE: Internal.EntitySerializerType;
        static readonly FLOAT: Internal.EntitySerializerType;
        static readonly STRING: Internal.EntitySerializerType;
        static readonly BOOLEAN: Internal.EntitySerializerType;
        static readonly QUATERNION: Internal.EntitySerializerType;
        static readonly VECTOR3: Internal.EntitySerializerType;
        static readonly COMPOUND_TAG: Internal.EntitySerializerType;
        static readonly LONG: Internal.EntitySerializerType;
    }
    type EntitySerializerType_ = "float" | "string" | "boolean" | EntitySerializerType | "int" | "vector3" | "uuid" | "byte" | "compound_tag" | "quaternion" | "long";
    class SurfaceRules$Context {
        constructor(arg0: Internal.SurfaceSystem_, arg1: Internal.RandomState_, arg2: Internal.ChunkAccess_, arg3: Internal.NoiseChunk_, arg4: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg5: Internal.Registry_<Internal.Biome>, arg6: Internal.WorldGenerationContext_)
        static surfaceCellToBlockCoord(arg0: number): number;
        getMinSurfaceLevel(): number;
        updateY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        m_204626_(arg0: number, arg1: number, arg2: number): Internal.Holder<any>;
        static blockCoordToSurfaceCell(arg0: number): number;
        getSurfaceSecondary(): number;
        updateXZ(arg0: number, arg1: number): void;
        get minSurfaceLevel(): number
        get surfaceSecondary(): number
        static readonly HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE: 8;
        readonly noiseChunk: Internal.NoiseChunk;
        readonly context: Internal.WorldGenerationContext;
        lastSurfaceDepth2Update: number;
        readonly randomState: Internal.RandomState;
        stoneDepthAbove: number;
        readonly pos: Internal.BlockPos$MutableBlockPos;
        readonly abovePreliminarySurface: Internal.SurfaceRules$Condition;
        lastPreliminarySurfaceCellOrigin: number;
        lastMinSurfaceLevelUpdate: number;
        readonly steep: Internal.SurfaceRules$Condition;
        blockY: number;
        static readonly SURFACE_CELL_BITS: 4;
        minSurfaceLevel: number;
        lastUpdateY: number;
        readonly system: Internal.SurfaceSystem;
        stoneDepthBelow: number;
        static readonly SURFACE_CELL_MASK: 15;
        readonly hole: Internal.SurfaceRules$Condition;
        lastUpdateXZ: number;
        readonly biomeGetter: Internal.Function<BlockPos, Internal.Holder<Internal.Biome>>;
        waterHeight: number;
        readonly preliminarySurfaceCache: number[];
        biome: Internal.Supplier<Internal.Holder<Internal.Biome>>;
        static readonly SURFACE_CELL_SIZE: 16;
        readonly temperature: Internal.SurfaceRules$Condition;
        surfaceDepth: number;
        blockZ: number;
        surfaceSecondary: number;
        readonly chunk: Internal.ChunkAccess;
        blockX: number;
    }
    type SurfaceRules$Context_ = SurfaceRules$Context;
    abstract class ImmutableCollections$AbstractImmutableMap <K, V> extends Internal.AbstractMap<K, V> implements Internal.Serializable {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
    }
    type ImmutableCollections$AbstractImmutableMap_<K, V> = ImmutableCollections$AbstractImmutableMap<K, V>;
    interface IUIHolder {
        abstract isRemote(): boolean;
        abstract isInvalid(): boolean;
        abstract markAsDirty(): void;
        abstract createUI(arg0: Player_): ModularUI;
        get remote(): boolean
        get invalid(): boolean
        readonly EMPTY: Internal.IUIHolder;
    }
    type IUIHolder_ = IUIHolder;
    class PalettedContainerRO$PackedData <T> extends Internal.Record {
        constructor(arg0: Internal.List_<T>, arg1: Internal.Optional_<Internal.LongStream>)
        paletteEntries(): Internal.List<T>;
        storage(): Internal.Optional<Internal.LongStream>;
    }
    type PalettedContainerRO$PackedData_<T> = PalettedContainerRO$PackedData<T>;
    class ItemCombinerMenuSlotDefinition$SlotDefinition extends Internal.Record {
        constructor(arg0: number, arg1: number, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>)
        mayPlace(): Internal.Predicate<Internal.ItemStack>;
        y(): number;
        x(): number;
        slotIndex(): number;
        static readonly EMPTY: Internal.ItemCombinerMenuSlotDefinition$SlotDefinition;
    }
    type ItemCombinerMenuSlotDefinition$SlotDefinition_ = ItemCombinerMenuSlotDefinition$SlotDefinition;
    class Zombie extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Zombie>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_)
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
        setCanBreakDoors(arg0: boolean): void;
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
        getSkull(): Internal.ItemStack;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static getSpawnAsBabyOdds(arg0: Internal.RandomSource_): boolean;
        static m_219167_(arg0: Internal.Zombie_): Internal.RandomSource;
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
        isUnderWaterConverting(): boolean;
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
        canBreakDoors(): boolean;
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
        doUnderWaterConversion(): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepSound(): Internal.SoundEvent;
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
        convertsInWater(): boolean;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        supportsBreakDoorGoal(): boolean;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        randomizeReinforcementsChance(): void;
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
        handleAttributes(arg0: number): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isSunSensitive(): boolean;
        convertToZombieType(arg0: Internal.EntityType_<Internal.Zombie>): void;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        addBehaviourGoals(): void;
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
        set canBreakDoors(arg0: boolean)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get skull(): Internal.ItemStack
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        get underWaterConverting(): boolean
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
        get stepSound(): Internal.SoundEvent
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
        get sunSensitive(): boolean
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
        static readonly ZOMBIE_LEADER_CHANCE: 0.05;
        static readonly BABY_EYE_HEIGHT_ADJUSTMENT: 0.81;
        static readonly REINFORCEMENT_RANGE_MIN: 7;
        static readonly REINFORCEMENT_RANGE_MAX: 40;
        static readonly REINFORCEMENT_ATTEMPTS: 50;
    }
    type Zombie_ = Zombie;
    class PreventFeatureRenderPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ListConfiguration<string>> {
        constructor()
        static doesPrevent(arg0: Internal.Entity_, arg1: Internal.RenderLayer_<any, any>): boolean;
    }
    type PreventFeatureRenderPower_ = PreventFeatureRenderPower;
    class LadderBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly NORTH_AABB: Internal.ArrayVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly SOUTH_AABB: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 3.0;
        static readonly EAST_AABB: Internal.ArrayVoxelShape;
        static readonly FACING: Internal.DirectionProperty;
        static readonly WEST_AABB: Internal.ArrayVoxelShape;
    }
    type LadderBlock_ = LadderBlock;
    interface ConstProperties {
        abstract isConst(arg0: string): boolean;
        abstract putConst(arg0: Internal.Context_, arg1: string, arg2: Internal.Scriptable_, arg3: any): void;
        abstract defineConst(arg0: Internal.Context_, arg1: string, arg2: Internal.Scriptable_): void;
    }
    type ConstProperties_ = ConstProperties;
    class RuinedCitadelStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static start(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.StructurePieceAccessor_, arg4: Internal.RandomSource_): void;
        static readonly CODEC: Internal.Codec<Internal.RuinedCitadelStructure>;
    }
    type RuinedCitadelStructure_ = RuinedCitadelStructure;
    interface EntityAttributeInstanceAccess {
        abstract getEntity(): Internal.Entity;
        abstract setEntity(arg0: Internal.Entity_): void;
        get entity(): Internal.Entity
        set entity(arg0: Internal.Entity_)
    }
    type EntityAttributeInstanceAccess_ = EntityAttributeInstanceAccess;
    interface IForgePoseStack {
        pushTransformation(arg0: Internal.Transformation_): void;
    }
    type IForgePoseStack_ = IForgePoseStack;
    class Enchantment$Rarity extends Internal.Enum<Internal.Enchantment$Rarity> {
        static values(): Internal.Enchantment$Rarity[];
        getWeight(): number;
        static valueOf(arg0: string): Internal.Enchantment$Rarity;
        get weight(): number
        static readonly VERY_RARE: Internal.Enchantment$Rarity;
        static readonly RARE: Internal.Enchantment$Rarity;
        static readonly UNCOMMON: Internal.Enchantment$Rarity;
        static readonly COMMON: Internal.Enchantment$Rarity;
    }
    type Enchantment$Rarity_ = "uncommon" | "rare" | "common" | "very_rare" | Enchantment$Rarity;
    class VerticalAnchor$BelowTop extends Internal.Record implements Internal.VerticalAnchor {
        constructor(arg0: number)
        static aboveBottom(arg0: number): Internal.VerticalAnchor;
        static absolute(arg0: number): Internal.VerticalAnchor;
        static belowTop(arg0: number): Internal.VerticalAnchor;
        static bottom(): Internal.VerticalAnchor;
        static top(): Internal.VerticalAnchor;
        resolveY(arg0: Internal.WorldGenerationContext_): number;
        offset(): number;
        static readonly CODEC: Internal.Codec<Internal.VerticalAnchor$BelowTop>;
    }
    type VerticalAnchor$BelowTop_ = VerticalAnchor$BelowTop;
    class Excluder implements Internal.TypeAdapterFactory, Internal.Cloneable {
        constructor()
        withVersion(arg0: number): this;
        excludeClass(arg0: typeof any, arg1: boolean): boolean;
        withExclusionStrategy(arg0: Internal.ExclusionStrategy_, arg1: boolean, arg2: boolean): this;
        excludeField(arg0: Internal.Field_, arg1: boolean): boolean;
        withModifiers(...arg0: number[]): this;
        excludeFieldsWithoutExposeAnnotation(): this;
        disableInnerClassSerialization(): this;
        create<T>(arg0: Internal.Gson_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        static readonly DEFAULT: Internal.Excluder;
    }
    type Excluder_ = Excluder;
}
declare namespace io.wispforest.accessories.mixin.client {
    interface ModelPartAccessor {
        abstract getCubes(): Internal.List<Internal.ModelPart$Cube>;
        abstract getChildren(): Internal.Map<string, Internal.ModelPart>;
        get cubes(): Internal.List<Internal.ModelPart$Cube>
        get children(): Internal.Map<string, Internal.ModelPart>
    }
    type ModelPartAccessor_ = ModelPartAccessor;
}
declare namespace com.mojang.blaze3d.audio {
    class Channel {
        unpause(): void;
        setSelfPosition(arg0: Vec3d_): void;
        destroy(): void;
        disableAttenuation(): void;
        attachBufferStream(arg0: Internal.AudioStream_): void;
        updateStream(): void;
        playing(): boolean;
        attachStaticBuffer(arg0: Internal.SoundBuffer_): void;
        play(): void;
        linearAttenuation(arg0: number): void;
        setLooping(arg0: boolean): void;
        setRelative(arg0: boolean): void;
        setPitch(arg0: number): void;
        stop(): void;
        pause(): void;
        setVolume(arg0: number): void;
        stopped(): boolean;
        set selfPosition(arg0: Vec3d_)
        set looping(arg0: boolean)
        set relative(arg0: boolean)
        set pitch(arg0: number)
        set volume(arg0: number)
        static readonly BUFFER_DURATION_SECONDS: 1;
    }
    type Channel_ = Channel;
}
declare namespace com.mojang.datafixers.util {
    class Pair <F, S> implements Internal.App<Internal.Pair$Mu<S>, F> {
        constructor(arg0: F, arg1: S)
        static unbox<F, S>(arg0: Internal.App_<Internal.Pair$Mu<S>, F>): com.mojang.datafixers.util.Pair<F, S>;
        mapFirst<F2>(arg0: Internal.Function_<F, F2>): com.mojang.datafixers.util.Pair<F2, S>;
        static toMap<F, S>(): Internal.Collector<com.mojang.datafixers.util.Pair<F, S>, any, Internal.Map<F, S>>;
        swap(): com.mojang.datafixers.util.Pair<S, F>;
        static of<F, S>(arg0: F, arg1: S): com.mojang.datafixers.util.Pair<F, S>;
        mapSecond<S2>(arg0: Internal.Function_<S, S2>): com.mojang.datafixers.util.Pair<F, S2>;
        getSecond(): S;
        getFirst(): F;
        get second(): S
        get first(): F
    }
    type Pair_<F, S> = Pair<F, S>;
}
