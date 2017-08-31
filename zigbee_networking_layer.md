Title: ZigBee 网络层详解
Date: 2015-10-21 09:36
Modified: 2017-08-21 23:24
Slug: zigbee-networking-layer
Tags: zigbee
Authors: Joey Huang
Summary: ZigBee 网络层详解
Status: draft

# ZigBee 网络层详解

[TOC]

## ZigBee 和 IEEE 802.15.4

ZigBee 和 IEEE 802.15.4 经常被混用，但实际上他们是完全不同的概念。IEEE 802.15.4 是由 [IEEE][1] 组织制定和维护的。它定义了小区域低功耗的无线通信的**物理层 (PHY)** 和**媒体访问层 (MAC)**的规范。IEEE 802.15.4 定义了如下的规范：

* 网络发现机制
* 组网和加入网络的机制
* 改变通信信道的机制
* 在特定信道上检测干扰和噪声的机制
* **需要确认**的，**单跳**的数据包传输方法。使用 CSMA-CA 来控制冲突。
* **不需要确认**的，单跳的数据包广播的方法。

IEEE 802.15.4 没有定义**多跳传输**，**地址分配**，和**应用层互操作**协议。实际上，有一些其他的通信协议也基于 802.15.4 来建立，如 6LoWPAN，Tiny O/S 等。

Zigbee 是建立在 802.15.4 上的最主要的协议之一，它增加了网络层来支持**点对点多跳网状网络**，增加了安全层来处理**网络安全**，还增加了应用层来实现**应用程序互操作**。

