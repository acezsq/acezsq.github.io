(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{459:function(r,a,e){r.exports=e.p+"assets/img/1703932123324-b4941674-869b-43a4-b8e6-8b6aa6f15724.77d3a744.png"},460:function(r,a,e){r.exports=e.p+"assets/img/1703933320166-e3d5fd4e-d22a-4ada-b1d7-5b657f50be75.bb756faf.png"},461:function(r,a,e){r.exports=e.p+"assets/img/1703934432348-43f2bac5-25a0-4e6d-85c5-46958a4103a5.9cc7275b.png"},462:function(r,a,e){r.exports=e.p+"assets/img/1703939576634-7a0e7934-8f8b-46af-ba5d-38819f631dce.809dfde9.png"},463:function(r,a,e){r.exports=e.p+"assets/img/1703940853109-6a7572a1-9592-418a-8599-db30b49aa49c.4057a7f0.png"},464:function(r,a,e){r.exports=e.p+"assets/img/1703940877534-3178674a-fa8d-4d6a-9807-05d5a1713294.99ef19e7.png"},465:function(r,a,e){r.exports=e.p+"assets/img/1703940939407-fabb8837-dd95-4f6f-ae8d-3e3c8d679cc4.638b1b0a.png"},466:function(r,a,e){r.exports=e.p+"assets/img/1703941015350-c0fb0afd-fd9f-460c-a905-b55a95bed64b.f359f156.png"},467:function(r,a,e){r.exports=e.p+"assets/img/1703941101136-85f4eddf-7f09-4aa5-a13b-cfe7eabce646.3ef7b3d7.png"},489:function(r,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var r=this,a=r._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("blockquote",[a("p",[r._v("GFS，也就是The Google File System这篇论文。构建分布式系统大多都是关于如何设计存储系统，或是设计其它基于大型分布式存储的系统。所以我们会更加关注如何为大型分布式存储系统设计一个优秀的接口，以及如何设计存储系统的内部结构，这样系统才能良好运行。")])]),r._v(" "),a("h3",{attrs:{id:"_1-分布式存储系统的难点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-分布式存储系统的难点"}},[r._v("#")]),r._v(" 1. 分布式存储系统的难点")]),r._v(" "),a("ol",[a("li",[r._v("他们想获取巨大的性能加成，进而利用数百台计算机的资源来同时完成大量工作。因此，性能问题就成为了最初的诉求。 之后，很自然的想法就是将数据分割放到大量的服务器上，这样就可以并行的从多台服务器读取数据。我们将这种方式称之为"),a("strong",[r._v("分片")]),r._v("（Sharding）。")]),r._v(" "),a("li",[r._v("如果你在成百上千台服务器进行分片，你将会看见常态的故障。如果你有数千台服务器，那么总是会有一台服务器宕机，每天甚至每个小时都可能会发生错误。所以，我们需要自动化的方法而不是人工介入来修复错误。我们需要一个自动的容错系统，这就引出了"),a("strong",[r._v("容错")]),r._v("这个话题（fault tolerance）。")]),r._v(" "),a("li",[r._v("实现容错最有用的一种方法是使用复制，只需要维护2-3个数据的副本，当其中一个故障了，你就可以使用另一个。所以，如果想要容错能力，就得有"),a("strong",[r._v("复制")]),r._v("（replication）。")]),r._v(" "),a("li",[r._v("如果有复制，那就有了两份数据的副本。可以确定的是，如果你不小心，它们就会不一致。所以，你本来设想的是，有了两个数据副本，你可以任意使用其中一个副本来容错。但是如果你不够小心，两个数据的副本就不是完全一致，严格来说，它们就不再互为副本了。而你获取到的数据内容也将取决于你向哪个副本请求数据。这对于应用程序来说就有些麻烦了。所以，如果我们有了复制，我们就有"),a("strong",[r._v("不一致")]),r._v("的问题（inconsistency）。")]),r._v(" "),a("li",[r._v("通过聪明的设计，你可以避免不一致的问题，并且让数据看起来也表现的符合预期。但是为了达到这样的效果，你总是需要额外的工作，需要不同服务器之间通过网络额外的交互，而这样的交互会降低性能。所以如果你想要一致性，你的代价就是"),a("strong",[r._v("低性能")]),r._v("。")])]),r._v(" "),a("p",[r._v("现实中，如果你想要好的一致性，你就要付出相应的代价。如果你不想付出代价，那就要忍受一些不确定的行为。")]),r._v(" "),a("h3",{attrs:{id:"_2-错误的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-错误的设计"}},[r._v("#")]),r._v(" 2. 错误的设计")]),r._v(" "),a("p",[r._v("对于具备强一致或者好的一致性的系统，从应用程序或者客户端看起来就像是和一台服务器在通信。尽管我们会通过数百台计算机构建一个系统，但是对于一个理想的强一致模型，你看到的就像是只有一台服务器，一份数据，并且系统一次只做一件事情。")]),r._v(" "),a("p",[r._v("对于存储服务器来说，它上面会有一块磁盘。执行一个写请求或许意味着向磁盘写入一个数据或者对数据做一次自增。如果这是一次修改操作，并且我们有一个以key-value为索引的数据表单，那么我们会修改这个表单。如果是一次读取操作，我们只需要将之前写入的数据，从表单中取出即可。")]),r._v(" "),a("p",[r._v("为了让这里的简单服务有可预期的行为，需要定义一条规则：一个时间只执行一条请求。这样每个请求都可以看到之前所有请求按照顺序执行生成的数据。所以，如果有一些写请求，并且服务器以某种顺序一次一个的处理了它们，当你从服务器读数据时，你可以看到期望的数据。")]),r._v(" "),a("p",[r._v("当然，这里的问题是，因为只有单个服务器，所以容错能力很差。如果服务器故障了，磁盘坏了，系统整个就不可用了。所以，在现实世界中，我们会构建多副本的分布式系统，但这却又是所有问题的开始。")]),r._v(" "),a("p",[r._v("假设客户端C1和C2都想执行写请求，其中一个要写X为1，另一个写X为2。C1会将写X为1的请求发送个两个服务器，因为我们想要更新两台服务器上的数据。C2也会将写X为2的请求发送给两个服务器。这里会出现什么错误呢？是的，"),a("strong",[r._v("我们没有做任何事情来保障两台服务器以相同的顺序处理这2个请求")]),r._v("。这个设计真不咋样。如果服务器1（S1）先处理C1的请求，那么在它的表单里面，X先是1，之后S1看到了来自C2的请求，会将自己表单中的X覆盖成2。但是，如果S2恰好以不同的顺序收到客户端请求，那么S2会先执行C2的请求，将X设置为2，之后收到C1的请求，将X设置为1。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(459),alt:"img"}})]),r._v(" "),a("p",[r._v("之后，如果另外一些客户端，假设C3从S1读数据，C4从S2读数据，我们就会面临一个可怕的场景：这两个客户端读取的数据不一样。但是从前一个例子中的简单模型可以看出，相连的读请求应该读出相同的数据。假设我们尝试修复上面的问题，我们让客户端在S1还在线的时候，只从S1读取数据，S1不在线了再从S2读取数据。这样最开始所有的客户端读X都能得到2。但是突然，如果S1故障了，尽管没有写请求将X改成1，客户端读X得到的数据将会从2变成1。因为S1故障之后，所有的客户端都会切换到S2去读数据。这种数据的神奇变化与任何写操作都没有关联，并且也不可能在前一个例子的简单模型中发生。")]),r._v(" "),a("p",[r._v("当然，这里的问题是可以修复的，修复需要服务器之间更多的通信，并且复杂度也会提升。由于获取强一致会带来不可避免的复杂性的提升，有大量的方法可以在好的一致性和一些小瑕疵行为之间追求一个平衡。")]),r._v(" "),a("h3",{attrs:{id:"_3-gfs的设计目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-gfs的设计目标"}},[r._v("#")]),r._v(" 3. GFS的设计目标")]),r._v(" "),a("p",[r._v("Google的"),a("strong",[r._v("目标是构建一个大型的，快速的文件系统")]),r._v("。并且这个文件系统是全局有效的，这样各种不同的应用程序都可以从中读取数据。一种构建大型存储系统的方法是针对某个特定的应用程序构建特定的裁剪的存储系统。但是如果另一个应用程序也想要一个大型存储系统，那么又需要重新构建一个存储系统。如果有一个全局"),a("strong",[r._v("通用")]),r._v("的存储系统，那就意味着如果我存储了大量从互联网抓取的数据，你也可以通过申请权限来查看这些数据，因为我们都使用了同一个存储系统。这样，任何在Google内部的人员都可以根据名字读取这个文件系统（GFS）中可被共享的内容。")]),r._v(" "),a("p",[r._v("为了获得大容量和高速的特性，每个包含了数据的文件会被GFS自动的分割并存放在多个服务器之上，这样读写操作自然就会变得很快。因为我们现在在数百台服务器之上构建存储系统，我们希望有自动的故障修复。还有一些特征并非是设计目标。比如GFS被设计成只在一个数据中心运行，所以这里并没有将副本保存在世界各地，单个GFS只存在于单个数据中心的单个机房里。理论上来说，数据的多个副本应该彼此之间隔的远一些，但是实现起来挺难的，所以GFS局限在一个数据中心内。GFS是为TB级别的文件而生。并且GFS只会顺序处理，不支持随机访问。")]),r._v(" "),a("h3",{attrs:{id:"_4-gfs的设计实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-gfs的设计实现"}},[r._v("#")]),r._v(" 4. GFS的设计实现")]),r._v(" "),a("p",[r._v("假设我们有上百个客户端和一个Master节点。尽管实际中可以拿多台机器作为Master节点，但是GFS中Master是Active-Standby模式，所以只有一个Master节点在工作。Master节点保存了文件名和存储位置的对应关系。除此之外，还有大量的Chunk服务器，可能会有数百个，每一个Chunk服务器上都有1-2块磁盘。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(460),alt:"img"}})]),r._v(" "),a("p",[r._v("Master节点用来管理文件和Chunk的信息，而Chunk服务器用来存储实际的数据。Master节点知道每一个文件对应的所有的Chunk的ID，这些Chunk每个是64MB大小，它们共同构成了一个文件。如果我有一个1GB的文件，那么Master节点就知道文件的第一个Chunk存储在哪，第二个Chunk存储在哪，等等。当我想读取这个文件中的任意一个部分时，我需要向Master节点查询对应的Chunk在哪个服务器上，之后我可以直接从Chunk服务器读取对应的Chunk数据。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(461),alt:"img"}})]),r._v(" "),a("p",[a("strong",[r._v("GFS设计的相关定义")]),r._v("：集群由单个master服务器和多个chunkservers服务器组成，并由多个clients访问。文件被分成固定大小的块。每个chunk（块）由一个不可变且全局唯一的64位 "),a("em",[r._v("chunk handle")]),r._v(" 标识，该句柄是在块创建时由master服务器分配的。chunkserver将块以Linux文件的形式存储在本地磁盘上，并通过块句柄和字节范围指定读取或写入块数据。为了提高可靠性，每个块都在多个块服务器上复制。默认情况下，我们存储三个副本。主服务器维护所有文件系统metadata（元数据）。这包括namespace名称空间、access control information访问控制信息、从文件到chunk的映射以及chunk的当前位置。它还控制系统范围的活动，如chunk lease management块租赁管理、garbage collection of orphaned chunks孤立块的垃圾收集和chunk migration between chunkservers块服务器之间的块迁移。master服务器定期通过HeartBeat机制与每个chunkserver通信，给它指令并收集它的状态。")]),r._v(" "),a("p",[r._v("链接到每个应用程序中的GFS客户端代码实现文件系统API，并与主服务器和chunkserver通信，以代表应用程序读取或写入数据。客户端与主服务器交互进行元数据操作，但所有承载数据的通信都直接到chunkserver。客户端询问主服务器它应该联系哪个块服务器。它将这些信息缓存一段有限的时间，并直接与chunkserver交互以进行许多后续操作。")]),r._v(" "),a("p",[a("strong",[r._v("GFS的通信流程")]),r._v("：首先，使用固定的块大小，客户端将应用程序指定的文件名和字节偏移量转换为文件中的块索引。然后，它向master发送包含文件名和块索引的请求。master服务器回复相应的"),a("em",[r._v("chunk handle")]),r._v("和位置副本。客户端使用文件名和块索引作为键缓存此信息。然后客户端向其中一个副本发送请求，最有可能是最接近的一个。该请求指定该块内的"),a("em",[r._v("chunk handle")]),r._v("和字节范围。对同一块的进一步读取不需要额外的客户端-主交互，直到缓存的信息过期或文件重新打开。")]),r._v(" "),a("p",[a("strong",[r._v("GFS的故障处理")]),r._v("：更进一步，我们看一下GFS的一致性以及GFS是如何处理故障。为了了解这些，我们需要知道Master节点内保存的数据内容，这里我们关心的主要是两个表单：")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("第一个是文件名到Chunk ID或者Chunk Handle数组的对应。这个表单告诉你，文件对应了哪些Chunk。但是只有Chunk ID是做不了太多事情的，所以有了第二个表单。")])]),r._v(" "),a("li",[a("p",[r._v("第二个表单记录了Chunk ID到Chunk数据的对应关系。这里的数据又包括了：")])]),r._v(" "),a("li",[a("ul",[a("li",[r._v("每个Chunk存储在哪些服务器上，所以这部分是Chunk服务器的列表")]),r._v(" "),a("li",[r._v("每个Chunk当前的版本号，所以Master节点必须记住每个Chunk对应的版本号。")]),r._v(" "),a("li",[r._v("所有对于Chunk的写操作都必须在主Chunk（Primary Chunk）上顺序处理，主Chunk是Chunk的多个副本之一。所以，Master节点必须记住哪个Chunk服务器持有主Chunk。")]),r._v(" "),a("li",[r._v("并且，主Chunk只能在特定的租约时间内担任主Chunk，所以，Master节点要记住主Chunk的租约过期时间。")])])])]),r._v(" "),a("p",[r._v("以上数据都存储在内存中，如果Master故障了，这些数据就都丢失了。为了能让Master重启而不丢失数据，Master节点会同时将数据存储在磁盘上。Master会在磁盘上存储log，每次有数据变更时，Master会在磁盘的log中追加一条记录，并生成CheckPoint（类似于备份点）。")]),r._v(" "),a("p",[r._v("有些数据需要存在磁盘上，而有些不用。它们分别是：")]),r._v(" "),a("ul",[a("li",[r._v("第一个表单要保存在磁盘上。我给它标记成NV（non-volatile, 非易失），这个标记表示对应的数据会写入到磁盘上。")]),r._v(" "),a("li",[r._v("Chunk服务器列表不用保存到磁盘上。因为Master节点重启之后可以与所有的Chunk服务器通信，并查询每个Chunk服务器存储了哪些Chunk，所以我认为它不用写入磁盘。所以这里标记成V（volatile）。")]),r._v(" "),a("li",[r._v("版本号要不要写入磁盘取决于GFS是如何工作的，我认为它需要写入磁盘。我们之后在讨论系统是如何工作的时候再详细讨论这个问题。这里先标记成NV。")]),r._v(" "),a("li",[r._v("主Chunk的ID，几乎可以确定不用写入磁盘，因为Master节点重启之后会忘记谁是主Chunk，它只需要等待60秒租约到期，那么它知道对于这个Chunk来说没有主Chunk，这个时候，Master节点可以安全指定一个新的主Chunk。所以这里标记成V。")]),r._v(" "),a("li",[r._v("类似的，租约过期时间也不用写入磁盘，所以这里标记成V。")])]),r._v(" "),a("p",[r._v("如果文件扩展到达了一个新的64MB需要新增一个Chunk或者由于指定了新的主Chunk而导致版本号更新时，Master节点需要向磁盘中的Log追加一条记录。每次有这样的更新，都需要写磁盘。这里在磁盘中维护log而不是数据库的原因是，数据库本质上来说是某种B树（b-tree）或者hash table，相比之下，追加log会非常的高效，因为你可以将最近的多个log记录一次性的写入磁盘。")]),r._v(" "),a("p",[r._v("当Master节点故障重启，并重建它的状态，你不会想要从log的最开始重建状态，因为log的最开始可能是几年之前，所以Master节点会在磁盘中创建一些checkpoint点，这可能要花费几秒甚至一分钟。这样Master节点重启时，会从log中的最近一个checkpoint开始恢复，再逐条执行从Checkpoint开始的log，最后恢复自己的状态。")]),r._v(" "),a("h3",{attrs:{id:"_5-gfs读文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-gfs读文件"}},[r._v("#")]),r._v(" 5. GFS读文件")]),r._v(" "),a("p",[r._v("对于读请求来说，意味着应用程序或者GFS客户端有一个文件名和它想从文件的某个位置读取的偏移量（offset），应用程序会将这些信息发送给Master节点。Master节点会从自己的file表单中查询文件名，得到Chunk ID的数组。因为每个Chunk是64MB，所以偏移量除以64MB就可以从数组中得到对应的Chunk ID。之后Master再从Chunk表单中找到存有Chunk的服务器列表，并将列表返回给客户端。所以，第一步是客户端（或者应用程序）将"),a("strong",[r._v("文件名")]),r._v("和"),a("strong",[r._v("偏移量")]),r._v("发送给Master。第二步，Master节点将"),a("strong",[r._v("Chunk Handle")]),r._v("（也就是ID，记为H）和"),a("strong",[r._v("服务器列表")]),r._v("发送给客户端。")]),r._v(" "),a("p",[r._v("客户端可以从这些Chunk服务器中挑选一个来读取数据。客户端会选择一个网络上最近的服务器（Google的数据中心中，IP地址是连续的，所以可以从IP地址的差异判断网络位置的远近），并将读请求发送到那个服务器。因为客户端每次可能只读取1MB或者64KB数据，所以，客户端可能会连续多次读取同一个Chunk的不同位置。所以，客户端会缓存Chunk和服务器的对应关系，这样，当再次读取相同Chunk数据时，就不用一次次的去向Master请求相同的信息。")]),r._v(" "),a("p",[r._v("客户端会与选出的Chunk服务器通信，将Chunk Handle和偏移量发送给那个Chunk服务器。Chunk服务器会在本地的硬盘上，将每个Chunk存储成独立的Linux文件，并通过普通的Linux文件系统管理。并且可以推测，Chunk文件会按照Handle（也就是ID）命名。所以，Chunk服务器需要做的就是根据文件名找到对应的Chunk文件，之后从文件中读取对应的数据段，并将数据返回给客户端。")]),r._v(" "),a("p",[r._v("总结一下"),a("strong",[r._v("读操作")]),r._v("的"),a("strong",[r._v("流程")]),r._v("就是：客户端提溜着文件名和偏移量找Master节点----\x3eMaster节点根据第一个表找到对应的Chunk ID的数组----\x3eMaster节点根据偏移量找到对应的chunk ID----\x3eMaster节点将Chunk ID和存在哪个chunk服务器告诉客户端-----\x3e客户端找到最近的Chunk服务器副本----\x3eChunk服务器副本根据客服端从Master那问的Chunk ID找到对应的文件发给客户端")]),r._v(" "),a("h3",{attrs:{id:"_6-gfs写文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-gfs写文件"}},[r._v("#")]),r._v(" 6. GFS写文件")]),r._v(" "),a("p",[r._v("对于写文件，客户端会向Master节点发送请求说：我想向这个文件名对应的文件追加数据，请告诉我文件中最后一个Chunk的位置。当有多个客户端同时写同一个文件时，每个客户端并不能知道文件究竟有多长。这个时候，客户端可以向Master节点查询哪个Chunk服务器保存了文件的最后一个Chunk。")]),r._v(" "),a("p",[r._v("对于读文件来说，可以从任何最新的Chunk副本读取数据，但是对于写文件来说，必须要通过Chunk的主副本（Primary Chunk）来写入。对于某个特定的Chunk来说，在某一个时间点，Master不一定指定了Chunk的主副本。所以，写文件的时候，需要考虑Chunk的主副本不存在的情况。")]),r._v(" "),a("p",[r._v("对于Master节点来说，如果发现Chunk的主副本不存在，Master会找出所有存有Chunk最新副本的Chunk服务器。第一步是，找出新的Chunk副本。这一切都是在Master节点发生，因为，现在是客户端告诉Master节点说要追加某个文件，Master节点需要告诉客户端向哪个Chunk服务器（也就是Primary Chunk所在的服务器）去做追加操作。所以，Master节点的部分工作就是弄清楚在追加文件时，客户端应该与哪个Chunk服务器通信。每个Chunk可能同时有多个副本，最新的副本是指，副本中保存的版本号与Master中记录的Chunk的版本号一致。Chunk副本中的版本号是由Master节点下发的，所以Master节点知道，对于一个特定的Chunk，哪个版本号是最新的。这就是为什么Chunk的版本号在Master节点上需要保存在磁盘这种非易失的存储中的原因。")]),r._v(" "),a("p",[r._v("所以当客户端想要对文件进行追加，但是又不知道文件尾的Chunk对应的Primary在哪时，Master会等所有存储了最新Chunk版本的服务器集合完成，然后挑选一个作为Primary，其他的作为Secondary。之后，Master会增加版本号，并将版本号写入磁盘，这样就算故障了也不会丢失这个数据。")]),r._v(" "),a("p",[r._v("接下来，Master节点会向Primary和Secondary副本对应的服务器发送消息并告诉它们，谁是Primary，谁是Secondary，Chunk的新版本是什么。Primary和Secondary服务器都会将版本号存储在本地的磁盘中。这样，当它们因为电源故障或者其他原因重启时，它们可以向Master报告本地保存的Chunk的实际版本号。")]),r._v(" "),a("p",[r._v("总结一下"),a("strong",[r._v("写操作")]),r._v("的"),a("strong",[r._v("流程")]),r._v("就是：我想以追加的方式写数据----\x3e需要查哪个chunk服务器存了最后一个chunk----\x3e找主副本----\x3e主副本不一定存在----\x3e如果主副本不存在----\x3e找到存有最新版本号的那些副本-----\x3e选取一个作为主副本----\x3e在主副本上进行写操作")]),r._v(" "),a("p",[r._v("之所以要管理Chunk的版本号，是因为这样Master可以将实际更新Chunk的能力转移给Primary服务器。并且在将版本号更新到Primary和Secondary服务器之后，如果Master节点故障重启，还是可以在相同的Primary和Secondary服务器上继续更新Chunk。现在，Master节点通知Primary和Secondary服务器，你们可以修改这个Chunk。它还给Primary一个租约，这个租约告诉Primary说，在接下来的60秒中，你将是Primary，60秒之后你必须停止成为Primary。这种机制可以确保我们不会同时有两个Primary。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(462),alt:"img"}})]),r._v(" "),a("p",[r._v("图二，假设现在Master节点告诉客户端谁是Primary，谁是Secondary，GFS提出了一种聪明的方法来实现写请求的执行序列。客户端会将要追加的数据发送给Primary和Secondary服务器，这些服务器会将数据写入到一个临时位置。所以最开始，这些数据不会追加到文件中。当所有的服务器都返回确认消息说，已经有了要追加的数据，客户端会向Primary服务器发送一条消息说，你和所有的Secondary服务器都有了要追加的数据，现在我想将这个数据追加到这个文件中。Primary服务器或许会从大量客户端收到大量的并发请求，Primary服务器会以某种顺序，一次只执行一个请求。对于每个客户端的追加数据请求（也就是写请求），Primary会查看当前文件结尾的Chunk，并确保Chunk中有足够的剩余空间，然后将客户端要追加的数据写入Chunk的末尾。并且，Primary会通知所有的Secondary服务器也将客户端要追加的数据写入在它们自己存储的Chunk末尾。这样，包括Primary在内的所有副本，都会收到通知将数据追加在Chunk的末尾。")]),r._v(" "),a("p",[r._v("但是对于Secondary服务器来说，它们可能可以执行成功，也可能会执行失败，比如说磁盘空间不足，比如说故障了，比如说Primary发出的消息网络丢包了。如果Secondary实际真的将数据写入到了本地磁盘存储的Chunk中，它会回复“yes”给Primary。如果所有的Secondary服务器都成功将数据写入，并将“yes”回复给了Primary，并且Primary也收到了这些回复。Primary会向客户端返回写入成功。如果至少一个Secondary服务器没有回复Primary，或者回复了，但是内容却是：抱歉，一些不好的事情发生了，比如说磁盘空间不够，或者磁盘故障了，Primary会向客户端返回写入失败。")]),r._v(" "),a("p",[r._v("GFS论文说，如果客户端从Primary得到写入失败，那么客户端应该重新发起整个追加过程。客户端首先会重新与Master交互，找到文件末尾的Chunk；之后，客户端需要重新发起对于Primary和Secondary的数据追加操作。")]),r._v(" "),a("h3",{attrs:{id:"_7-gfs的一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-gfs的一致性"}},[r._v("#")]),r._v(" 7. GFS的一致性")]),r._v(" "),a("p",[r._v("当我们追加数据时，面对Chunk的三个副本，当客户端发送了一个追加数据的请求，要将数据A追加到文件末尾，所有的三个副本，包括一个Primary和两个Secondary，都成功的将数据追加到了Chunk，所以Chunk中的第一个记录是A。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(463),alt:"img"}})]),r._v(" "),a("p",[r._v("假设第二个客户端加入进来，想要追加数据B，但是由于网络问题发送给某个副本的消息丢失了。所以，追加数据B的消息只被两个副本收到，一个是Primary，一个是Secondary。这两个副本都在文件中追加了数据B，所以，现在我们有两个副本有数据B，另一个没有。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(464),alt:"img"}})]),r._v(" "),a("p",[r._v("之后，第三个客户端想要追加数据C，并且第三个客户端记得下图中左边第一个副本是Primary。Primary选择了偏移量，并将偏移量告诉Secondary，将数据C写在Chunk的这个位置。三个副本都将数据C写在这个位置。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(465),alt:"img"}})]),r._v(" "),a("p",[r._v("对于数据B来说，客户端会收到写入失败的回复，客户端会重发写入数据B的请求。所以，客户端会再次请求追加数据B，或许这次数据没有在网络中丢包，并且所有的三个副本都成功追加了数据B。现在三个副本都在线，并且都有最新的版本号。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(466),alt:"img"}})]),r._v(" "),a("p",[r._v("之后，如果一个客户端读文件，读到的内容取决于读取的是Chunk的哪个副本。客户端总共可以看到三条数据，但是取决于不同的副本，读取数据的顺序是不一样的。如果读取的是第一个副本，那么客户端可以读到A、B、C，然后是一个重复的B。如果读取的是第三个副本，那么客户端可以读到A，一个空白数据，然后是C、B。所以，如果读取前两个副本，B和C的顺序是先B后C，如果读的是第三个副本，B和C的顺序是先C后B。所以，不同的读请求可能得到不同的结果。")]),r._v(" "),a("p",[a("img",{attrs:{src:e(467),alt:"img"}})]),r._v(" "),a("p",[r._v("或许最坏的情况是，一些客户端写文件时，因为其中一个Secondary未能成功执行数据追加操作，客户端从Primary收到写入失败的回复。在客户端重新发送写文件请求之前，客户端就故障了。所以，你有可能进入这种情形：数据D出现在某些副本中，而其他副本则完全没有。")]),r._v(" "),a("p",[r._v("综上在GFS的这种工作方式下，如果Primary返回写入成功，那么一切都还好，如果Primary返回写入失败，就不是那么好了。Primary返回写入失败会导致不同的副本有完全不同的数据。")]),r._v(" "),a("p",[r._v("GFS这样设计的理由是足够的简单，但是同时也给应用程序暴露了一些奇怪的数据。这里希望为应用程序提供一个相对简单的写入接口，但应用程序需要容忍读取数据的乱序。如果应用程序不能容忍乱序，应用程序要么可以通过在文件中写入序列号，这样读取的时候能自己识别顺序，要么如果应用程序对顺序真的非常敏感那么对于特定的文件不要并发写入。例如，对于电影文件，你不会想要将数据弄乱，当你将电影写入文件时，你可以只用一个客户端连续顺序而不是并发的将数据追加到文件中。")]),r._v(" "),a("p",[r._v("如何将这里的设计转变成强一致的系统，从而与我们前面介绍的单服务器模型更接近，也不会产生一些给人“惊喜”的结果。目前还不清楚如何将GFS转变成强一致的设计。但是，如果你想要将GFS升级成强一致系统，我可以为你列举一些你需要考虑的事情：")]),r._v(" "),a("ul",[a("li",[r._v("你可能需要让Primary来探测重复的请求，这样第二个写入数据B的请求到达时，Primary就知道，我们之前看到过这个请求，可能执行了也可能没执行成功。Primay要尝试确保B不会在文件中出现两次。所以首先需要的是探测重复的能力。")]),r._v(" "),a("li",[r._v("对于Secondary来说，如果Primay要求Secondary执行一个操作，Secondary必须要执行而不是只返回一个错误给Primary。对于一个严格一致的系统来说，是不允许Secondary忽略Primary的请求而没有任何补偿措施的。所以我认为，Secondary需要接受请求并执行它们。如果Secondary有一些永久性故障，例如磁盘被错误的拔出了，你需要有一种机制将Secondary从系统中移除，这样Primary可以与剩下的Secondary继续工作。但是GFS没有做到这一点，或者说至少没有做对。")]),r._v(" "),a("li",[r._v("当Primary要求Secondary追加数据时，直到Primary确信所有的Secondary都能执行数据追加之前，Secondary必须小心不要将数据暴露给读请求。所以对于写请求，你或许需要多个阶段。在第一个阶段，Primary向Secondary发请求，要求其执行某个操作，并等待Secondary回复说能否完成该操作，这时Secondary并不实际执行操作。在第二个阶段，如果所有Secondary都回复说可以执行该操作，这时Primary才会说，好的，所有Secondary执行刚刚你们回复可以执行的那个操作。这是现实世界中很多强一致系统的工作方式，这被称为"),a("strong",[r._v("两阶段提交")]),r._v("（Two-phase commit）。")]),r._v(" "),a("li",[r._v("另一个问题是，当Primary崩溃时，可能有一组操作由Primary发送给Secondary，Primary在确认所有的Secondary收到了请求之前就崩溃了。当一个Primary崩溃了，一个Secondary会接任成为新的Primary，但是这时，新Primary和剩下的Secondary会在最后几个操作有分歧，因为部分副本并没有收到前一个Primary崩溃前发出的请求。所以，新的Primary上任时，需要显式的与Secondary进行同步，以确保操作历史的结尾是相同的。")]),r._v(" "),a("li",[r._v("最后，时不时的，Secondary之间可能会有差异，或者客户端从Master节点获取的是稍微过时的Secondary。系统要么需要将所有的读请求都发送给Primary，因为只有Primary知道哪些操作实际发生了，要么对于Secondary需要一个租约系统，就像Primary一样，这样就知道Secondary在哪些时间可以合法的响应客户端。")])]),r._v(" "),a("p",[r._v("为了实现强一致，以上就是需要在系统中修复的东西，它们增加了系统的复杂度，增加了系统内部组件的交互。在lab2，3中需要建立一个强一致系统，完成上面的东西。")]),r._v(" "),a("p",[r._v("总的来说，它取得了巨大的成功，许多许多Google的应用都使用了它，许多Google的基础架构，例如BigTable和MapReduce是构建在GFS之上，所以GFS在Google内部广泛被应用。它最严重的局限可能在于，它只有一个Master节点，会带来以下问题：")]),r._v(" "),a("ul",[a("li",[r._v("Master节点必须为每个文件，每个Chunk维护表单，随着GFS的应用越来越多，这意味着涉及的文件也越来越多，最终Master会耗尽内存来存储文件表单。你可以增加内存，但是单台计算机的内存也是有上限的。所以，这是人们遇到的最早的问题。")]),r._v(" "),a("li",[r._v("除此之外，单个Master节点要承载数千个客户端的请求，而Master节点的CPU每秒只能处理数百个请求，尤其Master还需要将部分数据写入磁盘，很快，客户端数量超过了单个Master的能力。")]),r._v(" "),a("li",[r._v("另一个问题是，应用程序发现很难处理GFS奇怪的语义")]),r._v(" "),a("li",[r._v("最后一个问题是，从我们读到的GFS论文中，Master节点的故障切换不是自动的。GFS需要人工干预来处理已经永久故障的Master节点，并更换新的服务器，这可能需要几十分钟甚至更长的而时间来处理。对于某些应用程序来说，这个时间太长了。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);