export const xml_2 = `<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                          xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
                          xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                          xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                          xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram"
                          targetNamespace="http://bpmn.io/schema/bpmn"
                          xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
                          <bpmn2:process id="Process_1" name="Accept" isExecutable="false">
        <bpmn2:task id="Activity_1mfjbld" name="Statistician: Add Dashboards">
            <bpmn2:incoming>Flow_1d3cg1h</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0ueakro</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:task id="Activity_0dg75qd" name="Reviewer 1">
            <bpmn2:incoming>Flow_0ueakro</bpmn2:incoming>
            <bpmn2:outgoing>Flow_11d34r7</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0ueakro" sourceRef="Activity_1mfjbld"
            targetRef="Activity_0dg75qd" />
        <bpmn2:exclusiveGateway id="Gateway_0fviexo" name="Data Review">
            <bpmn2:incoming>Flow_11d34r7</bpmn2:incoming>
            <bpmn2:incoming>Flow_105e81l</bpmn2:incoming>
            <bpmn2:incoming>Flow_0xpfxkd</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0osy0sw</bpmn2:outgoing>
            <bpmn2:outgoing>Flow_1ww7ox6</bpmn2:outgoing>
        </bpmn2:exclusiveGateway>
        <bpmn2:sequenceFlow id="Flow_11d34r7" sourceRef="Activity_0dg75qd"
            targetRef="Gateway_0fviexo" />
        <bpmn2:task id="Activity_0pdstfh" name="Reviewer 1: Reject DSD">
            <bpmn2:incoming>Flow_0osy0sw</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1d3cg1h</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0osy0sw" name="Reject" sourceRef="Gateway_0fviexo"
            targetRef="Activity_0pdstfh" />
        <bpmn2:sequenceFlow id="Flow_1d3cg1h" name="Request Modification "
            sourceRef="Activity_0pdstfh" targetRef="Activity_1mfjbld" />
        <bpmn2:task id="Activity_121ugy6" name="Reviewer 1: Accept DSD">
            <bpmn2:incoming>Flow_1ww7ox6</bpmn2:incoming>
            <bpmn2:outgoing>Flow_07i5p83</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1ww7ox6" name="Accept" sourceRef="Gateway_0fviexo"
            targetRef="Activity_121ugy6" />
        <bpmn2:task id="Activity_0nj2ivl" name="Reviewer 2">
            <bpmn2:incoming>Flow_07i5p83</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0boy1na</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_07i5p83" sourceRef="Activity_121ugy6"
            targetRef="Activity_0nj2ivl" />
        <bpmn2:exclusiveGateway id="Gateway_1b9w7ep" name="Data Review">
            <bpmn2:incoming>Flow_0boy1na</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0j89tux</bpmn2:outgoing>
            <bpmn2:outgoing>Flow_1v97efv</bpmn2:outgoing>
        </bpmn2:exclusiveGateway>
        <bpmn2:sequenceFlow id="Flow_0boy1na" sourceRef="Activity_0nj2ivl"
            targetRef="Gateway_1b9w7ep" />
        <bpmn2:task id="Activity_0hkw9aa" name="Reviewer 2: Reject DSD">
            <bpmn2:incoming>Flow_0j89tux</bpmn2:incoming>
            <bpmn2:outgoing>Flow_105e81l</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_105e81l" name="Request Modification"
            sourceRef="Activity_0hkw9aa" targetRef="Gateway_0fviexo" />
        <bpmn2:sequenceFlow id="Flow_0j89tux" name="Reject" sourceRef="Gateway_1b9w7ep"
            targetRef="Activity_0hkw9aa" />
        <bpmn2:task id="Activity_04k6y0r" name="Reviewer 2: Accept DSD">
            <bpmn2:incoming>Flow_1v97efv</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1sk0ksg</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1v97efv" name="Accept" sourceRef="Gateway_1b9w7ep"
            targetRef="Activity_04k6y0r" />
        <bpmn2:task id="Activity_0vukw50" name="Subject Manger">
            <bpmn2:incoming>Flow_1sk0ksg</bpmn2:incoming>
            <bpmn2:outgoing>Flow_19i3ulf</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1sk0ksg" sourceRef="Activity_04k6y0r"
            targetRef="Activity_0vukw50" />
        <bpmn2:exclusiveGateway id="Gateway_1qn6ll4" name="Data Review">
            <bpmn2:incoming>Flow_19i3ulf</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0svea2c</bpmn2:outgoing>
            <bpmn2:outgoing>Flow_0w5pyar</bpmn2:outgoing>
        </bpmn2:exclusiveGateway>
        <bpmn2:sequenceFlow id="Flow_19i3ulf" sourceRef="Activity_0vukw50"
            targetRef="Gateway_1qn6ll4" />
        <bpmn2:task id="Activity_0o9x7r5" name="Subject Manager: Accept DSD">
            <bpmn2:incoming>Flow_0svea2c</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0j5r8w7</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0svea2c" name="Accept" sourceRef="Gateway_1qn6ll4"
            targetRef="Activity_0o9x7r5" />
        <bpmn2:task id="Activity_123q71m" name="Subject Manager: Publish DSD">
            <bpmn2:incoming>Flow_0j5r8w7</bpmn2:incoming>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0j5r8w7" sourceRef="Activity_0o9x7r5"
            targetRef="Activity_123q71m" />
        <bpmn2:task id="Activity_1g5wnee" name="Subject Manager: Reject DSD">
            <bpmn2:incoming>Flow_0w5pyar</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0xpfxkd</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0xpfxkd" name="Request Modification"
            sourceRef="Activity_1g5wnee" targetRef="Gateway_0fviexo" />
        <bpmn2:sequenceFlow id="Flow_0w5pyar" name="Reject" sourceRef="Gateway_1qn6ll4"
            targetRef="Activity_1g5wnee" />
                          </bpmn2:process>
                          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
            <bpmndi:BPMNShape id="Activity_1mfjbld_di" bpmnElement="Activity_1mfjbld">
                <dc:Bounds x="810" y="10" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0dg75qd_di" bpmnElement="Activity_0dg75qd">
                <dc:Bounds x="650" y="120" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_0fviexo_di" bpmnElement="Gateway_0fviexo"
                isMarkerVisible="true">
                <dc:Bounds x="505" y="235" width="50" height="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="498" y="295" width="64" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0pdstfh_di" bpmnElement="Activity_0pdstfh">
                <dc:Bounds x="230" y="340" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_121ugy6_di" bpmnElement="Activity_121ugy6">
                <dc:Bounds x="890" y="220" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0nj2ivl_di" bpmnElement="Activity_0nj2ivl">
                <dc:Bounds x="890" y="420" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_1b9w7ep_di" bpmnElement="Gateway_1b9w7ep"
                isMarkerVisible="true">
                <dc:Bounds x="915" y="565" width="50" height="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="908" y="625" width="64" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0hkw9aa_di" bpmnElement="Activity_0hkw9aa">
                <dc:Bounds x="780" y="710" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_04k6y0r_di" bpmnElement="Activity_04k6y0r">
                <dc:Bounds x="1250" y="550" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0vukw50_di" bpmnElement="Activity_0vukw50">
                <dc:Bounds x="1250" y="710" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_1qn6ll4_di" bpmnElement="Gateway_1qn6ll4"
                isMarkerVisible="true">
                <dc:Bounds x="1275" y="865" width="50" height="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="1278" y="923" width="64" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0o9x7r5_di" bpmnElement="Activity_0o9x7r5">
                <dc:Bounds x="1580" y="850" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_123q71m_di" bpmnElement="Activity_123q71m">
                <dc:Bounds x="1580" y="1040" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1g5wnee_di" bpmnElement="Activity_1g5wnee">
                <dc:Bounds x="960" y="980" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="Flow_0ueakro_di" bpmnElement="Flow_0ueakro">
                <di:waypoint x="860" y="90" />
                <di:waypoint x="860" y="160" />
                <di:waypoint x="750" y="160" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_11d34r7_di" bpmnElement="Flow_11d34r7">
                <di:waypoint x="650" y="160" />
                <di:waypoint x="530" y="160" />
                <di:waypoint x="530" y="235" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0osy0sw_di" bpmnElement="Flow_0osy0sw">
                <di:waypoint x="505" y="260" />
                <di:waypoint x="280" y="260" />
                <di:waypoint x="280" y="340" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="376" y="242" width="33" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1d3cg1h_di" bpmnElement="Flow_1d3cg1h">
                <di:waypoint x="230" y="380" />
                <di:waypoint x="130" y="380" />
                <di:waypoint x="130" y="50" />
                <di:waypoint x="810" y="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="440" y="20" width="59" height="40" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1ww7ox6_di" bpmnElement="Flow_1ww7ox6">
                <di:waypoint x="555" y="260" />
                <di:waypoint x="890" y="260" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="706" y="242" width="34" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_07i5p83_di" bpmnElement="Flow_07i5p83">
                <di:waypoint x="940" y="300" />
                <di:waypoint x="940" y="420" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0boy1na_di" bpmnElement="Flow_0boy1na">
                <di:waypoint x="940" y="500" />
                <di:waypoint x="940" y="565" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_105e81l_di" bpmnElement="Flow_105e81l">
                <di:waypoint x="780" y="750" />
                <di:waypoint x="530" y="750" />
                <di:waypoint x="530" y="285" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="540" y="579" width="59" height="27" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0j89tux_di" bpmnElement="Flow_0j89tux">
                <di:waypoint x="915" y="590" />
                <di:waypoint x="830" y="590" />
                <di:waypoint x="830" y="710" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="856" y="572" width="33" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1v97efv_di" bpmnElement="Flow_1v97efv">
                <di:waypoint x="965" y="590" />
                <di:waypoint x="1250" y="590" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="1091" y="572" width="34" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1sk0ksg_di" bpmnElement="Flow_1sk0ksg">
                <di:waypoint x="1300" y="630" />
                <di:waypoint x="1300" y="710" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_19i3ulf_di" bpmnElement="Flow_19i3ulf">
                <di:waypoint x="1300" y="790" />
                <di:waypoint x="1300" y="865" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0svea2c_di" bpmnElement="Flow_0svea2c">
                <di:waypoint x="1325" y="890" />
                <di:waypoint x="1580" y="890" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="1436" y="872" width="34" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0j5r8w7_di" bpmnElement="Flow_0j5r8w7">
                <di:waypoint x="1630" y="930" />
                <di:waypoint x="1630" y="1040" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0xpfxkd_di" bpmnElement="Flow_0xpfxkd">
                <di:waypoint x="960" y="1020" />
                <di:waypoint x="393" y="1020" />
                <di:waypoint x="393" y="260" />
                <di:waypoint x="505" y="260" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="400" y="746" width="59" height="27" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0w5pyar_di" bpmnElement="Flow_0w5pyar">
                <di:waypoint x="1275" y="890" />
                <di:waypoint x="1170" y="890" />
                <di:waypoint x="1170" y="1020" />
                <di:waypoint x="1060" y="1020" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="1133" y="952" width="33" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
                          </bpmndi:BPMNDiagram>
                      </bpmn2:definitions>
                     `