![zigbee architecture](http://moodle.utc.fr/file.php/498/SupportWeb/res/zigbee-architecture.png)
*（图片来自网络，侵删）*

* 物理层 (PHY)：负责把数据通过 RF 频谱发送出去；或者接收来自 RF 频谱上的数据。
* 媒体访问层 (MAC)：负责组网；信道共享；可靠的单跳数据传输。

PHY 和 MAC 之上的服务全部由 ZigBee 提供，包括网络层，APS，ZDO 和安全层。ZigBee 提供网状网络，多跳能力，数据传输的可靠性，并且指定应用程序互操作规范。

Zigbee 是异步的通信机制，它使用 MAC 层提供的 CSMA-CA (Carrier-Sense Multiple-Access with collision avoidance) 来避免冲突。

!!! notes "CSMA-CA 原理"
    CSMA-CA 机制是由 MAC 层提供的，用来避免多个通信节点时的冲突。它的工作机制类似开会，当有一个人发言时，其他人在听。当这个人讲话过程中暂停了一段时间，这个时候其他人会试着开始讲话。有时，会导致两个人同时开始讲话，这个时候这两个人都会停下来，然后过一个随机的时间后再试着讲话。需要记住这点，在无线通信领域。**在一定的通信范围内，在指定的信道上的一个指定的时间点里只能有一方在发送信号**。同时需要记住，**802.15.4 是半双工的通信方式，即要么在发送数据，要么在接收数据，不能同时发送和接收**。

另一方面，ZigBee 还对 802.15.4 标准做了一定程度的修改

* 安全性：802.15.4 定义了一种称为 CCM 的安全机制。由于 ZigBee 主要应用在性能较低的芯片上，由于性能方面的原因，ZigBee 没有完全采纳 CCM 安全机制。
* 信标超时时间：信标 (beacon) 是包含节点和网络信息的一个简单的数据包，ZigBee 使用它来发现网络。由于 ZigBee 的网络可能很密集，比如 30 个甚至更多的节点设备在同一个接收范围内，这个时候 802.15.4 规定的信标应答超时时间根本无法满足需求，因为设备太多太密集了，设备根本来不及应答。
* 通信频率：[802.15.4-2003][2] 在 PHY 层提供了 1G Hz 和 2.4 GHz 的通信频率，868 MHz 和 900 MHz 的通信速率被限制在 20 kbps，不超过 40 kbps。这对 ZigBee 来说速率太低了，所以 ZigBee 使用 2.4 GHz 的通信频率，速率可达到 250 kbps。[802.15.4-2006][3] 提出了另外一个优化的 PHY 层，能在 1 GHz 以下达到 250 kbps 的通信速率。由于 1 GHz 以下的频率穿透性比 2.4 GHz 更好。所以未来可能能看到 1 GHz 以下通信频率的 ZigBee 芯片的出现。目前 ZigBee 仍然使用 802.15.4-2003，但已经开始在讨论升级到 802.15.4-2006 。

## 组网及入网

一个 ZigBee 设备只有加入到一个已经存在的网络或组建一个新网络后，才能通信。只有协调器 (ZC - ZigBee Coordinator) 才能组建网络，路由器 (ZR - Router) 和 终端设备 (ZED - End-Device) 可以加入网络。

每个设备节点在生产时都由产商设置一个全球唯一的 64 bit MAC 地址，称为长地址，在加入网络后由协调器分析一个 16 bit 的短地址。在实际网络通讯时使用短地址，以便减少协议负载，增加应用层负载能力。

### 组网

组网由协调器来执行。组网实际上是完成以下两个任务：

* 决定唯一的网络标识，称为 PAN ID
* 在 802.15.4 规定的 16 个信道里选择一个信道来通信

实际上这两个任务都是由运行在协调器上的应用程序决定的。**应用程序决定什么时候来组网，使用哪个信道，使用哪个 PAN ID** 。运行在协调器上的应用程序可以是多种多样的，比如连接到以太网的网关，恒温器甚至是一个灯泡。应用程序可以决定协调器一上电就组网或者等待某个按键按下再开始组网。

**协调器的职责**

* 组网
* 在 802.15.4 上建立通信信道
* 建立网络的 PAN ID 和扩展 PAN ID
* 决定使用哪种协议栈类型 （编译时决定 或 运行时决定）
* 作为网络的安全中心节点
* 作为设备入网的仲裁中心，即是否允许设备入网
* 提供网络通信的路由功能
* 如果树状路由使能，将作为树状路由的根节点

**组网的流程**

![Form Network](./images/zigbee_images-form-network.png)

* 发起组网：组网上由应用层发起的
* 信号强度扫描：ZigBee 会调用 MAC 的功能来扫描信号强度，以便决定使用哪个信道来通信。扫描时，会把 16 个信道 (11–26)全部扫描一遍，每个信道扫描时间大概是 0.5 秒，总共需要花费 8 秒时间。
* 活动网络扫描：由一个信标请求 (Beacon Request) 和多个信标应答组成，用来发现邻近的现有网络。活动网络扫描确保发现邻近的 ZigBee 网络，不使用已经被使用了的 PAN ID 来组网。活动网络扫描也需要足够长的时间来等待网络应答。
* 合适的信道和 PAN ID：什么是合适的信道和 PAN ID ？ ZigBee 协议栈的实现倾向于选择没被占用的通信质量最好的信道。网络标识 PAN ID 的默认值是 0xffff，意思是由 ZigBee 自动选择一个 PAN ID （一个简单的实现是直接递增，直到找到一个没被邻近的网络使用的 PAN ID 为止），应用程序也可以自己设置一个从 0x0000 到 0x3fff 的固定值来作为 PAN ID。**强烈建议不要设置成固定的 PAN ID**，而是让 ZigBee 随机选择一个，避免冲突。另外一个避免冲突的方法是启用 ExtendedPANID，即直接用协调器的 MAC 地址作为 PAN ID。

### 入网

路由器和终端设备会执行入网流程。路由器一般由电源供电，终端设备一般由电池供电，正常时候进入睡眠状态，只在需要的时候唤醒来发送/接收数据，接着继续进入睡眠状态。

**路由器的功能**

* 查找并加入正确的网络
* 在网络中转发广播包
* 参与路由，包括路由发现和路由信息表维护
* 允许其他设备加入网络 （可配置）
* 为睡眠的子设备保存数据包

**终端设备的功能**

* 查找并加入正确的网络
* 向父设备轮询，以便确认在睡眠期间是否有数据包发送给自己
* 当和父设备连接中断时，查找其他父设备来加入网络
* 由应用层控制，在大部分时间进入睡眠状态以便降低功耗

入网的流程就是发现邻近的网络，然后选择一个加入的过程，由入网设备发起。典型地，入网设备发送信标请求 (beacon request) ，相当于大声地叫 “HEY，附近有人吗？” 邻近的协调器或路由器收到信标请求后，会发送应答 “HEY，我在这儿。”

信标应答由协调器或路由器发送，他们会在收到信标请求的信道上发送信标应答，一个信标请求可能会对应多个信标应答。一个信标应答会包含一些网络的基本信息：PAN ID 和扩展 PAN ID；是否允许其他设备入网；是否有空间来给入网设备加入。信标应答没有包含任何应用层的信息。所以，入网设备需要先加入网络，查找对应的应用，如果找不到，就退网，继续偿试加入其他网络。

来看一下典型的信标应答报文

```text
Frame 3 (Length = 24 bytes)
IEEE 802.15.4
    Frame Control: 0x8000
        .... .... .... .000 = Frame Type: Beacon (0x0000)
        .... .... .... 0... = Security Enabled: Disabled
        .... .... ...0 .... = Frame Pending: No more data
        .... .... ..0. .... = Acknowledgement not required
        .... .... .0.. .... = Intra PAN: Not within the PAN
        .... ..00 0... .... = Reserved
        .... 00.. .... .... = Destination Address: not present
        ..00 .... .... .... = Reserved
        10.. .... .... .... = Source Address: 16-bit short address
    Sequence Number: 205
    Source PAN Identifier: 0x0bef
    Source Address: 0x0000
MAC Payload
    Superframe Specification: 0xcfff
        .... .... .... 1111 = Beacon Order (0x000f)
        .... .... 1111 .... = Superframe Order (0x000f)
        .... 1111 .... .... = Final CAP Slot (0x000f)
        ...0 .... .... .... = Battery Life Extension: Disabled
        ..0. .... .... .... = Reserved
        .1.. .... .... .... = PAN Coordinator: yes
        1... .... .... .... = Association Permit: enabled
    GTS Specification: 0x00
    Pending Address Specification: 0x00
Beacon Payload
Protocol ID: ZigBee NWK (0x00)
NWK Layer Information: 0x8421
    .... .... .... 0001 = Stack Profile (0x1)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c211dc051801
```

从这个信标应答可以看到一些信息，ZigBee stack profile 是 0x01，这是一个协调器节点，目前允许其他设备入网，且足够的空间给新设备，它的 PAN ID 是 0x0bef，扩展 PAN ID 是 0x0050c211dc051801。

* Frame Control: 0x8000: MAC 层的 Frame Control 的值是 0x8000，这是一个信标数据包。**Security Enabled 永远是 0，这是因为 ZigBee 使用网络层的安全机制，而不使用 MAC 层的安全机制**。
* Source Address: 0x0000 表示这是一个协调器，因为协调器的短地址永远是 0x0000 ，如果是其他的值代表这是路由器，终端设备不会发送信标应答。
* Association Permit: enabled: 表示这个网络允许其他设备加入
* Beacon Order (0x000f)：ZigBee 是个异步网络，即不支持限时送达功能。ZigBee 是个由 CSMA-CA 机制来规避冲突的异步网络。
* End Device Capacity: True：是否有空间容纳新设备入网。**针对 stack profile 01 的设备，一个节点允许其他设备作为子节点加入网络的数量限制是 20，其中 6 个路由器，14 个终端设备**。

!!! note "ZigBee stack profile"
    ZigBee 使用 stack profile 来区分不同的协议版本号。Stack Profile 01 表示 ZigBee 2006, 2007 版本的协议。Stack Profile 02 表示 ZigBee Pro 的协议版本号。关于两个区别，详见本文最后的详细描述。另外需要注意和 Applicatioin Profile 的区别，Application Profile 是 ZigBee 联盟定义的应用层协议。比如智能家居分配的 ZigBee Profile 为 0x0104。

ZR 和 ZED 入网时，实际上是通过选择一个节点作为其父节点来完成的。入网的设备称为子节点，被关联的设备称为父节点。ZC 和 ZR 可以作为父节点，ZED 只能作为子节点。ZR 可以作为子节点也可以作为父节点，要根据网络拓扑结构来决定。需要特别注意，**父子节点和网状网络没有任何关系，任何两个路由器都可以在信号覆盖范围内进行点对点直接通信**。如果一个路由器的父节点或子节点离开网络，在网络密度足够的情况下，对网络的路由和通信没有任何影响。ZR 不会在不同的网络间路由，只会在相同的 PAN ID 和信道下执行路由功能。

针对 ZED 来说，父子节点关系就比较特殊。ZED 可以和网络中的其他设备通信，但只能通过其父节点，即父节点是 ZED 可以**直接通信**的唯一节点。当 ZED 要发送数据时，其父节点是唯一的**下一跳 (next hop) 节点**。所以，当 ZED 和其父节点的连接中断时，必须查找另外的 ZR 或 ZC 作为其新的父节点，以便能在网络中进行通信。这个过程称为重新入网 (rejoin)。

**入网流程**

![Join Network](./images/zigbee_images-join-network.png)

* 活动网络扫描：这是为了发现邻近可用的 ZigBee 网络。通过往每个信道发送信标请求来发起活动网络扫描，然后等待信标应答。每个信道默认是 0.5 秒的等待应答时间，这个时间也可以由应用层设置。当全部应答被收集起来后，由应用层通过选择 PAN ID 和信道，来选择一个网络加入。
* 鉴权流程：当活动网络扫描完成，并且选择了一个合适的网络来加入。接下来就开始鉴权流程。需要注意，当鉴权开始时，入网节点已经有了网络地址（至少是临时地址），鉴权只发生在启用了安全的网络中。鉴权给安全中心（一般是协调器兼任）允许或拒绝加入网络的权限。当鉴权没有成功时，父节点会告诉入网设备离开网络，并且收回分配给入网设备的地址。一个伪装的节点可能会有网络地址，但没有收到安全中心发送的密钥，所以无法在网络中通信。

在 ZigBee Stack Profile 01 里，设备节点都**尽量加入到靠近树根节点** (Device Depth 的值尽量小)，这样在树形结构通信的时候，可以减少数据包中转的次数。

ZigBee 网络建立后，怎么样阻止或允许其他设备加入呢？一个是用安全中心 (Trust Center) 策略，安全中心可以简单地阻止其他新节点加入网络。另外一个方法是使用“允许加入”时间窗。是否允许加入网络的标志位只影响 ZC 和 ZR 。网络层通过原语 NLME-PERMIT-JOINING.request 设置是否允许设备加入的标志位。ZDP 提供了在网络中发送这个原语的机制，其参数 0xff 表示打开允许设备入网的标志，0x00 表示关闭允许设备入网标志，1 - 254 之间的值表示在指定秒数内允许设备加入。

```
Seq     Time        SrcPAN      MACSrc      MACDst      Packet Type
                    DstPAN      MACDst (if 2 line)
-------------------------------------------------------------------------
1                               0xffff                  IEEE 802.15.4 Beacon Request
2       +02.780                 0xffff                  IEEE 802.15.4 Beacon Request
3       +00.003     0x0f00      0x0000                  IEEE 802.15.4 Beacon: AP: 0
4       +02.022     0xffff      00:50:c2:37:b0:04:00:02
                    0x0f00      0x0000                  Association Request
5       +00.001                                         Acknowledgment
6       +00.494                 00:50:c2:37:b0:04:00:02
                    0x0f00      0x0000                  Data Request
7       +00.001                                         Acknowledgment
8       +00.003                 00:50:c2:37:b0:04:00:01
                    0x0f00      00:50:c2:37:b0:04:00:02 Association Response
9       +00.001                                         Acknowledgment
10      +00.593                 0xffff                  IEEE 802.15.4 Beacon Request
11      +00.003     0x0f00      0x0001                  IEEE 802.15.4 Beacon: AP: 0
12      +00.006     0x0f00      0x0000                  IEEE 802.15.4 Beacon: AP: 0
13      +02.014     0xffff      00:50:c2:37:b0:04:00:03
                    0x0f00      0x0000                  Association Request
14      +00.001                                         Acknowledgment
15      +00.496                 00:50:c2:37:b0:04:00:03
                    0x0f00      0x0000                  Data Request
16      +00.001                                         Acknowledgment
17      +00.003                 00:50:c2:37:b0:04:00:01
                    0x0f00      00:50:c2:37:b0:04:00:03 Association Response
18      +00.001                                         Acknowledgment
```

这个数据包里有三个设备，ZC 的 MAC 地址是 00:50:c2:37:b0:04:00:01；ZR 的 MAC 地址是 00:50:c2:37:b0:04:00:02；ZED 的 MAC地址是 00:50:c2:37:b0:04:00:03。#1，#2 号数据包为 ZR 入网请求发出来的信标请求。#3 号数据包为 ZC 发出的信标应答，ZR 就申请成为 ZC 的子节点来加入网络。#4 号数据包就是 ZR 发送给 ZC 的关联请求。#8 号数据包为 ZC 发送给 ZR 的关联应答。接着，#10 号数据包是 ZED 发起的入网流程的信标请求，这个时候收到了两个信标应答，分别是 #11 和 #12 号数据包，他们的网络短地址分别是 0x0001 和 0x0000 即网络中的 ZC 和刚刚入网的 ZR 。#13 号数据包为 ZED 发送的关联请求，这里他申请成为 ZC 的子节点。这样就组成了一个三个节点的 ZigBee 网络。

当入网成功后，只要知道对方的网络短地址，网络中的节点可以直接相互通信，不需要绑定之类的额外的机制。当然，数据可以发送，应用层能不能看到还需要看双方的 Application Profile 是否一致。**如果需要自定义 Application Profile 时 (比如 ZigBee 联盟没有定义的应用场景)，一个简单可行的方法是网络中所有节点个有相同的端点 (endpoint)，相每个端点都有相同的 Profile**。

### 重新入网

重新入网是指一个 ZED 已经加入过网络，ZED 节点已经有了 PAN ID，扩展 PAN ID，安全密钥，和网络短地址。但由于以下的原因需要重新入网：

* ZED 和其父节点的通讯链路丢失了
* ZED 设备掉电重启

在实际网络通讯时，ZED 和他的父节点直接通讯。当 ZED 发现父节点没有响应时，ZED 必须查找一个新的节点当作父节点。**ZED 自己决定什么时候判定自己成为孤独节点**，而不是其父设备去判断。**ZigBee 协议本身没有规定 ZED 要轮询几次才能确认自己成为孤儿节点，这个机制由应用程序决定。**

在 Freescale 平台，有个全局属性 gMaxFailureCounter_c 可以设置，默认是 2 。当 ZED 发送数据连续失败的次数到达设置的值时， ZED 就会发起重新入网流程。

重新入网流程由 ZED 发起信标请求开始，重新入网和潜在的父节点是否允许入网标记无关，只和潜在的父节点的容纳能力有关，即使潜在的父设备关闭了入网许可，只要它有空间容纳子节点，重新入网依然可以成功。当 ZED 收到信标应答后，它选择一个和自己有相同 PAN ID 的网络入网，并获得新的网络短地址。最后 ZED 发布一条通知，告诉网络它已经移动了，这样网络中的其他节点可以更新路由表。同时保留设备绑定信息。

比如原来网络中有三个设备，一个 ZC，ZC 下有两个子节点，一个 ZR 同时也是个开关，另外一个是 ZED 同时也是灯。ZR 开关和 ZED 灯绑定起来了，即通过 ZR 的开关可以控制 ZED 的灯。某个时间点，ZED 和 ZC 连接中断了，这个时候 ZED 发起重新入网流程，最终变成 ZR 开关的子节点。最后 ZED 发布通知，告诉网络它已经移动了，并且附有新的网络短地址。这样 ZR 和 ZED 之间的绑定信息将会被保留下来，即 ZR 开关依然可以控制 ZED 灯设备。

```
Seq     Time    SrcPAN      MACSrc      MACDst      Packet Type
                DstPAN      MACDst (if 2 line)
------------------------------------------------------------------------
STEP 4
4       +02.022 0xffff      00:50:c2:37:b0:04:00:02
                0x0f00      0x0000                  IEEE:Association Request
13      +02.014 0xffff      00:50:c2:37:b0:04:00:03
                0x0f00      0x0000                  IEEE:Association Request
STEP 5
25      +05.892 0x0f00      0x0001      0x0000      ZDP:EndDeviceBindReq
29      +00.766 0x0f00      0x796f      0x0f00      ZDP:EndDeviceBindReq
35      +00.094 0x0f00      0x0000      0x0001      ZDP:BindReq
STEP 7
67      +03.989 0x0f00      0x0001      0x0000      HA:On/off:Toggle
71      +00.004 0x0f00      0x0000      0x796f      HA:On/off:Toggle
STEP 8
119     +03.003                         0xffff      IEEE:Beacon Request
120     +00.002 0x0f00      0x0001                  IEEE:Beacon: AP: 0
125     +01.006 0x0f00      0x796f      0x0001      NWK:Rejoin Request
129     +00.003 0x0f00      0x0001      0x796f      NWK:Rejoin Response
STEP 9
131     +00.005 0x0f00      0x1430      0xffff      ZDP:EndDeviceAnnce (0x796f)
150     +05.004 0x0f00      0x0001      0x1430      HA:On/off:Toggle
```

这是一个重新入网的数据包。STEP 4： 两个设备入网时都成了 ZC 的子节点。STEP 5： ZC 和 ZED 绑定起来。STEP 7： ZC 控制命令来控制 ZED ，注意这里的数据传输经过了 ZC，因为 ZED 只能和他的父节点 ZC 直接通信，ZR 要发数据时只能发给 ZC，由 ZC 再发送给 ZED。STEP 8：ZED 发起重新入网流程，#119 为重新入网的信标请求，#120 ZR (nwkAddr: 0x0001) 发回一个信标应答，这样 ZED 请求作为 ZR 子节点重新入网。STEP 9：ZR 发送命令控制 ZED 灯光，这个时候命令就没有经过 ZC 转发了。

**无痕重新入网**

另外一种重新入网是无痕的 (silent rejoin)。即在重新入网的过程中网络中没有任何的数据包交互。比如一幢大楼有 1000 个节点，大楼突然断电了，过了一会儿供电恢复后所有的路由器重新开始，直接从 NVM 里读取之前的配置信息（PAN ID，扩展 PAN ID，网络短地址，安全密钥），启动完成后就装作什么都没发生。因为如果这个时候需要发数据包入网或重新入网的话，会导致网络拥塞。

**巧用重新入网**

注意到有一个细节，重新入网和网关或协调器是否允许设备入网无关，即不管 ZC/ZR 是否允许入网，只要他有空间，就允许其他设备以重新入网的形式加入网络。利用这个机制，可以通过编程的方式把网络的 PAN ID，扩展 PAN ID，安全密钥等信息写入等入网设备。然后设备上电后以重新入网的流程来申请加入网络。

这一机制有时很有用。比如在智能家居 (Home Automation) 领域，设备入网时，安全中心在最后一步需要把密钥发送给新入网的设备。这暴露了一个截获密钥的时间窗口。由于在设备入网的次数较少，且时间也很短，所以在正常情况下这种系统风险的时间窗口很短，也较少出现，还是可以接受的。但如果对安全性要求非常高。那么就可以使用编程的方式把 PAN ID，扩展 PAN ID，安全密钥等信息写入设备，然后设备发起重新入网流程来入网，这样密钥就不会在网络中传输，确保了更高的安全性。

## 地址分配

ZigBee 使用两个地址来进行通信时寻址，一个是 64 bit 长地址 (IEEE or MAC Address)，另外一个是 16 bit 短地址 (NwkAddr)。长地址由设备生产商写入设备，并且在设备的生命周期内不会改变。长地址是全球唯一的。实际上，64 bit 的地址空间足够让地球上每平方米拥有 123,853 个设备。长地址由 IEEE 协会控制，设备生产商可以向 http://www.ieee.org 购买。长地址由两部分组成，前面 24 bit 是产商码 (OUI - Organizational Unique Identifier) ，后面 40 bit 由设备生产商自己管理。

短地址由设备入网时由协调器分配，设备离开网络时，协调器会回收这个地址供下个入网设备使用。本节讨论的地址分配将讨论短地址的分配流程。

!!! note "为什么需要两套地址"
    在 ZigBee 通信中，NWK 层和 MAC 层的包头都需要包含源地址和目的地址。即一个数据包需要有 4 个地址。如果用长地址来寻址，则总共需要 32 个字节来保存地址。而如果用短地址，只需要 8 个字节。这将节省 24 个字节给应用层，提高协议的数据装载量。
    为什么 NWK 层和 MAC 层都需要有源地址和目的地址呢？这跟路由有关。假设有个数据包要经过多跳从 A 节点发送到 Z 节点，NWK 层的源地址和目的地址在节点间传输时保持不变，分别是 A 的地址和 Z 的地址。而 MAC 层的源地址和目的地址将随着数据包在不同节点间发送而改变，比如 A 发到 B 时，MAC 源地址是 A 的地址，目的地址是 B 的地址；B 跳到 C 时，源地址是 B ，目的地址是 C。这样一直到 Y 跳到 Z 时，源地址是 Y ，目的地址是 Z。

ZigBee 有两套地址分配方案：

* CSkip : 用在 stack profile 0x01，即 ZigBee。地址由父子节点关系来分配，最终网络将变成一个**对称树**。其中有一个关键指标用来标明**节点深度**，即从根节点 (ZC) 发送一个数据包给子节点时要经过几跳才能送达。
* Stochastic ： 用在 stack profile 0x02，即 ZigBee Pro。一个节点入网时由节点选择自己的短地址，然后通过广播发送一个公告。以便检查是否有地址冲突，如果这个地址已经被占用，则入网节点选择另外一个节点，继续广播公告，直到选择到一个不冲突的地址为止。

在 CSkip 算法里，协调器 ZC 被定义为根节点，其短地址为 0x0000，任何一个入网设备将会收到一个其父节点的关联应答 (Associate Response)，这个应答包里就包含了分配给入网节点的短地址。

```
IEEE 802.15.4
    Frame Control: 0xcc63
    Sequence Number: 53
    Destination PAN Identifier: 0x0bef
    Destination Address: 0x0050c2047800fc12
    Source Address: 0x0050c211dc051801
    MAC Payload
        Command Frame Identifier = Association Response: (0x02)
            Short Address: 0x0001
            Association Status: Association Successful (0x00)
```

这个数据包就是关联应答数据包，其分配给新入网子设备的短地址是 0x0001，同时留意一下源地址和目的地址是 64 bit MAC 地址，这是因为短地址还没分配，所以这个通信必须用长地址。一旦短地址分配成功后，就可以使用短地址了。

CSkip 使用三个参数来决定地址分配：

* maxDepth: 最大深度。协调器是树根节点，其深度为 0，协调器的子节点的深度为 1，协调器的子节点的子节点的深度为 2。依此类推。
* maxChildren: 一个父节点最多可容纳的子节点个数，只有 ZC 和 ZR 可以拥有子节点。子节点可以是 ZR 或 ZED。
* maxRouters: 一个父节点最多可容纳的路由器子节点个数。

ZigBee stack profile 0x01 使用 **maxDepth=5, maxChildren=20, maxRouters=6** 这组固定值。有了这些值，就可以从数学上计算出新入网设备的短地址，也可以在这些节点之间路由 (源地址，目的地址，下一跳地址)。

!!! note "理解 CSkip"
    针对 stack profile 0x01 的 CSkip 参数。depth = 0 的节点只有 1 个，即 ZC。depth = 1 的节点最多有 20 个，其中最多只能有 6 个路由器。depth = 2 的节点最多只能有 120 (6 x 20) 个，其中最多只能有 36 (6 x 6) 个路由器。depth = 3 的节点最多只能有 720 (36 x 20) 个，其中最多只能有 216 (36 x 6) 个路由器。depth = 4 的节点最多只能有 4,320 (216 x 20) 个，其中最多只能有 1,296 (216 x 6) 个路由器。depth = 5 是最后一层，其节点最多只能有 25,920 (1296 x 20) 个，这一层再放路由器已经没有意义了，因为这一层的路由器不能有子节点。这样算下来 stack profle 01 的 CSkip 参数限制的网络规模为 31,101 (1 + 20 + 120 + 720 + 4320 + 25920) 个节点。这个数字小于 16 bit 短地址可用的总地址数。

根据 stack profile 0x01 的 CSkip 参数，可以算出每层节点的 CSkip 常数：

Cskip Level     | Skip Number
----------------|-------------
Cskip level 0   | 0x143d
Cskip level 1   | 0x035d
Cskip level 2   | 0x008d
Cskip level 3   | 0x0015
Cskip level 4   | 0x0001
Cskip level 5   | 0x0000

给定这些常数，第一个以 ZC 作为父节点加入网络的 ZR 将获得 0x0001 的 NwkAddr。第二个以 ZC 作为父节点加入网络的 ZR 将获得 0x143e (0x0001 + 0x143d) 的 NwkAddr。跳过的 0x143d 将作为其前面那个路由器下所有子设备的地址空间。第一个以 ZC 作为父节点加入网络的 ZED 的地址将接在所有的路由器之后，它的地址由下面的公式算出：

1 (ZC take 1 address) + 6 (maxRouter) * 0x143d (cstrip at level 0) = 0x796f

CSkip 算法没有在 ZigBee Pro (stack profile 02) 上使用，主要是因为 CSkip 在网络深度 (maxDepth) 方面的扩展能力太弱了。假如我们想把网络深度从 5 层扩展到 6 层，那么参数是 maxDepth=6, maxChildren=20, maxRouters=6，算出来的网络总节点数将是 186,621 ，这个数值将超出 16 bit 短地址能表达的范围。

虽然**入网及地址分配时以树状为基础，但 ZigBee 其实是网状网络 (mesh network)，即路由时是网状网络路由优先**，附加树状网络路由辅助的策略。

Stochastic 地址分配策略是 ZigBee Pro (stack profile 02) 上引入并且使用的。这里就不展开介绍。

## 数据路由

ZigBee 使用多种方式来对数据包进行路由

* 广播：数据包从一个节点到多个节点。广播机制可以让一次请求即可把数据包发送给多个节点，广播消息是没有确认 (acknowledged) 的，即**广播发送者不知道接收者是否收一了广播数据**。另外，广播消息资源消耗比较多，实际应用时尽量少用广播机制。
* 网状路由：单播发送，数据包从一个节点到另外一个节点。路由信息建立后，网状路由是非常高效的路由协议 (时效性，带宽，内存占用等)。数据包通过网状路由发送是经过确认的，即**发送者知道接收者是否收到数据包**。网状网络是分布式的，这样就可以大幅减少空中包的数量。网状路由最多可以传输 30 跳，即经过 30 个节点来传输数据。
* 树状路由：单播发送，数据包从一个节点到另外一个节点，只在 stack profile 01 上使用。树状路由也是确认的路由机制。树状网络的带宽性能和网状网络相当，但需要更多的内存。**树状路由最大的缺点是，当父子节点之间的连接中断后，没有恢复机制。**所以 ZigBee 优先使用网状路由。
* 源路由：单播发送，数据包从一个节点到另外一个节点，只在 stack profile 02 上使用。**源路由主要用在一个中心节点需要和成千上万个节点直接通信时。相比网状路由，它可以节省路由表的空间**。它最大的缺点是只能支持 5 跳。

各个路由方法的对比表如下：

Routing Method          | Broadcast | Mesh      | Tree      | Source Route
------------------------|-----------|-----------|-----------|--------------
Multi-hop               | Up to 30  | Up to 30  | Up to 10  | Up to 5 hops
Multiple destinations   | Yes       | No        | No        | No
One-to-one              | No        | Yes       | Yes       | Yes
Bandwidth efficient     | No        | Yes       | Yes       | Yes
Payload efficient       | Yes       | Yes       | Yes       | No
Acknowledged            | No        | Yes       | Yes       | Yes

另外一个路由方法在 ZigBee 规范里没有提及，但很多厂商都支持的，称为**邻近路由**。如果一个节点在邻近 (在无线传输距离内)，发送节点知道目的节点就在邻近，那么数据久将直接发送给邻近的目的节点。这是一种很高效的路由方法。**只有当邻近节点是路由器或者子节点终端设备时才起作用。**如果邻近的目的节点是另外一个路由器的子节点，那么必须通过目的节点的路由器进行路由。

这里只是对路由做了简单的介绍，下面将对每种路由方法做详细的介绍。

### 广播

![broadcast](http://masters.donntu.org/2010/fknt/zub/diss/broadcast.gif)

*图片来自网络，侵删*

这是广播数据传输的示意图。广播的传输象水波传输类似，当一个节点发送一个广播时，广播消息会被**邻近** (在无线传输距离内) 的**路由器**转发。

广播消息有一个非常重要的数据项称为**半径 (radius)**，取值为 0x01 - 0xff 。当一个路由器收到广播包时，会获得广播包的 radius 字段，并减去 1，如果这个时候 radius 还大于 0，则会用新的 radius 值转发这个广播数据包。

每个节点都维护一个**广播传输表**，简称 **BTT (Broadcast Transaction Table)**。BBT 不但被用来追踪节点转发的广播包，还用来避免应用层收到两次重复的广播包。当节点收到广播包时，先检查 radius >= 0，条件满足后，判断这个广播是否已经在 BTT 里，如果已经存在，则直接丢弃，如果不在，则加入 BBT，同时把广播消息转交给应用层处理。

**BBT 默认大小为 9，广播在网络中的超时时间也是 9 秒。这意味着网络最多只能支撑 1 秒一个广播。**如果 BBT 满了，新收到的广播将被丢弃。

另外一个特殊的广播半径数值为 0，如果广播半径为 0 表示在整个 ZigBee 网络中广播。这是 ZigBee 协议规定的，但其实这个数值在协议内部一致性上有些问题，因为协议很多地方都使用 0xff 作为特殊值。比如入网时间为 0xff 表示永远允许入网。

**为什么不推荐使用广播**

路由发现协议使用广播。个别 ZDP 命令也使用广播传输，如当设备入网时 ZDP-Device_annce 命令将被广播发送给全网节点。这意味着节点入网时，可以每隔 2 秒重试一次。如果一下子要把 100 个节点加进网络，则可能需要多次重试。因为新设备入网时发送的广播可能会导致网络通信异常。

如果不断地有路由发现在执行，此时网络中将“充满”广播，路由发现协议数据包将可能被丢弃，最终导致路由发现失败。应用层将知道路由发现失败了，此时要么放弃路由发现，要么延时几秒后重试。

**广播示例**

```
    Time        MACSrc  MACDst  NWKSrc  NWK Seq     R   NWKDst  Packet Type
---------------------------------------------------------------------------------------
31  +00.110     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
32  +00.022     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
33  +00.049     0x0001  0xffff  0x143e  12          3   0xffff  ZDP:EndDeviceAnnce
34  +00.090     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
35  +00.102     0x143e  0xffff  0x143e  12          5   0xffff  ZDP:EndDeviceAnnce
36  +00.030     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
37  +00.150     0x0001  0xffff  0x143e  12          3   0xffff  ZDP:EndDeviceAnnce
38  +00.013     0x0000  0xffff  0x143e  12          4   0xffff  ZDP:EndDeviceAnnce
```

几个说明：

* NWKSrc 和 NWK Seq 唯一地标识了一个广播包
* MACSrc 在每次广播被转发的时候改变了，从这个字段可以看到哪些设备在转发广播包。转发过程中，NWKSrc 和 NWK Seq 保持不变
* R 表示广播包的半径 radius 。每转发一次其值递减 1
* 从 Time 可以看到，每个转发设备都会随机延时一小段时间再转发广播包，这个时间称为 jitter。由此可见**广播的传输会比单播慢**。一般情况下，广播包传输到 10 跳所需要的时间大概是 1000 ms，而 10 跳的单播包只需要 50-100 ms。
* 只有路由器 (ZR and ZC) 会转发广播包，ZED 会收到广播包，但不会转发。ZED 也不会直接发起广播，它会用单播发送给他的父节点，由父节点代替 ZED 来发起广播。

**广播模式**

有三种广播模式：

* 0xffff: 广播给网络中的所有节点，包括睡眠的 ZED 节点
* 0xfffd: 广播给网络中所有非睡眠节点
* 0xfffc: 广播给网络中所有的路由器

这三种广播广播模式在 ZDP 和 APS 层命令中使用，应用层也可以直接设置成某个模式来直接使用。

当把广播的半径 radius 设置为 1 时，数据包只在广播节点的所有邻近节点之间传输。这是一个很有用的机制。

### 网状路由

网状路由是 ZigBee 通信协议的核心内容。网状路由是简单但强大的概念。网络中两个节点之间的路由将被主动发现，它可以跨越最多
 30 个中间节点。如果路由中间某个节点出了问题，造成路由中断，那么新的路由将被主动发现。

本节内容将详细描述路由表，路由发现过程，路由错误和路由维护。

**网状路由的特点**

* 使用 AODV (Advanced Ad-hoc On-Demand Distance Vectoring) 作为路由算法，这是个公开的著名的路由算法。ZigBee 对算法做了改进，以适应低内存的设备要求 (8 bit cpu, which only have 2K - 4K RAM)。
* 所有的路由是端对端的。网络中的所有节点都可以发现路由，网络中的所有路由器都可能是潜在的路由。这一过程被称为**路由发现**。在路由发现的过程中，ZigBee 保存了一个**路由发现表** (注意和**路由表**的区别) 用来找到**时间最高效**的路由。
* 路由是分布式的。路由中的每个节点都会在其**路由表**里保存一个**到达下一跳**的路由信息。
* 路由是单向的。针对双向通信，必须有相应的独立的路由发现过程。
* 路由表里的路由信息 (即下一跳地址) 将持续使用，直到路由失败为止。
* 路由失败将会被通知给数据包发送节点，这样发送节点可以发起新的路由发现过程。

**为什么 ZigBee 将网状路由作为其首选的核心路由协议？**

转发和广播的带宽成本太高，因为所有的邻近节点都会转发数据包，所以节点在转发之前，需要延时一个随机的时间，以避免冲突。而网状路由只需要路由上的节点转发数据包即可。这样节省了时间也节省了带宽。另外，网状路由还是**逐跳确认**的，而转发和广播不是，这样提高了网络通信的可靠性和带宽，因为不需要对已经确认的的消息进行转发。

源站路由需要事先配置 (比如 TCP/IP) ，某个人需要事选知道网络的下一跳，然后事先配置好网络。这样增加了网络配置成本。而使用网状路由，不需要事先配置，节点设备可以随意放置。当然，在 ZigBee Pro 里也提供了源站路由的功能。源站路由空中包开支比较大，**802.15.4 PHY 层只提供 127 字节的包大小**，扣除 ZigBee 协议的负载，实际提供给应用层的只有大概 100 字节。当使用源站路由时，可提供给应用层的就只有大概 80 字节，甚至 60 字节。也正是因为这个原因，ZigBee Pro 提供的源站路由最多只支持 5 跳，因为跳数越多，能提供给应用层的数据负载空间越小。

#### 路由发现

路由发现由某个节点通过广播发起。在网络中，每个邻近节点的通信链路成本会在 PHY 层被自动测量并且记录起来，称为**路径成本**。路径成本在 1 - 7 之间，数字越大说明通信质量越差。在路由发现过程中，每条路由都将累加其到达目的节点的每一跳的路径成本。ZigBee 选择路径成本最低的那条路由作为最终路由。需要注意的是，**路径成本最低并不等同于跳数最少**。

路由发现的目的节点会等待一定的时间来判断哪个路由的路径成本最低。因为路径成本最低的路由不一定会第一个到达，这是因为广播传输在每个节点都会有个随机的延时。当路由发现的目的节点选择了一条路径成本最低的路由后，它会向发起路由发现的节点发送一个**单播的路由应答**。网络中的在这条路由上的所有中间节点按照反向顺序转发这条路由应答，并且更新自己的**路由表**信息。而其他的节点在**路由发现表**中保存了这条路由发现请求几秒的时间，超过时间限制后，将从路由发现表中清除掉。

路由发现协议只能在**射频对称**的网络中起作用。比如一个节点发射功率很大，但接收灵敏度很小，这样其邻近节点能接收到这个节点的信号，而当邻近节点想发送数据给这个节点时，这个节点却收不到。所以，在硬件设计层面，要么确保所有的节点都配置了 PA，要么确保配置了 PA 的节点同时也配置了同等灵敏度的 LNA (Low-Noise Amplifier)。

当路由建立起来后，所有从源节点到目的节点的数据包将沿着这条路由来发送。此时即使这条路由的路径成本不是最低的了，只要数据沿着这条路由能送达，就不会重新发起路由发现过程。除非这条路由不可用了，数据包无法送达，这个时候源节点才会再发起一次路由发现过程。应用层可以手动发起路由发现过程，这样确保要传送的某个数据包沿着路径成本最低的路由传送。但需要注意，这种行为尽量少用，因为路由发现过程用了广播，频繁使用可能导致网络拥塞。另外，路由发现过程可能持续 1 - 2 秒，时间成本也比较高。

![route discovery](http://www.rfwireless-world.com/images/zigbee_network.jpg)

*图片来自网络，侵删*

上图是一个典型的 ZigBee 网络，可以在上面模拟路由发现过程。也可以演示为什么设备密度大或功率灵敏度高的网络通信速度较快。

#### 路由表

网络中的每个路由器都保存一份路由表，路由表里包含**最终地址；下一步地址；是否有效的标志位**。典型的路由器的路由表大小大概是 6 - 10 个记录。一般情况下，这个路由表的大小能满足大多数的网络需求，因为路由器一般只跟邻近的节点以及协调器进行通信。

另外一个需要注意的信息是 ZED 不参与路由发现过程，也没有路由表。如果某个节点要查找到达 ZED 的路由，这个 ZED 的父节点会以这个 ZED 的身份来发送路由发现的应答。ZED 只接收来自其父节点的数据包，要发送数据包时，直接发送给其父节点。

正是由于 ZED 的这个特性，所以 ZC/ZR 在维护自己的路由表时，需要小心地对待其子设备列表。比如，**ZC/ZR 如果发现其 ZED 子设备超过一段时间没有向其 POLL 数据，那么就认为这个子设备已经变成别人的子设备了，需要从自己的路由表里清除掉**，以避免 ZC/ZR 把一个已经换了父设备的子设备依然当成自己的子设备。这样会导致其数据无法发送给子设备。原因是，未及时清除子设备列表的 ZC/ZR 会误以为那个 ZED 还是自己的子设备，所以不会把数据发送到网络去发现新路由，而是直接等着其子设备醒来后来 POLL 数据，但实际上这个 ZED 子设备已经是别人的子设备了。

**当路由表满了之后会发生什么？**

ZigBee 协议没有明确地规定路由表的维护策略，这一策略一般由芯片厂商实现。有些使用 LRU 算法，即最近使用最少的会被删除。有些直接不处理，而是让应用层去处理。

在一般工程实践过程中，路由发现只在设备安装调试的过程中发生一次，之后就一直沿用这个路由。由于某些特殊原因，比如移动了家具，或某些设备断电了，导致某个路由不可用了，才会再发起路由发现过程。

#### 一个数据包实例

抓出来的数据包的网络拓扑结果如下图

![zigbee route discovery](./images/zigbee_route_discovery.png)

其中 0x0351 是个醒着的 ZED 设备，它是一个开关。0x796f 是协调器下面的一个子设备，它是一个睡眠设备，是一个电灯。每个设备的短地址都标在了其右侧。

```
Seq     Time            MACSrc  DstPAN  MACDst  MACSeq  NwkSrc  NwkDst  NwkSeq  Packet Type
---------------------------------------------------------------------------------------------------------------------
STEP 1: route discover from 0x0351 to 0x0000
56      + 00:00:00.315  0x0351  0x0f00  0x0002  151     0x0351  0x0000  181     Zigbee APS Data ZDP:EndDeviceBindReq
57      + 00:00:00.002                          151                             IEEE 802.15.4 Acknowledgment
58      + 00:00:00.006  0x0002  0x0f00  0xffff  69      0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request
59      + 00:00:00.069  0x0001  0x0f00  0xffff  48      0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request
60      + 00:00:00.005  0x0000  0x0f00  0x0001  100     0x0000  0x0001  133     Zigbee NWK NWK Command: Route Reply
61      + 00:00:00.001                          100                             IEEE 802.15.4 Acknowledgment
62      + 00:00:00.003  0x0001  0x0f00  0x0002  49      0x0001  0x0002  45      Zigbee NWK NWK Command: Route Reply
63      + 00:00:00.001                          49                              IEEE 802.15.4 Acknowledgment
64      + 00:00:00.005  0x0002  0x0f00  0x0001  70      0x0351  0x0000  114     Zigbee APS Data ZDP:EndDeviceBindReq
65      + 00:00:00.002                          70                              IEEE 802.15.4 Acknowledgment
66      + 00:00:00.004  0x0001  0x0f00  0x0000  50      0x0351  0x0000  46      Zigbee APS Data ZDP:EndDeviceBindReq
67      + 00:00:00.002                          50                              IEEE 802.15.4 Acknowledgment
68      + 00:00:00.013  0x0000  0x0f00  0xffff  101     0x0002  0xffc   113     Zigbee NWK NWK Command: Route Request
69      + 00:00:00.030  0x143e  0x0f00  0xffff  203     0x0002  0xfffc  113     Zigbee NWK NWK Command: Route Request

STEP 2: route discover from 0x0351 to 0x796f
146     + 00:00:01.248  0x0351  0x0f00  0x0002  155     0x0351  0x796f  185     Zigbee APS Data HA:On/off:Toggle
147     + 00:00:00.001                          155                             IEEE 802.15.4 Acknowledgment
148     + 00:00:00.005  0x0002  0x0f00  0xffff  80      0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
149     + 00:00:00.036  0x143e  0x0f00  0xffff  211     0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
150     + 00:00:00.006  0x0000  0x0f00  0x143e  109     0x0000  0x143e  140     Zigbee NWK NWK Command: Route Reply
151     + 00:00:00.001                          109                             IEEE 802.15.4 Acknowledgment
152     + 00:00:00.004  0x143e  0x0f00  0x0002  212     0x143e  0x0002  206     Zigbee NWK NWK Command: Route Reply
153     + 00:00:00.001                          212                             IEEE 802.15.4 Acknowledgment
154     + 00:00:00.003  0x0002  0x0f00  0x143e  81      0x0351  0x796f  123     Zigbee APS Data HA:On/off:Toggle
155     + 00:00:00.001                          81                              IEEE 802.15.4 Acknowledgment
156     + 00:00:00.005  0x143e  0x0f00  0x0000  213     0x0351  0x796f  207     Zigbee APS Data HA:On/off:Toggle
157     + 00:00:00.001                          213                             IEEE 802.15.4 Acknowledgment
158     + 00:00:00.010  0x0001  0x0f00  0xffff  57      0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
159     + 00:00:00.005  0x0000  0x0f00  0xffff  111     0x0002  0xfffc  122     Zigbee NWK NWK Command: Route Request
160     + 00:00:01.742  0x796f  0x0f00  0x0000  54                              IEEE 802.15.4 Command: Data Request
161     + 00:00:00.001                          54                              IEEE 802.15.4 Acknowledgment
162     + 00:00:00.004  0x0000  0x0f00  0x796f  110     0x0351  0x796f  141     Zigbee APS Data HA:On/off:Toggle

STEP 3: power off router 0x143e, route discover again from 0x0351 to 0x796f
243     + 00:00:01.248  0x0351  0x0f00  0x0002  159     0x0351  0x796f  189     Zigbee APS Data HA:On/off:Toggle
244     + 00:00:00.001                          159                             IEEE 802.15.4 Acknowledgment
245     + 00:00:00.003  0x0002  0x0f00  0x143e  85      0x0351  0x796f  127     Zigbee APS Data HA:On/off:Toggle
246     + 00:00:00.005  0x0002  0x0f00  0xffff  86      0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
247     + 00:00:00.039  0x0001  0x0f00  0xffff  58      0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
248     + 00:00:00.005  0x0000  0x0f00  0x0001  114     0x0000  0x0001  144     Zigbee NWK NWK Command: Route Reply
249     + 00:00:00.001                          114                             IEEE 802.15.4 Acknowledgment
250     + 00:00:00.002  0x0001  0x0f00  0x0002  59      0x0001  0x0002  49      Zigbee NWK NWK Command: Route Reply
251     + 00:00:00.001                          59                              IEEE 802.15.4 Acknowledgment
252     + 00:00:00.028  0x0000  0x0f00  0xffff  115     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
253     + 00:00:00.262  0x0000  0x0f00  0xffff  116     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
254     + 00:00:00.261  0x0000  0x0f00  0xffff  117     0x0002  0xfffc  128     Zigbee NWK NWK Command: Route Request
255     + 00:00:01.087  0x796f  0x0f00  0x0000  82                              IEEE 802.15.4 Command: Data Request
256     + 00:00:00.001                          82                              IEEE 802.15.4 Acknowledgment
257     + 00:00:02.654  0x0351  0x0f00  0x0002  160     0x0351  0x796f  190     Zigbee APS Data HA:On/off:Toggle
258     + 00:00:00.001                          160                             IEEE 802.15.4 Acknowledgment
259     + 00:00:00.004  0x0002  0x0f00  0x0001  87      0x0351  0x796f  129     Zigbee APS Data HA:On/off:Toggle
260     + 00:00:00.001                          87                              IEEE 802.15.4 Acknowledgment
261     + 00:00:00.004  0x0001  0x0f00  0x0000  60      0x0351  0x796f  50      Zigbee APS Data HA:On/off:Toggle
262     + 00:00:00.001                          60                              IEEE 802.15.4 Acknowledgment
263     + 00:00:00.406  0x796f  0x0f00  0x0000  83                              IEEE 802.15.4 Command: Data Request
264     + 00:00:00.001                          83                              IEEE 802.15.4 Acknowledgment
265     + 00:00:00.003  0x0000  0x0f00  0x796f  118     0x0351  0x796f  145     Zigbee APS Data HA:On/off:Toggle
```

一些说明：

* 56#: 0x0351 节点要发送一个 ZDP:EndDeviceBindReq 给 0x0000 节点，即发送给协调器，由于 0x0351 是个 ZED 设备，他直接把数据包发送给其父节点 0x0002。
* 57#：IEEE 802.15.4 MAC 层的一个确认包，这样 ZED 0x0351 就知道他的父节点 0x0002 收到了这个数据包
* 58#: 0x0002 发现他没有到达目的节点 0x0000 的路由信息，所以发起了一个路由发现过程，注意到这里的 NwkDst 是 0xfffc，这个字段是路由模式，表示广播给网络中的所有路由器
* 59#: 0x0001 的路由器收到路由发现请求包后，转发了这个广播包
* 60#：0x0000 的协调器收到路由发现请求包后，发现这个路由发现的目的地址是给他自己的，他就发送了一个路由应答包，这个应答包的 NwkDst 是 0x0001。
* 61#: 0x0001 发送了一个确认包给 0x0000，表示他收到了路由发现应答包
* 62#: 0x0001 更新完他的路由表后，转发了这条路由应答包给 0x0002。留意这个数据包里的 NwkSrc 和 NwkDst 字段。
* 63#：0x0002 发送了一个确认包给 0x0001，表示他收到了路由发现应答包
* 64#: 这个时候，0x0351 到达协调器 0x0000 的路由信息已经建立起来了，它是 0x0351 -> 0x0002 -> 0x0001 -> 0x0000。0x0002 开始发送 ZDP:EndDeviceBindReq 命令，留意这个数据包里的 NwkSrc = 0x0351，即这个包是 0x0002 的子设备 ZED 发送的，NwkDst = 0x0000 表示这个数据包最终要发给协调器。而这个数据包的 MACSrc = 0x0002，MACDst = 0x0001，表示 0x0002 只把数据包发送给它的下一跳 0x0001。下一跳的地址就是由路由发现过程中发现的。
* 66#：0x0001 节点转发了这个数据包给 0x0000。
* 68#-69#: 这两数据包比较有意思，它实际上转发了路由发现请求的广播包。但此时这个数据包已经没有意义了，因为路由发现已经结束了，网络中已经使用了发现的路由来通信了。
* STEP 2: 146# 0x0351 要发数据包给 0x796f。148# 0x0351 的父节点 0x0002 发现它没有到达 0x796f 的路由，就发起了路由发现过程。150# 152# 是路由发现应答，0x796f 是 0x0000 的子节点，所以 0x0000 代替 0x796f 作了应答，这次我们发现的路由是 0x0351 -> 0x0002 -> 0x143e -> 0x0000 -> 0x796f。
* 154#: 路由发现完成后，0x0351 的父节点 0x0002 自动把在 #146 处的数据包发送给路由的下一跳地址 0x143e。所以路由发现对数据发送方 0x0351 是完全透明的，它根本不知道外面发生了什么，只是把数据发给父节点。
* 156#：数据最终送到 0x796f 的父节点 0x0000 。由于 0x796f 是个睡眠的 ZED 设备，所以 0x0000 只好把数据暂存，没办法投递给 0x796f。
* 160#-162#: 过了将近 2 秒后，0x796f 醒来，在 MAC 层发送一个命令向父节点查询他睡眠期间是否有数据到来。这个时候，0x0000 终于有机会把暂存的数据包发送给 0x796f 子节点了。
* STEP 3：在这里，我们故意**破坏掉从 0x0351 到 0x796f 的路由，即把 0x143e 节点断电**。
* 243#-245#: 沿着原来发现的路由，数据包从 0x0351 -> 0x0002 -> 0x143e，这个时候异常发生了，0x143e 没有对消息进行确认 (Acknowledgment)。这个时候 0x0002 发现了异常，原来的路由不通了。于是它发起了一次新的路由发现过程。
* 246#-251#: 0x0002 发起了新的路由发现过程，这次发现的新路由是 0x0002 -> 0x0001 -> 0x0000 -> 0x796f。
* 252#-254#: 多余的路由发现广播，这三个包实际上是转发 #246 的路由发现广播。因为他们的 NwkSrc 和 NwkSeq 是一样的。
* 255#: 这是个挺有意思的包，我们知道睡眠 ZED 设备是定期向父设备查询看其睡眠期间是否有新数据到达。这次的查询发现没有给他的数据，所以 ZED 查询完就继续睡了。
* 257#-262#: 节点 0x0351 沿着新发现的路由把控制命令送给 0x796f 的父节点 0x0000 处。0x0000 等待 0x796f 醒来，来获取给它的数据。
* 263#-265#: 0x796f 终于醒过来了，向父设备查询数据，并顺利地收到了 0x0351 发给它的控制命令。

## 空中数据包

要理解 ZigBee 协议，对协议空中包的解读至关重要。实际上 ZigBee 联盟在对设备进行兼容性测试时，主要是看空中包是否符合协议规范，是否互相兼容。其他的其实都是黑盒子。理解空中包同样对调试非常有帮助，通过空中包的分析，可以看到网络中哪个节点有 BUG，为什么一个数据包没有被正确地送达？带宽是否有问题？

一个完整的空中包包含很多层，主要有 MAC, NWK, APS, ZCL 等。下图是一个完整的空中包的帧结构

![zigbee frame](./images/zigbee_frame.png)

一些说明：

* 不同层的帧是叠加起来的。比如 NWK 层的帧数据放在 MAC 层的 Payload 里。APS 层的帧数据放在 NWK 的 Payload 里。ZCL 层的帧放在 APS 的 Payload 里。
* 每层的包头长度是不固定的，参数不同包头长度也不同。每层的帧头都以 FC (Frame Control) 作为开头，FC 对包头的可选参数进行了描述，即哪些字段出现在包头中，哪些不出现。
* MAC 层的帧以 FCS (Frame Check Sum) 结尾。NWK 层的帧以可选的 MIC (Message Integrity Code) 结尾。NWK AUX HDR 和
NWK MIC 只出现在启用了 NWK 层安全机制的网络中。APS 也有可选的安全机制，如果安全机制启用的情况下 APS AUX HDR 和 APS MIC 将出现在 APS 层数据帧中。
* MAC 头和 NWK 头是为了在节点之间寻址的。MAC 头控制逐跳的寻址，NWK 头控制源节点到目的节点的寻址。所以 MAC 层的地址在每一跳都会改变，而 NWK 层的地址从头到尾都保持一致。

![zigbee frame](./images/zigbee_frame.png)

这是 MAC 和 NWK 帧头信息。APS 帧和 ZCL 帧不是本节的主要内容，就不详细介绍。

**一个数据帧的例子**

```
IEEE 802.15.4
    Frame Control: 0x8861
        .... .... .... .001 = Frame Type: Data (0x0001)
        .... .... .... 0... = Security Enabled: Disabled
        .... .... ...0 .... = Frame Pending: No more data
        .... .... ..1. .... = Acknowledgement Request: Acknowledgement required
        .... .... .1.. .... = Intra PAN: Within the PAN
        .... ..00 0... .... = Reserved
        .... 10.. .... .... = Destination Addressing Mode: Address field
                              contains a 16-bit short address (0x0002)
        ..00 .... .... .... = Reserved
        10.. .... .... .... = Source Addressing Mode: Address field contains
                              a 16-bit short address (0x0002)
    Sequence Number: 230
    Destination PAN Identifier: 0x0f00
    Destination Address: 0x0000
    Source Address: 0x0001
    Frame Check Sequence: Correct
ZigBee NWK
    Frame Control: 0x0248
        .... .... .... ..00 = Frame Type: NWK Data (0x00)
        .... .... ..00 10.. = Protocol Version (0x02)
        .... .... 01.. .... = Discover Route: Enable route discovery (0x01)
        .... ...0 .... .... = Multicast: Unicast or broadcast (0x00)
        .... ..1. .... .... = Security: Enabled
        .... .0.. .... .... = Source Route: Not present (0x00)
        .... 0... .... .... = Destination IEEE Address: Not Included
        ...0 .... .... .... = Source IEEE Address: Not Included
        000. .... .... .... = Reserved
    Destination Address: 0x796f
    Source Address: 0x1430
    Radius = 9
    Sequence Number = 174
ZigBee AUX
    Security Control: 0x28
        .... .000 = Security Level: Attributes: None; Encryption: Off; MIC:
                    No (M0) (0x00)
        ...0 1... = Key Identifier: Network (0x01)
        ..1. .... = Extended Nonce: Sender Address Field: Present (0x01)
        00.. .... = Reserved: (0x00)
    Frame Counter: 0x09
    Source Address: 0x0050c237b0040002
    Key Sequence Number: 0x00
    MIC: 00:fd:30:14
ZigBee APS
    Frame Control: 0x00
        .... ..00 = Frame Type: APS Data (0x00)
        .... 00.. = Delivery Mode: Normal Unicast Delivery (0x00)
        ...0 .... = Reserved
        ..0. .... = Security: False
        .0.. .... = Ack Request: Acknowledgement not required
        0... .... = Extended Header Present: Extended header is not present
    Destination Endpoint: 0x08
    Cluster Identifier: On/off (0x0006)
    Profile Identifier: HA (0x0104)
    Source Endpoint: 0x08
    Counter: 0x27
ZigBee ZCL
    Frame Control: 0x01
        .... ..01 = Frame Type: Command is specific to a cluster (0x01)
        .... .0.. = Manufacturer Specific: The manufacturer code field shall
                    not be included in the ZCL frame. (0x00)
        .... 0... = Direction: From the client side to the server side.(0x00)
        ...0 .... = Disable Default Response: Default response command will
                    be returned. (0x00)
        .... .... = Reserved: Reserved (0x00)
    Transaction Sequence Number: 0x42
    Command Identifier: Toggle (0x02)
```

一些说明：

* IEEE 802.15.4 Frame Control: Security Enabled: Disabled: 上文提到过，ZigBee 为了能在超低端的设备上运行，没有采用 IEEE 802.15.4 定义的 MAC 层安全机制。ZigBee 的安全机制中由 NWK 层保证的。所以这里 MAC 层的安全机制是关闭的。
* IEEE 802.15.4 Frame Control: Acknowledgement Request: Acknowledgement required: 这里是请求 MAC 层确认的开关。这个数据包里是打开的，如果是针对广播数据包，这个字段就是关闭的。因为广播是没有确认的。
* IEEE 802.15.4 Frame Control: Destination Addressing Mode: Source Addressing Mode: MAC 层的地址样式。这里是使用 16 bit 短地址。但如果是设备的入网请求数据包，这里就必须用 64 bit 的长地址。因为还没入网，还不知道自己的短地址，只能用长地址进行寻址。
* IEEE 802.15.4 Sequence Number: MAC 层的包序列号，用来唯一地标识一个 MAC 层的数据包。序列号是 8 bit 的，即这里假设不可能同时有 256 个属于同一个节点的数据包在空中传输。否则就会有冲突。
* IEEE 802.15.4 Source Address: 注意到这里 MAC 层也使用短地址。同时可以看到 MAC 层的地址和 NWK 层的地址是不一样的。因为 MAC 层是控制逐跳间寻址的。而 NWK 是发送方和接收方的地址。
* ZigBee NWK Frame Control: Protocol Version: 这里的协议版本是 2，实际上对 ZigBee 协议，这里都是 2。这个字段和 stack profile 无关。ZigBee 2004 的版本是 1 ，ZigBee 2006, 2007，ZigBee Pro 都使用 2 作为协议版本号。
* ZigBee NWK Frame Control: Security: Enabled: 这个标志表明 NWK 层的安全上启用的。这样帧中就会出现可选的 NWK AUX 帧信息。
* ZigBee AUX: 这是 NWK 层的安全机制启用时才会出现的数据。其中有两个关键的字段用来保证通信的安全。一个是 32 bit 的 Frame Counter 用来标识消息的新旧程度。如果信息太旧了，会被接收方拒绝。这个机制可以避免重放攻击。另外一个字段是 MIC，这个字段是为了避免中间人修改数据。MIC 是用 128 bit 的安全密钥生成的，任何修改消息体的行为都会导致解密失败。这里涉及到 ZigBee 的网络安全机制，包括证书传输，安全中心 (Trust Center) 等概念。需要专门的文章来介绍。
* ZigBee APS: 这里包含应用层的信息。对这个帧来说，我们可以看到这是个单播信息，APS 层的安全机制是关闭的。所以不会出现 APS AUX 帧数据了。Extended Header Present 为 0，表示个应用层数据没有分包，在一个包里就传输完了。Ack Request 为 0 表明 APS 层的端对端确认消息是关闭的。
* ZigBee ZCL: 最后一帧是 ZCL 帧信息。它包含 ZigBee Cluster Library 信息。APS 和 ZCL 需要另外的文章来介绍 ZigBee 应用层的相关协议。


再看一个密钥传输的例子。一个设备加入网络，安全中心发送了一份密钥给新设备。这样新设备就可以使用这个密钥在网络中通信。没有密钥的设备由于无法生成相应的加密信息，通信会失败。

```
Frame 10 (Length = 56 bytes)
IEEE 802.15.4
ZigBee NWK
    Frame Control: 0x0008
    Destination Address: 0x0001
    Source Address: 0x0000
    Radius = 10
    Sequence Number = 185
ZigBee APS
    Frame Control: 0x01
    Counter: 0x2b
    APS Payload
    APS Command Identifier = Transport Key: (0x05)
    KeyTransport.CommandPayload
    Key Type: Network Key (0x01)
    Key: 04:03:02:01:04:03:02:01:04:03:02:01:04:03:02:01
    Sequence Number: 0
    Destination Address: 00:50:c2:37:b0:04:00:02
    Source Address: 00:50:c2:37:b0:04:00:01
```

在一个 ZigBee 安全网络里，密钥可以固化在节点里，也可以在节点加入网络时由安全中心 (一般由 ZC 兼任) 发送证书给新入网的节点。如果是由安全中心在入网时发送证书，实际上还是暴露了一个安全漏洞，因为这里发送的证书是可以被嗅探到的。

## ZigBee Stack Profiles

现行有两个 ZigBee stack profile，一个是 01，代表 ZigBee 2006, ZigBee 2007 版本的协议。另外一个是 02，代表 ZigBee Pro 版本的协议。

Stack Profile 01 用在成本敏感型的设备上。它有如下特点：

* 可预测的地址分配策略，就是上文介绍的 CSkip 地址分配方案
* 树状路由
* 更少的代码尺寸，意味着更低的 ROM 和 RAM 需求
* 数据包最多传 10 跳。这意味着网络规模较小

Stack Profile 02 也称为 ZigBee Pro。它不支持树状路由，但增加了源站路由。它用在成本不是第一考虑因素，网络规模才是第一考虑因素的场景下。主要有以下特征：

* 随机的地址分配
* 源站路由
* 多播
* 更大的代码尺寸，意味着更大的 ROM 和 RAM 需求
* 数据包最多可传 30 跳。这意味着网络规模较大

两个版本的协议都支持单播，广播，组，端点，簇等协议。实际应用中，最大的差别在于对 ROM 和 RAM 的要求不同，地址分配方案不同，可选的路由不同，以及数据包传输的最大跳数不同。

Stack Profile 的版本在信标指令里呈现的。如上文介绍，信标指令是用来发现网络的。我们看一个 Stack Profile 02 的信标指令：

```
IEEE 802.15.4
NWK Layer Information: 0x8422
    .... .... .... 0010 = Stack Profile (0x2)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c237b0040001
```

下面是一个 stack profile 01 的信标指令：

```
IEEE 802.15.4
NWK Layer Information: 0x8421
    .... .... .... 0001 = Stack Profile (0x1)
    .... .... 0010 .... = nwkcProtocolVersion (0x2)
    .... ..00 .... .... = Reserved (0x0)
    .... .1.. .... .... = Router Capacity: True
    .000 0... .... .... = Device Depth (0x0)
    1... .... .... .... = End Device Capacity: True
    Extended PAN ID: 0x0050c211dc051801
```

需要注意的是 stack profile 01 和 stack profile 02 的设备可以加入对方的网络，即他们是兼容的。但对路由器设备而言，如果不支持网络的路由方法，则必须以 ZED 的身份加入网络。一般情况下，协议芯片供应商提供会提供协议版本的选择。有些提供编译时选择，有些提供运行时选择。编译时选择机制可以减小 ROM 占用。而运行时选择 ROM 占用会比较大，主要提供了设备的灵活性。

## FAQ

* i-jia 系统的树状路由是否使能？
  A：没有使能
* i-jia 协调器在组网时，使用什么策略来决定通信信道？
  A：目前是定死在 15 信道
* i-jia 协调器在组网时，使用什么策略来决定 PAN ID？
  A：随便 0xff，由协议栈随机决定
* i-jia 系统是否启用 ExtendedPANID？
  A：启用的
* i-jia 系统的 MAC 地址是我们公司买的么？公司的组织编码是多少？
  A：TI 出厂的时候已经写好了 TI 申请的 MAC 地址。目前我们直接使用，没有用我们自己申请
* i-jia 系统的设备有哪些是 ZR，哪些是 ZED？
  A：摇控器和情景面板是 ZED，会进入睡眠。其他的都是 ZR，不进入睡眠
* i-jia 系统的 ZR 是否配置为允许设备入网功能？
  A：ZR 是可以允许设备入网，但总开关还是在 ZC 上，即 App 控制 ZC 是否允许设备入网，ZC 会把这个开关传递给所有的 ZR。
* i-jia 系统的路由器的路由表大小是多少？
  A：目前是 16 个
* i-jia 系统如何维护路由表？即表满了怎么办？
  A：满了就不处理
* 257# 为什么 0x0002 不直接再发送数据包，而是要等超时后由 0x0351 重发？
  A：这里可能涉及到 APS 层和 NWK 层的重发机制。目前 APS 层有重发机制，NWK 层也有重发机制。
* i-jia 系统是否启用 zigbee NWK 层和 APS 层的安全机制？
  A：NWK 层启用了安全机制，APS 没有启用
* 如果启用安全机制，那么安全中心一般使用什么算法来判断子设备是否是个合法的设备，从而决定要不要给子设备发送密钥？
  A：目前所有的设备都预置一个 HA 密钥。TC 会无条件给入网的新设备发送用 HA 密钥加密的网络密钥。目前都使用 AES 加密算法。
* i-jia 使用 stack profile 01 还是 stack profile 02?
  A：目前使用 stack profile 02。但没有使用源站路由功能。
* i-jia 上 TI 提供的方案，stack profile 是编译时决定的还是运行时决定的？
  A：TI 协议栈目前只提供 stack profile 02，不提供 stack profile 01
* TI 开发环境里，哪个编译开关指定这个设备的类型 ZC, ZR, ZED？
* i-jia 系统里，ZR 和 ZED 入网时，查找哪个 PAN ID？
* i-jia 系统里，地址分配方案是采用 zigbee profile 01 的 CSkip 还是使用 zigbee profile 02 的随机分配策略？
* i-jia 系统里，ZED 设备是否有在 MAC 层定时轮询其父节点看是否有发给他的数据？如果有，时间是多长？
* i-jia 系统的 Broadcast Trasaction Table (BTT) 大小是多少？

[1]: http://www.ieee.org
[2]: http://standards.ieee.org/getieee802/download/802.15.4-2003.pdf
[3]: http://standards.ieee.org/getieee802/download/802.15.4-2006.pdf
[0]: https://raw.githubusercontent.com/kamidox/blogs/master/images/zigbee_images-form-network.png