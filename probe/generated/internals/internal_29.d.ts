/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class SpinAttackType extends Internal.Enum<Internal.SpinAttackType> {
        static values(): Internal.SpinAttackType[];
        static valueOf(arg0: string): Internal.SpinAttackType;
        static readonly RIPTIDE: Internal.SpinAttackType;
        static readonly FIRE: Internal.SpinAttackType;
    }
    type SpinAttackType_ = SpinAttackType | "riptide" | "fire";
    class Markings extends Internal.Enum<Internal.Markings> {
        static byId(arg0: number): Internal.Markings;
        static values(): Internal.Markings[];
        getId(): number;
        static valueOf(arg0: string): Internal.Markings;
        get id(): number
        static readonly BLACK_DOTS: Internal.Markings;
        static readonly WHITE_FIELD: Internal.Markings;
        static readonly NONE: Internal.Markings;
        static readonly WHITE: Internal.Markings;
        static readonly WHITE_DOTS: Internal.Markings;
    }
    type Markings_ = "white_field" | "white" | "black_dots" | Markings | "white_dots" | "none";
    class Animation {
        constructor()
        appendOnFinish(onFinish: Internal.Runnable_): this;
        onFinish(onFinish: Internal.Runnable_): this;
        drawInForeground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        position(position: GuiPos_): this;
        getOnFinish(): Internal.Runnable;
        drawInBackground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        setWidget(widget: Widget_): this;
        size(size: GuiSize_): this;
        isFinish(): boolean;
        onUpdate(onUpdate: Internal.FloatConsumer_): this;
        duration(duration: number): this;
        ease(ease: Internal.IEase_): this;
        delay(delay: number): this;
        getWidget(): Widget;
        get onFinish(): Internal.Runnable
        set widget(widget: Widget_)
        get finish(): boolean
        get widget(): Widget
    }
    type Animation_ = Animation;
    class NuclearBombBlock extends Internal.Block {
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
    type NuclearBombBlock_ = NuclearBombBlock;
    class NormalNoise$NoiseParameters extends Internal.Record {
        constructor(arg0: number, arg1: Internal.DoubleList_)
        constructor(arg0: number, arg1: number, ...arg2: number[])
        constructor(arg0: number, arg1: Internal.List_<number>)
        amplitudes(): Internal.DoubleList;
        firstOctave(): number;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.NormalNoise$NoiseParameters>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.NormalNoise$NoiseParameters>>;
    }
    type NormalNoise$NoiseParameters_ = Special.Noise | NormalNoise$NoiseParameters;
    interface HolderGetter <T> {
        abstract get(arg0: Internal.TagKey_<T>): Internal.Optional<Internal.HolderSet$Named<T>>;
        abstract get(arg0: Internal.ResourceKey_<T>): Internal.Optional<Internal.Holder$Reference<T>>;
        getOrThrow(arg0: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        getOrThrow(arg0: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
    }
    type HolderGetter_<T> = HolderGetter<T>;
    abstract class TransformTexture implements Internal.IGuiTexture {
        constructor()
        rotate(arg0: number): Internal.IGuiTexture;
        isLDLRegister(): boolean;
        scale(arg0: number): Internal.IGuiTexture;
        copy(): Internal.IGuiTexture;
        transform(xOffset: number, yOffset: number): this;
        setUIResource(texturesResource: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>): void;
        getTranslateKey(): string;
        drawSubArea(graphics: Internal.GuiGraphics_, x: number, y: number, width: number, height: number, drawnU: number, drawnV: number, drawnWidth: number, drawnHeight: number): void;
        updateTick(): void;
        getRotation(): number;
        setColor(color: number): Internal.IGuiTexture;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IGuiTexture;
        createPreview(father: Internal.ConfiguratorGroup_): void;
        static serializeWrapper(texture: Internal.IGuiTexture_): Internal.CompoundTag;
        getYOffset(): number;
        getScale(): number;
        name(): string;
        getXOffset(): number;
        getRegisterUI(): Internal.LDLRegister;
        getChatComponent(): Internal.Component;
        draw(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, x: number, y: number, width: number, height: number): void;
        transform(xOffset: number, yOffset: number): Internal.IGuiTexture;
        group(): string;
        get LDLRegister(): boolean
        set UIResource(texturesResource: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>)
        get translateKey(): string
        get rotation(): number
        set color(color: number)
        get YOffset(): number
        get scale(): number
        get XOffset(): number
        get registerUI(): Internal.LDLRegister
        get chatComponent(): Internal.Component
    }
    type TransformTexture_ = TransformTexture;
    interface StructureProcessorAccessor {
        abstract callGetType(): Internal.StructureProcessorType<any>;
        (): Internal.StructureProcessorType_<any>;
    }
    type StructureProcessorAccessor_ = StructureProcessorAccessor;
    class ConditionalRecipe$Serializer <T extends Internal.Recipe<any>> implements Internal.RecipeSerializer<T> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): T;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): T;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
    }
    type ConditionalRecipe$Serializer_<T extends Internal.Recipe<any>> = ConditionalRecipe$Serializer<T>;
    class SpawnerSword extends Internal.SwordItem {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
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
        static soulDispersionEffect(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_, arg2: number): number;
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
    type SpawnerSword_ = SpawnerSword;
    class ModifyDamageTakenConfiguration extends Internal.Record implements Internal.IValueModifyingPowerConfiguration {
        constructor(modifiers: Internal.ListConfiguration_<Internal.ConfiguredModifier<any>>, damageCondition: Internal.Holder_<Internal.ConfiguredDamageCondition<any, any>>, biEntityCondition: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, selfAction: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>, targetAction: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>, biEntityAction: Internal.Holder_<Internal.ConfiguredBiEntityAction<any, any>>, applyArmorCondition: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>, damageArmorCondition: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>)
        constructor(...arg0: Internal.ConfiguredModifier_<any>[])
        biEntityCondition(): Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>;
        modifiers(): Internal.ListConfiguration<Internal.ConfiguredModifier<any>>;
        isConfigurationValid(): boolean;
        damageCondition(): Internal.Holder<Internal.ConfiguredDamageCondition<any, any>>;
        selfAction(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        damageArmorCondition(): Internal.Holder<Internal.ConfiguredEntityCondition<any, any>>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        biEntityAction(): Internal.Holder<Internal.ConfiguredBiEntityAction<any, any>>;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        targetAction(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
        getMissingBinds(): Internal.List<string>;
        applyArmorCondition(): Internal.Holder<Internal.ConfiguredEntityCondition<any, any>>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ModifyDamageTakenConfiguration>;
    }
    type ModifyDamageTakenConfiguration_ = ModifyDamageTakenConfiguration;
    class DummySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
    }
    type DummySensor_ = DummySensor;
    class ServerData {
        constructor(arg0: string, arg1: string, arg2: boolean)
        isLan(): boolean;
        enforcesSecureChat(): boolean;
        setResourcePackStatus(arg0: Internal.ServerData$ServerPackStatus_): void;
        write(): Internal.CompoundTag;
        setIconBytes(arg0: number[]): void;
        static read(arg0: Internal.CompoundTag_): Internal.ServerData;
        copyNameIconFrom(arg0: Internal.ServerData_): void;
        setEnforcesSecureChat(arg0: boolean): void;
        getIconBytes(): number[];
        getResourcePackStatus(): Internal.ServerData$ServerPackStatus;
        copyFrom(arg0: Internal.ServerData_): void;
        get lan(): boolean
        set resourcePackStatus(arg0: Internal.ServerData$ServerPackStatus_)
        set iconBytes(arg0: number[])
        set enforcesSecureChat(arg0: boolean)
        get iconBytes(): number[]
        get resourcePackStatus(): Internal.ServerData$ServerPackStatus
        name: string;
        playerList: Internal.List<Internal.Component>;
        ip: string;
        players: Internal.ServerStatus$Players;
        ping: number;
        motd: Internal.Component;
        pinged: boolean;
        forgeData: Internal.ExtendedServerListData;
        version: Internal.Component;
        status: Internal.Component;
        protocol: number;
    }
    type ServerData_ = ServerData;
    class FoodProperties {
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: Internal.List_<com.mojang.datafixers.util.Pair<Internal.MobEffectInstance, number>>)
        getSaturationModifier(): number;
        getEffects(): Internal.List<com.mojang.datafixers.util.Pair<Internal.MobEffectInstance, number>>;
        isFastFood(): boolean;
        getNutrition(): number;
        isMeat(): boolean;
        canAlwaysEat(): boolean;
        get saturationModifier(): number
        get effects(): Internal.List<com.mojang.datafixers.util.Pair<Internal.MobEffectInstance, number>>
        get fastFood(): boolean
        get nutrition(): number
        get meat(): boolean
    }
    type FoodProperties_ = FoodProperties;
    class CauldronBlock extends Internal.AbstractCauldronBlock {
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
        static shouldHandlePrecipitation(arg0: Internal.Level_, arg1: Internal.Biome$Precipitation_): boolean;
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
    type CauldronBlock_ = CauldronBlock;
    class ChatType$Bound extends Internal.Record {
        constructor(arg0: Internal.ChatType_, arg1: Internal.Component_)
        constructor(arg0: Internal.ChatType_, arg1: Internal.Component_, arg2: Internal.Component_)
        toNetwork(arg0: Internal.RegistryAccess_): Internal.ChatType$BoundNetwork;
        decorateNarration(arg0: Internal.Component_): Internal.Component;
        decorate(arg0: Internal.Component_): Internal.Component;
        name(): Internal.Component;
        targetName(): Internal.Component;
        withTargetName(arg0: Internal.Component_): this;
        chatType(): Internal.ChatType;
    }
    type ChatType$Bound_ = ChatType$Bound;
    interface ToIntFunction <T> {
        abstract applyAsInt(arg0: T): number;
        (arg0: T): number;
    }
    type ToIntFunction_<T> = ToIntFunction<T>;
    class BlendMode implements Internal.BlendModeAccessor {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
        static getLastApplied$photon_$md$2a2e30$0(): Internal.BlendMode;
        static getLastApplied(): Internal.BlendMode;
        static setLastApplied$photon_$md$2a2e30$1(arg0: Internal.BlendMode_): void;
        isOpaque(): boolean;
        static setLastApplied(blendMode: Internal.BlendMode_): void;
        static stringToBlendFactor(arg0: string): number;
        static stringToBlendFunc(arg0: string): number;
        apply(): void;
        get lastApplied$photon_$md$2a2e30$0(): Internal.BlendMode
        get lastApplied(): Internal.BlendMode
        set lastApplied$photon_$md$2a2e30$1(arg0: Internal.BlendMode_)
        get opaque(): boolean
        set lastApplied(blendMode: Internal.BlendMode_)
    }
    type BlendMode_ = BlendMode;
    class EffectAbyssal_Fear extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type EffectAbyssal_Fear_ = EffectAbyssal_Fear;
    class LaunchPower extends Internal.ActiveCooldownPowerFactory$Simple<Internal.LaunchConfiguration> {
        constructor()
        change(arg0: Internal.ConfiguredPower_<Internal.LaunchConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
        increment(arg0: Internal.ConfiguredPower_<Internal.LaunchConfiguration, any>, arg1: Internal.Entity_): number;
        decrement(arg0: Internal.ConfiguredPower_<Internal.LaunchConfiguration, any>, arg1: Internal.Entity_): number;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.LaunchConfiguration, any>, arg1: Internal.Entity_): number;
    }
    type LaunchPower_ = LaunchPower;
    class LerpingBossEvent extends Internal.BossEvent {
        constructor(arg0: Internal.UUID_, arg1: Internal.Component_, arg2: number, arg3: Internal.BossEvent$BossBarColor_, arg4: Internal.BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean)
        targetPercent: number;
        setTime: number;
    }
    type LerpingBossEvent_ = LerpingBossEvent;
    interface Short2ObjectMap <V> extends Internal.Short2ObjectFunction<V>, Internal.Map<number, V> {
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ObjectFunction<V>;
        remove(arg0: number): V;
        abstract containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Short2LongFunction;
        apply(arg0: number): V;
        keySet(): Internal.Set<any>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Short2ReferenceFunction<T>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2ObjectFunction<V>;
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
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        replace(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        values(): Internal.Collection<any>;
        putIfAbsent(arg0: number, arg1: V): V;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2ObjectFunction<V>;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Short2DoubleFunction;
        abstract containsKey(arg0: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        put(arg0: number, arg1: V): V;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Short2ObjectFunction<T>;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        putIfAbsent(arg0: number, arg1: V): V;
        abstract defaultReturnValue(): V;
        abstract short2ObjectEntrySet(): Internal.ObjectSet<Internal.Short2ObjectMap$Entry<V>>;
        identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: V): void;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        composeShort(arg0: Internal.Short2ShortFunction_): Internal.Short2ObjectFunction<V>;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Short2ByteFunction;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Short2ShortFunction;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Short2ObjectFunction_<V>): V;
        remove(arg0: number, arg1: any): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Short2IntFunction;
        abstract putAll(arg0: Internal.Map_<number, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Short2FloatFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        remove(arg0: any, arg1: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Short2CharFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        abstract size(): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        computeIfAbsent(arg0: number, arg1: Internal.IntFunction_<V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2ObjectFunction<V>;
        abstract get(arg0: number): V;
        computeIfAbsent(arg0: number, arg1: Internal.Short2ObjectFunction_<V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        replace(arg0: number, arg1: V): V;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        get empty(): boolean
    }
    type Short2ObjectMap_<V> = Short2ObjectMap<V>;
    abstract class BaseLivingEntityBuilder <T extends Internal.LivingEntity & Internal.IAnimatableJS> extends Internal.BuilderBase<Internal.EntityType<T>> {
        constructor(i: ResourceLocation_)
        /**
         * Sets a predicate to determine if the entity has inverted heal and harm behavior.
         * 
         * @param invertedHealAndHarm The predicate to check for inverted heal and harm behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.invertedHealAndHarm(entity => {
         *     // Custom logic to determine if the entity has inverted heal and harm behavior
         *     return true; // Replace with your custom boolean condition
         * });
         * ```
        */
        invertedHealAndHarm(invertedHealAndHarm: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Boolean determining whether the entity can jump while mounted by a player.
         * (Currently experimental jumping logic subject to change in the future)
         * Defaults to false.
         * Example usage:
         * ```javascript
         * entityBuilder.mountJumpingEnabled(true);
         * ```
        */
        mountJumpingEnabled(mountJumpingEnabled: boolean): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        setBlockJumpFactor(blockJumpFactor: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed when the entity is hurt.
         * The provided Consumer accepts a {@link ContextUtils.EntityDamageContext} parameter,
         * representing the context of the entity being hurt.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onHurt(context => {
         *     // Define custom logic for handling when the entity is hurt
         *     // Use information about the EntityDamageContext provided by the context.
         * });
         * ```
        */
        onHurt(predicate: Internal.Consumer_<Internal.ContextUtils$EntityDamageContext>): this;
        createObject(): any;
        /**
         * Sets the client tracking range for the entity.
         * Defaults to 5.
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(64); // Set the client tracking range to 64 blocks
         * ```
        */
        clientTrackingRange(i: number): this;
        /**
         * Sets a function to determine whether the entity can disable its target's shield.
         * The provided Predicate accepts a {@link LivingEntity} parameter.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canDisableShield(entity => {
         *     // Define the conditions to check if the entity can disable its shield
         *     // Use information about the LivingEntity provided by the context.
         *     return true;
         * });
         * ```
        */
        canDisableShield(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is on a climbable surface.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for being on a climbable surface.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClimbable(entity => {
         *     // Define conditions to check if the entity is on a climbable surface
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is on a climbable surface;
         * });
         * ```
        */
        onClimbable(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
        */
        isFreezing(isFreezing: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed when the entity's air supply decreases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being decreased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDecreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply decreases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onDecreaseAirSupply(onDecreaseAirSupply: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onStopRiding(callback: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Boolean determining whether the passenger is able to steer the entity while riding.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.canSteer(false);
         * ```
        */
        canSteer(canSteer: boolean): this;
        /**
         * Sets a callback function to be executed during each tick of the entity.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ticked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Define custom logic for handling during each tick of the entity
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        tick(tickCallback: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        render(render: Internal.Consumer_<Internal.ContextUtils$RenderContext<T>>): this;
        /**
         * Sets the spawn placement of the entity type
         * entityBuilder.spawnPlacement('on_ground', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
         *     if (levelaccessor.getLevel().getBiome(blockpos) == 'minecraft:plains') return true;
         *     return false
         * })
         * @param placementType The placement type of the spawn, accepts 'on_ground', 'in_water', 'no_restrictions', 'in_lava'
         * @param heightMap The height map used for the spawner
         * @param spawnPredicate The predicate that determines if the entity will spawn
        */
        spawnPlacement(placementType: Internal.SpawnPlacements$Type_, heightMap: Internal.Heightmap$Types_, spawnPredicate: Internal.SpawnPlacements$SpawnPredicate_<T>): this;
        /**
         * Sets a predicate to determine whether the entity is immobile.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose immobility is being determined.
         * It returns a Boolean indicating whether the entity is immobile.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isImmobile(entity => {
         *     // Define logic to determine whether the entity is immobile
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is immobile;
         * });
         * ```
        */
        isImmobile(b: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets whether the entity can breathe underwater.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBreatheUnderwater(true);
         * ```
        */
        canBreatheUnderwater(canBreatheUnderwater: boolean): this;
        /**
         * Sets a function to determine the model resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the model based on information about the entity.
         * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelResource(entity => {
         *     // Define logic to determine the model resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
         * });
         * ```
        */
        modelResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can stand on a fluid.
         * The provided Predicate accepts a {@link ContextUtils.EntityFluidStateContext} parameter,
         * representing the context of the entity potentially standing on a fluid.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canStandOnFluid(context => {
         *     // Define conditions for the entity to be able to stand on a fluid
         *     // Use information about the EntityFluidStateContext provided by the context.
         *     return // Some boolean condition indicating if the entity can stand on the fluid;
         * });
         * ```
        */
        canStandOnFluid(predicate: Internal.Function_<Internal.ContextUtils$EntityFluidStateContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
        */
        mayInteract(predicate: Internal.Function_<Internal.ContextUtils$MayInteractContext, any>): this;
        /**
         * Adds an extra render layer to the mob.
         * @param newGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
        */
        newGeoLayer(builderConsumer: Internal.Consumer_<any>): this;
        /**
         * Sets a function to determine the animation resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the animations based on information about the entity.
         * The default behavior returns <namespace>:animations/<path>.animation.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.animationResource(entity => {
         *     // Define logic to determine the animation resource for the entity
         *     // Use information about the entity provided by the context.
         *     //return some ResourceLocation representing the animation resource;
         *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
         * });
         * ```
        */
        animationResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
        */
        isAttackable(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
        */
        immuneTo(...blockNames: string[]): this;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
        */
        canSpawnFarFromPlayer(canSpawnFar: boolean): this;
        /**
         * Sets a callback function to be executed when the entity picks up an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemEntityContext} parameter,
         * representing the context of the entity picking up an item with another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onItemPickup(context => {
         *     // Define custom logic for handling the entity picking up an item
         *     // Use information about the EntityItemEntityContext provided by the context.
         * });
         * ```
        */
        onItemPickup(consumer: Internal.Consumer_<Internal.ContextUtils$EntityItemEntityContext>): this;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity, defaults to 1.
         * @param height The height of the entity, defaults to 1.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(2, 3);
         * ```
        */
        sized(width: number, height: number): this;
        /**
         * Sets a predicate function to determine whether the entity can attack another entity.
         * The provided Predicate accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that may be attacked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttack(context => {
         *     // Define conditions to check if the entity can attack the targetEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the targetEntity;
         * });
         * ```
        */
        canAttack(customCanAttack: Internal.Function_<Internal.ContextUtils$LivingEntityContext, any>): this;
        /**
         * Adds a new AnimationController to the entity, with the ability to add event listeners
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param predicate The predicate for the controller, determines if an animation should continue or not
         * @param soundListener A sound listener, used to execute actions when the json requests a sound to play. May be null
         * @param particleListener A particle listener, used to execute actions when the json requests a particle. May be null
         * @param instructionListener A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
        */
        addKeyAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseLivingEntityBuilder$IAnimationPredicateJS_<T>, soundListener: Internal.BaseLivingEntityBuilder$ISoundListenerJS_<T>, particleListener: Internal.BaseLivingEntityBuilder$IParticleListenerJS_<T>, instructionListener: Internal.BaseLivingEntityBuilder$ICustomInstructionListenerJS_<T>): this;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onRemovedFromWorld(consumer: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a callback function to be executed when an effect is removed from the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being removed from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectRemoved(context => {
         *     // Define custom logic for handling when an effect is removed from the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
        */
        onEffectRemoved(consumer: Internal.Consumer_<Internal.ContextUtils$OnEffectContext>): this;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
        */
        showVehicleHealth(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed when the entity starts sleeping.
         * The provided Consumer accepts a {@link ContextUtils.EntityBlockPosContext} parameter,
         * representing the context of the entity starting to sleep at a specific block position.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStartSleeping(context => {
         *     // Define custom logic for handling the entity starting to sleep
         *     // Use information about the EntityBlockPosContext provided by the context.
         * });
         * ```
        */
        onStartSleeping(consumer: Internal.Consumer_<Internal.ContextUtils$EntityBlockPosContext>): this;
        /**
         * Sets a callback function to be executed when an effect is added to the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being added to the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectAdded(context => {
         *     // Define custom logic for handling when an effect is added to the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
        */
        onEffectAdded(consumer: Internal.Consumer_<Internal.ContextUtils$OnEffectContext>): this;
        /**
         * Adds a spawner for this entity to the provided biome(s)
         * @param biomes A list of biomes that the entity should spawn in. If using a tag, only one value may be provided
         * @param weight The spawn weight the entity should have
         * @param minCount The minimum number of entities that can spawn at a time
         * @param maxCount The maximum number of entities that can spawn at a time
        */
        biomeSpawn(biomes: Internal.List_<string>, weight: number, minCount: number, maxCount: number): this;
        /**
         * Sets a predicate function to determine whether the entity can be affected by an effect.
         * The provided Predicate accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect that may affect the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBeAffected(context => {
         *     // Define conditions to check if the entity can be affected by the effect
         *     // Use information about the OnEffectContext provided by the context.
         *     return // Some boolean condition indicating if the entity can be affected by an effect;
         * });
         * ```
        */
        canBeAffected(predicate: Internal.Function_<Internal.ContextUtils$OnEffectContext, any>): this;
        /**
         * Sets a function to determine the visibility percentage of the entity.
         * The provided Function accepts a {@link ContextUtils.VisualContext} parameter,
         * representing both the entity whose visibility percentage is being determined
         * and the the builder entity who is being looked at.
         * It returns a Double representing the visibility percentage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.visibilityPercent(context => {
         *     // Define logic to calculate and return the visibility percentage for the targetEntity
         *     // Use information about the Entity provided by the context.
         *     return // Some Double value representing the visibility percentage;
         * });
         * ```
        */
        visibilityPercent(visibilityPercent: Internal.Function_<Internal.ContextUtils$VisualContext, any>): this;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
        */
        fireImmune(isFireImmune: boolean): this;
        /**
         * Consumer overriding the tickDeath responsible to counting down
         * the ticks it takes to remove the entity when it dies.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tickDeath(entity => {
         *     // Override the tickDeath method in the entity
         * });
         * ```
        */
        tickDeath(tickDeath: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
        */
        addTriggerableAnimationController(name: string, translationTicksLength: number, triggerableAnimationName: string, triggerableAnimationID: string, loopType: string): this;
        /**
         * Sets a callback function to be executed when the entity dies.
         * The provided Consumer accepts a {@link ContextUtils.DeathContext} parameter,
         * representing the context of the entity's death.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDeath(context => {
         *     // Define custom logic for handling the entity's death
         *     // Use information about the DeathContext provided by the context.
         * });
         * ```
        */
        onDeath(consumer: Internal.Consumer_<Internal.ContextUtils$DeathContext>): this;
        /**
         * Boolean determining if the entity will turn sideways on death.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.defaultDeathPose(false);
         * ```
        */
        defaultDeathPose(defaultDeathPose: boolean): this;
        /**
         * Sets a predicate function to determine whether the entity is affected by potions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its susceptibility to potions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByPotions(entity => {
         *     // Define conditions to check if the entity is affected by potions
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is affected by potions;
         * });
         * ```
        */
        isAffectedByPotions(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * entityBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
        */
        setHurtSound(sound: Internal.Function_<Internal.ContextUtils$HurtContext, any>): this;
        /**
         * Sets the movement emission for the entity which determines whether it will play sounds or spawn particles.
         * 
         * Example usage:
         * ```javascript
         * builder.movementEmission("none")
         * ```
        */
        movementEmission(emission: Internal.Entity$MovementEmission_): this;
        /**
         * Sets a predicate to determine whether the entity should drop loot upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose loot dropping behavior is being determined.
         * It returns a Boolean indicating whether the entity should drop loot.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropLoot(entity => {
         *     // Define logic to determine whether the entity should drop loot
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity should drop loot;
         * });
         * ```
        */
        shouldDropLoot(b: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity should drop experience upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience drop is being determined.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropExperience(entity => {
         *     // Define conditions to check if the entity should drop experience upon death
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity should drop experience;
         * });
         * ```
        */
        shouldDropExperience(p: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * @param applyRotations A consumer for applying additional rotations or transforms to the entity model.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.applyRotations(context => {
         *         const { entity, poseStack, ageInTicks, rotationYaw, partialTick } = context
         *         // apply your transforms here
         *     });
         *     ```
        */
        applyRotations(builderConsumer: Internal.Consumer_<Internal.ContextUtils$ApplyRotationsContext<T>>): this;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
        */
        dampensVibrations(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Consumer determining travel logic for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.travel(context => {
         *     const {entity, vec3} = context
         *     // Use the vec3 and entity to determine the travel logic of the entity
         * });
         * ```
        */
        travel(travel: Internal.Consumer_<Internal.ContextUtils$Vec3Context>): this;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.MobInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onInteract(context => {
         *     // Define custom logic for the interaction with the entity
         *     // Use information about the MobInteractContext provided by the context.
         *     if (context.player.isShiftKeyDown()) return
         *     context.player.startRiding(context.entity);
         * });
         * ```
        */
        onInteract(c: Internal.Consumer_<Internal.ContextUtils$MobInteractContext>): this;
        /**
         * Sets a predicate to determine whether the entity is affected by fluids.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose interaction with fluids is being determined.
         * It returns a Boolean indicating whether the entity is affected by fluids.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByFluids(entity => {
         *     // Define logic to determine whether the entity is affected by fluids
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is affected by fluids;
         * });
         * ```
        */
        isAffectedByFluids(b: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
        */
        positionRider(builderConsumer: Internal.Consumer_<Internal.ContextUtils$PositionRiderContext>): this;
        /**
         * Sets the mob category for the entity.
         * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
         * Defaults to 'misc'.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobCategory('monster');
         * ```
        */
        mobCategory(category: string): this;
        /**
         * Sets a callback function to be executed when the entity stops sleeping.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped sleeping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopSleeping(entity => {
         *     // Define custom logic for handling the entity stopping sleeping
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onStopSleeping(runnable: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
        */
        setDeathSound(sound: any): this;
        /**
         * Sets the jump boost power for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.jumpBoostPower(entity => {
         *     return //some float value
         * });
         * ```
        */
        jumpBoostPower(jumpBoostPower: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed when the entity leaves combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has left combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLeaveCombat(entity => {
         *     // Define custom logic for handling the entity leaving combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onLeaveCombat(runnable: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a callback function to be executed when the entity receives healing.
         * The provided Consumer accepts a {@link ContextUtils.EntityHealContext} parameter,
         * representing the context of the entity receiving healing.
         * Very similar to {@link ForgeEventFactory.onLivingHeal}
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingHeal(context => {
         *     // Define custom logic for handling when the entity receives healing
         *     // Use information about the EntityHealContext provided by the context.
         * });
         * ```
        */
        onLivingHeal(callback: Internal.Consumer_<Internal.ContextUtils$EntityHealContext>): this;
        /**
         * Sets a callback function to be executed when the entity's air supply increases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being increased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onIncreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply increases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onIncreaseAirSupply(onIncreaseAirSupply: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
        */
        repositionEntityAfterLoad(customRepositionEntityAfterLoad: boolean): this;
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setWaterSlowDown(0.6);
         * ```
        */
        setWaterSlowDown(slowdownFactor: number): this;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onClientRemoval(consumer: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * @param onHurtTarget A Consumer to execute when the mob attacks its target
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onHurtTarget(context => {
         *     const {entity, targetEntity} = context
         *     //Execute code when the target is hurt
         * });
         * ```
        */
        onHurtTarget(onHurtTarget: Internal.Consumer_<Internal.ContextUtils$LineOfSightContext>): this;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
        */
        isPushable(b: boolean): this;
        /**
         * Sets a callback function to be executed when the living entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingFall(context => {
         *     // Define custom logic for handling when the living entity falls and takes damage
         *     // Use information about the EntityFallDamageContext provided by the context.
         * });
         * ```
        */
        onLivingFall(c: Internal.Consumer_<Internal.ContextUtils$EntityFallDamageContext>): this;
        /**
         * Sets a function to determine the standing eye height of the entity.
         * The provided Function accepts a {@link ContextUtils.EntityPoseDimensionsContext} parameter,
         * representing the context of the entity's pose and dimensions when standing.
         * It returns a Float representing the standing eye height.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setStandingEyeHeight(context => {
         *     // Define logic to calculate and return the standing eye height for the entity
         *     // Use information about the EntityPoseDimensionsContext provided by the context.
         *     return // Some Float value representing the standing eye height;
         * });
         * ```
        */
        setStandingEyeHeight(setStandingEyeHeight: Internal.Function_<Internal.ContextUtils$EntityPoseDimensionsContext, any>): this;
        /**
         * Sets the sound resource location for the entity's eating sound using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eatingSound("minecraft:entity.zombie.ambient");
         * ```
        */
        eatingSound(sound: any): this;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
        */
        thunderHit(consumer: Internal.Consumer_<Internal.ContextUtils$ThunderHitContext>): this;
        /**
         * Adds an animation controller to the entity with the specified parameters.
         * 
         * @param name The name of the animation controller.
         * @param translationTicksLength The length of translation ticks for the animation.
         * @param predicate The animation predicate defining the conditions for the animation to be played.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.addAnimationController('exampleController', 5, event => {
         *     // Define conditions for the animation to be played based on the entity.
         *     if (event.entity.hurtTime > 0) {
         *         event.thenLoop('spawn');
         *     } else {
         *         event.thenPlayAndHold('idle');
         *     }
         *     return true; // Some boolean condition indicating if the animation should be played;
         * });
         * ```
        */
        addAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseLivingEntityBuilder$IAnimationPredicateJS_<T>): this;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets a callback function to be executed when the entity automatically attacks on touch.
         * The provided Consumer accepts a {@link ContextUtils.AutoAttackContext} parameter,
         * representing the context of the auto-attack when the entity touches another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.doAutoAttackOnTouch(context => {
         *     // Define custom logic for handling when the entity automatically attacks on touch
         *     // Use information about the AutoAttackContext provided by the context.
         * });
         * ```
        */
        doAutoAttackOnTouch(doAutoAttackOnTouch: Internal.Consumer_<Internal.ContextUtils$AutoAttackContext>): this;
        /**
         * Sets a predicate function to determine whether the entity can attack a specific entity type.
         * The provided Predicate accepts a {@link ContextUtils.EntityTypeEntityContext} parameter,
         * representing the context of the entity attacking a specific entity type.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttackType(context => {
         *     // Define conditions to check if the entity can attack the specified entity type
         *     // Use information about the EntityTypeEntityContext provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the specified entity type;
         * });
         * ```
        */
        canAttackType(canAttackType: Internal.Function_<Internal.ContextUtils$EntityTypeEntityContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the LivingEntity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
        */
        isCurrentlyGlowing(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a function to determine whether the entity can ride another entity.
         * 
         * @param canRide Predicate accepting a {@link ContextUtils.PassengerVehicleContext} parameter,
         *                  defining the conditions under which the entity should ride
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canRide(context => {
         *     return true;
         * });
         * ```
        */
        canRide(func: Internal.Predicate_<Internal.ContextUtils$PassengerVehicleContext>): this;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        lavaHurt(consumer: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a callback function to be executed when the entity equips an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityEquipmentContext} parameter,
         * representing the context of the entity equipping an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEquipItem(context => {
         *     // Define custom logic for handling when the entity equips an item
         *     // Use information about the EntityEquipmentContext provided by the context.
         * });
         * ```
        */
        onEquipItem(onEquipItem: Internal.Consumer_<Internal.ContextUtils$EntityEquipmentContext>): this;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
        */
        nextStep(nextStep: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
        */
        canCollideWith(canCollideWith: Internal.Function_<Internal.ContextUtils$CollidingEntityContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity's interaction with a specific item during eating.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eat(context => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the item being consumed using the provided context.
         * });
         * ```
        */
        eat(function_: Internal.Consumer_<Internal.ContextUtils$EntityItemLevelContext>): this;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
        */
        canTrample(predicate: Internal.Function_<Internal.ContextUtils$CanTrampleContext, any>): this;
        /**
         * Sets a callback function to be executed when the entity enters combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has entered combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEnterCombat(entity => {
         *     // Define custom logic for handling the entity entering combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onEnterCombat(c: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a predicate function to determine whether the rider of the entity should face forward.
         * The provided Predicate accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player entity riding the main entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRiderFaceForward(context => {
         *     // Define the conditions for the rider to face forward
         *     // Use information about the player entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        shouldRiderFaceForward(predicate: Internal.Function_<Internal.ContextUtils$PlayerEntityContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity has line of sight to another entity.
         * The provided Function accepts a {@link LineOfSightContext} parameter,
         * representing the entity to check for line of sight.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.hasLineOfSight(context => {
         *     // Define conditions to check if the entity has line of sight to the target entity
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if there is line of sight;
         * });
         * ```
        */
        hasLineOfSight(f: Internal.Function_<Internal.ContextUtils$LineOfSightContext, any>): this;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
        */
        isFlapping(b: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed when the entity jumps.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingJump(entity => {
         *     // Custom logic to handle the entity's jump action
         * });
         * ```
        */
        onLivingJump(onJump: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a predicate function to determine whether the entity is currently sleeping.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its sleeping state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSleeping(entity => {
         *     // Define conditions to check if the entity is currently sleeping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sleeping;
         * });
         * ```
        */
        isSleeping(supplier: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a consumer to handle custom lerping logic for the living entity.
         * 
         * @param lerpTo The consumer to handle the custom lerping logic.
         * 
         * The consumer should take a LerpToContext as a parameter, providing information about the lerping operation, including the target position, yaw, pitch, increment count, teleport flag, and the entity itself.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.lerpTo(context => {
         *     // Custom lerping logic for the living entity
         *     const { x, y, z, yaw, pitch, posRotationIncrements, teleport, entity } = context;
         *     // Perform custom lerping operations using the provided context
         *     // For example, you can smoothly move the entity from its current position to the target position
         *     entity.setPositionAndRotation(x, y, z, yaw, pitch);
         * });
         * ```
        */
        lerpTo(lerpTo: Internal.Consumer_<Internal.ContextUtils$LerpToContext>): this;
        /**
         * Defines the Mob's Type
         * Examples: 'undead', 'water', 'arthropod', 'undefined', 'illager'
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobType('undead');
         * ```
        */
        mobType(mt: any): this;
        /**
         * Sets a function to determine the custom hitbox scale of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose scale is being determined.
         * It returns a Float representing the custom scale.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scale(entity => {
         *     // Define logic to calculate and return the custom scale for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value;
         * });
         * ```
        */
        scale(customScale: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
        */
        saves(shouldSave: boolean): this;
        /**
         * Adds a custom item render layer to the entity model using GeckoLib's bone system.
         * 
         * The first argument is a function that returns the bone name to attach the item to, based on the entity.
         * The second argument allows configuration of the item render using an ItemModelJSBuilder.
         * 
         * Example usage:
         * ```javascript
         * builder.addRenderItemLayer(entity => "right_hand", item => {
         *     item.renderItem(context => {
         *         let {
         *             poseStack,
         *             bone,
         *             item,
         *             entity,
         *             bufferSource,
         *             partialTick,
         *             packedLight,
         *             packedOverlay
         *         } = context
         *         try {
         *             poseStack.translate(0.05, -0.5, -0.5)
         *             poseStack.mulPose(Axis.YP.rotationDegrees(90))
         *             poseStack.mulPose(Axis.ZP.rotationDegrees(-40))
         *         } catch (error) {
         *             console.log(error)
         *         }
         *     })
         * })
         * ```
        */
        addRenderItemLayer(handPartName: Internal.Function_<Internal.LivingEntity, string>, consumer: Internal.Consumer_<Internal.ItemModelJSBuilder<T>>): this;
        /**
         * Sets the sound resource locations for small and large falls of the entity using either string representations or ResourceLocation objects.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fallSounds("minecraft:entity.generic.small_fall",
         *     "minecraft:entity.generic.large_fall");
         * ```
        */
        fallSounds(smallFallSound: any, largeFallSound: any): this;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
        */
        canAddPassenger(predicate: Internal.Function_<Internal.ContextUtils$PassengerEntityContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the LivingEntity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        canFreeze(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity is sensitive to water.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for sensitivity to water.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSensitiveToWater(entity => {
         *     // Define conditions to check if the entity is sensitive to water
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sensitive to water;
         * });
         * ```
        */
        isSensitiveToWater(predicate: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
        */
        blockSpeedFactor(callback: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets the main arm of the entity. Defaults to 'right'.
         * 
         * @param arm The main arm of the entity. Accepts values "left" or "right".
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mainArm("left");
         * ```
        */
        mainArm(arm: any): this;
        /**
         * Sets a predicate function to determine whether the entity can take an item.
         * The provided Predicate accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity potentially taking an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTakeItem(context => {
         *     // Define conditions for the entity to be able to take an item
         *     // Use information about the EntityItemLevelContext provided by the context.
         *     return // Some boolean condition indicating if the entity can take the item;
         * });
         * ```
        */
        canTakeItem(predicate: Internal.Function_<Internal.ContextUtils$EntityItemLevelContext, any>): this;
        /**
         * A Consumer determining logic for the final render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderFinal(context => {
         *     const {
         *         poseStack,
         *         entity,
         *         model,
         *         bufferSource,
         *         buffer,
         *         partialTick,
         *         packedLight,
         *         packedOverlay,
         *         red,
         *         green,
         *         blue,
         *         alpha
         *     } = context
         *     if (entity.isBaby()) {
         *         poseStack.scale(0.5, 0.5, 0.5)
         *     }
         * })
         * ```
        */
        renderFinal(renderFinal: Internal.Consumer_<Internal.ContextUtils$FinalRenderContext<T>>): this;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
        */
        isInvulnerableTo(predicate: Internal.Function_<Internal.ContextUtils$DamageContext, any>): this;
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSoundVolume(0.5);
         * ```
        */
        setSoundVolume(volume: number): this;
        /**
         * Sets a function to calculate fall damage for the entity.
         * The provided Function accepts a {@link ContextUtils.CalculateFallDamageContext} parameter,
         * representing the context of the fall damage calculation.
         * It returns an Integer representing the calculated fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.calculateFallDamage(context => {
         *     // Define logic to calculate and return the fall damage for the entity
         *     // Use information about the CalculateFallDamageContext provided by the context.
         *     return // Some Integer value representing the calculated fall damage;
         * });
         * ```
        */
        calculateFallDamage(calculation: Internal.Function_<Internal.ContextUtils$CalculateFallDamageContext, any>): this;
        /**
         * Sets a function to determine the experience reward for killing the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience reward is being determined.
         * It returns an Integer representing the experience reward.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.experienceReward(killedEntity => {
         *     // Define logic to calculate and return the experience reward for the killedEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Integer value representing the experience reward;
         * });
         * ```
        */
        experienceReward(experienceReward: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets whether the entity is always considered as an experience dropper.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlwaysExperienceDropper(true);
         * ```
        */
        isAlwaysExperienceDropper(b: boolean): this;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        setSummonable(b: boolean): this;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        rideTick(callback: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the LivingEntity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
        */
        canChangeDimensions(supplier: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Adds an extra hitbox to the mob. Aka part-entities.
         * Vanilla ticks extra hitboxes(for example the ender dragon's) with the
         * .tickPart method which specifies which hitbox to move to the entity and
         * its offset. This method is available off of the parent entity anywhere
         * including non EntityJS callbacks. (Usually used in the entity's aiStep method)
         * For example: `entity.tickPart("head", 0, 1, 0)`
         * 
         * Creation of the hitbox:
         * ```javascript
         * entityBuilder.addPartEntity("head", 1, 2, builder => {
         *     // Can also be null
         *     builder.isPickable(true)
         * });
         * ```
         * @param name The name of the part
         * @param width The width of the part
         * @param height The height of the part
         * @param builderConsumer The builder for the part, very similar to the normal builder callbacks
        */
        addPartEntity(name: string, width: number, height: number, builderConsumer: Internal.Consumer_<Internal.PartBuilder<T>>): this;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the LivingEntity provided by the context.
         *     return 3;
         * });
         * ```
        */
        setMaxFallDistance(maxFallDistance: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Sets a callback function to be executed during the living entity's AI step.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * allowing customization of the AI behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.aiStep(entity => {
         *     // Custom logic to be executed during the living entity's AI step
         *     // Access and modify information about the entity using the provided context.
         * });
         * ```
        */
        aiStep(aiStep: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Determines if the entity's hitbox collides with other entities the same as a solic block.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.canBeCollidedWith(entity => {
         *         return true
         *     });
         *     ```
        */
        canBeCollidedWith(canBeCollidedWith: Internal.Function_<Internal.LivingEntity, any>): this;
        /**
         * Function determining if the entity is allied with a potential target.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlliedTo(context => {
         *     const {entity, target} = context
         *     return target.type == 'minecraft:blaze'
         * });
         * ```
        */
        isAlliedTo(isAlliedTo: Internal.Function_<Internal.ContextUtils$LineOfSightContext, any>): this;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
        */
        modelSize(scaleHeight: number, scaleWidth: number): this;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onAddedToWorld(onAddedToWorldCallback: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        setSwimSound(sound: any): this;
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
        */
        renderType(type: Internal.Function_<T, Internal.RenderType>): this;
        addArmorItemLayer(itemArmorJSBuilder: Internal.Consumer_<Internal.ItemArmorJSBuilder<T>>): this;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     if (entity.isBaby()) {
         *         poseStack.scale(0.5, 0.5, 0.5)
         *     }
         * });
         * ```
        */
        scaleModelForRender(scaleModelForRender: Internal.Consumer_<Internal.ContextUtils$ScaleModelRenderContext>): this;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        setSwimSplashSound(sound: any): this;
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        setRenderType(type: any): this;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onFlap(consumer: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Adds an extra glowing render layer to the mob.
         * @param newGlowingGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGlowingGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
        */
        newGlowingGeoLayer(builderConsumer: Internal.Consumer_<Internal.GeoLayerJSBuilder<T>>): this;
        /**
         * Sets a callback function to be executed when the entity is blocked by a shield.
         * The provided Consumer accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that is blocked by a shield.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onBlockedByShield(context => {
         *     // Define custom logic for handling when the entity is blocked by a shield
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onBlockedByShield(onBlockedByShield: Internal.Consumer_<Internal.ContextUtils$LivingEntityContext>): this;
        /**
         * Sets a callback function to be executed when the entity drops custom loot upon death.
         * The provided Consumer accepts a {@link ContextUtils.EntityLootContext} parameter,
         * representing the context of the entity's death and loot dropping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.dropCustomDeathLoot(context => {
         *     // Define custom logic for handling the entity dropping custom loot upon death
         *     // Use information about the EntityLootContext provided by the context.
         * });
         * ```
        */
        dropCustomDeathLoot(consumer: Internal.Consumer_<Internal.ContextUtils$EntityLootContext>): this;
        /**
         * Sets the update interval for the entity.
         * Defaults to 1 tick.
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(20); // Set the update interval to 20 ticks
         * ```
        */
        updateInterval(i: number): this;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onSprint(consumer: Internal.Consumer_<Internal.LivingEntity>): this;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
        */
        shouldRenderAtSqrDistance(func: Internal.Function_<Internal.ContextUtils$EntitySqrDistanceContext, any>): this;
        /**
         * Sets a callback function to be executed when a player interacts with the entity.
         * The provided Consumer accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Define custom logic for handling player interaction with the entity
         *     // Use information about the PlayerEntityContext provided by the context.
         * });
         * ```
        */
        playerTouch(consumer: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        set blockJumpFactor(blockJumpFactor: Internal.Function_<Internal.LivingEntity, any>)
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * entityBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
        */
        set hurtSound(sound: Internal.Function_<Internal.ContextUtils$HurtContext, any>)
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
        */
        set deathSound(sound: any)
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setWaterSlowDown(0.6);
         * ```
        */
        set waterSlowDown(slowdownFactor: number)
        /**
         * Sets a function to determine the standing eye height of the entity.
         * The provided Function accepts a {@link ContextUtils.EntityPoseDimensionsContext} parameter,
         * representing the context of the entity's pose and dimensions when standing.
         * It returns a Float representing the standing eye height.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setStandingEyeHeight(context => {
         *     // Define logic to calculate and return the standing eye height for the entity
         *     // Use information about the EntityPoseDimensionsContext provided by the context.
         *     return // Some Float value representing the standing eye height;
         * });
         * ```
        */
        set standingEyeHeight(setStandingEyeHeight: Internal.Function_<Internal.ContextUtils$EntityPoseDimensionsContext, any>)
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSoundVolume(0.5);
         * ```
        */
        set soundVolume(volume: number)
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        set summonable(b: boolean)
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the LivingEntity provided by the context.
         *     return 3;
         * });
         * ```
        */
        set maxFallDistance(maxFallDistance: Internal.Function_<Internal.LivingEntity, any>)
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        set swimSound(sound: any)
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        set swimSplashSound(sound: any)
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        set renderType(type: any)
        static readonly thisList: [];
        readonly layerList: Internal.List<Internal.GeoLayerJSBuilder<T>>;
        readonly glowingLayerList: Internal.List<Internal.GeoLayerJSBuilder<T>>;
        heightMap: Internal.Heightmap$Types;
        spawnPredicate: Internal.SpawnPlacements$SpawnPredicate<Internal.Entity>;
        placementType: Internal.SpawnPlacements$Type;
        readonly partEntityParamsList: Internal.List<Internal.ContextUtils$PartEntityParams<T>>;
        static readonly spawnList: [];
        static readonly biomeSpawnList: [];
    }
    type BaseLivingEntityBuilder_<T extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder<T>;
    class LakeFeature$Configuration extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockStateProvider_, arg1: Internal.BlockStateProvider_)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        barrier(): Internal.BlockStateProvider;
        fluid(): Internal.BlockStateProvider;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.LakeFeature$Configuration>;
    }
    type LakeFeature$Configuration_ = LakeFeature$Configuration;
    class ConduitBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly SHAPE: Internal.ArrayVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type ConduitBlock_ = ConduitBlock;
    abstract class HudRenderedVariableIntPowerFactory$Simple <T extends Internal.IHudRenderedVariableIntPowerConfiguration> extends Internal.HudRenderedVariableIntPowerFactory<T> {
        getProgress(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_, arg2: number): number;
        decrement(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
    }
    type HudRenderedVariableIntPowerFactory$Simple_<T extends Internal.IHudRenderedVariableIntPowerConfiguration> = HudRenderedVariableIntPowerFactory$Simple<T>;
    class ShapedRecipeSchema$ShapedRecipeJS extends Internal.RecipeJS {
        constructor()
        noShrink(): Internal.RecipeJS;
        getMod(): string;
        noMirror(): Internal.RecipeJS;
        get mod(): string
    }
    type ShapedRecipeSchema$ShapedRecipeJS_ = ShapedRecipeSchema$ShapedRecipeJS;
    abstract class MapBlockMarker <D extends Internal.CustomMapDecoration> {
        getFlags(): number;
        setPersistent(persistent: boolean): void;
        getName(): Internal.Component;
        setPos(pos: BlockPos_): void;
        setRotation(rot: number): void;
        getRotation(): number;
        hasFlag(flag: number): boolean;
        getTypeId(): string;
        shouldRefresh(): boolean;
        getPos(): BlockPos;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        saveToNBT(compound: Internal.CompoundTag_): Internal.CompoundTag;
        createDecorationFromMarker(data: Internal.MapItemSavedData_): D;
        loadFromNBT(compound: Internal.CompoundTag_): void;
        setName(name: Internal.Component_): void;
        getMarkerId(): string;
        saveToNBT(): Internal.CompoundTag;
        getType(): Internal.MapDecorationType<D, any>;
        shouldSave(): boolean;
        get flags(): number
        set persistent(persistent: boolean)
        get name(): Internal.Component
        set pos(pos: BlockPos_)
        set rotation(rot: number)
        get rotation(): number
        get typeId(): string
        get pos(): BlockPos
        set name(name: Internal.Component_)
        get markerId(): string
        get type(): Internal.MapDecorationType<D, any>
        static readonly HAS_SMALL_TEXTURE_FLAG: 1;
    }
    type MapBlockMarker_<D extends Internal.CustomMapDecoration> = MapBlockMarker<D>;
    class BlockEvent$BlockToolModificationEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean)
        getHeldItemStack(): Internal.ItemStack;
        setFinalState(arg0: Internal.BlockState_): void;
        getFinalState(): Internal.BlockState;
        getContext(): Internal.UseOnContext;
        getPlayer(): Player;
        isSimulated(): boolean;
        getToolAction(): Internal.ToolAction;
        get heldItemStack(): Internal.ItemStack
        set finalState(arg0: Internal.BlockState_)
        get finalState(): Internal.BlockState
        get context(): Internal.UseOnContext
        get player(): Player
        get simulated(): boolean
        get toolAction(): Internal.ToolAction
    }
    type BlockEvent$BlockToolModificationEvent_ = BlockEvent$BlockToolModificationEvent;
    class DamageSources {
        constructor(arg0: Internal.RegistryAccess_)
        generic(): DamageSource;
        freeze(): DamageSource;
        source(arg0: Internal.ResourceKey_<Internal.DamageType>, arg1: Internal.Entity_, arg2: Internal.Entity_): DamageSource;
        onFire(): DamageSource;
        genericKill(): DamageSource;
        cramming(): DamageSource;
        thrown(arg0: Internal.Entity_, arg1: Internal.Entity_): DamageSource;
        lightningBolt(): DamageSource;
        fireworks(arg0: Internal.FireworkRocketEntity_, arg1: Internal.Entity_): DamageSource;
        magic(): DamageSource;
        fireball(arg0: Internal.Fireball_, arg1: Internal.Entity_): DamageSource;
        starve(): DamageSource;
        source(arg0: Internal.ResourceKey_<Internal.DamageType>, arg1: Internal.Entity_): DamageSource;
        lava(): DamageSource;
        fallingBlock(arg0: Internal.Entity_): DamageSource;
        dragonBreath(): DamageSource;
        sting(arg0: Internal.LivingEntity_): DamageSource;
        playerAttack(arg0: Player_): DamageSource;
        inFire(): DamageSource;
        trident(arg0: Internal.Entity_, arg1: Internal.Entity_): DamageSource;
        wither(): DamageSource;
        indirectMagic(arg0: Internal.Entity_, arg1: Internal.Entity_): DamageSource;
        dryOut(): DamageSource;
        noAggroMobAttack(arg0: Internal.LivingEntity_): DamageSource;
        sonicBoom(arg0: Internal.Entity_): DamageSource;
        thorns(arg0: Internal.Entity_): DamageSource;
        fallingStalactite(arg0: Internal.Entity_): DamageSource;
        anvil(arg0: Internal.Entity_): DamageSource;
        arrow(arg0: Internal.AbstractArrow_, arg1: Internal.Entity_): DamageSource;
        explosion(arg0: Internal.Entity_, arg1: Internal.Entity_): DamageSource;
        source(arg0: Internal.ResourceKey_<Internal.DamageType>): DamageSource;
        hotFloor(): DamageSource;
        outOfBorder(): DamageSource;
        mobProjectile(arg0: Internal.Entity_, arg1: Internal.LivingEntity_): DamageSource;
        mobAttack(arg0: Internal.LivingEntity_): DamageSource;
        explosion(arg0: Internal.Explosion_): DamageSource;
        inWall(): DamageSource;
        flyIntoWall(): DamageSource;
        stalagmite(): DamageSource;
        fall(): DamageSource;
        witherSkull(arg0: Internal.WitherSkull_, arg1: Internal.Entity_): DamageSource;
        drown(): DamageSource;
        badRespawnPointExplosion(arg0: Vec3d_): DamageSource;
        cactus(): DamageSource;
        fellOutOfWorld(): DamageSource;
        sweetBerryBush(): DamageSource;
        readonly damageTypes: Internal.Registry<Internal.DamageType>;
    }
    type DamageSources_ = DamageSources;
    interface ByteBufAllocator {
        abstract compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        abstract directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        abstract buffer(): Internal.ByteBuf;
        abstract compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        abstract compositeBuffer(): Internal.CompositeByteBuf;
        abstract heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        abstract compositeDirectBuffer(): Internal.CompositeByteBuf;
        abstract ioBuffer(): Internal.ByteBuf;
        abstract heapBuffer(): Internal.ByteBuf;
        abstract heapBuffer(arg0: number): Internal.ByteBuf;
        abstract ioBuffer(arg0: number): Internal.ByteBuf;
        abstract compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        abstract directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        abstract calculateNewCapacity(arg0: number, arg1: number): number;
        abstract directBuffer(arg0: number): Internal.ByteBuf;
        abstract ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        abstract buffer(arg0: number, arg1: number): Internal.ByteBuf;
        abstract compositeHeapBuffer(): Internal.CompositeByteBuf;
        abstract buffer(arg0: number): Internal.ByteBuf;
        get directBufferPooled(): boolean
        readonly DEFAULT: Internal.PooledByteBufAllocator;
    }
    type ByteBufAllocator_ = ByteBufAllocator;
    interface Long2IntMap extends Internal.Map<number, number>, Internal.Long2IntFunction {
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        abstract defaultReturnValue(): number;
        replace(arg0: number, arg1: number): number;
        replaceAll(arg0: Internal.BiFunction_<number, number, number>): void;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2IntFunction<T>;
        abstract values(): Internal.IntCollection;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        computeIfAbsentNullable(arg0: number, arg1: Internal.LongFunction_<number>): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Long2LongFunction;
        abstract containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: any, arg1: Internal.Function_<any, any>): any;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        forEach(arg0: Internal.BiConsumer_<number, number>): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, number>>;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2IntFunction;
        computeIfAbsent(arg0: number, arg1: Internal.LongToIntFunction_): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        remove(arg0: number): number;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        mergeInt(arg0: number, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract putAll(arg0: Internal.Map_<number, number>): void;
        apply(arg0: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Long2CharFunction;
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        compute(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        abstract long2IntEntrySet(): Internal.ObjectSet<Internal.Long2IntMap$Entry>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        abstract isEmpty(): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: number, arg1: number): number;
        abstract keySet(): Internal.LongSet;
        mergeInt(arg0: number, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Long2IntFunction;
        abstract containsValue(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2IntFunction<T>;
        computeIfAbsent(arg0: number, arg1: Internal.Long2IntFunction_): number;
        /**
         * @deprecated
        */
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        applyAsInt(arg0: number): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Long2ByteFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        putIfAbsent(arg0: number, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        abstract size(): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2IntFunction_): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Long2DoubleFunction;
        get empty(): boolean
    }
    type Long2IntMap_ = Long2IntMap;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface ISlottedWidgetFactory <R> {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract createWidgetForSlots(arg0: Internal.IRecipeExtrasBuilder_, arg1: R, arg2: Internal.List_<Internal.IRecipeSlotDrawable>): void;
        (arg0: Internal.IRecipeExtrasBuilder, arg1: R, arg2: Internal.List<Internal.IRecipeSlotDrawable>): void;
    }
    type ISlottedWidgetFactory_<R> = ISlottedWidgetFactory<R>;
    class EntityHurtPlayerBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * Checks the damage done to the player.
        */
        setDamageByPredicate(arg0: Internal.DamagePredicate_): void;
        /**
         * Checks the damage done to the player.
        */
        setDamage(arg0: Internal.Consumer_<Internal.DamagePredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * Checks the damage done to the player.
        */
        set damageByPredicate(arg0: Internal.DamagePredicate_)
        /**
         * Checks the damage done to the player.
        */
        set damage(arg0: Internal.Consumer_<Internal.DamagePredicateBuilder>)
    }
    type EntityHurtPlayerBuilder_ = EntityHurtPlayerBuilder;
    class Villager extends Internal.AbstractVillager implements Internal.VillagerDataHolder, Internal.ReputationEventHandler, Internal.VillagerEntityAccessor {
        constructor(arg0: Internal.EntityType_<Internal.Villager>, arg1: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.Villager>, arg1: Internal.Level_, arg2: Internal.VillagerType_)
        getDistance(pos: BlockPos_): number;
        getVillagerData(): Internal.VillagerData;
        restock(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getGossips(): Internal.GossipContainer;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getPlayerReputation(arg0: Player_): number;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        wantsMoreFood(): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        static fabric_setGatherableItems(items: Internal.Set_<Internal.Item>): void;
        getBrain(): Internal.Brain<Internal.Villager>;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getVariant(): Internal.VillagerType;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        static fabric_getGatherableItems$fabric_content_registries_v0_$md$2a2e30$2(): Internal.Set<any>;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        setVariant(arg0: Internal.VillagerType_): void;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        handler$dgp000$moonlight$reg(pVillagerBrain: Internal.Brain_<any>, ci: Internal.CallbackInfo_): void;
        attack(hp: number): void;
        shouldRestock(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        static fabric_getGatherableItems(): Internal.Set<Internal.Item>;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        wantsToSpawnGolem(arg0: number): boolean;
        isChasing(): boolean;
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
        playWorkSound(): void;
        spawnGolemIfNeeded(arg0: Internal.ServerLevel_, arg1: number, arg2: number): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        static fabric_setItemFoodValues(items: Internal.Map_<Internal.Item, number>): void;
        assignProfessionWhenSpawned(): boolean;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        releasePoi(arg0: Internal.MemoryModuleType_<Internal.GlobalPos>): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        gossip(arg0: Internal.ServerLevel_, arg1: Internal.Villager_, arg2: number): void;
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
        setGossips(arg0: Internal.Tag_): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        hasExcessFood(): boolean;
        refreshBrain(arg0: Internal.ServerLevel_): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
        hasFarmSeeds(): boolean;
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
        setChasing(arg0: boolean): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        openTradingScreen(arg0: Player_, arg1: Internal.Component_, arg2: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        brainProvider(): Internal.Brain$Provider<Internal.Villager>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        static fabric_setGatherableItems$fabric_content_registries_v0_$md$2a2e30$1(arg0: Internal.Set_<any>): void;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        setOffers(arg0: Internal.MerchantOffers_): void;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setVillagerData(arg0: Internal.VillagerData_): void;
        eatAndDigestFood(): void;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setVillagerXp(arg0: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        onReputationEventFrom(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_): void;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        static fabric_setItemFoodValues$fabric_content_registries_v0_$md$2a2e30$0(arg0: Internal.Map_<any, any>): void;
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
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        get villagerData(): Internal.VillagerData
        get gossips(): Internal.GossipContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get brain(): Internal.Brain<Internal.Villager>
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get variant(): Internal.VillagerType
        get living(): boolean
        get totalMovementSpeed(): number
        set variant(arg0: Internal.VillagerType_)
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
        get chasing(): boolean
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
        set gossips(arg0: Internal.Tag_)
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
        set chasing(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set offers(arg0: Internal.MerchantOffers_)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set villagerData(arg0: Internal.VillagerData_)
        set motionX(x: number)
        set villagerXp(arg0: number)
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
        set variant(arg0: any)
        static FOOD_POINTS: {[key: Internal.Item]: 4, [key: Internal.ItemNameBlockItem]: 1, [key: Internal.ItemNameBlockItem]: 1, [key: Internal.Item]: 1};
        static readonly SPEED_MODIFIER: 0.5;
        static readonly BREEDING_FOOD_THRESHOLD: 12;
        static MEMORY_TYPES: [Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>, Internal.MemoryModuleType<any>];
        static readonly POI_MEMORIES: {[key: Internal.MemoryModuleType<any>]: any, [key: Internal.MemoryModuleType<any>]: any, [key: Internal.MemoryModuleType<any>]: any, [key: Internal.MemoryModuleType<any>]: any};
    }
    type Villager_ = Villager;
    interface Float2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleToIntFunction {
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Float2ShortFunction;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2IntFunction;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Float2ByteFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Float2LongFunction;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Float2FloatFunction;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Float2CharFunction;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Float2DoubleFunction;
        apply(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2IntFunction<T>;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2IntFunction<T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2IntFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2IntFunction;
        clear(): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        abstract get(arg0: number): number;
        remove(arg0: number): number;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type Float2IntFunction_ = Float2IntFunction;
    class AmbersolFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type AmbersolFeature_ = AmbersolFeature;
    class ICurio$DropRule extends Internal.Enum<Internal.ICurio$DropRule> {
        static values(): Internal.ICurio$DropRule[];
        static valueOf(arg0: string): Internal.ICurio$DropRule;
        static readonly ALWAYS_KEEP: Internal.ICurio$DropRule;
        static readonly DEFAULT: Internal.ICurio$DropRule;
        static readonly DESTROY: Internal.ICurio$DropRule;
        static readonly ALWAYS_DROP: Internal.ICurio$DropRule;
    }
    type ICurio$DropRule_ = "always_keep" | ICurio$DropRule | "always_drop" | "destroy" | "default";
    class GeothermalVentBlock extends Internal.BaseEntityBlock {
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
        isSpawningParticles(arg0: BlockPos_, arg1: Internal.LevelAccessor_): boolean;
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
        getSmokeType(arg0: Internal.LevelAccessor_, arg1: BlockPos_): number;
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
        static readonly SMOKE_TYPE: Internal.IntegerProperty;
        static readonly SPAWNING_PARTICLES: Internal.BooleanProperty;
    }
    type GeothermalVentBlock_ = GeothermalVentBlock;
    class CandleCakeBlock extends Internal.AbstractCandleBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static byCandle(arg0: Internal.Block_): Internal.BlockState;
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
        static canLight(arg0: Internal.BlockState_): boolean;
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
        static readonly CAKE_SHAPE: Internal.ArrayVoxelShape;
        static readonly AABB_OFFSET: 1.0;
        static readonly LIT: Internal.BooleanProperty;
        static readonly CANDLE_SHAPE: Internal.ArrayVoxelShape;
    }
    type CandleCakeBlock_ = CandleCakeBlock;
    interface DSL$TypeReference {
        "in"(arg0: Internal.Schema_): Internal.TypeTemplate;
        abstract typeName(): string;
        (): string;
    }
    type DSL$TypeReference_ = DSL$TypeReference;
    class CommandBuildContext$MissingTagAccessPolicy extends Internal.Enum<Internal.CommandBuildContext$MissingTagAccessPolicy> {
        static valueOf(arg0: string): Internal.CommandBuildContext$MissingTagAccessPolicy;
        static values(): Internal.CommandBuildContext$MissingTagAccessPolicy[];
        static readonly CREATE_NEW: Internal.CommandBuildContext$MissingTagAccessPolicy;
        static readonly FAIL: Internal.CommandBuildContext$MissingTagAccessPolicy;
    }
    type CommandBuildContext$MissingTagAccessPolicy_ = CommandBuildContext$MissingTagAccessPolicy | "create_new" | "fail";
    class HolderAction extends Internal.ItemAction<Internal.FieldConfiguration<Internal.Holder<Internal.ConfiguredEntityAction<any, any>>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.FieldConfiguration_<Internal.Holder<Internal.ConfiguredEntityAction<any, any>>>, arg1: Internal.Level_, arg2: Internal.Mutable_<Internal.ItemStack>): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type HolderAction_ = HolderAction;
    interface LocationPredicateHelper {
        abstract lychee$getBiomeTag(): Internal.TagKey<Internal.Biome>;
        abstract lychee$setBiomeTag(arg0: Internal.TagKey_<Internal.Biome>): void;
        fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.LocationPredicate$Builder;
        toNetwork(arg0: Internal.LocationPredicate_, arg1: Internal.FriendlyByteBuf_): void;
    }
    type LocationPredicateHelper_ = LocationPredicateHelper;
    class Fox$Type extends Internal.Enum<Internal.Fox$Type> implements Internal.StringRepresentable {
        static byId(arg0: number): Internal.Fox$Type;
        static byName(arg0: string): Internal.Fox$Type;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static byBiome(arg0: Internal.Holder_<Internal.Biome>): Internal.Fox$Type;
        getSerializedName(): string;
        static values(): Internal.Fox$Type[];
        static valueOf(arg0: string): Internal.Fox$Type;
        getId(): number;
        get serializedName(): string
        get id(): number
        static readonly RED: Internal.Fox$Type;
        static readonly SNOW: Internal.Fox$Type;
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.Fox$Type>;
    }
    type Fox$Type_ = "snow" | Fox$Type | "red";
    interface FloatPredicate extends Internal.DoublePredicate, Internal.Predicate<number> {
        or(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.FloatPredicate_): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        negate(): this;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        or(arg0: Internal.FloatPredicate_): this;
        abstract test(arg0: number): boolean;
        (arg0: number): boolean;
    }
    type FloatPredicate_ = FloatPredicate;
    interface RecipeManager$CachedCheck <C extends Internal.Container, T extends Internal.Recipe<C>> {
        abstract getRecipeFor(arg0: C, arg1: Internal.Level_): Internal.Optional<T>;
        (arg0: C, arg1: Internal.Level): Internal.Optional_<T>;
    }
    type RecipeManager$CachedCheck_<C extends Internal.Container, T extends Internal.Recipe<C>> = RecipeManager$CachedCheck<C, T>;
    class ModuleDescriptor$Exports implements Internal.Comparable<Internal.ModuleDescriptor$Exports> {
        isQualified(): boolean;
        targets(): Internal.Set<string>;
        source(): string;
        compareTo(arg0: Internal.ModuleDescriptor$Exports_): number;
        modifiers(): Internal.Set<Internal.ModuleDescriptor$Exports$Modifier>;
        compareTo(arg0: any): number;
        get qualified(): boolean
    }
    type ModuleDescriptor$Exports_ = ModuleDescriptor$Exports;
    class UnitContext {
        constructor()
        pushDebug(): void;
        debugInfo(s: string, values: Internal.Collection_<any>): void;
        sub(): this;
        popDebug(): void;
        addConstant(s: string, u: Internal.Unit_): void;
        parse(input: string): Internal.Unit;
        getFunctionFactory(name: string): Internal.FunctionFactory;
        createStream(input: string): Internal.UnitTokenStream;
        debugInfo(s: string): void;
        addFunction(factory: Internal.FunctionFactory_): void;
        isDebug(): boolean;
        get debug(): boolean
        static readonly DEFAULT: Internal.UnitContext;
        readonly constants: Internal.Map<string, Internal.Unit>;
    }
    type UnitContext_ = UnitContext;
    class StringComponent extends Internal.Record implements Internal.RecipeComponent<string> {
        constructor(error: string, predicate: Internal.Predicate_<string>)
        predicate(): Internal.Predicate<string>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        write(recipe: Internal.RecipeJS_, value: string): Internal.JsonPrimitive;
        checkEmpty(key: Internal.RecipeKey_<string>, value: string): string;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<string, O>;
        asArray(): Internal.ArrayRecipeComponent<string>;
        checkValueHasChanged(oldValue: string, newValue: string): boolean;
        role(): Internal.ComponentRole;
        key(name: string): Internal.RecipeKey<string>;
        componentClass(): typeof any;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<string, O>;
        isInput(recipe: Internal.RecipeJS_, value: string, match: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: string, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        replaceOutput(recipe: Internal.RecipeJS_, original: string, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): string;
        componentType(): string;
        error(): string;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, json: Internal.JsonObject_): void;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<string>, json: Internal.JsonObject_): void;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, string>>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<string>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        replaceInput(recipe: Internal.RecipeJS_, original: string, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): string;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<string>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, string>>;
        orSelf(): Internal.RecipeComponent<string>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<string>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<string>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<string>;
        static readonly CHARACTER: Internal.StringComponent$1;
        static readonly ANY: Internal.StringComponent;
        static readonly NON_BLANK: Internal.StringComponent;
        static readonly DYNAMIC: Internal.DynamicRecipeComponent;
        static readonly ID: Internal.StringComponent;
        static readonly NON_EMPTY: Internal.StringComponent;
    }
    type StringComponent_ = StringComponent;
    class Llama extends Internal.AbstractChestedHorse implements Internal.RangedAttackMob, Internal.VariantHolder<Internal.Llama$Variant> {
        constructor(arg0: Internal.EntityType_<Internal.Llama>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setDidSpit(arg0: boolean): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        isTraderLlama(): boolean;
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
        setVariant(arg0: Internal.Llama$Variant_): void;
        damageHeldItem(): void;
        getSaddleSoundEvent(): Internal.SoundEvent;
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
        getVariant(): any;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        getJumpCooldown(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        getCaravanHead(): this;
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
        getStrength(): number;
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
        leaveCaravan(): void;
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
        inCaravan(): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getSwag(): Internal.DyeColor;
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
        joinCaravan(arg0: Internal.Llama_): void;
        hasCaravanTail(): boolean;
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
        makeNewLlama(): this;
        setVariant(arg0: any): void;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        set didSpit(arg0: boolean)
        get traderLlama(): boolean
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        set variant(arg0: Internal.Llama$Variant_)
        get saddleSoundEvent(): Internal.SoundEvent
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get variant(): any
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get jumpCooldown(): number
        get caravanHead(): Internal.Llama
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
        get strength(): number
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
        get swag(): Internal.DyeColor
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
        set variant(arg0: any)
        didSpit: boolean;
    }
    type Llama_ = Llama;
    interface BiomeAccessAccessor {
        abstract getSeed(): number;
        abstract getStorage(): Internal.BiomeManager$NoiseBiomeSource;
        get seed(): number
        get storage(): Internal.BiomeManager$NoiseBiomeSource
    }
    type BiomeAccessAccessor_ = BiomeAccessAccessor;
    class BaseEntityBuilder$SoundKeyFrameEventJS <E extends Internal.Entity & Internal.IAnimatableJSNL> extends Internal.BaseEntityBuilder$KeyFrameEventJS<E, Internal.SoundKeyframeData> {
        constructor(parent: Internal.SoundKeyframeEvent_<E>)
        /**
         * Gets the sound id given by the Keyframe instruction from the animation. json
        */
        readonly sound: string;
    }
    type BaseEntityBuilder$SoundKeyFrameEventJS_<E extends Internal.Entity & Internal.IAnimatableJSNL> = BaseEntityBuilder$SoundKeyFrameEventJS<E>;
    class AtomicBoolean implements Internal.Serializable {
        constructor()
        constructor(arg0: boolean)
        weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean;
        set(arg0: boolean): void;
        setPlain(arg0: boolean): void;
        getAcquire(): boolean;
        weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean;
        weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean;
        get(): boolean;
        weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean;
        getPlain(): boolean;
        getAndSet(arg0: boolean): boolean;
        setRelease(arg0: boolean): void;
        compareAndExchange(arg0: boolean, arg1: boolean): boolean;
        lazySet(arg0: boolean): void;
        /**
         * @deprecated
        */
        weakCompareAndSet(arg0: boolean, arg1: boolean): boolean;
        compareAndSet(arg0: boolean, arg1: boolean): boolean;
        compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean;
        compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean;
        getOpaque(): boolean;
        setOpaque(arg0: boolean): void;
        set plain(arg0: boolean)
        get acquire(): boolean
        get plain(): boolean
        set release(arg0: boolean)
        get opaque(): boolean
        set opaque(arg0: boolean)
    }
    type AtomicBoolean_ = AtomicBoolean;
    interface TickingBlockEntity {
        abstract getPos(): BlockPos;
        abstract isRemoved(): boolean;
        abstract getType(): string;
        abstract tick(): void;
        get pos(): BlockPos
        get removed(): boolean
        get type(): string
    }
    type TickingBlockEntity_ = TickingBlockEntity;
    abstract class RenderTooltipEvent extends Internal.Event {
        constructor()
        getFont(): Internal.Font;
        getX(): number;
        getY(): number;
        getGraphics(): Internal.GuiGraphics;
        getComponents(): Internal.List<Internal.ClientTooltipComponent>;
        getItemStack(): Internal.ItemStack;
        get font(): Internal.Font
        get x(): number
        get y(): number
        get graphics(): Internal.GuiGraphics
        get components(): Internal.List<Internal.ClientTooltipComponent>
        get itemStack(): Internal.ItemStack
    }
    type RenderTooltipEvent_ = RenderTooltipEvent;
    class Tidal_Claws extends Internal.Item implements Internal.ILeftClick {
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
        onLeftClick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
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
        launchTendonsAt(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.Entity_): boolean;
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
    type Tidal_Claws_ = Tidal_Claws;
    interface DNLAnimatedItem <T extends Internal.Enum<T> & Internal.DNLAnimationState> {
        abstract playDroppedAnimation(arg0: Player_, arg1: Internal.ItemStack_): void;
        resetItemUUID(arg0: Internal.ItemStack_): void;
        getItemUUID(arg0: Internal.ItemStack_): Internal.UUID;
        getDefaultAnimationState(): T;
        abstract getAnimationEnum(): T;
        ensureItemUUID(arg0: Internal.ItemStack_): void;
        get defaultAnimationState(): T
        get animationEnum(): T
        readonly ITEM_UUID: "ItemUUID";
    }
    type DNLAnimatedItem_<T extends Internal.Enum<T> & Internal.DNLAnimationState> = DNLAnimatedItem<T>;
    interface Pointer {
        abstract address(): number;
        (): number;
        readonly CLONG_SIZE: 8;
        readonly POINTER_SHIFT: 3;
        readonly CLONG_SHIFT: 3;
        readonly BITS64: true;
        readonly BITS32: false;
        readonly POINTER_SIZE: 8;
    }
    type Pointer_ = Pointer;
    class OctahedralGroup extends Internal.Enum<Internal.OctahedralGroup> implements Internal.StringRepresentable {
        transformation(): Matrix3f;
        inverse(): this;
        rotate(arg0: Internal.Direction_): Internal.Direction;
        static valueOf(arg0: string): Internal.OctahedralGroup;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        inverts(arg0: Internal.Direction$Axis_): boolean;
        getSerializedName(): string;
        static values(): Internal.OctahedralGroup[];
        rotate(arg0: Internal.FrontAndTop_): Internal.FrontAndTop;
        compose(arg0: Internal.OctahedralGroup_): this;
        get serializedName(): string
        static readonly ROT_180_EDGE_XY_NEG: Internal.OctahedralGroup;
        static readonly ROT_180_EDGE_YZ_POS: Internal.OctahedralGroup;
        static readonly SWAP_XZ: Internal.OctahedralGroup;
        static readonly ROT_90_REF_Y_NEG: Internal.OctahedralGroup;
        static readonly INVERT_Z: Internal.OctahedralGroup;
        static readonly SWAP_YZ: Internal.OctahedralGroup;
        static readonly INVERT_X: Internal.OctahedralGroup;
        static readonly ROT_180_EDGE_XY_POS: Internal.OctahedralGroup;
        static readonly ROT_180_EDGE_YZ_NEG: Internal.OctahedralGroup;
        static readonly ROT_90_Z_POS: Internal.OctahedralGroup;
        static readonly SWAP_NEG_YZ: Internal.OctahedralGroup;
        static readonly ROT_180_FACE_XY: Internal.OctahedralGroup;
        static readonly SWAP_NEG_XZ: Internal.OctahedralGroup;
        static readonly ROT_90_Z_NEG: Internal.OctahedralGroup;
        static readonly ROT_60_REF_PNN: Internal.OctahedralGroup;
        static readonly ROT_60_REF_PPP: Internal.OctahedralGroup;
        static readonly ROT_60_REF_PNP: Internal.OctahedralGroup;
        static readonly ROT_60_REF_NNP: Internal.OctahedralGroup;
        static readonly ROT_60_REF_NNN: Internal.OctahedralGroup;
        static readonly ROT_60_REF_NPP: Internal.OctahedralGroup;
        static readonly ROT_60_REF_PPN: Internal.OctahedralGroup;
        static readonly ROT_90_REF_Y_POS: Internal.OctahedralGroup;
        static readonly ROT_60_REF_NPN: Internal.OctahedralGroup;
        static readonly ROT_90_X_NEG: Internal.OctahedralGroup;
        static readonly ROT_120_PNP: Internal.OctahedralGroup;
        static readonly INVERT_Y: Internal.OctahedralGroup;
        static readonly ROT_180_EDGE_XZ_POS: Internal.OctahedralGroup;
        static readonly SWAP_XY: Internal.OctahedralGroup;
        static readonly ROT_120_NPN: Internal.OctahedralGroup;
        static readonly ROT_90_REF_Z_POS: Internal.OctahedralGroup;
        static readonly ROT_120_NNP: Internal.OctahedralGroup;
        static readonly ROT_90_REF_X_POS: Internal.OctahedralGroup;
        static readonly ROT_120_PPN: Internal.OctahedralGroup;
        static readonly ROT_120_NNN: Internal.OctahedralGroup;
        static readonly ROT_120_NPP: Internal.OctahedralGroup;
        static readonly ROT_90_X_POS: Internal.OctahedralGroup;
        static readonly ROT_120_PNN: Internal.OctahedralGroup;
        static readonly ROT_120_PPP: Internal.OctahedralGroup;
        static readonly ROT_90_REF_X_NEG: Internal.OctahedralGroup;
        static readonly IDENTITY: Internal.OctahedralGroup;
        static readonly SWAP_NEG_XY: Internal.OctahedralGroup;
        static readonly ROT_180_FACE_YZ: Internal.OctahedralGroup;
        static readonly ROT_180_FACE_XZ: Internal.OctahedralGroup;
        static readonly ROT_180_EDGE_XZ_NEG: Internal.OctahedralGroup;
        static readonly ROT_90_REF_Z_NEG: Internal.OctahedralGroup;
        static readonly ROT_90_Y_NEG: Internal.OctahedralGroup;
        static readonly ROT_90_Y_POS: Internal.OctahedralGroup;
        static readonly INVERSION: Internal.OctahedralGroup;
    }
    type OctahedralGroup_ = "inversion" | "rot_180_face_xz" | "invert_z" | "rot_180_edge_xy_pos" | "rot_120_pnp" | "rot_120_ppp" | "rot_120_nnn" | "rot_120_npn" | "rot_90_ref_z_neg" | "rot_180_edge_xz_pos" | "swap_xy" | "rot_90_x_neg" | "swap_neg_yz" | "identity" | "rot_90_z_neg" | "rot_90_ref_z_pos" | "rot_60_ref_ppn" | "rot_60_ref_npp" | "rot_60_ref_pnn" | "rot_60_ref_nnp" | "rot_180_edge_yz_pos" | "swap_yz" | "rot_90_y_pos" | "rot_90_ref_y_neg" | "rot_90_ref_y_pos" | "rot_90_x_pos" | "rot_180_face_yz" | "rot_180_edge_xy_neg" | "rot_120_nnp" | "rot_120_pnn" | "rot_120_npp" | "rot_120_ppn" | "swap_neg_xz" | "rot_90_ref_x_pos" | "invert_x" | OctahedralGroup | "rot_180_edge_xz_neg" | "rot_90_ref_x_neg" | "rot_180_face_xy" | "rot_90_z_pos" | "rot_60_ref_nnn" | "rot_60_ref_ppp" | "rot_90_y_neg" | "rot_180_edge_yz_neg" | "swap_xz" | "rot_60_ref_npn" | "invert_y" | "rot_60_ref_pnp" | "swap_neg_xy";
    class FloatTag extends Internal.NumericTag {
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getType(): Internal.TagType<Internal.FloatTag>;
        static valueOf(arg0: number): Internal.FloatTag;
        get asString(): string
        get type(): Internal.TagType<Internal.FloatTag>
        static readonly TYPE: Internal.TagType<Internal.FloatTag>;
        static readonly ZERO: Internal.FloatTag;
    }
    type FloatTag_ = FloatTag;
    interface ProgramTypeAccessor {
        createProgramType(name: string, ordinal: number, typeName: string, extension: string, glId: number): Internal.Program$Type;
    }
    type ProgramTypeAccessor_ = ProgramTypeAccessor;
    class Program {
        attachToShader(arg0: Internal.Shader_): void;
        static compileShader(arg0: Internal.Program$Type_, arg1: string, arg2: Internal.InputStream_, arg3: string, arg4: Internal.GlslPreprocessor_): Internal.Program;
        close(): void;
        getName(): string;
        getId(): number;
        get name(): string
        get id(): number
    }
    type Program_ = Program;
    abstract class AbstractStringBuilder implements Internal.CharSequence, Internal.Appendable {
        reverse(): this;
        append(arg0: string): this;
        codePointAt(arg0: number): number;
        insert(arg0: number, arg1: string): this;
        append(arg0: number): this;
        append(arg0: boolean): this;
        append(arg0: number): this;
        lastIndexOf(arg0: string): number;
        insert(arg0: number, arg1: number): this;
        getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
        indexOf(arg0: string): number;
        append(arg0: number): this;
        lastIndexOf(arg0: string, arg1: number): number;
        insert(arg0: number, arg1: boolean): this;
        charAt(arg0: number): string;
        length(): number;
        replace(arg0: number, arg1: number, arg2: string): this;
        trimToSize(): void;
        insert(arg0: number, arg1: number): this;
        append(arg0: string): this;
        "delete"(arg0: number, arg1: number): this;
        static compare(arg0: Internal.CharSequence_, arg1: Internal.CharSequence_): number;
        indexOf(arg0: string, arg1: number): number;
        chars(): Internal.IntStream;
        ensureCapacity(arg0: number): void;
        insert(arg0: number, arg1: Internal.CharSequence_): this;
        insert(arg0: number, arg1: string): this;
        insert(arg0: number, arg1: any): this;
        append(arg0: number): this;
        capacity(): number;
        append(arg0: string[]): this;
        codePointCount(arg0: number, arg1: number): number;
        substring(arg0: number): string;
        setCharAt(arg0: number, arg1: string): void;
        setLength(arg0: number): void;
        isEmpty(): boolean;
        codePointBefore(arg0: number): number;
        append(arg0: string[], arg1: number, arg2: number): this;
        deleteCharAt(arg0: number): this;
        append(arg0: Internal.StringBuffer_): this;
        subSequence(arg0: number, arg1: number): Internal.CharSequence;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        appendCodePoint(arg0: number): this;
        substring(arg0: number, arg1: number): string;
        insert(arg0: number, arg1: number): this;
        insert(arg0: number, arg1: Internal.CharSequence_, arg2: number, arg3: number): this;
        insert(arg0: number, arg1: number): this;
        insert(arg0: number, arg1: string[], arg2: number, arg3: number): this;
        offsetByCodePoints(arg0: number, arg1: number): number;
        append(arg0: any): this;
        insert(arg0: number, arg1: string[]): this;
        append(arg0: Internal.CharSequence_): this;
        codePoints(): Internal.IntStream;
        set length(arg0: number)
        get empty(): boolean
    }
    type AbstractStringBuilder_ = AbstractStringBuilder;
    class MoltenEdgeSwordItem extends Internal.UniqueSwordItem {
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
    type MoltenEdgeSwordItem_ = MoltenEdgeSwordItem;
    class PlayerEvent$ItemSmeltedEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.ItemStack_)
        getSmelting(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        get smelting(): Internal.ItemStack
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$ItemSmeltedEvent_ = PlayerEvent$ItemSmeltedEvent;
    class FilterableWeightedList <U> extends Internal.ShufflingList<U> {
        constructor()
        entryStream(): Internal.Stream<Internal.ShufflingList$WeightedEntry<U>>;
        hasFilter(): boolean;
        stream(): Internal.Stream<U>;
        spliterator(): Internal.Spliterator<U>;
        addFilter(arg0: Internal.Predicate_<U>): void;
        forEach(arg0: Internal.Consumer_<U>): void;
        size(): number;
        addAll(arg0: Internal.FilterableWeightedList_<U>): void;
        pickRandom(): U;
        setFilter(arg0: Internal.Predicate_<U>): void;
        pickRandom(arg0: Internal.Random_): U;
        copy(): this;
        removeFilter(): void;
        set filter(arg0: Internal.Predicate_<U>)
    }
    type FilterableWeightedList_<U> = FilterableWeightedList<U>;
    class NeodymiumNodeBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: boolean)
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
    type NeodymiumNodeBlock_ = NeodymiumNodeBlock;
    class BloodStaffItem extends Internal.StaffItem {
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
    type BloodStaffItem_ = BloodStaffItem;
    class ContextUtils$ArrowLivingEntityContext {
        constructor(arrow: Internal.AbstractArrow_, entity: Internal.LivingEntity_)
        /**
         * The arrow being fired.
        */
        readonly arrow: Internal.AbstractArrow;
        /**
         * The living entity hit by the arrow.
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$ArrowLivingEntityContext_ = ContextUtils$ArrowLivingEntityContext;
    class StructureMode extends Internal.Enum<Internal.StructureMode> implements Internal.StringRepresentable {
        getDisplayName(): Internal.Component;
        static values(): Internal.StructureMode[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.StructureMode;
        get displayName(): Internal.Component
        get serializedName(): string
        static readonly SAVE: Internal.StructureMode;
        static readonly CORNER: Internal.StructureMode;
        static readonly LOAD: Internal.StructureMode;
        static readonly DATA: Internal.StructureMode;
    }
    type StructureMode_ = "load" | StructureMode | "save" | "data" | "corner";
    interface IPlantable {
        abstract getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        (arg0: Internal.BlockGetter, arg1: BlockPos): Internal.BlockState_;
    }
    type IPlantable_ = IPlantable;
    class ActiveSelfConfiguration extends Internal.Record implements Internal.IActiveCooldownPowerConfiguration {
        constructor(duration: number, hudRender: Internal.HudRender_, action: Internal.ConfiguredEntityAction_<any, any>, key: Internal.IActivePower$Key_)
        isConfigurationValid(): boolean;
        hudRender(): Internal.HudRender;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        duration(): number;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        action(): Internal.ConfiguredEntityAction<any, any>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        key(): Internal.IActivePower$Key;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ActiveSelfConfiguration>;
    }
    type ActiveSelfConfiguration_ = ActiveSelfConfiguration;
    interface SignedMessageValidator {
        abstract updateAndValidate(arg0: Internal.PlayerChatMessage_): boolean;
        (arg0: Internal.PlayerChatMessage): boolean;
        readonly ACCEPT_UNSIGNED: Internal.SignedMessageValidator;
        readonly REJECT_ALL: Internal.SignedMessageValidator;
    }
    type SignedMessageValidator_ = SignedMessageValidator;
    interface RenderContext$QuadTransform {
        abstract transform(arg0: Internal.MutableQuadView_): boolean;
        (arg0: Internal.MutableQuadView): boolean;
    }
    type RenderContext$QuadTransform_ = RenderContext$QuadTransform;
    class CommandBlock extends Internal.BaseEntityBlock implements Internal.GameMasterBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: boolean)
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
        static readonly CONDITIONAL: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CommandBlock_ = CommandBlock;
    class ClientboundContainerSetDataPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getValue(): number;
        getContainerId(): number;
        isSkippable(): boolean;
        getId(): number;
        get value(): number
        get containerId(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundContainerSetDataPacket_ = ClientboundContainerSetDataPacket;
    class BitSet implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: number)
        clone(): any;
        set(arg0: number): void;
        cardinality(): number;
        xor(arg0: Internal.BitSet_): void;
        isEmpty(): boolean;
        set(arg0: number, arg1: number, arg2: boolean): void;
        intersects(arg0: Internal.BitSet_): boolean;
        get(arg0: number, arg1: number): this;
        set(arg0: number, arg1: boolean): void;
        static valueOf(arg0: number[]): Internal.BitSet;
        previousSetBit(arg0: number): number;
        or(arg0: Internal.BitSet_): void;
        get(arg0: number): boolean;
        andNot(arg0: Internal.BitSet_): void;
        set(arg0: number, arg1: number): void;
        and(arg0: Internal.BitSet_): void;
        stream(): Internal.IntStream;
        length(): number;
        static valueOf(arg0: Internal.LongBuffer_): Internal.BitSet;
        clear(arg0: number, arg1: number): void;
        clear(arg0: number): void;
        flip(arg0: number, arg1: number): void;
        flip(arg0: number): void;
        nextClearBit(arg0: number): number;
        static valueOf(arg0: Internal.ByteBuffer_): Internal.BitSet;
        static valueOf(arg0: number[]): Internal.BitSet;
        previousClearBit(arg0: number): number;
        nextSetBit(arg0: number): number;
        toByteArray(): number[];
        toLongArray(): number[];
        size(): number;
        clear(): void;
        get empty(): boolean
    }
    type BitSet_ = BitSet;
    class ChunkRenderDispatcher {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.LevelRenderer_, arg2: Internal.Executor_, arg3: boolean, arg4: Internal.ChunkBufferBuilderPack_)
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.LevelRenderer_, arg2: Internal.Executor_, arg3: boolean, arg4: Internal.ChunkBufferBuilderPack_, arg5: number)
        getFreeBufferCount(): number;
        setCamera(arg0: Vec3d_): void;
        rebuildChunkSync(arg0: Internal.ChunkRenderDispatcher$RenderChunk_, arg1: Internal.RenderRegionCache_): void;
        getCameraPosition(): Vec3d;
        schedule(arg0: Internal.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask_): void;
        uploadAllPendingUploads(): void;
        getToBatchCount(): number;
        getToUpload(): number;
        dispose(): void;
        blockUntilClear(): void;
        isQueueEmpty(): boolean;
        getStats(): string;
        setLevel(arg0: Internal.ClientLevel_): void;
        uploadChunkLayer(arg0: Internal.BufferBuilder$RenderedBuffer_, arg1: Internal.VertexBuffer_): Internal.CompletableFuture<void>;
        get freeBufferCount(): number
        set camera(arg0: Vec3d_)
        get cameraPosition(): Vec3d
        get toBatchCount(): number
        get toUpload(): number
        get queueEmpty(): boolean
        get stats(): string
        set level(arg0: Internal.ClientLevel_)
        level: Internal.ClientLevel;
        readonly renderer: Internal.LevelRenderer;
        readonly fixedBuffers: Internal.ChunkBufferBuilderPack;
    }
    type ChunkRenderDispatcher_ = ChunkRenderDispatcher;
    abstract class ThrowableItemProjectile extends Internal.ThrowableProjectile implements Internal.ItemSupplier {
        constructor(arg0: Internal.EntityType_<Internal.ThrowableItemProjectile>, arg1: Internal.LivingEntity_, arg2: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.ThrowableItemProjectile>, arg1: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.ThrowableItemProjectile>, arg1: number, arg2: number, arg3: number, arg4: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
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
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getItemRaw(): Internal.ItemStack;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
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
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        abstract getDefaultItem(): Internal.Item;
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
        set item(arg0: Internal.ItemStack_)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get itemRaw(): Internal.ItemStack
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get defaultItem(): Internal.Item
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
    type ThrowableItemProjectile_ = ThrowableItemProjectile;
    class SingleFieldEntityCondition <T> extends Internal.EntityCondition<Internal.FieldConfiguration<T>> {
        constructor(arg0: Internal.MapCodec_<T>, arg1: Internal.BiPredicate_<Internal.Entity, T>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        static checkPredicate(arg0: Internal.Entity_, arg1: ResourceLocation_): boolean;
        static nbt(arg0: Internal.Entity_, arg1: Internal.CompoundTag_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        check(arg0: Internal.FieldConfiguration_<T>, arg1: Internal.Entity_): boolean;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SingleFieldEntityCondition_<T> = SingleFieldEntityCondition<T>;
    interface PlayerEntityAccessor {
        abstract getInventory(): Internal.Inventory;
        get inventory(): Internal.Inventory
        (): Internal.Inventory_;
    }
    type PlayerEntityAccessor_ = PlayerEntityAccessor;
    interface BlockEntityCallback {
        abstract accept(arg0: Internal.BlockEntityJS_): void;
        (arg0: Internal.BlockEntityJS): void;
    }
    type BlockEntityCallback_ = BlockEntityCallback;
    class ServerboundResourcePackPacket$Action extends Internal.Enum<Internal.ServerboundResourcePackPacket$Action> {
        static valueOf(arg0: string): Internal.ServerboundResourcePackPacket$Action;
        static values(): Internal.ServerboundResourcePackPacket$Action[];
        static readonly SUCCESSFULLY_LOADED: Internal.ServerboundResourcePackPacket$Action;
        static readonly FAILED_DOWNLOAD: Internal.ServerboundResourcePackPacket$Action;
        static readonly ACCEPTED: Internal.ServerboundResourcePackPacket$Action;
        static readonly DECLINED: Internal.ServerboundResourcePackPacket$Action;
    }
    type ServerboundResourcePackPacket$Action_ = "declined" | "failed_download" | "successfully_loaded" | ServerboundResourcePackPacket$Action | "accepted";
    interface IJeiKeyMapping {
        abstract isUnbound(): boolean;
        abstract getTranslatedKeyMessage(): Internal.Component;
        abstract isActiveAndMatches(arg0: Internal.InputConstants$Key_): boolean;
        get unbound(): boolean
        get translatedKeyMessage(): Internal.Component
    }
    type IJeiKeyMapping_ = IJeiKeyMapping;
    class SearchRegistry$Key <T> {
        constructor()
    }
    type SearchRegistry$Key_<T> = SearchRegistry$Key<T>;
    interface IForgeMinecraft {
        popGuiLayer(): void;
        getLocale(): Internal.Locale;
        pushGuiLayer(arg0: Internal.Screen_): void;
        get locale(): Internal.Locale
    }
    type IForgeMinecraft_ = IForgeMinecraft;
    interface PhasedParticleEngine {
        abstract setParticleRenderingPhase(arg0: Internal.ParticleRenderingPhase_): void;
        set particleRenderingPhase(arg0: Internal.ParticleRenderingPhase_)
        (arg0: Internal.ParticleRenderingPhase): void;
    }
    type PhasedParticleEngine_ = PhasedParticleEngine;
    abstract class PathNavigation {
        constructor(arg0: Internal.Mob_, arg1: Internal.Level_)
        createPath(arg0: Internal.Set_<BlockPos>, arg1: number, arg2: boolean, arg3: number, arg4: number): net.minecraft.world.level.pathfinder.Path;
        createPath(arg0: Internal.Stream_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        moveTo(arg0: Internal.Entity_, arg1: number): boolean;
        canFloat(): boolean;
        createPath(arg0: Internal.Entity_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        canMoveDirectly(arg0: Vec3d_, arg1: Vec3d_): boolean;
        recomputePath(): void;
        createPath(arg0: number, arg1: number, arg2: number, arg3: number): net.minecraft.world.level.pathfinder.Path;
        getGroundY(arg0: Vec3d_): number;
        setCanFloat(arg0: boolean): void;
        createPath(arg0: Internal.Set_<BlockPos>, arg1: number, arg2: boolean, arg3: number): net.minecraft.world.level.pathfinder.Path;
        createPath(arg0: BlockPos_, arg1: number, arg2: number): net.minecraft.world.level.pathfinder.Path;
        isInProgress(): boolean;
        isInLiquid(): boolean;
        getTargetPos(): BlockPos;
        isStuck(): boolean;
        getPath(): net.minecraft.world.level.pathfinder.Path;
        followThePath(): void;
        abstract canUpdatePath(): boolean;
        resetMaxVisitedNodesMultiplier(): void;
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNodeEvaluator(): Internal.NodeEvaluator;
        moveTo(arg0: net.minecraft.world.level.pathfinder.Path_, arg1: number): boolean;
        abstract createPathFinder(arg0: number): Internal.PathFinder;
        setSpeedModifier(arg0: number): void;
        shouldRecomputePath(arg0: BlockPos_): boolean;
        isDone(): boolean;
        static isClearForMovementBetween(arg0: Internal.Mob_, arg1: Vec3d_, arg2: Vec3d_, arg3: boolean): boolean;
        tick(): void;
        getMaxDistanceToWaypoint(): number;
        setMaxVisitedNodesMultiplier(arg0: number): void;
        doStuckDetection(arg0: Vec3d_): void;
        createPath(arg0: BlockPos_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        trimPath(): void;
        abstract getTempMobPos(): Vec3d;
        stop(): void;
        canCutCorner(arg0: Internal.BlockPathTypes_): boolean;
        createPath(arg0: Internal.Set_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        isStableDestination(arg0: BlockPos_): boolean;
        set canFloat(arg0: boolean)
        get inProgress(): boolean
        get inLiquid(): boolean
        get targetPos(): BlockPos
        get stuck(): boolean
        get path(): net.minecraft.world.level.pathfinder.Path
        get nodeEvaluator(): Internal.NodeEvaluator
        set speedModifier(arg0: number)
        get done(): boolean
        get maxDistanceToWaypoint(): number
        set maxVisitedNodesMultiplier(arg0: number)
        get tempMobPos(): Vec3d
        path: net.minecraft.world.level.pathfinder.Path;
        nodeEvaluator: Internal.NodeEvaluator;
        tick: number;
        readonly level: Internal.Level;
        readonly mob: Internal.Mob;
        maxDistanceToWaypoint: number;
        hasDelayedRecomputation: boolean;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheck: number;
        lastStuckCheckPos: Vec3d;
        timeoutCachedNode: Vec3i;
        timeoutTimer: number;
        timeLastRecompute: number;
        speedModifier: number;
    }
    type PathNavigation_ = PathNavigation;
    class EventPriority extends Internal.Enum<Internal.EventPriority> implements Internal.IEventListener {
        invoke(arg0: Internal.Event_): void;
        static values(): Internal.EventPriority[];
        static valueOf(arg0: string): Internal.EventPriority;
        listenerName(): string;
        static readonly NORMAL: Internal.EventPriority;
        static readonly LOWEST: Internal.EventPriority;
        static readonly LOW: Internal.EventPriority;
        static readonly HIGH: Internal.EventPriority;
        static readonly HIGHEST: Internal.EventPriority;
    }
    type EventPriority_ = "normal" | "high" | "low" | "lowest" | "highest" | EventPriority;
    class LightLayer extends Internal.Enum<Internal.LightLayer> {
        static valueOf(arg0: string): Internal.LightLayer;
        static values(): Internal.LightLayer[];
        static readonly BLOCK: Internal.LightLayer;
        static readonly SKY: Internal.LightLayer;
    }
    type LightLayer_ = "block" | LightLayer | "sky";
    class PebbleBlock extends Internal.WaterBlock {
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
        static readonly PILE: Internal.IntegerProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly MAX_PILE: 4;
    }
    type PebbleBlock_ = PebbleBlock;
    class TickTask implements Internal.Runnable {
        constructor(arg0: number, arg1: Internal.Runnable_)
        run(): void;
        getTick(): number;
        get tick(): number
    }
    type TickTask_ = TickTask;
    class FireworkRocketRecipe extends Internal.CustomRecipe {
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
    type FireworkRocketRecipe_ = FireworkRocketRecipe;
    class RandomSpreadStructurePlacement extends Internal.StructurePlacement {
        constructor(arg0: number, arg1: number, arg2: Internal.RandomSpreadType_, arg3: number)
        constructor(arg0: Vec3i_, arg1: Internal.StructurePlacement$FrequencyReductionMethod_, arg2: number, arg3: number, arg4: Internal.Optional_<Internal.StructurePlacement$ExclusionZone>, arg5: number, arg6: number, arg7: Internal.RandomSpreadType_)
        spacing(): number;
        getPotentialStructureChunk(arg0: number, arg1: number, arg2: number): Internal.ChunkPos;
        separation(): number;
        spreadType(): Internal.RandomSpreadType;
        static readonly CODEC: Internal.Codec<Internal.RandomSpreadStructurePlacement>;
    }
    type RandomSpreadStructurePlacement_ = RandomSpreadStructurePlacement;
    class Horse extends Internal.AbstractHorse implements Internal.VariantHolder<Internal.Variant> {
        constructor(arg0: Internal.EntityType_<Internal.Horse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
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
        damageHeldItem(): void;
        getSaddleSoundEvent(): Internal.SoundEvent;
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
        getVariant(): any;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        getArmor(): Internal.ItemStack;
        getJumpCooldown(): number;
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
        setVariant(arg0: Internal.Variant_): void;
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
        getMarkings(): Internal.Markings;
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
        setVariant(arg0: any): void;
        runCommand(command: string): number;
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
        get saddleSoundEvent(): Internal.SoundEvent
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get variant(): any
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get armor(): Internal.ItemStack
        get jumpCooldown(): number
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
        set variant(arg0: Internal.Variant_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get markings(): Internal.Markings
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
        set variant(arg0: any)
    }
    type Horse_ = Horse;
    class SpriteContents implements Internal.Stitcher$Entry, me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor, Internal.SpriteContentsAccessor, Internal.SpriteContentsExtension, Internal.SpriteContentsExtended, Internal.AutoCloseable, Internal.SpriteContentsInvoker, net.irisshaders.iris.texture.SpriteContentsExtension {
        constructor(arg0: ResourceLocation_, arg1: Internal.FrameSize_, arg2: Internal.NativeImage_, arg3: Internal.AnimationMetadataSection_)
        constructor(arg0: ResourceLocation_, arg1: Internal.FrameSize_, arg2: Internal.NativeImage_, arg3: Internal.AnimationMetadataSection_, arg4: Internal.ForgeTextureMetadata_)
        getOriginalImage(): Internal.NativeImage;
        getOrCreatePBRHolder(): Internal.PBRSpriteHolder;
        getCreatedTicker(): Internal.SpriteContents$Ticker;
        uploadFirstFrame(arg0: number, arg1: number): void;
        sodium$isActive(): boolean;
        height(): number;
        increaseMipLevel(arg0: number): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_[]): void;
        getImages(): Internal.NativeImage[];
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_[]): void;
        getFrameCount(): number;
        close(): void;
        getPBRHolder(): Internal.PBRSpriteHolder;
        sodium$setActive(arg0: boolean): void;
        sodium$hasAnimation(): boolean;
        width(): number;
        getUniqueFrames(): Internal.IntStream;
        name(): ResourceLocation;
        getAnimatedTexture(): Internal.SpriteContents$AnimatedTexture;
        createTicker(): Internal.SpriteTicker;
        isTransparent(arg0: number, arg1: number, arg2: number): boolean;
        get originalImage(): Internal.NativeImage
        get orCreatePBRHolder(): Internal.PBRSpriteHolder
        get createdTicker(): Internal.SpriteContents$Ticker
        get images(): Internal.NativeImage[]
        get frameCount(): number
        get PBRHolder(): Internal.PBRSpriteHolder
        get uniqueFrames(): Internal.IntStream
        get animatedTexture(): Internal.SpriteContents$AnimatedTexture
        readonly width: number;
        readonly height: number;
        originalImage: Internal.NativeImage;
        readonly forgeMeta: Internal.ForgeTextureMetadata;
        byMipLevel: Internal.NativeImage[];
        readonly animatedTexture: Internal.SpriteContents$AnimatedTexture;
    }
    type SpriteContents_ = SpriteContents;
    class SwiftSneakEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type SwiftSneakEnchantment_ = SwiftSneakEnchantment;
    interface CustomJavaToJsWrapper {
        abstract convertJavaToJs(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: typeof any): Internal.Scriptable;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: typeof any): Internal.Scriptable_;
    }
    type CustomJavaToJsWrapper_ = CustomJavaToJsWrapper;
    class LegacyRandomSource implements Internal.BitRandomSource {
        constructor(arg0: number)
        static create(arg0: number): Internal.RandomSource;
        next(arg0: number): number;
        fork(): Internal.RandomSource;
        static create(): Internal.RandomSource;
        nextBoolean(): boolean;
        nextLong(): number;
        setSeed(arg0: number): void;
        nextDouble(): number;
        nextInt(arg0: number, arg1: number): number;
        nextGaussian(): number;
        static createNewThreadLocalInstance(): Internal.RandomSource;
        forkPositional(): Internal.PositionalRandomFactory;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number): number;
        nextFloat(): number;
        /**
         * @deprecated
        */
        static createThreadSafe(): Internal.RandomSource;
        nextInt(): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        set seed(arg0: number)
    }
    type LegacyRandomSource_ = LegacyRandomSource;
    class NoRemainderShaplessRecipe extends Internal.ShapelessRecipe {
        constructor(pId: ResourceLocation_, pGroup: string, pCategory: Internal.CraftingBookCategory_, pResult: Internal.ItemStack_, pIngredients: Internal.NonNullList_<Internal.Ingredient>)
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(inv: Internal.Container_): Internal.NonNullList<any>;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(inv: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type NoRemainderShaplessRecipe_ = NoRemainderShaplessRecipe;
    interface IJeiHelpers {
        abstract getAllRecipeTypes(): Internal.Stream<mezz.jei.api.recipe.RecipeType<any>>;
        abstract getStackHelper(): Internal.IStackHelper;
        abstract getIngredientVisibility(): Internal.IIngredientVisibility;
        abstract getModIdHelper(): Internal.IModIdHelper;
        abstract getColorHelper(): Internal.IColorHelper;
        abstract getVanillaRecipeFactory(): Internal.IVanillaRecipeFactory;
        abstract getFocusFactory(): Internal.IFocusFactory;
        abstract getGuiHelper(): Internal.IGuiHelper;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getRecipeType(arg0: ResourceLocation_): Internal.Optional<mezz.jei.api.recipe.RecipeType<any>>;
        abstract getRecipeType<T>(arg0: ResourceLocation_, arg1: T): Internal.Optional<mezz.jei.api.recipe.RecipeType<T>>;
        abstract getIngredientManager(): Internal.IIngredientManager;
        abstract getPlatformFluidHelper(): Internal.IPlatformFluidHelper<any>;
        get allRecipeTypes(): Internal.Stream<mezz.jei.api.recipe.RecipeType<any>>
        get stackHelper(): Internal.IStackHelper
        get ingredientVisibility(): Internal.IIngredientVisibility
        get modIdHelper(): Internal.IModIdHelper
        get colorHelper(): Internal.IColorHelper
        get vanillaRecipeFactory(): Internal.IVanillaRecipeFactory
        get focusFactory(): Internal.IFocusFactory
        get guiHelper(): Internal.IGuiHelper
        get ingredientManager(): Internal.IIngredientManager
        get platformFluidHelper(): Internal.IPlatformFluidHelper<any>
    }
    type IJeiHelpers_ = IJeiHelpers;
    abstract class Display extends Internal.Entity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setTransformation(arg0: Internal.Transformation_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        abstract updateRenderSubState(arg0: boolean, arg1: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        calculateInterpolationProgress(arg0: number): number;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        setViewRange(arg0: number): void;
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
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        renderState(): Internal.Display$RenderState;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        setBillboardConstraints(arg0: Internal.Display$BillboardConstraints_): void;
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
        orientation(): Quaternionf;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        set transformation(arg0: Internal.Transformation_)
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set viewRange(arg0: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        set billboardConstraints(arg0: Internal.Display$BillboardConstraints_)
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        static readonly TAG_BILLBOARD: "billboard";
        static readonly NO_BRIGHTNESS_OVERRIDE: -1;
        static readonly TAG_HEIGHT: "height";
        static readonly TAG_BRIGHTNESS: "brightness";
        static readonly TAG_SHADOW_STRENGTH: "shadow_strength";
        static readonly LOGGER: Internal.Log4jLogger;
        static readonly TAG_WIDTH: "width";
        static readonly TAG_TRANSFORMATION: "transformation";
        updateRenderState: boolean;
        static readonly TAG_START_INTERPOLATION: "start_interpolation";
        static readonly TAG_GLOW_COLOR_OVERRIDE: "glow_color_override";
        static readonly TAG_SHADOW_RADIUS: "shadow_radius";
        static readonly TAG_INTERPOLATION_DURATION: "interpolation_duration";
        static readonly TAG_VIEW_RANGE: "view_range";
    }
    type Display_ = Display;
    class BoneSnapshot {
        constructor(arg0: Internal.CoreGeoBone_)
        getLastResetScaleTick(): number;
        isRotAnimInProgress(): boolean;
        startRotAnim(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getOffsetX(): number;
        getOffsetY(): number;
        getOffsetZ(): number;
        isPosAnimInProgress(): boolean;
        getBone(): Internal.CoreGeoBone;
        getRotZ(): number;
        getLastResetRotationTick(): number;
        getRotX(): number;
        getRotY(): number;
        static copy(arg0: Internal.BoneSnapshot_): Internal.BoneSnapshot;
        isScaleAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        stopPosAnim(arg0: number): void;
        startPosAnim(): void;
        getScaleY(): number;
        stopScaleAnim(arg0: number): void;
        getScaleZ(): number;
        getScaleX(): number;
        get lastResetScaleTick(): number
        get rotAnimInProgress(): boolean
        get offsetX(): number
        get offsetY(): number
        get offsetZ(): number
        get posAnimInProgress(): boolean
        get bone(): Internal.CoreGeoBone
        get rotZ(): number
        get lastResetRotationTick(): number
        get rotX(): number
        get rotY(): number
        get scaleAnimInProgress(): boolean
        get lastResetPositionTick(): number
        get scaleY(): number
        get scaleZ(): number
        get scaleX(): number
    }
    type BoneSnapshot_ = BoneSnapshot;
    interface SignalGetter extends Internal.BlockGetter {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getMinSection(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        getBestNeighborSignal(arg0: BlockPos_): number;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
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
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
        readonly DIRECTIONS: Internal.Direction[];
    }
    type SignalGetter_ = SignalGetter;
    class FoodBuilder {
        constructor()
        constructor(properties: Internal.FoodProperties_)
        /**
         * Sets whether the food is fast to eat (having half of the eating time).
        */
        fastToEat(flag: boolean): this;
        /**
         * Sets the hunger restored.
        */
        hunger(h: number): this;
        /**
         * Sets whether the food is always edible.
        */
        alwaysEdible(flag: boolean): this;
        /**
         * Sets the saturation modifier. Note that the saturation restored is hunger * saturation.
        */
        saturation(s: number): this;
        build(): Internal.FoodProperties;
        /**
         * Sets the food is always edible.
        */
        alwaysEdible(): this;
        /**
         * Sets whether the food is meat.
        */
        meat(flag: boolean): this;
        /**
         * Adds an effect to the food. Note that the effect duration is in ticks (20 ticks = 1 second).
         * @param mobEffectId The id of the effect. Can be either a string or a ResourceLocation.
         * @param duration The duration of the effect in ticks.
         * @param amplifier The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
         * @param probability The probability of the effect being applied. 1 = 100%.
        */
        effect(mobEffectId: ResourceLocation_, duration: number, amplifier: number, probability: number): this;
        /**
         * Sets the food is meat.
        */
        meat(): this;
        /**
         * Sets a callback that is called when the food is eaten.
         * 
         * Note: This is currently not having effect in `ItemEvents.modification`,
         * as firing this callback requires an `ItemBuilder` instance in the `Item`.
        */
        eaten(e: Internal.Consumer_<Internal.FoodEatenEventJS>): this;
        /**
         * Sets the food is fast to eat (having half of the eating time).
        */
        fastToEat(): this;
        /**
         * Removes an effect from the food.
        */
        removeEffect(mobEffect: Internal.MobEffect_): this;
        eaten: Internal.Consumer<Internal.FoodEatenEventJS>;
    }
    type FoodBuilder_ = FoodBuilder;
    class ConfigPanel$Tab {
        static createTab(icon: ResourceTexture_, tooltip: Internal.Component_, configurable: Internal.Consumer_<Internal.ConfiguratorGroup>): Internal.ConfigPanel$Tab;
        static createTab(icon: ResourceTexture_, tooltip: Internal.Component_): Internal.ConfigPanel$Tab;
        readonly icon: ResourceTexture;
        static readonly WIDGET: Internal.ConfigPanel$Tab;
        static readonly RESOURCE: Internal.ConfigPanel$Tab;
        readonly configurable: Internal.Consumer<Internal.ConfiguratorGroup>;
        readonly tooltip: Internal.Component;
    }
    type ConfigPanel$Tab_ = ConfigPanel$Tab;
    class IntegerArgumentType implements Internal.ArgumentType<number> {
        static integer(arg0: number, arg1: number): Internal.IntegerArgumentType;
        static integer(arg0: number): Internal.IntegerArgumentType;
        getExamples(): Internal.Collection<string>;
        getMaximum(): number;
        static integer(): Internal.IntegerArgumentType;
        parse(arg0: Internal.StringReader_): number;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        getMinimum(): number;
        static getInteger(arg0: Internal.CommandContext_<any>, arg1: string): number;
        get examples(): Internal.Collection<string>
        get maximum(): number
        get minimum(): number
    }
    type IntegerArgumentType_ = IntegerArgumentType;
    interface FabricLootTableBuilder {
        pools(pools: Internal.Collection_<Internal.LootPool>): Internal.LootTable$Builder;
        modifyPools(modifier: Internal.Consumer_<Internal.LootPool$Builder>): Internal.LootTable$Builder;
        apply(function_: Internal.LootItemFunction_): Internal.LootTable$Builder;
        pool(pool: Internal.LootPool_): Internal.LootTable$Builder;
        apply(functions: Internal.Collection_<Internal.LootItemFunction>): Internal.LootTable$Builder;
        copyOf(table: Internal.LootTable_): Internal.LootTable$Builder;
    }
    type FabricLootTableBuilder_ = FabricLootTableBuilder;
    class Climate$ParameterList <T> implements Internal.IExtendedParameterList<any> {
        constructor(arg0: Internal.List_<com.mojang.datafixers.util.Pair<Internal.Climate$ParameterPoint, T>>)
        findValuePositional(arg0: Internal.Climate$TargetPoint_, arg1: number, arg2: number, arg3: number): any;
        getUniqueness(arg0: number, arg1: number, arg2: number): number;
        getTreeCount(): number;
        values(): Internal.List<com.mojang.datafixers.util.Pair<Internal.Climate$ParameterPoint, T>>;
        static codec<T>(arg0: Internal.MapCodec_<T>): Internal.Codec<Internal.Climate$ParameterList<T>>;
        isInitialized(): boolean;
        initializeForTerraBlender(arg0: Internal.RegistryAccess_, arg1: Internal.RegionType_, arg2: number): void;
        findValueIndex(arg0: Internal.Climate$TargetPoint_): T;
        findValueIndex(arg0: Internal.Climate$TargetPoint_, arg1: Internal.Climate$DistanceMetric_<T>): T;
        getTree(arg0: number): Internal.Climate$RTree<any>;
        findValueBruteForce(arg0: Internal.Climate$TargetPoint_): T;
        findValue(arg0: Internal.Climate$TargetPoint_): T;
        get treeCount(): number
        get initialized(): boolean
    }
    type Climate$ParameterList_<T> = Climate$ParameterList<T>;
    class Rarity extends Internal.Enum<Internal.Rarity> implements Internal.IExtensibleEnum {
        getStyleModifier(): Internal.UnaryOperator<Internal.Style>;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        static create(arg0: string, arg1: Internal.UnaryOperator_<Internal.Style>): Internal.Rarity;
        /**
         * @deprecated
        */
        init(): void;
        static valueOf(arg0: string): Internal.Rarity;
        static create(arg0: string, arg1: Internal.ChatFormatting_): Internal.Rarity;
        static values(): Internal.Rarity[];
        get styleModifier(): Internal.UnaryOperator<Internal.Style>
        static readonly COMMON: Internal.Rarity;
        /**
         * @deprecated
        */
        readonly color: Internal.ChatFormatting;
        static readonly UNCOMMON: Internal.Rarity;
        static readonly EPIC: Internal.Rarity;
        static readonly RARE: Internal.Rarity;
    }
    type Rarity_ = "alexscaves:sweet" | Rarity | "uncommon" | "epic" | "rare" | "common" | "alexscaves:demonic" | "alexscaves:rainbow" | "alexscaves:nuclear";
    class PreventGameEventConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(tag: Internal.TagConfiguration_<Internal.GameEvent>, list: Internal.ListConfiguration_<Internal.GameEvent>, action: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>)
        isConfigurationValid(): boolean;
        tag(): Internal.TagConfiguration<Internal.GameEvent>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        list(): Internal.ListConfiguration<Internal.GameEvent>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        doesPrevent(arg0: Internal.GameEvent_): boolean;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
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
        static readonly CODEC: Internal.Codec<Internal.PreventGameEventConfiguration>;
    }
    type PreventGameEventConfiguration_ = PreventGameEventConfiguration;
    interface ChatEvent$ChatComponent {
        abstract get(): Internal.Component;
        abstract set(arg0: Internal.Component_): void;
    }
    type ChatEvent$ChatComponent_ = ChatEvent$ChatComponent;
    interface ProfileResults {
        abstract saveResults(arg0: Internal.Path_): boolean;
        abstract getTimes(arg0: string): Internal.List<Internal.ResultField>;
        getNanoDuration(): number;
        abstract getStartTimeTicks(): number;
        getTickDuration(): number;
        abstract getEndTimeNano(): number;
        abstract getStartTimeNano(): number;
        abstract getEndTimeTicks(): number;
        abstract getProfilerResults(): string;
        demanglePath(arg0: string): string;
        get nanoDuration(): number
        get startTimeTicks(): number
        get tickDuration(): number
        get endTimeNano(): number
        get startTimeNano(): number
        get endTimeTicks(): number
        get profilerResults(): string
        readonly PATH_SEPARATOR: "\u001e";
    }
    type ProfileResults_ = ProfileResults;
    class CarvingContext extends Internal.WorldGenerationContext {
        constructor(arg0: any_, arg1: Internal.RegistryAccess_, arg2: Internal.LevelHeightAccessor_, arg3: Internal.NoiseChunk_, arg4: Internal.RandomState_, arg5: Internal.SurfaceRules$RuleSource_)
        /**
         * @deprecated
        */
        topMaterial(arg0: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg1: Internal.ChunkAccess_, arg2: BlockPos_, arg3: boolean): Internal.Optional<Internal.BlockState>;
        /**
         * @deprecated
        */
        registryAccess(): Internal.RegistryAccess;
        randomState(): Internal.RandomState;
    }
    type CarvingContext_ = CarvingContext;
    class CandleBlock extends Internal.AbstractCandleBlock implements Internal.SimpleWaterloggedBlock {
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
        static canLight(arg0: Internal.BlockState_): boolean;
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
        static readonly MAX_CANDLES: 4;
        static readonly CANDLES: Internal.IntegerProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly MIN_CANDLES: 1;
        static readonly LIT: Internal.BooleanProperty;
        static readonly LIGHT_EMISSION: Internal.ToIntFunction<Internal.BlockState>;
    }
    type CandleBlock_ = CandleBlock;
    interface ListBuilder <T> {
        build(arg0: Internal.DataResult_<T>): Internal.DataResult<T>;
        abstract withErrorsFrom(arg0: Internal.DataResult_<any>): this;
        abstract add(arg0: T): this;
        abstract ops(): Internal.DynamicOps<T>;
        abstract add(arg0: Internal.DataResult_<T>): this;
        add<E>(arg0: E, arg1: Internal.Encoder_<E>): this;
        addAll<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Encoder_<E>): this;
        abstract build(arg0: T): Internal.DataResult<T>;
        abstract mapError(arg0: Internal.UnaryOperator_<string>): this;
    }
    type ListBuilder_<T> = ListBuilder<T>;
    interface Float2ByteFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleToIntFunction {
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Float2IntFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Float2CharFunction;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Float2ShortFunction;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ByteFunction<T>;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Float2FloatFunction;
        apply(arg0: number): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ByteFunction;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        getOrDefault(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        clear(): void;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ByteFunction;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        abstract get(arg0: number): number;
        identity<T>(): Internal.Function<T, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type Float2ByteFunction_ = Float2ByteFunction;
    class LightBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static setLightOnStack(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
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
        static readonly MAX_LEVEL: 15;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly LIGHT_EMISSION: Internal.ToIntFunction<Internal.BlockState>;
        static readonly LEVEL: Internal.IntegerProperty;
    }
    type LightBlock_ = LightBlock;
    class ArgumentCommandNode <S, T> extends Internal.CommandNode<S> {
        constructor(arg0: string, arg1: Internal.ArgumentType_<T>, arg2: Internal.Command_<S>, arg3: Internal.Predicate_<S>, arg4: Internal.CommandNode_<S>, arg5: Internal.RedirectModifier_<S>, arg6: boolean, arg7: Internal.SuggestionProvider_<S>)
        isValidInput(arg0: string): boolean;
        getType(): Internal.ArgumentType<T>;
        createBuilder(): Internal.ArgumentBuilder<any, any>;
        getCustomSuggestions(): Internal.SuggestionProvider<S>;
        get type(): Internal.ArgumentType<T>
        get customSuggestions(): Internal.SuggestionProvider<S>
    }
    type ArgumentCommandNode_<S, T> = ArgumentCommandNode<S, T>;
    interface Object2LongFunction <K> extends it.unimi.dsi.fastutil.Function<K, number>, Internal.ToLongFunction<K> {
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Object2ByteFunction<K>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        removeLong(arg0: any): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2LongFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        containsKey(arg0: any): boolean;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2LongFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2LongFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        abstract getLong(arg0: any): number;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2LongFunction<T>;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2LongFunction;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2LongFunction;
        applyAsLong(arg0: K): number;
        defaultReturnValue(): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Object2IntFunction<K>;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2LongFunction;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        getOrDefault(arg0: any, arg1: number): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2LongFunction<T>;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Object2ShortFunction<K>;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        (arg0: any): number;
    }
    type Object2LongFunction_<K> = Object2LongFunction<K>;
    class PlayerInteractBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        /**
         * The entity which was interacted with.
        */
        setEntityByType(arg0: Internal.EntityType_<any>): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The entity which was interacted with.
        */
        setEntityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The item which was in the player's hand during interaction.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The item which was in the player's hand during interaction.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        /**
         * The entity which was interacted with.
        */
        setEntityByPredicate(arg0: Internal.EntityPredicate_): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * The entity which was interacted with.
        */
        setEntity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item which was in the player's hand during interaction.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The entity which was interacted with.
        */
        set entityByType(arg0: Internal.EntityType_<any>)
        /**
         * The entity which was interacted with.
        */
        set entityByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        /**
         * The item which was in the player's hand during interaction.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The item which was in the player's hand during interaction.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The entity which was interacted with.
        */
        set entityByPredicate(arg0: Internal.EntityPredicate_)
        /**
         * The entity which was interacted with.
        */
        set entity(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * The item which was in the player's hand during interaction.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type PlayerInteractBuilder_ = PlayerInteractBuilder;
    class Stray extends Internal.AbstractSkeleton {
        constructor(arg0: Internal.EntityType_<Internal.Stray>, arg1: Internal.Level_)
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
        static checkStraySpawnRules(arg0: Internal.EntityType_<Internal.Stray>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
    type Stray_ = Stray;
    class GuanoPileFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type GuanoPileFeature_ = GuanoPileFeature;
    class MoveControlJSBuilder {
        constructor()
        setStrafe(strafe: Internal.Consumer_<Internal.ContextUtils$StrafeContext>): this;
        setHasWanted(hasWanted: Internal.Function_<Internal.Mob, any>): this;
        setRotlerp(rotlerp: Internal.Function_<Internal.ContextUtils$RotLerpContext, any>): this;
        setIsWalkable(isWalkable: Internal.Function_<Internal.ContextUtils$IsWalkableContext, any>): this;
        tick(tick: Internal.Consumer_<Internal.Mob>): this;
        setSpeedModifier(getSpeedModifier: Internal.Function_<Internal.Mob, any>): this;
        setWantedPosition(setWantedPosition: Internal.Consumer_<Internal.ContextUtils$SetWantedPositionContext>): this;
        set strafe(strafe: Internal.Consumer_<Internal.ContextUtils$StrafeContext>)
        set hasWanted(hasWanted: Internal.Function_<Internal.Mob, any>)
        set rotlerp(rotlerp: Internal.Function_<Internal.ContextUtils$RotLerpContext, any>)
        set isWalkable(isWalkable: Internal.Function_<Internal.ContextUtils$IsWalkableContext, any>)
        set speedModifier(getSpeedModifier: Internal.Function_<Internal.Mob, any>)
        set wantedPosition(setWantedPosition: Internal.Consumer_<Internal.ContextUtils$SetWantedPositionContext>)
    }
    type MoveControlJSBuilder_ = MoveControlJSBuilder;
    class TreeNode <T, K> {
        constructor(dimension: number, key: T)
        getContent(): K;
        getChild(key: T): this;
        getKey(): T;
        isLeaf(): boolean;
        addContent(key: T, content: K): void;
        removeChild(key: T): void;
        getChildren(): Internal.List<Internal.TreeNode<T, K>>;
        getOrCreateChild(childKey: T): this;
        setValid(valid: Internal.Predicate_<Internal.TreeNode<T, K>>): this;
        createChild(childKey: T): this;
        get content(): K
        get key(): T
        get leaf(): boolean
        get children(): Internal.List<Internal.TreeNode<T, K>>
        set valid(valid: Internal.Predicate_<Internal.TreeNode<T, K>>)
        readonly dimension: number;
    }
    type TreeNode_<T, K> = TreeNode<T, K>;
    class IngredientActionFilter {
        constructor()
        static filterOf(o: any): Internal.IngredientActionFilter;
        copyFrom(filter: Internal.IngredientActionFilter_): void;
        checkFilter(index: number, stack: Internal.ItemStack_): boolean;
        filterIngredient: Internal.Ingredient;
        filterIndex: number;
    }
    type IngredientActionFilter_ = number | Internal.Ingredient_ | {item: Internal.Ingredient_, index: number} | IngredientActionFilter;
}
declare namespace it.unimi.dsi.fastutil.doubles {
    interface DoublePredicate extends Internal.DoublePredicate, Internal.Predicate<number> {
        or(arg0: Internal.DoublePredicate_): this;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        or(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        negate(): Internal.DoublePredicate;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        and(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
        (arg0: number): boolean;
    }
    type DoublePredicate_ = DoublePredicate;
}
