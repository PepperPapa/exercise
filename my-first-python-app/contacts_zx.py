#! version 1.0
# Filename: contacts_cmd.py

import pickle
import os

# 定义好友类
class Person():
    def __init__(self, name, age, email, relationship):
        self.name = name
        self.age = age
        self.email = email
        self.relationship = relationship

    def info(self):
        print('%s: %s  %s  %s' % \
              (self.name, self.age, self.email, self.relationship))

# 首先从存储数据文件读出通信录信息，如果为空则新建
contacts = {}
datafile = 'data.pickle'
if os.path.exists(datafile):
    f = open(datafile, 'rb')
    if os.path.getsize(datafile) > 0:  # 文件不为空时才加载到变量contacts中，否则会报错
        contacts = pickle.load(f)
        f.close
        print('加载通信录......')

# 等待用户命令输出并执行相应的操作
while True:
    si = input('请输入(输入help获取帮助)-->')
    cmd = si.split(' ')
    if cmd[0] == 'add': #添加
        p = Person(cmd[1], cmd[2], cmd[3], cmd[4])
        contacts[cmd[1]] = p
        contacts[cmd[1]].info()
    elif cmd[0] == 'del':  #删除
        del contacts[cmd[1]]
    elif cmd[0] == 'mod':  #修改
        p = Person(cmd[1], cmd[2], cmd[3], cmd[4])
        contacts[cmd[1]] = p
        contacts[cmd[1]].info()
    elif cmd[0] == 'find': #查找
        try:
            if cmd[1] == 'all':
                for k in contacts:
                    contacts[k].info()
            else:
                contacts[cmd[1]].info()
        except:
            print('命令不支持！')
    elif si == 'help':
        print('''
        add name age email reationship ---添加好友到通信录
        del name  ---删除好友记录
        find name ---查找好友信息
        find all  ---查询所有好友信息
        mod name age email reationship ---更新好友信息
        ''')
    elif si == 'exit':
        break

f = open(datafile, 'wb')
pickle.dump(contacts, f)
f.close

# 没有下面句这段代码，下次重启程序通信录数据文件就是空的，不知道原因
f = open(datafile,'rb')
#del contacts
#contacts = pickle.load(f)
#f.close

# 提示用户程序已退出
print('已退出通信录')
